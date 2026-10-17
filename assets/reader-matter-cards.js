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
function mount(box,st,onChange){
 box.classList.add('mc-game-card');if(st.version!==3){st.index=0;st.answers=[];st.done=false;delete st.frontOverride;}st.index??=0;st.answers??=[];st.version=3;
 const host=document.createElement('div');host.className='mc-game';box.append(host);
 host.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key))e.stopPropagation();});
 const node=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls||'';if(text!==undefined)n.textContent=text;return n;};
 const btn=(text,fn,cls='')=>{const n=node('button','mc-button '+cls,text);n.type='button';n.onclick=fn;return n;};
 let branch=null,motion=null;const engines=new Map();
 st.motionPaused??=(typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches);
 function render(focus=false){
  motion?.dispose();motion=null;host.replaceChildren();const d=deck[st.index],a=st.answers[st.index]||(st.answers[st.index]={model:false,state:false,phase:0});a.phase??=a.model&&a.state?3:0;
  const phase=a.phase,back=st.frontOverride===undefined?(phase===1||phase===3):!st.frontOverride;
  const top=node('div','mc-top');top.append(node('span','mc-eyebrow','SCOPRI CHE COSA C’È DENTRO'),node('span','mc-count',`Carta ${st.index+1} di ${deck.length}`));
  const note=node('details','mc-model-info'),summary=node('summary','','Come leggere i modelli');note.append(summary,node('p','','Le palline e i collegamenti sono modelli della struttura dei materiali. Colori, dimensioni e distanze sono convenzionali; alcuni dettagli sono semplificati. Le cornici dei reticoli e i contorni delle zone sono guide grafiche, non altre particelle. Anche i movimenti sono illustrativi: tempi e velocità non sono in scala.'));
  const progress=node('progress');progress.max=deck.length;progress.value=st.answers.filter(a=>a?.model&&a?.state).length;progress.setAttribute('aria-label','Carte completate');host.append(top,note,progress);
  const layout=node('div','mc-layout'),card=node('div','mc-playing-card'+(back?' mc-back':''));card.append(node('span','mc-side',back?'DENTRO IL MATERIALE':'IL CAMPIONE'));
  const art=node('div','mc-art');if(back)art.innerHTML=scene(d).svg;else{const img=node('img');img.src=`assets/images/reader/chemistry/cards/${d.id}.webp`;img.alt=d.name;img.width=640;img.height=640;art.append(img);}card.append(art,node('h4','',d.name));
  if(back&&window.GatitoMatterModels.supportsMotion(d.id)){
   if(!engines.has(d.id))engines.set(d.id,window.GatitoMatterModels.createMotion(d.id));
   const pause=btn(st.motionPaused?'Riprendi':'Pausa',()=>{st.motionPaused=!st.motionPaused;motion?.setPaused(st.motionPaused);pause.textContent=st.motionPaused?'Riprendi':'Pausa';pause.setAttribute('aria-pressed',String(st.motionPaused));},'mc-motion-toggle');
   pause.setAttribute('aria-label','Metti in pausa o riprendi il movimento');pause.setAttribute('aria-pressed',String(st.motionPaused));card.append(pause);
  }
  const question=node('div','mc-question'),heading=node('h4','',phase===0?'Che cosa nasconde questo materiale?':phase===1?(branch?'Come sono organizzate?':'Che cosa vedi?'):phase===2?'In quale stato si trova il campione?':'Carta completata!');heading.tabIndex=-1;question.append(heading);
  const opts=node('div','mc-options'+(phase===2?' mc-states':'')),feedback=node('div','mc-feedback');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
  const show=(correct,message)=>{if(window.GatitoQuizReactions)window.GatitoQuizReactions.show(feedback,message,{correct,title:correct?'Ci siamo!':'Guarda ancora'});else feedback.textContent=message;};
  const nav=node('div','mc-nav');
  const completeModel=()=>{a.model=true;branch=null;render(true);onChange();};
  if(phase===0)opts.append(btn('Guarda dentro →',()=>{a.phase=1;delete st.frontOverride;render(true);},'mc-primary'));
  if(phase===1&&!a.model){
   if(branch){opts.append(node('p','mc-selection',descriptions[branch]));subgroups[branch].forEach(([key,text])=>opts.append(btn(text,()=>{if(branch!==classification(d)||key!==subgroup(d)){show(false,'Osserva se le palline sono separate, riunite in gruppi o parte di una struttura.');return;}completeModel();})));nav.append(btn('← Cambia scelta',()=>{branch=null;render(true);},'mc-link'));}
   else Object.entries(descriptions).forEach(([key,text])=>opts.append(btn(text,()=>{if(subgroups[key]){branch=key;render(true);return;}if(key!==classification(d)){show(false,'Confronta i tipi di palline e come sono distribuiti nelle diverse zone.');return;}completeModel();})));
  }
  if(phase===1&&a.model){opts.append(node('p','mc-selection',descriptions[classification(d)]));if(subgroups[classification(d)])opts.append(node('p','mc-selection',subgroups[classification(d)].find(([key])=>key===subgroup(d))[1]));show(true,'Struttura riconosciuta.');nav.append(btn('Ora lo stato →',()=>{a.phase=2;delete st.frontOverride;render(true);},'mc-primary'));}
  if(phase===2)['Solido','Liquido','Gassoso','Altro'].forEach(value=>opts.append(btn(value,()=>{if(value!==d.state){show(false,'Riguarda il campione: può esserci anche più di uno stato insieme.');return;}a.state=true;a.phase=3;delete st.frontOverride;render(true);onChange();})));
  if(phase===3){opts.append(node('p','mc-selection',descriptions[classification(d)]),node('p','mc-state-result','Stato: '+(d.state==='Altro'?'più stati insieme':d.state.toLowerCase())+'.'));show(true,'Hai completato questa carta.');const last=st.index===deck.length-1;nav.append(btn(last?'Completa il gioco ✓':'Prossima carta →',()=>{if(last){st.done=true;onChange();render();}else{st.index++;branch=null;delete st.frontOverride;render(true);onChange();}},'mc-primary'));}
  if(phase>0)nav.append(btn(back?'Rivedi il campione':'Rivedi il modello',()=>{st.frontOverride=back;render();},'mc-secondary'));
  if(st.index>0)nav.append(btn('← Carta precedente',()=>{st.index--;branch=null;delete st.frontOverride;render(true);},'mc-link'));
  if(st.done)nav.append(node('p','mc-finished','Gioco completato! Puoi proseguire nella lezione o rivedere le carte.'));
  question.append(opts,feedback,nav);layout.append(card,question);host.append(layout);if(back&&engines.has(d.id))motion=window.GatitoMatterModels.animate(art,d,engines.get(d.id),{paused:st.motionPaused});if(focus)heading.focus({preventScroll:true});
 }
 render();return()=>{motion?.dispose();engines.clear();host.remove();};
}
return{mount,deck,descriptions,subgroups,classification,subgroup,scene};
})();


