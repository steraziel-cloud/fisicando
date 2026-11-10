/* Percorsi di teoria sul valore assoluto per il lettore GatitoMath. */
(() => {
  'use strict';

  const card = (title, ...paragraphs) => ({
    title,
    stepMode: 'replace',
    steps: paragraphs.map(html => ({ html: html.replaceAll('</p><p>', '<br><br>').replaceAll('<p>', '').replaceAll('</p>', '') }))
  });
  const question = (question, options, answer, feedback) => ({ question, options, answer, feedback });
  const section = (id, title, cards, ...questions) => ({ id, title, cards, quiz: { questions } });
  const line = `<svg viewBox="0 0 450 95" width="100%" style="max-width:450px" role="img" aria-label="Retta numerica. Meno tre e più tre distano entrambi tre unità da zero.">
    <path d="M24 52H426m-8-5 8 5-8 5M75 47v10m150-10v10m150-10v10" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M75 34H225M225 34H375" fill="none" stroke="var(--rm-accent, #168681)" stroke-width="3"/>
    <g text-anchor="middle" fill="currentColor" font-size="17"><text x="75" y="78">−3</text><text x="225" y="78">0</text><text x="375" y="78">3</text><text x="150" y="26">3 unità</text><text x="300" y="26">3 unità</text></g>
  </svg>`;

  window.READER_LESSONS['valore-assoluto-biennio'] = {
    title: 'Equazioni e disequazioni con il valore assoluto',
    subtitle: 'Matematica · Biennio · Algebra',
    version: 1,
    status: 'work-in-progress',
    sections: [
      section('distanza', 'Il valore assoluto come distanza', [
        card('Due punti, la stessa distanza',
          '<p>Parti da zero sulla retta numerica. Per raggiungere −3 percorri tre unità verso sinistra. Per raggiungere 3 percorri tre unità verso destra. In entrambi i casi la distanza è 3, quindi |−3| = |3| = 3.</p>' + line),
        card('Dal numero all’espressione',
          '<p>Per ogni numero reale u, <strong>|u| = u se u ≥ 0</strong> e <strong>|u| = −u se u &lt; 0</strong>. Per esempio, se u = −5, allora −u = 5. Il risultato è sempre non negativo.</p>',
          '<p>La regola vale anche quando u è un’espressione. In |x − 2| guardiamo il segno di <strong>x − 2</strong>. Quando x &lt; 2, il modulo vale −(x − 2) = 2 − x.</p>'),
        card('Una distanza da un punto qualsiasi',
          '<p>|x − a| misura la distanza di x da a. Per esempio, |5 − 2| = 3 e |−1 − 2| = 3. I punti −1 e 5 sono entrambi a tre unità da 2.</p>')
      ], question('Quanto vale |x − 2| quando x = −1?', ['−3', '1', '3'], 2, 'Sostituendo x = −1 ottieni |−3| = 3.')),
      section('equazioni', 'Equazioni con un modulo', [
        card('A una distanza esatta',
          '<p>Se k &gt; 0, <strong>|A(x)| = k</strong> equivale a <strong>A(x) = k oppure A(x) = −k</strong>. Sulla retta cerchiamo due valori a distanza k dallo zero.</p>',
          '<p>In |2x − 1| = 5 risolviamo 2x − 1 = 5 oppure 2x − 1 = −5. Otteniamo x = 3 oppure x = −2. Sostituendo i due valori, gli argomenti del modulo sono 5 e −5.</p>'),
        card('Quando la distanza è zero o negativa',
          '<p>Se k = 0, basta risolvere A(x) = 0. Per esempio, |2x − 1| = 0 dà x = 1/2. Se k &lt; 0, l’equazione è impossibile perché una distanza non può essere negativa.</p>')
      ], question('Quali soluzioni ha |x + 2| = 3?', ['{1}', '{−1, 5}', '{−5, 1}'], 2, 'I due rami sono x + 2 = 3 e x + 2 = −3.')),
      section('disequazioni', 'Disequazioni con un modulo', [
        card('Più vicino: un intervallo',
          '<p>In |x − 2| &lt; 3 cerchiamo i punti a meno di tre unità da 2. Devono stare <strong>a destra di −1 e a sinistra di 5</strong>.</p>',
          '<p>Per k &gt; 0, |A(x)| &lt; k equivale a −k &lt; A(x) &lt; k. In |x − 2| &lt; 3 sommiamo 2 ai tre membri e otteniamo −1 &lt; x &lt; 5. Con ≤ includiamo anche gli estremi.</p>'),
        card('Più lontano: due intervalli',
          '<p>In |x − 2| &gt; 3 cerchiamo i punti a più di tre unità da 2. Possiamo stare <strong>a sinistra di −1 oppure a destra di 5</strong>.</p>',
          '<p>Per k &gt; 0, |A(x)| &gt; k equivale a A(x) &lt; −k oppure A(x) &gt; k. Nell’esempio otteniamo x &lt; −1 oppure x &gt; 5. Con ≥ includiamo anche gli estremi.</p>'),
        card('Il confronto con zero',
          '<p>|A(x)| &lt; 0 è impossibile e |A(x)| ≥ 0 è sempre vera nel dominio. |A(x)| ≤ 0 richiede A(x) = 0, mentre |A(x)| &gt; 0 richiede A(x) ≠ 0.</p><p>Se k &lt; 0, i confronti &lt; e ≤ con k sono impossibili. I confronti &gt; e ≥ con k sono veri in tutto il dominio.</p>')
      ], question('Qual è la soluzione di |x − 2| ≥ 3?', ['[−1, 5]', 'x ≤ −1 oppure x ≥ 5', 'x < −1 oppure x > 5'], 1, 'La distanza deve essere almeno 3, quindi includiamo i due punti di confine e prendiamo l’esterno.'))
    ]
  };

  window.READER_LESSONS['valore-assoluto-triennio'] = {
    title: 'Equazioni e disequazioni con il valore assoluto',
    subtitle: 'Matematica · Triennio · Metodo generale e approfondimenti',
    version: 1,
    status: 'work-in-progress',
    sections: [
      section('secondo-membro', 'Quando anche il secondo membro dipende da x', [
        card('Prima fissa il dominio',
          '<p>Individua dove sono definite A(x) e B(x), per esempio escludendo gli zeri dei denominatori. Tutte le equivalenze successive si leggono in quel dominio. Nel dominio vale sempre |A(x)| ≥ 0.</p>'),
        card('Equazioni: due rami con una condizione',
          '<p>|A(x)| = B(x) richiede B(x) ≥ 0 e almeno una delle due uguaglianze A(x) = B(x) oppure A(x) = −B(x). Interseca ciascun ramo con B(x) ≥ 0, poi unisci le soluzioni.</p>',
          '<p>In |2x − 1| = x il secondo membro impone x ≥ 0. Dal primo ramo 2x − 1 = x otteniamo x = 1. Dal secondo 2x − 1 = −x otteniamo x = 1/3. Entrambi rispettano la condizione.</p>'),
        card('Disequazioni: confronto tra le due soglie',
          '<p>|A(x)| ≤ B(x) equivale a <strong>−B(x) ≤ A(x) ≤ B(x)</strong>. Se le due condizioni sono vere insieme, allora −B(x) ≤ B(x) e dunque B(x) ≥ 0. Con &lt; si ottiene la doppia disuguaglianza stretta, che implica B(x) &gt; 0.</p>',
          '<p>In |2x − 1| ≤ x + 2 imponiamo −x − 2 ≤ 2x − 1 e 2x − 1 ≤ x + 2. Il primo vincolo dà x ≥ −1/3, il secondo x ≤ 3. L’intersezione è [−1/3, 3].</p>',
          '<p>|A(x)| &gt; B(x) equivale a A(x) &lt; −B(x) <strong>oppure</strong> A(x) &gt; B(x). Per ≥ usa ≤ nel primo ramo e ≥ nel secondo. Se B(x) &lt; 0, almeno un ramo risulta sempre vero, come ci aspettiamo da |A(x)| ≥ 0.</p>')
      ], question('Per |A(x)| < B(x), quali x con B(x) < 0 possono essere soluzioni?', ['Tutti', 'Solo quelli con A(x) = 0', 'Nessuno'], 2, 'Un valore assoluto non negativo non può essere minore di un numero negativo.')),
      section('segni', 'Il metodo generale: studia i segni', [
        card('Scegli intervalli in cui i segni sono fissi',
          '<p>Trova gli zeri degli argomenti dei moduli e separa eventuali discontinuità o punti esclusi dal dominio. Nei tratti in cui conosci il segno, sostituisci |A| con A oppure con −A. Risolvi la relazione ottenuta e interseca il risultato con il tratto. Alla fine unisci i risultati e controlla i punti di confine ammessi.</p>'),
        card('Due moduli, tre tratti',
          '<p>Risolviamo |x − 1| + |x + 2| ≤ 5. Gli argomenti si annullano in 1 e −2. I segni producono tre tratti sulla retta.</p>',
          '<p>Se x &lt; −2, entrambi gli argomenti sono negativi e la somma vale −2x − 1. La disequazione dà x ≥ −3. Nel tratto considerato restano i punti da −3 incluso a −2 escluso.</p>',
          '<p>Se −2 ≤ x ≤ 1, la somma vale (1 − x) + (x + 2) = 3. Tutto il tratto soddisfa la disequazione. Se x &gt; 1, la somma vale 2x + 1 e la disequazione dà x ≤ 2.</p>',
          '<p>Unendo i tre risultati si ottiene <strong>[−3, 2]</strong>. In −3 e 2 la somma delle distanze vale esattamente 5.</p>')
      ], question('Un calcolo valido nel tratto x > 1 produce x ≤ 2. Che cosa conservi?', ['x ≤ 2', '1 < x ≤ 2', 'x > 2'], 1, 'La formula usata vale solo nel tratto x > 1, quindi serve l’intersezione.')),
      section('annidati', 'Moduli annidati e scelta del metodo', [
        card('Leggi la struttura dall’esterno',
          '<p>Per risolvere ||x| − 3| = 1, considera |x| − 3 come un solo argomento. Il modulo esterno dà |x| − 3 = 1 oppure |x| − 3 = −1.</p>',
          '<p>Ottieni |x| = 4 oppure |x| = 2. Aprendo il modulo interno trovi <strong>x ∈ {−4, −2, 2, 4}</strong>. Se serve una forma senza moduli su intervalli, studia prima il segno dell’argomento interno e poi quello dell’argomento esterno in ciascun tratto.</p>'),
        card('Una scorciatoia per due moduli isolati',
          '<p>|A(x)| = |B(x)| equivale a A(x) = B(x) oppure A(x) = −B(x). I due membri sono non negativi, quindi possiamo anche elevarli al quadrato e usare A² − B² = (A − B)(A + B).</p>',
          '<p>In |x − 2| = |2x + 1| otteniamo x − 2 = 2x + 1 oppure x − 2 = −2x − 1. Le soluzioni sono −3 e 1/3. Quando a destra c’è B(x) senza modulo, prima di elevare al quadrato serve invece controllare B(x) ≥ 0.</p>')
      ], question('Qual è il primo passaggio utile in ||x| − 3| = 1?', ['|x| = 3 oppure |x| = 1', '|x| − 3 = 1 oppure |x| − 3 = −1', 'x − 3 = 1'], 1, 'Applica la regola dell’equazione con modulo all’intero argomento |x| − 3.'))
    ]
  };
})();
