document.addEventListener('DOMContentLoaded',()=>{
 const $=id=>document.getElementById(id),params=new URLSearchParams(location.search);
 const back=new URL('lezioni.html',location.href);['ruolo','livello'].forEach(k=>{if(params.has(k))back.searchParams.set(k,params.get(k));});$('reader-back').href=back.href;
 const lesson=window.READER_LESSONS[params.get('lezione')];
 document.body.dataset.readerLesson=params.get('lezione')||'';
 if(!lesson){
  const sources={'pillole/vettori/teoria.html':'Algebra dei vettori','meccanica_punto_materiale/cinematica/teoria.html':'Cinematica · Dispensa completa','meccanica_punto_materiale/dinamica/teoria.html':'Dinamica · Dispensa completa'};
  const source=params.get('materiale');$('reader-next').hidden=true;
  if(!Object.hasOwn(sources,source)){$('reader-title').textContent='Lezione non disponibile';$('reader-section-title').textContent='Torna al catalogo e scegli una lezione.';return;}
  $('reader-title').textContent=sources[source];$('reader-subtitle').textContent='Materiale esistente';$('reader-section-title').textContent='Dispensa completa';$('reader-progress').textContent='Questo materiale non è ancora suddiviso in sviluppi del reader.';
  const frame=document.createElement('iframe');frame.className='rm-reader-legacy';frame.title=sources[source];frame.src=source;frame.setAttribute('sandbox','allow-scripts allow-same-origin');$('reader-steps').append(frame);
  frame.addEventListener('load',()=>{try{const doc=frame.contentDocument;doc.querySelectorAll('header,.sidebar,.rm-learning-back').forEach(e=>e.style.display='none');const headings=[...doc.querySelectorAll('.main h2,.main h3')];headings.forEach((h,i)=>{const b=document.createElement('button');b.textContent=h.textContent;b.addEventListener('click',()=>h.scrollIntoView({behavior:'auto',block:'start'}));$('reader-parts').append(b);});}catch{}});return;
 }
 // Learning progress belongs to this visit only. Reference cards do not award progress.
 const state=lesson.sections.map(s=>({cursor:0,reached:0,complete:false,position:2,startPosition:1,reference:{values:['',''],attempts:0,done:false,assisted:false},clock:{started:null,marks:[]},units:{values:['',''],done:false},elevator:{},velocityGraph:{},instantSpeeds:{values:['','','',''],done:false},velocityQuiz:{answer:'',stage:0,choice:null,done:false},lab:{started:null,period:8,marks:[],verified:false,answer:''}}));
 let current=0,allMode=false,reviewAccess=false,referenceMode=false,referenceBounds=null,disposeWidget=()=>{},mountedCard=null,cancelSlide=()=>{};
 const flat=s=>s.cards.flatMap((card,ci)=>card.steps.map((step,si)=>({card,ci,step,si})));
 const format=n=>Number(n).toLocaleString('it-IT',{minimumFractionDigits:2,maximumFractionDigits:2});
 const el=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
 const button=(text,fn,cls='rm-btn secondary')=>{const b=el('button',cls,text);b.type='button';b.addEventListener('click',fn);return b;};
 const unlocked=i=>reviewAccess||i===0||state[i].available||state[i-1].complete;
 $('reader-title').textContent=lesson.title;$('reader-subtitle').textContent=lesson.subtitle;document.title='GatitoMath – '+lesson.title;
 // BFCache can restore a departed page without executing DOMContentLoaded again.
 window.addEventListener('pageshow',e=>{if(e.persisted)location.reload();});
 function index(){
  $('reader-parts').replaceChildren();lesson.sections.forEach((s,i)=>{
   const b=button('',()=>open(i,true),'');b.disabled=!unlocked(i);b.setAttribute('aria-current',current===i&&!allMode?'step':'false');
   const dot=el('span','rm-part-progress'+(state[i].complete?' done':''),state[i].complete?'✓':!unlocked(i)?'🔒':String(i+1));
   dot.style.setProperty('--part-progress',Math.round(state[i].reached/flat(s).length*100)+'%');dot.setAttribute('aria-hidden','true');
   b.append(dot,el('span','',s.title));b.setAttribute('aria-label',s.title+' · '+(state[i].complete?'completata':unlocked(i)?'disponibile':'da sbloccare'));$('reader-parts').append(b);
  });
  const completed=state.filter(s=>s.complete).length;
  $('reader-progress').replaceChildren(el('span','',completed+' di '+state.length+' parti completate'));
  const track=el('span','rm-total-progress');track.setAttribute('aria-hidden','true');const fill=el('span');fill.style.width=completed/state.length*100+'%';track.append(fill);$('reader-progress').append(track);
  $('reader-show-all').hidden=false;
 }
 function celebrate(target,message,title='Ottimo lavoro!'){window.GatitoQuizReactions.show(target,message,{correct:true,title,final:target===$('reader-feedback')});}
 function retry(target,message){window.GatitoQuizReactions.show(target,message,{correct:false});}
 function finish(message){const first=!state[current].complete;state[current].complete=true;state[current].reached=flat(lesson.sections[current]).length;index();celebrate($('reader-feedback'),message,first?'Una parte in più, ci sei!':'Perfetto!');actions();if(first&&lesson.sections[current].optionalNext)showOptionalParts();}
 function showOptionalParts(){
  const destinations=lesson.sections[current].optionalNext;
  const dialog=el('dialog','rm-glossary'),title=el('h2','','Vuoi esplorare ancora?');title.id='reader-optional-title';dialog.setAttribute('aria-labelledby',title.id);
  const trivia=lesson.sections.find(s=>s.id===destinations.trivia),inProgress=trivia?.status==='work-in-progress';
  dialog.append(title,el('p','',inProgress?'Le curiosità e gli approfondimenti sulla velocità nella vita quotidiana sono ancora in lavorazione: troverai un primo prototipo del tachimetro e segnaposti per autovelox e GPS. Puoi dare un’occhiata oppure passare direttamente al riepilogo della lezione.':'Puoi scoprire le curiosità e gli approfondimenti sulla velocità nella vita quotidiana, oppure passare direttamente al riepilogo della lezione.'));
  const choices=el('div','rm-reader-actions');
  const choose=id=>{const target=lesson.sections.findIndex(s=>s.id===id);dialog.close();if(target>=0){state[target].available=true;open(target,true,1);}};
  choices.append(button(inProgress?'Anteprima · In lavorazione':'Esplora i trivia',()=>choose(destinations.trivia),'rm-btn'),button('Vai al recap',()=>choose(destinations.recap)));
  dialog.append(choices);dialog.addEventListener('close',()=>dialog.remove(),{once:true});document.body.append(dialog);dialog.showModal();
 }
 function actions(){
  if(referenceMode){
   const st=state[current],item=flat(lesson.sections[current])[st.cursor];
   $('reader-prev').hidden=st.cursor<=referenceBounds.first;$('reader-next').hidden=st.cursor>=referenceBounds.last;
   $('reader-next').disabled=stepBlocked(item);$('reader-next').textContent='Continua →';
   $('reader-step-count').textContent='Passaggio '+(st.cursor-referenceBounds.first+1)+' di '+(referenceBounds.last-referenceBounds.first+1)+' · Richiamo';
   const restart=el('a','rm-btn secondary','Inizia la lezione dall’inizio'),url=new URL(location.href);url.searchParams.delete('sezione');url.searchParams.delete('scheda');url.hash='';restart.href=url.href;
   $('reader-feedback').replaceChildren(el('p','','Stai rivedendo una card separatamente; questa vista non assegna avanzamento nella lezione.'),restart);
   return;
  }
  const count=flat(lesson.sections[current]).length,st=state[current];
  $('reader-prev').hidden=allMode||st.cursor===0;$('reader-next').hidden=allMode;
  let blocked=false;if(st.cursor<count){const item=flat(lesson.sections[current])[st.cursor];blocked=stepBlocked(item);}
  $('reader-next').disabled=blocked||(st.cursor===count&&!st.complete&&!reviewAccess);
  $('reader-next').textContent=st.cursor<count-1?'Continua →':st.cursor<count?(lesson.sections[current].quiz?'Controlla l’idea →':current<state.length-1?'Passa alla parte successiva →':'Concludi la lezione'):current<state.length-1?'Passa alla parte successiva →':'Concludi la lezione';
  $('reader-step-count').textContent=allMode?'':st.cursor<count?'Passaggio '+(st.cursor+1)+' di '+count:lesson.sections[current].quiz?'Verifica finale':'Parte completata';
 }
 function showGlossary(id){
  const term=window.READER_GLOSSARY[id];if(!term)return;
  $('glossary-title').textContent=term.title;$('glossary-kind').textContent=term.kind;$('glossary-text').textContent=term.text;
  $('reader-glossary').querySelector('.rm-glossary-links')?.remove();
  if(term.links?.length){const links=el('div','rm-glossary-links');term.links.forEach(ref=>{
   const url=new URL('reader.html',location.href);url.searchParams.set('lezione',ref.lesson);url.searchParams.set('sezione',ref.section);url.searchParams.set('scheda',String(ref.card));
   ['livello','ruolo'].forEach(k=>{if(params.has(k))url.searchParams.set(k,params.get(k));});
   const line=el('p'),a=el('a','',ref.label+' ↗');a.href=url.href;a.target='_blank';a.rel='noopener';line.append(a);links.append(line);
  });$('reader-glossary').append(links);}
  $('reader-glossary').showModal();
 }

 // Link the delta symbol in both lesson text and changing measurement readouts.
 function linkDeltaSymbols(root){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];
  while(walker.nextNode()){
   const node=walker.currentNode,parent=node.parentElement;
   if(node.data.includes('Δ')&&parent&&!parent.closest('button,a,script,style,textarea,option,svg,[data-term]'))nodes.push(node);
  }
  nodes.forEach(node=>{
   const fragment=document.createDocumentFragment(),parts=node.data.split('Δ');
   parts.forEach((part,i)=>{
    if(i){const term=el('button','rm-keyword','Δ');term.type='button';term.dataset.term='delta';term.setAttribute('aria-label','Delta: definizione di variazione');fragment.append(term);}
    if(part)fragment.append(document.createTextNode(part));
   });
   node.replaceWith(fragment);
  });
 }
 const deltaRoot=document.querySelector('.rm-reader-column');
 const deltaObserver=new MutationObserver(records=>{
  const roots=new Set();
  records.forEach(record=>{
   if(record.type==='characterData')roots.add(record.target.parentElement);
   else record.addedNodes.forEach(node=>roots.add(node.nodeType===Node.TEXT_NODE?node.parentElement:node));
  });
  roots.forEach(root=>{if(root&&root.isConnected)linkDeltaSymbols(root);});
 });
 deltaObserver.observe(deltaRoot,{childList:true,subtree:true,characterData:true});
 linkDeltaSymbols(deltaRoot);
 document.addEventListener('click',e=>{const term=e.target.closest('[data-term]');if(term)showGlossary(term.dataset.term);});
 $('reader-glossary').addEventListener('click',e=>{if(e.target===$('reader-glossary'))$('reader-glossary').close();});
 function trainPicture(box){
  const picture=el('div','rm-reference-scene');
  picture.innerHTML='<img class="rm-train-illustration" src="assets/images/reader/red-bjorne-treno-v2.webp" alt="Red resta seduto sul sedile di una carrozza; Bjorne lo saluta dalla banchina della stazione." width="960" height="640">';
  box.append(picture);
 }
 function referenceExercise(box,interactive=true){
  const st=state[current].reference,exercise=el('div','rm-inline-exercise');
  ['Rispetto alla stazione','Rispetto al sedile'].forEach((label,i)=>{
   const line=el('label','rm-sentence',label+' '),select=el('select');select.setAttribute('aria-label',label);
   [['','Scegli…'],['moto','ti muovi'],['fermo','non ti muovi']].forEach(([value,text])=>{const option=el('option','',text);option.value=value;select.append(option);});
   select.value=st.values[i];select.disabled=st.done||!interactive;select.addEventListener('change',()=>st.values[i]=select.value);line.append(select);exercise.append(line);
  });
  const feedback=el('p','rm-inline-feedback');feedback.setAttribute('role','status');
  const explanation=()=>{feedback.textContent=(st.assisted?'Completiamo insieme: rispetto alla stazione ti muovi; rispetto al sedile non ti muovi. ':'')+'Le due descrizioni possono essere entrambe corrette: cambia il riferimento. Uno stesso corpo può essere in movimento rispetto a un riferimento e fermo rispetto a un altro.';if(!st.assisted)celebrate(feedback,feedback.textContent,'Esatto, cambia il riferimento!');};
  if(st.done)explanation();else if(interactive)exercise.append(button('Verifica le due frasi',()=>{
   if(st.values.includes('')){feedback.textContent='Completa entrambe le frasi prima di verificare.';return;}
   if(st.values[0]==='moto'&&st.values[1]==='fermo'){st.done=true;exercise.querySelectorAll('select').forEach(x=>x.disabled=true);check.hidden=true;explanation();actions();}
   else{st.attempts++;if(st.attempts>=3){st.values=['moto','fermo'];st.done=true;st.assisted=true;exercise.querySelectorAll('select').forEach((x,i)=>{x.value=st.values[i];x.disabled=true;});check.hidden=true;explanation();actions();}else retry(feedback,st.attempts===1?'Osserva il sedile: si sposta insieme a te e al treno.':'La stazione rimane fuori dal treno. La tua posizione rispetto alla stazione cambia?');}
  }));
  const check=exercise.querySelector('button');exercise.append(feedback);box.append(exercise);
 }
 // This open curve is parametrized by physical arc length: equal s increments
 // use equal distances along the path, not equal SVG parameter increments.
 function positionBoard(box,kind,showDistance){
  const st=state[current],board=el('div','rm-reader-board '+(kind==='position'?'rm-position-board':'rm-displacement-board'));
  board.innerHTML='<h4>Lavagna · Un punto lungo la traiettoria</h4><svg viewBox="0 0 640 285" role="img" aria-label="Traiettoria curva graduata da meno cinque a più cinque metri"><path class="rm-trajectory" d="M50 186 C118 58 191 55 269 144 S432 249 590 93" fill="none" stroke="currentColor" stroke-width="3"/><g class="rm-metric"></g><g class="rm-origin"></g><path class="rm-positive-arrow" fill="none" stroke="var(--rm-accent)" stroke-width="3"/><circle class="rm-start-point" r="7" fill="#e7b94f"/><circle class="rm-moving-point" r="9" fill="var(--rm-accent)"/><g class="rm-point-label"><rect x="-59" y="-24" width="118" height="29" rx="10" fill="var(--rm-panel)" stroke="var(--rm-accent)"/><text text-anchor="middle" y="-5" fill="currentColor" font-size="16"></text></g></svg><label>Posizione <span class="rm-coordinate-name">s</span>: <output></output><input type="range" min="-5" max="5" step="0.01" aria-label="Posizione lungo la traiettoria"></label><p class="rm-board-description"></p>';
  const input=board.querySelector('input');input.value=st.position;
  if(kind==='position'){
   const label=input.parentElement,output=label.querySelector('output');
   output.hidden=true;label.replaceChildren(output,input);
   board.querySelector('.rm-board-description').hidden=true;
  }
  let initialInput=null,initialOutput=null;
  if(kind==='displacement'){
   const initial=el('label');initial.innerHTML='Posizione iniziale s₁: <output></output><input type="range" min="-5" max="5" step="0.01" aria-label="Posizione iniziale lungo la traiettoria">';
   board.insertBefore(initial,input.parentElement);initialInput=initial.querySelector('input');initialInput.value=st.startPosition;initialOutput=initial.querySelector('output');
   input.setAttribute('aria-label','Posizione finale lungo la traiettoria');
  }
  box.insertBefore(board,box.querySelector('.rm-card-title').nextSibling);
  const svg=board.querySelector('svg'),path=svg.querySelector('.rm-trajectory'),length=path.getTotalLength(),ns='http://www.w3.org/2000/svg';
  const at=s=>path.getPointAtLength((s+5)/10*length);
  const make=(tag,attrs,text)=>{const n=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));if(text!==undefined)n.textContent=text;return n;};
  for(let s=-5;s<=5;s++){
   const p=at(s),before=at(Math.max(-5,s-.01)),after=at(Math.min(5,s+.01)),angle=Math.atan2(after.y-before.y,after.x-before.x),nx=-Math.sin(angle),ny=Math.cos(angle);
   svg.querySelector('.rm-metric').append(make('path',{d:`M${p.x-6*nx} ${p.y-6*ny}L${p.x+6*nx} ${p.y+6*ny}`,stroke:'currentColor'}),make('text',{x:p.x+22*nx,y:p.y+22*ny+5,'text-anchor':'middle',fill:'currentColor','font-size':13},s+' m'));
  }
  const origin=at(0);svg.querySelector('.rm-origin').append(make('circle',{cx:origin.x,cy:origin.y,r:14,fill:'var(--rm-panel)',stroke:'var(--rm-accent)','stroke-width':3}),make('text',{x:origin.x,y:origin.y+5,'text-anchor':'middle',fill:'currentColor','font-size':14},'O'));
  const a=at(4.5),b=at(4.7),angle=Math.atan2(b.y-a.y,b.x-a.x);svg.querySelector('.rm-positive-arrow').setAttribute('d',`M${a.x} ${a.y-19}L${b.x} ${b.y-19}m${-9*Math.cos(angle-.5)} ${-9*Math.sin(angle-.5)}L${b.x} ${b.y-19}l${-9*Math.cos(angle+.5)} ${-9*Math.sin(angle+.5)}`);
  svg.append(make('text',{x:b.x,y:b.y-35,fill:'var(--rm-accent)','font-size':13},'verso +'));
  const startPoint=svg.querySelector('.rm-start-point');startPoint.style.display=kind==='displacement'?'':'none';
  let initialLabel=null;
  if(kind==='displacement'){initialLabel=svg.querySelector('.rm-point-label').cloneNode(true);initialLabel.setAttribute('class','rm-initial-label');initialLabel.querySelector('rect').setAttribute('stroke','#e7b94f');svg.append(initialLabel);}
  const coordinateName=board.querySelector('.rm-coordinate-name');if(coordinateName)coordinateName.textContent=kind==='displacement'?'finale s₂':'s';
  function update(nextShowDistance){
   if(typeof nextShowDistance==='boolean')showDistance=nextShowDistance;
   const s=Number(input.value),p=at(s);st.position=s;const label=svg.querySelector('.rm-point-label');label.setAttribute('transform',`translate(${p.x},${p.y-32})`);label.querySelector('text').textContent=(kind==='displacement'?'s₂':'s')+' = '+format(s)+' m';
   const point=svg.querySelector('.rm-moving-point');point.setAttribute('cx',p.x);point.setAttribute('cy',p.y);input.parentElement.querySelector('output').textContent=format(s)+' m';
   input.setAttribute('aria-valuetext',format(s)+' metri');
   const s1=initialInput?Number(initialInput.value):1,delta=s-s1;
   if(initialInput){st.startPosition=s1;const start=at(s1);startPoint.setAttribute('cx',start.x);startPoint.setAttribute('cy',start.y);initialLabel.setAttribute('transform',`translate(${start.x},${start.y+48})`);initialLabel.querySelector('text').textContent='s₁ = '+format(s1)+' m';initialOutput.textContent=format(s1)+' m';initialInput.setAttribute('aria-valuetext',format(s1)+' metri');}
   board.querySelector('.rm-board-description').textContent=kind==='displacement'?`Partenza s₁ = ${format(s1)} m · Arrivo s₂ = ${format(s)} m · Δs = ${format(delta)} m`:`Posizione s = ${format(s)} m`+(showDistance?` · Distanza dall’origine lungo la traiettoria |s| = ${format(Math.abs(s))} m`:'');

   box.querySelectorAll('.rm-current-position').forEach(node=>node.textContent=`Sposta il punto con il cursore: in questo momento occupa la posizione s = ${format(s)} m.`);
   box.querySelectorAll('.rm-position-sign').forEach(node=>node.textContent=s===0?'In questo momento s = 0,00 m: il punto si trova nell’origine.':`In questo momento s = ${format(s)} m: il punto si trova a ${format(Math.abs(s))} m dall’origine, misurati lungo la traiettoria nel verso ${s>0?'positivo':'negativo'}.`);
   const displacement=box.querySelector('.rm-displacement-example');if(displacement)displacement.textContent=`Sulla lavagna parti da s₁ = ${format(s1)} m e arrivi a s₂ = ${format(s)} m: Δs = ${format(s)} m − (${format(s1)} m) = ${format(delta)} m.`;
   const sign=box.querySelector('.rm-displacement-sign');if(sign)sign.textContent=delta>0?`Qui Δs = +${format(delta)} m: la posizione finale si trova nel verso positivo rispetto a quella iniziale.`:delta<0?`Qui Δs = ${format(delta)} m: la posizione finale si trova nel verso negativo rispetto a quella iniziale.`:'Qui Δs = 0,00 m: le posizioni iniziale e finale coincidono, anche se il corpo potrebbe essersi mosso e poi essere tornato al punto di partenza.';
   const example=box.querySelector('.rm-position-example');if(example)example.textContent=`Sulla lavagna la posizione è s = ${format(s)} m: la distanza dall’origine lungo la traiettoria è |s| = ${format(Math.abs(s))} m. Sposta il punto per osservare come cambiano questi valori.`;
  }input.addEventListener('input',update);if(initialInput)initialInput.addEventListener('input',update);update();return update;
 }
 function stopwatch(box,lab=false){
  const st=lab?state[current].lab:state[current].clock;
  const board=el('div','rm-reader-board rm-stopwatch-board');
  const currentTime=()=>st.started===null?0:(performance.now()-st.started)/1000;
  board.innerHTML='<h4>'+ (lab?'Misura un giro completo':'Lavagna · Il cronometro')+'</h4><div class="rm-clock"><button type="button" class="rm-clock-top">Avvia</button><div class="rm-clock-face"><span>CRONOMETRO</span><strong class="rm-clock-reading"></strong><span class="rm-clock-unit">secondi</span></div></div><div class="rm-clock-marks" aria-live="polite"></div><div class="rm-clock-controls"></div>';
  const marks=board.querySelector('.rm-clock-marks'),record=board.querySelector('.rm-clock-top');
  function show(){
   marks.replaceChildren();marks.append(el('p','',`t₁ = ${st.marks.length?format(st.marks[0])+' s':'—'} · t₂ = ${st.marks.length>1?format(st.marks[1])+' s':'—'}`));
   marks.append(el('p','rm-formula','Δt = '+(st.marks.length===2?format(st.marks[1]-st.marks[0])+' s':'—')));
   record.textContent=st.started===null?'Avvia':st.marks.length===0?'Registra t₁':'Registra t₂';
   record.setAttribute('aria-label',st.started===null?'Avvia il cronometro':st.marks.length===0?'Registra il primo istante':'Registra il secondo istante');
   record.disabled=st.marks.length===2||st.verified;
   if(lab)board.dispatchEvent(new Event('measurement'));
  }
  record.addEventListener('click',()=>{
   if(st.started===null){st.started=performance.now();}
   else if(st.marks.length<2)st.marks.push(Number(currentTime().toFixed(2)));
   show();tick();
  });
  const clear=reset=>{st.marks=[];if(reset)st.started=null;if(lab){st.verified=false;st.answer='';const answer=box.querySelector('.rm-period-answer input');if(answer)answer.value='';$('reader-feedback').textContent='';}show();tick();};
  board.querySelector('.rm-clock-controls').append(button('Cancella le letture',()=>clear(false)),button('Ferma e azzera',()=>clear(true)));
  box.append(board);show();
  function tick(){board.querySelector('.rm-clock-reading').textContent=format(currentTime());}
  tick();const timer=setInterval(tick,50);disposeWidget=()=>clearInterval(timer);return {board,st,show};
 }
 function periodLab(box){
  const st=state[current].lab;
  const intro=el('p');intro.innerHTML='Il <button class="rm-keyword" data-term="periodo" type="button">periodo</button> è la durata di un giro completo. Avvia il cronometro, poi registra t₁ quando la parte anteriore della locomotiva attraversa la fascia gialla e nera accanto al semaforo e t₂ al passaggio successivo, dopo un giro. La differenza Δt mostra la durata misurata: scrivi il valore che leggi nel riquadro qui sotto e premi «Verifica la misura».';box.append(intro);
  const scene=el('div','rm-period-scene');scene.innerHTML='<div class="rm-room-stage rm-room-stage--topdown"><img class="rm-room-backdrop" src="assets/images/reader/period-lab/room-topdown-v2.webp" width="1536" height="1024" alt="Red e Bjorne con i radiocomandi al centro dei binari; la traversina gialla e nera vicino al semaforo indica il punto di misura."><img class="rm-room-rails" src="assets/images/reader/period-lab/track-topdown-v2.webp" width="1536" height="1024" alt="Circuito ovale a rotaie equidistanti; traversina gialla e nera accanto alla stazione."><canvas class="rm-room-train-anchor" width="1536" height="1024" role="img" aria-label="Locomotiva in movimento"></canvas><img class="rm-room-balloon rm-red-balloon" src="assets/images/reader/period-lab/red-balloon-v2.webp" alt="Più veloce!!! Meow" hidden><img class="rm-room-balloon rm-bjorne-balloon" src="assets/images/reader/period-lab/bjorne-balloon-v1.png" alt="Piano. Piano." hidden></div>';
  const room=scene.querySelector('.rm-room-stage');
  let balloonTimer;
  function speak(cat){scene.querySelectorAll('.rm-room-balloon').forEach(b=>b.hidden=true);const balloon=scene.querySelector('.rm-'+cat+'-balloon');balloon.hidden=false;clearTimeout(balloonTimer);balloonTimer=setTimeout(()=>balloon.hidden=true,3000);}
  const change=delta=>{if(st.marks.length){$('reader-feedback').textContent='Cancella prima le letture per cambiare la velocità.';return;}st.period=Math.max(4,Math.min(14,st.period+delta));st.verified=false;$('reader-feedback').textContent=delta<0?'Red accelera il trenino. Misura il nuovo periodo.':'Bjorne rallenta il trenino. Misura il nuovo periodo.';};
  const redHit=button('',()=>{change(-2);speak('red');}),bjorneHit=button('',()=>{change(2);speak('bjorne');});redHit.className='rm-cat-hotspot rm-red-hotspot';bjorneHit.className='rm-cat-hotspot rm-bjorne-hotspot';redHit.setAttribute('aria-label','Red: aumenta la velocità del trenino');bjorneHit.setAttribute('aria-label','Bjorne: diminuisci la velocità del trenino');room.append(redHit,bjorneHit);
  const stage=el('div','rm-lab-stage');stage.append(scene);box.append(stage);
  const clock=stopwatch(box,true),clockDispose=disposeWidget;const bench=el('div','rm-lab-workbench');box.insertBefore(bench,stage);bench.append(stage,clock.board);
  const track=window.READER_TRAIN_TOPDOWN,anchor=scene.querySelector('.rm-room-train-anchor');
  const context=anchor.getContext('2d'),locomotive=new Image();
  locomotive.decoding='async';locomotive.src='assets/images/reader/period-lab/locomotive-topdown-v1.webp';
  // Fixed wheel gauge in the overhead sprite: no perspective zoom, warping, or frame changes.
  const spriteScale=track.gauge/506,spriteAnchor={x:887,y:431};
  let cycle=0,previous=performance.now(),raf,disposed=false;
  function animate(now){
   cycle=(cycle+(now-previous)/1000/st.period)%1;previous=now;
   const p=track.pose(cycle);
   context.setTransform(1,0,0,1,0,0);context.clearRect(0,0,track.width,track.height);
   context.save();context.translate(p.x,p.y);context.rotate(p.heading);context.scale(spriteScale,spriteScale);
   context.drawImage(locomotive,-spriteAnchor.x,-spriteAnchor.y,1774,887);context.restore();
   anchor.dataset.phase=String(cycle);anchor.dataset.heading=String(p.heading);anchor.dataset.scale=String(spriteScale);anchor.dataset.period=String(st.period);
   raf=requestAnimationFrame(animate);
  }
  locomotive.decode().then(()=>{if(disposed)return;previous=performance.now();raf=requestAnimationFrame(animate);}).catch(()=>{
   if(!disposed)$('reader-feedback').textContent='La locomotiva non è stata caricata. Riapri questa parte della lezione.';
  });
  const answerBox=el('div','rm-period-answer'),answerLabel=el('label');
  answerLabel.append(el('span','','Periodo misurato: '));const answer=el('input');answer.type='text';answer.inputMode='decimal';answer.setAttribute('aria-label','Periodo misurato in secondi');answer.setAttribute('autocomplete','off');answer.value=st.answer;answerLabel.append(answer,el('span','','s'));answerBox.append(answerLabel);clock.board.append(answerBox);
  answer.addEventListener('input',()=>{st.answer=answer.value;st.verified=false;$('reader-feedback').textContent='';sync();});
  const verify=button('Verifica la misura',()=>{
   if(st.marks.length!==2){$('reader-feedback').textContent='Registra i due istanti prima di verificare.';return;}
   const value=answer.value.trim().replace(',','.');const reported=Number(value);
   if(!value||!Number.isFinite(reported)||reported<=0){$('reader-feedback').textContent='Inserisci la misura del periodo in secondi, per esempio 8,12.';return;}
   const measured=st.marks[1]-st.marks[0],tolerance=Math.max(.6,st.period*.08);
   if(Math.abs(reported-measured)>.05){retry($('reader-feedback'),'Il valore inserito non coincide con Δt sul cronometro. Controlla la lettura e riportala nel riquadro in secondi.');return;}
   if(Math.abs(reported-st.period)>tolerance){retry($('reader-feedback'),'La durata misurata non corrisponde a un giro completo. Cancella le letture e riprova: registra due passaggi consecutivi sul segno giallo. Una piccola differenza dovuta al tempo di reazione va bene.');return;}
   st.verified=true;clock.show();finish('Misura riuscita! Il periodo misurato è Δt = '+format(reported)+' s.');
  },'rm-btn primary');clock.board.append(verify);
  const sync=()=>{redHit.disabled=bjorneHit.disabled=st.marks.length>0;verify.disabled=st.marks.length!==2||st.verified;};clock.board.addEventListener('measurement',sync);sync();
  disposeWidget=()=>{clockDispose();disposed=true;cancelAnimationFrame(raf);clearTimeout(balloonTimer);if(!st.verified)st.marks=[];};
 }
 function unitsExercise(box,interactive=true){
  const st=state[current].units,exercise=el('div','rm-inline-exercise rm-unit-exercise'),choicesBox=el('div','rm-unit-choices');
  const correct=['0.001','3600'],values=interactive?st.values:correct;
  const choices=[[['0.001','0,001'],['0.01','0,01']],[['60','60'],['3600','3600']]];
  ['1 m =','1 h ='].forEach((text,i)=>{
   const line=el('label','rm-sentence',text+' '),select=el('select');
   select.setAttribute('aria-label',i===0?'Un metro in chilometri':'Un’ora in secondi');
   [['','Scegli…'],...choices[i]].forEach(([value,text])=>{const option=el('option','',text);option.value=value;select.append(option);});
   select.value=values[i];select.disabled=st.done||!interactive;
   select.addEventListener('change',()=>st.values[i]=select.value);
   line.append(select,el('span','',i===0?'km':'s'));choicesBox.append(line);
  });
  const feedback=el('p','rm-inline-feedback');feedback.setAttribute('role','status');
  const result=el('div','rm-unit-result');result.hidden=!(st.done||!interactive);
  result.innerHTML="<span class=\"rm-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" displaystyle=\"true\"><mrow><mfrac><mrow><mn>1</mn><mi mathvariant=\"normal\">m</mi></mrow><mrow><mn>1</mn><mi mathvariant=\"normal\">s</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>0,001</mn><mi mathvariant=\"normal\">km</mi></mrow><mrow><mfrac><mn>1</mn><mn>3600</mn></mfrac><mi mathvariant=\"normal\">h</mi></mrow></mfrac><mo>=</mo><mn>3,6</mn><mfrac><mi mathvariant=\"normal\">km</mi><mi mathvariant=\"normal\">h</mi></mfrac></mrow></math></span>";
  const check=button('Verifica le equivalenze',()=>{
   if(st.values.includes('')){feedback.textContent='Scegli un valore per entrambe le equivalenze.';return;}
   if(st.values.some((v,i)=>v!==correct[i])){retry(feedback,'Riprova: 1 km contiene 1000 m e un’ora contiene 60 minuti di 60 secondi ciascuno.');return;}
   st.done=true;exercise.querySelectorAll('select').forEach(s=>s.disabled=true);check.hidden=true;
   celebrate(feedback,'Esatto! Ora usiamo queste equivalenze nel rapporto.');result.hidden=false;
   if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&result.animate)result.animate([{opacity:0,transform:'translateX(36px)'},{opacity:1,transform:'none'}],{duration:260,easing:'ease-out'});
   actions();
  });
  check.hidden=st.done||!interactive;choicesBox.append(check);exercise.append(choicesBox,result,feedback);box.append(exercise);
 }
 function velocityUnitsQuiz(box){
  const st=state[current].velocityQuiz;
  box.append(el('p','','Un’auto percorre 20 km in 30 minuti, procedendo sempre nel verso positivo. Quanto vale la sua velocità scalare media in km/h?'));
  const line=el('label','rm-sentence','Velocità media: '),answer=el('input');answer.type='text';answer.inputMode='decimal';answer.setAttribute('aria-label','Velocità media in chilometri orari');answer.value=st.answer;answer.disabled=st.stage>0;answer.addEventListener('input',()=>st.answer=answer.value);line.append(answer,el('span','','km/h'));box.append(line);
  if(st.stage===0){
   const verify=()=>{const raw=answer.value.trim().replace(',','.');const value=Number(raw);
    if(!raw||!Number.isFinite(value)){$('reader-feedback').textContent='Inserisci un valore numerico in km/h.';return;}
    if(Math.abs(value-40)<.000001){st.stage=1;checkpoint();celebrate($('reader-feedback'),'Esatto: 30 minuti sono 0,5 ore, quindi 20 ÷ 0,5 = 40 km/h.');}
    else retry($('reader-feedback'),'Riprova: esprimi prima i 30 minuti in ore, poi dividi lo spostamento per quella durata.');
   };answer.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();verify();}});box.append(button('Verifica il calcolo',verify));return;
  }
  box.append(el('h4','','Convertiamo in metri al secondo'),el('p','','Quale valore in m/s corrisponde a 40 km/h?'));
  ['Circa 11,1 m/s','40 m/s','144 m/s'].forEach((text,i)=>{
   const label=el('label'),radio=el('input');radio.type='radio';radio.name='velocity-conversion';radio.value=i;radio.checked=st.choice===i;radio.disabled=st.done;radio.addEventListener('change',()=>st.choice=i);label.append(radio,el('span','',text));box.append(label);
  });
  if(st.done){$('reader-feedback').textContent='Quiz completato: 40 km/h corrispondono a circa 11,1 m/s.';return;}
  box.append(button('Verifica la conversione',()=>{
   if(st.choice===null){$('reader-feedback').textContent='Scegli una risposta prima di verificare.';return;}
   if(st.choice===0){st.done=true;box.querySelectorAll('input[type=radio]').forEach(input=>input.disabled=true);finish('40 km/h ÷ 3,6 ≈ 11,1 m/s. Hai completato entrambe le parti del quiz.');}
   else retry($('reader-feedback'),'Per passare da km/h a m/s devi dividere per 3,6. Riprova.');
  }));
 }
 function stepBlocked(item){
  return !reviewAccess&&((item.step.interaction==='instant-speeds'&&!state[current].instantSpeeds.done)||(item.step.interaction==='elevator-challenges'&&!state[current].elevator.done)||(item.step.interaction==='train-reference'&&!state[current].reference.done)||(item.step.interaction==='units-conversion'&&!state[current].units.done));
 }
 function instantSpeedsExercise(box,interactive=true){
  const st=state[current].instantSpeeds,labels=['Morgana lungo il percorso','Red prima del chiosco','Red durante la pausa','Red dopo la pausa'],expected=[2,6,0,2],host=el('div','rm-instant-speeds');
  const inputs=labels.map((text,i)=>{const label=el('label','',text+' '),input=el('input');input.type='text';input.inputMode='decimal';input.setAttribute('aria-label',text+': velocità in m/s');input.value=interactive?st.values[i]:String(expected[i]);input.disabled=!interactive||st.done;input.oninput=()=>st.values[i]=input.value;label.append(input,el('span','','m/s'));host.append(label);return input;});
  const feedback=el('p','');feedback.setAttribute('role','status');
  if(interactive){const verify=button('Verifica le velocità',()=>{const correct=st.values.every((x,i)=>x.trim()!==''&&Number.isFinite(Number(x.trim().replace(',','.')))&&Math.abs(Number(x.trim().replace(',','.'))-expected[i])<.01);if(!correct){retry(feedback,'Rivedi le etichette: controlla i tratti prima e dopo il chiosco e la pausa. Puoi fermare l’animazione.');return;}st.done=true;inputs.forEach(input=>input.disabled=true);verify.disabled=true;celebrate(feedback,'Corretto: Morgana mantiene 2 m/s; Red passa da 6 m/s a una velocità nulla e poi a 2 m/s.');actions();});verify.disabled=st.done;host.append(verify);if(st.done)feedback.textContent='Velocità completate correttamente.';}
  host.append(feedback);box.append(host);
 }
 function checkpoint(){
  const s=lesson.sections[current],box=$('reader-checkpoint');box.replaceChildren();box.hidden=false;box.append(el('h3','','Controlla l’idea'));
  if(s.quiz.type==='period-lab'){periodLab(box);return;}
  if(s.quiz.type==='velocity-graph'){window.GatitoVelocityGraph.mount(box,state[current].velocityGraph,()=>finish('Hai letto correttamente la funzione velocità nei quattro istanti.'));return;}
  if(s.quiz.type==='velocity-units'){velocityUnitsQuiz(box);return;}
  const q=el('p','',s.quiz.question);box.append(q);
  s.quiz.options.forEach((option,i)=>{const label=el('label'),input=el('input');input.type='radio';input.name='checkpoint';input.value=i;label.append(input,el('span','',option));box.append(label);});
  box.append(button('Verifica',()=>{const selected=box.querySelector('input:checked');if(!selected){$('reader-feedback').textContent='Scegli una risposta prima di verificare.';return;}
   if(Number(selected.value)===s.quiz.answer)finish('Corretto. '+s.quiz.feedback);
   else retry($('reader-feedback'),(s.id==='inizio'?'Dire soltanto “il corpo è fermo” lascia una domanda aperta: rispetto a che cosa? ':s.quiz.feedback+' ')+'Puoi rileggere e riprovare.');
  }));
  if(state[current].complete)$('reader-feedback').textContent='Questa parte è già completata. Puoi rivedere il quiz o proseguire.';
 }
 // Keep the board mounted while changing the text, rather than recreating the card.
 function stepNode(step,archived=false){
  const article=el('div','rm-reader-step');if(step.title)article.append(el('h4','',step.title));
  const p=el('p');p.innerHTML=step.html;article.append(p);
  if(step.interaction==='train-reference')referenceExercise(article,!archived);
  if(step.interaction==='units-conversion')unitsExercise(article,!archived);
  if(step.interaction==='instant-speeds')instantSpeedsExercise(article,!archived);
  return article;
 }
 function slideSwap(host,previous,next,direction,beforeHeight){
  cancelSlide();
  if(!direction||matchMedia('(prefers-reduced-motion: reduce)').matches||!host.animate){host.replaceChildren(...next);return;}
  const before=beforeHeight??host.getBoundingClientRect().height;
  const outgoing=el('div','rm-slide-frame rm-slide-outgoing'),incoming=el('div','rm-slide-frame');
  outgoing.append(...previous);outgoing.inert=true;outgoing.setAttribute('aria-hidden','true');
  incoming.append(...next);host.classList.add('rm-slide-viewport');host.replaceChildren(outgoing,incoming);
  const after=incoming.getBoundingClientRect().height;
  const timing={duration:340,easing:'cubic-bezier(.25,.8,.25,1)',fill:'both'};
  const animations=[
   outgoing.animate([{transform:'translateX(0)'},{transform:`translateX(${-direction*100}%)`}],timing),
   incoming.animate([{transform:`translateX(${direction*100}%)`},{transform:'translateX(0)'}],timing),
   host.animate([{height:before+'px'},{height:after+'px'}],timing)
  ];
  const cleanup=()=>{animations.forEach(a=>a.cancel());host.replaceChildren(...incoming.childNodes);host.classList.remove('rm-slide-viewport');cancelSlide=()=>{};};
  cancelSlide=cleanup;animations[1].finished.then(()=>{if(cancelSlide===cleanup)cleanup();}).catch(()=>{});
 }
 function updateCard(item,direction){
  const view=mountedCard;cancelSlide();
  const replace=item.card.stepMode==='replace'||!!item.step.replace;
  const wanted=replace?[item.step]:item.card.steps.slice(0,item.si+1);
  if(replace||view.replace){
   const previous=[...view.text.childNodes],next=wanted.map(step=>stepNode(step));
   slideSwap(view.text,previous,next,direction);
  }else{
   const removed=[...view.text.children].slice(wanted.length);
   if(removed.length&&direction&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&removed[0].animate){
    const animations=removed.map(node=>{
     node.inert=true;node.setAttribute('aria-hidden','true');node.style.overflow='hidden';node.style.boxSizing='border-box';
     return node.animate([
      {height:node.getBoundingClientRect().height+'px',opacity:1,transform:'none',paddingTop:'14px',paddingBottom:'14px'},
      {height:'0px',opacity:0,transform:'translateX(-36px)',paddingTop:'0px',paddingBottom:'0px',borderTopWidth:'0px'}
     ],{duration:260,easing:'ease-out',fill:'both'});
    });
    const cleanup=()=>{animations.forEach(a=>a.cancel());removed.forEach(node=>node.remove());cancelSlide=()=>{};};
    cancelSlide=cleanup;Promise.all(animations.map(a=>a.finished)).then(()=>{if(cancelSlide===cleanup)cleanup();}).catch(()=>{});
   }else removed.forEach(node=>node.remove());
   while(view.text.children.length<wanted.length){
    const node=stepNode(wanted[view.text.children.length]);view.text.append(node);
    if(direction&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&node.animate)
     node.animate([{opacity:0,transform:`translateX(${direction*36}px)`},{opacity:1,transform:'none'}],{duration:260,easing:'ease-out'});
   }
  }
  view.replace=replace;
  if(view.updateBoard)view.updateBoard(wanted.length>=3);
  if(item.card.board==='law-motion'){const graph=view.box.querySelector('.rm-law-graph');if(graph)graph.hidden=!item.step.lawGraph;}
  if(item.card.board==='velocity-instant'){const graph=view.box.querySelector('.vs-graph');if(graph){const show=!!item.step.velocityGraph;const play=view.box.querySelector('.vs-play');if(show&&graph.hidden&&play?.textContent==='Rivedi')play.click();graph.hidden=!show;view.box.querySelector('.rm-velocity-scene').classList.toggle('vs-withgraph',show);}}
 }
 function renderCard(card,steps,archived=false,collapsed=false){
  const box=el('article','rm-reader-card'+(archived?' rm-reader-card-previous':''));
  if(collapsed){
   const details=el('details','rm-reader-recap'),summary=el('summary');
   summary.append(el('span','',card.title),el('span','rm-recap-toggle','Rivedi'));
   details.append(summary,box);$('reader-steps').append(details);
   details.addEventListener('toggle',()=>summary.querySelector('.rm-recap-toggle').textContent=details.open?'Comprimi':'Rivedi');
  }else $('reader-steps').append(box);
  if(!card.hideTitle)box.append(el('h3','rm-card-title',card.title));
  if(card.title==='Benvenuta, benvenuto!'||card.title==='Benvenuta, Benvenuto!'){box.classList.add('rm-welcome-card');const cat=el('img','rm-welcome-cat');cat.src='assets/images/reader/red-bjorne-benvenuto-v1.png';cat.alt='Red e Bjorne ti danno il benvenuto e ti salutano con una zampina';cat.width=240;cat.height=160;box.append(cat);}
  if(card.illustration){const picture=el('div','rm-reference-scene'),img=el('img','rm-train-illustration');img.src=card.illustration.src;img.alt=card.illustration.alt;img.width=card.illustration.width;img.height=card.illustration.height;img.style.objectFit='contain';img.style.mask='none';img.style.webkitMask='none';picture.append(img);box.append(picture);}
  if(card.board==='elevator'&&window.GatitoElevator)disposeWidget=window.GatitoElevator.mount(box,state[current].elevator,()=>{actions();if(!referenceMode&&!allMode)$('reader-next').click();},archived||allMode);
  if(card.board==='velocity-instant'&&window.GatitoVelocityScene)disposeWidget=window.GatitoVelocityScene.mount(box,{instant:true,graph:steps.some(step=>step.velocityGraph)});
  if(card.board==='law-motion'&&window.GatitoLawMotion){box.classList.add('rm-law-card');disposeWidget=window.GatitoLawMotion.mount(box,state[current].lawMotion||(state[current].lawMotion={time:0}),{graph:steps.some(step=>step.lawGraph)});}
  if(card.board==='velocity-story'&&window.GatitoVelocityScene){box.classList.add('rm-velocity-story-card');disposeWidget=window.GatitoVelocityScene.mount(box);}
  if(['wheel-speed','road-speed'].includes(card.board)&&window.GatitoSpeedInstruments)disposeWidget=window.GatitoSpeedInstruments.mount(box,card.board);
  if(card.board==='train-reference'){box.classList.add('rm-train-reference-card');trainPicture(box);}
  if(card.board==='stopwatch'&&!archived)stopwatch(box);
  const text=el('div','rm-card-text');steps.forEach(step=>text.append(stepNode(step,archived)));box.append(text);
  const units=text.querySelector('.rm-unit-exercise');if(units){box.classList.add('rm-units-card');box.append(units);}
  const updateBoard=card.board==='position'||card.board==='displacement'?positionBoard(box,card.board,steps.length>=3):null;
  if(!archived&&!allMode)mountedCard={section:current,card,box,text,updateBoard,replace:card.stepMode==='replace'||!!steps.at(-1)?.replace};
 }
 function render(direction=0){
  const section=lesson.sections[current],item=flat(section)[state[current].cursor];
  if(!allMode&&item&&mountedCard?.section===current&&mountedCard.card===item.card){
   updateCard(item,direction);$('reader-feedback').textContent='';index();actions();return;
  }
  cancelSlide();const previousHeight=$('reader-steps').getBoundingClientRect().height;const previous=direction?[...$('reader-steps').childNodes]:[];mountedCard=null;
  disposeWidget();disposeWidget=()=>{};$('reader-steps').replaceChildren();$('reader-checkpoint').replaceChildren();$('reader-checkpoint').hidden=true;$('reader-feedback').textContent='';
  const s=lesson.sections[current],st=state[current],items=flat(s);$('reader-section-title').textContent=s.title+(referenceMode?' · Richiamo':'');
  if(st.cursor===items.length){if(s.quiz)checkpoint();else $('reader-feedback').textContent='Lezione completata. Puoi rivedere le parti dall’indice o scegliere «Mostra tutto».';}else{
   const item=items[st.cursor];if((item.card.retainPrevious||item.card.collapsePrevious)&&item.ci>0)renderCard(s.cards[item.ci-1],s.cards[item.ci-1].steps,true,!!item.card.collapsePrevious);
   renderCard(item.card,item.card.stepMode==='replace'||item.step.replace?[item.step]:item.card.steps.slice(0,item.si+1));
  }if(previous.length&&$('reader-steps').children.length)slideSwap($('reader-steps'),previous,[...$('reader-steps').childNodes],direction,previousHeight);index();actions();
 }
 function top(){const target=$('reader-section-title');target.focus({preventScroll:true});target.scrollIntoView({block:'start',behavior:'auto'});}
 function open(i,focus=false,direction=0){if(!unlocked(i))return;allMode=false;referenceMode=false;current=i;if(!lesson.sections[i].quiz&&state[i].cursor===flat(lesson.sections[i]).length)state[i].cursor=0;render(direction);history.replaceState(null,'','#'+lesson.sections[i].id);if(focus)top();}
 $('reader-next').addEventListener('click',()=>{
  if(referenceMode){const st=state[current],item=flat(lesson.sections[current])[st.cursor];if(st.cursor>=referenceBounds.last||stepBlocked(item))return;st.cursor++;render(1);return;}
  const st=state[current],items=flat(lesson.sections[current]);
  if(st.cursor<items.length){const item=items[st.cursor];if(stepBlocked(item))return;
   st.cursor++;st.reached=Math.max(st.reached,st.cursor);
   if(st.cursor===items.length&&!lesson.sections[current].quiz){state[current].complete=true;if(current<state.length-1){open(current+1,true,1);return;}render();$('reader-next').hidden=true;top();return;}
   const replaces=st.cursor===items.length||items[st.cursor].ci!==item.ci||item.card.stepMode==='replace';render(1);if(replaces&&items[st.cursor]?.ci!==item.ci)top();
  }else if(st.complete||reviewAccess){if(current<state.length-1)open(current+1,true,1);else{$('reader-feedback').textContent='Lezione completata! Nell’indice puoi rivedere le parti o scegliere «Mostra tutto».';$('reader-next').hidden=true;}}
 });
 $('reader-prev').addEventListener('click',()=>{if(referenceMode){if(state[current].cursor>referenceBounds.first){state[current].cursor--;render(-1);}return;}if(state[current].cursor>0){const previous=flat(lesson.sections[current])[state[current].cursor];state[current].cursor--;render(-1);if(flat(lesson.sections[current])[state[current].cursor].ci!==previous?.ci)top();}});
 // Horizontal swipes navigate only the already unlocked learning path.
 let touch=null;const column=document.querySelector('.rm-reader-column');
 column.addEventListener('touchstart',e=>{if(e.target.closest('input,select,button,.rm-reader-board'))return;const p=e.changedTouches[0];touch={x:p.clientX,y:p.clientY};},{passive:true});
 column.addEventListener('touchend',e=>{if(!touch)return;const p=e.changedTouches[0],dx=p.clientX-touch.x,dy=p.clientY-touch.y;touch=null;if(Math.abs(dx)<75||Math.abs(dy)>50)return;const b=dx>0?$('reader-prev'):$('reader-next');if(!b.hidden&&!b.disabled)b.click();},{passive:true});
 $('reader-show-all').addEventListener('click',()=>{
  referenceMode=false;reviewAccess=true;cancelSlide();mountedCard=null;disposeWidget();disposeWidget=()=>{};allMode=true;$('reader-section-title').textContent='La lezione completa';$('reader-steps').replaceChildren();$('reader-checkpoint').hidden=true;$('reader-feedback').textContent='';
  lesson.sections.forEach((s,i)=>{current=i;$('reader-steps').append(el('h2','rm-all-section',s.title));s.cards.forEach(card=>renderCard(card,card.steps,true));});actions();index();top();
 });
 // Old localStorage entries from reader v1 are intentionally never read.
 const referenceSection=lesson.sections.findIndex(s=>s.id===params.get('sezione'));
 const referenceCard=params.has('scheda')?Number(params.get('scheda')):NaN;
 if(referenceSection>=0&&Number.isInteger(referenceCard)&&referenceCard>=0&&referenceCard<lesson.sections[referenceSection].cards.length){
  referenceMode=true;current=referenceSection;const items=flat(lesson.sections[current]);
  const first=items.findIndex(item=>item.ci===referenceCard),length=lesson.sections[current].cards[referenceCard].steps.length;
  referenceBounds={first,last:first+length-1};state[current].cursor=first;render();
 }else{history.replaceState(null,'','#inizio');open(0);}
});

