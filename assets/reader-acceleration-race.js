/* Una sola legge per posizione, velocità e accelerazione: nessun moto disgiunto dal grafico. */
(() => {
  const T=12, names=['bjorne','red','morgana'];
  const labels={bjorne:'Bjorne',red:'Red',morgana:'Morgana'};
  const colors={bjorne:'#168b87',red:'#d96528',morgana:'#9462c3'};
  const model=(name,t)=>{
    t=Math.max(0,Math.min(T,t));
    if(name==='bjorne')return {s:5*t,v:5,a:0};
    if(name==='red')return {s:6*t+.4*t*t-t*t*t/30,v:6+.8*t-.1*t*t,a:.8-.2*t};
    return {s:4*t+.25*t*t,v:4+.5*t,a:.5};
  };
  let serial=0;
  function mount(box,state){
    box.classList.add('ar-race-card');
    const board=document.createElement('section');board.className='ar-race rm-reader-board';board.setAttribute('aria-label','Corsa e grafico della velocità scalare');
    const id='ar-race-'+(++serial),ns='http://www.w3.org/2000/svg';
    const svg=(tag,attrs,parent)=>{const n=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));if(parent)parent.append(n);return n;};
    board.innerHTML=`<div class="ar-board-heading"><strong>Tre modi di correre</strong><output class="ar-time"></output></div>
      <svg class="ar-track" viewBox="0 0 600 190" role="img" aria-label="Tre corsie: origine all’inizio degli ultimi cento metri, verso positivo diretto al traguardo.">
        <defs><clipPath id="${id}-round"><circle r="16"/></clipPath></defs>
        <rect x="46" y="28" width="500" height="126" rx="12" fill="currentColor" opacity=".045"/>
        ${[69,111].map(y=>`<path d="M46 ${y}H546" stroke="currentColor" stroke-opacity=".15" stroke-dasharray="5 5"/>`).join('')}
        <path d="M46 25V155 M546 25V155" stroke="currentColor" stroke-opacity=".35"/>
        <path d="M66 17H512l-6-4m6 4-6 4" stroke="currentColor" fill="none" stroke-width="1.5"/>
        <text x="290" y="12" text-anchor="middle">verso positivo</text>
        <text x="46" y="176" text-anchor="middle">0 m</text><text x="546" y="176" text-anchor="middle">100 m</text>
      </svg>
      <div class="ar-legend">${names.map(n=>`<span style="--runner:${colors[n]}"><i></i>${labels[n]} <strong data-speed="${n}"></strong></span>`).join('')}</div>
      <svg class="ar-graph" viewBox="0 0 600 245" role="img" aria-label="Grafico della velocità scalare in funzione del tempo: Bjorne mantiene 5 m/s; Red prima aumenta la velocità, poi rallenta; Morgana aumenta la velocità regolarmente.">
        <text x="52" y="18">v<tspan baseline-shift="sub" font-size="11">s</tspan> (m/s)</text>
        ${[0,2,4,6,8,10].map(v=>`<path d="M52 ${202-16*v}H552" stroke="currentColor" stroke-opacity=".12"/><text x="39" y="${207-16*v}" text-anchor="end">${v}</text>`).join('')}
        <path d="M52 32V202H552" fill="none" stroke="currentColor" stroke-width="1.8"/>
        ${[0,2,4,6,8,10,12].map(t=>`<path d="M${52+t*500/T} 202v5" stroke="currentColor"/><text x="${52+t*500/T}" y="226" text-anchor="middle">${t}</text>`).join('')}
        <text x="584" y="240" text-anchor="end">t (s)</text><path class="ar-guide" stroke="currentColor" stroke-opacity=".4" stroke-dasharray="3 4"/>
      </svg>
      <div class="ar-controls"><button type="button" class="ar-play">Avvia</button><button type="button" class="ar-reset" aria-label="Riporta la corsa all’inizio dell’osservazione">Ricomincia</button><label class="ar-timeline"><span>Istante osservato</span><input type="range" min="0" max="12" step="0.05" value="0" aria-label="Istante della corsa in secondi"></label></div>
      <p class="ar-caption">Il cronometro parte durante la gara. Osserviamo i successivi 12 secondi; i punti rappresentano le posizioni dei gatti.</p>`;
    box.append(board);
    const track=board.querySelector('.ar-track'),graph=board.querySelector('.ar-graph'),groups={},curves={},dots={};
    names.forEach((name,i)=>{
      const g=svg('g',{},track),cy=49+i*42;
      svg('circle',{r:19,fill:'var(--rm-card,#fff)',stroke:colors[name],'stroke-width':2},g);
      const crop=svg('g',{'clip-path':`url(#${id}-round)`},g);
      if(name==='red')svg('image',{x:-16,y:-16,width:32,height:32,href:'assets/images/red-logo-head.png'},crop);
      if(name==='morgana'){
        const nested=svg('svg',{x:-16,y:-16,width:32,height:32,viewBox:'590 0 560 430',preserveAspectRatio:'xMidYMid slice'},crop);
        svg('image',{width:1672,height:941,href:'assets/images/morgana-classroom/morgana-turn-01.png'},nested);
      }
      if(name==='bjorne'){
        const nested=svg('svg',{x:-16,y:-16,width:32,height:32,viewBox:'120 80 610 560',preserveAspectRatio:'xMidYMid slice'},crop);
        svg('image',{width:1080,height:1440,href:'assets/images/morgana-classroom/bjorne-01.png'},nested);
      }
      groups[name]={g,cy};
      curves[name]=svg('path',{fill:'none',stroke:colors[name],'stroke-width':3.5,'stroke-linecap':'round','stroke-linejoin':'round',...(name==='red'?{'stroke-dasharray':'8 4'}:{})},graph);
      dots[name]=svg('circle',{r:5,fill:colors[name],stroke:'var(--rm-card,#fff)','stroke-width':1.5},graph);
    });
    const play=board.querySelector('.ar-play'),slider=board.querySelector('input'),readout=board.querySelector('.ar-time');
    state.t=Number.isFinite(state.t)?Math.max(0,Math.min(T,state.t)):0;
    let running=false,frame=0,last=0,disposed=false;
    const number=n=>n.toLocaleString('it-IT',{minimumFractionDigits:1,maximumFractionDigits:1});
    const x=t=>52+t*500/T,y=v=>202-16*v;
    function draw(){
      const t=state.t;slider.value=t;readout.value=`t = ${number(t)} s`;
      names.forEach(name=>{
        const m=model(name,t);groups[name].g.setAttribute('transform',`translate(${46+m.s*5} ${groups[name].cy})`);
        board.querySelector(`[data-speed="${name}"]`).textContent=number(m.v)+' m/s';
        const samples=Math.max(1,Math.ceil(t*25));let d='';
        for(let i=0;i<=samples;i++){const at=t*i/samples;d+=(i?'L':'M')+x(at).toFixed(2)+' '+y(model(name,at).v).toFixed(2);}
        curves[name].setAttribute('d',d);dots[name].setAttribute('cx',x(t));dots[name].setAttribute('cy',y(m.v));
      });
      board.querySelector('.ar-guide').setAttribute('d',`M${x(t)} 32V202`);
      play.textContent=running?'Pausa':t>=T?'Rivedi':'Avvia';slider.setAttribute('aria-valuetext',number(t)+' secondi');
    }
    function pause(){running=false;last=0;cancelAnimationFrame(frame);}
    function tick(now){if(disposed||!running)return;if(last)state.t=Math.min(T,state.t+(now-last)/1000);last=now;if(state.t===T)pause();draw();if(running)frame=requestAnimationFrame(tick);}
    play.addEventListener('click',()=>{if(running){pause();draw();return;}if(state.t>=T)state.t=0;running=true;last=0;draw();frame=requestAnimationFrame(tick);});
    slider.addEventListener('input',()=>{pause();state.t=Number(slider.value);draw();});
    board.querySelector('.ar-reset').addEventListener('click',()=>{pause();state.t=0;draw();});
    draw();return ()=>{disposed=true;pause();};
  }
  window.GatitoAccelerationRace={mount,model};
})();
