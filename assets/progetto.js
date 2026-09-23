window.addEventListener('DOMContentLoaded',()=>{
  const track=document.querySelector('.rm-track');
  if(!track) return;

  const slides=[...document.querySelectorAll('.rm-slide')];
  const prev=document.querySelector('[data-slide-prev]');
  const next=document.querySelector('[data-slide-next]');
  const slider=document.querySelector('.rm-slider');
  const projectSteps=[...document.querySelectorAll('[data-slide-index]')];

  let index=0;
  let slideTimer=null;
  let microTimer=null;
  let pointerStartX=null;
  let pointerStartY=null;
  let wheelLocked=false;

  const AUTO_MS=20000;
  const MICRO_MS=6500;

  function render(){
    track.style.transform=`translateX(-${index*100}%)`;
    projectSteps.forEach((step,i)=>step.classList.toggle('active',i===index));
  }

  function resetSlideTimer(){
    clearInterval(slideTimer);
    slideTimer=setInterval(()=>go(index+1,false),AUTO_MS);
  }

  function resetMicroTimer(){
    clearInterval(microTimer);
    if(index===2){
      microTimer=setInterval(()=>advanceBoard(false),MICRO_MS);
    }else if(index===3){
      microTimer=setInterval(()=>advanceResource(false),MICRO_MS);
    }
  }

  function registerActivity(){
    resetSlideTimer();
    resetMicroTimer();
  }

  function go(i,user=true){
    index=(i+slides.length)%slides.length;
    render();
    resetMicroTimer();
    if(user) resetSlideTimer();
  }

  prev?.addEventListener('click',()=>go(index-1));
  next?.addEventListener('click',()=>go(index+1));
  projectSteps.forEach(step=>step.addEventListener('click',()=>go(Number(step.dataset.slideIndex))));

  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight') go(index+1);
    if(e.key==='ArrowLeft') go(index-1);
  });

  slider?.addEventListener('pointerdown',e=>{
    if(e.target.closest('button,a,.rm-board,.rm-morgana,.rm-whisper')) return;
    pointerStartX=e.clientX;
    pointerStartY=e.clientY;
  });

  slider?.addEventListener('pointerup',e=>{
    if(pointerStartX===null) return;
    const dx=e.clientX-pointerStartX;
    const dy=e.clientY-pointerStartY;
    if(Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)) go(index+(dx<0?1:-1));
    pointerStartX=pointerStartY=null;
  });

  slider?.addEventListener('pointercancel',()=>{
    pointerStartX=pointerStartY=null;
  });

  slider?.addEventListener('wheel',e=>{
    if(wheelLocked) return;
    const dominant=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;
    if(Math.abs(dominant)<18) return;
    e.preventDefault();
    wheelLocked=true;
    go(index+(dominant>0?1:-1));
    setTimeout(()=>wheelLocked=false,850);
  },{passive:false});

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
      clearInterval(slideTimer);
      clearInterval(microTimer);
    }else{
      resetSlideTimer();
      resetMicroTimer();
    }
  });

  function activateWithKeyboard(el,fn){
    el?.addEventListener('keydown',e=>{
      if(e.key==='Enter' || e.key===' '){
        e.preventDefault();
        fn();
      }
    });
  }

  // Libro di Red
  const bookData=[
    ['Bisogni reali','Partiamo dalla situazione concreta di chi studia.'],
    ['Didattica adattabile','Strumenti e spiegazioni cambiano insieme al percorso.'],
    ['Autonomia','Capire, acquisire metodo e imparare a procedere da soli.']
  ];

  let bookIndex=0;
  const bookScene=document.querySelector('.rm-book-scene-real');
  const bookTitle=document.querySelector('[data-book-title]');
  const bookCopy=document.querySelector('[data-book-copy]');
  const bookStep=document.querySelector('[data-book-step]');
  const bookPrev=document.querySelector('[data-book-prev]');
  const bookNext=document.querySelector('[data-book-next]');
  const bookDots=[...document.querySelectorAll('[data-book-index]')];

  function updateBookControls(){
    bookDots.forEach((dot,i)=>dot.classList.toggle('active',i===bookIndex));
    if(bookScene) bookScene.dataset.bookPage=String(bookIndex+1);
  }

  function showBook(nextIndex,direction='next',user=true){
    bookIndex=(nextIndex+bookData.length)%bookData.length;
    const animClass=direction==='prev'?'turn-prev':'turn-next';
    bookScene?.classList.remove('turn-prev','turn-next');
    void bookScene?.offsetWidth;
    bookScene?.classList.add(animClass);
    setTimeout(()=>{
      if(bookTitle) bookTitle.textContent=bookData[bookIndex][0];
      if(bookCopy) bookCopy.textContent=bookData[bookIndex][1];
      if(bookStep) bookStep.textContent=`${bookIndex+1} / ${bookData.length}`;
      updateBookControls();
    },170);
    setTimeout(()=>bookScene?.classList.remove(animClass),500);
    if(user) registerActivity();
  }

  bookPrev?.addEventListener('click',()=>showBook(bookIndex-1,'prev'));
  bookNext?.addEventListener('click',()=>showBook(bookIndex+1,'next'));
  bookDots.forEach(dot=>dot.addEventListener('click',()=>{
    const target=Number(dot.dataset.bookIndex);
    showBook(target,target<bookIndex?'prev':'next');
  }));

  // Lavagna di Morgana
  const boardData=[
    ['PASSO 01','Individuare il punto di partenza','Capire se la difficoltà nasce da un concetto non compreso, da basi poco solide, da un procedimento meccanico o dalla necessità di una spiegazione diversa.'],
    ['PASSO 02','Scegliere strumenti e spiegazioni','Spiegazioni, strumenti ed esercizi vengono scelti in base alla situazione e agli obiettivi, senza proporre lo stesso percorso a tutte e tutti.'],
    ['PASSO 03','Adattare il lavoro nel tempo','Il percorso può cambiare insieme ai progressi che emergono, senza restare bloccato in uno schema deciso in partenza.']
  ];

  let boardIndex=0;
  const board=document.querySelector('.rm-board');
  const boardStep=document.querySelector('[data-board-step]');
  const boardTitle=document.querySelector('[data-board-title]');
  const boardCopy=document.querySelector('[data-board-copy]');
  const morgana=document.querySelector('.rm-morgana');
  const boardPrev=document.querySelector('[data-board-prev]');
  const boardNext=document.querySelector('[data-board-next]');
  const boardDots=[...document.querySelectorAll('[data-board-index]')];
  const boardCount=document.querySelector('[data-board-count]');
  let typeTimer=null;

  function typeText(el,text){
    if(!el) return;
    clearInterval(typeTimer);
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){
      el.textContent=text;
      return;
    }
    el.textContent='';
    let i=0;
    typeTimer=setInterval(()=>{
      el.textContent+=text[i++]||'';
      if(i>=text.length) clearInterval(typeTimer);
    },7);
  }

  function updateBoardControls(){
    boardDots.forEach((dot,i)=>dot.classList.toggle('active',i===boardIndex));
    if(boardCount) boardCount.textContent=`${boardIndex+1} / ${boardData.length}`;
  }

  function showBoard(nextIndex,user=true){
    boardIndex=(nextIndex+boardData.length)%boardData.length;
    const data=boardData[boardIndex];
    morgana?.classList.remove('writing');
    void morgana?.offsetWidth;
    morgana?.classList.add('writing');
    if(boardStep) boardStep.textContent=data[0];
    if(boardTitle){
      boardTitle.classList.remove('rm-fade-write');
      void boardTitle.offsetWidth;
      boardTitle.textContent=data[1];
      boardTitle.classList.add('rm-fade-write');
    }
    typeText(boardCopy,data[2]);
    updateBoardControls();
    if(user) registerActivity();
  }

  function advanceBoard(user=true){
    showBoard(boardIndex+1,user);
  }

  board?.addEventListener('click',()=>advanceBoard(true));
  morgana?.addEventListener('click',()=>advanceBoard(true));
  boardPrev?.addEventListener('click',()=>showBoard(boardIndex-1,true));
  boardNext?.addEventListener('click',()=>showBoard(boardIndex+1,true));
  boardDots.forEach(dot=>dot.addEventListener('click',()=>showBoard(Number(dot.dataset.boardIndex),true)));
  activateWithKeyboard(board,()=>advanceBoard(true));
  activateWithKeyboard(morgana,()=>advanceBoard(true));

  // Red + Bjorne
  const resourceData=[
    ['Lezioni','Contenuti e spiegazioni da riprendere quando serve.'],
    ['Materiali','Schemi, approfondimenti e strumenti utili per organizzare lo studio.'],
    ['Esercitazioni','Attività per allenarsi e mettere alla prova ciò che si è capito.'],
    ['Laboratori','Strumenti interattivi per osservare, provare e ragionare sui concetti.']
  ];

  let resourceIndex=0;
  const whisper=document.querySelector('.rm-whisper');
  const balloon=document.querySelector('.rm-balloon');
  const resourceTitle=document.querySelector('[data-resource-title]');
  const resourceCopy=document.querySelector('[data-resource-copy]');
  const resourcePrev=document.querySelector('[data-resource-prev]');
  const resourceNext=document.querySelector('[data-resource-next]');
  const resourceDots=[...document.querySelectorAll('[data-resource-index]')];
  const resourceCount=document.querySelector('[data-resource-count]');

  function updateResourceControls(){
    resourceDots.forEach((dot,i)=>dot.classList.toggle('active',i===resourceIndex));
    if(resourceCount) resourceCount.textContent=`${resourceIndex+1} / ${resourceData.length}`;
  }

  function showResource(nextIndex,user=true){
    resourceIndex=(nextIndex+resourceData.length)%resourceData.length;
    const data=resourceData[resourceIndex];
    balloon?.classList.remove('pulse');
    void balloon?.offsetWidth;
    balloon?.classList.add('pulse');
    setTimeout(()=>{
      if(resourceTitle) resourceTitle.textContent=data[0];
      if(resourceCopy) resourceCopy.textContent=data[1];
      updateResourceControls();
    },110);
    if(user) registerActivity();
  }

  function advanceResource(user=true){
    showResource(resourceIndex+1,user);
  }

  whisper?.addEventListener('click',e=>{
    if(e.target.closest('.rm-micro-controls')) return;
    advanceResource(true);
  });
  resourcePrev?.addEventListener('click',e=>{e.stopPropagation();showResource(resourceIndex-1,true)});
  resourceNext?.addEventListener('click',e=>{e.stopPropagation();showResource(resourceIndex+1,true)});
  resourceDots.forEach(dot=>dot.addEventListener('click',e=>{e.stopPropagation();showResource(Number(dot.dataset.resourceIndex),true)}));
  activateWithKeyboard(whisper,()=>advanceResource(true));

  updateBookControls();
  updateBoardControls();
  updateResourceControls();
  render();
  resetSlideTimer();
  resetMicroTimer();
});
