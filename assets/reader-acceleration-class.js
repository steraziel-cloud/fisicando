/* Regia essenziale in classe: un fondale PNG, pose persistenti e due fotogrammi della macchinina. */
(()=>{
 const ROOT='assets/images/reader/kinematics/classroom/';
 const views=new WeakMap();
 const signed=n=>(n>0?'+':'')+n.toLocaleString('it-IT',{maximumFractionDigits:1});
 const fmt=n=>n.toLocaleString('it-IT',{minimumFractionDigits:1,maximumFractionDigits:1});
 function sample(kind,t){
  if(kind==='sequence'){
   t=Math.max(0,Math.min(9,t));
   if(t<3)return {v:2+2*t,a:2,s:2*t+t*t};
   if(t<5)return {v:8,a:t===3?null:0,s:15+8*(t-3)};
   const u=t-5;return {v:8-u,a:t===5?null:-1,s:31+8*u-u*u/2};
  }
  const configs={gain:[2,2],slow:[10,-2],steady:[6,0],still:[0,0],positiveGain:[2,1],positiveSlow:[6,-1],negativeGain:[-2,-1],negativeSlow:[-6,1],long:[2,1]};
  const [v,a]=configs[kind]||configs.gain;return {v:v+a*t,a,s:v*t+.5*a*t*t};
 }
 function mount(box,scene,state,mode=''){
  box.classList.add('ac-class-card');
  const board=document.createElement('section');board.className='ac-class-board';board.setAttribute('aria-label','La lavagna di Red e Bjorne');
  board.innerHTML=`<div class="ac-room"><img class="ac-backdrop" src="${ROOT}aula-v1.png" alt="Aula luminosa: Red e Bjorne osservano la lavagna dai loro banchi." width="1536" height="1024">
   <div class="ac-chalk"><svg viewBox="0 0 600 300" class="ac-drawing" role="img" aria-label=""></svg></div>
   <div class="ac-pupil ac-red" aria-hidden="true">${[1,2,3].map(n=>`<img src="assets/images/morgana-classroom/red-0${n}.png" class="ac-pose" alt="">`).join('')}</div>
   <div class="ac-pupil ac-bjorne" aria-hidden="true">${[1,2,3].map(n=>`<img src="assets/images/morgana-classroom/bjorne-0${n}.png" class="ac-pose" alt="">`).join('')}</div>
   <img class="ac-desks" src="${ROOT}aula-v1.png" alt="" aria-hidden="true" width="1536" height="1024">
   <img class="ac-balloon" src="${ROOT}balloon-bjorne-v1.png" alt="Accelerazione zero… posso muovermi lo stesso!" hidden>
   </div><div class="ac-options" role="group" aria-label="Situazioni sulla lavagna"></div>
   <div class="ac-controls"><button type="button" class="ac-play">Avvia</button><button type="button" class="ac-reset">Ricomincia</button><label><span>Istante osservato</span><input type="range" min="0" max="4" step="0.05" value="0" aria-label="Istante osservato in secondi"></label><output class="ac-time"></output></div>`;
  box.append(board);
  const ns='http://www.w3.org/2000/svg',drawing=board.querySelector('svg'),opts=board.querySelector('.ac-options'),controls=board.querySelector('.ac-controls'),slider=board.querySelector('input'),play=board.querySelector('.ac-play');
  let currentMode=mode,kind='gain',duration=4,running=false,frame=0,last=0,disposed=false;
  state.t=Number.isFinite(state.t)?state.t:0;
  let ink=null,carCache=null;
  const make=(tag,attrs={},text,parent=ink||drawing)=>{const e=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));if(text!==undefined)e.textContent=text;parent.append(e);return e;};
  ink=make('g',{},undefined,drawing);
  const text=(x,y,s,attrs={})=>make('text',{x,y,...attrs},s);
  function pause(){running=false;last=0;cancelAnimationFrame(frame);}
  function choices(){
   if(scene==='observe')return [['gain','Prende velocità'],['slow','Rallenta'],['steady','Velocità costante']];
   if(scene==='compare')return [['gain','In 4 secondi'],['long','In 8 secondi']];
   if(scene==='sign')return currentMode==='negative'?[['negativeSlow','Da −6 a −2 m/s'],['negativeGain','Da −2 a −6 m/s']]:[['positiveGain','Da +2 a +6 m/s'],['positiveSlow','Da +6 a +2 m/s']];
   if(scene==='zero')return [['steady','Si muove a 6 m/s'],['still','È ferma']];
   return [];
  }
  function setup(reset=false){
   const menu=choices();
   if(scene==='instant')kind='sequence';else if(scene==='mean'||scene==='units')kind='gain';else if(menu.length&&!menu.some(([k])=>k===kind))kind=menu[0][0];
   duration=kind==='sequence'?9:kind==='long'?8:4;
   if(reset)state.t=0;state.t=Math.min(duration,state.t);
   opts.replaceChildren();menu.forEach(([k,label])=>{const b=document.createElement('button');b.type='button';b.textContent=label;b.setAttribute('aria-pressed',String(kind===k));b.addEventListener('click',()=>{pause();kind=k;setup(true);draw();});opts.append(b);});opts.hidden=!menu.length;
   const staticView=scene==='closure'||scene==='recap'||(scene==='units'&&currentMode==='average');controls.hidden=staticView;
   slider.max=duration;
   const pose=scene==='recap'?2:['mean','units','closure'].includes(scene)?1:0;
   board.querySelectorAll('.ac-pupil').forEach(p=>[...p.children].forEach((img,i)=>{img.style.opacity=i===pose?'1':'0';}));
   board.querySelector('.ac-balloon').hidden=scene!=='recap';
  }
  function car(m,small=false){
   const distance=Math.abs(sample(kind,duration).s)||1,negative=m.v<0||kind.startsWith('negative');
   const pos=negative?520+m.s/distance*440:80+m.s/distance*440;
   make('path',{d:'M55 112H550',stroke:'#fff','stroke-width':2,'stroke-opacity':'.7'});
   make('path',{d:'M75 32H525l-9-5m9 5-9 5',stroke:'#fff','stroke-width':2,fill:'none'});
   text(300,20,'verso positivo',{class:'ac-small','text-anchor':'middle'});
   if(!carCache){
    const g=make('g',{},undefined,drawing);
    const crop=make('svg',{x:-61,y:-32,width:122,height:58,viewBox:'0 0 1536 512',preserveAspectRatio:'xMidYMid meet'},undefined,g);
    make('image',{href:ROOT+'auto-frames-v1.png',width:1536,height:1024},undefined,crop);
    carCache={g,crop};
   }
   carCache.g.style.display='';carCache.g.setAttribute('transform',`translate(${pos} 80) scale(${negative?-1:1} 1)`);
   const row=running&&Math.abs(m.v)>.01?Math.floor(state.t*8)%2:0;
   carCache.crop.setAttribute('viewBox',`0 ${row*512} 1536 512`);
   text(300,small?140:158,`vₛ = ${fmt(m.v)} m/s`,{'text-anchor':'middle',class:'ac-speed'});
  }
  function accelerationGraph(){
   const x=t=>70+t*50,y=a=>238-a*24;
   make('path',{d:'M70 166V273H548',stroke:'#fff','stroke-width':2,fill:'none'});
   text(60,157,'aₛ (m/s²)',{class:'ac-small'});text(560,291,'t (s)',{class:'ac-small'});
   [2,0,-1].forEach(a=>{make('path',{d:`M70 ${y(a)}H530`,stroke:'#fff','stroke-opacity':'.2'});text(52,y(a)+6,signed(a),{'text-anchor':'end',class:'ac-small'});});
   [[0,3,2,'#ffd988'],[3,5,0,'#8ce5dd'],[5,9,-1,'#ffb3a0']].forEach(([a,b,v,c])=>{make('path',{d:`M${x(a)} ${y(v)}H${x(b)}`,stroke:c,'stroke-width':4,fill:'none'});[a,b].forEach(t=>make('circle',{cx:x(t),cy:y(v),r:3.5,fill:'#244e40',stroke:c,'stroke-width':2}));});
   [0,3,5,9].forEach(t=>text(x(t),290,String(t),{class:'ac-small','text-anchor':'middle'}));
   const m=sample(kind,state.t),px=x(state.t);make('path',{d:`M${px} 170V273`,stroke:'#fff','stroke-opacity':'.5','stroke-dasharray':'4 4'});
   if(m.a!==null)make('circle',{cx:px,cy:y(m.a),r:5,fill:'#fff'});
  }
  function draw(){
   ink.replaceChildren();if(carCache)carCache.g.style.display='none';const t=state.t,m=sample(kind,t);slider.value=t;slider.setAttribute('aria-valuetext',fmt(t)+' secondi');board.querySelector('output').value=`t = ${fmt(t)} s`;play.textContent=running?'Pausa':t>=duration?'Rivedi':'Avvia';
   if(scene==='closure'){
    text(300,55,'Descrivere il moto',{'text-anchor':'middle',class:'ac-heading'});
    [['s(t)','Dove si trova il corpo?',112],['vₛ(t)','Come cambia la posizione?',175],['aₛ(t)','Come cambia la velocità?',238]].forEach(([symbol,label,y])=>{text(70,y,symbol,{class:'ac-symbol'});text(215,y,label,{class:'ac-small'});});
    drawing.setAttribute('aria-label','Legge oraria: dove si trova il corpo. Velocità: come cambia la posizione. Accelerazione: come cambia la velocità.');return;
   }
   if(scene==='recap'){
    text(300,55,'vₛ costante  →  aₛ = 0',{'text-anchor':'middle',class:'ac-formula'});
    text(300,100,'La velocità non cambia',{'text-anchor':'middle',class:'ac-small'});
    drawing.setAttribute('aria-label','Accelerazione media uguale variazione della velocità divisa per l’intervallo di tempo; unità m/s²; accelerazione nulla significa velocità costante.');return;
   }
   if(scene==='units'&&currentMode==='average'){
    text(300,38,'Stessa media, cambiamenti diversi',{'text-anchor':'middle',class:'ac-heading'});
    text(50,86,'t (s)',{class:'ac-small'});[0,2,4].forEach((n,i)=>text(240+i*130,86,String(n),{'text-anchor':'middle',class:'ac-small'}));
    [2,6,2].forEach((v,i)=>text(240+i*130,145,String(v),{'text-anchor':'middle'}));text(50,145,'vₛ (m/s)',{class:'ac-small'});
    [2,2,2].forEach((v,i)=>text(240+i*130,204,String(v),{'text-anchor':'middle'}));text(50,204,'vₛ (m/s)',{class:'ac-small'});
    text(300,270,'In entrambi i casi: aₛ,ₘ = 0',{'text-anchor':'middle',class:'ac-heading'});
    drawing.setAttribute('aria-label','Ai tempi 0, 2 e 4 secondi, nel primo moto le velocità sono 2, 6 e 2 m/s; nel secondo sono sempre 2 m/s. Entrambe le accelerazioni medie fra 0 e 4 secondi sono zero.');return;
   }
   car(m,scene==='instant'&&currentMode==='graph');
   if(scene==='instant'&&currentMode==='graph')accelerationGraph();
   else if(scene==='units'){
    [0,1,2,3,4].forEach((n,i)=>{text(75+i*112,215,`${n} s`,{'text-anchor':'middle',class:'ac-small'});text(75+i*112,263,String(2+2*n),{'text-anchor':'middle',class:'ac-heading'});});
   }else if(scene==='mean'||scene==='compare'){
    const a=sample(kind,0),b=sample(kind,duration);
    text(300,207,`${fmt(a.v)} → ${fmt(b.v)} m/s   ·   Δt = ${duration} s`,{'text-anchor':'middle',class:'ac-small'});
    text(300,270,scene==='mean'?'aₛ,ₘ = (10 − 2) ÷ 4 = +2 m/s²':'Δvₛ = +8 m/s',{'text-anchor':'middle',class:'ac-heading'});
   }else if(scene==='observe'){
    text(300,222,kind==='gain'?'La velocità aumenta':kind==='slow'?'La velocità diminuisce':'La velocità non cambia',{'text-anchor':'middle',class:'ac-heading'});
    text(300,270,`${fmt(sample(kind,0).v)} → ${fmt(sample(kind,duration).v)} m/s`,{'text-anchor':'middle',class:'ac-small'});
   }else{
    text(300,219,`aₛ = ${m.a===null?'cambio di fase':signed(m.a)+' m/s²'}`,{'text-anchor':'middle',class:'ac-heading'});
    text(300,272,scene==='zero'?'Stessa accelerazione. Moti diversi.':scene==='instant'?'Un valore per l’istante osservato':`${fmt(sample(kind,0).v)} → ${fmt(sample(kind,duration).v)} m/s`,{'text-anchor':'middle',class:'ac-small'});
   }
   drawing.setAttribute('aria-label',`Istante ${fmt(t)} secondi; velocità ${fmt(m.v)} metri al secondo; ${scene==='observe'||scene==='compare'?'':`accelerazione ${m.a===null?'cambio di fase':signed(m.a)+' metri al secondo quadrato'}`}.`);
  }
  function tick(now){if(disposed||!running)return;if(last)state.t=Math.min(duration,state.t+(now-last)/1000);last=now;if(state.t>=duration)pause();draw();if(running)frame=requestAnimationFrame(tick);}
  play.addEventListener('click',()=>{if(running)pause();else{if(state.t>=duration)state.t=0;running=true;last=0;frame=requestAnimationFrame(tick);}draw();});
  board.querySelector('.ac-reset').addEventListener('click',()=>{pause();state.t=0;draw();});slider.addEventListener('input',()=>{pause();state.t=Number(slider.value);draw();});
  const update=mode=>{if(currentMode===mode)return;pause();currentMode=mode||'';setup();draw();};
  views.set(box,{update});setup();draw();return ()=>{disposed=true;pause();views.delete(box);};
 }
 window.GatitoAccelerationClass={mount,setMode:(box,mode)=>views.get(box)?.update(mode),sample};
})();
