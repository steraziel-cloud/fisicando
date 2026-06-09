// assets/esercizi.js
// 25 esercizi di Algebra Vettoriale (livello intermedio) con LaTeX e soluzioni.
// Richiede che esercizi.html includa MathJax v3 e contenga <section id="exercise-list"></section>

const esercizi = [
  // 1
  {
    q: "Calcola il modulo e il versore del vettore \\(\\vec v=(8,-6)\\).",
    a: "\\(|\\vec v|=\\sqrt{8^2+(-6)^2}=10\\). \\(\\hat v=\\tfrac{1}{10}(8,-6)=(0{,}8,-0{,}6)\\)."
  },
  // 2
  {
    q: "Converti in coordinate polari il vettore \\(\\vec v=(-5,5)\\), indicando modulo e angolo corretti nel quadrante giusto.",
    a: "\\(|\\vec v|=\\sqrt{(-5)^2+5^2}=5\\sqrt2\\). \\(\\theta=\\operatorname{atan2}(5,-5)=135^\\circ\\)."
  },
  // 3
  {
    q: "Calcola la somma e la differenza dei vettori \\(\\vec a=(4,2)\\) e \\(\\vec b=(-1,3)\\). Esegui a mano le costruzioni grafiche (parallelogramma e sottrazione).",
    a: "\\(\\vec a+\\vec b=(3,5)\\). \\(\\vec a-\\vec b=(5,-1)\\)."
  },
  // 4
  {
    q: "Due vettori hanno moduli \\(6\\) e \\(8\\) e formano un angolo di \\(60^\\circ\\). Calcola il modulo della somma (usa Carnot).",
    a: "\\(|\\vec r|=\\sqrt{6^2+8^2+2\\cdot6\\cdot8\\cos60^\\circ}=\\sqrt{36+64+48}=\\sqrt{148}\\approx12{,}17\\)."
  },
  // 5
  {
    q: "Trova \\(k\\) affinché \\(\\vec a=(2,k)\\) e \\(\\vec b=(k,1)\\) siano ortogonali. Rappresenta graficamente la condizione.",
    a: "Ortogonalità: \\(\\vec a\\cdot\\vec b=2k+k\\cdot1=3k=0\\Rightarrow k=0\\)."
  },
  // 6
  {
    q: "Calcola \\(\\vec a\\cdot\\vec b\\) tra \\(\\vec a=(3,4)\\) e \\(\\vec b=(-2,5)\\). Determina l’angolo \\(\\theta\\) e verifica \\(\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\theta\\).",
    a: "Dot=\\(3\\cdot(-2)+4\\cdot5=14\\). \\(|\\vec a|=5\\), \\(|\\vec b|=\\sqrt{29}\\). \\(\\cos\\theta=14/(5\\sqrt{29})\\Rightarrow \\theta\\approx 57{,}1^\\circ\\)."
  },
  // 7
  {
    q: "Un vettore ha modulo \\(10\\) ed è inclinato di \\(30^\\circ\\) rispetto all’asse \\(x\\). Determina le componenti cartesiane.",
    a: "\\((x,y)=(10\\cos30^\\circ,\\,10\\sin30^\\circ)=(5\\sqrt3,\\,5)\\approx(8{,}66,\\,5)\\)."
  },
  // 8
  {
    q: "Trova l’area del triangolo determinato dai vettori \\((3,0)\\) e \\((0,4)\\) applicati nello stesso punto.",
    a: "Area = \\(\\tfrac12\\,| (3,0)\\times(0,4) |=\\tfrac12\\cdot12=6\\)."
  },
  // 9
  {
    q: "Dati \\(\\vec a=(2,3)\\), \\(\\vec b=(-1,4)\\), \\(\\vec c=(3,-2)\\): calcola \\(\\vec r=\\vec a+\\vec b-\\vec c\\) e il suo modulo. (Esegui la costruzione poligonale a mano.)",
    a: "\\(\\vec r=(2-1-3,\\,3+4-(-2))=(-2,9)\\). \\(|\\vec r|=\\sqrt{4+81}=\\sqrt{85}\\approx9{,}22\\)."
  },
  // 10
  {
    q: "Determina la proiezione di \\(\\vec b=(5,1)\\) sulla direzione di \\(\\vec a=(3,4)\\): calcola proiezione scalare e vettoriale; rappresenta graficamente.",
    a: "Versore \\(\\hat a=(3/5,4/5)\\). Proiezione scalare: \\(\\vec b\\cdot\\hat a=\\tfrac{19}{5}=3{,}8\\). Proiezione vettoriale: \\(3{,}8\\,\\hat a=(2{,}28,3{,}04)\\)."
  },
  // 11
  {
    q: "Somma in polari: \\(\\vec v_1=(6,30^\\circ)\\), \\(\\vec v_2=(4,210^\\circ)\\). Calcola \\(\\vec v=\\vec v_1+\\vec v_2\\) in componenti e ricava modulo e angolo di \\(\\vec v\\).",
    a: " \\(\\vec v_1\\approx(5{,}196,3)\\), \\(\\vec v_2\\approx(-3{,}464,-2)\\). Somma \\(\\vec v\\approx(1{,}732,1)\\). \\(|\\vec v|\\approx\\sqrt{1{,}732^2+1^2}\\approx1{,}999\\approx2\\). \\(\\theta\\approx\\operatorname{atan2}(1,1{,}732)\\approx30^\\circ\\)."
  },
  // 12
  {
    q: "Siano \\(\\vec a=(4,-1)\\), \\(\\vec b=(1,3)\\), \\(\\vec c=(2,2)\\). Trova \\(k\\in\\mathbb{R}\\) tale che \\(\\vec r=\\vec a+k\\,\\vec b\\) sia ortogonale a \\(\\vec c\\).",
    a: "Serve \\(\\vec r\\cdot\\vec c=0\\). \\((4+k,-1+3k)\\cdot(2,2)=2(4+k)+2(-1+3k)=6+8k=0\\Rightarrow k=-\\tfrac{3}{4}.\\)"
  },
  // 13
  {
    q: "Dati \\(\\vec a=(-2,5)\\), \\(\\vec b=(3,-1)\\), calcola \\(\\vec r=2\\vec a-\\vec b\\). Richiedi la costruzione grafica della combinazione lineare.",
    a: "\\(\\vec r=2(-2,5)-(3,-1)=(-4,10)-(3,-1)=(-7,11)\\)."
  },
  // 14
  {
    q: "Dato \\(\\vec v=(-3,4)\\): (1) trova il versore \\(\\hat v\\); (2) scomponi \\(\\vec b=(5,2)\\) in parte parallela e ortogonale a \\(\\vec v\\); (3) rappresenta graficamente.",
    a: "\\(|\\vec v|=5\\Rightarrow\\hat v=(-3/5,4/5)\\). Proiezione scalare: \\(\\vec b\\cdot\\hat v=\\tfrac{-15+8}{5}=-\\tfrac{7}{5}\\). Proiezione vettoriale: \\(-\\tfrac{7}{5}\\,\\hat v=(\\tfrac{21}{25}, -\\tfrac{28}{25})\\). Parte ortogonale: \\(\\vec b-\\operatorname{proj}=(5-\\tfrac{21}{25},\\,2+\\tfrac{28}{25})=(\\tfrac{104}{25},\\tfrac{78}{25})\\)."
  },
  // 15 (dimostrazione completa)
  {
    q: "Mostra che per due vettori non nulli \\(\\vec a,\\vec b\\) vale l’equivalenza \\(\\vec a\\cdot\\vec b=0\\iff \\vec a\\perp\\vec b\\). Fornisci sia una dimostrazione geometrica (proiezione) sia una algebrica.",
    a:
`\\(\\Rightarrow\\) Geometrica: il prodotto scalare misura \\(|\\vec a|\\cdot|\\mathrm{proj}_{\\vec a}(\\vec b)|\\). Se \\(\\vec a\\cdot\\vec b=0\\) con \\(|\\vec a|>0\\), allora la proiezione di \\(\\vec b\\) su \\(\\vec a\\) ha modulo nullo: \\(\\mathrm{proj}_{\\vec a}(\\vec b)=\\vec 0\\). Quindi \\(\\vec b\\) è ortogonale a \\(\\vec a\\). \\\\
\\(\\Leftarrow\\) Se \\(\\vec a\\perp\\vec b\\), l’angolo \\(\\theta=90^\\circ\\Rightarrow\\cos\\theta=0\\). Dalla definizione: \\(\\vec a\\cdot\\vec b=|\\vec a|\\,|\\vec b|\\cos\\theta=0\\). \\\\
Algebrica: per \\(\\vec a=(a_1,a_2),\\vec b=(b_1,b_2)\\), \\(\\vec a\\cdot\\vec b=a_1b_1+a_2b_2=|\\vec a|\\,|\\vec b|\\cos\\theta\\). \\(=0\\) \\(\\iff\\) \\(\\cos\\theta=0\\) (con vettori non nulli) \\(\\iff\\theta=90^\\circ\\) \\(\\iff\\vec a\\perp\\vec b\\).`
  },
  // 16
  {
    q: "Dati \\(\\vec a=(1,2,-1)\\), \\(\\vec b=(3,0,4)\\): (1) calcola \\(\\vec a\\times\\vec b\\); (2) verifica \\((\\vec a\\times\\vec b)\\cdot\\vec a=(\\vec a\\times\\vec b)\\cdot\\vec b=0\\); (3) area del parallelogramma e del triangolo.",
    a: "\\(\\vec a\\times\\vec b=(2\\cdot4-(-1)\\cdot0,\\;-(1\\cdot4-(-1)\\cdot3),\\;1\\cdot0-2\\cdot3)=(8,-(4+3),-6)=(8,-7,-6)\\). Prodotti scalari con \\(\\vec a,\\vec b\\) nulli. Area parallelogramma=\\(|\\vec a\\times\\vec b|=\\sqrt{64+49+36}=\\sqrt{149}\\). Triangolo=\\(\\tfrac12\\sqrt{149}\\)."
  },
  // 17
  {
    q: "Siano \\(\\vec v=(10,30^\\circ)\\) e \\(\\vec w=(-2,5)\\). Calcola \\(\\vec r=\\vec v+\\vec w\\) e \\(\\vec s=\\vec v-\\vec w\\) (moduli e angoli di \\(\\vec r,\\vec s\\)).",
    a: "\\(\\vec v\\approx(8{,}66,5)\\). Quindi \\(\\vec r\\approx(6{,}66,10)\\Rightarrow |\\vec r|\\approx\\sqrt{6{,}66^2+10^2}\\approx12{,}06\\), \\(\\theta_r\\approx\\operatorname{atan2}(10,6{,}66)\\approx56{,}0^\\circ\\). \\(\\vec s\\approx(10{,}66,0)\\Rightarrow |\\vec s|\\approx10{,}66\\), angolo \\(\\approx0^\\circ\\)."
  },
  // 18
  {
    q: "Tre vettori con polari \\(\\vec v_1=(10,20^\\circ)\\), \\(\\vec v_2=(k,160^\\circ)\\), \\(\\vec v_3=(8,-90^\\circ)\\) hanno risultante nulla. Determina \\(k\\).",
    a: "Componenti: \\(\\vec v_1\\approx(9{,}40,3{,}42)\\), \\(\\vec v_3=(0,-8)\\). Equazioni: \\(x\\): \\(9{,}40+k\\cos160^\\circ=0\\Rightarrow k=\\frac{-9{,}40}{\\cos160^\\circ}\\approx\\frac{-9{,}40}{-0{,}9397}\\approx10{,}01\\). \\(y\\): \\(3{,}42+k\\sin160^\\circ-8=0\\) verifica (con \\(\\sin160^\\circ\\approx0{,}342\\)): \\(3{,}42+10{,}01\\cdot0{,}342-8\\approx0\\)."
  },
  // 19 (leva numerico su asse y)
  {
    q: "Siano \\(A=(0,2)\\), \\(B=(0,10)\\). In \\(A\\) è applicato \\(\\vec v_1=(6,0)\\), in \\(B\\) \\(\\vec v_2=(-9,0)\\). Trova \\(O=(0,y)\\) sul segmento \\(AB\\) tale che \\((\\overrightarrow{OA}\\times\\vec v_1)_z=(\\overrightarrow{OB}\\times\\vec v_2)_z\\).",
    a: "Con \\(O=(0,y)\\): \\(\\overrightarrow{OA}=(0,2-y)\\), \\(\\overrightarrow{OB}=(0,10-y)\\). In 2D: \\((x,y)\\times(X,Y)=xY-yX\\). Quindi \\((\\overrightarrow{OA}\\times\\vec v_1)_z=-(2-y)\\cdot6\\), \\((\\overrightarrow{OB}\\times\\vec v_2)_z=-(10-y)(-9)=9(10-y)\\). Uguagliando: \\(-6(2-y)=9(10-y)\\Rightarrow -12+6y=90-9y\\Rightarrow 15y=102\\Rightarrow y=\\tfrac{102}{15}=6{,}8\\)."
  },
  // 20 (leva: incognita intensità)
  {
    q: "Siano \\(A=(0,3)\\), \\(B=(0,11)\\). In \\(A\\): \\(\\vec v_1=(8,0)\\); in \\(B\\): \\(\\vec v_2=(-G,0)\\). Preso \\(O=(0,5)\\), determina \\(G\\) tale che \\((\\overrightarrow{OA}\\times\\vec v_1)_z=(\\overrightarrow{OB}\\times\\vec v_2)_z\\).",
    a: "\\(\\overrightarrow{OA}=(0,3-5)=(0,-2)\\Rightarrow (\\cdot\\times\\vec v_1)_z=-(-2)\\cdot8=16\\). \\(\\overrightarrow{OB}=(0,11-5)=(0,6)\\Rightarrow (\\cdot\\times\\vec v_2)_z=-(6)(-G)=6G\\). Uguaglianza: \\(16=6G\\Rightarrow G=\\tfrac{8}{3}\\approx2{,}67\\)."
  },
  // 21 (leva: A,B generici nel piano, O su AB)
  {
    q: "Siano \\(A=(1,2)\\), \\(B=(7,5)\\). In \\(A\\) è applicato \\(\\vec v_1=(6,0)\\), in \\(B\\) \\(\\vec v_2=(-9,0)\\). Determina \\(O\\) **sulla congiungente** \\(AB\\) tale che \\((\\overrightarrow{OA}\\times\\vec v_1)_z=(\\overrightarrow{OB}\\times\\vec v_2)_z\\).",
    a: "Parametrizza \\(O=A+s\\,\\overrightarrow{AB}=(1+6s,2+3s)\\). Allora \\(\\overrightarrow{OA}=(-6s,-3s)\\Rightarrow (\\cdot\\times\\vec v_1)_z=18s\\). \\(\\overrightarrow{OB}=(6-6s,3-3s)\\Rightarrow (\\cdot\\times\\vec v_2)_z=27-27s\\). Uguagliando: \\(18s=27-27s\\Rightarrow s=\\tfrac35\\). Quindi \\(O=(4{,}6,3{,}8)=(\\tfrac{23}{5},\\tfrac{19}{5})\\)."
  },
  // 22
  {
    q: "Siano \\(\\vec a=(2,-1)\\), \\(\\vec b=(3,4)\\), \\(\\vec d=(-1,2)\\). Determina \\(k\\) tale che \\(\\vec r=\\vec a+k\\,\\vec b\\) sia parallelo a \\(\\vec d\\). Poi calcola modulo e angolo di \\(\\vec r\\).",
    a: "Parallelismo: \\(\\vec r\\) proporzionale a \\(\\vec d\\). Impone \\(\\tfrac{2+3k}{-1} = \\tfrac{-1+4k}{2}\\Rightarrow\\) risolvendo: \\(k=\\tfrac{3}{5}\\). Allora \\(\\vec r=(2+\\tfrac{9}{5},-1+\\tfrac{12}{5})=(\\tfrac{19}{5},\\tfrac{7}{5})\\) che è proporzionale a \\((-1,2)\\) con fattore \\(-\\tfrac{19}{5}\\) non coerente — alternativa: imponi il determinante nullo: \\((2+3k,\\,-1+4k)\\times(-1,2)=0\\Rightarrow 2(2+3k)+1(-1+4k)=0\\Rightarrow 4+6k-1+4k=0\\Rightarrow 10k+3=0\\Rightarrow k=-\\tfrac{3}{10}.\\) Con \\(k=-\\tfrac{3}{10}\\): \\(\\vec r=(\\tfrac{11}{10},\\tfrac{-11}{10})\\), modulo \\(|\\vec r|=\\tfrac{11}{10}\\sqrt2\\), angolo \\(-45^\\circ\\)."
  },
  // 23
  {
    q: "Siano \\(\\vec a=(4,-2)\\), \\(\\vec b=(1,3)\\). Trova i valori di \\(t\\) tali che \\(\\vec r=\\vec a+t\\,\\vec b\\) abbia modulo \\(|\\vec r|=10\\). Per ciascun valore, determina l’angolo di \\(\\vec r\\) rispetto all’asse \\(x\\).",
    a: "\\(\\vec r=(4+t,-2+3t)\\). Impone \\((4+t)^2+(-2+3t)^2=100\\Rightarrow 10t^2+(-4+8)t+20-100=0\\Rightarrow 10t^2+4t-80=0\\Rightarrow 5t^2+2t-40=0\\Rightarrow t=\\tfrac{-2\\pm\\sqrt{4+800}}{10}=\\tfrac{-2\\pm\\sqrt{804}}{10}=\\tfrac{-2\\pm 2\\sqrt{201}}{10}=\\tfrac{-1\\pm\\sqrt{201}}{5}.\\) Per ciascun \\(t\\): \\(\\theta=\\operatorname{atan2}(-2+3t,\\,4+t)\\)."
  },
  // 24
  {
    q: "Siano \\(P=(1,2)\\), \\(Q=(6,4)\\), \\(R=(3,9)\\). (1) Calcola \\(\\overrightarrow{PQ}\\) e \\(\\overrightarrow{PR}\\). (2) Determina l’angolo \\(\\widehat{QPR}\\) con il prodotto scalare. (3) Calcola l’area del triangolo \\(PQR\\) con \\(\\tfrac12\\,|\\overrightarrow{PQ}\\times\\overrightarrow{PR}|\\).",
    a: "\\(\\overrightarrow{PQ}=(5,2)\\), \\(\\overrightarrow{PR}=(2,7)\\). Dot=\\(5\\cdot2+2\\cdot7=24\\). Moduli: \\(|PQ|=\\sqrt{29}\\), \\(|PR|=\\sqrt{53}\\). \\(\\cos\\theta=\\tfrac{24}{\\sqrt{29\\cdot53}}\\Rightarrow \\theta\\approx 49{,}8^\\circ\\). Area=\\(\\tfrac12|5\\cdot7-2\\cdot2|=\\tfrac12\\cdot31=15{,}5\\)."
  },
  // 25
  {
    q: "Siano \\(\\vec a=(2,1)\\), \\(\\vec b=(-1,3)\\) e \\(\\vec v=(5,7)\\). (1) Trova \\(\\alpha,\\beta\\) tali che \\(\\vec v=\\alpha\\vec a+\\beta\\vec b\\). (2) Calcola i moduli di \\(\\alpha\\vec a\\) e \\(\\beta\\vec b\\) e l’angolo tra questi due vettori.",
    a: "Sistema: \\(2\\alpha-\\beta=5\\), \\(\\alpha+3\\beta=7\\) \\(\\Rightarrow\\alpha=\\tfrac{22}{7},\\ \\beta=\\tfrac{9}{7}\\). Moduli: \\(|\\alpha\\vec a|=\\tfrac{22}{7}\\sqrt5\\), \\(|\\beta\\vec b|=\\tfrac{9}{7}\\sqrt{10}\\). Angolo: \\(\\cos\\theta=\\dfrac{(\\alpha\\vec a)\\cdot(\\beta\\vec b)}{|\\alpha\\vec a|\\,|\\beta\\vec b|}=\\dfrac{198/49}{(22/7\\sqrt5)(9/7\\sqrt{10})}=\\dfrac{1}{5\\sqrt2}\\Rightarrow \\theta\\approx81{,}9^\\circ\\)."
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
