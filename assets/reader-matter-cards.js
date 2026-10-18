/* Exploratory descriptions precede scientific category names. */
window.GatitoMatterCards=(()=>{
'use strict';
const deck=[
 {
  "id": "elio",
  "name": "Elio nel palloncino",
  "state": "Gassoso",
  "kind": "elemento",
  "model": "isolated"
 },
 {
  "id": "acqua",
  "name": "Acqua distillata",
  "state": "Liquido",
  "kind": "composto molecolare",
  "model": "water"
 },
 {
  "id": "grafite",
  "name": "Grafite della matita",
  "state": "Solido",
  "kind": "elemento",
  "model": "layers"
 },
 {
  "id": "aria",
  "name": "Aria nel palloncino",
  "state": "Gassoso",
  "kind": "miscela omogenea",
  "model": "air"
 },
 {
  "id": "sale",
  "name": "Sale da cucina",
  "state": "Solido",
  "kind": "composto ionico",
  "model": "ions"
 },
 {
  "id": "spremuta",
  "name": "Spremuta d’arancia con polpa",
  "state": "Altro",
  "kind": "miscela eterogenea",
  "model": "pulp"
 },
 {
  "id": "zucchero",
  "name": "Zucchero",
  "state": "Solido",
  "kind": "composto molecolare",
  "model": "sugar"
 },
 {
  "id": "acciaio",
  "name": "Acciaio inox del cucchiaio",
  "state": "Solido",
  "kind": "miscela omogenea",
  "model": "alloy"
 },
 {
  "id": "co2",
  "name": "Anidride carbonica",
  "state": "Gassoso",
  "kind": "composto molecolare",
  "model": "gas"
 },
 {
  "id": "sabbia",
  "name": "Sabbia di quarzo",
  "state": "Solido",
  "kind": "composto reticolare covalente",
  "model": "network"
 },
 {
  "id": "rubinetto",
  "name": "Acqua del rubinetto",
  "state": "Liquido",
  "kind": "miscela omogenea",
  "model": "solution"
 },
 {
  "id": "nebbia",
  "name": "Nebbia",
  "state": "Altro",
  "kind": "miscela eterogenea",
  "model": "fog"
 },
 {
  "id": "alluminio",
  "name": "Alluminio da cucina",
  "state": "Solido",
  "kind": "elemento",
  "model": "metal"
 },
 {
  "id": "bicarbonato",
  "name": "Bicarbonato da cucina",
  "state": "Solido",
  "kind": "composto ionico",
  "model": "ions2"
 },
 {
  "id": "biscotto",
  "name": "Biscotto con gocce di cioccolato",
  "state": "Solido",
  "kind": "miscela eterogenea",
  "model": "biscuit"
 },
 {
  "id": "diamante",
  "name": "Diamante",
  "state": "Solido",
  "kind": "elemento",
  "model": "network"
 },
 {
  "id": "pet",
  "name": "Plastica della bottiglia · PET",
  "state": "Solido",
  "kind": "polimero",
  "model": "chains"
 },
 {
  "id": "ossigeno",
  "name": "Ossigeno",
  "state": "Gassoso",
  "kind": "elemento",
  "model": "diatomic"
 }
];
const descriptions={
 element:'Palline tutte uguali.',
 compound:'Palline di tipi diversi.',
 homogeneous:'Palline, sole o in gruppetti, di tipi diversi mescolati ovunque nelle stesse proporzioni.',
 heterogeneous:'Palline, sole o in gruppetti, di tipi diversi: da una zona all’altra cambia quali troviamo o in quali proporzioni.'
};
const subgroups={
 element:[['separate','Ogni pallina è separata dalle altre.'],['groups','Le palline formano gruppetti separati.'],['structures','Le palline sono organizzate in una struttura.']],
 compound:[['groups','Le palline formano gruppetti tutti uguali.'],['structures','Le palline sono organizzate in strutture.']]
};
function classification(d){return d.kind==='elemento'?'element':d.kind==='miscela omogenea'?'homogeneous':d.kind==='miscela eterogenea'?'heterogeneous':'compound';}
function subgroup(d){return ['isolated','liquidAtoms'].includes(d.model)?'separate':['layers','ions','ions2','network','chains','metal'].includes(d.model)?'structures':'groups';}
function scene(d){return window.GatitoMatterModels.scene(d);}
const VERSION=4;
function createRound(size=5,random=Math.random){
 const ids=deck.map(d=>d.id);for(let i=ids.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]];}
 return ids.slice(0,[5,10,deck.length].includes(Number(size))?Number(size):5);
}
function resetRound(st,size=5,random=Math.random){
 Object.assign(st,{version:VERSION,roundSize:Number(size),order:createRound(size,random),index:0,answers:[],draft:{},drawn:false,face:'front',panel:'closed',done:false,finished:false});return st;
}
function ensureRound(st){if(st.version!==VERSION||!Array.isArray(st.order)||!st.order.length||!st.order.every(id=>deck.some(d=>d.id===id)))resetRound(st,5);return st;}
function recordAnswer(st,draft){
 const d=deck.find(d=>d.id===st.order[st.index]);
 if(!Object.hasOwn(descriptions,draft.type)||!['Solido','Liquido','Gassoso','Altro'].includes(draft.state)||subgroups[draft.type]&&!subgroups[draft.type].some(([k])=>k===draft.subtype))return null;
 if(st.answers[st.index])return st.answers[st.index];
 const structure=draft.type===classification(d)&&(!subgroups[draft.type]||draft.subtype===subgroup(d));
 const answer={id:d.id,type:draft.type,subtype:subgroups[draft.type]?draft.subtype:null,state:draft.state,structureCorrect:structure,stateCorrect:draft.state===d.state};st.answers[st.index]=answer;
 st.done=st.answers.filter(Boolean).length===st.order.length;return answer;
}
const score=st=>st.answers.filter(Boolean).reduce((n,a)=>n+Number(a.structureCorrect)+Number(a.stateCorrect),0);
function modelLabel(type,subtype){return descriptions[type]+(subgroups[type]?' '+subgroups[type].find(([k])=>k===subtype)?.[1]:'');}
function mountIntro(box,st,onChange){
 ensureRound(st);box.classList.add('mc-intro-card');
 function sync(){box.querySelectorAll('[data-mc-round]').forEach(b=>{b.setAttribute('aria-pressed',String(Number(b.dataset.mcRound)===st.roundSize));});}
 function choose(e){const b=e.target.closest('[data-mc-round]');if(!b||!box.contains(b))return;const size=Number(b.dataset.mcRound);if(st.roundSize!==size)resetRound(st,size);sync();onChange();}
 box.addEventListener('click',choose);const observer=new MutationObserver(sync);observer.observe(box,{childList:true,subtree:true});sync();return()=>{observer.disconnect();box.removeEventListener('click',choose);};
}
function mount(box,st,onChange){
 ensureRound(st);box.classList.add('mc-game-card');
 const node=(tag,cls='',text)=>{const n=document.createElement(tag);n.className=cls;if(text!==undefined)n.textContent=text;return n;};
 const btn=(text,fn,cls='')=>{const n=node('button','mc-button '+cls,text);n.type='button';n.onclick=fn;return n;};
 const host=node('div','mc-game rm-reader-board'),top=node('div','mc-top'),count=node('span','mc-count'),points=node('span','mc-score');
 top.append(node('span','mc-eyebrow','IDENTIKIT DELLA MATERIA'),count,points);
 const note=node('details','mc-model-info');note.append(node('summary','','Come leggere i modelli'),node('p','','Le palline e i collegamenti sono modelli dei materiali. Colori, dimensioni e distanze sono convenzionali; alcuni dettagli sono semplificati. Cornici e contorni sono guide grafiche. Anche i movimenti sono illustrativi: tempi e velocità non sono in scala.'));
 const table=node('div','mc-table'),mat=node('div','mc-mat'),deckZone=node('div','mc-deck-zone'),slot=node('div','mc-card-zone'),sheet=node('section','mc-sheet'),board=node('section','mc-identikit'),boardBody=node('div','mc-identikit-body');
 board.setAttribute('aria-label','Il tuo identikit, tabellone');sheet.setAttribute('aria-label','Le tue risposte');board.append(node('h4','mc-identikit-title','Il tuo identikit'),boardBody);boardBody.append(slot,sheet);
 const paw='<svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="25" cy="30" rx="10" ry="13" transform="rotate(-25 25 30)"/><ellipse cx="47" cy="20" rx="10" ry="13"/><ellipse cx="70" cy="25" rx="10" ry="13" transform="rotate(20 70 25)"/><ellipse cx="84" cy="47" rx="9" ry="12" transform="rotate(35 84 47)"/><path d="M25 63C30 51 37 41 48 42C59 42 62 54 72 61C91 76 74 88 62 82C51 77 48 78 36 82C21 87 14 76 25 63Z"/></svg>';
 const pile=btn('',draw,'mc-deck');pile.innerHTML='<span class="mc-deck-back">'+paw+'<span>GatitoMath</span></span>';const pileLabel=node('span','mc-deck-label'),remaining=node('span','mc-remaining');pile.append(pileLabel);deckZone.append(pile,remaining);
 const cardHome=node('div','mc-card-home'),cardTools=node('div','mc-card-tools');slot.append(node('span','mc-zone-label','LA CARTA PESCATA'),cardHome,cardTools);
 const dialog=node('dialog','mc-inspection'),dialogClose=btn('Torna al tavolo ×',()=>dialog.close(),'mc-close'),dialogSlot=node('div','mc-inspection-slot'),dialogTools=node('div','mc-card-tools');dialog.setAttribute('aria-label','Osserva la carta da vicino');dialog.append(dialogClose,dialogSlot,dialogTools);
 let card=null,art=null,motion=null,disposed=false;const engines=new Map();
 const reducedMotion=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 host.append(top,note,table,dialog);mat.append(deckZone,board);table.append(mat);box.append(host);
 host.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key))e.stopPropagation();});
 dialog.addEventListener('close',()=>{if(card){settleCard();cardHome.append(card);cardTools.append(...dialogTools.children);card.classList.remove('mc-inspected');tools();card.focus({preventScroll:true});}});
 dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
 function current(){return deck.find(d=>d.id===st.order[st.index]);}
 function animateModel(){
  motion?.dispose();motion=null;if(!art||st.face!=='back')return;const d=current();if(!engines.has(d.id))engines.set(d.id,window.GatitoMatterModels.createMotion(d.id));motion=window.GatitoMatterModels.animate(art,d,engines.get(d.id),{paused:reducedMotion});
 }
 function tools(){
  const target=dialog.open?dialogTools:cardTools;target.replaceChildren();
  target.append(btn(st.face==='back'?'Vedi il campione':'Guarda dentro',()=>{st.face=st.face==='back'?'front':'back';card.classList.toggle('mc-show-back',st.face==='back');card.querySelector('.mc-front').setAttribute('aria-hidden',String(st.face==='back'));card.querySelector('.mc-back').setAttribute('aria-hidden',String(st.face!=='back'));card.setAttribute('aria-label','Ispeziona '+current().name+(st.face==='back'?', modello microscopico':', campione'));animateModel();tools();},'mc-flip'));
  target.lastChild.textContent=st.face==='back'?'Vedi il campione':'Guarda dentro';

 }
 function settleCard(){if(!card)return;card.classList.remove('mc-dealt');card.querySelector('.mc-draw-cover')?.remove();}
 function inspect(){if(!card||dialog.open)return;settleCard();dialogSlot.append(card);dialogTools.append(...cardTools.children);card.classList.add('mc-inspected');dialog.showModal();tools();}
 function paintCard(dealing=false){
  motion?.dispose();motion=null;cardHome.replaceChildren();cardTools.replaceChildren();card=null;art=null;
  if(!st.drawn){const empty=node('div','mc-empty-slot');empty.innerHTML=paw;empty.append(node('span','','La prossima scoperta parte dal mazzo.'));cardHome.append(empty);return;}
  const d=current();card=btn('',inspect,'mc-playing-card'+(st.face==='back'?' mc-show-back':'')+(dealing?' mc-dealt':''));card.setAttribute('aria-label','Ispeziona '+d.name+(st.face==='back'?', modello microscopico':', campione')); card.addEventListener('animationend',e=>{if(e.target===card&&e.animationName==='mc-deal')settleCard();});
  const flipper=node('span','mc-flipper'),front=node('span','mc-card-face mc-front'),back=node('span','mc-card-face mc-back');
  front.setAttribute('aria-hidden',String(st.face==='back'));back.setAttribute('aria-hidden',String(st.face!=='back'));const img=node('img');img.src=`assets/images/reader/chemistry/cards/${d.id}.webp`;img.alt=d.name;img.width=640;img.height=640;front.append(node('span','mc-side','IL CAMPIONE'),img,node('span','mc-card-name',d.name));
  art=node('span','mc-art');art.innerHTML=scene(d).svg;back.append(node('span','mc-side','DENTRO IL MATERIALE'),art,node('span','mc-card-name',d.name));flipper.append(front,back);card.append(flipper);if(dealing){const cover=node('span','mc-draw-cover');cover.innerHTML=paw;card.append(cover);}cardHome.append(card);tools();animateModel();
 }
 function status(){count.textContent=`Carta ${st.drawn?st.index+1:0} / ${st.order.length}`;points.textContent=`✦ ${score(st)} indizi`;remaining.textContent=`${st.order.length-st.index-(st.drawn?1:0)} nel mazzo`;pileLabel.textContent=!st.drawn?'Pesca una carta':st.answers[st.index]?(st.done?'Round concluso':'Pesca la prossima'):'Carta sul tabellone';pile.disabled=st.drawn&&!st.answers[st.index]||st.done;pile.setAttribute('aria-label',pileLabel.textContent);}
 function draw(){
  if(st.done)return;if(st.drawn){if(!st.answers[st.index])return;st.index++;}
  st.drawn=true;st.face='front';st.draft={};st.panel='closed';status();paintCard(true);paintSheet();onChange();
 }
 function openPanel(stage='structure'){st.panel=stage;paintSheet();const h=sheet.querySelector('h4');if(h){h.tabIndex=-1;h.focus({preventScroll:true});}}
 function summaryLine(title,value,good){const p=node('p','mc-result-line'+(good===undefined?'':good?' mc-hit':' mc-miss'));p.append(node('strong','',title+' '),node('span','',value));return p;}
 function paintSheet(){
  sheet.replaceChildren();if(st.finished){finishPanel();return;}
  const d=current(),draft=st.draft,a=st.answers[st.index];
  sheet.append(node('span','mc-sheet-eyebrow','SCHEDA '+(st.index+1)),node('h4','',a?'Identikit registrato':'Raccogli gli indizi'));
  if(!st.drawn){sheet.append(node('div','mc-file-illustration','?'),node('p','mc-sheet-intro','Un campione. Due indizi da riconoscere.'));return;}
  if(a){
   const n=Number(a.structureCorrect)+Number(a.stateCorrect),feedback=node('div','mc-feedback');sheet.append(node('p','mc-stamp'+(n===2?' mc-hit':' mc-miss'),`${n} / 2 indizi`));
   if(window.GatitoQuizReactions)window.GatitoQuizReactions.show(feedback,n===2?'Identikit a segno!':n===1?'Un indizio trovato. L’altro ci ha depistati!':'Questa carta ci ha depistati. Confrontiamo gli indizi.',{correct:n===2,title:n===2?'Ci siamo!':'Si continua!'});
   else feedback.textContent=n===2?'Identikit a segno!':'Confronta gli indizi, poi continua.';sheet.append(feedback);
   sheet.append(summaryLine('Palline:',modelLabel(a.type,a.subtype),a.structureCorrect),summaryLine('Stato:',a.state,a.stateCorrect));
   if(n<2){const details=node('details','mc-answer-review'),sum=node('summary','','Confronta con il modello');details.append(sum,summaryLine('Palline:',modelLabel(classification(d),subgroup(d))),summaryLine('Stato:',d.state));sheet.append(details);}
   if(st.done)sheet.append(btn('Risultati del round',()=>{st.finished=true;paintSheet();},'mc-primary'));
   else sheet.append(btn('Pesca la prossima →',draw,'mc-primary'));return;
  }
  if(st.panel==='closed'){
   const open=btn('',()=>openPanel(),'mc-open-file');open.innerHTML='<span class="mc-file-illustration">?</span><strong>Apri la scheda</strong><span>Che cosa vedi? Qual è lo stato?</span>';sheet.append(open);return;
  }
  const trail=node('div','mc-answer-trail');trail.append(btn('1 · Palline',()=>openPanel('structure'),st.panel==='structure'||st.panel==='subtype'?'mc-active':''),btn('2 · Stato',()=>{if(draft.type&&(!subgroups[draft.type]||draft.subtype))openPanel('state');},st.panel==='state'?'mc-active':''));sheet.append(trail);
  const opts=node('div','mc-options');sheet.append(opts);
  if(st.panel==='structure'){
   sheet.append(node('p','mc-sheet-prompt','Scegli la descrizione che ti convince.'));sheet.insertBefore(sheet.lastChild,opts);
   Object.entries(descriptions).forEach(([key,text],i)=>{const b=btn('',()=>{draft.type=key;delete draft.subtype;openPanel(subgroups[key]?'subtype':'state');},'mc-answer-option');b.append(node('span','mc-option-number',String(i+1)),node('span','',text));if(draft.type===key)b.classList.add('mc-selected');opts.append(b);});
  }else if(st.panel==='subtype'){
   sheet.append(node('p','mc-selection',descriptions[draft.type]));sheet.insertBefore(sheet.lastChild,opts);
   subgroups[draft.type].forEach(([key,text])=>opts.append(btn(text,()=>{draft.subtype=key;openPanel('state');},'mc-answer-option')));
  }else if(st.panel==='state'){
   sheet.append(node('p','mc-sheet-prompt','In quale stato si trova il campione?'));sheet.insertBefore(sheet.lastChild,opts);opts.classList.add('mc-states');
   ['Solido','Liquido','Gassoso','Altro'].forEach(value=>{const b=btn(value,()=>{draft.state=value;openPanel('confirm');},'mc-answer-option');opts.append(b);});
  }else if(st.panel==='confirm'){
   opts.append(summaryLine('Palline:',modelLabel(draft.type,draft.subtype)),summaryLine('Stato:',draft.state));
   opts.append(btn('Conferma identikit ✓',()=>{if(!recordAnswer(st,draft))return;status();paintSheet();onChange();},'mc-primary'),btn('Ripensaci',()=>openPanel('structure'),'mc-link'));
  }
 }
 function finishPanel(){
  const total=st.order.length*2;sheet.append(node('span','mc-sheet-eyebrow','ROUND CONCLUSO'),node('h4','','Round completato!'),node('p','mc-final-score',`${score(st)} / ${total}`),node('p','','indizi riconosciuti'));
  const list=node('details','mc-answer-review');list.append(node('summary','','Rivedi le '+st.order.length+' carte'));
  st.answers.forEach(a=>{const d=deck.find(d=>d.id===a.id),line=node('details','mc-round-review');line.append(node('summary','',((a.structureCorrect&&a.stateCorrect)?'✓ ':'↻ ')+d.name),summaryLine('La tua scelta:',modelLabel(a.type,a.subtype)),summaryLine('Nel modello:',modelLabel(classification(d),subgroup(d))),summaryLine('Stato:',a.state+' → '+d.state));list.append(line);});sheet.append(list,node('p','mc-replay-label','Un altro round?'));
  const replay=node('div','mc-round-options');[5,10,deck.length].forEach(n=>replay.append(btn(n===deck.length?'Tutte · 18':String(n),()=>{resetRound(st,n);status();paintCard();paintSheet();onChange();})));sheet.append(replay);
 }
 status();paintCard();paintSheet();
 return()=>{disposed=true;motion?.dispose();engines.clear();if(dialog.open)dialog.close();host.remove();};
}
return{mount,mountIntro,deck,descriptions,subgroups,classification,subgroup,scene,createRound,resetRound,ensureRound,recordAnswer,score};
})();

