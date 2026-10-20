/* Bjorne's long-division scene. Independent of the fraction workbench. */
(()=>{
 'use strict';
 const mounted=new WeakMap();
 const stages=[
  ['Prepariamo la divisione','Scriviamo 246 a sinistra e il divisore 5 a destra.'],
  ['Il 5 nel 24…','Il 5 nel 2 non sta. Consideriamo allora le prime due cifre: 24.'],
  ['…sta 4 volte','5 × 4 = 20, mentre 5 × 5 = 25 supera 24. Scriviamo 4 nel quoziente.'],
  ['Moltiplichiamo e sottraiamo','4 × 5 = 20. Scriviamo −20 sotto il 24, allineando le cifre.'],
  ['Resta 4','24 − 20 = 4. Scriviamo il resto parziale sotto la linea.'],
  ['Abbassiamo il 6','Portiamo in basso la cifra successiva: accanto al 4, il 6 forma 46.'],
  ['Il 5 nel 46 sta 9 volte','5 × 9 = 45, mentre 5 × 10 = 50 supera 46. Scriviamo 9 accanto al 4: il quoziente intero è 49.'],
  ['Moltiplichiamo e sottraiamo ancora','9 × 5 = 45. Scriviamo −45 sotto il 46.'],
  ['Resta 1','46 − 45 = 1. Non ci sono altre cifre da abbassare e il resto è minore di 5.'],
  ['La divisione non è esatta','246 = 5 × 49 + 1. Abbiamo quoziente intero 49 e resto 1: il risultato esatto della divisione non è un numero naturale.']
 ];
 const svg=`<svg class="qd-calculation" viewBox="0 0 520 310" role="img" aria-label="Divisione in colonna di 246 per 5"><g class="qd-numbers"><g data-reveal="0"><text x="86" y="49">2</text><text x="127" y="49">4</text><text x="168" y="49">6</text><text x="266" y="49">5</text><path d="M232 14V113 M232 65H348" class="qd-rule"/></g><g data-reveal="2"><text x="266" y="105" class="qd-gold">4</text></g><g data-reveal="3"><text x="42" y="104">−</text><text x="86" y="104">2</text><text x="127" y="104">0</text></g><g data-reveal="4"><path d="M77 120H152" class="qd-rule"/><text x="127" y="169">4</text></g><g data-reveal="5"><path d="M179 61V126 M172 118L179 127L186 118" class="qd-arrow"/><text x="168" y="169" class="qd-dropped qd-gold">6</text></g><g data-reveal="6"><text x="307" y="105" class="qd-gold">9</text></g><g data-reveal="7"><text x="83" y="223">−</text><text x="127" y="223">4</text><text x="168" y="223">5</text></g><g data-reveal="8"><path d="M118 239H197" class="qd-rule"/><text x="168" y="288" class="qd-gold">1</text></g></g><g class="qd-board-labels"><text x="365" y="46">divisore</text><g data-reveal="2"><text x="365" y="98">quoziente</text><text x="365" y="119">intero</text></g><text x="232" y="287" data-reveal="8" class="qd-gold">resto</text></g><rect class="qd-focus" x="74" y="15" width="83" height="46" rx="8"/></svg>`;
 function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n;}
 function button(label,action,cls=''){const b=el('button','qd-button '+cls,label);b.type='button';b.addEventListener('click',action);return b;}
 function mount(box,{view='scene',passive=false}={}){
  box.classList.add('qd-reader-card');
  const scene=el('aside','qd-scene');scene.setAttribute('aria-label','Bjorne alla scrivania con il tablet');
  const trigger=button('',()=>open(),'qd-scene-trigger');trigger.setAttribute('aria-label','Apri il tablet di Bjorne e guarda la divisione 246 diviso 5');
  const art=el('span','qd-art');const img=el('img','qd-scene-image');img.src='assets/images/reader/bjorne-tablet-studio-v1.webp';img.alt='Bjorne alla scrivania scrive sul tablet con il pennino';img.width=1536;img.height=1024;img.decoding='async';
  const preview=el('span','qd-scene-writing');preview.innerHTML='<span>246 <span class="qd-preview-divider">5<br><span>?</span></span></span>';
  const chalk=el('span','qd-chalk');chalk.setAttribute('aria-hidden','true');art.append(img,preview,chalk);trigger.append(art,el('span','qd-open-hint','Tocca il tablet per entrare ↗'));
  scene.append(trigger,el('p','qd-scene-note','Oppure premi «Continua»: ripassiamo insieme i passaggi.'));box.append(scene);
  let mode=view,stage=0,playing=false,timer=null,disposed=false,skipNext=false,opener=null;
  const dialog=el('dialog','qd-dialog');dialog.setAttribute('aria-label','Il tablet di Bjorne: divisione in colonna');
  const top=el('header','qd-dialog-top');top.append(el('span','qd-eyebrow','Il tablet di Bjorne'));
  const close=button('Chiudi ×',()=>closeDialog());close.setAttribute('aria-label','Chiudi il tablet e torna alla lezione');top.append(close);
  const heading=el('h2','qd-dialog-title','Ripassiamo 246 : 5');
  const content=el('div','qd-dialog-content'),blackboard=el('div','qd-blackboard');blackboard.innerHTML=svg;
  const check=el('p','qd-check','246 = 5 × 49 + 1');blackboard.append(check);
  const guide=el('div','qd-guide'),counter=el('p','qd-counter'),title=el('h3','qd-stage-title'),narration=el('p','qd-narration');narration.setAttribute('role','status');narration.setAttribute('aria-live','polite');
  const dots=el('div','qd-progress');dots.setAttribute('aria-hidden','true');for(let i=0;i<stages.length;i++)dots.append(el('span',''));
  guide.append(counter,title,narration,dots);content.append(blackboard,guide);
  const controls=el('div','qd-controls');
  const prev=button('← Un passo',()=>{pause();setStage(stage-1);});
  const play=button('▶ Guarda l’animazione',()=>playing?pause():start(),'qd-primary');
  const next=button('Un passo →',()=>{pause();setStage(stage+1);});
  const restart=button('↺ Ricomincia',()=>{pause();setStage(0);});
  controls.append(prev,play,next,restart);
  const finish=button('Continua la lezione →',()=>{closeDialog(false);if(mode==='scene'&&!passive){skipNext=true;document.getElementById('reader-next')?.click();skipNext=false;}else trigger.focus({preventScroll:true});},'qd-finish qd-primary');
  dialog.append(top,heading,content,controls,finish);document.body.append(dialog);
  function pause(){playing=false;clearTimeout(timer);timer=null;play.textContent=stage===stages.length-1?'↺ Rivedi l’animazione':'▶ Guarda l’animazione';}
  function setStage(n){stage=Math.max(0,Math.min(stages.length-1,n));const groups=blackboard.querySelectorAll('[data-reveal]');for(const group of groups){const at=Number(group.dataset.reveal);group.classList.toggle('qd-hidden',at>stage);group.classList.toggle('qd-new',at===stage&&stage>0);}
   blackboard.querySelector('.qd-focus').classList.toggle('qd-hidden',stage!==1);check.hidden=stage<9;counter.textContent=`Passaggio ${stage+1} di ${stages.length}`;title.textContent=stages[stage][0];narration.textContent=stages[stage][1];
   dots.querySelectorAll('span').forEach((d,i)=>d.classList.toggle('is-done',i<=stage));prev.disabled=stage===0;next.disabled=stage===stages.length-1;finish.hidden=stage!==stages.length-1;
   const spoken=stages.slice(0,stage+1).map(s=>s[1]).join(' ');blackboard.querySelector('svg').setAttribute('aria-label',spoken);
  }
  function tick(){clearTimeout(timer);if(!playing||disposed||!dialog.open)return;if(stage===stages.length-1){pause();return;}timer=setTimeout(()=>{if(!playing||disposed)return;setStage(stage+1);tick();},stage===0?1300:stage===5?3300:2700);}
  function start(){if(stage===stages.length-1)setStage(0);playing=true;play.textContent='Ⅱ Pausa';tick();}
  function open(){if(disposed||dialog.open)return;opener=document.activeElement;dialog.showModal();setStage(stage);close.focus({preventScroll:true});if(!matchMedia('(prefers-reduced-motion: reduce)').matches)start();}
  function closeDialog(restore=true){pause();dialog.close();if(restore&&(opener?.isConnected))opener.focus({preventScroll:true});}
  const cancel=e=>{e.preventDefault();closeDialog();};dialog.addEventListener('cancel',cancel);
  const intercept=e=>{if(skipNext||passive||mode!=='scene'||!box.isConnected)return;e.preventDefault();e.stopImmediatePropagation();open();};
  const readerNext=document.getElementById('reader-next');readerNext?.addEventListener('click',intercept,true);
  const visibility=()=>{if(document.hidden)pause();};document.addEventListener('visibilitychange',visibility);
  const key=e=>{if(!['ArrowRight','ArrowLeft'].includes(e.key))return;e.preventDefault();e.stopPropagation();if(e.key==='ArrowRight'&&!next.disabled){pause();setStage(stage+1);}if(e.key==='ArrowLeft'&&!prev.disabled){pause();setStage(stage-1);}};dialog.addEventListener('keydown',key);
  setStage(0);
  const api={setView(v){mode=v||'done';scene.classList.toggle('qd-scene-done',mode!=='scene');scene.querySelector('.qd-scene-note').textContent=mode==='scene'?'Oppure premi «Continua»: ripassiamo insieme i passaggi.':'Puoi riaprire il tablet per rivedere la divisione.';},dispose(){disposed=true;pause();if(dialog.open)dialog.close();dialog.remove();readerNext?.removeEventListener('click',intercept,true);document.removeEventListener('visibilitychange',visibility);dialog.removeEventListener('cancel',cancel);dialog.removeEventListener('keydown',key);mounted.delete(box);}};
  api.setView(view);mounted.set(box,api);return()=>api.dispose();
 }
 window.GatitoDivisionIntro={mount,setView(box,view){mounted.get(box)?.setView(view);}};
})();
