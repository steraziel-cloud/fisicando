/* Una sola legge per posizione, velocità e accelerazione: nessun moto disgiunto dal grafico. */
(() => {
  const T=12, names=['red','morgana','bjorne'];
  const labels={bjorne:'Bjorne',red:'Red',morgana:'Morgana'};
  const colors={bjorne:'#168b87',red:'#d96528',morgana:'#9462c3'};
  const model=(name,t)=>{
    t=Math.max(0,Math.min(T,t));
    if(name==='bjorne')return {s:4*t,v:4,a:0};
    if(name==='red'){
      if(t<4)return {s:5*t+.5*t*t,v:5+t,a:1};
      const u=t-4;
      // La velocità è continua; nel cambio di regime la derivata non è definita.
      return {s:28+9*u-.125*u*u,v:9-.25*u,a:t===4?null:-.25};
    }
    return {s:5*t+.25*t*t,v:5+.5*t,a:.5};
  };
  let serial=0;
  function mount(box,state){
    box.classList.add('ar-race-card');
    const board=document.createElement('section');board.className='ar-race rm-reader-board';board.setAttribute('aria-label','Corsa e grafico della velocità scalare');
    const id='ar-race-'+(++serial),ns='http://www.w3.org/2000/svg';
    const svg=(tag,attrs,parent)=>{const n=document.createElementNS(ns,tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));if(parent)parent.append(n);return n;};
    board.innerHTML=`<div class="ar-board-heading"><strong>Tre modi di correre</strong><output class="ar-time"></output></div>
      <svg class="ar-track" viewBox="0 0 600 210" role="img" aria-label="Tre corsie: origine all’inizio degli ultimi cento metri, verso positivo diretto al traguardo.">
        <defs><clipPath id="${id}-round"><circle r="21"/></clipPath></defs>
        <rect x="46" y="26" width="500" height="144" rx="12" fill="#c95648"/>
        ${[74,122].map(y=>`<path d="M46 ${y}H546" stroke="#fff" stroke-opacity=".85" stroke-width="2"/>`).join('')}
        <path d="M46 26V170" stroke="#fff" stroke-width="2"/>
        <g aria-hidden="true">${Array.from({length:12},(_,i)=>`<rect x="${530+i%2*8}" y="${26+Math.floor(i/2)*24}" width="8" height="24" fill="${i%4===0||i%4===3?'#fff':'#303b48'}"/>`).join('')}</g>
        <rect x="498" y="-1" width="82" height="22" rx="6" fill="#263746"/>
        <text x="539" y="15" text-anchor="middle" style="fill:#fff;font-size:12px;font-weight:700">ARRIVO</text>
        <path d="M66 17H478l-6-4m6 4-6 4" stroke="currentColor" fill="none" stroke-width="1.5"/>
        <text x="270" y="12" text-anchor="middle">verso positivo</text>
        <text x="46" y="194" text-anchor="middle">0 m</text><text x="546" y="194" text-anchor="middle">100 m</text>
      </svg>
      <div class="ar-legend">${names.map(n=>`<span style="--runner:${colors[n]}"><i></i>${labels[n]}</span>`).join('')}</div>
      <svg class="ar-graph" viewBox="0 0 600 245" role="img" aria-label="Grafico della velocità scalare in funzione del tempo: Bjorne mantiene 4 m/s; Red e Morgana partono da 5 m/s. La velocità di Red cresce fino a 9 m/s nei primi 4 secondi, poi diminuisce gradualmente; quella di Morgana aumenta regolarmente.">
        <text x="52" y="18">v<tspan baseline-shift="sub" font-size="11">s</tspan> (m/s)</text>
        ${[0,2,4,6,8,10,12].map(v=>`<path d="M52 ${202-13*v}H552" stroke="currentColor" stroke-opacity=".12"/><text x="39" y="${207-13*v}" text-anchor="end">${v}</text>`).join('')}
        <path d="M52 32V202H552" fill="none" stroke="currentColor" stroke-width="1.8"/>
        ${[0,2,4,6,8,10,12].map(t=>`<path d="M${52+t*500/T} 202v5" stroke="currentColor"/><text x="${52+t*500/T}" y="226" text-anchor="middle">${t}</text>`).join('')}
        <text x="584" y="240" text-anchor="end">t (s)</text><path class="ar-guide" stroke="currentColor" stroke-opacity=".4" stroke-dasharray="3 4"/>
      </svg>
      <div class="ar-controls"><button type="button" class="ar-play">Avvia</button><button type="button" class="ar-reset" aria-label="Riporta la corsa all’inizio dell’osservazione">Ricomincia</button><label class="ar-timeline"><span>Istante osservato</span><input type="range" min="0" max="12" step="0.05" value="0" aria-label="Istante della corsa in secondi"></label></div>`;
    box.append(board);
    const track=board.querySelector('.ar-track'),graph=board.querySelector('.ar-graph'),groups={},curves={},dots={},tags={};
    names.forEach((name,i)=>{
      const g=svg('g',{},track),cy=50+i*48;
      svg('circle',{r:24,fill:'var(--rm-card,#fff)',stroke:colors[name],'stroke-width':2},g);
      const crop=svg('g',{'clip-path':`url(#${id}-round)`},g);
      const viewBoxes={bjorne:'180 295 315 315',red:'1055 175 450 450',morgana:'580 195 420 420'};
      const nested=svg('svg',{x:-21,y:-21,width:42,height:42,viewBox:viewBoxes[name],preserveAspectRatio:'xMidYMid slice'},crop);
      svg('image',{width:1774,height:887,href:'assets/images/reader/kinematics/ultimi-cento-metri.webp'},nested);
      groups[name]={g,cy};
      curves[name]=svg('path',{fill:'none',stroke:colors[name],'stroke-width':3.5,'stroke-linecap':'round','stroke-linejoin':'round',...(name==='red'?{'stroke-dasharray':'8 4'}:{})},graph);
      dots[name]=svg('circle',{r:5,fill:colors[name],stroke:'var(--rm-card,#fff)','stroke-width':1.5},graph);
    });
    const tagLayer=svg('g',{'class':'ar-speed-tags'},graph);
    names.forEach(name=>{
      const g=svg('g',{'class':'ar-speed-tag'},tagLayer);
      const link=svg('path',{fill:'none',stroke:colors[name],'stroke-width':1.3,'stroke-opacity':.75},g);
      const body=svg('g',{},g);
      svg('rect',{width:142,height:24,rx:8,fill:'var(--rm-card,#fff)',stroke:colors[name],'stroke-width':1.3},body);
      const text=svg('text',{x:71,y:16.5,'text-anchor':'middle',style:'font-size:12px;font-weight:700'},body);
      tags[name]={body,link,text};
    });
    const play=board.querySelector('.ar-play'),slider=board.querySelector('input'),readout=board.querySelector('.ar-time');
    state.t=Number.isFinite(state.t)?Math.max(0,Math.min(T,state.t)):0;
    let running=false,frame=0,last=0,disposed=false;
    const number=n=>n.toLocaleString('it-IT',{minimumFractionDigits:1,maximumFractionDigits:1});
    const x=t=>52+t*500/T,y=v=>202-13*v;
    function draw(){
      const t=state.t;slider.value=t;readout.value=`t = ${number(t)} s`;
      names.forEach(name=>{
        const m=model(name,t);groups[name].g.setAttribute('transform',`translate(${46+m.s*5} ${groups[name].cy})`);
        tags[name].text.textContent=labels[name]+' · '+number(m.v)+' m/s';
        const times=name==='red'&&t>4?[0,4,t]:[0,t];
        const d=times.map((at,i)=>(i?'L':'M')+x(at).toFixed(2)+' '+y(model(name,at).v).toFixed(2)).join('');
        curves[name].setAttribute('d',d);dots[name].setAttribute('cx',x(t));dots[name].setAttribute('cy',y(m.v));
      });
      // Separa le etichette quando le velocità coincidono, mantenendo il collegamento al punto.
      const ordered=names.map(name=>({name,py:y(model(name,t).v)})).sort((a,b)=>a.py-b.py);
      let previous=-Infinity;
      ordered.forEach(item=>{item.top=Math.max(30,item.py-12,previous+29);previous=item.top;});
      const overflow=Math.max(0,ordered.at(-1).top+24-202);
      const toRight=x(t)<390,bx=toRight?x(t)+14:x(t)-156;
      ordered.forEach(({name,top,py})=>{
        top-=overflow;tags[name].body.setAttribute('transform',`translate(${bx} ${top})`);
        tags[name].link.setAttribute('d',`M${x(t)} ${py} L${toRight?bx:bx+142} ${top+12}`);
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

