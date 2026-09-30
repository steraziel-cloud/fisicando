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
  let bookAutoTimer=null;
  let pointerStartX=null;
  let pointerStartY=null;
  let wheelLocked=false;

  /* Tempo di lettura per i contenuti delle slide. */
  const AUTO_MS=60000;
  /* Manteniamo invariata la velocita dello sfoglio automatico del libro. */
  const BOOK_AUTO_MS=20000/6;

  function render(){
    track.style.transform=`translateX(-${index*100}%)`;
    projectSteps.forEach((step,i)=>step.classList.toggle('active',i===index));
  }

  function resetSlideTimer(){
    clearInterval(slideTimer);
    slideTimer=setInterval(()=>go(index+1,false),AUTO_MS);
  }

  function registerActivity(){
    resetSlideTimer();
    resetSceneTimers();
  }

  function go(i,user=true){
    index=(i+slides.length)%slides.length;
    render();
    resetSceneTimers();
    if(user) resetSlideTimer();
  }

  prev?.addEventListener('click',()=>go(index-1));
  next?.addEventListener('click',()=>go(index+1));
  projectSteps.forEach(step=>step.addEventListener('click',()=>go(Number(step.dataset.slideIndex))));

  /* Le interazioni gestite da moduli separati possono riavviare il timer della slide. */
  document.addEventListener('rm:project-activity',registerActivity);

  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight') go(index+1);
    if(e.key==='ArrowLeft') go(index-1);
  });

  slider?.addEventListener('pointerdown',e=>{
    if(e.target.closest('button,a,.rm-classroom-morgana')) return;
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

  function activateWithKeyboard(el,fn){
    el?.addEventListener('keydown',e=>{
      if(e.key==='Enter' || e.key===' '){
        e.preventDefault();
        fn();
      }
    });
  }

  // ------------------------------------------------------------
  // Libro di Red
  // ------------------------------------------------------------
  const bookFrames=[
    {rest:'assets/images/red-flip-aligned/red-flip-frame-01.png',turn:'assets/images/red-flip-aligned/red-flip-frame-02.png',title:'Bisogni reali'},
    {rest:'assets/images/red-flip-aligned/red-flip-frame-03.png',turn:'assets/images/red-flip-aligned/red-flip-frame-04.png',title:'Didattica adattabile'},
    {rest:'assets/images/red-flip-aligned/red-flip-frame-05.png',turn:'assets/images/red-flip-aligned/red-flip-frame-06.png',title:'Autonomia'}
  ];

  let bookIndex=0;
  let bookFlipping=false;
  const bookScene=document.querySelector('.rm-book-scene-real');
  const bookImage=document.querySelector('[data-red-book-frame]');
  const bookNext=document.querySelector('[data-book-next]');
  const bookRed=document.querySelector('[data-book-red]');

  bookFrames.flatMap(frame=>[frame.rest,frame.turn]).forEach(src=>{
    const preload=new Image();
    preload.decoding='async';
    preload.src=src;
  });

  function getBookFrameDuration(){
    if(!bookScene) return 280;
    const raw=getComputedStyle(bookScene).getPropertyValue('--book-frame-duration').trim();
    if(!raw) return 280;
    if(raw.endsWith('ms')) return Math.max(0,parseFloat(raw)||280);
    if(raw.endsWith('s')) return Math.max(0,(parseFloat(raw)||.28)*1000);
    return Math.max(0,parseFloat(raw)||280);
  }

  function updateBookA11y(){
    const page=bookIndex+1;
    const title=bookFrames[bookIndex].title;
    if(bookImage) bookImage.alt=`Red sfoglia il libro, pagina ${page} di ${bookFrames.length}: ${title}`;
    if(bookScene) bookScene.setAttribute('aria-label',`Red sfoglia il libro con i principi del progetto. Pagina ${page} di ${bookFrames.length}: ${title}.`);
  }

  function showBookFrame(src){
    if(bookImage) bookImage.src=src;
  }

  function nextBookPage(user=true){
    if(bookFlipping || !bookImage) return;
    const nextIndex=(bookIndex+1)%bookFrames.length;
    const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

    if(reduced){
      bookIndex=nextIndex;
      showBookFrame(bookFrames[bookIndex].rest);
      updateBookA11y();
      if(user) registerActivity();
      return;
    }

    const duration=getBookFrameDuration();
    bookFlipping=true;
    bookScene?.classList.add('is-turning');
    showBookFrame(bookFrames[bookIndex].turn);

    setTimeout(()=>{
      bookIndex=nextIndex;
      showBookFrame(bookFrames[bookIndex].rest);
      updateBookA11y();
    },duration);

    setTimeout(()=>{
      bookScene?.classList.remove('is-turning');
      bookFlipping=false;
    },duration+40);

    if(user) registerActivity();
  }

  bookNext?.addEventListener('click',()=>nextBookPage());
  bookRed?.addEventListener('click',()=>nextBookPage());
  activateWithKeyboard(bookRed,()=>nextBookPage());

  // ------------------------------------------------------------
  // Morgana — unica animazione attiva
  // ------------------------------------------------------------
  const MORGANA_IDLE_FRAME='assets/images/morgana-classroom/morgana-turn-10.png';
  const morganaTurnFrames=[
    MORGANA_IDLE_FRAME,
    'assets/images/morgana-classroom/morgana-turn-02.png',
    'assets/images/morgana-classroom/morgana-turn-03.png',
    'assets/images/morgana-classroom/morgana-turn-04.png',
    'assets/images/morgana-classroom/morgana-turn-05.png',
    'assets/images/morgana-classroom/morgana-turn-06.png',
    'assets/images/morgana-classroom/morgana-turn-07.png',
    'assets/images/morgana-classroom/morgana-turn-08.png',
    'assets/images/morgana-classroom/morgana-turn-09.png',
    MORGANA_IDLE_FRAME
  ];

  const classroom=document.querySelector('.rm-classroom-v2');
  const classroomMorgana=document.querySelector('.rm-classroom-morgana');
  const MORGANA_FRAME_MS=85;
  let morganaFrameTimer=null;
  let morganaTurnPlaying=false;

  // Alpha bounds computed from the shipped PNGs, using the same two-pixel
  // sampling as before. Avoid scanning nine full canvases on every phone visit.
  const morganaFrameMetrics=new Map([
  [
    "assets/images/morgana-classroom/morgana-turn-10.png",
    {
      "left": 432,
      "top": 18,
      "right": 1112,
      "bottom": 922,
      "width": 680,
      "height": 904,
      "centerX": 772.0
    }
  ],
  [
    "assets/images/morgana-classroom/morgana-turn-02.png",
    {
      "left": 456,
      "top": 18,
      "right": 1150,
      "bottom": 924,
      "width": 694,
      "height": 906,
      "centerX": 803.0
    }
  ],
  [
    "assets/images/morgana-classroom/morgana-turn-03.png",
    {
      "left": 446,
      "top": 8,
      "right": 1166,
      "bottom": 924,
      "width": 720,
      "height": 916,
      "centerX": 806.0
    }
  ],
  [
    "assets/images/morgana-classroom/morgana-turn-04.png",
    {
      "left": 432,
      "top": 16,
      "right": 1226,
      "bottom": 926,
      "width": 794,
      "height": 910,
      "centerX": 829.0
    }
  ],
  [
    "assets/images/morgana-classroom/morgana-turn-05.png",
    {
      "left": 444,
      "top": 16,
      "right": 1202,
      "bottom": 926,
      "width": 758,
      "height": 910,
      "centerX": 823.0
    }
  ],
  [
    "assets/images/morgana-classroom/morgana-turn-06.png",
    {
      "left": 408,
      "top": 8,
      "right": 1216,
      "bottom": 934,
      "width": 808,
      "height": 926,
      "centerX": 812.0
    }
  ],
  [
    "assets/images/morgana-classroom/morgana-turn-07.png",
    {
      "left": 418,
      "top": 2,
      "right": 1214,
      "bottom": 936,
      "width": 796,
      "height": 934,
      "centerX": 816.0
    }
  ],
  [
    "assets/images/morgana-classroom/morgana-turn-08.png",
    {
      "left": 454,
      "top": 14,
      "right": 1164,
      "bottom": 930,
      "width": 710,
      "height": 916,
      "centerX": 809.0
    }
  ],
  [
    "assets/images/morgana-classroom/morgana-turn-09.png",
    {
      "left": 450,
      "top": 14,
      "right": 1178,
      "bottom": 924,
      "width": 728,
      "height": 910,
      "centerX": 814.0
    }
  ]
]);
  let morganaFramesPrepared=false;
  function prepareMorganaFrames(){
    if(morganaFramesPrepared) return;
    morganaFramesPrepared=true;
    [...new Set(morganaTurnFrames)].forEach(src=>{
      const preload=new Image();
      preload.decoding='async';
      preload.src=src;
    });
  }

  function showMorganaFrame(src){
    if(!classroomMorgana) return;
    classroomMorgana.src=src;

    const normalize=()=>{
      const current=morganaFrameMetrics.get(src);
      const reference=morganaFrameMetrics.get(MORGANA_IDLE_FRAME);
      if(!current || !reference || !classroomMorgana.naturalWidth) return;

      const scale=reference.height/current.height;
      const displayScale=classroomMorgana.clientWidth/classroomMorgana.naturalWidth;
      const tx=(reference.centerX-scale*current.centerX)*displayScale;
      const ty=(reference.bottom-scale*current.bottom)*displayScale;

      classroomMorgana.style.transformOrigin='0 0';
      classroomMorgana.style.transform=`matrix(${scale},0,0,${scale},${tx},${ty})`;
    };

    if(classroomMorgana.complete) requestAnimationFrame(normalize);
    else classroomMorgana.addEventListener('load',()=>requestAnimationFrame(normalize),{once:true});
  }

  function resetMorganaTurn(){
    clearTimeout(morganaFrameTimer);
    morganaFrameTimer=null;
    morganaTurnPlaying=false;
    if(classroomMorgana) showMorganaFrame(MORGANA_IDLE_FRAME);
  }

  function playMorganaTurn({restart=false}={}){
    if(!classroomMorgana) return;
    if(morganaTurnPlaying){
      if(!restart) return;
      resetMorganaTurn();
    }

    if(matchMedia('(prefers-reduced-motion: reduce)').matches){
      showMorganaFrame(MORGANA_IDLE_FRAME);
      return;
    }

    morganaTurnPlaying=true;
    let frameIndex=0;

    const showNextFrame=()=>{
      showMorganaFrame(morganaTurnFrames[frameIndex]);

      if(frameIndex<morganaTurnFrames.length-1){
        frameIndex+=1;
        morganaFrameTimer=setTimeout(showNextFrame,MORGANA_FRAME_MS);
        return;
      }

      morganaFrameTimer=setTimeout(()=>{
        showMorganaFrame(MORGANA_IDLE_FRAME);
        morganaTurnPlaying=false;
        morganaFrameTimer=null;
      },MORGANA_FRAME_MS);
    };

    showNextFrame();
  }

  showMorganaFrame(MORGANA_IDLE_FRAME);

  if(classroomMorgana){
    classroomMorgana.tabIndex=0;
    classroomMorgana.setAttribute('role','button');
    classroomMorgana.setAttribute('aria-label','Morgana: passa al momento successivo della spiegazione');

    const advanceClassroom=()=>{
      if(index!==2) return;
      classroom?.dispatchEvent(new CustomEvent('rm:classroom-advance-request',{bubbles:true}));
      resetSlideTimer();
    };

    classroomMorgana.addEventListener('click',e=>{
      e.stopPropagation();
      advanceClassroom();
    });
    activateWithKeyboard(classroomMorgana,advanceClassroom);
  }

  // La timeline della lavagna (main.js) decide quando deve partire Morgana.
  classroom?.addEventListener('rm:classroom-step-start',()=>playMorganaTurn({restart:true}));
  classroom?.addEventListener('rm:classroom-reset',()=>resetMorganaTurn());

  function resetSceneTimers(){
    clearInterval(bookAutoTimer);

    if(index!==2) resetMorganaTurn();
    else prepareMorganaFrames();

    if(index===0){
      bookAutoTimer=setInterval(()=>nextBookPage(false),BOOK_AUTO_MS);
    }
  }

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
      clearInterval(slideTimer);
      clearInterval(bookAutoTimer);
      resetMorganaTurn();
    }else{
      resetSlideTimer();
      resetSceneTimers();
    }
  });

  updateBookA11y();
  render();
  resetSlideTimer();
  resetSceneTimers();
});
