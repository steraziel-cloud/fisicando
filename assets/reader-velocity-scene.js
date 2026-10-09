/* Moto lungo una traiettoria nota: s è parametrizzata per lunghezza d'arco. */
(() => {
  const legacyState = { elapsed: 0, running: false };
  let serial = 0;
  function positions(t) {
    const time = Math.max(0, Math.min(10, t));
    return { morgana: time / 10, red: time < 2.5 ? 3 * time / 10 : time < 7.5 ? 0.75 : time / 10 };
  }
  function velocities(t) { return {morgana:t>=60?0:2,red:t>=60?0:t===15||t===45?null:t<15?6:t<45?0:2}; }
  function mount(box, options = {}) {
    const instant=!!options.instant;
    const state=instant?{elapsed:0,running:true}:legacyState;
    if(instant&&state.elapsed>=10)state.elapsed=0;
    if(instant)state.running=true;
    const id = 'velocity-scene-' + (++serial);
    const board = document.createElement('div');
    board.className = 'rm-velocity-scene';
    board.innerHTML = `<style>
      .rm-velocity-scene{margin:4px 0 24px;padding:14px;border:1px solid var(--rm-border);border-radius:16px;background:var(--rm-card)}
      .rm-velocity-scene svg{display:block;width:100%;height:auto;overflow:visible}
      .rm-velocity-scene .vs-controls{display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:8px}
      .rm-velocity-scene .vs-controls button{padding:8px 14px;border-radius:10px;border:1px solid var(--rm-border);background:var(--rm-panel);color:inherit;font:inherit;cursor:pointer}
      .rm-velocity-scene .vs-phase{display:block;flex:0 1 auto;min-width:0;max-width:100%;padding:12px 16px;border-radius:12px;border:1px solid var(--rm-border);background:rgba(31,170,173,.12);font-size:17px;font-weight:600;line-height:1.4}
    </style>
    <svg viewBox="0 0 720 300" role="img" aria-label="Red e Morgana percorrono la stessa traiettoria curva: Red si ferma al chiosco e aspetta Morgana, poi proseguono insieme fino al parco.">
      <defs><clipPath id="${id}-clip"><circle r="19"/></clipPath></defs>
      <path class="vs-path" d="M65 205 C125 205 140 95 215 100 S300 225 395 200 S470 70 555 105 C589 119 610 160 652 160" fill="none" stroke="currentColor" stroke-opacity=".38" stroke-width="4"/>
      <g class="vs-arrows"></g>
      <circle cx="65" cy="205" r="5" fill="currentColor"/><text x="28" y="266" fill="currentColor" font-size="15">Origine</text>
      <line class="vs-kiosk-link" stroke="currentColor" stroke-opacity=".3" stroke-dasharray="3 4"/>
      <g class="vs-kiosk"><image x="-32" y="-60" width="64" height="64" href="assets/images/reader/velocity-kiosk-v1.png"/></g>
      <image x="590" y="27" width="145" height="130" href="assets/images/reader/velocity-park-v1.png"/>
      <g class="vs-morgana"><line class="vs-link" stroke="#a17bd7" stroke-width="1.5" stroke-dasharray="3 3"/><g class="vs-avatar"><circle r="21" fill="var(--rm-panel)" stroke="#a17bd7" stroke-width="3"/><g clip-path="url(#${id}-clip)"><svg x="-20" y="-20" width="40" height="40" viewBox="590 0 560 430" preserveAspectRatio="xMidYMid slice"><image href="assets/images/morgana-classroom/morgana-turn-01.png" width="1672" height="941"/></svg></g><text x="0" y="-28" text-anchor="middle" fill="currentColor" font-size="14">Morgana</text></g></g>
      <g class="vs-red"><line class="vs-link" stroke="#ee944e" stroke-width="1.5" stroke-dasharray="3 3"/><g class="vs-avatar"><circle r="21" fill="var(--rm-panel)" stroke="#ee944e" stroke-width="3"/><image x="-19" y="-18" width="38" height="36" href="assets/images/red-logo-head.png"/><text x="30" y="5" text-anchor="start" fill="currentColor" font-size="14">Red</text></g></g>
    </svg>
    <div class="vs-controls"><button type="button" class="vs-play">Avvia</button><button type="button" class="vs-reset">Ricomincia</button><span class="vs-phase" aria-live="polite"></span></div>
    `;
    if(instant){
      for(const name of ['morgana','red']){
        const avatar=board.querySelector('.vs-'+name+' .vs-avatar'),ns='http://www.w3.org/2000/svg';
        const rect=document.createElementNS(ns,'rect');rect.setAttribute('x','-48');rect.setAttribute('y','28');rect.setAttribute('width','96');rect.setAttribute('height','25');rect.setAttribute('rx','7');rect.setAttribute('fill','var(--rm-panel)');rect.setAttribute('stroke',name==='red'?'#ee944e':'#a17bd7');
        const label=document.createElementNS(ns,'text');label.setAttribute('x','0');label.setAttribute('y','45');label.setAttribute('text-anchor','middle');label.setAttribute('fill','currentColor');label.setAttribute('font-size','14');label.setAttribute('class','vs-speed-'+name);avatar.append(rect,label);
      }
      const graph=document.createElement('div');graph.className='vs-graph';graph.hidden=!options.graph;
      graph.innerHTML=`<svg viewBox="0 0 720 235" role="img" aria-label="Grafico della velocità in funzione del tempo: Morgana procede a 2 metri al secondo; Red a 6, poi 0, poi 2.">
      <text x="64" y="20" fill="currentColor" font-size="16">v (m/s)</text>
      <path d="M64 35 V185 H680" fill="none" stroke="currentColor" stroke-width="2"/>
      ${[0,2,4,6].map(v=>`<line x1="64" y1="${185-v*23}" x2="664" y2="${185-v*23}" stroke="currentColor" stroke-opacity=".13"/><text x="49" y="${190-v*23}" text-anchor="end" fill="currentColor" font-size="14">${v}</text>`).join('')}
      ${[0,15,30,45,60].map(t=>`<line x1="${64+t*10}" y1="185" x2="${64+t*10}" y2="191" stroke="currentColor"/><text x="${64+t*10}" y="211" text-anchor="middle" fill="currentColor" font-size="14">${t}</text>`).join('')}
      <text x="678" y="229" fill="currentColor" font-size="15">t (s)</text>
      <path class="vs-graph-morgana" fill="none" stroke="#a17bd7" stroke-width="5"/>
      <path class="vs-graph-red" fill="none" stroke="#ee944e" stroke-width="3" stroke-dasharray="8 4"/>
      <circle class="vs-dot-morgana" r="5" fill="#a17bd7"/><circle class="vs-dot-red" r="5" fill="#ee944e"/>
      <line class="vs-graph-time" y1="35" y2="185" stroke="currentColor" stroke-opacity=".4" stroke-dasharray="3 4"/>
      </svg><p style="margin:4px 0;font-size:14px"><span style="color:#a17bd7">━ Morgana</span> · <span style="color:#ee944e">┄ Red</span></p><p style="margin:6px 0;font-size:13px">Modello idealizzato: i cambi di velocità di Red sono immediati. In un moto reale richiedono un breve intervallo.</p>`;
      board.querySelector('.vs-controls').before(graph);
      board.querySelector('svg').setAttribute('viewBox','0 0 720 330');
    }
    box.append(board);
    const path = board.querySelector('.vs-path');
    const length = path.getTotalLength();
    const play = board.querySelector('.vs-play');
    const phase = board.querySelector('.vs-phase');
    let frame = 0, last = 0, disposed = false;
    function geometry(fraction) {
      const s = Math.max(0, Math.min(length, fraction * length));
      const p = path.getPointAtLength(s);
      const a = path.getPointAtLength(Math.max(0, s - .5));
      const b = path.getPointAtLength(Math.min(length, s + .5));
      const dx = b.x - a.x, dy = b.y - a.y, norm = Math.hypot(dx, dy) || 1;
      return { x: p.x, y: p.y, nx: -dy / norm, ny: dx / norm };
    }
    const kiosk = geometry(.75);
    board.querySelector('.vs-kiosk').setAttribute('transform', `translate(${kiosk.x - 42} ${kiosk.y + 4})`);
    const kioskLink = board.querySelector('.vs-kiosk-link');
    kioskLink.setAttribute('x1', kiosk.x); kioskLink.setAttribute('y1', kiosk.y);
    kioskLink.setAttribute('x2', kiosk.x - 10); kioskLink.setAttribute('y2', kiosk.y + 8);
    const ns = 'http://www.w3.org/2000/svg';
    [.2, .45, .64].forEach(f => {
      const p = geometry(f), arrow = document.createElementNS(ns, 'path');
      const angle = Math.atan2(-p.nx, p.ny) * 180 / Math.PI;
      arrow.setAttribute('d', 'M-6 -5 L0 0 L-6 5');
      arrow.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${angle})`);
      arrow.setAttribute('fill', 'none'); arrow.setAttribute('stroke', 'currentColor');
      arrow.setAttribute('stroke-width', '2.5'); arrow.setAttribute('stroke-linecap', 'round'); arrow.setAttribute('stroke-linejoin', 'round');
      board.querySelector('.vs-arrows').append(arrow);
    });
    function move(name, fraction, offset) {
      const p = geometry(fraction), g = board.querySelector('.vs-' + name);
      g.querySelector('.vs-avatar').setAttribute('transform', `translate(${p.x + p.nx * offset} ${p.y + p.ny * offset})`);
      const link = g.querySelector('.vs-link');
      link.setAttribute('x1', p.x); link.setAttribute('y1', p.y);
      link.setAttribute('x2', p.x + p.nx * offset); link.setAttribute('y2', p.y + p.ny * offset);
    }
    function draw() {
      const p = positions(state.elapsed);
      move('morgana', p.morgana, -28); move('red', p.red, 28);
      const text = state.elapsed >= 10 ? 'Arrivati al parco' : state.elapsed >= 7.5 ? 'Proseguono insieme' : state.elapsed >= 2.5 ? 'Red aspetta al chiosco' : 'Red pedala, Morgana cammina';
      if (phase.textContent !== text) phase.textContent = text;
      if(instant){
        const t=state.elapsed*6,v=velocities(t);
        for(const name of ['morgana','red'])board.querySelector('.vs-speed-'+name).textContent=v[name]===null?'cambio di moto':v[name]+' m/s';
        phase.textContent='t = '+t.toLocaleString('it-IT',{minimumFractionDigits:1,maximumFractionDigits:1})+' s · '+text;
        const x=t=>64+t*10,y=v=>185-v*23;
        board.querySelector('.vs-graph-morgana').setAttribute('d',`M64 ${y(2)} H${x(t)}`);
        const segments=[[0,15,6],[15,45,0],[45,60,2]];
        board.querySelector('.vs-graph-red').setAttribute('d',segments.filter(([a])=>t>=a).map(([a,b,v])=>`M${x(a)} ${y(v)} H${x(Math.min(b,t))}`).join(' '));
        for(const name of ['morgana','red']){const dot=board.querySelector('.vs-dot-'+name);dot.setAttribute('cx',x(t));dot.setAttribute('cy',y(t>=60?2:v[name]??0));dot.style.display=v[name]===null?'none':t>=60?'none':'';}
        const guide=board.querySelector('.vs-graph-time');guide.setAttribute('x1',x(t));guide.setAttribute('x2',x(t));
      }
      play.textContent = state.running ? 'Pausa' : state.elapsed >= 10 ? 'Rivedi' : 'Avvia';
    }
    function tick(now) {
      if (disposed || !state.running) return;
      if (last) state.elapsed = Math.min(10, state.elapsed + (now - last) / 1000);
      last = now;
      if (state.elapsed >= 10) state.running = false;
      draw();
      if (state.running) frame = requestAnimationFrame(tick);
    }
    play.addEventListener('click', () => {
      cancelAnimationFrame(frame); last = 0;
      if (state.elapsed >= 10) state.elapsed = 0;
      state.running = !state.running; draw();
      if (state.running) frame = requestAnimationFrame(tick);
    });
    board.querySelector('.vs-reset').addEventListener('click', () => {
      cancelAnimationFrame(frame); state.elapsed = 0; state.running = false; last = 0; draw();
    });
    draw();
    if (state.running) frame = requestAnimationFrame(tick);
    return () => { disposed = true; cancelAnimationFrame(frame); };
  }
  window.GatitoVelocityScene = { mount, positions, velocities };
})();
