window.addEventListener('DOMContentLoaded',()=>{
  const scene=document.querySelector('.rm-beyond-scene');
  if(!scene) return;

  const bjorneImage=scene.querySelector('.rm-beyond-bjorne');
  let bjorneButton=scene.querySelector('[data-beyond-bjorne]');
  if(!bjorneButton && bjorneImage){
    bjorneButton=document.createElement('button');
    bjorneButton.type='button';
    bjorneButton.className='rm-beyond-bjorne-hit';
    bjorneButton.dataset.beyondBjorne='';
    bjorneButton.setAttribute('aria-label','Bjorne: scopri il suo pensiero sulle scatoline');
    bjorneImage.before(bjorneButton);
    bjorneButton.appendChild(bjorneImage);
  }

  const redButton=scene.querySelector('[data-beyond-red]');

  /*
    Le immagini dei due personaggi devono poter restare grandi e sovrapporsi
    visivamente, ma le aree cliccabili non devono sovrapporsi. I due piccoli
    hotspot interni separano quindi nettamente Red (sinistra) e Bjorne (destra)
    senza alterare la composizione grafica.
  */
  function ensureHitCore(button,kind){
    if(!button) return null;
    let core=button.querySelector('.rm-beyond-hit-core');
    if(!core){
      core=document.createElement('span');
      core.className=`rm-beyond-hit-core rm-beyond-hit-core-${kind}`;
      core.setAttribute('aria-hidden','true');
      button.appendChild(core);
    }
    return core;
  }

  ensureHitCore(redButton,'red');
  ensureHitCore(bjorneButton,'bjorne');

  let thought=scene.querySelector('[data-beyond-thought]');
  if(!thought){
    thought=document.createElement('img');
    thought.className='rm-beyond-thought';
    thought.dataset.beyondThought='';
    thought.src='assets/images/oltre-lezioni/bjorne-thought-boxes-02.png';
    thought.alt='Bjorne immagina una scatola di cartone trasformarsi in un motore a pistone, un treno di ingranaggi e un sistema di sollevamento';
    scene.appendChild(thought);
  }

  const balloon=scene.querySelector('.rm-beyond-balloon');
  const balloonArt=scene.querySelector('.rm-beyond-balloon-art');
  const mobileBalloon=matchMedia('(max-width:760px)');
  const redMobileArt='assets/images/oltre-lezioni/baloon-red-02.png';
  const bjorneMobileArt='assets/images/oltre-lezioni/baloon-bjorne-02.png';
  [redMobileArt,bjorneMobileArt].forEach(src=>{const image=new Image();image.src=src});
  function updateBalloonArt(){
    if(!balloonArt) return;
    const src=mobileBalloon.matches
      ? (balloon?.classList.contains('is-bjorne-dialogue')?bjorneMobileArt:redMobileArt)
      : 'assets/images/oltre-lezioni/baloon-01.png';
    if(balloonArt.getAttribute('src')!==src) balloonArt.src=src;
  }
  mobileBalloon.addEventListener('change',updateBalloonArt);
  const icon=scene.querySelector('[data-beyond-icon]');
  const title=scene.querySelector('[data-beyond-title]');
  const copy=scene.querySelector('[data-beyond-copy]');
  const dots=[...scene.querySelectorAll('.rm-beyond-dot')];

  const states=[
    {icon:'📖',title:'Lezioni',copy:'Contenuti e spiegazioni da riprendere quando serve.'},
    {icon:'🗂️',title:'Materiali',copy:'Schemi, mappe e risorse per organizzare e approfondire lo studio.'},
    {icon:'✏️',title:'Esercitazioni',copy:'Attività per allenarsi, provare strategie e verificare ciò che si è capito.'},
    {icon:'⚗️',title:'Laboratori',copy:'Strumenti interattivi per osservare, sperimentare e ragionare sui concetti.'}
  ];

  const AUTO_MS=4300;
  const BJORNE_LINE_MS=2800;
  const RED_REPLY_MS=2700;
  const THOUGHT_MS=4300;

  let stateIndex=0;
  let autoTimer=null;
  let changeTimer=null;
  let active=false;
  let easterRunning=false;
  let easterTimers=[];

  function signalProjectActivity(){
    document.dispatchEvent(new CustomEvent('rm:project-activity'));
  }

  function clearEasterTimers(){
    easterTimers.forEach(clearTimeout);
    easterTimers=[];
  }

  function later(fn,ms){
    const id=setTimeout(fn,ms);
    easterTimers.push(id);
    return id;
  }

  const stateClasses=states.map((_,i)=>`is-state-${i}`);

  function cleanBalloonModes(){
    balloon?.classList.remove(
      'is-dialogue','is-bjorne-dialogue','is-red-dialogue',
      'is-easter-hidden','is-changing',...stateClasses
    );
  }

  function setStateClass(index){
    balloon?.classList.remove(...stateClasses);
    balloon?.classList.add(`is-state-${index}`);
  }

  function renderState(nextIndex,{animate=true}={}){
    stateIndex=(nextIndex+states.length)%states.length;
    const state=states[stateIndex];

    clearTimeout(changeTimer);
    cleanBalloonModes();
    setStateClass(stateIndex);
    updateBalloonArt();

    const applyState=()=>{
      if(icon) icon.textContent=state.icon;
      if(title) title.textContent=state.title;
      if(copy) copy.textContent=state.copy;
      dots.forEach((dot,i)=>dot.classList.toggle('is-active',i===stateIndex));
      balloon?.classList.remove('is-changing');
    };

    if(animate && !matchMedia('(prefers-reduced-motion: reduce)').matches){
      balloon?.classList.add('is-changing');
      changeTimer=setTimeout(applyState,135);
    }else{
      applyState();
    }
  }

  function showDialogue(text,{bjorne=false}={}){
    clearTimeout(changeTimer);
    cleanBalloonModes();
    balloon?.classList.add('is-dialogue');
    balloon?.classList.add(bjorne?'is-bjorne-dialogue':'is-red-dialogue');
    updateBalloonArt();
    if(title) title.textContent='';
    if(copy) copy.textContent=text;
  }

  function stopAuto(){
    clearInterval(autoTimer);
    autoTimer=null;
  }

  function startAuto(){
    stopAuto();
    if(!active || easterRunning) return;
    autoTimer=setInterval(()=>renderState(stateIndex+1),AUTO_MS);
  }

  function advanceByUser(){
    if(easterRunning) return;
    signalProjectActivity();
    renderState(stateIndex+1);
    startAuto();
  }

  function finishEaster(){
    clearEasterTimers();
    thought?.classList.remove('is-visible');
    scene.classList.remove('is-easter-running');
    easterRunning=false;
    renderState(stateIndex,{animate:false});
    startAuto();
  }

  function startBjorneEaster(){
    if(easterRunning) return;

    signalProjectActivity();
    easterRunning=true;
    clearEasterTimers();
    stopAuto();
    scene.classList.add('is-easter-running');
    thought?.classList.remove('is-visible');

    showDialogue('Red... ma le scatoline? Le faremo prima o poi?',{bjorne:true});

    later(()=>{
      showDialogue('Sì, Bjorne. Magari un giorno faremo anche le scatoline.');
    },BJORNE_LINE_MS);

    later(()=>{
      balloon?.classList.add('is-easter-hidden');
      thought?.classList.add('is-visible');
    },BJORNE_LINE_MS+RED_REPLY_MS);

    later(finishEaster,BJORNE_LINE_MS+RED_REPLY_MS+THOUGHT_MS);
  }

  redButton?.addEventListener('click',e=>{
    e.stopPropagation();
    advanceByUser();
  });

  bjorneButton?.addEventListener('click',e=>{
    e.stopPropagation();
    startBjorneEaster();
  });

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      active=entry.isIntersecting && entry.intersectionRatio>=.5;
      if(active) startAuto();
      else stopAuto();
    });
  },{threshold:[0,.5,.75]});

  observer.observe(scene);
  renderState(0,{animate:false});

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden) stopAuto();
    else if(active) startAuto();
  });
});
