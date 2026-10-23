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
 function insertFraction(root,key){
  const r=find(root,key);if(!r||r.node.type!=='number'||r.parent?.type!=='sequence')return null;
  const f=frac(),filled=r.node.value!=='';f.top.items=[r.node];r.parent.items.splice(r.parent.items.indexOf(r.node),1,f);
  return filled?first(f.bottom).id:r.node.id;
 }
 function numberSlots(n){return n.type==='number'?[n.id]:n.type==='sequence'?n.items.flatMap(numberSlots):n.type==='fraction'?[...numberSlots(n.top),...numberSlots(n.bottom)]:[];}
 function nextSlot(root,key){
  const r=find(root,key),owner=r?.parent&&find(root,r.parent.id)?.parent;
  if(owner?.type==='fraction'&&r.parent===owner.bottom&&numberSlots(owner.bottom).at(-1)===key){
   const parent=find(root,owner.id).parent,index=parent.items.indexOf(owner);
   if(index===parent.items.length-1){const cursor=num();parent.items.push(cursor);return cursor.id;}
  }
  const slots=numberSlots(root),i=slots.indexOf(key);return slots[(i+1)%slots.length];
 }
 function arrowSlot(root,key,direction){
  const slots=numberSlots(root),i=slots.indexOf(key);if(i<0)return key;
  if(direction==='ArrowLeft')return slots[Math.max(0,i-1)];
  if(direction==='ArrowRight'){if(i+1<slots.length)return slots[i+1];const r=find(root,key),owner=r?.parent&&find(root,r.parent.id)?.parent;return owner?.type==='fraction'?nextSlot(root,key):key;}
  let node=find(root,key).node;
  while(node){const parent=find(root,node.id)?.parent;if(!parent)break;if(parent.type==='fraction'){const top=numberSlots(parent.top),bottom=numberSlots(parent.bottom),inTop=top.includes(key);if(direction==='ArrowDown'&&inTop)return bottom[Math.min(top.indexOf(key),bottom.length-1)];if(direction==='ArrowUp'&&!inTop)return top[Math.min(bottom.indexOf(key),top.length-1)];}node=parent;}
  return key;
 }
 function canSimplify(f){return simple(f)&&gcd(BigInt(f.top.items[0].value),BigInt(f.bottom.items[0].value))>1n;}
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
  beginEquivalent(key,raw){const f=this.fractionFor(key);if(!simple(f))throw Error('Seleziona una frazione con un numero naturale in ciascun termine.');if(!/^\d{1,30}$/.test(raw)||BigInt(raw)<=1n)throw Error('Scegli un moltiplicatore naturale maggiore di 1.');const k=BigInt(raw);if([f.top,f.bottom].some(s=>String(BigInt(s.items[0].value)*k).length>30))throw Error('Il prodotto supera le 30 cifre consentite.');this.pending={kind:'multiply',fraction:f.id,k:String(k),side:'top',answers:{},before:copy(this.rows)};}
  beginCommonDenominator(key,rawTarget,rawQuotient){const f=this.fractionFor(key);if(!simple(f))throw Error('Seleziona una frazione con un numero naturale in ciascun termine.');if(!/^\d{1,30}$/.test(rawTarget)||BigInt(rawTarget)<1n)throw Error('Scrivi un denominatore comune maggiore di zero.');const target=BigInt(rawTarget),d=BigInt(f.bottom.items[0].value);if(target%d)throw Error('Il denominatore scelto non è un multiplo del denominatore attuale.');if(!/^\d{1,30}$/.test(rawQuotient)||BigInt(rawQuotient)!==target/d)throw Error('Il quoziente non torna. Dividi il denominatore comune per quello attuale.');const k=target/d;if(String(BigInt(f.top.items[0].value)*k).length>30)throw Error('Il prodotto supera le 30 cifre consentite.');this.pending={kind:'multiply',fraction:f.id,k:String(k),side:'top',answers:{},targetDenominator:String(target),before:copy(this.rows)};}
  answer(raw){const p=this.pending;if(!p)throw Error('Scegli prima come trasformare la frazione.');const multiplying=p.kind==='multiply',word=multiplying?'prodotto':'quoziente';if(!/^\d{1,30}$/.test(raw))throw Error('Scrivi tu il '+word+' nella casella.');const f=this.locate(p.fraction).node,n=f[p.side].items[0],expected=multiplying?BigInt(n.value)*BigInt(p.k):BigInt(n.value)/BigInt(p.k);if(BigInt(raw)!==expected)throw Error('Il '+word+' non torna. Riprova: il numero sul quaderno resta invariato.');if(multiplying)p.answers[p.side]=String(BigInt(raw));else{n.marks.push({before:n.value,divisor:p.k});n.value=String(BigInt(raw));}if(p.side==='top'){if(multiplying&&p.targetDenominator)p.answers.bottom=p.targetDenominator;else{p.side='bottom';return false;}}if(multiplying){f.equivalentHistory||=[];f.equivalentHistory.push({top:copy(f.top),bottom:copy(f.bottom),factor:p.k});for(const side of ['top','bottom']){f[side].items[0].value=p.answers[side];f[side].items[0].marks=[];}}this.save(p.before);this.pending=null;return true;}
  cancel(){if(this.pending){this.rows=this.pending.before;this.pending=null;}}
  undo(){if(this.pending){this.cancel();return;}if(this.past.length){this.future.push(copy(this.rows));this.rows=this.past.pop();}}
  redo(){if(this.pending)return;if(this.future.length){this.past.push(copy(this.rows));this.rows=this.future.pop();}}
 }
 function completedReduction(row,pending=null){
  if(pending&&find(row,pending.fraction))return false;
  function ready(n){if(n.type==='fraction'){if(simple(n)&&n.top.items[0].marks.length&&n.bottom.items[0].marks.length&&gcd(BigInt(n.top.items[0].value),BigInt(n.bottom.items[0].value))===1n)return true;return ready(n.top)||ready(n.bottom);}return n.type==='sequence'&&n.items.some(ready);}
  if(!ready(row))return false;try{evaluate(row);return true;}catch{return false;}
 }
 function selectedDenominators(model,selection=[]){
  const keys=[...new Set(Array.isArray(selection)?selection:selection?[selection]:[])];if(keys.length<2)return[];
  const fractions=keys.map(key=>{const f=model.fractionFor(key);return simple(f)&&key===f.bottom.items[0].id?f:null;});
  return fractions.every(Boolean)&&new Set(fractions.map(f=>f.id)).size===keys.length?fractions:[];
 }
 function factorToolChoices(model,selection=[],comparison=false){if(selectedDenominators(model,selection).length>=2)return['mcm'];return comparison?[]:['mcd'];}
 function factorPlan(model,mode,selection=[]){
  const keys=Array.isArray(selection)?selection:selection?[selection]:[];
  let target,numbers;if(mode==='mcd'){
   const fractions=[];function collect(n){if(simple(n)){fractions.push(n);return;}if(n.type==='sequence')n.items.forEach(collect);else if(n.type==='fraction'){collect(n.top);collect(n.bottom);}}model.rows.forEach(collect);
   target=keys.length===1?model.fractionFor(keys[0]):!keys.length&&fractions.length===1?fractions[0]:null;if(!simple(target))throw Error('Seleziona la frazione di cui vuoi calcolare il MCD.');
   numbers=[target.top.items[0].value,target.bottom.items[0].value];
  }else{
   const fractions=selectedDenominators(model,keys);if(fractions.length<2)throw Error('Seleziona almeno due token dei denominatori per calcolare il mcm.');
   numbers=fractions.map(f=>f.bottom.items[0].value);
  }
  if(numbers.some(n=>BigInt(n)<=0n||BigInt(n)>999999999999n))throw Error('Questo strumento lavora con numeri maggiori di zero, fino a 12 cifre.');
  return{mode,numbers,fractionId:target?.id};
 }
 const sessions=new Map();
 function comparisonResult(model,pairs,relation){
  if(model.pending)throw Error('Completa prima la trasformazione in corso.');
  const fractions=model.rows.map(r=>r.items.length===1?r.items[0]:null);
  if(fractions.length!==2||!fractions.every(simple))throw Error('Mantieni le due frazioni della prova, una per riga.');
  fractions.forEach((f,i)=>{if(BigInt(f.top.items[0].value)*BigInt(pairs[i][1])!==BigInt(pairs[i][0])*BigInt(f.bottom.items[0].value))throw Error('Una frazione non è equivalente a quella di partenza. Controlla i termini.');});
  if(fractions[0].bottom.items[0].value!==fractions[1].bottom.items[0].value)throw Error('Prima riscrivi le due frazioni con lo stesso denominatore.');
  const a=BigInt(fractions[0].top.items[0].value),b=BigInt(fractions[1].top.items[0].value),expected=a<b?'<':a>b?'>':'=';
  if(!relation)throw Error('Scegli il simbolo del confronto.');if(relation!==expected)throw Error('Il denominatore è uguale: ricontrolla quale numeratore è maggiore.');return true;
 }
 function mount(parent,{sessionKey,comparison}={}){
  const model=sessionKey&&sessions.get(sessionKey)||new Notebook();if(sessionKey)sessions.set(sessionKey,model);
  if(comparison&&!model.initializedComparison){for(const pair of comparison.fractions){const row=seq(),f=frac();f.top.items[0].value=String(pair[0]);f.bottom.items[0].value=String(pair[1]);row.items=[f];model.add(row);}model.past=[];model.initializedComparison=true;}
  const host=document.createElement('section');host.className='nb-notebook';host.setAttribute('aria-label','Quaderno di prova');parent.append(host);
  const v={draft:null,active:null,selected:null,dividing:false,multiplying:false,relation:null,message:'',error:false,selection:[],filling:null,drag:null,suppressClick:false},formId=id();
  host.tabIndex=0;let factorTool=null,pressTimer=null;const factorNotes=[];const dock=window.GatitoNotebookDock.mount(host);
  const selected=key=>v.selection.includes(key);
  function clearSelection(){v.sheetMenu=null;v.selection=[];v.selected=null;v.filling=null;v.dividing=false;v.multiplying=false;v.helperDivisor='';v.equivalentTarget='';v.suggestedDenominator='';v.message='';}
  function select(keys){v.sheetMenu=null;v.selection=selectionRoots(model.rows,keys);v.selected=v.selection[0]||null;v.dividing=false;v.multiplying=false;v.filling=null;v.equivalentTarget='';v.suggestedDenominator='';v.message='';render();host.focus({preventScroll:true});}
  function selectedFraction(){if(v.selection.length!==1)return null;return model.fractionFor(v.selection[0]);}
  const button=(a,label,extra='')=>`<button type="button" data-nb-action="${a}" ${extra}>${label}</button>`;
  function draftHTML(s,label='Espressione'){
   return `<span class="nb-sequence">${s.items.map(t=>t.type==='number'?`<input class="nb-slot ${v.active===t.id?'nb-active':''}" data-nb-slot="${t.id}" aria-label="${label}" inputmode="numeric" autocomplete="off" maxlength="30" value="${esc(t.value)}" style="--nb-digits:${Math.max(2,t.value.length+1)}" placeholder="□">`:t.type==='operator'?`<span class="nb-operator">${esc(t.value)}</span>`:`<span class="nb-fraction nb-draft-fraction"><span>${draftHTML(t.top,'Numeratore')}</span><span>${draftHTML(t.bottom,'Denominatore')}</span></span>`).join('')}</span>`;
  }
  function numberHTML(t,side=''){
   const p=model.pending,f=p&&model.locate(p.fraction).node,isPending=f&&f[p.side].items[0].id===t.id,depth=t.marks.length+(isPending?1:0);
   if(p?.kind==='multiply'&&f&&[f.top.items[0].id,f.bottom.items[0].id].includes(t.id)){const part=f.top.items[0].id===t.id?'top':'bottom';if(part==='bottom'&&p.targetDenominator)return `<span class="nb-product-number">${esc(p.targetDenominator)}</span>`;return `<span class="nb-product-number">${esc(t.value)} <span class="nb-product-operation">· ${esc(p.k)} =</span> ${isPending?`<input class="nb-inline-product" id="${formId}-q" form="${formId}" name="quotient" aria-label="Prodotto del ${part==='top'?'numeratore':'denominatore'}" inputmode="numeric" autocomplete="off" maxlength="30" placeholder="?" required>`:p.answers[part]?esc(p.answers[part]):'<span class="nb-product-placeholder">□</span>'}</span>`;}
   const level=(i,classes='')=>`class="nb-level ${i?'nb-secondary ':''}${classes}" style="--nb-level:${i}"`;
   const marks=t.marks.map((m,i)=>`<span ${level(i,'nb-crossed')} title="Diviso per ${esc(m.divisor)}">${esc(m.before)}</span>`).join('');
   const layout=`nb-number nb-number-${side||'plain'}`;
   if(isPending)return `<span class="${layout} nb-pending-number" style="--nb-depth:${depth}">${marks}<span ${level(t.marks.length,'nb-crossed')}>${esc(t.value)}</span><input ${level(depth,'nb-inline-answer')} id="${formId}-q" form="${formId}" name="quotient" aria-label="Quoziente del ${p.side==='top'?'numeratore':'denominatore'}" inputmode="numeric" autocomplete="off" maxlength="30" placeholder="?" required></span>`;
   return `<button type="button" class="${layout} nb-pick ${selected(t.id)?'nb-selected':''}" style="--nb-depth:${depth}" data-nb-select="${t.id}" aria-label="${t.value?'Seleziona il numero '+esc(t.value):'Completa la casella'}" ${!t.value?'data-nb-empty="true"':''}>${marks}<span ${level(t.marks.length,'nb-written')}>${esc(t.value)||'□'}</span></button>`;
  }
  function paperHTML(s,side=''){
   return `<span class="nb-sequence">${s.items.map(t=>t.type==='operator'?`<button type="button" class="nb-operator nb-pick ${selected(t.id)?'nb-selected':''}" data-nb-select="${t.id}" aria-label="Seleziona ${esc(t.value)}">${esc(t.value)}</button>`:t.type==='fraction'?`${(t.equivalentHistory||[]).map(h=>`<span class="nb-fraction nb-history" role="math" aria-label="Frazione precedente, trasformata moltiplicando per ${esc(h.factor)}"><span>${historyNumber(h.top.items[0],'top')}</span><span>${historyNumber(h.bottom.items[0],'bottom')}</span></span><span class="nb-equals">=</span>`).join('')}<span class="nb-fraction nb-pick ${selected(t.id)?'nb-selected':''}" data-nb-select="${t.id}" role="button" tabindex="0" aria-label="Seleziona tutta la frazione"><span>${paperHTML(t.top,'top')}</span><span>${paperHTML(t.bottom,'bottom')}</span></span>`:numberHTML(t,side)).join('')}</span>`;
  }
  function historyNumber(t,side){return `<span class="nb-number nb-number-${side}" style="--nb-depth:${t.marks.length}">${t.marks.map((m,i)=>`<span class="nb-level ${i?'nb-secondary ':''}nb-crossed" style="--nb-level:${i}">${esc(m.before)}</span>`).join('')}<span class="nb-level ${t.marks.length?'nb-secondary ':''}nb-written" style="--nb-level:${t.marks.length}">${esc(t.value)}</span></span>`;}
  function cleanHTML(s){return `<span class="nb-sequence">${s.items.map(t=>t.type==='number'?`<span>${esc(t.value)||'□'}</span>`:t.type==='operator'?`<span class="nb-operator">${esc(t.value)}</span>`:`<span class="nb-fraction" role="math" aria-label="${simple(t)?esc(t.top.items[0].value)+' fratto '+esc(t.bottom.items[0].value):'frazione'}"><span>${cleanHTML(t.top)}</span><span>${cleanHTML(t.bottom)}</span></span>`).join('')}</span>`;}
  function context(){
   if(v.sheetMenu)return ''; 
   if(model.pending){const p=model.pending,f=model.locate(p.fraction).node,n=f[p.side].items[0],multiplying=p.kind==='multiply';return `<form id="${formId}" data-nb-form="answer" class="nb-context nb-action-strip"><label for="${formId}-q">${p.side==='top'?'Numeratore':'Denominatore'}: ${esc(n.value)} ${multiplying?'·':'÷'} ${esc(p.k)} = ?</label><button type="submit">Scrivi il ${multiplying?'prodotto':'quoziente'}</button>${button('cancel-step','Annulla il passaggio')}</form>`;}
   if(v.filling)return `<form data-nb-form="fill" class="nb-context nb-action-strip"><label for="${formId}-fill">Completa la casella</label><input id="${formId}-fill" name="value" aria-label="Numero da inserire" inputmode="numeric" maxlength="30" required><button type="submit">Scrivi</button></form>`;
   if(!v.selection.length)return '';
   if(v.dividing)return `<form data-nb-form="divisor" class="nb-context nb-action-strip"><label for="${formId}-divisor">Divisore comune</label><input id="${formId}-divisor" name="divisor" value="${esc(v.helperDivisor||'')}" aria-label="Divisore comune" inputmode="numeric" autocomplete="off" maxlength="30" placeholder="?" required><button type="submit">Inizia</button></form>`;
   if(v.multiplying){const f=selectedFraction(),d=f?.bottom.items[0].value;if(!v.equivalentTarget)return `<form data-nb-form="common-denominator" class="nb-context nb-action-strip"><label for="${formId}-common">Denominatore comune</label><input id="${formId}-common" name="commonDenominator" aria-label="Denominatore comune" inputmode="numeric" autocomplete="off" maxlength="30" value="${esc(v.suggestedDenominator||'')}" placeholder="?" required><button type="submit">Continua</button></form>`;return `<form data-nb-form="multiplier" class="nb-context nb-action-strip"><label for="${formId}-multiplier">${esc(v.equivalentTarget)} ÷ ${esc(d)} =</label><input id="${formId}-multiplier" name="multiplier" aria-label="Quoziente per il denominatore" inputmode="numeric" autocomplete="off" maxlength="30" placeholder="?" required><button type="submit">Verifica quoziente</button></form>`;}

   const f=selectedFraction();return `<div class="nb-context nb-selection-tools" role="toolbar" aria-label="Azioni sulla selezione">${canSimplify(f)?button('simplify','Semplifica'):''}${simple(f)&&!comparison&&window.GatitoNotebookFactorTools?button('factor-mcd','MCD','title="Calcola il MCD dei termini"'):''}${simple(f)&&comparison?button('equivalent','Frazione equivalente'):''}${button('delete','⌫','aria-label="Elimina selezione" title="Elimina selezione (Canc o Backspace)"')}</div>`;
  }
  function positionContext(){
   const toolbar=host.querySelector('.nb-context'),paper=host.querySelector('.nb-paper');if(!toolbar||!paper)return;
   const keys=model.pending?[model.pending.fraction]:v.filling?[v.filling]:v.selection;
   const rects=keys.map(key=>host.querySelector(`[data-nb-select="${key}"]`)?.getBoundingClientRect()).filter(Boolean);if(!rects.length)return;
   const anchor={left:Math.min(...rects.map(r=>r.left)),right:Math.max(...rects.map(r=>r.right)),top:Math.min(...rects.map(r=>r.top)),bottom:Math.max(...rects.map(r=>r.bottom))},p=paper.getBoundingClientRect(),t=toolbar.getBoundingClientRect();
   let x=anchor.right-p.left+12,y=anchor.top-p.top;if(x+t.width>p.width-10){x=anchor.left-p.left;y=anchor.bottom-p.top+12;}
   x=Math.max(8,Math.min(x,p.width-t.width-8));if(y+t.height>p.height-8&&anchor.top-p.top>t.height+12)y=anchor.top-p.top-t.height-12;
   for(const result of host.querySelectorAll('.nb-final-result')){const r=result.getBoundingClientRect();if(p.left+x<r.right&&p.left+x+t.width>r.left&&p.top+y<r.bottom&&p.top+y+t.height>r.top){const right=r.right-p.left+12;if(right+t.width<=p.width-8)x=right;else y=Math.max(anchor.bottom,r.bottom)-p.top+12;}}
   toolbar.style.left=(x+paper.scrollLeft)+'px';toolbar.style.top=(Math.max(8,y)+paper.scrollTop)+'px';
  }
  function composerHTML(){
   const key=k=>button('key',k,`data-nb-key="${k}"`);
   return `<div class="nb-composer nb-ink-entry" aria-label="Inserisci una frazione"><div class="nb-entry-line"><div class="nb-draft">${draftHTML(v.draft)}</div></div><div class="nb-keypad nb-writing-palette nb-fraction-palette" role="group" aria-label="Tastierino per le frazioni"><div class="nb-key-group"><span class="nb-key-group-name">Numeri</span><div class="nb-digit-keys">${['7','8','9','4','5','6','1','2','3','0'].map(key).join('')}</div></div><div class="nb-key-group nb-fraction-keys"><span class="nb-key-group-name">Frazione</span>${button('fraction','<span class="nb-key-frac"><span>□</span><span>□</span></span><span>Frazione</span>','class="nb-fraction-key" aria-label="Inserisci frazione"')} ${button('backspace','⌫','aria-label="Cancella" title="Cancella"')}</div><div class="nb-palette-actions">${button('write','✓ Conferma','class="nb-primary" aria-label="Scrivi sul quaderno"')}${button('cancel-draft','× Chiudi','aria-label="Annulla inserimento"')}</div></div></div>`;
  }
  function sheetMenuHTML(){if(!v.sheetMenu)return '';const f=selectedFraction(),modes=factorToolChoices(model,v.selection,!!comparison).filter(mode=>{try{factorPlan(model,mode,v.selection);return true;}catch{return false;}});return `<div class="nb-sheet-menu" role="menu" aria-label="Comandi del quaderno">${!v.selection.length?button('insert','Inserisci','role="menuitem"')+factorToolsHTML():''}${canSimplify(f)?button('simplify','Semplifica','role="menuitem"'):''}${simple(f)&&comparison?button('equivalent','Frazione equivalente','role="menuitem"'):''}${modes.map(mode=>button('factor-'+mode,mode==='mcm'?'Calcola mcm':'Calcola MCD','role="menuitem"')).join('')}</div>`;}
  function positionSheetMenu(){const menu=host.querySelector('.nb-sheet-menu'),paper=host.querySelector('.nb-paper');if(!menu||!paper)return;const r=menu.getBoundingClientRect(),p=paper.getBoundingClientRect();menu.style.left=Math.max(8,Math.min(v.sheetMenu.x,p.width-r.width-8))+'px';menu.style.top=Math.max(8,Math.min(v.sheetMenu.y,p.height-r.height-8))+'px';}
  function openSheetMenu(x,y,key){if(v.draft||model.pending||v.dividing||v.multiplying||v.filling)return;if(key&&!v.selection.includes(key)){v.selection=selectionRoots(model.rows,[key]);v.selected=v.selection[0]||null;}const p=host.querySelector('.nb-paper').getBoundingClientRect();v.sheetMenu={x:x-p.left,y:y-p.top};v.drag=null;v.message='';render();host.querySelector('.nb-sheet-menu button')?.focus({preventScroll:true});}
  function stopPress(){clearTimeout(pressTimer);pressTimer=null;v.press=null;}
  function contextmenu(e){if(!e.target.closest('.nb-paper')||e.target.closest('input,textarea,.nb-topbar,.nb-composer,.nb-context'))return;if(v.draft||model.pending)return;e.preventDefault();stopPress();openSheetMenu(e.clientX,e.clientY,e.target.closest('[data-nb-select]')?.dataset.nbSelect);}
  function doubleclick(e){if(e.button!==0||v.draft||model.pending||!e.target.closest('.nb-paper')||e.target.closest('.nb-row,.nb-composer,.nb-context,.nb-topbar,.nb-sheet-menu,input,button,summary'))return;e.preventDefault();stopPress();act('insert');}
  function factorToolsHTML(){const choices=factorToolChoices(model,v.selection,!!comparison);return `<details class="nb-factor-tools"><summary>Strumenti</summary><div>${choices.length?choices.map(mode=>button('factor-'+mode,mode==='mcm'?'Calcola mcm':'Calcola MCD')).join(''):'<span>Seleziona i token di almeno due denominatori.</span>'}</div></details>`;}
  function render(){
   host.innerHTML=`<div class="nb-paper" aria-label="Pagina del quaderno"><div class="nb-topbar">${!v.draft&&!model.pending?button('insert','＋ Inserisci','class="nb-insert"'):''}${model.rows.length||model.past.length||model.future.length?`<div class="nb-tools">${button('undo','↶','aria-label="Annulla" '+(!model.past.length&&!model.pending?'disabled':''))}${button('redo','↷','aria-label="Ripristina" '+(!model.future.length||model.pending?'disabled':''))}</div>`:''}</div>${model.rows.map((row,i)=>`<div class="nb-row" aria-label="Espressione ${i+1}">${paperHTML(row)}${completedReduction(row,model.pending)?`<span class="nb-final-result" aria-label="Risultato della riduzione"><span class="nb-equals">=</span>${cleanHTML(row)}</span>`:''}</div>`).join('')}${v.draft?composerHTML():''}${context()}${sheetMenuHTML()}${factorNotes.some(r=>!r.sourceIds?.length||r.sourceIds.every(k=>model.locate(k)?.node))?`<aside class="nb-factor-notes" aria-label="Risultati dagli strumenti">${factorNotes.filter(r=>!r.sourceIds?.length||r.sourceIds.every(k=>model.locate(k)?.node)).map(r=>`<div><strong>${esc(r.mode==='mcd'?'MCD':'mcm')}(${r.numbers.map(esc).join(', ')}) = ${esc(r.result)}</strong></div>`).join('')}</aside>`:''}<div class="nb-message ${v.error?'nb-error':''}" role="status" aria-live="polite">${esc(v.message)}</div></div>`;
   if(comparison){host.classList.add('nb-comparison');host.querySelectorAll('.nb-row').forEach((row,i)=>{const label=document.createElement('span');label.className='nb-comparison-label';label.textContent=i===0?'Prima frazione':i===1?'Seconda frazione':'Appunti';row.prepend(label);});host.insertAdjacentHTML('beforeend',`<div class="nb-comparison-answer" role="group" aria-label="Confronta le due frazioni"><span>La prima frazione è</span><div class="nb-relation-choices">${['<','=','>'].map(r=>button('relation',esc(r),`data-nb-key="${esc(r)}" aria-label="${r==='<'?'Minore di':r==='>'?'Maggiore di':'Uguale a'}" aria-pressed="${v.relation===r}"`)).join('')}</div><span>la seconda.</span>${button('check-comparison','Verifica confronto')}</div>`);}
   dock.sync();
   if(v.draft){const input=host.querySelector(`[data-nb-slot="${v.active}"]`);input?.focus({preventScroll:true});if(input)input.setSelectionRange(input.value.length,input.value.length);}
   else if(model.pending)host.querySelector('[name="quotient"]')?.focus({preventScroll:true});
   else if(v.dividing)host.querySelector('[name="divisor"]')?.focus({preventScroll:true});
   else if(v.multiplying)host.querySelector(v.equivalentTarget?'[name="multiplier"]':'[name="commonDenominator"]')?.focus({preventScroll:true});
   else if(v.filling)host.querySelector('[name="value"]')?.focus({preventScroll:true});
   positionContext();positionSheetMenu();
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
  function openFactorTool(mode){try{
   const plan=factorPlan(model,mode,v.selection);factorTool?.dispose();
   factorTool=window.GatitoNotebookFactorTools.open({...plan,onReturn(result){
    if(!factorNotes.some(r=>(!r.sourceIds?.length||r.sourceIds.every(k=>model.locate(k)?.node))&&r.mode===result.mode&&r.result===result.result&&r.numbers.join(',')===result.numbers.join(',')))factorNotes.push({...result,sourceIds:plan.fractionId?[plan.fractionId]:v.selection.map(k=>model.fractionFor(k)?.id).filter(Boolean)});
    clearSelection();v.error=false;
    const f=plan.fractionId&&model.fractionFor(plan.fractionId);
    if(result.mode==='mcd'&&f&&result.numbers.join(',')===plan.numbers.join(',')&&BigInt(result.result)>1n){v.selection=[f.id];v.selected=f.id;v.dividing=true;v.helperDivisor=result.result;v.message='';}
    else v.message=result.mode==='mcm'?'mcm riportato negli appunti. Ora costruisci le frazioni equivalenti con quel denominatore.':'MCD riportato negli appunti.';
    render();
   },onClose(){host.focus({preventScroll:true});}});
  }catch(e){message(e.message,true);}}
  function act(action,key){
   v.sheetMenu=null;stopPress();
   if(action==='factor-mcd'||action==='factor-mcm'){render();openFactorTool(action==='factor-mcd'?'mcd':'mcm');return;}
   if(action==='insert'){clearSelection();v.draft=seq();v.active=first(v.draft).id;}
   if(action==='key'){insertKey(key);return;}
   if(action==='fraction'){v.active=insertFraction(v.draft,v.active)||v.active;v.message='';}
   if(action==='backspace'){const r=active();if(r){if(r.node.value)r.node.value=r.node.value.slice(0,-1);else{const i=r.parent.items.indexOf(r.node);if(i>0){const prev=r.parent.items[i-1];if(prev.type==='operator'){r.parent.items.splice(i-1,2);if(!r.parent.items.length)r.parent.items.push(num());v.active=first(r.parent)?.id;}else{r.parent.items.splice(i-1,1);}}else{const owner=find(v.draft,r.parent.id)?.parent;if(owner?.type==='fraction'){const parent=find(v.draft,owner.id).parent,n=num();const at=parent.items.indexOf(owner),next=parent.items[at+1];parent.items.splice(at,next?.type==='number'&&!next.value?2:1,n);v.active=n.id;}}}}}
   if(action==='next-slot')v.active=nextSlot(v.draft,v.active);
   if(action==='cancel-draft'){v.draft=null;v.message='';}
   if(action==='write'){try{const expression=clean(copy(v.draft));model.add(expression);v.draft=null;v.message='';}catch(e){message(e.message,true);return;}}
   if(action==='unselect')clearSelection();
   if(action==='delete'){model.erase(v.selection);clearSelection();}
   if(action==='simplify'){v.dividing=true;v.message='Scegli tu un numero che divida entrambi i termini.';}
   if(action==='equivalent'){v.multiplying=true;v.equivalentTarget='';const note=factorNotes.filter(r=>r.mode==='mcm').at(-1);v.suggestedDenominator=note?.result||'';v.message='Scegli il denominatore comune. Poi calcola il quoziente per il denominatore attuale.';}
   if(action==='relation'){clearSelection();v.relation=key;}
   if(action==='check-comparison'){try{if(v.draft)throw Error('Conferma prima quello che stai scrivendo.');comparisonResult(model,comparison.fractions,v.relation);clearSelection();v.error=false;v.message='Corretto! Con il denominatore comune basta confrontare i numeratori.';render();}catch(e){message(e.message,true);}return;}
   if(action==='cancel-step'){model.cancel();clearSelection();}
   if(action==='undo'||action==='redo'){model[action]();clearSelection();}
   v.error=false;render();
  }
  function click(e){
   if(e.target.closest('.nb-factor-tools')&&!e.target.closest('[data-nb-action]'))return;
   if(v.suppressClick){const p=v.suppressClick;v.suppressClick=false;if(Date.now()<p.until&&Math.hypot(e.clientX-p.x,e.clientY-p.y)<4)return;}const b=e.target.closest('[data-nb-action]');if(b){act(b.dataset.nbAction,b.dataset.nbKey);return;}
   if(e.target.closest('.nb-context,input,.notebook-dock'))return;
   const pick=e.target.closest('[data-nb-select]');if(pick&&!v.draft&&!model.pending){if(pick.dataset.nbEmpty){v.filling=pick.dataset.nbSelect;v.selection=[v.filling];v.selected=v.filling;render();return;}const key=pick.dataset.nbSelect;select(e.shiftKey||e.ctrlKey||e.metaKey||e.pointerType==='touch'?v.selection.includes(key)?v.selection.filter(k=>k!==key):[...v.selection,key]:[key]);return;}
   if(!v.draft&&!model.pending&&(v.selection.length||v.sheetMenu)){clearSelection();render();}
  }
  function submit(e){const form=e.target.closest('[data-nb-form]');if(!form)return;e.preventDefault();try{if(form.dataset.nbForm==='fill'){model.fill(v.filling,form.elements.value.value);clearSelection();}else if(form.dataset.nbForm==='divisor'){model.begin(v.selected,form.elements.divisor.value);v.dividing=false;v.message='Scrivi il quoziente del numeratore. Poi toccherà al denominatore.';}else if(form.dataset.nbForm==='common-denominator'){const raw=form.elements.commonDenominator.value;if(!/^\d{1,30}$/.test(raw)||BigInt(raw)<1n)throw Error('Scrivi un denominatore comune maggiore di zero.');const denominators=[];function collect(n){if(simple(n)){denominators.push(BigInt(n.bottom.items[0].value));return;}if(n.type==='sequence')n.items.forEach(collect);else if(n.type==='fraction'){collect(n.top);collect(n.bottom);}}model.rows.forEach(collect);if(denominators.some(d=>BigInt(raw)%d))throw Error('Il denominatore comune deve essere un multiplo dei denominatori delle frazioni.');v.equivalentTarget=String(BigInt(raw));v.message='Dividi il denominatore comune per quello della frazione selezionata.';}else if(form.dataset.nbForm==='multiplier'){model.beginCommonDenominator(v.selected,v.equivalentTarget,form.elements.multiplier.value);v.multiplying=false;v.message='Moltiplica il numeratore per il quoziente che hai trovato.';}else{const multiplying=model.pending?.kind==='multiply',done=model.answer(form.elements.quotient.value);v.message=done?'Passaggio completato.':'Ora '+(multiplying?'moltiplica':'dividi')+' il denominatore per lo stesso numero.';if(done){const f=model.fractionFor(v.selected);if(!multiplying&&simple(f)&&gcd(BigInt(f.top.items[0].value),BigInt(f.bottom.items[0].value))===1n)v.message='Frazione ridotta ai minimi termini.';if(multiplying)v.message='Frazione equivalente costruita. Il valore è rimasto lo stesso.';v.selection=[];v.selected=null;v.dividing=false;v.multiplying=false;v.filling=null;}}v.error=false;render();}catch(err){message(err.message,true);}}
  function input(e){const key=e.target.dataset.nbSlot;if(!key)return;const r=find(v.draft,key);r.node.value=e.target.value.replace(/[^0-9]/g,'').slice(0,30);e.target.value=r.node.value;e.target.style.setProperty('--nb-digits',Math.max(2,r.node.value.length+1));}
  function focus(e){if(e.target.dataset.nbSlot){v.active=e.target.dataset.nbSlot;host.querySelectorAll('[data-nb-slot]').forEach(x=>x.classList.toggle('nb-active',x===e.target));}}
  function keydown(e){
   if(e.target.closest('.nb-sheet-menu')){if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();const items=[...host.querySelectorAll('.nb-sheet-menu button')],index=items.indexOf(e.target);items[(index+(e.key==='ArrowDown'?1:-1)+items.length)%items.length]?.focus();return;}if(e.key==='Escape'){e.preventDefault();v.sheetMenu=null;render();host.focus({preventScroll:true});return;}}
   if(!e.target.closest('input,textarea')&&(e.key==='ContextMenu'||e.shiftKey&&e.key==='F10')){e.preventDefault();const anchor=host.querySelector(`[data-nb-select="${v.selected}"]`)||host.querySelector('.nb-paper'),r=anchor.getBoundingClientRect();openSheetMenu(r.left+12,r.top+48);return;}

   if(!e.target.closest('input,textarea')){
    if(['Delete','Backspace'].includes(e.key)&&v.selection.length&&!model.pending&&!v.draft){e.preventDefault();act('delete');return;}
    if(e.key==='Escape'){e.preventDefault();if(model.pending)model.cancel();clearSelection();render();return;}
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();act(e.shiftKey?'redo':'undo');return;}
   }
   if(e.target.dataset.nbSelect&&['Enter',' '].includes(e.key)){e.preventDefault();e.target.click();return;}if(!e.target.dataset.nbSlot)return;
   if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
    const input=e.target,start=input.selectionStart??0,end=input.selectionEnd??start;
    if((e.key==='ArrowLeft'&&(start>0||start!==end))||(e.key==='ArrowRight'&&(end<input.value.length||start!==end)))return;
    const next=arrowSlot(v.draft,v.active,e.key);if(next!==v.active){e.preventDefault();v.active=next;render();const target=host.querySelector(`[data-nb-slot="${next}"]`);if(target){const caret=e.key==='ArrowLeft'?target.value.length:e.key==='ArrowRight'?0:Math.min(start,target.value.length);target.setSelectionRange(caret,caret);}}else if(['ArrowUp','ArrowDown'].includes(e.key))e.preventDefault();return;
   }
   if(e.key==='Tab'&&!e.shiftKey){const slots=numberSlots(v.draft),next=nextSlot(v.draft,v.active);if(!slots.includes(next)){e.preventDefault();v.active=next;render();return;}}const k={'-':'−','*':'·','/':'÷',':':'÷'}[e.key]||e.key;if(['+','−','·','÷','(',')'].includes(k)){e.preventDefault();insertKey(k);}if(e.key==='Enter'){e.preventDefault();act('write');}
  }
  function pointer(e){
   if(e.target.closest('.nb-keypad button')){e.preventDefault();return;}
   if(e.button!==0||v.draft||model.pending||e.target.closest('input,.nb-context,.nb-sheet-menu,button:not([data-nb-select]),.nb-topbar')||!e.target.closest('.nb-paper'))return;
   stopPress();v.press={x:e.clientX,y:e.clientY,pointerId:e.pointerId,key:e.target.closest('[data-nb-select]')?.dataset.nbSelect};const press=v.press;pressTimer=setTimeout(()=>{if(v.press!==press)return;stopPress();openSheetMenu(press.x,press.y,press.key);v.suppressClick={x:press.x,y:press.y,until:Date.now()+800};},600);
   if(e.pointerType==='touch')return;
   e.preventDefault();v.drag={x:e.clientX,y:e.clientY,pointerId:e.pointerId,active:false,keys:[],base:e.shiftKey||e.ctrlKey||e.metaKey?[...v.selection]:[]};
  }
  function move(e){
   if(v.press&&e.pointerId===v.press.pointerId&&Math.hypot(e.clientX-v.press.x,e.clientY-v.press.y)>6)stopPress();
   const d=v.drag;if(!d||e.pointerId!==d.pointerId)return;if(!d.active&&Math.hypot(e.clientX-d.x,e.clientY-d.y)<5)return;d.active=true;
   const rect={left:Math.min(d.x,e.clientX),right:Math.max(d.x,e.clientX),top:Math.min(d.y,e.clientY),bottom:Math.max(d.y,e.clientY)},paper=host.querySelector('.nb-paper'),p=paper.getBoundingClientRect();
   let marquee=paper.querySelector('.nb-marquee');if(!marquee){marquee=document.createElement('div');marquee.className='nb-marquee';paper.append(marquee);}
   Object.assign(marquee.style,{left:(rect.left-p.left+paper.scrollLeft)+'px',top:(rect.top-p.top+paper.scrollTop)+'px',width:(rect.right-rect.left)+'px',height:(rect.bottom-rect.top)+'px'});
   d.keys=[...host.querySelectorAll('.nb-row [data-nb-select]:not(.nb-fraction)')].filter(n=>{const r=n.getBoundingClientRect();return r.right>=rect.left-2&&r.left<=rect.right+2&&r.bottom>=rect.top-2&&r.top<=rect.bottom+2;}).map(n=>n.dataset.nbSelect);
   const keys=selectionRoots(model.rows,[...d.base,...d.keys]);host.querySelectorAll('.nb-row [data-nb-select]').forEach(n=>n.classList.toggle('nb-selected',keys.includes(n.dataset.nbSelect)));host.querySelector('.nb-context')?.setAttribute('hidden','');
  }
  function up(e){stopPress();const d=v.drag;if(!d||e.pointerId!==d.pointerId)return;v.drag=null;host.querySelector('.nb-marquee')?.remove();if(d.active){select([...d.base,...d.keys]);v.suppressClick={x:e.clientX,y:e.clientY,until:Date.now()+500};}}
  function outside(e){if(factorTool?.isOpen())return;if(!host.contains(e.target)&&!model.pending&&!v.draft&&(v.selection.length||v.filling||v.sheetMenu)){clearSelection();render();}}
  function cancelPointer(){stopPress();v.drag=null;host.querySelector('.nb-marquee')?.remove();render();}
  host.addEventListener('dblclick',doubleclick);host.addEventListener('contextmenu',contextmenu);host.addEventListener('click',click);host.addEventListener('submit',submit);host.addEventListener('input',input);host.addEventListener('focusin',focus);host.addEventListener('keydown',keydown);host.addEventListener('pointerdown',pointer);document.addEventListener('pointermove',move);document.addEventListener('pointerup',up);document.addEventListener('pointerdown',outside);window.addEventListener('resize',positionContext);host.addEventListener('scroll',positionContext,true);host.addEventListener('pointercancel',cancelPointer);render();
  return{model,dispose(){dock.dispose();stopPress();factorTool?.dispose();document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);document.removeEventListener('pointerdown',outside);window.removeEventListener('resize',positionContext);host.remove();}};
 }
 return{mount,Notebook,math:{evaluate,gcd,completedReduction,comparisonResult,factorPlan,selectedDenominators,factorToolChoices},nodes:{num,seq,frac,find,selectionRoots,insertFraction,nextSlot,arrowSlot,canSimplify}};
})();










