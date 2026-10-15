/* Editorial adaptation of Root.pdf; original notes and revision log in docs/complex-numbers/. */
window.READER_LESSONS["algebra-numeri-complessi"] = {
  "title": "Introduzione ai numeri complessi",
  "subtitle": "Matematica · Primo anno universitario · Bozza da revisionare con il coautore",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "oltre-reali",
      "title": "Oltre i numeri reali",
      "cards": [
        {
          "title": "Un’equazione senza soluzioni reali",
          "stepMode": "cumulative",
          "steps": [
            {
              "title": "La domanda di partenza",
              "html": "Cerchiamo le soluzioni di <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>0</mn><mo>&#x0002E;</mo></mrow></math></span> Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> è reale, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02265;</mo><mn>0</mn></mrow></math>: il primo membro è almeno 1 e non può essere zero. <strong>L’equazione non ha soluzioni in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi mathvariant=\"double-struck\">R</mi></mrow></math></strong>."
            },
            {
              "title": "Cambiare l’insieme in cui cerchiamo",
              "html": "Questo non impedisce di ampliare il nostro insieme di numeri. Cerchiamo un sistema che contenga i reali e nel quale esista anche un numero il cui quadrato sia <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></math>. È il punto di partenza dei <strong>numeri complessi</strong>."
            }
          ]
        },
        {
          "title": "L’unità immaginaria",
          "stepMode": "cumulative",
          "steps": [
            {
              "title": "La nuova regola",
              "html": "Introduciamo l’<button type=\"button\" class=\"rm-keyword\" data-term=\"cx-unita\">unità immaginaria</button> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>i</mi></mrow></math>, caratterizzata dalla relazione <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>i</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002E;</mo></mrow></math></span> Nei calcoli useremo le usuali regole algebriche, insieme a questa nuova relazione."
            },
            {
              "title": "Due soluzioni",
              "html": "Il quadrato di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>i</mi></mrow></math> è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></math>, ma lo è anche quello di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mi>i</mi></mrow></math>: <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mi>i</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><msup><mi>i</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn><mo>&#x0002E;</mo></mrow></math></span> Perciò <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>i</mi></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mi>i</mi></mrow></math> risolvono entrambe l’equazione <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>z</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>0</mn></mrow></math>. Usiamo la lettera <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi></mrow></math> per un’incognita che può essere complessa."
            }
          ]
        },
        {
          "title": "Che cosa guadagniamo con questo ampliamento?",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "Nei complessi vale il <button type=\"button\" class=\"rm-keyword\" data-term=\"cx-tfa\">teorema fondamentale dell’algebra</button>: <strong>ogni polinomio non costante a coefficienti complessi ha almeno una radice complessa</strong>. Di conseguenza, un polinomio di grado <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math> ha esattamente <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>n</mi></mrow></math> radici, <strong>contate con la loro molteplicità</strong>. Non devono essere tutte distinte. Non dimostriamo qui il teorema: ci dice perché questo ampliamento è così importante."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Perché x² + 1 = 0 non ha soluzioni reali?",
            "options": [
              "Perché il quadrato di un reale è sempre non negativo.",
              "Perché un’equazione di secondo grado non può avere termine noto positivo.",
              "Perché zero non è un numero reale.",
              "Perché x² vale sempre 1."
            ],
            "answer": 0,
            "feedback": "x² ≥ 0, quindi x² + 1 ≥ 1.",
            "feedbackByOption": [
              "x² ≥ 0, quindi x² + 1 ≥ 1.",
              "Un termine noto positivo non basta: x² − 3x + 2 = 0 ha soluzioni reali.",
              "Zero è reale, ma non risolve questa equazione.",
              "Il quadrato dipende da x; ciò che conta è che non sia negativo."
            ]
          },
          {
            "question": "Quale relazione caratterizza l’unità immaginaria i?",
            "options": [
              "i² = 1",
              "i = −1",
              "i² = −1",
              "i² = 0"
            ],
            "answer": 2,
            "feedback": "È la regola che useremo nei calcoli complessi.",
            "feedbackByOption": [
              "Il quadrato di i non è 1.",
              "−1 è reale e il suo quadrato è 1.",
              "È la regola che useremo nei calcoli complessi.",
              "Un quadrato nullo non darebbe una soluzione di z² + 1 = 0."
            ]
          },
          {
            "question": "Se i² = −1, quanto vale (−i)²?",
            "options": [
              "1",
              "−1",
              "−i",
              "i"
            ],
            "answer": 1,
            "feedback": "(−i)² = (−1)²i² = −1.",
            "feedbackByOption": [
              "Il fattore (−1)² è 1, ma resta da moltiplicarlo per i² = −1.",
              "(−i)² = (−1)²i² = −1.",
              "Elevare al quadrato significa moltiplicare −i per sé stesso.",
              "Il risultato è un numero reale: −1."
            ]
          }
        ]
      }
    },
    {
      "id": "forma-algebrica",
      "title": "La forma algebrica e il piano complesso",
      "cards": [
        {
          "title": "Due numeri reali in un numero complesso",
          "stepMode": "cumulative",
          "steps": [
            {
              "title": "La scrittura",
              "html": "Un numero complesso si scrive in <button type=\"button\" class=\"rm-keyword\" data-term=\"cx-forma\">forma algebrica</button> come <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>x</mi><mo>&#x0002C;</mo><mi>y</mi><mo>&#x02208;</mo><mi mathvariant=\"double-struck\">R</mi><mo>&#x0002E;</mo></mrow></math></span> La coppia di numeri reali <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002C;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> lo individua in modo univoco. L’insieme di tutti questi numeri si indica con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi mathvariant=\"double-struck\">C</mi></mrow></math>."
            },
            {
              "title": "Parte reale e parte immaginaria",
              "html": "Chiamiamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mo>Re</mo><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> <strong>parte reale</strong> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mo>Im</mo><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> <strong>parte immaginaria</strong>. Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mn>3</mn><mo>&#x0002B;</mo><mn>2</mn><mi>i</mi></mrow></math>, <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>Re</mo><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>3</mn><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo>Im</mo><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mo>&#x0002E;</mo></mrow></math></span> <strong>La parte immaginaria è 2, non <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>i</mi></mrow></math></strong>: è il coefficiente reale di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>i</mi></mrow></math>."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/complex/piano.svg",
            "alt": "Il numero 3+2i nel punto (3,2), con le proiezioni sui due assi.",
            "width": 560,
            "height": 440
          }
        },
        {
          "title": "Quando due complessi sono uguali?",
          "stepMode": "cumulative",
          "steps": [
            {
              "title": "Confrontare le due parti",
              "html": "Due numeri complessi sono uguali se e solo se hanno la stessa parte reale e la stessa parte immaginaria: <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi><mo>&#x0003D;</mo><mi>u</mi><mo>&#x0002B;</mo><mi>i</mi><mi>v</mi><mspace width=\"1em\" /><mi>&#x027FA;</mi><mspace width=\"1em\" /><mi>x</mi><mo>&#x0003D;</mo><mi>u</mi><mtext>&#x000A0;</mtext><mtext>e</mtext><mtext>&#x000A0;</mtext><mi>y</mi><mo>&#x0003D;</mo><mi>v</mi><mo>&#x0002E;</mo></mrow></math></span> In particolare, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> richiede <strong>sia <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> sia <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math></strong>."
            },
            {
              "title": "I reali sono ancora qui",
              "html": "Ponendo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> ritroviamo i numeri reali: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn><mo>&#x0003D;</mo><mn>4</mn><mo>&#x0002B;</mo><mn>0</mn><mi>i</mi></mrow></math>. Ponendo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> otteniamo numeri immaginari puri, come <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>i</mi><mo>&#x0003D;</mo><mn>0</mn><mo>&#x0002B;</mo><mn>2</mn><mi>i</mi></mrow></math>. L’ampliamento conserva quindi i reali: <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi mathvariant=\"double-struck\">R</mi><mo>&#x02282;</mo><mi mathvariant=\"double-struck\">C</mi><mo>&#x0002E;</mo></mrow></math></span>"
            }
          ]
        },
        {
          "title": "Il piano di Gauss",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "Possiamo rappresentare <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi></mrow></math> con il punto di coordinate <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002C;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. L’asse orizzontale è l’<strong>asse reale</strong>; quello verticale è l’<strong>asse immaginario</strong>. Il numero <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002B;</mo><mn>2</mn><mi>i</mi></mrow></math> corrisponde al punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mo>&#x0002C;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. Questa rappresentazione si chiama <button type=\"button\" class=\"rm-keyword\" data-term=\"cx-piano\">piano complesso o piano di Gauss</button>. La geometria ci aiuterà a leggere modulo, coniugato e argomento."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/complex/piano.svg",
            "alt": "Il numero 3+2i nel punto (3,2), con le proiezioni sui due assi.",
            "width": 560,
            "height": 440
          }
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Per z = 5 − 3i, quanto valgono Re(z) e Im(z)?",
            "options": [
              "5 e −3i",
              "5 e −3",
              "−3 e 5",
              "5 e 3"
            ],
            "answer": 1,
            "feedback": "La parte reale è 5 e quella immaginaria è −3.",
            "feedbackByOption": [
              "Im(z) è il coefficiente reale di i, quindi −3.",
              "La parte reale è 5 e quella immaginaria è −3.",
              "Le due parti non si scambiano.",
              "Il segno meno fa parte del coefficiente di i."
            ]
          },
          {
            "question": "Quale punto rappresenta il numero −2 + 4i nel piano complesso?",
            "options": [
              "(4, −2)",
              "(−2, 4i)",
              "(−2, 4)",
              "(2, 4)"
            ],
            "answer": 2,
            "feedback": "Parte reale sull’asse orizzontale, parte immaginaria su quello verticale.",
            "feedbackByOption": [
              "La prima coordinata è la parte reale.",
              "Le coordinate sono entrambe reali: la seconda è 4.",
              "Parte reale sull’asse orizzontale, parte immaginaria su quello verticale.",
              "La parte reale è negativa."
            ]
          },
          {
            "question": "Quando x + iy = 0, con x e y reali?",
            "options": [
              "Quando x = 0, qualunque sia y.",
              "Quando y = 0, qualunque sia x.",
              "Quando x + y = 0.",
              "Quando x = 0 e y = 0."
            ],
            "answer": 3,
            "feedback": "Devono annullarsi entrambe le parti.",
            "feedbackByOption": [
              "Se y non è zero rimane il termine iy.",
              "Se x non è zero il numero non è zero.",
              "Le due parti non si possono cancellare tra loro come due termini reali.",
              "Devono annullarsi entrambe le parti."
            ]
          }
        ]
      }
    },
    {
      "id": "coniugato-modulo",
      "title": "Coniugato e modulo",
      "cards": [
        {
          "title": "Riflettere rispetto all’asse reale",
          "stepMode": "cumulative",
          "steps": [
            {
              "title": "Il coniugato",
              "html": "Il <button type=\"button\" class=\"rm-keyword\" data-term=\"cx-coniugato\">coniugato</button> di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi></mrow></math> è <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>z</mi><mo>&#x0002A;</mo></msup><mo>&#x0003D;</mo><mi>x</mi><mo>&#x02212;</mo><mi>i</mi><mi>y</mi><mo>&#x0002E;</mo></mrow></math></span> La parte reale resta uguale e la parte immaginaria cambia segno. Per esempio, il coniugato di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002B;</mo><mn>2</mn><mi>i</mi></mrow></math> è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x02212;</mo><mn>2</mn><mi>i</mi></mrow></math>. Si usa anche la notazione <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">&#x02015;</mo></mover></mrow></math>."
            },
            {
              "title": "Il significato geometrico",
              "html": "Nel piano i punti <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002C;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002C;</mo><mo>&#x02212;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> sono simmetrici rispetto all’asse reale. Il coniugato <strong>non è in generale l’opposto</strong>: l’opposto di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002B;</mo><mn>2</mn><mi>i</mi></mrow></math> è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>3</mn><mo>&#x02212;</mo><mn>2</mn><mi>i</mi></mrow></math>, mentre il coniugato è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x02212;</mo><mn>2</mn><mi>i</mi></mrow></math>."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/complex/coniugato.svg",
            "alt": "I punti 3+2i e 3−2i simmetrici rispetto all’asse reale.",
            "width": 560,
            "height": 440
          }
        },
        {
          "title": "La distanza dall’origine",
          "stepMode": "cumulative",
          "steps": [
            {
              "title": "Il modulo",
              "html": "Il <button type=\"button\" class=\"rm-keyword\" data-term=\"cx-modulo\">modulo</button> di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi></mrow></math> è la distanza del suo punto dall’origine. Per il teorema di Pitagora, <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>z</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>&#x0002E;</mo></mrow></math></span> Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mn>3</mn><mo>&#x0002B;</mo><mn>2</mn><mi>i</mi></mrow></math> otteniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>z</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><msqrt><mrow><msup><mn>3</mn><mn>2</mn></msup><mo>&#x0002B;</mo><msup><mn>2</mn><mn>2</mn></msup></mrow></msqrt><mo>&#x0003D;</mo><msqrt><mrow><mn>13</mn></mrow></msqrt></mrow></math>. Si elevano al quadrato <strong>le parti reali <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi></mrow></math></strong>, non i termini <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>i</mi><mi>y</mi></mrow></math>."
            },
            {
              "title": "Un prodotto utile",
              "html": "Moltiplichiamo un numero per il suo coniugato: <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>z</mi><msup><mi>z</mi><mo>&#x0002A;</mo></msup><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mi>i</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><msup><mi>i</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0002E;</mo></mrow></math></span> I termini misti si cancellano e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>i</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math>. Perciò <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>z</mi><msup><mi>z</mi><mo>&#x0002A;</mo></msup><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>z</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mn>2</mn></msup><mo>&#x0002C;</mo><mspace width=\"2em\" /><mo stretchy=\"false\">&#x0007C;</mo><mi>z</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><msqrt><mrow><mi>z</mi><msup><mi>z</mi><mo>&#x0002A;</mo></msup></mrow></msqrt><mo>&#x0002E;</mo></mrow></math></span> Il prodotto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><msup><mi>z</mi><mo>&#x0002A;</mo></msup></mrow></math> è sempre reale e non negativo."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/complex/modulo.svg",
            "alt": "Il triangolo rettangolo di cateti 3 e 2 e ipotenusa √13.",
            "width": 560,
            "height": 440
          }
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è il coniugato di −2 + 5i?",
            "options": [
              "2 − 5i",
              "−2 − 5i",
              "2 + 5i",
              "−2 + 5i"
            ],
            "answer": 1,
            "feedback": "La parte reale resta −2; quella immaginaria diventa −5.",
            "feedbackByOption": [
              "Questo è l’opposto: hai cambiato anche la parte reale.",
              "La parte reale resta −2; quella immaginaria diventa −5.",
              "Nel coniugato cambia solo il segno della parte immaginaria.",
              "La parte immaginaria non è nulla: il coniugato è diverso."
            ]
          },
          {
            "question": "Quanto vale |3 + 2i|?",
            "options": [
              "√5",
              "13",
              "√13",
              "5"
            ],
            "answer": 2,
            "feedback": "Per Pitagora: √(9 + 4) = √13.",
            "feedbackByOption": [
              "Il modulo usa 3² + 2², non 3² + (2i)².",
              "13 è il quadrato del modulo.",
              "Per Pitagora: √(9 + 4) = √13.",
              "Le distanze lungo i due assi non si sommano direttamente."
            ]
          },
          {
            "question": "Che cosa rappresenta il prodotto zz*?",
            "options": [
              "Il modulo |z|.",
              "L’opposto −z.",
              "Un numero immaginario puro.",
              "Il quadrato del modulo |z|²."
            ],
            "answer": 3,
            "feedback": "zz* = x² + y² = |z|².",
            "feedbackByOption": [
              "Per avere il modulo devi estrarre la radice quadrata non negativa.",
              "Il coniugato non coincide in generale con l’opposto.",
              "I termini immaginari si cancellano.",
              "zz* = x² + y² = |z|²."
            ]
          }
        ]
      }
    },
    {
      "id": "forma-polare",
      "title": "Modulo, argomento e forma polare",
      "cards": [
        {
          "title": "Distanza e direzione",
          "stepMode": "cumulative",
          "steps": [
            {
              "title": "L’argomento",
              "html": "Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x02260;</mo><mn>0</mn></mrow></math>, oltre alla distanza <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003C1;</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>z</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></math>, possiamo indicare la direzione con un <button type=\"button\" class=\"rm-keyword\" data-term=\"cx-argomento\">argomento</button> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B8;</mi></mrow></math>: un angolo orientato dall’asse reale positivo verso il segmento che unisce l’origine al punto. Lo misuriamo in radianti."
            },
            {
              "title": "Uno stesso punto, più angoli",
              "html": "Un giro completo non cambia direzione: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B8;</mi></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B8;</mi><mo>&#x0002B;</mo><mn>2</mn><mi>k</mi><mi>&#x003C0;</mi></mrow></math>, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi><mo>&#x02208;</mo><mi mathvariant=\"double-struck\">Z</mi></mrow></math>, sono argomenti dello stesso numero. Se serve un unico valore, possiamo scegliere quello in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mo>&#x02212;</mo><mi>&#x003C0;</mi><mo>&#x0002C;</mo><mi>&#x003C0;</mi><mo stretchy=\"false\">]</mo></mrow></math>, detto <strong>argomento principale</strong>. Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> il modulo è zero, ma <strong>l’argomento non è definito</strong>."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/complex/polare.svg",
            "alt": "La rappresentazione di 3+2i con modulo √13 e argomento θ.",
            "width": 560,
            "height": 440
          }
        },
        {
          "title": "Il rapporto non basta",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Dalle coordinate all’angolo",
              "html": "Dal triangolo nel piano otteniamo <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mi>&#x003C1;</mi><mi>cos</mi><mi>&#x003B8;</mi><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>y</mi><mo>&#x0003D;</mo><mi>&#x003C1;</mi><mi>sin</mi><mi>&#x003B8;</mi><mo>&#x0002E;</mo></mrow></math></span> Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x02260;</mo><mn>0</mn></mrow></math>, allora <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>tan</mi><mi>&#x003B8;</mi><mo>&#x0003D;</mo><mi>y</mi><mo>&#x0002F;</mo><mi>x</mi></mrow></math>. Ma la tangente ha periodo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003C0;</mi></mrow></math>: il rapporto da solo non distingue direzioni opposte."
            },
            {
              "title": "Controllare il quadrante",
              "html": "Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo>&#x0002B;</mo><mn>2</mn><mi>i</mi></mrow></math>, il punto è nel primo quadrante e possiamo scegliere <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B8;</mi><mo>&#x0003D;</mo><mi>arctan</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>3</mn><mo>&#x02212;</mo><mn>2</mn><mi>i</mi></mrow></math> il rapporto è ancora <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn></mrow></math>, ma il punto è nel terzo quadrante: un argomento principale è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mi>&#x003C0;</mi><mo>&#x0002B;</mo><mi>arctan</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x0002F;</mo><mn>3</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. <strong>Prima individua il quadrante, poi scegli l’angolo</strong>. Sull’asse immaginario non dividere per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>: per esempio <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>i</mi></mrow></math> ha argomento <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003C0;</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></math>."
            }
          ]
        },
        {
          "title": "Due forme dello stesso numero",
          "stepMode": "cumulative",
          "steps": [
            {
              "title": "La forma trigonometrica",
              "html": "Sostituendo le coordinate in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi></mrow></math>, otteniamo la <button type=\"button\" class=\"rm-keyword\" data-term=\"cx-polare\">forma polare</button>: <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>&#x003C1;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>cos</mi><mi>&#x003B8;</mi><mo>&#x0002B;</mo><mi>i</mi><mi>sin</mi><mi>&#x003B8;</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002E;</mo></mrow></math></span> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003C1;</mi></mrow></math> descrive la distanza dall’origine e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B8;</mi></mrow></math> la direzione. Non è un altro numero: è lo stesso numero descritto con altre coordinate."
            },
            {
              "title": "La forma esponenziale",
              "html": "La <button type=\"button\" class=\"rm-keyword\" data-term=\"cx-eulero\">formula di Eulero</button> <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>&#x003B8;</mi></mrow></msup><mo>&#x0003D;</mo><mi>cos</mi><mi>&#x003B8;</mi><mo>&#x0002B;</mo><mi>i</mi><mi>sin</mi><mi>&#x003B8;</mi></mrow></math></span> permette di scrivere <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>&#x003C1;</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>&#x003B8;</mi></mrow></msup></mrow></math>. Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003B8;</mi><mo>&#x0003D;</mo><mi>&#x003C0;</mi></mrow></math> dà <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>&#x003C0;</mi></mrow></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math>. Useremo anche la regola <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>&#x003C1;</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>&#x003B8;</mi></mrow></msup><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x0003D;</mo><msup><mi>&#x003C1;</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mn>2</mn><mi>i</mi><mi>&#x003B8;</mi></mrow></msup><mi>:</mi></mrow></math></span> elevando al quadrato, il modulo si eleva al quadrato e l’argomento raddoppia."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/complex/polare.svg",
            "alt": "La rappresentazione di 3+2i con modulo √13 e argomento θ.",
            "width": 560,
            "height": 440
          }
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale affermazione sugli argomenti di un numero complesso non nullo è corretta?",
            "options": [
              "θ e θ + π indicano sempre lo stesso numero.",
              "θ e θ + 2π indicano la stessa direzione.",
              "Ogni numero ha un solo argomento, senza convenzioni.",
              "L’argomento è sempre positivo."
            ],
            "answer": 1,
            "feedback": "Un giro completo non cambia la direzione.",
            "feedbackByOption": [
              "Mezzo giro porta nella direzione opposta.",
              "Un giro completo non cambia la direzione.",
              "Per scegliere un solo valore serve una convenzione.",
              "Gli angoli orientati possono anche essere negativi."
            ]
          },
          {
            "question": "Perché arctan(y/x) da sola può dare l’argomento sbagliato?",
            "options": [
              "Perché il modulo è sempre zero.",
              "Perché seno e coseno non valgono nei complessi.",
              "Perché il rapporto non distingue due quadranti opposti.",
              "Perché la parte reale deve essere positiva per definizione."
            ],
            "answer": 2,
            "feedback": "Punti opposti hanno lo stesso rapporto y/x: devi controllare i segni delle coordinate.",
            "feedbackByOption": [
              "Per z non nullo il modulo è positivo.",
              "Le coordinate usano seno e coseno di un angolo reale.",
              "Punti opposti hanno lo stesso rapporto y/x: devi controllare i segni delle coordinate.",
              "La parte reale può essere positiva, nulla o negativa."
            ]
          },
          {
            "question": "Quale descrizione è corretta per z = 0?",
            "options": [
              "Modulo 0 e argomento non definito.",
              "Modulo 1 e argomento 0.",
              "Modulo 0 e unico argomento 0.",
              "Nessun modulo e argomento π."
            ],
            "answer": 0,
            "feedback": "Il punto coincide con l’origine e non individua una direzione.",
            "feedbackByOption": [
              "Il punto coincide con l’origine e non individua una direzione.",
              "La distanza dell’origine da sé stessa è zero.",
              "Si può scrivere 0·e^(iθ) per ogni θ, ma non si ricava una direzione propria dello zero.",
              "Il modulo esiste: è zero."
            ]
          }
        ]
      }
    },
    {
      "id": "equazione",
      "title": "La stessa equazione, due strade",
      "cards": [
        {
          "title": "Risolvere in forma algebrica",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Separare le due parti",
              "html": "Torniamo a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>z</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>0</mn></mrow></math> e scriviamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi></mrow></math>, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0002C;</mo><mi>y</mi></mrow></math> reali: <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>i</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>0</mn><mo>&#x0002E;</mo></mrow></math></span> Uguagliare a zero un complesso significa annullare entrambe le parti: <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x0007B;</mo><mtable><mtr><mtd columnalign=\"left\"><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>0</mn><mo>&#x0002C;</mo></mtd></mtr><mtr><mtd columnalign=\"left\"><mn>2</mn><mi>x</mi><mi>y</mi><mo>&#x0003D;</mo><mn>0</mn><mo>&#x0002E;</mo></mtd></mtr></mtable></mrow></mrow></math></span>"
            },
            {
              "title": "Controllare entrambi i casi",
              "html": "Da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mi>y</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> segue <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> <strong>oppure</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, rimane <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, impossibile per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> reale. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, invece, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, quindi <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mi>&#x000B1;</mi><mn>1</mn></mrow></math>. Otteniamo <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>i</mi><mspace width=\"2em\" /><mtext>oppure</mtext><mspace width=\"2em\" /><mi>z</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>i</mi><mo>&#x0002E;</mo></mrow></math></span>"
            }
          ]
        },
        {
          "title": "Risolvere in forma polare",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il modulo",
              "html": "Dall’equazione <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>z</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math> sappiamo che <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x02260;</mo><mn>0</mn></mrow></math>. Scriviamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>&#x003C1;</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>&#x003B8;</mi></mrow></msup></mrow></math>, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003C1;</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math>. Il quadrato ha modulo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>&#x003C1;</mi><mn>2</mn></msup></mrow></math>; il numero <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></math> ha modulo 1. Quindi <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>&#x003C1;</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mn>1</mn><mspace width=\"1em\" /><mi>&#x027F9;</mi><mspace width=\"1em\" /><mi>&#x003C1;</mi><mo>&#x0003D;</mo><mn>1</mn><mo>&#x0002E;</mo></mrow></math></span> Il modulo non può essere negativo."
            },
            {
              "title": "Gli argomenti",
              "html": "Gli argomenti di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></math> sono <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003C0;</mi><mo>&#x0002B;</mo><mn>2</mn><mi>k</mi><mi>&#x003C0;</mi></mrow></math>. Poiché il quadrato raddoppia l’argomento, <span class=\"cx-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>2</mn><mi>&#x003B8;</mi><mo>&#x0003D;</mo><mi>&#x003C0;</mi><mo>&#x0002B;</mo><mn>2</mn><mi>k</mi><mi>&#x003C0;</mi><mspace width=\"1em\" /><mi>&#x027F9;</mi><mspace width=\"1em\" /><mi>&#x003B8;</mi><mo>&#x0003D;</mo><mfrac><mi>&#x003C0;</mi><mn>2</mn></mfrac><mo>&#x0002B;</mo><mi>k</mi><mi>&#x003C0;</mi><mo>&#x0002C;</mo><mspace width=\"2em\" /><mi>k</mi><mo>&#x02208;</mo><mi mathvariant=\"double-struck\">Z</mi><mo>&#x0002E;</mo></mrow></math></span> In un giro troviamo due direzioni: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003C0;</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mi>&#x003C0;</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></math>, che corrispondono a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>i</mi></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mi>i</mi></mrow></math>. Gli altri valori ripetono gli stessi due numeri."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/complex/radici.svg",
            "alt": "Le due radici i e −i sui punti opposti della circonferenza unitaria.",
            "width": 560,
            "height": 440
          }
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Se (x² − y² + 1) + i(2xy) = 0, quale sistema devi risolvere?",
            "options": [
              "Solo x² − y² + 1 = 0.",
              "Solo 2xy = 0.",
              "x² − y² + 1 = 0 e 2xy = 0.",
              "x² − y² + 1 = 2xy."
            ],
            "answer": 2,
            "feedback": "Un numero complesso è zero se e solo se entrambe le parti sono zero.",
            "feedbackByOption": [
              "Deve annullarsi anche la parte immaginaria.",
              "Deve annullarsi anche la parte reale.",
              "Un numero complesso è zero se e solo se entrambe le parti sono zero.",
              "Le due parti non devono essere uguali: devono essere entrambe nulle."
            ]
          },
          {
            "question": "Se z² = −1 e ρ = |z|, quanto vale ρ?",
            "options": [
              "−1",
              "±1",
              "0",
              "1"
            ],
            "answer": 3,
            "feedback": "ρ² = 1 e ρ > 0, quindi ρ = 1.",
            "feedbackByOption": [
              "Il modulo è non negativo.",
              "L’equazione ρ² = 1 ha due soluzioni reali, ma il modulo ammette solo quella positiva.",
              "Un quadrato nullo non può essere −1.",
              "ρ² = 1 e ρ > 0, quindi ρ = 1."
            ]
          },
          {
            "question": "Dalla relazione 2θ = π + 2kπ, quale espressione ottieni?",
            "options": [
              "θ = π/2 + kπ",
              "θ = π + kπ",
              "θ = π/2 + 2kπ",
              "θ = π/2, senza altri valori"
            ],
            "answer": 0,
            "feedback": "Dividendo tutto per 2 ottieni π/2 + kπ.",
            "feedbackByOption": [
              "Dividendo tutto per 2 ottieni π/2 + kπ.",
              "Anche il primo termine va diviso per 2.",
              "Il termine 2kπ diventa kπ: mantenere 2kπ perderebbe una radice.",
              "Devi conservare anche il termine che descrive la periodicità."
            ]
          }
        ]
      }
    },
    {
      "id": "pillole",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "Una mappa per orientarti",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<strong>Forma algebrica:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>i</mi><mi>y</mi></mrow></math>, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>i</mi><mn>2</mn></msup><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>Re</mo><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>x</mi></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>Im</mo><mo stretchy=\"false\">&#x00028;</mo><mi>z</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>y</mi></mrow></math>.<br><br><strong>Piano complesso:</strong> lo stesso numero è il punto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002C;</mo><mi>y</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.<br><br><strong>Coniugato e modulo:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>z</mi><mo>&#x0002A;</mo></msup><mo>&#x0003D;</mo><mi>x</mi><mo>&#x02212;</mo><mi>i</mi><mi>y</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>z</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003D;</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><msup><mi>z</mi><mo>&#x0002A;</mo></msup><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>z</mi><msup><mo stretchy=\"false\">&#x0007C;</mo><mn>2</mn></msup></mrow></math>.<br><br><strong>Forma polare:</strong> per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x02260;</mo><mn>0</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>z</mi><mo>&#x0003D;</mo><mi>&#x003C1;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>cos</mi><mi>&#x003B8;</mi><mo>&#x0002B;</mo><mi>i</mi><mi>sin</mi><mi>&#x003B8;</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>&#x003C1;</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>&#x003B8;</mi></mrow></msup></mrow></math>, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003C1;</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x0007C;</mo><mi>z</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></math>. L’argomento dipende dalla direzione e si ripete ogni <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>&#x003C0;</mi></mrow></math>.<br><br><strong>Equazioni:</strong> in forma algebrica confronta le due parti; in forma polare confronta modulo e argomenti, conservando tutti i casi."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale numero ha modulo 5 e coniugato 3 − 4i?",
            "options": [
              "−3 + 4i",
              "3 + 4i",
              "3 − 4i",
              "5i"
            ],
            "answer": 1,
            "feedback": "Il coniugato è 3 − 4i e il modulo è √(9 + 16) = 5.",
            "feedbackByOption": [
              "Il coniugato conserverebbe la parte reale −3.",
              "Il coniugato è 3 − 4i e il modulo è √(9 + 16) = 5.",
              "Il suo coniugato sarebbe 3 + 4i.",
              "Il modulo è 5, ma il coniugato sarebbe −5i."
            ]
          },
          {
            "question": "Quali sono le soluzioni di z² + 1 = 0?",
            "options": [
              "Solo i.",
              "1 e −1.",
              "i e −i.",
              "Nessuna, anche nei complessi."
            ],
            "answer": 2,
            "feedback": "Entrambe hanno quadrato −1.",
            "feedbackByOption": [
              "Anche −i ha quadrato −1.",
              "1 e −1 hanno quadrato 1.",
              "Entrambe hanno quadrato −1.",
              "L’equazione non ha radici reali, ma ha queste due radici complesse."
            ]
          },
          {
            "question": "Quale cambiamento di argomento lascia invariato un numero complesso di modulo fissato e positivo?",
            "options": [
              "Aggiungere π/2.",
              "Aggiungere π.",
              "Cambiare sempre il segno dell’angolo.",
              "Aggiungere 2π."
            ],
            "answer": 3,
            "feedback": "Un giro completo riporta alla stessa direzione.",
            "feedbackByOption": [
              "Un quarto di giro cambia direzione.",
              "Mezzo giro dà il punto opposto.",
              "Cambiare segno dà in generale il coniugato, non lo stesso numero.",
              "Un giro completo riporta alla stessa direzione."
            ]
          }
        ]
      }
    }
  ]
};
Object.assign(window.READER_GLOSSARY, {
  "cx-unita": {
    "title": "Unità immaginaria",
    "text": "Il numero complesso i, definito dalla relazione i² = −1. Con i e i numeri reali si scrivono tutti i complessi nella forma x + iy.",
    "kind": "Algebra · Numero complesso"
  },
  "cx-forma": {
    "title": "Forma algebrica di un numero complesso",
    "text": "La rappresentazione unica z = x + iy, con x e y reali. x è la parte reale, y la parte immaginaria; la parte immaginaria non comprende il fattore i.",
    "kind": "Algebra · Numero complesso"
  },
  "cx-piano": {
    "title": "Piano complesso",
    "text": "Il piano cartesiano nel quale z = x + iy è rappresentato dal punto (x,y). L’asse orizzontale è reale, quello verticale immaginario.",
    "kind": "Algebra · Numero complesso"
  },
  "cx-coniugato": {
    "title": "Coniugato",
    "text": "Dato z = x + iy con x e y reali, il coniugato è x − iy. Si indica con z* o con una barra sopra z; nel piano è il simmetrico rispetto all’asse reale.",
    "kind": "Algebra · Numero complesso"
  },
  "cx-modulo": {
    "title": "Modulo di un numero complesso",
    "text": "Per z = x + iy, il modulo |z| = √(x²+y²) è la distanza dall’origine del punto che lo rappresenta. È reale, non negativo e nullo soltanto per z = 0.",
    "kind": "Algebra · Numero complesso"
  },
  "cx-argomento": {
    "title": "Argomento di un numero complesso",
    "text": "Per z non nullo, ogni angolo orientato dall’asse reale positivo alla direzione del punto che rappresenta z. Due argomenti dello stesso numero differiscono per un multiplo intero di 2π. L’argomento dello zero non è definito.",
    "kind": "Algebra · Numero complesso"
  },
  "cx-polare": {
    "title": "Forma polare",
    "text": "Per un numero complesso non nullo, la rappresentazione z = ρ(cos θ + i sin θ), dove ρ = |z| > 0 e θ è un suo argomento. Si può scrivere anche ρe^(iθ).",
    "kind": "Algebra · Numero complesso"
  },
  "cx-eulero": {
    "title": "Formula di Eulero",
    "text": "Per ogni angolo reale θ, espresso in radianti, e^(iθ) = cos θ + i sin θ. Collega la forma trigonometrica a quella esponenziale dei numeri complessi.",
    "kind": "Algebra · Numero complesso"
  },
  "cx-tfa": {
    "title": "Teorema fondamentale dell’algebra",
    "text": "Ogni polinomio non costante a coefficienti complessi ammette almeno una radice in C. Ne segue che un polinomio di grado n ha esattamente n radici complesse contate con la loro molteplicità, non necessariamente distinte.",
    "kind": "Algebra · Numero complesso"
  }
});
