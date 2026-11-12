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
  const firstLesson = advanced => section('distanza', 'Il valore assoluto nell’algebra', advanced ? [
  {
    "title": "Definizione di valore assoluto",
    "steps": [
      {
        "html": "Il <strong>valore assoluto</strong> di un numero reale <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi></mrow></math> si indica con <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> ed è definito da:<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" class=\"rm-absolute-definition\" aria-label=\"Il valore assoluto di a è a se a è maggiore o uguale a zero, meno a se a è minore di zero\"><mrow><mrow><mo fence=\"true\" lspace=\"0\" rspace=\"0.08em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.08em\" rspace=\"0\">|</mo></mrow><mo>=</mo><mrow><mo fence=\"true\" stretchy=\"true\">{</mo><mtable columnalign=\"left left\" columnspacing=\"1.4em\" rowspacing=\"0.6em\"><mtr><mtd><mi>a</mi></mtd><mtd><mtext>se</mtext><mspace width=\"0.35em\"/><mi>a</mi><mo>≥</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>−</mo><mi>a</mi></mtd><mtd><mtext>se</mtext><mspace width=\"0.35em\"/><mi>a</mi><mo>&lt;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math><br>Nel secondo caso <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mi>a</mi></mrow></math> è l’opposto di <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi></mrow></math>: poiché <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, il risultato è positivo."
      },
      {
        "html": "<strong>Esempi.</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mn>7</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mn>7</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mn>7</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo>−</mo><mo>(</mo><mo>−</mo><mn>7</mn><mo>)</mo><mo>=</mo><mn>7</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mn>0</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mn>0</mn></mrow></math>.<br>Il numero o l’espressione racchiusi tra le barre si chiamano <strong>argomento</strong> del valore assoluto."
      }
    ]
  },
  {
    "title": "Il segno dell’argomento e l’ordine dei calcoli",
    "steps": [
      {
        "html": "In <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> guardiamo il segno dell’intera espressione <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow></math>. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>≥</mo><mn>3</mn></mrow></math>, il valore assoluto vale <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow></math>. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>&lt;</mo><mn>3</mn></mrow></math>, vale <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mo>(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>3</mn><mo>−</mo><mi>x</mi></mrow></math>.<br><br>Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, l’argomento vale −2. Applichiamo il secondo caso e otteniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mn>1</mn><mo>−</mo><mn>3</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mn>3</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow></math>."
      },
      {
        "html": "<strong>Le barre raggruppano l’argomento.</strong> Prima si calcola l’argomento tra le barre, poi si applica il valore assoluto. In <strong>2 − |3 − 7|</strong>, calcoliamo 3 − 7 = −4, poi |−4| = 4. Infine eseguiamo la sottrazione esterna e otteniamo −2.<br><br>In <strong>−|−3|<sup>2</sup></strong> calcoliamo |−3| = 3, poi eleviamo 3 al quadrato e infine applichiamo il segno meno esterno. Il risultato è −9. Se scriviamo <strong>(−|−3|)<sup>2</sup></strong>, le parentesi includono il segno meno nella base e il risultato è 9."
      }
    ]
  },
  {
    "title": "Le prime proprietà",
    "steps": [
      {
        "html": "<strong>Non negatività.</strong> Per ogni a ∈ ℝ si ha <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≥</mo><mn>0</mn></mrow></math>. Inoltre <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mn>0</mn></mrow></math> se e solo se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>.<br><br><strong>Simmetria.</strong> Due numeri opposti hanno lo stesso valore assoluto: <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Più in generale, <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> se e solo se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>=</mo><mi>b</mi></mrow></math> oppure <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>=</mo><mo>−</mo><mi>b</mi></mrow></math>."
      },
      {
        "html": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> = max{a, −a}. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>≥</mo><mn>0</mn></mrow></math> il maggiore è a, mentre se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> è −a. Di conseguenza, a e −a sono entrambi minori o uguali a <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Possiamo scrivere <strong><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mi>a</mi><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math></strong>.<br><br><strong>Applicazione ripetuta.</strong> Poiché <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> è già non negativo, <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. In un’espressione come <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mn>3</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>, invece, l’argomento esterno è <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mn>3</mn></mrow></math> e il suo segno dipende da a."
      }
    ]
  },
  {
    "title": "Prodotto, quoziente e potenza",
    "steps": [
      {
        "html": "<strong>Prodotto.</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>·</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Per esempio, |(−2) · 5| = 10 e |−2| · |5| = 10.<br><br><strong>Quoziente.</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>/</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>/</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>, purché <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>b</mi><mo>≠</mo><mn>0</mn></mrow></math>."
      },
      {
        "html": "<strong>Potenza.</strong> Per ogni intero n ≥ 1, applicando la proprietà del prodotto si ottiene |a<sup>n</sup>| = <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math><sup>n</sup>. In particolare, a<sup>2</sup> = <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math><sup>2</sup>.<br><br>La radice quadrata restituisce il valore non negativo, quindi √(a<sup>2</sup>) = <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>."
      }
    ]
  },
  {
    "title": "Le disuguaglianze del valore assoluto",
    "steps": [
      {
        "html": "<strong>Disuguaglianza triangolare.</strong> Il valore assoluto di una somma è al più la somma dei valori assoluti: <strong><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>+</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math></strong>.<br><br>Per esempio, |5 + (−3)| = 2, mentre |5| + |−3| = 8. Gli addendi si compensano in parte. Si ha uguaglianza quando hanno lo stesso segno oppure almeno uno è zero."
      },
      {
        "html": "<strong>Dimostrazione.</strong> Per dimostrarla, sommiamo membro a membro <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mi>a</mi><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> e −|b| ≤ b ≤ |b|. Otteniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mo>(</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>+</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>)</mo><mo>≤</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>+</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Sia a + b sia il suo opposto sono quindi minori o uguali a <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> + |b|. Per definizione, |a + b| coincide con uno dei due."
      },
      {
        "html": "<strong>Disuguaglianza triangolare inversa.</strong> Il valore assoluto della differenza tra <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> e |b| è al più |a − b|: <strong><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math></strong>.<br><br>Scriviamo a = (a − b) + b. La disuguaglianza triangolare dà <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>+</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>, quindi <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Scambiando a e b troviamo anche <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Le due disuguaglianze danno la proprietà."
      }
    ]
  }
] : [
  {
    "title": "Definizione di valore assoluto",
    "steps": [
      {
        "html": "Il <strong>valore assoluto</strong> di un numero reale <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi></mrow></math> si indica con <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> ed è definito da:<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" class=\"rm-absolute-definition\" aria-label=\"Il valore assoluto di a è a se a è maggiore o uguale a zero, meno a se a è minore di zero\"><mrow><mrow><mo fence=\"true\" lspace=\"0\" rspace=\"0.08em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.08em\" rspace=\"0\">|</mo></mrow><mo>=</mo><mrow><mo fence=\"true\" stretchy=\"true\">{</mo><mtable columnalign=\"left left\" columnspacing=\"1.4em\" rowspacing=\"0.6em\"><mtr><mtd><mi>a</mi></mtd><mtd><mtext>se</mtext><mspace width=\"0.35em\"/><mi>a</mi><mo>≥</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>−</mo><mi>a</mi></mtd><mtd><mtext>se</mtext><mspace width=\"0.35em\"/><mi>a</mi><mo>&lt;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math><br>Nel secondo caso <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mi>a</mi></mrow></math> è l’opposto di <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi></mrow></math>: poiché <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, il risultato è positivo."
      },
      {
        "html": "<strong>Esempi.</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mn>7</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mn>7</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mn>7</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo>−</mo><mo>(</mo><mo>−</mo><mn>7</mn><mo>)</mo><mo>=</mo><mn>7</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mn>0</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mn>0</mn></mrow></math>.<br>Il numero o l’espressione racchiusi tra le barre si chiamano <strong>argomento</strong> del valore assoluto."
      }
    ]
  },
  {
    "title": "Il segno dell’argomento e l’ordine dei calcoli",
    "steps": [
      {
        "html": "In <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> guardiamo il segno dell’intera espressione <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow></math>. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>≥</mo><mn>3</mn></mrow></math>, il valore assoluto vale <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow></math>. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>&lt;</mo><mn>3</mn></mrow></math>, vale <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mo>(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo>)</mo><mo>=</mo><mn>3</mn><mo>−</mo><mi>x</mi></mrow></math>.<br><br>Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, l’argomento vale −2. Applichiamo il secondo caso e otteniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mn>1</mn><mo>−</mo><mn>3</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mn>3</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow></math>."
      },
      {
        "html": "<strong>Le barre raggruppano l’argomento.</strong> Prima si calcola l’argomento tra le barre, poi si applica il valore assoluto. In <strong>2 − |3 − 7|</strong>, calcoliamo 3 − 7 = −4, poi |−4| = 4. Infine eseguiamo la sottrazione esterna e otteniamo −2.<br><br>In <strong>−|−3|<sup>2</sup></strong> calcoliamo |−3| = 3, poi eleviamo 3 al quadrato e infine applichiamo il segno meno esterno. Il risultato è −9. Se scriviamo <strong>(−|−3|)<sup>2</sup></strong>, le parentesi includono il segno meno nella base e il risultato è 9."
      }
    ]
  },
  {
    "title": "Le prime proprietà",
    "steps": [
      {
        "html": "<strong>Non negatività.</strong> Per ogni a ∈ ℝ si ha <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≥</mo><mn>0</mn></mrow></math>. Inoltre <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mn>0</mn></mrow></math> se e solo se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>.<br><br><strong>Simmetria.</strong> Due numeri opposti hanno lo stesso valore assoluto: <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Più in generale, <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> se e solo se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>=</mo><mi>b</mi></mrow></math> oppure <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>=</mo><mo>−</mo><mi>b</mi></mrow></math>."
      },
      {
        "html": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> = max{a, −a}. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>≥</mo><mn>0</mn></mrow></math> il maggiore è a, mentre se <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> è −a. Di conseguenza, a e −a sono entrambi minori o uguali a <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Possiamo scrivere <strong><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mi>a</mi><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math></strong>.<br><br><strong>Applicazione ripetuta.</strong> Poiché <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> è già non negativo, <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. In un’espressione come <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mn>3</mn><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>, invece, l’argomento esterno è <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mn>3</mn></mrow></math> e il suo segno dipende da a."
      }
    ]
  },
  {
    "title": "Prodotto, quoziente e potenza",
    "steps": [
      {
        "html": "<strong>Prodotto.</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>·</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Per esempio, |(−2) · 5| = 10 e |−2| · |5| = 10.<br><br><strong>Quoziente.</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>/</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>=</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>/</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>, purché <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mi>b</mi><mo>≠</mo><mn>0</mn></mrow></math>."
      },
      {
        "html": "<strong>Potenza.</strong> Per ogni intero n ≥ 1, applicando la proprietà del prodotto si ottiene |a<sup>n</sup>| = <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math><sup>n</sup>. In particolare, a<sup>2</sup> = <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math><sup>2</sup>."
      }
    ]
  },
  {
    "title": "Le disuguaglianze del valore assoluto",
    "steps": [
      {
        "html": "<strong>Disuguaglianza triangolare.</strong> Il valore assoluto di una somma è al più la somma dei valori assoluti: <strong><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>+</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math></strong>.<br><br>Per esempio, |5 + (−3)| = 2, mentre |5| + |−3| = 8. Gli addendi si compensano in parte. Si ha uguaglianza quando hanno lo stesso segno oppure almeno uno è zero."
      },
      {
        "html": "<strong>Dimostrazione.</strong> Per dimostrarla, sommiamo membro a membro <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mi>a</mi><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> e −|b| ≤ b ≤ |b|. Otteniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>−</mo><mo>(</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>+</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>)</mo><mo>≤</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>+</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Sia a + b sia il suo opposto sono quindi minori o uguali a <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> + |b|. Per definizione, |a + b| coincide con uno dei due."
      },
      {
        "html": "<strong>Disuguaglianza triangolare inversa.</strong> Il valore assoluto della differenza tra <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math> e |b| è al più |a − b|: <strong><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math></strong>.<br><br>Scriviamo a = (a − b) + b. La disuguaglianza triangolare dà <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>+</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>, quindi <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Scambiando a e b troviamo anche <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>−</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mo>≤</mo><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo fence=\"true\" lspace=\"0.06em\" rspace=\"0.06em\">|</mo></mrow></math>. Le due disuguaglianze danno la proprietà."
      }
    ]
  }
], question('Quanto vale |x − 3| per x = 1?', ['−2', '2', '4'], 1, 'L’argomento vale −2. Il valore assoluto restituisce il suo opposto, cioè 2.'));

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
      version: 6,
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
