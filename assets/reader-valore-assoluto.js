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
  function firstLesson(advanced) {
  // Native mathematical typesetting, shared by the two school tracks.
  const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const row = s => {
    const tokens = s.match(/\d+(?:,\d+)?|[²ⁿ]|[^\s]/g) || [];
    const out = [];
    for (const t of tokens) {
      if (t === '²' || t === 'ⁿ') {
        const base = out.pop();
        out.push(`<msup>${base}${t === '²' ? '<mn>2</mn>' : '<mi>n</mi>'}</msup>`);
      } else if (/^\d/.test(t)) out.push(`<mn>${t}</mn>`);
      else if (/^[a-zA-Zℝ]$/.test(t)) out.push(`<mi>${t}</mi>`);
      else out.push(`<mo${t === '|' ? ' fence="true" stretchy="false" lspace="0.06em" rspace="0.06em"' : ''}>${esc(t)}</mo>`);
    }
    return `<mrow>${out.join('')}</mrow>`;
  };
  const math = xml => `<math xmlns="http://www.w3.org/1998/Math/MathML">${xml}</math>`;
  const m = s => math(row(s));
  const frac = (a, b) => `<mfrac>${row(a)}${row(b)}</mfrac>`;
  const abs = xml => `<mrow><mo fence="true" stretchy="true">|</mo>${xml}<mo fence="true" stretchy="true">|</mo></mrow>`;
  const cases = (left, first, firstCondition, second, secondCondition) =>
    `<math xmlns="http://www.w3.org/1998/Math/MathML" display="block" class="rm-absolute-definition"><mrow>${row(left)}<mo>=</mo><mrow><mo fence="true" stretchy="true">{</mo><mtable columnalign="left left" columnspacing="1.4em" rowspacing="0.6em"><mtr><mtd>${row(first)}</mtd><mtd><mtext>se</mtext><mspace width="0.35em"/>${row(firstCondition)}</mtd></mtr><mtr><mtd>${row(second)}</mtd><mtd><mtext>se</mtext><mspace width="0.35em"/>${row(secondCondition)}</mtd></mtr></mtable></mrow></mrow></math>`;
  const reveal = (title, ...html) => ({ title, steps: html.map(html => ({ html })) });

  return section('distanza', 'Il valore assoluto nell’algebra', [
    reveal('Definizione di valore assoluto',
      `Sia ${m('a')} un <button class="rm-keyword" data-term="numero-reale" type="button">numero reale</button> qualsiasi (${math('<mrow><mi>a</mi><mo>∈</mo><mi mathvariant="double-struck" class="rm-math-keyword" data-term="numero-reale" role="button" tabindex="0" aria-label="Numeri reali: significato del simbolo ℝ">R</mi></mrow>')}). Il suo <strong>valore assoluto</strong> si indica con ${m('|a|')} ed è definito da:
      ${cases('|a|', 'a', 'a ≥ 0', '−a', 'a < 0')}
      È un’<strong>operazione unaria</strong>: si applica a un solo numero e restituisce un numero reale non negativo. Nel secondo caso ${m('−a')} è l’opposto di ${m('a')}: poiché ${m('a < 0')}, il risultato è positivo.`,
      `<strong>Esempi numerici.</strong> ${m('|7| = 7')}, ${m('|−7| = −(−7) = 7')} e ${m('|0| = 0')}.<br><br>
      Il numero o l’espressione racchiusi tra le barre si chiamano <strong>argomento</strong> del valore assoluto.`
    ),
    reveal('Le prime proprietà',
      `Nelle proprietà che seguono, ${m('a')} e ${m('b')} indicano numeri reali qualsiasi.<br><br>
      <strong>• Non negatività e zero.</strong> ${m('|a| ≥ 0')}; inoltre ${m('|a| = 0')} se e solo se ${m('a = 0')}. Per esempio, ${m('|−4| = 4')} e solo zero ha valore assoluto zero.<br><br>
      <strong>• Numeri opposti.</strong> ${m('|−a| = |a|')}: ${m('|−5| = |5| = 5')}. Più in generale, ${m('|a| = |b|')} se e solo se ${m('a = b')} oppure ${m('a = −b')}.`,
      `<strong>• Confronto con il numero e il suo opposto.</strong> ${m('|a|')} è il maggiore tra ${m('a')} e ${m('−a')}. Perciò ${m('−|a| ≤ a ≤ |a|')}. Con ${m('a = −3')} otteniamo ${m('−3 ≤ −3 ≤ 3')}.<br><br>
      <strong>• Applicazione ripetuta.</strong> ${m('||a|| = |a|')}, perché il primo risultato è già non negativo. Per esempio, ${m('||−6|| = |6| = 6')}.`
    ),
    reveal('Prodotto, quoziente e potenza',
      `<strong>Prodotto.</strong> ${m('|ab| = |a| · |b|')}. Possiamo calcolare prima il prodotto oppure i valori assoluti dei fattori: otteniamo lo stesso risultato.<br><br>
      Per esempio, ${m('|(−2) · 5| = |−10| = 10')} e ${m('|−2| · |5| = 2 · 5 = 10')}.`,
      `<strong>Quoziente.</strong> Se ${m('b ≠ 0')}, allora ${math(abs(frac('a','b')) + '<mo>=</mo>' + frac('|a|','|b|'))}.<br><br>
      Per esempio, ${math(abs(frac('−6','−3')) + '<mo>=</mo>' + abs(row('2')) + '<mo>=</mo>' + row('2'))}; usando la proprietà, ${math(frac('|−6|','|−3|') + '<mo>=</mo>' + frac('6','3') + '<mo>=</mo>' + row('2'))}. Il divisore deve sempre essere diverso da zero.`,
      `<strong>Potenza.</strong> Per ogni intero ${m('n ≥ 1')}, ${m('|aⁿ| = |a|ⁿ')}: basta applicare la proprietà del prodotto ai fattori uguali.<br><br>
      Per esempio, ${m('|(−3)²| = |9| = 9')} e ${m('|−3|² = 3² = 9')}. In particolare ${m('a² = |a|²')}.
      ${advanced ? `<br><br>Nel triennio possiamo collegarla alla radice quadrata: ${math('<msqrt>'+row('a²')+'</msqrt><mo>=</mo>'+row('|a|'))}, perché la radice quadrata restituisce il valore non negativo. Per esempio, ${math('<msqrt>'+row('(−3)²')+'</msqrt><mo>=</mo>'+row('3'))}.` : ''}`
    ),
    reveal('Somme e differenze: le disuguaglianze',
      `<strong>Il valore assoluto non si distribuisce, in generale, sulla somma.</strong> Infatti ${m('|5 + (−3)| = 2')}, mentre ${m('|5| + |−3| = 8')}.<br><br>
      Vale invece la <strong>disuguaglianza triangolare</strong>: ${m('|a + b| ≤ |a| + |b|')}. Si ha uguaglianza quando gli addendi hanno lo stesso segno oppure almeno uno è zero: per esempio, ${m('|−2 + (−3)| = 5 = |−2| + |−3|')}.`,
      `<strong>Perché vale?</strong> Dalla proprietà ${m('−|a| ≤ a ≤ |a|')} e dalla stessa proprietà per ${m('b')}, sommando membro a membro otteniamo ${m('−(|a| + |b|) ≤ a + b ≤ |a| + |b|')}. Sia la somma sia il suo opposto sono quindi al più ${m('|a| + |b|')}; anche il loro maggiore, cioè ${m('|a + b|')}, rispetta questo limite.`,
      `<strong>Disuguaglianza triangolare inversa.</strong> ${m('||a| − |b|| ≤ |a − b|')}. Per esempio, con ${m('a = 5')} e ${m('b = −3')}, il primo membro vale ${m('|5 − 3| = 2')} e il secondo ${m('|5 − (−3)| = 8')}.<br><br>
      Per dimostrarla scriviamo ${m('a = (a − b) + b')}. La triangolare dà ${m('|a| − |b| ≤ |a − b|')}. Scambiando ${m('a')} e ${m('b')} otteniamo ${m('|b| − |a| ≤ |a − b|')}: entrambi i numeri opposti sono al più ${m('|a − b|')}, quindi lo è anche il loro valore assoluto.`
    ),
    reveal('Usiamo le proprietà nei calcoli numerici',
      `<strong>Prima l’argomento, poi il valore assoluto.</strong> Le barre raggruppano ciò che contengono. In ${m('2 − |3 − 7|')} calcoliamo prima ${m('3 − 7 = −4')}, poi ${m('|−4| = 4')}, infine ${m('2 − 4 = −2')}.<br><br>
      In ${m('||−5| − 8|')} procediamo dall’interno: ${m('||−5| − 8| = |5 − 8| = |−3| = 3')}. La proprietà ${m('||a|| = |a|')} non permette di ignorare la sottrazione presente nell’argomento esterno.`,
      `<strong>Attenzione a dove agiscono i segni e le potenze.</strong> ${m('−|−3|² = −3² = −9')}, mentre ${m('(−|−3|)² = (−3)² = 9')}: le parentesi cambiano la base della potenza.<br><br>
      Anche nella differenza non possiamo separare i valori assoluti: ${m('|2 − 5| = 3')}, mentre ${m('|2| − |5| = −3')}. Prima di applicare una proprietà, controlliamo che l’espressione abbia proprio la struttura richiesta.`
    ),
    reveal('Quando nell’argomento compare una lettera',
      `L’argomento può contenere anche un’<strong>indeterminata</strong>. La definizione resta la stessa: per ciascun valore reale ammesso della lettera, calcoliamo l’argomento e ne prendiamo il valore assoluto.<br><br>
      Se il segno dell’argomento dipende dalla lettera, per eliminare le barre dobbiamo distinguere i casi. Per esempio:
      ${cases('|x − 3|','x − 3','x ≥ 3','−(x − 3) = 3 − x','x < 3')}`,
      `<strong>Controlliamo con i numeri.</strong> Per ${m('x = 5')} vale il primo caso: ${m('|5 − 3| = 2')}. Per ${m('x = 1')} vale il secondo: ${m('|1 − 3| = 3 − 1 = 2')}.<br><br>
      Non otteniamo due risultati contemporaneamente: le due espressioni sono <strong>due scritture valide sotto condizioni diverse</strong>. Per ogni valore ammesso di ${m('x')}, il valore assoluto ha un solo risultato.`,
      `<strong>Non sempre serve distinguere due casi.</strong> Se conosciamo già il segno dell’argomento, possiamo usare direttamente il ramo adatto. Per ogni ${m('x')} reale, ${m('x² + 1 > 0')}, quindi ${m('|x² + 1| = x² + 1')}.<br><br>
      Al contrario, scrivere ${m('|x| = x')} senza condizioni sarebbe scorretto: vale soltanto per ${m('x ≥ 0')}. Per ${m('x < 0')} vale ${m('|x| = −x')}.`
    ),
    reveal('Le proprietà nelle espressioni letterali',
      `<strong>Una proprietà può evitare lo studio dei casi.</strong> Dal prodotto otteniamo ${m('|−3x| = |−3| · |x| = 3|x|')}, per ogni ${m('x')} reale. Anche ${m('|−x| = |x|')} è sempre valida. Il risultato può restare scritto con un valore assoluto.<br><br>
      Per esempio, ${m('|−3x| + 2|x| = 3|x| + 2|x| = 5|x|')}. Abbiamo usato prima una proprietà, poi sommato due termini con lo stesso fattore ${m('|x|')}.`,
      `<strong>Se vogliamo eliminare le barre, manteniamo le condizioni.</strong> Consideriamo ${m('|x − 3| + x')}. Per ${m('x ≥ 3')} diventa ${m('(x − 3) + x = 2x − 3')}; per ${m('x < 3')} diventa ${m('(3 − x) + x = 3')}.<br><br>
      La cautela sta qui: possiamo usare le proprietà per ogni valore ammesso della lettera, ma possiamo sostituire il valore assoluto con l’argomento o il suo opposto solo dove ne conosciamo il segno. Questo sarà il punto di partenza per equazioni e disequazioni.`
    )
  ],
    question('Quale uguaglianza è valida per ogni numero reale x?', ['|x| = x', '|−3x| = 3|x|', '|x − 3| = |x| − 3'], 1, 'La proprietà del prodotto dà |−3x| = |−3| · |x| = 3|x|. Le altre due uguaglianze non valgono per ogni x.')
  );
}

  const constantEquations = advanced => section('equazioni', 'Equazioni con un valore assoluto', [
        card('Secondo membro positivo',
          '<p>Se k &gt; 0, <strong>|A(x)| = k</strong> equivale a <strong>A(x) = k oppure A(x) = −k</strong>. Per definizione, se A(x) ≥ 0 deve valere A(x) = k. Se A(x) &lt; 0 deve valere −A(x) = k.</p>',
          advanced
            ? '<p>In |x<sup>2</sup> − 5| = 4, i due rami danno x<sup>2</sup> = 9 oppure x<sup>2</sup> = 1. Le soluzioni sono −3, −1, 1 e 3.</p>'
            : '<p>In |2x − 1| = 5 risolviamo 2x − 1 = 5 oppure 2x − 1 = −5. Otteniamo x = 3 oppure x = −2. Sostituendo i due valori, i valori dell’argomento sono 5 e −5.</p>'),
        card('Secondo membro nullo o negativo',
          '<p>Se k = 0, basta risolvere A(x) = 0. Per esempio, |2x − 1| = 0 dà x = 1/2. Se k &lt; 0, l’equazione è impossibile perché un valore assoluto è sempre non negativo.</p>')
      ], question('Quali soluzioni ha |x + 2| = 3?', ['{1}', '{−1, 5}', '{−5, 1}'], 2, 'I due rami sono x + 2 = 3 e x + 2 = −3.'));
  const constantInequalities = advanced => section('disequazioni', 'Disequazioni con un valore assoluto', [
        card('Minore della soglia',
          '<p>Poiché |x − 2| è il maggiore tra x − 2 e −(x − 2), per avere |x − 2| &lt; 3 <strong>entrambe</strong> le espressioni devono essere minori di 3.</p>',
          '<p>Per k &gt; 0, |A(x)| &lt; k equivale a −k &lt; A(x) &lt; k. In |x − 2| &lt; 3 sommiamo 2 ai tre membri e otteniamo −1 &lt; x &lt; 5. Con ≤ includiamo anche gli estremi.</p>',
          ...(advanced ? ['<p>In |x<sup>2</sup> − 4| ≤ 5, la doppia disuguaglianza dà −1 ≤ x<sup>2</sup> ≤ 9. La prima condizione vale per ogni x reale, quindi basta x<sup>2</sup> ≤ 9. Otteniamo [−3, 3].</p>'] : [])),
        card('Maggiore della soglia',
          '<p>Per avere |x − 2| &gt; 3 basta che <strong>almeno una</strong> tra x − 2 e −(x − 2) sia maggiore di 3.</p>',
          '<p>Per k &gt; 0, |A(x)| &gt; k equivale a A(x) &lt; −k oppure A(x) &gt; k. Nell’esempio otteniamo x &lt; −1 oppure x &gt; 5. Con ≥ includiamo anche gli estremi.</p>'),
        card('Il confronto con zero',
          '<p>|A(x)| &lt; 0 è impossibile e |A(x)| ≥ 0 è sempre vera nel dominio. |A(x)| ≤ 0 richiede A(x) = 0, mentre |A(x)| &gt; 0 richiede A(x) ≠ 0.</p><p>Se k &lt; 0, i confronti &lt; e ≤ con k sono impossibili. I confronti &gt; e ≥ con k sono veri in tutto il dominio.</p>')
      ], question('Qual è la soluzione di |x − 2| ≥ 3?', ['[−1, 5]', 'x ≤ −1 oppure x ≥ 5', 'x < −1 oppure x > 5'], 1, 'Risolvi x − 2 ≤ −3 oppure x − 2 ≥ 3. Entrambe le disuguaglianze includono il proprio estremo.'));

  const domainCard = card('Prima fissa il dominio',
          '<p>Individua dove sono definite A(x) e B(x), per esempio escludendo gli zeri dei denominatori. Tutte le equivalenze successive si leggono in quel dominio. Nel dominio vale sempre |A(x)| ≥ 0.</p>');

  const variableEquations = section('secondo-membro', 'Quando il secondo membro dipende da x', [
    domainCard,
    card('Equazioni: due rami con una condizione',
          '<p>|A(x)| = B(x) richiede B(x) ≥ 0 e almeno una delle due uguaglianze A(x) = B(x) oppure A(x) = −B(x). Interseca ciascun ramo con B(x) ≥ 0, poi unisci le soluzioni.</p>',
          '<p>In |2x − 1| = x il secondo membro impone x ≥ 0. Dal primo ramo 2x − 1 = x otteniamo x = 1. Dal secondo 2x − 1 = −x otteniamo x = 1/3. Entrambi rispettano la condizione.</p>')
  ], question('Quale condizione deve soddisfare B(x) in |A(x)| = B(x)?', ['B(x) > 0', 'B(x) ≥ 0', 'B(x) ≤ 0'], 1, 'Il valore assoluto è non negativo e può valere zero.'));

  const variableInequalities = section('secondo-membro', 'Quando la soglia dipende da x', [
    domainCard,
    card('Disequazioni: confronto tra le due soglie',
          '<p>|A(x)| ≤ B(x) equivale a <strong>−B(x) ≤ A(x) ≤ B(x)</strong>. Se le due condizioni sono vere insieme, allora −B(x) ≤ B(x) e dunque B(x) ≥ 0. Con &lt; si ottiene la doppia disuguaglianza stretta, che implica B(x) &gt; 0.</p>',
          '<p>In |2x − 1| ≤ x + 2 imponiamo −x − 2 ≤ 2x − 1 e 2x − 1 ≤ x + 2. Il primo vincolo dà x ≥ −1/3, il secondo x ≤ 3. L’intersezione è [−1/3, 3].</p>',
          '<p>|A(x)| &gt; B(x) equivale a A(x) &lt; −B(x) <strong>oppure</strong> A(x) &gt; B(x). Per ≥ usa ≤ nel primo ramo e ≥ nel secondo. Se B(x) &lt; 0, almeno un ramo risulta sempre vero, come ci aspettiamo da |A(x)| ≥ 0.</p>')
      ], question('Per |A(x)| < B(x), quali x con B(x) < 0 possono essere soluzioni?', ['Tutti', 'Solo quelli con A(x) = 0', 'Nessuno'], 2, 'Un valore assoluto non negativo non può essere minore di un numero negativo.'));
  const signStudy = section('segni', 'Il metodo generale: studia i segni', [
        card('Scegli intervalli in cui i segni sono fissi',
          '<p>Trova gli zeri degli argomenti dei valori assoluti e separa eventuali discontinuità o punti esclusi dal dominio. Nei tratti in cui conosci il segno, sostituisci |A| con A oppure con −A. Risolvi la relazione ottenuta e interseca il risultato con il tratto. Alla fine unisci i risultati e controlla i punti di confine ammessi.</p>'),
        card('Due valori assoluti e tre intervalli',
          '<p>Risolviamo |x − 1| + |x + 2| ≤ 5. Gli argomenti si annullano in 1 e −2. I segni producono tre tratti sulla retta.</p>',
          '<p>Se x &lt; −2, entrambi gli argomenti sono negativi e la somma vale −2x − 1. La disequazione dà x ≥ −3. Nel tratto considerato restano i punti da −3 incluso a −2 escluso.</p>',
          '<p>Se −2 ≤ x ≤ 1, la somma vale (1 − x) + (x + 2) = 3. Tutto il tratto soddisfa la disequazione. Se x &gt; 1, la somma vale 2x + 1 e la disequazione dà x ≤ 2.</p>',
          '<p>Unendo i tre risultati si ottiene <strong>[−3, 2]</strong>. In −3 e 2 la somma dei due valori assoluti vale esattamente 5.</p>')
      ], question('Un calcolo valido nel tratto x > 1 produce x ≤ 2. Che cosa conservi?', ['x ≤ 2', '1 < x ≤ 2', 'x > 2'], 1, 'La formula usata vale solo nel tratto x > 1, quindi serve l’intersezione.'));
  const nestedEquations = section('annidati', 'Valori assoluti annidati e scelta del metodo', [
        card('Leggi la struttura dall’esterno',
          '<p>Per risolvere ||x| − 3| = 1, considera |x| − 3 come un solo argomento. Il valore assoluto esterno dà |x| − 3 = 1 oppure |x| − 3 = −1.</p>',
          '<p>Ottieni |x| = 4 oppure |x| = 2. Applicando la definizione a |x| trovi <strong>x ∈ {−4, −2, 2, 4}</strong>. Se serve una forma senza barre di valore assoluto su intervalli, studia prima il segno dell’argomento interno e poi quello dell’argomento esterno in ciascun tratto.</p>'),
        card('Una scorciatoia per due valori assoluti isolati',
          '<p>|A(x)| = |B(x)| equivale a A(x) = B(x) oppure A(x) = −B(x). I due membri sono non negativi, quindi possiamo anche elevarli al quadrato e usare A² − B² = (A − B)(A + B).</p>',
          '<p>In |x − 2| = |2x + 1| otteniamo x − 2 = 2x + 1 oppure x − 2 = −2x − 1. Le soluzioni sono −3 e 1/3. Quando a destra c’è B(x) senza valore assoluto, prima di elevare al quadrato serve invece controllare B(x) ≥ 0.</p>')
      ], question('Qual è il primo passaggio utile in ||x| − 3| = 1?', ['|x| = 3 oppure |x| = 1', '|x| − 3 = 1 oppure |x| − 3 = −1', 'x − 3 = 1'], 1, 'Applica la regola dell’equazione con valore assoluto all’intero argomento |x| − 3.'));

  for (const advanced of [false, true]) {
    const track = advanced ? 'triennio' : 'biennio';
    const subtitle = advanced ? 'Matematica · Triennio · Algebra' : 'Matematica · Biennio · Algebra';
    const lesson = (title, sections, nextId) => ({
      title,
      subtitle,
      version: 8,
      status: 'work-in-progress',
      sections,
      nextLesson: nextId ? { id: nextId } : false
    });
    const equationsId = 'valore-assoluto-equazioni-' + track;
    const inequalitiesId = 'valore-assoluto-disequazioni-' + track;

    window.READER_LESSONS['valore-assoluto-' + track] = lesson(
      'Il valore assoluto nell’algebra', [firstLesson(advanced)], equationsId
    );
    window.READER_LESSONS[equationsId] = lesson(
      'Equazioni con il valore assoluto', [constantEquations(advanced), variableEquations, nestedEquations], inequalitiesId
    );
    window.READER_LESSONS[inequalitiesId] = lesson(
      'Disequazioni con il valore assoluto', [constantInequalities(advanced), variableInequalities, signStudy]
    );
  }
})();
