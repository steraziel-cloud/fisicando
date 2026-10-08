/* Moto lungo una traiettoria nota: s è parametrizzata per lunghezza d'arco. */
(() => {
  const state = { elapsed: 0, running: false };
  let serial = 0;
  function positions(t) {
    const time = Math.max(0, Math.min(10, t));
    return { morgana: time / 10, red: time < 2.5 ? 3 * time / 10 : time < 7.5 ? 0.75 : time / 10 };
  }
  function mount(box) {
    const id = 'velocity-scene-' + (++serial);
    const board = document.createElement('div');
    board.className = 'rm-velocity-scene';
    board.innerHTML = `<style>
      .rm-velocity-scene{margin:4px 0 24px;padding:14px;border:1px solid var(--rm-border);border-radius:16px;background:var(--rm-card)}
      .rm-velocity-scene svg{display:block;width:100%;height:auto;overflow:visible}
      .rm-velocity-scene .vs-controls{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:8px}
      .rm-velocity-scene .vs-controls button{padding:8px 14px;border-radius:10px;border:1px solid var(--rm-border);background:var(--rm-panel);color:inherit;font:inherit;cursor:pointer}
      .rm-velocity-scene .vs-phase{display:block;flex:1;min-width:190px;padding:12px 16px;border-radius:12px;border:1px solid var(--rm-border);background:rgba(31,170,173,.12);font-size:17px;font-weight:600;line-height:1.4}
    </style>
    <svg viewBox="0 0 720 300" role="img" aria-label="Red e Morgana percorrono la stessa traiettoria curva: Red si ferma al chiosco e aspetta Morgana, poi proseguono insieme fino al parco.">
      <defs><clipPath id="${id}-clip"><circle r="19"/></clipPath><marker id="${id}-arrow" markerWidth="5" markerHeight="5" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="currentColor"/></marker></defs>
      <path class="vs-path" d="M65 205 C125 205 140 95 215 100 S300 225 395 200 S470 70 555 105 S610 170 652 160" fill="none" stroke="currentColor" stroke-opacity=".38" stroke-width="4"/>
      <g class="vs-arrows"></g>
      <circle cx="65" cy="205" r="5" fill="currentColor"/><text x="28" y="266" fill="currentColor" font-size="15">Origine</text>
      <line class="vs-kiosk-link" stroke="currentColor" stroke-opacity=".3" stroke-dasharray="3 4"/>
      <g class="vs-kiosk"><image x="-48" y="-88" width="96" height="96" href="assets/images/reader/velocity-kiosk-v1.png"/></g>
      <image x="603" y="6" width="110" height="96" href="assets/images/reader/velocity-park-v1.png"/>
      <g class="vs-morgana"><line class="vs-link" stroke="#a17bd7" stroke-width="1.5" stroke-dasharray="3 3"/><g class="vs-avatar"><circle r="21" fill="var(--rm-panel)" stroke="#a17bd7" stroke-width="3"/><g clip-path="url(#${id}-clip)"><svg x="-20" y="-20" width="40" height="40" viewBox="590 0 560 430" preserveAspectRatio="xMidYMid slice"><image href="assets/images/morgana-classroom/morgana-turn-01.png" width="1672" height="941"/></svg></g><text x="0" y="-28" text-anchor="middle" fill="currentColor" font-size="14">Morgana</text></g></g>
      <g class="vs-red"><line class="vs-link" stroke="#ee944e" stroke-width="1.5" stroke-dasharray="3 3"/><g class="vs-avatar"><circle r="21" fill="var(--rm-panel)" stroke="#ee944e" stroke-width="3"/><image x="-19" y="-18" width="38" height="36" href="assets/images/red-logo-head.png"/><text x="30" y="5" text-anchor="start" fill="currentColor" font-size="14">Red</text></g></g>
    </svg>
    <div class="vs-controls"><button type="button" class="vs-play">Avvia</button><button type="button" class="vs-reset">Ricomincia</button><span class="vs-phase" aria-live="polite"></span></div>
    `;
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
    board.querySelector('.vs-kiosk').setAttribute('transform', `translate(${kiosk.x - 65} ${Math.max(88, kiosk.y - 35)})`);
    const kioskLink = board.querySelector('.vs-kiosk-link');
    kioskLink.setAttribute('x1', kiosk.x); kioskLink.setAttribute('y1', kiosk.y);
    kioskLink.setAttribute('x2', kiosk.x - 65); kioskLink.setAttribute('y2', Math.max(88, kiosk.y - 35));
    const ns = 'http://www.w3.org/2000/svg';
    [.2, .45, .64].forEach(f => {
      const arrow = document.createElementNS(ns, 'path');
      const points = Array.from({length: 9}, (_, i) => geometry(f - .018 + .036 * i / 8));
      arrow.setAttribute('d', points.map((p, i) => (i ? 'L' : 'M') + p.x + ' ' + p.y).join(' '));
      arrow.setAttribute('fill', 'none'); arrow.setAttribute('stroke', 'currentColor'); arrow.setAttribute('stroke-width', '2.5');
      arrow.setAttribute('marker-end', `url(#${id}-arrow)`); board.querySelector('.vs-arrows').append(arrow);
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
  window.GatitoVelocityScene = { mount, positions };
})();
