/* Twelve persistent, countable coins. No randomness and no answer is required to read on. */
window.GatitoCoins=(()=>{
 const TOTAL=12;
 const defaults={phase:'intro',placements:Array(TOTAL).fill(null),piles:[],nextPile:1,selected:null,manipulated:false,groupsInput:'',coinsInput:'',solution:null,message:'',kind:''};
 const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
 const makeButton=(text,action,cls='cg-button')=>{const b=el('button',cls,text);b.type='button';if(action)b.dataset.action=action;return b;};
 const saved=state=>state.solution||{groups:3,coins:4};
 function hydrate(host,state){
  const {groups:g,coins:c}=saved(state),personal=!!state.solution;
  const copies={
   arrangement:personal?`Hai formato ${g} ${g===1?'mazzetto':'mazzetti'} da ${c} ${c===1?'moneta':'monete'} ciascuno, usando tutte le 12 monete.`:'Possiamo formare 3 mazzetti da 4 monete ciascuno, usando tutte le 12 monete.',
   product:`12 = ${c} × ${g}`,
   exact:`12 : ${c} = ${g}, senza resto.`,
   divisor:`${c} è un divisore di 12`,
   divisible:`12 è divisibile per ${c}`,
   multiple:`12 è un multiplo di ${c}`,
   same:`Moltiplicando ${c} per ${g} otteniamo 12: è la stessa relazione letta attraverso la moltiplicazione.`
  };
  host.querySelectorAll('[data-coin-copy]').forEach(n=>{if(copies[n.dataset.coinCopy])n.textContent=copies[n.dataset.coinCopy];});
 }
 function questionFor(q,state){
  if(!q.coinAnother)return q;
  const first=saved(state),other=first.groups===3&&first.coins===4?{groups:4,coins:3}:{groups:3,coins:4};
  return {...q,question:(state.solution?`All’inizio hai trovato ${first.groups} mazzetti da ${first.coins} monete. `:`Abbiamo visto ${first.groups} mazzetti da ${first.coins} monete. `)+'Quale altra suddivisione usa tutte le 12 monete in mazzetti uguali?',
   options:[`${other.groups} mazzetti da ${other.coins} monete.`, '3 mazzetti da 3 monete.', '5 mazzetti da 2 monete.', '4 mazzetti da 4 monete.'],answer:0,
   feedback:`${other.groups} × ${other.coins} = 12: tutte le monete sono utilizzate e i mazzetti sono uguali.`,
   feedbackByOption:[`${other.groups} × ${other.coins} = 12: tutte le monete sono utilizzate e i mazzetti sono uguali.`,'3 × 3 = 9: rimarrebbero 3 monete fuori dai mazzetti.','5 × 2 = 10: rimarrebbero 2 monete fuori dai mazzetti.','4 × 4 = 16: servirebbero 4 monete in più.']};
 }
 function mount(host,state={},onSolution=()=>{}){
  for(const [k,v] of Object.entries(defaults))if(state[k]===undefined)state[k]=Array.isArray(v)?[...v]:v;
  host.classList.add('rm-coin-card');const board=el('section','cg-board');board.setAttribute('aria-label','L’esperimento di Bjorne con 12 monete');host.append(board);
  const abort=new AbortController(),listen=(node,event,fn)=>node.addEventListener(event,fn,{signal:abort.signal});
  board.append(el('h4','cg-heading','Bjorne e le 12 monete'));
  const intro=el('div','cg-intro'),cat=el('img','cg-bjorne');cat.src='assets/images/reader/bjorne-monete-v1.png';cat.alt='Bjorne osserva le sue monete sul tavolo';cat.width=1122;cat.height=1402;
  const desk=el('div','cg-front-desk'),preview=el('div','cg-preview');preview.setAttribute('aria-label','Dodici monete da un euro');
  for(let i=0;i<TOTAL;i++){const coin=el('span','cg-coin cg-preview-coin','1 €');coin.setAttribute('aria-hidden','true');preview.append(coin);}
  intro.append(cat,desk,preview);board.append(intro);
  const controls=el('div','cg-controls'),open=makeButton('Sul tavolo →','open'),add=makeButton('+ Nuovo mazzetto','add'),reset=makeButton('Ricomincia','reset','cg-button cg-secondary');controls.append(open,add,reset);board.append(controls);
  const tabletop=el('div','cg-tabletop'),bank=el('div','cg-bank');bank.dataset.zone='bank';const bankTitle=el('h5','','Sul tavolo'),bankCoins=el('div','cg-bank-coins');bank.append(bankTitle,bankCoins);const pileArea=el('div','cg-piles');tabletop.append(bank,pileArea);board.append(tabletop);
  const selection=el('p','cg-selection');selection.setAttribute('aria-live','polite');board.append(selection);
  const form=el('form','cg-answer');form.noValidate=true;
  const field=(name,key)=>{const label=el('label','cg-field'),input=el('input');input.type='number';input.min='1';input.max='12';input.step='1';input.inputMode='numeric';input.value=state[key];input.autocomplete='off';label.append(el('span','',name),input);listen(input,'input',()=>{state[key]=input.value;state.message='';state.kind='';showMessage();});return {label,input};};
  const groupField=field('Numero di mazzetti','groupsInput'),coinField=field('Monete in ogni mazzetto','coinsInput');
  const verify=el('button','cg-button','Controlla');verify.type='submit';form.append(groupField.label,coinField.label,verify);board.append(form);
  const message=el('p','cg-message');message.setAttribute('role','status');message.setAttribute('aria-live','polite');board.append(message);
  let drag=null,ghost=null,suppressClickUntil=0;
  function showMessage(){message.textContent=state.message;message.dataset.kind=state.kind;board.classList.toggle('cg-success',state.kind==='success');}
  function clearMessage(){state.message='';state.kind='';showMessage();}
  function showPhase(){intro.hidden=state.phase!=='intro';tabletop.hidden=state.phase!=='table';open.hidden=state.phase==='table';add.hidden=reset.hidden=state.phase!=='table';board.dataset.phase=state.phase;}
  function coinNode(i){const b=makeButton('1 €',null,'cg-coin');b.dataset.coin=String(i);b.classList.toggle('cg-selected',state.selected===i);b.setAttribute('aria-pressed',String(state.selected===i));b.setAttribute('aria-label',`Moneta ${i+1} da 1 euro, ${state.placements[i]===null?'sul tavolo':'nel mazzetto '+(state.piles.indexOf(state.placements[i])+1)}`);return b;}
  function draw(old=new Map()){
   bankCoins.replaceChildren();state.placements.forEach((p,i)=>{if(p===null)bankCoins.append(coinNode(i));});bankTitle.textContent=`Sul tavolo · ${state.placements.filter(p=>p===null).length}`;
   pileArea.replaceChildren();
   if(!state.piles.length)pileArea.append(el('p','cg-empty','Mazzetti'));
   state.piles.forEach((id,index)=>{const pile=el('div','cg-pile');pile.dataset.zone=String(id);pile.setAttribute('role','group');pile.setAttribute('aria-label',`Mazzetto ${index+1}`);const head=el('div','cg-pile-head'),remove=makeButton('×','remove','cg-remove');remove.dataset.pile=String(id);remove.setAttribute('aria-label',`Sciogli il mazzetto ${index+1}`);head.append(el('span','',`Mazzetto ${index+1}`),remove);const coins=el('div','cg-pile-coins');state.placements.forEach((p,i)=>{if(p===id)coins.append(coinNode(i));});const place=makeButton('Metti qui','place','cg-place');place.dataset.pile=String(id);place.disabled=state.selected===null;pile.append(head,coins,place);pileArea.append(pile);});
   selection.textContent=state.selected===null?'':`Moneta ${state.selected+1} selezionata`;
   showPhase();showMessage();
   board.querySelectorAll('.cg-coin[data-coin]').forEach(n=>{const before=old.get(n.dataset.coin);if(!before||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const now=n.getBoundingClientRect();if(Math.abs(before.x-now.x)+Math.abs(before.y-now.y)>2)n.animate([{transform:`translate(${before.x-now.x}px,${before.y-now.y}px)`},{transform:'translate(0,0)'}],{duration:260,easing:'ease-out'});});
  }
  function positions(){return new Map([...board.querySelectorAll('.cg-coin[data-coin]')].map(n=>[n.dataset.coin,n.getBoundingClientRect()]));}
  function move(i,target){const pile=target==='bank'?null:Number(target);if(pile!==null&&!state.piles.includes(pile))return;if(state.placements[i]===pile){state.selected=null;draw();return;}const old=positions();state.placements[i]=pile;state.selected=null;state.manipulated=true;clearMessage();draw(old);}
  listen(board,'click',e=>{
   const coin=e.target.closest('[data-coin]');if(coin){if(Date.now()<suppressClickUntil)return;const i=Number(coin.dataset.coin);state.selected=state.selected===i?null:i;draw();board.querySelector(`[data-coin="${i}"]`)?.focus({preventScroll:true});return;}
   const action=e.target.closest('[data-action]');
   if(action?.dataset.action==='open'){state.phase='table';draw();return;}
   if(action?.dataset.action==='add'){if(state.piles.length<TOTAL){state.piles.push(state.nextPile++);clearMessage();draw();}return;}
   if(action?.dataset.action==='reset'){state.placements.fill(null);state.piles=[];state.nextPile=1;state.selected=null;state.manipulated=false;state.groupsInput=state.coinsInput='';groupField.input.value=coinField.input.value='';clearMessage();draw();return;}
   if(action?.dataset.action==='remove'){const id=Number(action.dataset.pile),old=positions();state.piles=state.piles.filter(p=>p!==id);state.placements=state.placements.map(p=>p===id?null:p);state.manipulated=true;state.selected=null;clearMessage();draw(old);return;}
   if(action?.dataset.action==='place'){if(state.selected!==null)move(state.selected,action.dataset.pile);return;}
   const zone=e.target.closest('[data-zone]');if(zone&&state.selected!==null)move(state.selected,zone.dataset.zone);
  });
  listen(board,'pointerdown',e=>{const coin=e.target.closest('[data-coin]');if(!coin||e.button!==0)return;drag={id:Number(coin.dataset.coin),x:e.clientX,y:e.clientY,moved:false,node:coin};coin.setPointerCapture(e.pointerId);});
  listen(board,'pointermove',e=>{if(!drag)return;if(!drag.moved&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>6){drag.moved=true;ghost=drag.node.cloneNode(true);ghost.classList.add('cg-drag-ghost');ghost.removeAttribute('data-coin');ghost.removeAttribute('aria-label');ghost.setAttribute('aria-hidden','true');board.append(ghost);}if(ghost){ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px';}});
  function stopDrag(e,cancel=false){if(!drag)return;const d=drag;drag=null;ghost?.remove();ghost=null;if(d.moved){suppressClickUntil=Date.now()+350;const zone=cancel?null:document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-zone]');if(zone&&board.contains(zone))move(d.id,zone.dataset.zone);else{state.selected=d.id;draw();}}}
  listen(board,'pointerup',e=>stopDrag(e));listen(board,'pointercancel',e=>stopDrag(e,true));
  listen(form,'submit',e=>{
   e.preventDefault();const rawG=groupField.input.value,rawC=coinField.input.value,g=Number(rawG),c=Number(rawC);state.groupsInput=rawG;state.coinsInput=rawC;
   const error=text=>{state.message=text;state.kind='error';showMessage();};
   if(!/^\d+$/.test(rawG)||!/^\d+$/.test(rawC)||g<1||c<1||g>TOTAL||c>TOTAL){error('Indica in entrambi i campi un numero intero da 1 a 12.');return;}
   if(g*c!==TOTAL){const count=g*c;error(`${g} mazzetti da ${c} monete richiedono ${count} monete. ${count<TOTAL?`Ne rimarrebbero ${TOTAL-count} sul tavolo.`:`Bjorne ne ha solo 12: ne servirebbero ${count-TOTAL} in più.`}`);return;}
   if(state.manipulated){
    const left=state.placements.filter(p=>p===null).length;if(left){error(`Ci sono ancora ${left} ${left===1?'moneta':'monete'} fuori dai mazzetti.`);return;}
    const counts=state.piles.map(id=>state.placements.filter(p=>p===id).length);
    if(counts.some(n=>n===0)){error('C’è un mazzetto vuoto: puoi scioglierlo oppure aggiungergli monete.');return;}
    if(new Set(counts).size!==1){error('I mazzetti contengono quantità diverse. Puoi spostare le monete per renderli uguali.');return;}
    if(state.piles.length!==g||counts[0]!==c){error(`La tua disposizione contiene ${state.piles.length} mazzetti da ${counts[0]} monete. I due numeri inseriti devono descrivere questa disposizione.`);return;}
   }else{
    const old=positions();state.phase='table';state.piles=Array.from({length:g},(_,i)=>i+1);state.nextPile=g+1;state.placements=Array.from({length:TOTAL},(_,i)=>Math.floor(i/c)+1);state.selected=null;draw(old);
   }
   state.solution={groups:g,coins:c};state.message=`${g} ${g===1?'mazzetto':'mazzetti'} da ${c} ${c===1?'moneta':'monete'}: ${g} × ${c} = 12. Hai usato tutte le monete.`;state.kind='success';showMessage();onSolution(state.solution);
  });
  draw();return()=>{abort.abort();ghost?.remove();};
 }
 function showObservation(host,state,remainder=false){
  host.classList.add('rm-coin-card');let board=host.querySelector('.cg-observation');if(!board){board=el('section','cg-board cg-observation');host.append(board);}board.replaceChildren();
  const answer=remainder?{groups:2,coins:5}:saved(state);
  board.append(el('h4','cg-heading',remainder?'Questa volta le monete avanzano':state.solution?'La tua suddivisione':'Una suddivisione possibile'));
  const piles=el('div','cg-observe-piles');
  for(let g=0;g<answer.groups;g++){const pile=el('div','cg-pile');pile.append(el('span','cg-observe-label',`Mazzetto ${g+1}`));const coins=el('div','cg-pile-coins');for(let i=0;i<answer.coins;i++){const c=el('span','cg-coin','1 €');c.setAttribute('aria-hidden','true');coins.append(c);}pile.append(coins);pile.setAttribute('aria-label',`Mazzetto ${g+1} con ${answer.coins} monete`);piles.append(pile);}board.append(piles);
  if(remainder){const outside=el('div','cg-observe-rest');outside.append(el('span','','Fuori dai mazzetti: '));for(let i=0;i<2;i++)outside.append(el('span','cg-coin','1 €'));board.append(outside);}
  board.append(el('p','cg-observe-equation',`12 = ${answer.coins} × ${answer.groups}${remainder?' + 2':''}`));
 }
 return {mount,hydrate,questionFor,showObservation};
})();
