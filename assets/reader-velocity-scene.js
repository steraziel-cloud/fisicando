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
      .rm-velocity-scene .vs-time{font-variant-numeric:tabular-nums}
      .rm-velocity-scene .vs-note{font-size:13px;line-height:1.45;margin:10px 0 0;opacity:.8}
    </style>
    <svg viewBox="0 0 720 300" role="img" aria-label="Red e Morgana percorrono la stessa traiettoria curva: Red si ferma al chiosco e aspetta Morgana, poi proseguono insieme fino al parco.">
      <defs><clipPath id="${id}-clip"><circle r="19"/></clipPath><marker id="${id}-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8" fill="currentColor"/></marker></defs>
      <path class="vs-path" d="M65 205 C125 205 140 95 215 100 S300 225 395 200 S470 70 555 105 S610 170 652 160" fill="none" stroke="currentColor" stroke-opacity=".38" stroke-width="4"/>
      <text x="35" y="270" fill="currentColor" font-size="16">Partenza · s = 0</text>
      <path d="M78 248 L130 248" stroke="currentColor" stroke-width="2" marker-end="url(#${id}-arrow)"/><text x="140" y="253" fill="currentColor" font-size="13">verso positivo</text>
      <g class="vs-kiosk"><path d="M-22 -12 H22 V16 H-22 Z" fill="#c49052" stroke="#805c35"/><path d="M-28 -12 L-18 -29 H18 L28 -12 Z" fill="#36aaa6" stroke="#267c79"/><path d="M-14 -4 H14 V8 H-14 Z" fill="#fff1cf"/><text y="-39" text-anchor="middle" fill="currentColor" font-size="15">Chiosco · ¾ del percorso</text></g>
      <g transform="translate(655 130)"><path d="M-15 0 V-28 M13 0 V-22" stroke="#866145" stroke-width="5"/><circle cx="-15" cy="-33" r="15" fill="#65a86c"/><circle cx="13" cy="-26" r="13" fill="#87bb71"/><text y="-55" text-anchor="middle" fill="currentColor" font-size="16">Parco</text></g>
      <g class="vs-morgana"><line class="vs-link" stroke="#a17bd7" stroke-width="1.5" stroke-dasharray="3 3"/><g class="vs-avatar"><circle r="21" fill="var(--rm-panel)" stroke="#a17bd7" stroke-width="3"/><g clip-path="url(#${id}-clip)"><svg x="-20" y="-20" width="40" height="40" viewBox="590 0 560 430" preserveAspectRatio="xMidYMid slice"><image href="assets/images/morgana-classroom/morgana-turn-01.png" width="1672" height="941"/></svg></g><text x="0" y="-28" text-anchor="middle" fill="currentColor" font-size="14">Morgana</text></g></g>
      <g class="vs-red"><line class="vs-link" stroke="#ee944e" stroke-width="1.5" stroke-dasharray="3 3"/><g class="vs-avatar"><circle r="21" fill="var(--rm-panel)" stroke="#ee944e" stroke-width="3"/><image x="-19" y="-18" width="38" height="36" href="assets/images/red-logo-head.png"/><text x="30" y="5" text-anchor="start" fill="currentColor" font-size="14">Red</text></g></g>
    </svg>
    <div class="vs-controls"><button type="button" class="vs-play">Avvia</button><button type="button" class="vs-reset">Ricomincia</button><output class="vs-time" aria-label="Tempo dell’animazione"></output><span class="vs-phase" aria-live="polite"></span></div>
    <p class="vs-note">Le icone sono separate per leggibilità: i tratteggi le collegano alla posizione sulla traiettoria. Quando proseguono insieme, hanno la stessa coordinata s.</p>`;
    box.append(board);
    const path = board.querySelector('.vs-path');
    const length = path.getTotalLength();
    const play = board.querySelector('.vs-play');
    const output = board.querySelector('.vs-time');
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
    board.querySelector('.vs-kiosk').setAttribute('transform', `translate(${kiosk.x + kiosk.nx * -58} ${kiosk.y + kiosk.ny * -58})`);
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
      output.textContent = state.elapsed.toFixed(1).replace('.', ',') + ' s / 10,0 s';
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
