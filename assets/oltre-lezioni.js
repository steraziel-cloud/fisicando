window.addEventListener('DOMContentLoaded',()=>{
  const scene=document.querySelector('.rm-beyond-scene');
  if(!scene) return;

  const redButton=scene.querySelector('[data-beyond-red]');
  const balloon=scene.querySelector('.rm-beyond-balloon');
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
  let stateIndex=0;
  let autoTimer=null;
  let changeTimer=null;
  let active=false;

  function renderState(nextIndex,{animate=true}={}){
    stateIndex=(nextIndex+states.length)%states.length;
    const state=states[stateIndex];

    clearTimeout(changeTimer);
    if(animate && !matchMedia('(prefers-reduced-motion: reduce)').matches){
      balloon?.classList.add('is-changing');
      changeTimer=setTimeout(()=>{
        if(icon) icon.textContent=state.icon;
        if(title) title.textContent=state.title;
        if(copy) copy.textContent=state.copy;
        dots.forEach((dot,i)=>dot.classList.toggle('is-active',i===stateIndex));
        balloon?.classList.remove('is-changing');
      },135);
    }else{
      if(icon) icon.textContent=state.icon;
      if(title) title.textContent=state.title;
      if(copy) copy.textContent=state.copy;
      dots.forEach((dot,i)=>dot.classList.toggle('is-active',i===stateIndex));
      balloon?.classList.remove('is-changing');
    }
  }

  function stopAuto(){
    clearInterval(autoTimer);
    autoTimer=null;
  }

  function startAuto(){
    stopAuto();
    if(!active) return;
    autoTimer=setInterval(()=>renderState(stateIndex+1),AUTO_MS);
  }

  function advanceByUser(){
    renderState(stateIndex+1);
    startAuto();
  }

  redButton?.addEventListener('click',e=>{
    e.stopPropagation();
    advanceByUser();
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
