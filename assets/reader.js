document.addEventListener('DOMContentLoaded',()=>{
 const $=id=>document.getElementById(id),params=new URLSearchParams(location.search);
 const back=new URL('lezioni.html',location.href);['ruolo','livello'].forEach(k=>{if(params.has(k))back.searchParams.set(k,params.get(k));});$('reader-back').href=back.href;
 const lesson=window.READER_LESSONS[params.get('lezione')];
 if(!lesson){
  const sources={'pillole/vettori/teoria.html':'Algebra dei vettori','meccanica_punto_materiale/cinematica/teoria.html':'Cinematica · Dispensa completa','meccanica_punto_materiale/dinamica/teoria.html':'Dinamica · Dispensa completa'};
  const source=params.get('materiale');$('reader-next').hidden=true;
  if(!Object.hasOwn(sources,source)){$('reader-title').textContent='Lezione non disponibile';$('reader-section-title').textContent='Torna al catalogo e scegli una lezione.';return;}
  $('reader-title').textContent=sources[source];$('reader-subtitle').textContent='Materiale esistente';$('reader-section-title').textContent='Dispensa completa';$('reader-progress').textContent='Questo materiale non è ancora suddiviso in sviluppi del reader.';
  const frame=document.createElement('iframe');frame.className='rm-reader-legacy';frame.title=sources[source];frame.src=source;frame.setAttribute('sandbox','allow-scripts allow-same-origin');$('reader-steps').append(frame);
  frame.addEventListener('load',()=>{try{const doc=frame.contentDocument;doc.querySelectorAll('header,.sidebar,.rm-learning-back').forEach(e=>e.style.display='none');const headings=[...doc.querySelectorAll('.main h2,.main h3')];headings.forEach((h,i)=>{const b=document.createElement('button');b.textContent=h.textContent;b.addEventListener('click',()=>h.scrollIntoView({behavior:'auto',block:'start'}));$('reader-parts').append(b);});}catch{}});return;
 }
 // Learning progress belongs to this visit only. Deep links never unlock a part.
 const state=lesson.sections.map(s=>({cursor:0,reached:0,complete:false,position:2,startPosition:1,reference:{values:['',''],attempts:0,done:false,assisted:false},clock:{started:null,marks:[]},lab:{started:null,period:8,marks:[],verified:false,answer:''}}));
 let current=0,allMode=false,reviewAccess=false,disposeWidget=()=>{};
 const flat=s=>s.cards.flatMap((card,ci)=>card.steps.map((step,si)=>({card,ci,step,si})));
 const format=n=>Number(n).toLocaleString('it-IT',{minimumFractionDigits:2,maximumFractionDigits:2});
 const el=(tag,cls,text)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(text!==undefined)node.textContent=text;return node;};
 const button=(text,fn,cls='rm-btn secondary')=>{const b=el('button',cls,text);b.type='button';b.addEventListener('click',fn);return b;};
 const unlocked=i=>reviewAccess||i===0||state[i-1].complete;
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
  $('reader-progress').textContent=state.filter(s=>s.complete).length+' di '+state.length+' parti completate';
  $('reader-show-all').hidden=false;
 }
 function finish(message){state[current].complete=true;state[current].reached=flat(lesson.sections[current]).length;index();$('reader-feedback').textContent=message;actions();}
 function actions(){
  const count=flat(lesson.sections[current]).length,st=state[current];
  $('reader-prev').hidden=allMode||st.cursor===0;$('reader-next').hidden=allMode;
  let blocked=false;if(st.cursor<count){const item=flat(lesson.sections[current])[st.cursor];blocked=!reviewAccess&&item.step.interaction==='train-reference'&&!st.reference.done;}
  $('reader-next').disabled=blocked||(st.cursor===count&&!st.complete&&!reviewAccess);
  $('reader-next').textContent=st.cursor<count-1?'Continua →':st.cursor<count?'Controlla l’idea →':current<state.length-1?'Passa alla parte successiva →':'Concludi la lezione';
  $('reader-step-count').textContent=allMode?'':st.cursor<count?'Passaggio '+(st.cursor+1)+' di '+count:'Verifica finale';
 }
 function showGlossary(id){const term=window.READER_GLOSSARY[id];if(!term)return;$('glossary-title').textContent=term.title;$('glossary-kind').textContent=term.kind;$('glossary-text').textContent=term.text;$('reader-glossary').showModal();}
 document.addEventListener('click',e=>{const term=e.target.closest('[data-term]');if(term)showGlossary(term.dataset.term);});
 $('reader-glossary').addEventListener('click',e=>{if(e.target===$('reader-glossary'))$('reader-glossary').close();});
 function trainPicture(box){
  const picture=el('div','rm-reference-scene');
  picture.innerHTML='<svg viewBox="0 0 600 215" role="img" aria-label="Un gattino viaggia sul sedile del treno; un altro osserva dalla stazione"><path d="M20 172H580" stroke="currentColor" stroke-width="4"/><rect x="32" y="38" width="350" height="123" rx="20" fill="var(--rm-card)" stroke="var(--rm-accent)" stroke-width="3"/><rect x="60" y="58" width="90" height="66" rx="8" fill="var(--rm-panel)"/><path d="M173 120h130v20H173v-20m0 0V80" stroke="#e7b94f" stroke-width="7" fill="none"/><image href="assets/images/red-logo-head.png" x="202" y="58" width="65" height="62"/><circle cx="100" cy="166" r="14" fill="var(--rm-muted)"/><circle cx="310" cy="166" r="14" fill="var(--rm-muted)"/><path d="M335 27h38m-10-7 10 7-10 7" stroke="var(--rm-accent)" stroke-width="3" fill="none"/><path d="M427 160V46h110" stroke="currentColor" stroke-width="3" fill="none"/><text x="454" y="38" fill="currentColor" font-size="15">Stazione</text><image href="assets/images/oltre-lezioni/bjorne-box-01.png" x="435" y="74" width="92" height="83"/><text x="230" y="201" text-anchor="middle" fill="currentColor" font-size="15">Il sedile viaggia con il treno</text></svg>';
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
  const explanation=()=>{feedback.textContent=(st.assisted?'Completiamo insieme: rispetto alla stazione ti muovi; rispetto al sedile non ti muovi. ':'')+'Le due descrizioni possono essere entrambe corrette: cambia il riferimento. Uno stesso corpo può essere in movimento rispetto a un riferimento e fermo rispetto a un altro.';};
  if(st.done)explanation();else if(interactive)exercise.append(button('Verifica le due frasi',()=>{
   if(st.values.includes('')){feedback.textContent='Completa entrambe le frasi prima di verificare.';return;}
   if(st.values[0]==='moto'&&st.values[1]==='fermo'){st.done=true;exercise.querySelectorAll('select').forEach(x=>x.disabled=true);check.hidden=true;explanation();actions();}
   else{st.attempts++;if(st.attempts>=3){st.values=['moto','fermo'];st.done=true;st.assisted=true;exercise.querySelectorAll('select').forEach((x,i)=>{x.value=st.values[i];x.disabled=true;});check.hidden=true;explanation();actions();}else feedback.textContent=st.attempts===1?'Osserva il sedile: si sposta insieme a te e al treno.':'La stazione rimane fuori dal treno. La tua posizione rispetto alla stazione cambia?';}
  }));
  const check=exercise.querySelector('button');exercise.append(feedback);box.append(exercise);
 }
 // This open curve is parametrized by physical arc length: equal s increments
 // use equal distances along the path, not equal SVG parameter increments.
 function positionBoard(box,kind,showDistance){
  const st=state[current],board=el('div','rm-reader-board');
  board.innerHTML='<h4>Lavagna · Un punto lungo la traiettoria</h4><svg viewBox="0 0 640 285" role="img" aria-label="Traiettoria curva graduata da meno cinque a più cinque metri"><path class="rm-trajectory" d="M50 186 C118 58 191 55 269 144 S432 249 590 93" fill="none" stroke="currentColor" stroke-width="3"/><g class="rm-metric"></g><g class="rm-origin"></g><path class="rm-positive-arrow" fill="none" stroke="var(--rm-accent)" stroke-width="3"/><circle class="rm-start-point" r="7" fill="#e7b94f"/><circle class="rm-moving-point" r="9" fill="var(--rm-accent)"/><g class="rm-point-label"><rect x="-59" y="-24" width="118" height="29" rx="10" fill="var(--rm-panel)" stroke="var(--rm-accent)"/><text text-anchor="middle" y="-5" fill="currentColor" font-size="16"></text></g></svg><label>Posizione <span class="rm-coordinate-name">s</span>: <output></output><input type="range" min="-5" max="5" step="0.01" aria-label="Posizione lungo la traiettoria"></label><p class="rm-board-description"></p>';
  const input=board.querySelector('input');input.value=st.position;
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
  board.querySelector('.rm-coordinate-name').textContent=kind==='displacement'?'finale s₂':'s';
  function update(){
   const s=Number(input.value),p=at(s);st.position=s;const label=svg.querySelector('.rm-point-label');label.setAttribute('transform',`translate(${p.x},${p.y-32})`);label.querySelector('text').textContent=(kind==='displacement'?'s₂':'s')+' = '+format(s)+' m';
   const point=svg.querySelector('.rm-moving-point');point.setAttribute('cx',p.x);point.setAttribute('cy',p.y);input.parentElement.querySelector('output').textContent=format(s)+' m';
   input.setAttribute('aria-valuetext',format(s)+' metri');
   const s1=initialInput?Number(initialInput.value):1,delta=s-s1;
   if(initialInput){st.startPosition=s1;const start=at(s1);startPoint.setAttribute('cx',start.x);startPoint.setAttribute('cy',start.y);initialLabel.setAttribute('transform',`translate(${start.x},${start.y+48})`);initialLabel.querySelector('text').textContent='s₁ = '+format(s1)+' m';initialOutput.textContent=format(s1)+' m';initialInput.setAttribute('aria-valuetext',format(s1)+' metri');}
   board.querySelector('.rm-board-description').textContent=kind==='displacement'?`Partenza s₁ = ${format(s1)} m · Arrivo s₂ = ${format(s)} m · Δs = ${format(delta)} m`:`Posizione s = ${format(s)} m`+(showDistance?` · Distanza dall’origine lungo la traiettoria |s| = ${format(Math.abs(s))} m`:'');
   const displacement=box.querySelector('.rm-displacement-example');if(displacement)displacement.textContent=`Sulla lavagna parti da s₁ = ${format(s1)} m e arrivi a s₂ = ${format(s)} m: Δs = ${format(s)} m − (${format(s1)} m) = ${format(delta)} m.`;
   const sign=box.querySelector('.rm-displacement-sign');if(sign)sign.textContent=delta>0?`Qui Δs = +${format(delta)} m: la posizione finale si trova nel verso positivo rispetto a quella iniziale.`:delta<0?`Qui Δs = ${format(delta)} m: la posizione finale si trova nel verso negativo rispetto a quella iniziale.`:'Qui Δs = 0,00 m: le posizioni iniziale e finale coincidono, anche se il corpo potrebbe essersi mosso e poi essere tornato al punto di partenza.';
   const example=box.querySelector('.rm-position-example');if(example)example.textContent=`Sulla lavagna la posizione è s = ${format(s)} m: la distanza dall’origine lungo la traiettoria è |s| = ${format(Math.abs(s))} m. Sposta il punto per osservare come cambiano questi valori.`;
  }input.addEventListener('input',update);if(initialInput)initialInput.addEventListener('input',update);update();
 }
 function stopwatch(box,lab=false){
  const st=lab?state[current].lab:state[current].clock;
  const board=el('div','rm-reader-board rm-stopwatch-board');
  const currentTime=()=>st.started===null?0:(performance.now()-st.started)/1000;
  board.innerHTML='<h4>'+ (lab?'Misura un giro completo':'Lavagna · Il cronometro')+'</h4><div class="rm-clock"><button type="button" class="rm-clock-top">Avvia</button><div class="rm-clock-face"><span>CRONOMETRO</span><strong class="rm-clock-reading"></strong><span class="rm-clock-unit">secondi</span></div></div><div class="rm-clock-marks" aria-live="polite"></div><div class="rm-clock-controls"></div><p class="rm-clock-help">Avvia il cronometro con il pulsante superiore; poi premi lo stesso pulsante per registrare t₁ e t₂.</p>';
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
  const intro=el('p');intro.innerHTML='Il <button class="rm-keyword" data-term="periodo" type="button">periodo</button> è la durata di un giro completo. Avvia il cronometro, poi registra t₁ quando il trenino attraversa il segno giallo e t₂ al passaggio successivo, dopo un giro. La differenza Δt mostra la durata misurata: scrivi il valore che leggi nel riquadro qui sotto e premi «Verifica la misura».';box.append(intro);
  const scene=el('div','rm-period-scene');scene.innerHTML='<svg viewBox="0 0 640 275" role="img" aria-label="Un trenino percorre un circuito ellittico. Il segno giallo indica il punto in cui prendere le due letture."><ellipse cx="320" cy="138" rx="245" ry="95" fill="none" stroke="var(--rm-muted)" stroke-width="13"/><ellipse cx="320" cy="138" rx="245" ry="95" fill="none" stroke="var(--rm-panel)" stroke-width="5"/><path d="M554 111h23" stroke="#e7b94f" stroke-width="6"/><text x="486" y="84" fill="currentColor" font-size="14">Misura qui ↓</text><g class="rm-toy-train"><rect x="-19" y="-12" width="38" height="24" rx="6" fill="var(--rm-accent)" stroke="var(--rm-panel)" stroke-width="3"/><path d="M2-8v16" stroke="var(--rm-panel)" stroke-width="3"/><circle cx="12" cy="0" r="4" fill="#e7b94f"/></g><image href="assets/images/red-logo-head.png" x="222" y="89" width="77" height="72"/><image href="assets/images/oltre-lezioni/bjorne-box-01.png" x="342" y="82" width="83" height="85"/></svg>';
  const controls=el('div','rm-lab-controls');
  const change=delta=>{if(st.marks.length){$('reader-feedback').textContent='Cancella prima le letture per cambiare la velocità.';return;}st.period=Math.max(4,Math.min(14,st.period+delta));st.verified=false;$('reader-feedback').textContent=delta<0?'Red accelera il trenino. Misura il nuovo periodo.':'Bjorne rallenta il trenino. Misura il nuovo periodo.';};
  const red=button('Red · Più veloce',()=>change(-2)),bjorne=button('Bjorne · Più lento',()=>change(2));controls.append(red,bjorne);box.append(scene,controls);
  const clock=stopwatch(box,true),clockDispose=disposeWidget;
  let phase=0,previous=performance.now(),raf;
  const train=scene.querySelector('.rm-toy-train');
  function animate(now){phase=(phase+(now-previous)/1000/st.period*2*Math.PI)%(2*Math.PI);previous=now;const x=320+245*Math.cos(phase),y=138+95*Math.sin(phase),angle=Math.atan2(95*Math.cos(phase),-245*Math.sin(phase))*180/Math.PI;train.setAttribute('transform',`translate(${x} ${y}) rotate(${angle})`);raf=requestAnimationFrame(animate);}raf=requestAnimationFrame(animate);
  const answerBox=el('div','rm-period-answer'),answerLabel=el('label');
  answerLabel.append(el('span','','Periodo misurato: '));const answer=el('input');answer.type='text';answer.inputMode='decimal';answer.setAttribute('aria-label','Periodo misurato in secondi');answer.setAttribute('autocomplete','off');answer.value=st.answer;answerLabel.append(answer,el('span','','s'));answerBox.append(answerLabel);box.append(answerBox);
  answer.addEventListener('input',()=>{st.answer=answer.value;st.verified=false;$('reader-feedback').textContent='';sync();});
  const verify=button('Verifica la misura',()=>{
   if(st.marks.length!==2){$('reader-feedback').textContent='Registra i due istanti prima di verificare.';return;}
   const value=answer.value.trim().replace(',','.');const reported=Number(value);
   if(!value||!Number.isFinite(reported)||reported<=0){$('reader-feedback').textContent='Inserisci la misura del periodo in secondi, per esempio 8,12.';return;}
   const measured=st.marks[1]-st.marks[0],tolerance=Math.max(.6,st.period*.08);
   if(Math.abs(reported-measured)>.05){$('reader-feedback').textContent='Il valore inserito non coincide con Δt sul cronometro. Controlla la lettura e riportala nel riquadro in secondi.';return;}
   if(Math.abs(reported-st.period)>tolerance){$('reader-feedback').textContent='La durata misurata non corrisponde a un giro completo. Cancella le letture e riprova: registra due passaggi consecutivi sul segno giallo. Una piccola differenza dovuta al tempo di reazione va bene.';return;}
   st.verified=true;clock.show();finish('Misura riuscita! Il periodo misurato è Δt = '+format(reported)+' s.');
  },'rm-btn primary');box.append(verify);
  const sync=()=>{red.disabled=bjorne.disabled=st.marks.length>0;verify.disabled=st.marks.length!==2||st.verified;};clock.board.addEventListener('measurement',sync);sync();
  disposeWidget=()=>{clockDispose();cancelAnimationFrame(raf);if(!st.verified)st.marks=[];};
 }
 function checkpoint(){
  const s=lesson.sections[current],box=$('reader-checkpoint');box.replaceChildren();box.hidden=false;box.append(el('h3','','Controlla l’idea'));
  if(s.quiz.type==='period-lab'){periodLab(box);return;}
  const q=el('p','',s.quiz.question);box.append(q);
  s.quiz.options.forEach((option,i)=>{const label=el('label'),input=el('input');input.type='radio';input.name='checkpoint';input.value=i;label.append(input,el('span','',option));box.append(label);});
  box.append(button('Verifica',()=>{const selected=box.querySelector('input:checked');if(!selected){$('reader-feedback').textContent='Scegli una risposta prima di verificare.';return;}
   if(Number(selected.value)===s.quiz.answer)finish('Corretto. '+s.quiz.feedback);
   else $('reader-feedback').textContent=(s.id==='inizio'?'Dire soltanto “il corpo è fermo” lascia una domanda aperta: rispetto a che cosa? ':s.quiz.feedback+' ')+'Puoi rileggere e riprovare.';
  }));
  if(state[current].complete)$('reader-feedback').textContent='Questa parte è già completata. Puoi rivedere il quiz o proseguire.';
 }
 function renderCard(card,steps,archived=false,collapsed=false){
  const box=el('article','rm-reader-card'+(archived?' rm-reader-card-previous':''));
  if(collapsed){
   const details=el('details','rm-reader-recap'),summary=el('summary');
   summary.append(el('span','',card.title),el('span','rm-recap-toggle','Rivedi'));
   details.append(summary,box);$('reader-steps').append(details);
   details.addEventListener('toggle',()=>summary.querySelector('.rm-recap-toggle').textContent=details.open?'Comprimi':'Rivedi');
  }else $('reader-steps').append(box);
  box.append(el('h3','rm-card-title',card.title));
  if(card.board==='train-reference')trainPicture(box);
  if(card.board==='stopwatch'&&!archived)stopwatch(box);
  steps.forEach(step=>{const article=el('div','rm-reader-step');article.append(el('h4','',step.title));const p=el('p');p.innerHTML=step.html;article.append(p);if(step.interaction==='train-reference')referenceExercise(article,!archived);box.append(article);});
  if(card.board==='position'||card.board==='displacement')positionBoard(box,card.board,steps.length>=3);
 }
 function render(){
  disposeWidget();disposeWidget=()=>{};$('reader-steps').replaceChildren();$('reader-checkpoint').replaceChildren();$('reader-checkpoint').hidden=true;$('reader-feedback').textContent='';
  const s=lesson.sections[current],st=state[current],items=flat(s);$('reader-section-title').textContent=s.title;
  if(st.cursor===items.length){checkpoint();}else{
   const item=items[st.cursor];if((item.card.retainPrevious||item.card.collapsePrevious)&&item.ci>0)renderCard(s.cards[item.ci-1],s.cards[item.ci-1].steps,true,!!item.card.collapsePrevious);
   renderCard(item.card,item.card.steps.slice(0,item.si+1));
  }index();actions();
 }
 function top(){const target=$('reader-section-title');target.focus({preventScroll:true});target.scrollIntoView({block:'start',behavior:'auto'});}
 function open(i,focus=false){if(!unlocked(i))return;allMode=false;current=i;render();history.replaceState(null,'','#'+lesson.sections[i].id);if(focus)top();}
 $('reader-next').addEventListener('click',()=>{
  const st=state[current],items=flat(lesson.sections[current]);
  if(st.cursor<items.length){const item=items[st.cursor];if(!reviewAccess&&item.step.interaction==='train-reference'&&!st.reference.done)return;
   st.cursor++;st.reached=Math.max(st.reached,st.cursor);const replaces=st.cursor===items.length||items[st.cursor].ci!==item.ci;render();if(replaces)top();
  }else if(st.complete||reviewAccess){if(current<state.length-1)open(current+1,true);else{$('reader-feedback').textContent='Lezione completata! Nell’indice puoi rivedere le parti o scegliere «Mostra tutto».';$('reader-next').hidden=true;}}
 });
 $('reader-prev').addEventListener('click',()=>{if(state[current].cursor>0){state[current].cursor--;render();top();}});
 // Horizontal swipes navigate only the already unlocked learning path.
 let touch=null;const column=document.querySelector('.rm-reader-column');
 column.addEventListener('touchstart',e=>{if(e.target.closest('input,select,button,.rm-reader-board'))return;const p=e.changedTouches[0];touch={x:p.clientX,y:p.clientY};},{passive:true});
 column.addEventListener('touchend',e=>{if(!touch)return;const p=e.changedTouches[0],dx=p.clientX-touch.x,dy=p.clientY-touch.y;touch=null;if(Math.abs(dx)<75||Math.abs(dy)>50)return;const b=dx>0?$('reader-prev'):$('reader-next');if(!b.hidden&&!b.disabled)b.click();},{passive:true});
 $('reader-show-all').addEventListener('click',()=>{
  reviewAccess=true;disposeWidget();disposeWidget=()=>{};allMode=true;$('reader-section-title').textContent='La lezione completa';$('reader-steps').replaceChildren();$('reader-checkpoint').hidden=true;$('reader-feedback').textContent='';
  lesson.sections.forEach((s,i)=>{current=i;$('reader-steps').append(el('h2','rm-all-section',s.title));s.cards.forEach(card=>renderCard(card,card.steps,true));});actions();index();top();
 });
 // Old localStorage entries from reader v1 are intentionally never read.
 history.replaceState(null,'','#inizio');open(0);
});
