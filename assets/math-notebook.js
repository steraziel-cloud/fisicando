/* Structured arithmetic notebook: learner-written steps, exact validation, no eval. */
window.GatitoMathNotebook=(()=>{
 'use strict';
 let serial=0;const id=()=> 'nb'+(++serial),copy=x=>JSON.parse(JSON.stringify(x));
 const esc=x=>String(x).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
 const num=(value='')=>({type:'number',id:id(),value,marks:[]});
 const seq=()=>({type:'sequence',id:id(),items:[num()]});
 const frac=()=>({type:'fraction',id:id(),top:seq(),bottom:seq()});
 const gcd=(a,b)=>{a=a<0n?-a:a;while(b){[a,b]=[b,a%b];}return a;};
 function rat(n,d=1n){if(!d)throw Error('Il denominatore o il divisore non può essere zero.');if(d<0n){n=-n;d=-d;}const g=gcd(n,d);n/=g;d/=g;if(String(n).length>600||String(d).length>600)throw Error('Questa espressione è troppo grande per il quaderno.');return{n,d};}
 function evaluate(s){
  let p=0;const a=s.items;
  function atom(){const t=a[p++];if(!t)throw Error('Completa l’espressione.');if(t.type==='number'){if(!/^\d{1,30}$/.test(t.value))throw Error('Completa tutte le caselle con numeri naturali (fino a 30 cifre).');return rat(BigInt(t.value));}if(t.type==='fraction'){const x=evaluate(t.top),y=evaluate(t.bottom);return rat(x.n*y.d,x.d*y.n);}if(t.type==='operator'&&t.value==='('){const v=sum();if(a[p++]?.value!==')')throw Error('Chiudi la parentesi.');return v;}if(t.type==='operator'&&['+','−'].includes(t.value)){const v=atom();return rat(t.value==='−'?-v.n:v.n,v.d);}throw Error('Controlla l’ordine dei numeri e delle operazioni.');}
  function product(){let x=atom();while(['·','÷'].includes(a[p]?.value)){const op=a[p++].value,y=atom();x=op==='·'?rat(x.n*y.n,x.d*y.d):rat(x.n*y.d,x.d*y.n);}return x;}
  function sum(){let x=product();while(['+','−'].includes(a[p]?.value)){const op=a[p++].value,y=product();x=rat(x.n*y.d+(op==='+'?1n:-1n)*y.n*x.d,x.d*y.d);}return x;}
  const v=sum();if(p!==a.length)throw Error('Inserisci un’operazione fra i termini e controlla le parentesi.');return v;
 }
 function find(root,key,parent=null){if(root.id===key)return{node:root,parent};if(root.type==='sequence'){for(const n of root.items){const r=find(n,key,root);if(r)return r;}}if(root.type==='fraction')return find(root.top,key,root)||find(root.bottom,key,root);return null;}
 function first(root){if(root.type==='number')return root;if(root.type==='fraction')return first(root.top);if(root.type==='sequence'){for(const x of root.items){const n=first(x);if(n)return n;}}return null;}
 function simple(f){return f?.type==='fraction'&&f.top.items.length===1&&f.bottom.items.length===1&&f.top.items[0].type==='number'&&f.bottom.items[0].type==='number'&&/^\d{1,30}$/.test(f.top.items[0].value)&&/^\d{1,30}$/.test(f.bottom.items[0].value)&&BigInt(f.bottom.items[0].value)!==0n;}
 function leaves(n){return n.type==='sequence'?n.items.flatMap(leaves):n.type==='fraction'?[...leaves(n.top),...leaves(n.bottom)]:[n.id];}
 function selectionRoots(rows,keys){const selected=new Set(keys),out=[];function visit(n){if(selected.has(n.id)||(n.type==='fraction'&&leaves(n).every(k=>selected.has(k)))){out.push(n.id);return;}if(n.type==='sequence')n.items.forEach(visit);if(n.type==='fraction'){visit(n.top);visit(n.bottom);}}rows.forEach(visit);return out;}
 class Notebook{
  constructor(){this.rows=[];this.past=[];this.future=[];this.pending=null;}
  save(before){this.past.push(copy(before));if(this.past.length>100)this.past.shift();this.future=[];}
  add(expression){evaluate(expression);const before=copy(this.rows);this.rows.push(copy(expression));this.save(before);}
  locate(key){for(const row of this.rows){const r=find(row,key);if(r)return r;}return null;}
  fractionFor(key){const r=this.locate(key);if(!r)return null;if(r.node.type==='fraction')return r.node;if(r.node.type==='number'&&r.parent?.type==='sequence'){const p=this.locate(r.parent.id)?.parent;return p?.type==='fraction'?p:null;}return null;}
  erase(keys){
   if(this.pending)return false;const selected=new Set(selectionRoots(this.rows,keys));if(!selected.size)return false;const before=copy(this.rows);
   function remove(s,root=false){s.items=s.items.filter(n=>!selected.has(n.id));for(const n of s.items)if(n.type==='fraction'){remove(n.top);remove(n.bottom);}if(!s.items.length&&!root)s.items.push(num());}
   this.rows.forEach(r=>remove(r,true));this.rows=this.rows.filter(r=>r.items.length);this.save(before);return true;
  }
  fill(key,value){const r=this.locate(key);if(!r||r.node.type!=='number'||r.node.value!=='')throw Error('Seleziona una casella vuota.');if(!/^\d{1,30}$/.test(value))throw Error('Inserisci un numero naturale, fino a 30 cifre.');const f=this.fractionFor(key);if(f?.bottom.id===r.parent.id&&r.parent.items.length===1&&BigInt(value)===0n)throw Error('Il denominatore non può essere zero.');const before=copy(this.rows);r.node.value=String(BigInt(value));r.node.marks=[];this.save(before);}
  begin(key,raw){const f=this.fractionFor(key);if(!simple(f))throw Error('Per ora possiamo semplificare una frazione con un numero naturale in ciascun termine.');if(!/^\d{1,30}$/.test(raw))throw Error('Scrivi un divisore naturale maggiore di 1.');const k=BigInt(raw),n=BigInt(f.top.items[0].value),d=BigInt(f.bottom.items[0].value);if(k<=1n)throw Error('Scegli un divisore maggiore di 1.');if(n%k||d%k)throw Error('Questo numero non divide esattamente entrambi i termini. Prova un altro divisore.');this.pending={fraction:f.id,k:String(k),side:'top',before:copy(this.rows)};}
  answer(raw){const p=this.pending;if(!p)throw Error('Scegli prima un divisore comune.');if(!/^\d{1,30}$/.test(raw))throw Error('Scrivi tu il quoziente nella casella.');const f=this.locate(p.fraction).node,n=f[p.side].items[0];if(BigInt(raw)!==BigInt(n.value)/BigInt(p.k))throw Error('Il quoziente non torna. Riprova la divisione: il numero sul quaderno resta invariato.');n.marks.push({before:n.value,divisor:p.k});n.value=String(BigInt(raw));if(p.side==='top'){p.side='bottom';return false;}this.save(p.before);this.pending=null;return true;}
  cancel(){if(this.pending){this.rows=this.pending.before;this.pending=null;}}
  undo(){if(this.pending){this.cancel();return;}if(this.past.length){this.future.push(copy(this.rows));this.rows=this.past.pop();}}
  redo(){if(this.pending)return;if(this.future.length){this.past.push(copy(this.rows));this.rows=this.future.pop();}}
 }
 const sessions=new Map();
 function mount(parent,{sessionKey}={}){
  const model=sessionKey&&sessions.get(sessionKey)||new Notebook();if(sessionKey)sessions.set(sessionKey,model);
  const host=document.createElement('section');host.className='nb-notebook';host.setAttribute('aria-label','Quaderno di prova');parent.append(host);
  const v={draft:null,active:null,selected:null,dividing:false,message:'',error:false,selection:[],filling:null,drag:null,suppressClick:false},formId=id();
  host.tabIndex=0;
  const selected=key=>v.selection.includes(key);
  function clearSelection(){v.selection=[];v.selected=null;v.filling=null;v.dividing=false;v.message='';}
  function select(keys){v.selection=selectionRoots(model.rows,keys);v.selected=v.selection[0]||null;v.dividing=false;v.filling=null;v.message='';render();host.focus({preventScroll:true});}
  function selectedFraction(){if(v.selection.length!==1)return null;return model.fractionFor(v.selection[0]);}
  const button=(a,label,extra='')=>`<button type="button" data-nb-action="${a}" ${extra}>${label}</button>`;
  function draftHTML(s,label='Espressione'){
   return `<span class="nb-sequence">${s.items.map(t=>t.type==='number'?`<input class="nb-slot ${v.active===t.id?'nb-active':''}" data-nb-slot="${t.id}" aria-label="${label}" inputmode="numeric" autocomplete="off" maxlength="30" value="${esc(t.value)}" style="--nb-digits:${Math.max(2,t.value.length+1)}" placeholder="□">`:t.type==='operator'?`<span class="nb-operator">${esc(t.value)}</span>`:`<span class="nb-fraction nb-draft-fraction"><span>${draftHTML(t.top,'Numeratore')}</span><span>${draftHTML(t.bottom,'Denominatore')}</span></span>`).join('')}</span>`;
  }
  function numberHTML(t){
   const p=model.pending,f=p&&model.locate(p.fraction).node,isPending=f&&f[p.side].items[0].id===t.id;
   const marks=t.marks.map(m=>`<span class="nb-crossed" title="Diviso per ${esc(m.divisor)}">${esc(m.before)}</span>`).join('');
   if(isPending)return `<span class="nb-number nb-pending-number">${marks}<span class="nb-crossed">${esc(t.value)}</span><input id="${formId}-q" form="${formId}" name="quotient" class="nb-inline-answer" aria-label="Quoziente del ${p.side==='top'?'numeratore':'denominatore'}" inputmode="numeric" autocomplete="off" maxlength="30" placeholder="?" required></span>`;
   return `<button type="button" class="nb-number nb-pick ${selected(t.id)?'nb-selected':''}" data-nb-select="${t.id}" aria-label="${t.value?'Seleziona il numero '+esc(t.value):'Completa la casella'}" ${!t.value?'data-nb-empty="true"':''}>${marks}<span class="nb-written">${esc(t.value)||'□'}</span></button>`;
  }
  function paperHTML(s){
   return `<span class="nb-sequence">${s.items.map(t=>t.type==='operator'?`<button type="button" class="nb-operator nb-pick ${selected(t.id)?'nb-selected':''}" data-nb-select="${t.id}" aria-label="Seleziona ${esc(t.value)}">${esc(t.value)}</button>`:t.type==='fraction'?`<span class="nb-fraction nb-pick ${selected(t.id)?'nb-selected':''}" data-nb-select="${t.id}" role="button" tabindex="0" aria-label="Seleziona tutta la frazione"><span>${paperHTML(t.top)}</span><span>${paperHTML(t.bottom)}</span></span>`:numberHTML(t)).join('')}</span>`;
  }
  function context(){
   if(model.pending){const p=model.pending,f=model.locate(p.fraction).node,n=f[p.side].items[0];return `<form id="${formId}" data-nb-form="answer" class="nb-context nb-action-strip"><label for="${formId}-q">${p.side==='top'?'Numeratore':'Denominatore'}: ${esc(n.value)} ÷ ${esc(p.k)} = ?</label><button type="submit">Scrivi il quoziente</button>${button('cancel-step','Annulla il passaggio')}</form>`;}
   if(v.filling)return `<form data-nb-form="fill" class="nb-context nb-action-strip"><label for="${formId}-fill">Completa la casella</label><input id="${formId}-fill" name="value" aria-label="Numero da inserire" inputmode="numeric" maxlength="30" required><button type="submit">Scrivi</button></form>`;
   if(!v.selection.length)return '';
   if(v.dividing)return `<form data-nb-form="divisor" class="nb-context nb-action-strip"><label for="${formId}-divisor">Divisore comune</label><input id="${formId}-divisor" name="divisor" aria-label="Divisore comune" inputmode="numeric" autocomplete="off" maxlength="30" placeholder="?" required><button type="submit">Inizia</button></form>`;
   const f=selectedFraction();return `<div class="nb-context nb-selection-tools" role="toolbar" aria-label="Azioni sulla selezione">${simple(f)?button('simplify','Semplifica'):''}${button('delete','⌫','aria-label="Elimina selezione" title="Elimina selezione (Canc o Backspace)"')}</div>`;
  }
  function positionContext(){
   const toolbar=host.querySelector('.nb-context'),paper=host.querySelector('.nb-paper');if(!toolbar||!paper)return;
   const keys=model.pending?[model.pending.fraction]:v.filling?[v.filling]:v.selection;
   const rects=keys.map(key=>host.querySelector(`[data-nb-select="${key}"]`)?.getBoundingClientRect()).filter(Boolean);if(!rects.length)return;
   const anchor={left:Math.min(...rects.map(r=>r.left)),right:Math.max(...rects.map(r=>r.right)),top:Math.min(...rects.map(r=>r.top)),bottom:Math.max(...rects.map(r=>r.bottom))},p=paper.getBoundingClientRect(),t=toolbar.getBoundingClientRect();
   let x=anchor.right-p.left+12,y=anchor.top-p.top;if(x+t.width>p.width-10){x=anchor.left-p.left;y=anchor.bottom-p.top+12;}
   x=Math.max(8,Math.min(x,p.width-t.width-8));if(y+t.height>p.height-8&&anchor.top-p.top>t.height+12)y=anchor.top-p.top-t.height-12;
   toolbar.style.left=(x+paper.scrollLeft)+'px';toolbar.style.top=(Math.max(8,y)+paper.scrollTop)+'px';
  }
  function render(){
   host.innerHTML=`<div class="nb-topbar">${!v.draft&&!model.pending?button('insert','＋ Inserisci','class="nb-insert"'):''}${model.rows.length||model.past.length||model.future.length?`<div class="nb-tools">${button('undo','↶','aria-label="Annulla" '+(!model.past.length&&!model.pending?'disabled':''))}${button('redo','↷','aria-label="Ripristina" '+(!model.future.length||model.pending?'disabled':''))}</div>`:''}</div><div class="nb-paper" aria-label="Pagina del quaderno">${model.rows.map((row,i)=>`<div class="nb-row" aria-label="Espressione ${i+1}">${paperHTML(row)}</div>`).join('')}${v.draft?`<div class="nb-composer" aria-label="Inserisci un’espressione"><div class="nb-draft">${draftHTML(v.draft)}</div><div class="nb-keypad" role="group" aria-label="Tastierino matematico">${['7','8','9','+','4','5','6','−','1','2','3','·','0','(',')','÷'].map(k=>button('key',k,`data-nb-key="${k}"`)).join('')}${button('fraction','<span class="nb-key-frac"><span>□</span><span>□</span></span>','aria-label="Inserisci frazione"')}${button('backspace','⌫','aria-label="Cancella"')}${button('next-slot','⇥','aria-label="Casella successiva"')}</div><div class="nb-composer-actions">${button('write','Scrivi sul quaderno','class="nb-primary"')}${button('cancel-draft','Annulla')}</div></div>`:''}${context()}<div class="nb-message ${v.error?'nb-error':''}" role="status" aria-live="polite">${esc(v.message)}</div></div>`;
   if(v.draft){const input=host.querySelector(`[data-nb-slot="${v.active}"]`);input?.focus({preventScroll:true});if(input)input.setSelectionRange(input.value.length,input.value.length);}
   else if(model.pending)host.querySelector('[name="quotient"]')?.focus({preventScroll:true});
   else if(v.dividing)host.querySelector('[name="divisor"]')?.focus({preventScroll:true});
   else if(v.filling)host.querySelector('[name="value"]')?.focus({preventScroll:true});
   positionContext();
  }
  function message(text,error=false){v.message=text;v.error=error;const m=host.querySelector('.nb-message');if(m){m.textContent=text;m.classList.toggle('nb-error',error);}}
  function active(){return find(v.draft,v.active);}
  function insertKey(k){
   const r=active();if(!r)return;
   if(/^\d$/.test(k)){const input=host.querySelector(`[data-nb-slot="${v.active}"]`),start=input?.selectionStart??r.node.value.length,end=input?.selectionEnd??start;if(r.node.value.length-(end-start)>=30)return;r.node.value=r.node.value.slice(0,start)+k+r.node.value.slice(end);render();const next=host.querySelector(`[data-nb-slot="${v.active}"]`);next?.setSelectionRange(start+1,start+1);return;}
   const a=r.parent.items,i=a.indexOf(r.node),op={type:'operator',id:id(),value:k};
   if(k==='('&&r.node.value===''){a.splice(i,1,op,num());v.active=a[i+1].id;}
   else if(k===')'){if(r.node.value==='')a.splice(i,1,op,num());else a.splice(i+1,0,op,num());v.active=a[a.indexOf(op)+1].id;}
   else{let at=i;if(r.node.value===''){if(i&&a[i-1].type==='operator'&&!['(',')'].includes(a[i-1].value)){a[i-1].value=k;render();return;}if(i===0){a.splice(0,0,op);render();return;}at=i-1;a.splice(i,1);}a.splice(at+1,0,op,num());v.active=a[at+2].id;}
   render();
  }
  // A closing parenthesis leaves a cursor slot; remove only that empty cursor before validation.
  function clean(s){s.items=s.items.filter((n,i,a)=>!(n.type==='number'&&!n.value&&i===a.length-1&&(a[i-1]?.value===')'||a[i-1]?.type==='fraction')));for(const n of s.items)if(n.type==='fraction'){clean(n.top);clean(n.bottom);}return s;}
  function act(action,key){
   if(action==='insert'){clearSelection();v.draft=seq();v.active=first(v.draft).id;}
   if(action==='key'){insertKey(key);return;}
   if(action==='fraction'){const r=active();if(r){const f=frac(),i=r.parent.items.indexOf(r.node);if(r.node.value!==''){message('Inserisci prima un’operazione oppure scegli una casella vuota.',true);return;}r.parent.items.splice(i,1,f,num());v.active=first(f).id;}}
   if(action==='backspace'){const r=active();if(r){if(r.node.value)r.node.value=r.node.value.slice(0,-1);else{const i=r.parent.items.indexOf(r.node);if(i>0){const prev=r.parent.items[i-1];if(prev.type==='operator'){r.parent.items.splice(i-1,2);if(!r.parent.items.length)r.parent.items.push(num());v.active=first(r.parent)?.id;}else{r.parent.items.splice(i-1,1);}}else{const owner=find(v.draft,r.parent.id)?.parent;if(owner?.type==='fraction'){const parent=find(v.draft,owner.id).parent,n=num();const at=parent.items.indexOf(owner),next=parent.items[at+1];parent.items.splice(at,next?.type==='number'&&!next.value?2:1,n);v.active=n.id;}}}}}
   if(action==='next-slot'){const inputs=[...host.querySelectorAll('[data-nb-slot]')],i=inputs.findIndex(x=>x.dataset.nbSlot===v.active);v.active=inputs[(i+1)%inputs.length]?.dataset.nbSlot;}
   if(action==='cancel-draft'){v.draft=null;v.message='';}
   if(action==='write'){try{const expression=clean(copy(v.draft));model.add(expression);v.draft=null;v.message='';}catch(e){message(e.message,true);return;}}
   if(action==='unselect')clearSelection();
   if(action==='delete'){model.erase(v.selection);clearSelection();}
   if(action==='simplify'){v.dividing=true;v.message='Scegli tu un numero che divida entrambi i termini.';}
   if(action==='cancel-step'){model.cancel();clearSelection();}
   if(action==='undo'||action==='redo'){model[action]();clearSelection();}
   v.error=false;render();
  }
  function click(e){
   if(v.suppressClick){const p=v.suppressClick;v.suppressClick=false;if(Date.now()<p.until&&Math.hypot(e.clientX-p.x,e.clientY-p.y)<4)return;}const b=e.target.closest('[data-nb-action]');if(b){act(b.dataset.nbAction,b.dataset.nbKey);return;}
   if(e.target.closest('.nb-context,input'))return;
   const pick=e.target.closest('[data-nb-select]');if(pick&&!v.draft&&!model.pending){if(pick.dataset.nbEmpty){v.filling=pick.dataset.nbSelect;v.selection=[v.filling];v.selected=v.filling;render();return;}const key=pick.dataset.nbSelect;select(e.shiftKey||e.ctrlKey||e.metaKey?v.selection.includes(key)?v.selection.filter(k=>k!==key):[...v.selection,key]:[key]);return;}
   if(!v.draft&&!model.pending&&v.selection.length){clearSelection();render();}
  }
  function submit(e){const form=e.target.closest('[data-nb-form]');if(!form)return;e.preventDefault();try{if(form.dataset.nbForm==='fill'){model.fill(v.filling,form.elements.value.value);clearSelection();}else if(form.dataset.nbForm==='divisor'){model.begin(v.selected,form.elements.divisor.value);v.dividing=false;v.message='Scrivi il quoziente del numeratore. Poi toccherà al denominatore.';}else{const done=model.answer(form.elements.quotient.value);v.message=done?'Passaggio completato. Puoi cercare un altro divisore comune.':'Ora dividi il denominatore per lo stesso divisore.';if(done){const f=model.fractionFor(v.selected);if(simple(f)&&gcd(BigInt(f.top.items[0].value),BigInt(f.bottom.items[0].value))===1n)v.message='Frazione ridotta ai minimi termini.';}}v.error=false;render();}catch(err){message(err.message,true);}}
  function input(e){const key=e.target.dataset.nbSlot;if(!key)return;const r=find(v.draft,key);r.node.value=e.target.value.replace(/[^0-9]/g,'').slice(0,30);e.target.value=r.node.value;e.target.style.setProperty('--nb-digits',Math.max(2,r.node.value.length+1));}
  function focus(e){if(e.target.dataset.nbSlot){v.active=e.target.dataset.nbSlot;host.querySelectorAll('[data-nb-slot]').forEach(x=>x.classList.toggle('nb-active',x===e.target));}}
  function keydown(e){
   if(!e.target.closest('input,textarea')){
    if(['Delete','Backspace'].includes(e.key)&&v.selection.length&&!model.pending&&!v.draft){e.preventDefault();act('delete');return;}
    if(e.key==='Escape'){e.preventDefault();if(model.pending)model.cancel();clearSelection();render();return;}
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();act(e.shiftKey?'redo':'undo');return;}
   }
   if(e.target.dataset.nbSelect&&['Enter',' '].includes(e.key)){e.preventDefault();e.target.click();return;}if(!e.target.dataset.nbSlot)return;const k={'-':'−','*':'·','/':'÷',':':'÷'}[e.key]||e.key;if(['+','−','·','÷','(',')'].includes(k)){e.preventDefault();insertKey(k);}if(e.key==='Enter'){e.preventDefault();act('write');}
  }
  function pointer(e){
   if(e.target.closest('.nb-keypad button')){e.preventDefault();return;}
   if(e.button!==0||v.draft||model.pending||e.target.closest('input,.nb-context,button:not([data-nb-select]),.nb-topbar')||!e.target.closest('.nb-paper'))return;
   e.preventDefault();v.drag={x:e.clientX,y:e.clientY,pointerId:e.pointerId,active:false,keys:[],base:e.shiftKey||e.ctrlKey||e.metaKey?[...v.selection]:[]};
  }
  function move(e){
   const d=v.drag;if(!d||e.pointerId!==d.pointerId)return;if(!d.active&&Math.hypot(e.clientX-d.x,e.clientY-d.y)<5)return;d.active=true;
   const rect={left:Math.min(d.x,e.clientX),right:Math.max(d.x,e.clientX),top:Math.min(d.y,e.clientY),bottom:Math.max(d.y,e.clientY)},paper=host.querySelector('.nb-paper'),p=paper.getBoundingClientRect();
   let marquee=paper.querySelector('.nb-marquee');if(!marquee){marquee=document.createElement('div');marquee.className='nb-marquee';paper.append(marquee);}
   Object.assign(marquee.style,{left:(rect.left-p.left+paper.scrollLeft)+'px',top:(rect.top-p.top+paper.scrollTop)+'px',width:(rect.right-rect.left)+'px',height:(rect.bottom-rect.top)+'px'});
   d.keys=[...host.querySelectorAll('.nb-row [data-nb-select]:not(.nb-fraction)')].filter(n=>{const r=n.getBoundingClientRect(),x=(r.left+r.right)/2,y=(r.top+r.bottom)/2;return x>=rect.left&&x<=rect.right&&y>=rect.top&&y<=rect.bottom;}).map(n=>n.dataset.nbSelect);
   const keys=selectionRoots(model.rows,[...d.base,...d.keys]);host.querySelectorAll('.nb-row [data-nb-select]').forEach(n=>n.classList.toggle('nb-selected',keys.includes(n.dataset.nbSelect)));host.querySelector('.nb-context')?.setAttribute('hidden','');
  }
  function up(e){const d=v.drag;if(!d||e.pointerId!==d.pointerId)return;v.drag=null;host.querySelector('.nb-marquee')?.remove();if(d.active){select([...d.base,...d.keys]);v.suppressClick={x:e.clientX,y:e.clientY,until:Date.now()+500};}}
  function outside(e){if(!host.contains(e.target)&&!model.pending&&!v.draft&&(v.selection.length||v.filling)){clearSelection();render();}}
  function cancelPointer(){v.drag=null;host.querySelector('.nb-marquee')?.remove();render();}
  host.addEventListener('click',click);host.addEventListener('submit',submit);host.addEventListener('input',input);host.addEventListener('focusin',focus);host.addEventListener('keydown',keydown);host.addEventListener('pointerdown',pointer);document.addEventListener('pointermove',move);document.addEventListener('pointerup',up);document.addEventListener('pointerdown',outside);window.addEventListener('resize',positionContext);host.addEventListener('scroll',positionContext,true);host.addEventListener('pointercancel',cancelPointer);render();
  return{model,dispose(){document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);document.removeEventListener('pointerdown',outside);window.removeEventListener('resize',positionContext);host.remove();}};
 }
 return{mount,Notebook,math:{evaluate,gcd},nodes:{num,seq,frac,find,selectionRoots}};
})();

