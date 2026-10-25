/* GatitoMath fraction workbench. Exact natural-number arithmetic; no expression parser or network. */
window.GatitoFractionCopilot=(()=>{
 'use strict';
 const LIMIT=30,HISTORY_LIMIT=256;
 const esc=x=>String(x).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
 const gcd=(a,b)=>{while(b){const r=a%b;a=b;b=r;}return a;};
 class FractionError extends Error{constructor(message,field){super(message);this.name='FractionError';this.field=field;}}
 function natural(raw,field,{positive=false}={}){
  const label={n:'Il numeratore',d:'Il denominatore',factor:'Il divisore'}[field]||'Il numero';
  if(typeof raw==='number'&&!Number.isSafeInteger(raw))throw new FractionError('Inserisci il numero come testo di cifre intere per conservarne il valore esatto.',field);
  const text=String(raw??'').trim();
  if(!text)throw new FractionError(label+' è vuoto.',field);
  if(/^[-−]/.test(text))throw new FractionError(label+' deve essere un numero naturale: qui lavoriamo senza numeri negativi.',field);
  if(!/^\d+$/.test(text))throw new FractionError(label+' deve contenere soltanto cifre intere, senza virgole, punti o operazioni.',field);
  if(text.length>LIMIT)throw new FractionError('Puoi inserire fino a '+LIMIT+' cifre per numero.',field);
  const n=BigInt(text);
  if(positive&&n===0n)throw new FractionError(field==='d'?'Il denominatore non può essere zero.':'Non si può dividere per zero.',field);
  return n;
 }
 const pair=(n,d)=>Object.freeze({n:String(n),d:String(d)});
 const seal=model=>Object.freeze({initial:model.initial,steps:Object.freeze(model.steps.map(step=>Object.freeze(step)))});
 function parseFraction(n,d){return pair(natural(n,'n'),natural(d,'d',{positive:true}));}
 const same=(a,b)=>a.n===b.n&&a.d===b.d;
 class Workbench{
  constructor(n='18',d='24'){
   this.model=seal({initial:parseFraction(n,d),steps:[]});this.past=[];this.future=[];this.listeners=new Set();
  }
  get current(){return this.model.steps.at(-1)?.after||this.model.initial;}
  get commonDivisor(){return String(gcd(BigInt(this.current.n),BigInt(this.current.d)));}
  get reduced(){return this.commonDivisor==='1';}
  get canUndo(){return this.past.length>0;}
  get canRedo(){return this.future.length>0;}
  subscribe(fn){this.listeners.add(fn);return()=>this.listeners.delete(fn);}
  emit(){for(const fn of this.listeners)fn();}
  commit(model){this.past.push(this.model);if(this.past.length>HISTORY_LIMIT)this.past.shift();this.model=seal(model);this.future=[];this.emit();}
  load(n,d){const next=parseFraction(n,d);if(!this.model.steps.length&&same(next,this.model.initial))return false;this.commit({initial:next,steps:[]});return true;}
  divide(raw){
   const k=natural(raw,'factor',{positive:true});if(k===1n)throw new FractionError('Dividere per 1 non cambia la frazione. Scegli un divisore maggiore di 1.','factor');
   const {n,d}=this.current,a=BigInt(n),b=BigInt(d);
   if(a%k!==0n||b%k!==0n){
    const which=a%k!==0n&&b%k!==0n?'né '+n+' né '+d:a%k!==0n?n:d;
    throw new FractionError('Il divisore '+k+' non divide esattamente '+which+'. Il passaggio non è stato applicato.','factor');
   }
   const step={before:pair(a,b),divisor:String(k),after:pair(a/k,b/k)};
   this.commit({initial:this.model.initial,steps:[...this.model.steps,step]});return step;
  }
  reduce(){if(this.reduced)return null;return this.divide(this.commonDivisor);}
  undo(){if(!this.canUndo)return false;this.future.push(this.model);this.model=this.past.pop();this.emit();return true;}
  redo(){if(!this.canRedo)return false;this.past.push(this.model);this.model=this.future.pop();this.emit();return true;}
  restart(){if(!this.model.steps.length)return false;this.commit({initial:this.model.initial,steps:[]});return true;}
  snapshot(){return JSON.parse(JSON.stringify(this.model));}
 }
 const sessions=new Map();let uid=0;
 const fraction=(n,d,extra='')=>`<span class="fc-fraction ${extra}" role="math" aria-label="${esc(n)} fratto ${esc(d)}"><span aria-hidden="true">${esc(n)}</span><span aria-hidden="true">${esc(d)}</span></span>`;
 const mathCopy=text=>esc(text).replace(/(\d+)\/(\d+)/g,(_,n,d)=>fraction(n,d));
 function validateQuery(params){try{return parseFraction(params.get('n')||'18',params.get('d')||'24');}catch{return pair(18,24);}}
 function mount(parent,{sessionKey,initial={n:'18',d:'24'},example=null,embedded=false,wide=false}={}){
  if(window.GatitoMathNotebook)return window.GatitoMathNotebook.mount(parent,{sessionKey,liveEntry:true,comparison:{fractions:[],free:true,selectionOnly:true}});
  let model;
  try{model=sessionKey&&sessions.get(sessionKey)||new Workbench(initial.n,initial.d);}catch{model=new Workbench();}
  if(sessionKey)sessions.set(sessionKey,model);
  const id='fc-'+(++uid),host=document.createElement('section');host.className='fc-workbench';host.dataset.embedded=String(embedded);host.setAttribute('aria-label','Copilota: banco operativo delle frazioni');parent.append(host);
  const view={draft:{...model.current,factor:''},active:'n',keypad:false,editorOpen:!embedded||wide,message:'',tone:'info',invalid:null,expanded:false,dialog:null,alive:true};
  const say=(message,tone='info',field=null)=>{view.message=message;view.tone=tone;view.invalid=field;};
  const focus=(field,select=false)=>{const input=host.querySelector(`[data-fc-field="${field}"]`);if(input){input.focus({preventScroll:true});if(select)input.select();}};
  const focusAction=action=>{let b=host.querySelector(`[data-fc-action="${action}"]`);if(!b||b.disabled)b=host.querySelector('[data-fc-action="undo"]:not(:disabled),[data-fc-action="redo"]:not(:disabled)');b?.focus({preventScroll:true});};
  function render(){
   const current=model.current,initial=model.model.initial,reduced=model.reduced,steps=model.model.steps,long=Math.max(current.n.length,current.d.length)>18;
   const heading=embedded?'h4':'h2',subheading=embedded?'h5':'h3';
   const naturalNumber=current.d==='1'?`<span class="fc-natural">= ${esc(current.n)}</span>`:'';
   host.classList.toggle('fc-wide',!embedded||wide||view.expanded);
   host.innerHTML=`<header class="fc-header"><div><span class="fc-eyebrow">Copilota · Frazioni</span><${heading}>Il banco operativo</${heading}></div>${embedded?`<button type="button" class="fc-icon-button" data-fc-action="expand" aria-label="${view.expanded?'Riduci il banco nella lezione':'Espandi il banco delle frazioni'}">${view.expanded?'↙ Riduci':'↗ Espandi'}</button>`:''}</header>${example?`<div class="fc-context"><span>Esempio della card</span><button type="button" class="fc-example" data-fc-action="example">Carica ${fraction(example.n,example.d)}</button></div>`:''}
    <div class="fc-body"><details class="fc-entry-wrap" ${view.editorOpen?'open':''}><summary>Inserisci o modifica la frazione</summary><form class="fc-composer" data-fc-form="load" novalidate><${subheading}>Componi la frazione</${subheading}><div class="fc-editor"><label for="${id}-n">Numeratore</label><input id="${id}-n" data-fc-field="n" class="${view.active==='n'?'fc-active-field':''}" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" maxlength="${LIMIT+1}" value="${esc(view.draft.n)}" aria-invalid="${view.invalid==='n'}" aria-describedby="${id}-entry-note ${id}-message"><span class="fc-editor-line" aria-hidden="true"></span><input id="${id}-d" data-fc-field="d" class="${view.active==='d'?'fc-active-field':''}" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" maxlength="${LIMIT+1}" value="${esc(view.draft.d)}" aria-invalid="${view.invalid==='d'}" aria-describedby="${id}-entry-note ${id}-message"><label for="${id}-d">Denominatore</label></div><p id="${id}-entry-note" class="fc-muted">Numeri naturali. Il denominatore deve essere diverso da zero.</p><button type="submit" class="fc-primary">Carica frazione</button>
    <details class="fc-keypad-wrap" ${view.keypad?'open':''}><summary>Tastierino</summary><p class="fc-keypad-target">Scrivi nel campo: <strong data-fc-keypad-target>${{n:'Numeratore',d:'Denominatore',factor:'Divisore'}[view.active]}</strong></p><div class="fc-keypad" role="group" aria-label="Tastierino numerico">${['7','8','9','4','5','6','1','2','3','clear','0','backspace'].map(k=>`<button type="button" data-fc-key="${k}" ${k==='clear'?'aria-label="Svuota il campo selezionato"':k==='backspace'?'aria-label="Cancella l’ultima cifra"':''}>${k==='clear'?'C':k==='backspace'?'⌫':k}</button>`).join('')}</div><button type="button" class="fc-next-field" data-fc-action="next-field">Passa al campo successivo ↓</button></details></form></details>
    <div class="fc-desk"><div class="fc-result-head"><span>Frazione sul banco</span><span class="fc-badge ${reduced?'fc-badge-done':''}">${reduced?'Ai minimi termini':'Da semplificare'}</span></div><div class="fc-value ${long?'fc-value-long':''}" aria-live="off">${fraction(current.n,current.d)}${naturalNumber}</div><form class="fc-divide" data-fc-form="divide" novalidate><label for="${id}-factor">Dividi numeratore e denominatore per</label><div><input id="${id}-factor" data-fc-field="factor" class="${view.active==='factor'?'fc-active-field':''}" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" maxlength="${LIMIT+1}" value="${esc(view.draft.factor)}" placeholder="es. 2" aria-invalid="${view.invalid==='factor'}" aria-describedby="${id}-message"><button type="submit" class="fc-primary">Applica ÷</button></div></form><button type="button" class="fc-reduce" data-fc-action="reduce" ${reduced?'disabled':''}>Riduci ai minimi termini</button>
    <div id="${id}-message" class="fc-message fc-message-${view.tone}" role="status" aria-live="polite" aria-atomic="true">${mathCopy(view.message||(reduced?'La frazione è già ai minimi termini.':'Scegli tu il divisore oppure riduci in un solo passaggio.'))}</div><nav class="fc-history-controls" aria-label="Gestione dei passaggi"><button type="button" data-fc-action="undo" ${model.canUndo?'':'disabled'}>↶ Annulla</button><button type="button" data-fc-action="redo" ${model.canRedo?'':'disabled'}>↷ Ripristina</button><button type="button" data-fc-action="restart" ${steps.length?'':'disabled'}>Riparti</button></nav></div></div>
    <section class="fc-history" aria-label="Cronologia delle frazioni equivalenti"><div class="fc-history-heading"><${subheading}>Il tuo percorso</${subheading}><span>${steps.length} ${steps.length===1?'passaggio':'passaggi'}</span></div><ol class="fc-timeline"><li class="fc-start"><span class="fc-step-label">Partenza</span>${fraction(initial.n,initial.d)}</li>${steps.map((s,i)=>`<li class="fc-step"><span class="fc-step-label">${i+1} · ÷ ${esc(s.divisor)}</span><div class="fc-transformation">${fraction(s.before.n+' ÷ '+s.divisor,s.before.d+' ÷ '+s.divisor)}<span aria-label="uguale a">=</span>${fraction(s.after.n,s.after.d)}</div></li>`).join('')}</ol></section>`;
   const timeline=host.querySelector('.fc-timeline');if(steps.length)timeline.scrollTop=timeline.scrollHeight;
  }
  function sync(){view.draft.n=model.current.n;view.draft.d=model.current.d;render();}
  const unsubscribe=model.subscribe(sync);
  function operate(action){
   try{
    view.invalid=null;let result;
    if(action==='load'){result=model.load(view.draft.n,view.draft.d);say(result?'Frazione caricata. Le trasformazioni precedenti si possono recuperare con Annulla.':'Questa frazione è già sul banco.');if(embedded&&!view.expanded&&!wide)view.editorOpen=false;}
    if(action==='divide'){
     result=model.divide(view.draft.factor);say(`Divisi entrambi i termini per ${result.divisor}: ${result.before.n}/${result.before.d} = ${result.after.n}/${result.after.d}.`+(model.reduced?' La frazione è ai minimi termini.':''),'success');view.draft.factor='';
    }
    if(action==='reduce'){
     result=model.reduce();say(result?`Entrambi i termini sono stati divisi per ${result.divisor}: ${result.after.n}/${result.after.d}. La frazione è ai minimi termini.`:'La frazione è già ai minimi termini.','success');view.draft.factor='';
    }
    if(action==='undo'){result=model.undo();say(result?'Ultima operazione annullata.':'Non ci sono operazioni da annullare.');}
    if(action==='redo'){result=model.redo();say(result?'Operazione ripristinata.':'Non ci sono operazioni da ripristinare.');}
    if(action==='restart'){result=model.restart();say(result?'Sei tornato alla frazione di partenza. Puoi annullare anche questo comando.':'Sei già alla frazione di partenza.');}
    if(action==='example'){model.load(example.n,example.d);say('Esempio caricato: '+example.n+'/'+example.d+'.');}
    render();if(action==='load')focus('factor');else if(action==='divide')focus('factor');else focusAction(action==='example'?'example':action);
   }catch(error){if(!(error instanceof FractionError))throw error;say(error.message,'error',error.field);render();focus(error.field,true);}
  }
  function expand(){
   if(view.expanded){view.dialog.close();return;}
   const dialog=document.createElement('dialog');dialog.className='fc-dialog';dialog.setAttribute('aria-label','Copilota frazioni a schermo intero');document.body.append(dialog);view.dialog=dialog;view.expanded=true;view.editorOpen=true;dialog.append(host);render();
   dialog.addEventListener('close',()=>{if(view.alive){parent.append(host);view.expanded=false;view.editorOpen=wide;view.dialog=null;render();focusAction('expand');}dialog.remove();},{once:true});
   dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
   dialog.showModal();focusAction('expand');
  }
  const onSubmit=e=>{const form=e.target.closest('[data-fc-form]');if(!form)return;e.preventDefault();operate(form.dataset.fcForm);};
  const onInput=e=>{const f=e.target.dataset.fcField;if(f){view.draft[f]=e.target.value;view.invalid=null;e.target.setAttribute('aria-invalid','false');}};
  const onFocus=e=>{const f=e.target.dataset.fcField;if(!f)return;view.active=f;host.querySelectorAll('[data-fc-field]').forEach(x=>x.classList.toggle('fc-active-field',x.dataset.fcField===f));const t=host.querySelector('[data-fc-keypad-target]');if(t)t.textContent={n:'Numeratore',d:'Denominatore',factor:'Divisore'}[f];};
  const onPointer=e=>{if(e.target.closest('[data-fc-key]'))e.preventDefault();};
  const onClick=e=>{
   const action=e.target.closest('[data-fc-action]');if(action){const name=action.dataset.fcAction;if(name==='expand')expand();else if(name==='next-field')focus({n:'d',d:'factor',factor:'n'}[view.active]);else operate(name);return;}
   const key=e.target.closest('[data-fc-key]');if(!key)return;const input=host.querySelector(`[data-fc-field="${view.active}"]`),text=input.value,start=input.selectionStart??text.length,end=input.selectionEnd??start,k=key.dataset.fcKey;
   let next,pos;
   if(k==='clear'){next='';pos=0;}else if(k==='backspace'){const from=start===end?Math.max(0,start-1):start;next=text.slice(0,from)+text.slice(end);pos=from;}else{if(text.length-(end-start)>=LIMIT+1)return;next=text.slice(0,start)+k+text.slice(end);pos=start+1;}
   input.value=next;view.draft[view.active]=next;view.invalid=null;input.setAttribute('aria-invalid','false');input.focus({preventScroll:true});input.setSelectionRange(pos,pos);
  };
  const onToggle=e=>{if(e.target.matches('.fc-keypad-wrap'))view.keypad=e.target.open;if(e.target.matches('.fc-entry-wrap'))view.editorOpen=e.target.open;};
  const onKey=e=>{
   if(!(e.ctrlKey||e.metaKey)||e.altKey||e.target.closest('input,textarea'))return;
   if(e.key.toLowerCase()==='z'){e.preventDefault();operate(e.shiftKey?'redo':'undo');}
   if(e.key.toLowerCase()==='y'){e.preventDefault();operate('redo');}
  };
  host.addEventListener('submit',onSubmit);host.addEventListener('input',onInput);host.addEventListener('focusin',onFocus);host.addEventListener('click',onClick);host.addEventListener('pointerdown',onPointer);host.addEventListener('toggle',onToggle,true);host.addEventListener('keydown',onKey);render();
  return {model,dispose(){view.alive=false;unsubscribe();view.dialog?.close();view.dialog?.remove();host.remove();},load(n,d){return model.load(n,d);}};
 }
 function bootstrap(){const target=document.querySelector('[data-fraction-copilot]');if(!target)return;const initial=validateQuery(new URLSearchParams(location.search));mount(target,{initial});}
 if(typeof document!=='undefined'){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bootstrap,{once:true});else bootstrap();}
 return {mount,Workbench,FractionError,math:{gcd,natural,parseFraction},limits:{digits:LIMIT,history:HISTORY_LIMIT}};
})();

