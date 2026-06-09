// assets/esercizi.js
// 25 esercizi di cinematica (livello intermedio) con LaTeX e soluzioni.
// Richiede che esercizi.html includa MathJax v3 e contenga <section id="exercise-list"></section>

const esercizi = [
  // --- MRU e MRUA ---
  {
    q: "Un’auto viaggia di moto rettilineo uniforme a velocità costante di 20 m/s. Calcola la distanza percorsa in 2 minuti.",
    a: "s = v·t = 20·120 = 2400 m"
  },
  {
    q: "Un punto parte da fermo e percorre un tratto rettilineo con accelerazione costante a = 2 m/s². Calcola lo spazio percorso nei primi 5 s.",
    a: "s = (1/2)·a·t² = 0.5·2·25 = 25 m"
  },
  {
    q: "Un corpo si muove lungo una retta con legge oraria s(t) = 5 + 10t − t² (in metri). Determina velocità e accelerazione istantanea al tempo t = 2 s.",
    a: "v(t) = ds/dt = 10 − 2t → v(2) = 6 m/s. a = d²s/dt² = −2 m/s²"
  },
  {
    q: "Un treno viaggia a 90 km/h e frena con accelerazione costante di −1,5 m/s². Calcola la distanza necessaria per fermarsi.",
    a: "v₀ = 25 m/s, v² = v₀² + 2aΔs → 0 = 25² + 2(−1.5)Δs → Δs = 625/3 ≈ 208 m"
  },
  {
    q: "Un corpo si muove con accelerazione costante. In 2 s percorre 20 m, nei successivi 2 s percorre 60 m. Trova accelerazione e velocità iniziale.",
    a: "Sistema: s₄ − s₂ = 60, s₂ = 20. Risolvendo: a = 5 m/s², v₀ = 0"
  },
  {
    q: "Un punto si muove con legge oraria s(t) = 2t³ (m). Calcola velocità e accelerazione a t = 2 s.",
    a: "v = 6t² → v(2) = 24 m/s. a = 12t → a(2) = 24 m/s²"
  },
  {
    q: "Un’auto percorre i primi 100 m in 10 s da ferma con accelerazione costante. Determina accelerazione e velocità al termine.",
    a: "s = (1/2)at² → a = 2·100/100 = 2 m/s². v = a·t = 20 m/s"
  },
  {
    q: "Un ciclista si muove a velocità costante di 10 m/s. Dopo quanti secondi percorre 5 km?",
    a: "t = s/v = 5000/10 = 500 s"
  },

  // --- Lanci verticali e cadute ---
  {
    q: "Un corpo viene lasciato cadere da fermo da un’altezza di 45 m. Calcola il tempo di caduta.",
    a: "s = (1/2)gt² → t = √(2·45/9.8) ≈ 3,03 s"
  },
  {
    q: "Un proiettile viene lanciato verticalmente verso l’alto con velocità iniziale di 20 m/s. Calcola l’altezza massima raggiunta.",
    a: "v² = v₀² − 2gh → h = v₀²/(2g) = 400/19.6 ≈ 20,4 m"
  },
  {
    q: "Un corpo lanciato verso l’alto con velocità 30 m/s torna al punto di partenza. Calcola il tempo totale di volo.",
    a: "T = 2v₀/g = 60/9.8 ≈ 6,12 s"
  },
  {
    q: "Un sasso viene lanciato verticalmente verso il basso con velocità iniziale 5 m/s da un’altezza di 20 m. Calcola il tempo d’impatto.",
    a: "y = y₀ + v₀t − (1/2)gt² = 0. Risolvendo: t ≈ 1,7 s"
  },
  {
    q: "Un corpo viene lanciato verticalmente verso l’alto e raggiunge il suolo dopo 4 s. Determina la velocità iniziale.",
    a: "T = 2v₀/g → v₀ = gT/2 = 9.8·2 = 19,6 m/s"
  },
  {
    q: "Un ascensore in caduta libera scende per 2 s. Calcola la distanza percorsa.",
    a: "s = (1/2)gt² = 0.5·9.8·4 = 19,6 m"
  },
  {
    q: "Un corpo viene lanciato verticalmente verso l’alto con v₀ = 15 m/s. Determina la velocità dopo 1,5 s.",
    a: "v = v₀ − g t = 15 − 9.8·1.5 ≈ 0,3 m/s"
  },
  {
    q: "Un pallone lanciato verticalmente verso l’alto raggiunge un’altezza massima di 10 m. Trova la velocità iniziale.",
    a: "v₀ = √(2gh) = √(2·9.8·10) ≈ 14 m/s"
  },

  // --- Moto parabolico ---
  {
    q: "Un proiettile viene sparato con velocità 20 m/s formando un angolo di 30°. Calcola la gittata.",
    a: "R = v₀² sin(2θ)/g = 400·sin60°/9.8 ≈ 35,3 m"
  },
  {
    q: "Calcola il tempo di volo di un corpo lanciato con velocità 15 m/s e angolo di 45°.",
    a: "T = 2v₀ sinθ / g = 2·15·0.707/9.8 ≈ 2,16 s"
  },
  {
    q: "Un corpo viene lanciato con velocità iniziale 25 m/s ad angolo di 60°. Calcola l’altezza massima.",
    a: "h = (v₀² sin²θ)/(2g) = 625·0.75/(19.6) ≈ 23,9 m"
  },
  {
    q: "Un proiettile viene lanciato da terra con v₀ = 40 m/s e θ = 45°. Determina gittata e tempo di volo.",
    a: "T = 2v₀ sinθ/g = 5,77 s. R = v₀² sin(2θ)/g = 163 m"
  },
  {
    q: "Un corpo lanciato a 30° con v₀ = 10 m/s. Determina le equazioni parametriche x(t), y(t).",
    a: "x(t) = v₀ cos30°·t = 8.66t. y(t) = v₀ sin30°·t − 0.5gt² = 5t − 4.9t²"
  },
  {
    q: "Un proiettile viene sparato a 20 m/s con angolo 60°. Determina la velocità al tempo t = 1 s.",
    a: "vx = v₀ cos60° = 10 m/s. vy = v₀ sin60° − g·1 = 17.3 − 9.8 = 7.5 m/s. v = √(10² + 7.5²) ≈ 12,5 m/s"
  },
  {
    q: "Un corpo viene lanciato con velocità 18 m/s a 30°. Calcola tempo di salita.",
    a: "t_up = v₀ sinθ / g = 9 / 9.8 ≈ 0,92 s"
  },
  {
    q: "Un corpo viene lanciato con angolo θ e velocità v₀. Mostra che la traiettoria è una parabola eliminando il tempo.",
    a: "x = v₀ cosθ·t, y = v₀ sinθ·t − 0.5gt² → y = (tanθ)x − (g/2v₀² cos²θ) x²"
  },

  // --- Moto circolare ---
  {
    q: "Un punto percorre una circonferenza di raggio 2 m in 4 s. Calcola la velocità angolare.",
    a: "T = 4 s → ω = 2π/T = 1.57 rad/s"
  },
  {
    q: "Un corpo si muove su una circonferenza di raggio 1 m con velocità angolare costante ω = 2 rad/s. Trova la velocità tangenziale.",
    a: "v = Rω = 1·2 = 2 m/s"
  },
  {
    q: "Un corpo percorre una circonferenza di raggio 0.5 m con v = 3 m/s. Determina accelerazione centripeta.",
    a: "a_n = v²/R = 9/0.5 = 18 m/s²"
  },
  {
    q: "Un punto in moto circolare uniforme completa 30 giri al minuto. Determina ω.",
    a: "f = 30/60 = 0.5 Hz → ω = 2πf = 3.14 rad/s"
  },
  {
    q: "Un corpo ruota con accelerazione angolare costante α = 0.5 rad/s². Dopo 4 s parte da ω₀ = 2 rad/s. Trova ω(t).",
    a: "ω = ω₀ + αt = 2 + 0.5·4 = 4 rad/s"
  },
  {
    q: "Un punto parte da fermo e compie moto circolare uniformemente accelerato con α = 1 rad/s². Determina l’angolo percorso in 5 s.",
    a: "θ = 0.5 αt² = 0.5·1·25 = 12.5 rad"
  },
  {
    q: "Un corpo percorre un arco di 2 m su una circonferenza di raggio 0.4 m. Determina l’angolo percorso.",
    a: "θ = s/R = 2/0.4 = 5 rad"
  },
  {
    q: "Un corpo in moto circolare ha v = 4 m/s, R = 2 m. Determina ω.",
    a: "ω = v/R = 4/2 = 2 rad/s"
  },

  // --- Moto armonico ---
  {
    q: "Un oscillatore ha legge oraria x(t) = 0.1 cos(10t). Determina periodo e frequenza.",
    a: "ω = 10 rad/s, T = 2π/ω ≈ 0.628 s, f = 1.59 Hz"
  },
  {
    q: "Un oscillatore armonico ha ampiezza 5 cm e periodo 2 s. Determina pulsazione e frequenza.",
    a: "T = 2 s → ω = 2π/T = 3.14 rad/s, f = 0.5 Hz"
  },
  {
    q: "Un moto armonico ha x(t) = 0.2 cos(5t + π/6). Calcola velocità al tempo t = 0.",
    a: "v = −Aω sin(φ) = −0.2·5·sin(π/6) = −0.5 m/s"
  },
  {
    q: "Un oscillatore ha legge oraria x(t) = 0.1 cos(2t). Calcola accelerazione massima.",
    a: "a_max = Aω² = 0.1·4 = 0.4 m/s²"
  },
  {
    q: "Un pendolo ideale ha lunghezza 1 m. Calcola il periodo.",
    a: "T = 2π√(l/g) = 2π√(1/9.8) ≈ 2.01 s"
  },
  {
    q: "Un oscillatore ha energia totale 2 J e ampiezza 0.1 m. Calcola la costante elastica k.",
    a: "E = (1/2)kA² → k = 2·E/A² = 400 N/m"
  },
  {
    q: "Un oscillatore ha x(t) = 0.05 cos(20t). Calcola la velocità massima.",
    a: "v_max = Aω = 0.05·20 = 1 m/s"
  },
  {
    q: "Un oscillatore ha periodo T = 0.5 s. Determina la pulsazione ω.",
    a: "ω = 2π/T = 2π/0.5 = 12.57 rad/s"
  }
];


// Monta la lista in pagina
window.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("exercise-list");
  if (!box) return;
  esercizi.forEach((ex, i) => {
    const div = document.createElement("div");
    div.className = "lab-card";
    div.innerHTML = `
      <p><b>Esercizio ${i+1}.</b> ${ex.q}</p>
      <button id="btn_${i}">Mostra soluzione</button>
      <div id="sol_${i}" class="solution" style="display:none; margin-top:6px;">
        <p><i>Soluzione:</i></p>
        <p>${ex.a}</p>
      </div>
    `;
    box.appendChild(div);
    const btn = document.getElementById(`btn_${i}`);
    const sol = document.getElementById(`sol_${i}`);
    btn.onclick = () => {
      sol.style.display = sol.style.display === "none" ? "block" : "none";
      if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([sol]);
    };
  });
});
