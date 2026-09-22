window.addEventListener('DOMContentLoaded',()=>{
  const track=document.querySelector('.rm-track');
  if(!track) return;
  const slides=[...document.querySelectorAll('.rm-slide')];
  const dots=[...document.querySelectorAll('.rm-slide-dot')];
  const count=document.querySelector('.rm-slide-count');
  const prev=document.querySelector('[data-slide-prev]');
  const next=document.querySelector('[data-slide-next]');
  let index=0;
  let timer=null;
  let pointerStartX=null;
  let pointerStartY=null;
  let wheelLocked=false;
  const AUTO_MS=20000;

  function render(){
    track.style.transform=`translateX(-${index*100}%)`;
    dots.forEach((d,i)=>d.classList.toggle('active',i===index));
    if(count) count.textContent=`${index+1} / ${slides.length}`;
  }
  function resetTimer(){
    clearInterval(timer);
    timer=setInterval(()=>go(index+1,false),AUTO_MS);
  }
  function go(i,user=true){
    index=(i+slides.length)%slides.length;
    render();
    if(user) resetTimer();
  }
  prev?.addEventListener('click',()=>go(index-1));
  next?.addEventListener('click',()=>go(index+1));
  dots.forEach((d,i)=>d.addEventListener('click',()=>go(i)));

  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight') go(index+1);
    if(e.key==='ArrowLeft') go(index-1);
  });

  const slider=document.querySelector('.rm-slider');
  slider?.addEventListener('pointerdown',e=>{
    if(e.target.closest('button,a,.rm-page,.rm-board,.rm-whisper')) return;
    pointerStartX=e.clientX; pointerStartY=e.clientY;
  });
  slider?.addEventListener('pointerup',e=>{
    if(pointerStartX===null) return;
    const dx=e.clientX-pointerStartX;
    const dy=e.clientY-pointerStartY;
    if(Math.abs(dx)>60 && Math.abs(dx)>Math.abs(dy)) go(index+(dx<0?1:-1));
    pointerStartX=pointerStartY=null;
  });
  slider?.addEventListener('pointercancel',()=>{pointerStartX=pointerStartY=null});

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
    if(document.hidden) clearInterval(timer); else resetTimer();
  });

  // Libro di Red
  const bookData=[
    ['Bisogni reali','Si parte dalla situazione concreta di chi studia, non da un percorso preconfezionato.'],
    ['Didattica adattabile','Spiegazioni, esercizi e strumenti possono cambiare insieme al percorso.'],
    ['Autonomia','L’obiettivo è capire meglio e acquisire metodo, non soltanto arrivare alla risposta.']
  ];
  let bookIndex=0;
  const bookTitle=document.querySelector('[data-book-title]');
  const bookCopy=document.querySelector('[data-book-copy]');
  const bookStep=document.querySelector('[data-book-step]');
  const leftPage=document.querySelector('.rm-page.left');
  const rightPage=document.querySelector('.rm-page.right');
  function showBook(nextIndex,page){
    bookIndex=(nextIndex+bookData.length)%bookData.length;
    page?.classList.add('turn');
    setTimeout(()=>{
      if(bookTitle) bookTitle.textContent=bookData[bookIndex][0];
      if(bookCopy) bookCopy.textContent=bookData[bookIndex][1];
      if(bookStep) bookStep.textContent=`${bookIndex+1} / ${bookData.length}`;
      page?.classList.remove('turn');
    },130);
    resetTimer();
  }
  leftPage?.addEventListener('click',()=>showBook(bookIndex-1,leftPage));
  rightPage?.addEventListener('click',()=>showBook(bookIndex+1,rightPage));

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
  let typeTimer=null;
  function typeText(el,text){
    if(!el) return;
    clearInterval(typeTimer);
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=text;return;}
    el.textContent=''; let i=0;
    typeTimer=setInterval(()=>{
      el.textContent+=text[i++]||'';
      if(i>=text.length) clearInterval(typeTimer);
    },7);
  }
  function advanceBoard(){
    boardIndex=(boardIndex+1)%boardData.length;
    const data=boardData[boardIndex];
    morgana?.classList.remove('writing'); void morgana?.offsetWidth; morgana?.classList.add('writing');
    if(boardStep) boardStep.textContent=data[0];
    if(boardTitle){boardTitle.classList.remove('rm-fade-write');void boardTitle.offsetWidth;boardTitle.textContent=data[1];boardTitle.classList.add('rm-fade-write');}
    typeText(boardCopy,data[2]);
    resetTimer();
  }
  board?.addEventListener('click',advanceBoard);

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
  function advanceResource(){
    resourceIndex=(resourceIndex+1)%resourceData.length;
    balloon?.classList.remove('pulse'); void balloon?.offsetWidth; balloon?.classList.add('pulse');
    setTimeout(()=>{
      if(resourceTitle) resourceTitle.textContent=resourceData[resourceIndex][0];
      if(resourceCopy) resourceCopy.textContent=resourceData[resourceIndex][1];
    },110);
    resetTimer();
  }
  whisper?.addEventListener('click',advanceResource);

  render(); resetTimer();
});
