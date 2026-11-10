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
  const firstLesson = advanced => section('distanza', 'Il valore assoluto nell’algebra', [
    card('Definizione',
      '<p>Il <strong>valore assoluto</strong> di un numero reale a si indica con |a|.</p><p>Se a ≥ 0, poniamo |a| = a. Se a &lt; 0, poniamo |a| = −a. Nel secondo caso −a è l’opposto di a, quindi è positivo.</p>',
      '<p>Per esempio, |7| = 7, |−7| = −(−7) = 7 e |0| = 0. Il numero o l’espressione racchiusi tra le barre si chiamano <strong>argomento</strong> del valore assoluto.</p>'),
    card('Il segno dell’argomento',
      '<p>In |x − 3| guardiamo il segno dell’intera espressione x − 3. Se x ≥ 3, il valore assoluto vale x − 3. Se x &lt; 3, vale −(x − 3) = 3 − x.</p>',
      '<p>Per x = 1, l’argomento vale −2. Applichiamo il secondo caso e otteniamo |1 − 3| = 3 − 1 = 2.</p>'),
    card('Non negatività, zero e simmetria',
      '<p><strong>Non negatività.</strong> Per ogni a ∈ ℝ si ha |a| ≥ 0. Inoltre |a| = 0 se e solo se a = 0.</p>',
      '<p><strong>Simmetria.</strong> Due numeri opposti hanno lo stesso valore assoluto: |−a| = |a|. Più in generale, |a| = |b| se e solo se a = b oppure a = −b.</p>'),
    card('Il maggiore tra un numero e il suo opposto',
      '<p>|a| = max{a, −a}. Se a ≥ 0 il maggiore è a, mentre se a &lt; 0 è −a. Di conseguenza, a e −a sono entrambi minori o uguali a |a|. Possiamo scrivere <strong>−|a| ≤ a ≤ |a|</strong>.</p>',
      '<p><strong>Applicazione ripetuta.</strong> Poiché |a| è già non negativo, ||a|| = |a|. In un’espressione come ||a| − 3|, invece, l’argomento esterno è |a| − 3 e il suo segno dipende da a.</p>'),
    card('Prodotto, quoziente e potenza',
      '<p><strong>Prodotto.</strong> |ab| = |a| · |b|. Per esempio, |(−2) · 5| = 10 e |−2| · |5| = 10.</p>',
      '<p><strong>Quoziente.</strong> |a/b| = |a|/|b|, purché b ≠ 0.</p>',
      '<p><strong>Potenza.</strong> Per ogni intero n ≥ 1, applicando la proprietà del prodotto si ottiene |a<sup>n</sup>| = |a|<sup>n</sup>. In particolare, a<sup>2</sup> = |a|<sup>2</sup>.</p>' +
        (advanced ? '<p>La radice quadrata restituisce il valore non negativo, quindi √(a<sup>2</sup>) = |a|.</p>' : '')),
    card('Disuguaglianza triangolare',
      '<p>Il valore assoluto di una somma è al più la somma dei valori assoluti: <strong>|a + b| ≤ |a| + |b|</strong>.</p><p>Per esempio, |5 + (−3)| = 2, mentre |5| + |−3| = 8. Gli addendi si compensano in parte. Si ha uguaglianza quando hanno lo stesso segno oppure almeno uno è zero.</p>',
      ...(advanced ? ['<p>Per dimostrarla, sommiamo membro a membro −|a| ≤ a ≤ |a| e −|b| ≤ b ≤ |b|. Otteniamo −(|a| + |b|) ≤ a + b ≤ |a| + |b|. Sia a + b sia il suo opposto sono quindi minori o uguali a |a| + |b|. Per definizione, |a + b| coincide con uno dei due.</p>'] : [])),
    ...(advanced ? [
      card('Disuguaglianza triangolare inversa',
        '<p>Il valore assoluto della differenza tra |a| e |b| è al più |a − b|: <strong>||a| − |b|| ≤ |a − b|</strong>.</p>',
        '<p>Scriviamo a = (a − b) + b. La disuguaglianza triangolare dà |a| ≤ |a − b| + |b|, quindi |a| − |b| ≤ |a − b|. Scambiando a e b troviamo anche |b| − |a| ≤ |a − b|. Le due disuguaglianze danno la proprietà.</p>')
    ] : [])
  ], question('Quanto vale |x − 3| per x = 1?', ['−2', '2', '4'], 1, 'L’argomento vale −2. Il valore assoluto restituisce il suo opposto, cioè 2.'));

  window.READER_LESSONS['valore-assoluto-biennio'] = {
    title: 'Equazioni e disequazioni con il valore assoluto',
    subtitle: 'Matematica · Biennio · Algebra',
    version: 3,
    status: 'work-in-progress',
    sections: [
      firstLesson(false),
      section('equazioni', 'Equazioni con un valore assoluto', [
        card('Secondo membro positivo',
          '<p>Se k &gt; 0, <strong>|A(x)| = k</strong> equivale a <strong>A(x) = k oppure A(x) = −k</strong>. Per definizione, se A(x) ≥ 0 deve valere A(x) = k. Se A(x) &lt; 0 deve valere −A(x) = k.</p>',
          '<p>In |2x − 1| = 5 risolviamo 2x − 1 = 5 oppure 2x − 1 = −5. Otteniamo x = 3 oppure x = −2. Sostituendo i due valori, i valori dell’argomento sono 5 e −5.</p>'),
        card('Secondo membro nullo o negativo',
          '<p>Se k = 0, basta risolvere A(x) = 0. Per esempio, |2x − 1| = 0 dà x = 1/2. Se k &lt; 0, l’equazione è impossibile perché un valore assoluto è sempre non negativo.</p>')
      ], question('Quali soluzioni ha |x + 2| = 3?', ['{1}', '{−1, 5}', '{−5, 1}'], 2, 'I due rami sono x + 2 = 3 e x + 2 = −3.')),
      section('disequazioni', 'Disequazioni con un valore assoluto', [
        card('Minore della soglia',
          '<p>Poiché |x − 2| è il maggiore tra x − 2 e −(x − 2), per avere |x − 2| &lt; 3 <strong>entrambe</strong> le espressioni devono essere minori di 3.</p>',
          '<p>Per k &gt; 0, |A(x)| &lt; k equivale a −k &lt; A(x) &lt; k. In |x − 2| &lt; 3 sommiamo 2 ai tre membri e otteniamo −1 &lt; x &lt; 5. Con ≤ includiamo anche gli estremi.</p>'),
        card('Maggiore della soglia',
          '<p>Per avere |x − 2| &gt; 3 basta che <strong>almeno una</strong> tra x − 2 e −(x − 2) sia maggiore di 3.</p>',
          '<p>Per k &gt; 0, |A(x)| &gt; k equivale a A(x) &lt; −k oppure A(x) &gt; k. Nell’esempio otteniamo x &lt; −1 oppure x &gt; 5. Con ≥ includiamo anche gli estremi.</p>'),
        card('Il confronto con zero',
          '<p>|A(x)| &lt; 0 è impossibile e |A(x)| ≥ 0 è sempre vera nel dominio. |A(x)| ≤ 0 richiede A(x) = 0, mentre |A(x)| &gt; 0 richiede A(x) ≠ 0.</p><p>Se k &lt; 0, i confronti &lt; e ≤ con k sono impossibili. I confronti &gt; e ≥ con k sono veri in tutto il dominio.</p>')
      ], question('Qual è la soluzione di |x − 2| ≥ 3?', ['[−1, 5]', 'x ≤ −1 oppure x ≥ 5', 'x < −1 oppure x > 5'], 1, 'Risolvi x − 2 ≤ −3 oppure x − 2 ≥ 3. Entrambe le disuguaglianze includono il proprio estremo.'))
    ]
  };

  window.READER_LESSONS['valore-assoluto-triennio'] = {
    title: 'Equazioni e disequazioni con il valore assoluto',
    subtitle: 'Matematica · Triennio · Metodo generale e approfondimenti',
    version: 3,
    status: 'work-in-progress',
    sections: [
      firstLesson(true),
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
          '<p>Trova gli zeri degli argomenti dei valori assoluti e separa eventuali discontinuità o punti esclusi dal dominio. Nei tratti in cui conosci il segno, sostituisci |A| con A oppure con −A. Risolvi la relazione ottenuta e interseca il risultato con il tratto. Alla fine unisci i risultati e controlla i punti di confine ammessi.</p>'),
        card('Due valori assoluti e tre intervalli',
          '<p>Risolviamo |x − 1| + |x + 2| ≤ 5. Gli argomenti si annullano in 1 e −2. I segni producono tre tratti sulla retta.</p>',
          '<p>Se x &lt; −2, entrambi gli argomenti sono negativi e la somma vale −2x − 1. La disequazione dà x ≥ −3. Nel tratto considerato restano i punti da −3 incluso a −2 escluso.</p>',
          '<p>Se −2 ≤ x ≤ 1, la somma vale (1 − x) + (x + 2) = 3. Tutto il tratto soddisfa la disequazione. Se x &gt; 1, la somma vale 2x + 1 e la disequazione dà x ≤ 2.</p>',
          '<p>Unendo i tre risultati si ottiene <strong>[−3, 2]</strong>. In −3 e 2 la somma dei due valori assoluti vale esattamente 5.</p>')
      ], question('Un calcolo valido nel tratto x > 1 produce x ≤ 2. Che cosa conservi?', ['x ≤ 2', '1 < x ≤ 2', 'x > 2'], 1, 'La formula usata vale solo nel tratto x > 1, quindi serve l’intersezione.')),
      section('annidati', 'Valori assoluti annidati e scelta del metodo', [
        card('Leggi la struttura dall’esterno',
          '<p>Per risolvere ||x| − 3| = 1, considera |x| − 3 come un solo argomento. Il valore assoluto esterno dà |x| − 3 = 1 oppure |x| − 3 = −1.</p>',
          '<p>Ottieni |x| = 4 oppure |x| = 2. Applicando la definizione a |x| trovi <strong>x ∈ {−4, −2, 2, 4}</strong>. Se serve una forma senza barre di valore assoluto su intervalli, studia prima il segno dell’argomento interno e poi quello dell’argomento esterno in ciascun tratto.</p>'),
        card('Una scorciatoia per due valori assoluti isolati',
          '<p>|A(x)| = |B(x)| equivale a A(x) = B(x) oppure A(x) = −B(x). I due membri sono non negativi, quindi possiamo anche elevarli al quadrato e usare A² − B² = (A − B)(A + B).</p>',
          '<p>In |x − 2| = |2x + 1| otteniamo x − 2 = 2x + 1 oppure x − 2 = −2x − 1. Le soluzioni sono −3 e 1/3. Quando a destra c’è B(x) senza valore assoluto, prima di elevare al quadrato serve invece controllare B(x) ≥ 0.</p>')
      ], question('Qual è il primo passaggio utile in ||x| − 3| = 1?', ['|x| = 3 oppure |x| = 1', '|x| − 3 = 1 oppure |x| − 3 = −1', 'x − 3 = 1'], 1, 'Applica la regola dell’equazione con valore assoluto all’intero argomento |x| − 3.'))
    ]
  };
})();
