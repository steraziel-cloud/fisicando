/* Exercise selection and local, reversible solution steps. */
document.addEventListener('DOMContentLoaded',()=>{
 const params=new URLSearchParams(location.search),sections=[...document.querySelectorAll('[data-group]')];
 const valid=new Set(sections.map(s=>s.dataset.group)),legacy=location.hash.slice(1);
 const group=valid.has(params.get('gruppo'))?params.get('gruppo'):valid.has(legacy)?legacy:null;
 const titles=document.getElementById('int-practice-title'),lead=document.getElementById('int-practice-lead');
 const lessons={immediati:'integrali-immediati',sostituzione:'integrali-sostituzione',lineari:'integrali-razionali-lineari',quadratici:'integrali-razionali-quadratiche',parti:'integrali-parti',definiti:'integrali-definiti',misti:'integrali-immediati'};
 const link=document.getElementById('int-theory-link');
 if(!group){lead.textContent='Scegli un gruppo: troverai soltanto i suoi venti esercizi, con suggerimenti e soluzioni a passaggi.';return;}
 const section=sections.find(s=>s.dataset.group===group);section.hidden=false;
 document.getElementById('int-group-index').hidden=true;document.getElementById('int-all-groups').hidden=false;
 titles.textContent=section.dataset.title+': esercizi';document.title='GatitoMath – '+section.dataset.title+': esercizi';
 lead.textContent='Venti esercizi di questo gruppo. Seleziona un numero per aprire la sua card; svolgi il calcolo sul quaderno prima di confrontare la soluzione.';
 link.hidden=false;const theory=new URL('reader.html',location.href);theory.searchParams.set('lezione',lessons[group]);theory.searchParams.set('livello',params.get('livello')||'analisi1');link.querySelector('a').href=theory.href;
 const cards=[...section.querySelectorAll('[data-exercise]')],buttons=[...section.querySelectorAll('[data-open-exercise]')];

 const board=section.querySelector('.int-support-board'),boardBody=board.querySelector('.int-board-body');
 let boardTrigger=null;
 function closeBoard(focus=true){
  board.hidden=true;section.querySelector('.int-workspace').classList.remove('int-board-open');
  section.querySelectorAll('[data-board]').forEach(b=>b.setAttribute('aria-expanded','false'));
  if(focus&&boardTrigger&&!boardTrigger.closest('[hidden]'))boardTrigger.focus({preventScroll:true});
 }
 section.querySelectorAll('[data-board]').forEach(button=>button.addEventListener('click',()=>{
  if(button.getAttribute('aria-expanded')==='true'){closeBoard();return;}
  const card=button.closest('[data-exercise]'),template=card.querySelector('template[data-board-content="'+button.dataset.board+'"]');
  section.querySelectorAll('[data-board]').forEach(b=>b.setAttribute('aria-expanded','false'));
  button.setAttribute('aria-expanded','true');boardTrigger=button;
  board.querySelector('h3').textContent=(button.dataset.board==='formule'?'Formulario':'Metodo e suggerimenti')+' · esercizio '+card.dataset.exercise;
  boardBody.replaceChildren(template.content.cloneNode(true));board.hidden=false;
  section.querySelector('.int-workspace').classList.add('int-board-open');
  board.querySelector('h3').focus({preventScroll:true});
  if(matchMedia('(max-width: 880px)').matches)board.scrollIntoView({block:'start',behavior:'auto'});
 }));
 board.querySelector('.int-board-close').addEventListener('click',()=>closeBoard());
 board.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeBoard();}});
 function urlFor(exercise){const u=new URL(location.href);u.hash='';u.searchParams.set('gruppo',group);if(exercise)u.searchParams.set('esercizio',exercise);else u.searchParams.delete('esercizio');history.replaceState(null,'',u);}
 function select(exercise,focus=true){
  closeBoard(false);
  const chosen=cards.find(c=>c.dataset.exercise===String(exercise));if(!chosen)return;
  cards.forEach(c=>c.hidden=c!==chosen);buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.openExercise===String(exercise))));
  section.classList.add('int-exercise-open');urlFor(exercise);
  if(focus){chosen.scrollIntoView({block:'start',behavior:'auto'});chosen.querySelector('h3').focus({preventScroll:true});}
 }
 function overview(){closeBoard(false);cards.forEach(c=>c.hidden=true);buttons.forEach(b=>b.setAttribute('aria-pressed','false'));section.classList.remove('int-exercise-open');urlFor(null);section.scrollIntoView({block:'start',behavior:'auto'});buttons[0].focus({preventScroll:true});}
 buttons.forEach(b=>b.addEventListener('click',()=>select(b.dataset.openExercise)));
 section.querySelectorAll('.int-return-index').forEach(b=>b.addEventListener('click',overview));
 section.querySelectorAll('.int-solution').forEach(details=>{
  const steps=[...details.querySelectorAll('template.int-solution-step')],panel=details.querySelector('.int-step-panel'),previous=details.querySelector('.int-step-prev'),next=details.querySelector('.int-step-next'),progress=details.querySelector('.int-step-progress');
  let index=0,initialized=false,cleanup=()=>{};
  function render(position,direction=0){
   if(position<0||position>=steps.length)return;cleanup();index=position;
   previous.disabled=index===0;next.disabled=index===steps.length-1;next.textContent=next.disabled?'Fine della soluzione':'Avanti →';progress.textContent='Passaggio '+(index+1)+' di '+steps.length;
   const content=document.createElement('div');content.className='int-step-frame';content.append(steps[index].content.cloneNode(true));
   if(!direction||!panel.firstChild||matchMedia('(prefers-reduced-motion: reduce)').matches||!panel.animate){panel.replaceChildren(content);return;}
   const before=panel.getBoundingClientRect().height,outgoing=document.createElement('div');outgoing.className='int-step-frame int-step-outgoing';outgoing.append(...panel.childNodes);outgoing.inert=true;outgoing.setAttribute('aria-hidden','true');
   panel.classList.add('int-step-sliding');panel.replaceChildren(outgoing,content);
   const after=content.getBoundingClientRect().height,timing={duration:300,easing:'cubic-bezier(.25,.8,.25,1)',fill:'both'};
   const animations=[outgoing.animate([{transform:'translateX(0)'},{transform:'translateX('+(-direction*100)+'%)'}],timing),content.animate([{transform:'translateX('+(direction*100)+'%)'},{transform:'translateX(0)'}],timing),panel.animate([{height:before+'px'},{height:after+'px'}],timing)];
   const finish=()=>{animations.forEach(a=>a.cancel());panel.replaceChildren(content);panel.classList.remove('int-step-sliding');cleanup=()=>{};};cleanup=finish;
   animations[1].finished.then(()=>{if(cleanup===finish)finish();}).catch(()=>{});
  }
  details.addEventListener('toggle',()=>{if(details.open&&!initialized){initialized=true;render(0);}else if(!details.open)cleanup();});
  previous.addEventListener('click',()=>render(index-1,-1));next.addEventListener('click',()=>render(index+1,1));
  details.addEventListener('keydown',e=>{if(!details.open||!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();render(index+(e.key==='ArrowRight'?1:-1),e.key==='ArrowRight'?1:-1);});
 });
 const exercise=Number(params.get('esercizio'));urlFor(exercise>=1&&exercise<=cards.length?exercise:null);if(Number.isInteger(exercise)&&exercise>=1&&exercise<=cards.length)select(exercise,false);
});
