window.GatitoLawMotion=(()=>{
 const position=t=>t<=2?t*t:t<=4?4:4-6*Math.pow((t-4)/4,2);
 const fmt=n=>n.toFixed(2).replace('.',',');
 const ns='http://www.w3.org/2000/svg';
 function mount(container,state,{graph=false}={}){
  const board=document.createElement('div');board.className='rm-reader-board rm-law-board';
  board.innerHTML='<h4>Lavagna · Posizione e tempo</h4><svg class="rm-law-trajectory" viewBox="0 0 640 285" role="img" aria-label="Punto materiale su una traiettoria curva, con origine e verso positivo"><path class="rm-law-route" d="M50 186 C118 58 191 55 269 144 S432 249 590 93" fill="none" stroke="currentColor" stroke-width="3"/><g class="rm-law-ticks"></g><circle class="rm-law-origin" r="13" fill="var(--rm-panel)" stroke="var(--rm-accent)" stroke-width="2"/><text class="rm-law-o" text-anchor="middle" font-size="13">O</text><path class="rm-law-arrow" fill="none" stroke="var(--rm-accent)" stroke-width="3"/><text x="580" y="67" text-anchor="end" fill="var(--rm-accent)" font-size="14">verso +</text><circle class="rm-law-body" r="9" fill="var(--rm-accent)" stroke="var(--rm-panel)" stroke-width="2"/></svg><div class="rm-law-readings"><span class="rm-law-time"></span><span class="rm-law-position"></span></div><div class="rm-law-controls"><button type="button" class="rm-btn rm-btn-primary rm-law-play">Avvia</button><button type="button" class="rm-btn rm-law-reset">Ricomincia</button></div><label class="rm-law-slider-label">Istante da osservare<input class="rm-law-slider" type="range" min="0" max="8" step="0.05" aria-label="Istante da osservare in secondi"></label><div class="rm-law-graph"><h4>Grafico della legge oraria</h4><svg viewBox="0 0 640 280" role="img" aria-label="Grafico posizione tempo: il corpo avanza, resta fermo da 2 a 4 secondi e torna indietro"><g class="rm-law-grid"></g><path d="M48 40 V246 M48 188 H606" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="10" y="28" font-size="15">s (m)</text><text x="610" y="211" font-size="15" text-anchor="end">t (s)</text><path class="rm-law-trace" fill="none" stroke="var(--rm-accent)" stroke-width="3" stroke-linecap="round"/><path class="rm-law-projections" fill="none" stroke="var(--rm-accent)" stroke-width="1.5" stroke-dasharray="5 5"/><circle class="rm-law-graph-point" r="5" fill="var(--rm-accent)"/></svg></div>';
  container.append(board);
  const svg=board.querySelector('.rm-law-trajectory'),route=svg.querySelector('.rm-law-route'),length=route.getTotalLength();
  const at=s=>route.getPointAtLength((s+5)/10*length);
  const make=(tag,attrs,text)=>{const n=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));if(text!==undefined)n.textContent=text;return n;};
  const ticks=svg.querySelector('.rm-law-ticks');
  for(let s=-5;s<=5;s++){
   const p=at(s),a=at(Math.max(-5,s-.01)),b=at(Math.min(5,s+.01)),angle=Math.atan2(b.y-a.y,b.x-a.x),nx=-Math.sin(angle),ny=Math.cos(angle);
   ticks.append(make('path',{d:'M'+(p.x-6*nx)+' '+(p.y-6*ny)+' L'+(p.x+6*nx)+' '+(p.y+6*ny),stroke:'currentColor','stroke-width':1.5}));
   ticks.append(make('text',{x:p.x+24*nx,y:p.y+24*ny+4,'text-anchor':'middle','font-size':14,fill:'currentColor'},s+' m'));
  }
  const o=at(0);svg.querySelector('.rm-law-origin').setAttribute('cx',o.x);svg.querySelector('.rm-law-origin').setAttribute('cy',o.y);
  svg.querySelector('.rm-law-o').setAttribute('x',o.x);svg.querySelector('.rm-law-o').setAttribute('y',o.y+4);
  svg.querySelector('.rm-law-arrow').setAttribute('d','M570 84 L580 77 M570 79 L580 77 L576 87');
  const x=t=>48+t*68,y=s=>188-s*24,grid=board.querySelector('.rm-law-grid');
  for(let s=-2;s<=5;s++){
   grid.append(make('path',{d:'M48 '+y(s)+' H592',stroke:'currentColor',opacity:.12}));
   grid.append(make('text',{x:38,y:y(s)+4,'text-anchor':'end','font-size':13,fill:'currentColor'},String(s)));
  }
  for(let t=0;t<=8;t++){
   grid.append(make('path',{d:'M'+x(t)+' 68 V236',stroke:'currentColor',opacity:.12}));
   grid.append(make('text',{x:x(t),y:264,'text-anchor':'middle','font-size':13,fill:'currentColor'},String(t)));
  }
  const slider=board.querySelector('.rm-law-slider'),play=board.querySelector('.rm-law-play');
  let running=false,frame=0,last=0,disposed=false;
  state.time=Math.max(0,Math.min(8,Number(state.time)||0));
  function draw(){
   const t=state.time,s=position(t),p=at(s);
   const body=svg.querySelector('.rm-law-body');body.setAttribute('cx',p.x);body.setAttribute('cy',p.y);
   board.querySelector('.rm-law-time').textContent='t = '+fmt(t)+' s';
   board.querySelector('.rm-law-position').textContent='s = '+fmt(s)+' m';
   slider.value=String(t);slider.setAttribute('aria-valuetext',fmt(t)+' secondi');
   play.textContent=running?'Pausa':t>=8?'Rivedi':t>0?'Riprendi':'Avvia';
   let d='M'+x(0)+' '+y(position(0));for(let a=.04;a<t;a+=.04)d+=' L'+x(a)+' '+y(position(a));d+=' L'+x(t)+' '+y(s);
   board.querySelector('.rm-law-trace').setAttribute('d',d);
   board.querySelector('.rm-law-projections').setAttribute('d','M'+x(t)+' 188 V'+y(s)+' H48');
   const dot=board.querySelector('.rm-law-graph-point');dot.setAttribute('cx',x(t));dot.setAttribute('cy',y(s));
  }
  function stop(){running=false;cancelAnimationFrame(frame);draw();}
  function animate(now){
   if(disposed||!running)return;
   state.time=Math.min(8,state.time+(now-last)/1000);last=now;
   if(state.time>=8)running=false;
   draw();if(running)frame=requestAnimationFrame(animate);
  }
  play.addEventListener('click',()=>{if(running){stop();return;}if(state.time>=8)state.time=0;running=true;last=performance.now();draw();frame=requestAnimationFrame(animate);});
  board.querySelector('.rm-law-reset').addEventListener('click',()=>{stop();state.time=0;draw();});
  slider.addEventListener('input',()=>{const time=Number(slider.value);stop();state.time=time;draw();});
  board.querySelector('.rm-law-graph').hidden=!graph;
  draw();
  return ()=>{disposed=true;running=false;cancelAnimationFrame(frame);};
 }
 return {mount};
})();