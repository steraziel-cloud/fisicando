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
  let bookAutoTimer=null;
  let pointerStartX=null;
  let pointerStartY=null;
  let wheelLocked=false;

  const AUTO_MS=20000;
  const MICRO_MS=6500;
  const BOOK_AUTO_MS=AUTO_MS/6;

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
    if(e.target.closest('button,a,.rm-whisper,.rm-classroom-morgana')) return;
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

  // Dimensione corretta per i nuovi PNG. I frame nuovi hanno molto piu spazio
  // trasparente rispetto ai vecchi A-F, quindi la width del box deve essere maggiore.
  const morganaStyle=document.createElement('style');
  morganaStyle.textContent=`
    .rm-classroom-v2 .rm-classroom-morgana{
      width:70%!important;
      left:-18%!important;
      bottom:5%!important;
      pointer-events:auto!important;
      cursor:pointer!important;
      touch-action:manipulation;
    }
    .rm-classroom-v2 .rm-classroom-morgana:hover{
      filter:drop-shadow(0 16px 20px rgba(20,34,48,.12)) brightness(1.035);
    }
    .rm-classroom-v2 .rm-classroom-morgana:focus-visible{
      outline:3px solid color-mix(in srgb,var(--rm-accent) 70%,white);
      outline-offset:4px;
    }
    @media(max-width:760px){
      .rm-classroom-v2 .rm-classroom-morgana{
        width:70%!important;
        left:-18%!important;
        bottom:5%!important;
      }
    }
  `;
  document.head.appendChild(morganaStyle);

  const morganaFrameMetrics=new Map();

  function measureMorganaFrame(img){
    const canvas=document.createElement('canvas');
    canvas.width=img.naturalWidth;
    canvas.height=img.naturalHeight;
    const ctx=canvas.getContext('2d',{willReadFrequently:true});
    ctx.drawImage(img,0,0);
    const {data}=ctx.getImageData(0,0,canvas.width,canvas.height);
    let left=canvas.width,top=canvas.height,right=-1,bottom=-1;

    for(let y=0;y<canvas.height;y+=2){
      for(let x=0;x<canvas.width;x+=2){
        if(data[(y*canvas.width+x)*4+3]>12){
          if(x<left) left=x;
          if(x>right) right=x;
          if(y<top) top=y;
          if(y>bottom) bottom=y;
        }
      }
    }

    if(right<left || bottom<top) return null;
    return {
      left,top,right,bottom,
      width:right-left,
      height:bottom-top,
      centerX:(left+right)/2
    };
  }

  [...new Set(morganaTurnFrames)].forEach(src=>{
    const preload=new Image();
    preload.decoding='async';
    preload.onload=()=>{
      try{
        morganaFrameMetrics.set(src,measureMorganaFrame(preload));
      }catch(error){
        console.warn('Impossibile misurare il frame di Morgana',src,error);
      }
    };
    preload.src=src;
  });

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

  // ------------------------------------------------------------
  // Risorse della slide "Oltre le lezioni"
  // ------------------------------------------------------------
  const resourceData=[
    ['Lezioni','Contenuti e spiegazioni da riprendere quando serve.'],
    ['Materiali','Schemi, approfondimenti e strumenti utili per organizzare lo studio.'],
    ['Esercitazioni','Attivita per allenarsi e mettere alla prova cio che si e capito.'],
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

  function resetMicroTimer(){
    clearInterval(microTimer);
    clearInterval(bookAutoTimer);

    if(index!==2) resetMorganaTurn();

    if(index===0){
      bookAutoTimer=setInterval(()=>nextBookPage(false),BOOK_AUTO_MS);
    }else if(index===3){
      microTimer=setInterval(()=>advanceResource(false),MICRO_MS);
    }
  }

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){
      clearInterval(slideTimer);
      clearInterval(microTimer);
      clearInterval(bookAutoTimer);
      resetMorganaTurn();
    }else{
      resetSlideTimer();
      resetMicroTimer();
    }
  });

  updateBookA11y();
  updateResourceControls();
  render();
  resetSlideTimer();
  resetMicroTimer();
});
