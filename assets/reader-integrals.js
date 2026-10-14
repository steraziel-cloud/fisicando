/* Original GatitoMath explanations and examples; source scope: docs/integrals-path.md. */
window.READER_LESSONS["integrali-immediati"] = {
  "title": "Primitive e integrali immediati",
  "subtitle": "Matematica · Quinta liceo scientifico e primo anno universitario · Bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "primitive",
      "title": "Risalire dalla derivata alla funzione",
      "cards": [
        {
          "title": "Che cosa stiamo cercando?",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il problema inverso",
              "html": "Sai derivare <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup></mrow></math> e ottenere <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. Ora invertiamo la domanda: <strong>quale funzione ha derivata <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>?</strong> Una risposta è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup></mrow></math>. Questa funzione è una <button type=\"button\" class=\"rm-keyword\" data-term=\"int-primitiva\">primitiva</button>.<br><br>Per seguire il percorso servono le derivate fondamentali, la derivata della funzione composta e le operazioni con polinomi e frazioni."
            },
            {
              "title": "La definizione",
              "html": "Su un intervallo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>I</mi></mrow></math>, una funzione <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>F</mi></mrow></math> è una <strong>primitiva di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math></strong> se è derivabile e vale <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>F</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> per ogni <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> dell’intervallo. <strong>La verifica si fa derivando il risultato.</strong>"
            }
          ]
        },
        {
          "title": "Perché compare una costante?",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Non c’è una sola risposta",
              "html": "Anche <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mn>5</mn></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>&#x02212;</mo><mn>2</mn></mrow></math> hanno derivata <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. La derivata di una costante è zero: non possiamo ricostruirla dalla sola derivata.<br><br>Su uno stesso intervallo, tutte le primitive differiscono per una costante. Scriviamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>C</mi><mo>&#x02208;</mo><mi>&#x0211D;</mi></mrow></math>."
            },
            {
              "title": "Leggere i simboli",
              "html": "<button type=\"button\" class=\"rm-keyword\" data-term=\"int-indefinito\">L’integrale indefinito</button> indica la famiglia di tutte le primitive. <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math> è la <strong>funzione integranda</strong>; <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> indica che integriamo rispetto a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>.<br><br>Con due estremi, come in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msubsup><mo>&#x0222B;</mo><mn>0</mn><mn>1</mn></msubsup><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math>, si parla invece di <strong>integrale definito</strong>: il risultato è un numero. Lo studieremo nell’ultima lezione."
            },
            {
              "title": "Un dato iniziale sceglie una primitiva",
              "html": "Se conosciamo anche <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mn>0</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>7</mn></mrow></math>, dalla famiglia <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002B;</mo><mi>C</mi></mrow></math> otteniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>C</mi><mo>&#x0003D;</mo><mn>7</mn></mrow></math>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale condizione definisce una primitiva F di f su un intervallo?",
            "options": [
              "F′(x) = f(x).",
              "f′(x) = F(x).",
              "F(x) = f(x).",
              "F′(x) = 0 per ogni funzione f."
            ],
            "answer": 0,
            "feedback": "Devi derivare F e ritrovare f.",
            "feedbackByOption": [
              "Devi derivare F e ritrovare f.",
              "Controlla questo passaggio: Devi derivare F e ritrovare f.",
              "Controlla questo passaggio: Devi derivare F e ritrovare f.",
              "Controlla questo passaggio: Devi derivare F e ritrovare f."
            ]
          },
          {
            "question": "Perché nell’integrale indefinito aggiungiamo C?",
            "options": [
              "Per cambiare la variabile.",
              "Perché la derivata di una costante è zero.",
              "Per indicare un errore di misura.",
              "Perché C è sempre uguale a 1."
            ],
            "answer": 1,
            "feedback": "La derivazione perde l’informazione sulla costante additiva.",
            "feedbackByOption": [
              "Controlla questo passaggio: La derivazione perde l’informazione sulla costante additiva.",
              "La derivazione perde l’informazione sulla costante additiva.",
              "Controlla questo passaggio: La derivazione perde l’informazione sulla costante additiva.",
              "Controlla questo passaggio: La derivazione perde l’informazione sulla costante additiva."
            ]
          },
          {
            "question": "Una primitiva di 2x è F(x) = x² + C. Se F(0) = 4, quanto vale C?",
            "options": [
              "0",
              "2",
              "4",
              "Non si può determinare."
            ],
            "answer": 2,
            "feedback": "Sostituisci x = 0: F(0) = C = 4.",
            "feedbackByOption": [
              "Controlla questo passaggio: Sostituisci x = 0: F(0) = C = 4.",
              "Controlla questo passaggio: Sostituisci x = 0: F(0) = C = 4.",
              "Sostituisci x = 0: F(0) = C = 4.",
              "Controlla questo passaggio: Sostituisci x = 0: F(0) = C = 4."
            ]
          }
        ]
      }
    },
    {
      "id": "potenze",
      "title": "Potenze, radici e il caso 1/x",
      "cards": [
        {
          "title": "La regola delle potenze",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Aumenta l’esponente, poi dividi",
              "html": "Per una potenza di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><msup><mi>x</mi><mi>p</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>x</mi><mrow><mi>p</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>p</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi><mspace width=\"2em\" /><mo stretchy=\"false\">&#x00028;</mo><mi>p</mi><mo>&#x02260;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> La formula vale sugli intervalli in cui la potenza reale è definita e la primitiva è derivabile. Per esponenti reali qualsiasi possiamo lavorare su <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math>."
            },
            {
              "title": "Il denominatore ha un motivo",
              "html": "Per esempio, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><msup><mi>x</mi><mn>4</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>x</mi><mn>5</mn></msup></mrow><mrow><mn>5</mn></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Derivando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>5</mn></msup><mo>&#x0002F;</mo><mn>5</mn></mrow></math>, il fattore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>5</mn></mrow></math> si semplifica e rimane <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>4</mn></msup></mrow></math>. Senza la divisione per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>5</mn></mrow></math> otterremmo cinque volte la funzione richiesta."
            }
          ]
        },
        {
          "title": "Riscrivere prima di integrare",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Le radici sono potenze",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msqrt><mrow><mi>x</mi></mrow></msqrt><mo>&#x0003D;</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mspace width=\"2em\" /><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><msup><mi>x</mi><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup></mrow></math></span> Perciò <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><msqrt><mrow><mi>x</mi></mrow></msqrt><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mn>3</mn></mrow></mfrac><msup><mi>x</mi><mrow><mn>3</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></msup><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> e <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Nel secondo esempio lavoriamo su un intervallo che non contiene <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0</mn></mrow></math>."
            },
            {
              "title": "L’eccezione che porta al logaritmo",
              "html": "Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>p</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math> la formula precedente dividerebbe per zero. Si usa un’altra derivata fondamentale: <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Vale su un intervallo contenuto in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math> oppure in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003C;</mo><mn>0</mn></mrow></math>. Il <button type=\"button\" class=\"rm-keyword\" data-term=\"int-modulo\">valore assoluto</button> rende il logaritmo definito anche quando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> è negativo. Le costanti possono essere diverse sui due intervalli."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è ∫ x³ dx?",
            "options": [
              "3x² + C",
              "x⁴ + C",
              "x⁴/4 + C",
              "x³/3 + C"
            ],
            "answer": 2,
            "feedback": "Aumenta l’esponente da 3 a 4 e dividi per 4.",
            "feedbackByOption": [
              "Controlla questo passaggio: Aumenta l’esponente da 3 a 4 e dividi per 4.",
              "Controlla questo passaggio: Aumenta l’esponente da 3 a 4 e dividi per 4.",
              "Aumenta l’esponente da 3 a 4 e dividi per 4.",
              "Controlla questo passaggio: Aumenta l’esponente da 3 a 4 e dividi per 4."
            ]
          },
          {
            "question": "Qual è ∫ 1/x² dx, su un intervallo che non contiene zero?",
            "options": [
              "ln|x| + C",
              "−1/x + C",
              "1/x + C",
              "−2/x³ + C"
            ],
            "answer": 1,
            "feedback": "Riscrivi 1/x² = x⁻²: la nuova potenza è x⁻¹ e devi dividere per −1.",
            "feedbackByOption": [
              "Controlla questo passaggio: Riscrivi 1/x² = x⁻²: la nuova potenza è x⁻¹ e devi dividere per −1.",
              "Riscrivi 1/x² = x⁻²: la nuova potenza è x⁻¹ e devi dividere per −1.",
              "Controlla questo passaggio: Riscrivi 1/x² = x⁻²: la nuova potenza è x⁻¹ e devi dividere per −1.",
              "Controlla questo passaggio: Riscrivi 1/x² = x⁻²: la nuova potenza è x⁻¹ e devi dividere per −1."
            ]
          },
          {
            "question": "Per quale esponente la regola x^(p+1)/(p+1) non si applica?",
            "options": [
              "0",
              "1",
              "−1",
              "1/2"
            ],
            "answer": 2,
            "feedback": "Per p = −1 il denominatore p+1 è zero: serve ln|x|.",
            "feedbackByOption": [
              "Controlla questo passaggio: Per p = −1 il denominatore p+1 è zero: serve ln|x|.",
              "Controlla questo passaggio: Per p = −1 il denominatore p+1 è zero: serve ln|x|.",
              "Per p = −1 il denominatore p+1 è zero: serve ln|x|.",
              "Controlla questo passaggio: Per p = −1 il denominatore p+1 è zero: serve ln|x|."
            ]
          }
        ]
      }
    },
    {
      "id": "formule",
      "title": "Le formule da riconoscere",
      "cards": [
        {
          "title": "Esponenziali e funzioni goniometriche",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Le primitive fondamentali",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0002B;</mo><mi>C</mi><mspace width=\"2em\" /><mo>&#x0222B;</mo><msup><mi>a</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>a</mi><mi>x</mi></msup></mrow><mrow><mi>ln</mi><mi>a</mi></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Nella seconda formula <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x02260;</mo><mn>1</mn></mrow></math>.<br><br><span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>sin</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>cos</mi><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi><mspace width=\"2em\" /><mo>&#x0222B;</mo><mi>cos</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>sin</mi><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Gli argomenti goniometrici sono in <strong>radianti</strong>. Il segno meno nella primitiva del seno viene dalla derivata del coseno."
            },
            {
              "title": "Altre quattro forme utili",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>cos</mi><mn>2</mn></msup><mi>x</mi></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>tan</mi><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>sin</mi><mn>2</mn></msup><mi>x</mi></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>cot</mi><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>arctan</mi><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>arcsin</mi><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Rispetta i domini: i denominatori non devono annullarsi; nell’ultima formula <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>1</mn><mo>&#x0003C;</mo><mi>x</mi><mo>&#x0003C;</mo><mn>1</mn></mrow></math>."
            }
          ]
        },
        {
          "title": "Somme e costanti",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La linearità",
              "html": "<button type=\"button\" class=\"rm-keyword\" data-term=\"int-linearita\">La linearità</button> permette di integrare una somma termine per termine e di portare fuori i fattori costanti. <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>3</mn></msup><mo>&#x02212;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> <strong>Una costante integrata diventa costante per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math></strong>: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0222B;</mo><mn>4</mn><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math>."
            },
            {
              "title": "Non vale per prodotti e quozienti",
              "html": "In generale non puoi integrare separatamente i fattori di un prodotto o il numeratore e il denominatore di una frazione.<br><br>Per esempio, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0222B;</mo><mi>x</mi><mo>&#x000B7;</mo><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo>&#x0222B;</mo><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>3</mn></msup><mo>&#x0002F;</mo><mn>3</mn><mo>&#x0002B;</mo><mi>C</mi></mrow></math>. Moltiplicare due primitive darebbe un risultato diverso. Nelle prossime lezioni studieremo come trattare questi casi."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è ∫ sin x dx?",
            "options": [
              "cos x + C",
              "−cos x + C",
              "−sin x + C",
              "sin x + C"
            ],
            "answer": 1,
            "feedback": "La derivata di −cos x è sin x.",
            "feedbackByOption": [
              "Controlla questo passaggio: La derivata di −cos x è sin x.",
              "La derivata di −cos x è sin x.",
              "Controlla questo passaggio: La derivata di −cos x è sin x.",
              "Controlla questo passaggio: La derivata di −cos x è sin x."
            ]
          },
          {
            "question": "Qual è ∫ (2x + 3) dx?",
            "options": [
              "x² + 3x + C",
              "2x² + 3 + C",
              "x² + 3 + C",
              "2 + C"
            ],
            "answer": 0,
            "feedback": "Integra i due termini: 2x diventa x², mentre 3 diventa 3x.",
            "feedbackByOption": [
              "Integra i due termini: 2x diventa x², mentre 3 diventa 3x.",
              "Controlla questo passaggio: Integra i due termini: 2x diventa x², mentre 3 diventa 3x.",
              "Controlla questo passaggio: Integra i due termini: 2x diventa x², mentre 3 diventa 3x.",
              "Controlla questo passaggio: Integra i due termini: 2x diventa x², mentre 3 diventa 3x."
            ]
          },
          {
            "question": "Quale trasformazione è sempre valida quando esistono le primitive?",
            "options": [
              "Integrare un prodotto moltiplicando le primitive.",
              "Integrare una frazione dividendo le primitive.",
              "Portare fuori dall’integrale un fattore costante.",
              "Portare fuori dall’integrale qualsiasi fattore che dipende da x."
            ],
            "answer": 2,
            "feedback": "La linearità riguarda somme e fattori costanti, non prodotti o quozienti arbitrari.",
            "feedbackByOption": [
              "Controlla questo passaggio: La linearità riguarda somme e fattori costanti, non prodotti o quozienti arbitrari.",
              "Controlla questo passaggio: La linearità riguarda somme e fattori costanti, non prodotti o quozienti arbitrari.",
              "La linearità riguarda somme e fattori costanti, non prodotti o quozienti arbitrari.",
              "Controlla questo passaggio: La linearità riguarda somme e fattori costanti, non prodotti o quozienti arbitrari."
            ]
          }
        ]
      }
    },
    {
      "id": "recap",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Primitiva:</strong> derivandola ritrovi la funzione integranda.</li><li><strong>Integrale indefinito:</strong> una famiglia di funzioni, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0002B;</mo><mi>C</mi></mrow></math>.</li><li><strong>Potenze:</strong> aumenta l’esponente e dividi; per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mi>x</mi></mrow></math> usa <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo></mrow></math>.</li><li><strong>Prima riscrivi, poi integra:</strong> radici e frazioni possono diventare potenze.</li><li><strong>Controlla il risultato derivando</strong>, e conserva le condizioni sul dominio.</li></ul>"
            }
          ]
        }
      ]
    }
  ],
  "nextLesson": {
    "id": "integrali-sostituzione"
  }
};
window.READER_LESSONS["integrali-sostituzione"] = {
  "title": "Funzioni composte e integrazione per sostituzione",
  "subtitle": "Matematica · Quinta liceo scientifico e primo anno universitario · Bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "riconoscere",
      "title": "La derivata della funzione interna",
      "cards": [
        {
          "title": "Una struttura da riconoscere",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La regola della catena, al contrario",
              "html": "Quando derivi <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo></mrow></math>, ottieni <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>G</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00029;</mo><mi>g</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. Integrando cerchiamo proprio questa struttura: <strong>una funzione composta moltiplicata per la derivata della funzione interna</strong>.<br><br>Per esempio, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>4</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> La funzione interna è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn></mrow></math>; la sua derivata è il fattore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math> già presente."
            },
            {
              "title": "Integra la funzione esterna",
              "html": "La primitiva di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>u</mi><mn>4</mn></msup></mrow></math> è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>u</mi><mn>5</mn></msup><mo>&#x0002F;</mo><mn>5</mn></mrow></math>. Rimettendo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn></mrow></math> otteniamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>4</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>5</mn></msup></mrow><mrow><mn>5</mn></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Non occorre sviluppare la quarta potenza. Derivando il risultato ricompare anche il fattore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math>."
            }
          ]
        },
        {
          "title": "Un fattore manca?",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Compensare una costante",
              "html": "In <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>4</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> la derivata interna è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math>, ma abbiamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>. Poiché <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn><mi>x</mi></mrow></math>, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>4</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&#x0222B;</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>4</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> e quindi il risultato è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>5</mn></msup><mo>&#x0002F;</mo><mn>10</mn><mo>&#x0002B;</mo><mi>C</mi></mrow></math>."
            },
            {
              "title": "Una costante non è una funzione",
              "html": "Puoi compensare un fattore <strong>costante</strong>. Non puoi inserire un fattore che dipende da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> e dimenticarne il reciproco.<br><br>In <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0222B;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>3</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>4</mn></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math> manca tutto il fattore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math>: la formula precedente non si applica direttamente. Qui puoi sviluppare la potenza e integrare il polinomio."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "In ∫ 2x(x²+3)⁴ dx, qual è una funzione interna utile?",
            "options": [
              "2x",
              "(x²+3)⁴",
              "x²+3",
              "x⁵"
            ],
            "answer": 2,
            "feedback": "La derivata di x²+3 è 2x: il fattore che accompagna la potenza.",
            "feedbackByOption": [
              "Controlla questo passaggio: La derivata di x²+3 è 2x: il fattore che accompagna la potenza.",
              "Controlla questo passaggio: La derivata di x²+3 è 2x: il fattore che accompagna la potenza.",
              "La derivata di x²+3 è 2x: il fattore che accompagna la potenza.",
              "Controlla questo passaggio: La derivata di x²+3 è 2x: il fattore che accompagna la potenza."
            ]
          },
          {
            "question": "In ∫ x(x²+3)⁴ dx, quale fattore costante compensa la derivata interna 2x?",
            "options": [
              "2",
              "1/2",
              "x",
              "1/x"
            ],
            "answer": 1,
            "feedback": "x è metà di 2x, quindi fuori dall’integrale compare 1/2.",
            "feedbackByOption": [
              "Controlla questo passaggio: x è metà di 2x, quindi fuori dall’integrale compare 1/2.",
              "x è metà di 2x, quindi fuori dall’integrale compare 1/2.",
              "Controlla questo passaggio: x è metà di 2x, quindi fuori dall’integrale compare 1/2.",
              "Controlla questo passaggio: x è metà di 2x, quindi fuori dall’integrale compare 1/2."
            ]
          },
          {
            "question": "La formula per la potenza composta si applica direttamente a ∫ (x²+3)⁴ dx?",
            "options": [
              "Sì, basta aumentare l’esponente.",
              "Sì, basta dividere per 2.",
              "No: manca il fattore 2x, non una semplice costante.",
              "No: nessun polinomio ha una primitiva."
            ],
            "answer": 2,
            "feedback": "Controlla sempre la derivata interna: qui non è presente.",
            "feedbackByOption": [
              "Controlla questo passaggio: Controlla sempre la derivata interna: qui non è presente.",
              "Controlla questo passaggio: Controlla sempre la derivata interna: qui non è presente.",
              "Controlla sempre la derivata interna: qui non è presente.",
              "Controlla questo passaggio: Controlla sempre la derivata interna: qui non è presente."
            ]
          }
        ]
      }
    },
    {
      "id": "schemi",
      "title": "Potenze, esponenziali e logaritmi composti",
      "cards": [
        {
          "title": "Lo stesso riconoscimento, altre formule",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Tre schemi frequenti",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>g</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">[</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mo stretchy=\"false\">]</mo><mi>p</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><mo stretchy=\"false\">[</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mo stretchy=\"false\">]</mo><mrow><mi>p</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>p</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi><mspace width=\"1em\" /><mo stretchy=\"false\">&#x00028;</mo><mi>p</mi><mo>&#x02260;</mo><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>g</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><msup><mi>e</mi><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></msup><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mi>g</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Nell’ultimo schema <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02260;</mo><mn>0</mn></mrow></math>. Per le potenze valgono le condizioni sul dominio già viste."
            },
            {
              "title": "Due esempi, due controlli",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mn>3</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi><mo>&#x02212;</mo><mn>2</mn></mrow></msup><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> perché la derivata di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mi>x</mi><mo>&#x02212;</mo><mn>2</mn></mrow></math> è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn></mrow></math>.<br><br><span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> perché il numeratore è la derivata del denominatore. Qui <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn><mo>&#x0003E;</mo><mn>0</mn></mrow></math>, quindi il modulo non è necessario."
            }
          ]
        },
        {
          "title": "L’argomento lineare",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il fattore 1/a",
              "html": "Se l’argomento è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>&#x0002B;</mo><mi>b</mi></mrow></math>, la sua derivata è la costante <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math>. Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x02260;</mo><mn>0</mn></mrow></math>, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>x</mi><mo>&#x0002B;</mo><mi>b</mi></mrow></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><msup><mi>e</mi><mrow><mi>a</mi><mi>x</mi><mo>&#x0002B;</mo><mi>b</mi></mrow></msup><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Per esempio <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0222B;</mo><msup><mi>e</mi><mrow><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mrow><mn>5</mn><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></msup><mo>&#x0002F;</mo><mn>5</mn><mo>&#x0002B;</mo><mi>C</mi></mrow></math>. Lo stesso controllo vale per seno, coseno e potenze di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>&#x0002B;</mo><mi>b</mi></mrow></math>."
            },
            {
              "title": "Anche arctan e arcsin",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>3</mn></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>arctan</mi><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><msqrt><mrow><mn>1</mn><mo>&#x02212;</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>arcsin</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Nella prima riconosci <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>3</mn><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math>; nella seconda <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x02212;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math>. La seconda formula vale per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0003C;</mo><mn>1</mn><mo>&#x0002F;</mo><mn>2</mn></mrow></math>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è ∫ e^(4x) dx?",
            "options": [
              "e^(4x) + C",
              "4e^(4x) + C",
              "e^(4x)/4 + C",
              "e^x/4 + C"
            ],
            "answer": 2,
            "feedback": "Derivando l’esponenziale compare un fattore 4: lo compensi con 1/4.",
            "feedbackByOption": [
              "Controlla questo passaggio: Derivando l’esponenziale compare un fattore 4: lo compensi con 1/4.",
              "Controlla questo passaggio: Derivando l’esponenziale compare un fattore 4: lo compensi con 1/4.",
              "Derivando l’esponenziale compare un fattore 4: lo compensi con 1/4.",
              "Controlla questo passaggio: Derivando l’esponenziale compare un fattore 4: lo compensi con 1/4."
            ]
          },
          {
            "question": "Qual è ∫ 2x/(x²+4) dx?",
            "options": [
              "ln(x²+4) + C",
              "1/(x²+4) + C",
              "arctan x + C",
              "2ln(x²+4) + C"
            ],
            "answer": 0,
            "feedback": "2x è esattamente la derivata del denominatore.",
            "feedbackByOption": [
              "2x è esattamente la derivata del denominatore.",
              "Controlla questo passaggio: 2x è esattamente la derivata del denominatore.",
              "Controlla questo passaggio: 2x è esattamente la derivata del denominatore.",
              "Controlla questo passaggio: 2x è esattamente la derivata del denominatore."
            ]
          },
          {
            "question": "Per ∫ 1/(1+9x²) dx, quale fattore deve accompagnare arctan(3x)?",
            "options": [
              "3",
              "1/9",
              "1",
              "1/3"
            ],
            "answer": 3,
            "feedback": "La derivata di arctan(3x) è 3/(1+9x²).",
            "feedbackByOption": [
              "Controlla questo passaggio: La derivata di arctan(3x) è 3/(1+9x²).",
              "Controlla questo passaggio: La derivata di arctan(3x) è 3/(1+9x²).",
              "Controlla questo passaggio: La derivata di arctan(3x) è 3/(1+9x²).",
              "La derivata di arctan(3x) è 3/(1+9x²)."
            ]
          }
        ]
      }
    },
    {
      "id": "cambio",
      "title": "Scrivere il cambio di variabile",
      "cards": [
        {
          "title": "Una sostituzione completa",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Scegli la nuova variabile",
              "html": "<button type=\"button\" class=\"rm-keyword\" data-term=\"int-sostituzione\">La sostituzione</button> rende esplicito il riconoscimento. Consideriamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>5</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Poniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>5</mn></mrow></math>. Derivando otteniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mi>u</mi><mo>&#x0003D;</mo><mn>2</mn><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math>, cioè <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>d</mi><mi>u</mi><mo>&#x0002F;</mo><mn>2</mn></mrow></math>."
            },
            {
              "title": "Cambia anche il differenziale",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>5</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&#x0222B;</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>u</mi><mo>&#x0003D;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>u</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> L’integrale trasformato deve essere scritto <strong>tutto nella nuova variabile</strong>: non lasciare <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> insieme a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mi>u</mi></mrow></math>."
            },
            {
              "title": "Ritorna alla variabile iniziale",
              "html": "Sostituendo di nuovo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>5</mn></mrow></math> troviamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Il differenziale è una notazione che tiene traccia della derivata interna; non basta cambiare il nome della variabile."
            }
          ]
        },
        {
          "title": "Quando è più utile cambiare variabile",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Una radice",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><msqrt><mrow><mi>x</mi></mrow></msqrt></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Su <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math> scegliamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><msqrt><mrow><mi>x</mi></mrow></msqrt></mrow></math>, cioè <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mn>2</mn><mi>u</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>u</mi></mrow></math>. La radice scompare: <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>2</mn><mi>u</mi></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>u</mi></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>u</mi><mo>&#x0003D;</mo><mo>&#x0222B;</mo><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mn>2</mn><mo>&#x02212;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mn>1</mn><mo>&#x0002B;</mo><mi>u</mi></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mi>d</mi><mi>u</mi></mrow></math></span>"
            },
            {
              "title": "Integra e torna a x",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>2</mn><mi>u</mi><mo>&#x02212;</mo><mn>2</mn><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mn>1</mn><mo>&#x0002B;</mo><mi>u</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> diventa <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>2</mn><msqrt><mrow><mi>x</mi></mrow></msqrt><mo>&#x02212;</mo><mn>2</mn><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msqrt><mrow><mi>x</mi></mrow></msqrt><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Qui <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002B;</mo><msqrt><mrow><mi>x</mi></mrow></msqrt><mo>&#x0003E;</mo><mn>0</mn></mrow></math>. A differenza degli esempi precedenti, il cambio di variabile ha anche semplificato la forma della funzione."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Se u = x²+5, quale relazione è corretta?",
            "options": [
              "du = dx",
              "du = 2x dx",
              "du = x dx",
              "dx = 2x du"
            ],
            "answer": 1,
            "feedback": "Deriva u rispetto a x: u′ = 2x.",
            "feedbackByOption": [
              "Controlla questo passaggio: Deriva u rispetto a x: u′ = 2x.",
              "Deriva u rispetto a x: u′ = 2x.",
              "Controlla questo passaggio: Deriva u rispetto a x: u′ = 2x.",
              "Controlla questo passaggio: Deriva u rispetto a x: u′ = 2x."
            ]
          },
          {
            "question": "Dopo una sostituzione, come deve essere scritto l’integrale trasformato?",
            "options": [
              "Con u nell’integranda e dx alla fine.",
              "Con x e u mescolati senza relazione.",
              "Interamente nella nuova variabile, compreso il differenziale.",
              "Senza differenziale."
            ],
            "answer": 2,
            "feedback": "Trasforma sia la funzione sia il differenziale.",
            "feedbackByOption": [
              "Controlla questo passaggio: Trasforma sia la funzione sia il differenziale.",
              "Controlla questo passaggio: Trasforma sia la funzione sia il differenziale.",
              "Trasforma sia la funzione sia il differenziale.",
              "Controlla questo passaggio: Trasforma sia la funzione sia il differenziale."
            ]
          },
          {
            "question": "Se u = √x e x = u², che cosa sostituisce dx?",
            "options": [
              "du/(2u)",
              "2u du",
              "u² du",
              "2 du"
            ],
            "answer": 1,
            "feedback": "Derivando x = u² ottieni dx = 2u du.",
            "feedbackByOption": [
              "Controlla questo passaggio: Derivando x = u² ottieni dx = 2u du.",
              "Derivando x = u² ottieni dx = 2u du.",
              "Controlla questo passaggio: Derivando x = u² ottieni dx = 2u du.",
              "Controlla questo passaggio: Derivando x = u² ottieni dx = 2u du."
            ]
          }
        ]
      }
    },
    {
      "id": "recap",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Cerca funzione interna e sua derivata.</strong></li><li><strong>Compensa solo le costanti</strong> senza cambiare la funzione integranda.</li><li><strong>Scrivi la sostituzione e il differenziale</strong>, poi trasforma tutto l’integrale.</li><li><strong>Ritorna a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math></strong> negli integrali indefiniti.</li><li><strong>Deriva il risultato:</strong> il controllo rivela subito un fattore dimenticato.</li></ul>"
            }
          ]
        }
      ]
    }
  ],
  "nextLesson": {
    "id": "integrali-razionali-lineari"
  }
};
window.READER_LESSONS["integrali-razionali-lineari"] = {
  "title": "Funzioni razionali fratte: divisione e fratti semplici",
  "subtitle": "Matematica · Quinta liceo scientifico e primo anno universitario · Bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "preparare",
      "title": "Prima di scomporre",
      "cards": [
        {
          "title": "Un rapporto di polinomi",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La funzione e il suo dominio",
              "html": "Una <button type=\"button\" class=\"rm-keyword\" data-term=\"int-razionale\">funzione razionale fratta</button> è un rapporto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mi>D</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> tra polinomi, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02260;</mo><mn>0</mn></mrow></math>. La prima domanda non è «quale formula uso?», ma <strong>«posso semplificare la frazione?»</strong>.<br><br>Per esempio, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></math> per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x02260;</mo><mn>1</mn></mrow></math>. Possiamo integrare <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></math>, ma la semplificazione non restituisce il punto escluso dal dominio."
            },
            {
              "title": "Confronta i gradi",
              "html": "Se il grado del numeratore è almeno quello del denominatore, possiamo fare la <strong>divisione tra polinomi</strong>: <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>N</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>Q</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mi>D</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>R</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> e quindi <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>N</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>D</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0003D;</mo><mi>Q</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mfrac><mrow><mi>R</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow><mrow><mi>D</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac></mrow></math></span> Il resto ha grado minore del denominatore, oppure è zero."
            }
          ]
        },
        {
          "title": "Una divisione che semplifica il calcolo",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Ricostruisci il numeratore",
              "html": "Consideriamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Poiché <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>2</mn></mrow></math></span> il quoziente è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></math> e il resto è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math>. Puoi verificare l’identità moltiplicando."
            },
            {
              "title": "Due integrali immediati",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mrow><mo stretchy=\"true\" fence=\"true\" form=\"prefix\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0002B;</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" fence=\"true\" form=\"postfix\">&#x00029;</mo></mrow><mi>d</mi><mi>x</mi></mrow></math></span> ha come risultato <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0002B;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Lavoriamo su un intervallo che non contiene <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></math>. La divisione ha isolato una parte polinomiale e una frazione più semplice."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quando è utile dividere il numeratore per il denominatore prima dei fratti semplici?",
            "options": [
              "Quando il grado del numeratore è almeno quello del denominatore.",
              "Solo se il denominatore è una costante.",
              "Quando il numeratore ha sempre grado minore.",
              "Solo quando non ci sono termini in x."
            ],
            "answer": 0,
            "feedback": "La divisione separa una parte polinomiale e una frazione con numeratore di grado minore.",
            "feedbackByOption": [
              "La divisione separa una parte polinomiale e una frazione con numeratore di grado minore.",
              "Controlla questo passaggio: La divisione separa una parte polinomiale e una frazione con numeratore di grado minore.",
              "Controlla questo passaggio: La divisione separa una parte polinomiale e una frazione con numeratore di grado minore.",
              "Controlla questo passaggio: La divisione separa una parte polinomiale e una frazione con numeratore di grado minore."
            ]
          },
          {
            "question": "Qual è la riscrittura di (x²+2x+3)/(x+1)?",
            "options": [
              "x+1",
              "x+1+2/(x+1)",
              "x+2+3/(x+1)",
              "x+1+2x/(x+1)"
            ],
            "answer": 1,
            "feedback": "Moltiplica x+1 per il denominatore e aggiungi il resto 2.",
            "feedbackByOption": [
              "Controlla questo passaggio: Moltiplica x+1 per il denominatore e aggiungi il resto 2.",
              "Moltiplica x+1 per il denominatore e aggiungi il resto 2.",
              "Controlla questo passaggio: Moltiplica x+1 per il denominatore e aggiungi il resto 2.",
              "Controlla questo passaggio: Moltiplica x+1 per il denominatore e aggiungi il resto 2."
            ]
          },
          {
            "question": "Semplificando (x²−1)/(x−1) in x+1, che cosa accade a x=1?",
            "options": [
              "Diventa ammesso nel dominio originale.",
              "La primitiva è sempre zero.",
              "Resta escluso dal dominio originale.",
              "Non esistono primitive su nessun intervallo."
            ],
            "answer": 2,
            "feedback": "L’espressione originale non è definita in x=1: la semplificazione non cambia quel fatto.",
            "feedbackByOption": [
              "Controlla questo passaggio: L’espressione originale non è definita in x=1: la semplificazione non cambia quel fatto.",
              "Controlla questo passaggio: L’espressione originale non è definita in x=1: la semplificazione non cambia quel fatto.",
              "L’espressione originale non è definita in x=1: la semplificazione non cambia quel fatto.",
              "Controlla questo passaggio: L’espressione originale non è definita in x=1: la semplificazione non cambia quel fatto."
            ]
          }
        ]
      }
    },
    {
      "id": "distinti",
      "title": "Fattori lineari distinti",
      "cards": [
        {
          "title": "Scomporre in fratti semplici",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La forma da cercare",
              "html": "Se il denominatore è il prodotto di fattori lineari distinti, cerchiamo una somma di <button type=\"button\" class=\"rm-keyword\" data-term=\"int-fratti\">fratti semplici</button>. Per esempio, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>A</mi></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0002B;</mo><mfrac><mrow><mi>B</mi></mrow><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mrow></math></span> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>A</mi></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>B</mi></mrow></math> sono costanti da determinare. La somma deve coincidere con la frazione iniziale."
            },
            {
              "title": "Determina i coefficienti",
              "html": "Portando al denominatore comune otteniamo l’identità <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mi>A</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>B</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math> troviamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn><mo>&#x0003D;</mo><mn>2</mn><mi>A</mi></mrow></math>, quindi <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>A</mi><mo>&#x0003D;</mo><mn>2</mn></mrow></math>. Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>1</mn></mrow></math> troviamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>2</mn><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn><mi>B</mi></mrow></math>, quindi <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>B</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math>.<br><br>Questi valori si sostituiscono <strong>nell’identità polinomiale ottenuta dopo aver eliminato i denominatori</strong>, non nella frazione originale."
            },
            {
              "title": "Ora puoi integrare",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mn>2</mn><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002B;</mo><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Su ogni intervallo che non contiene <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></math> o <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math>, questa è una famiglia di primitive. Derivando ritrovi <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math> e quindi la frazione iniziale."
            }
          ]
        },
        {
          "title": "Un altro modo per trovare A e B",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Confrontare i coefficienti",
              "html": "Sviluppando l’identità precedente: <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>A</mi><mo>&#x0002B;</mo><mi>B</mi><mo stretchy=\"false\">&#x00029;</mo><mi>x</mi><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>A</mi><mo>&#x02212;</mo><mi>B</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> I coefficienti delle stesse potenze devono coincidere: <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>A</mi><mo>&#x0002B;</mo><mi>B</mi><mo>&#x0003D;</mo><mn>3</mn><mspace width=\"2em\" /><mi>A</mi><mo>&#x02212;</mo><mi>B</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math></span> Il sistema dà di nuovo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>A</mi><mo>&#x0003D;</mo><mn>2</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>B</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math>. Questo metodo funziona anche quando sostituire valori particolari non determina subito tutte le costanti."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è la forma adatta per 1/[(x−2)(x+3)]?",
            "options": [
              "A/(x−2) + B/(x+3)",
              "(Ax+B)/[(x−2)(x+3)] senza separare i termini",
              "A/(x−2)² + B/(x+3)²",
              "A(x−2) + B(x+3)"
            ],
            "answer": 0,
            "feedback": "A ciascun fattore lineare distinto corrisponde una frazione con numeratore costante.",
            "feedbackByOption": [
              "A ciascun fattore lineare distinto corrisponde una frazione con numeratore costante.",
              "Controlla questo passaggio: A ciascun fattore lineare distinto corrisponde una frazione con numeratore costante.",
              "Controlla questo passaggio: A ciascun fattore lineare distinto corrisponde una frazione con numeratore costante.",
              "Controlla questo passaggio: A ciascun fattore lineare distinto corrisponde una frazione con numeratore costante."
            ]
          },
          {
            "question": "Se 3x+1 = A(x+1)+B(x−1) per ogni x, quali equazioni ottieni?",
            "options": [
              "A+B=1 e A−B=3",
              "A+B=3 e A−B=1",
              "A=B=3",
              "A+B=3 e A+B=1"
            ],
            "answer": 1,
            "feedback": "Raccogli il coefficiente di x e il termine costante.",
            "feedbackByOption": [
              "Controlla questo passaggio: Raccogli il coefficiente di x e il termine costante.",
              "Raccogli il coefficiente di x e il termine costante.",
              "Controlla questo passaggio: Raccogli il coefficiente di x e il termine costante.",
              "Controlla questo passaggio: Raccogli il coefficiente di x e il termine costante."
            ]
          },
          {
            "question": "La primitiva di 2/(x−1) è…",
            "options": [
              "2/(x−1)² + C",
              "ln|x−1| + C",
              "2ln|x−1| + C",
              "−2ln|x−1| + C"
            ],
            "answer": 2,
            "feedback": "La derivata di ln|x−1| è 1/(x−1): il fattore 2 rimane.",
            "feedbackByOption": [
              "Controlla questo passaggio: La derivata di ln|x−1| è 1/(x−1): il fattore 2 rimane.",
              "Controlla questo passaggio: La derivata di ln|x−1| è 1/(x−1): il fattore 2 rimane.",
              "La derivata di ln|x−1| è 1/(x−1): il fattore 2 rimane.",
              "Controlla questo passaggio: La derivata di ln|x−1| è 1/(x−1): il fattore 2 rimane."
            ]
          }
        ]
      }
    },
    {
      "id": "ripetuti",
      "title": "Fattori lineari ripetuti",
      "cards": [
        {
          "title": "Una potenza richiede più termini",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Non saltare le potenze inferiori",
              "html": "Se compare <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mi>a</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mi>m</mi></msup></mrow></math>, nello schema generale dei fratti semplici inseriamo <strong>tutte le potenze da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math> a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>m</mi></mrow></math></strong>. Per esempio, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>A</mi></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0002B;</mo><mfrac><mrow><mi>B</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mrow></math></span> Moltiplicando per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math> troviamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo>&#x0003D;</mo><mi>A</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>B</mi></mrow></math>; quindi <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>A</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>B</mi><mo>&#x0003D;</mo><mn>3</mn></mrow></math>."
            },
            {
              "title": "Un logaritmo e una potenza",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x02212;</mo><mfrac><mrow><mn>3</mn></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Il secondo termine deriva da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mo>&#x02212;</mo><mn>2</mn></mrow></msup></mrow></math>: la sua primitiva è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>3</mn><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></msup></mrow></math>. <strong>Il quadrato al denominatore non produce un logaritmo</strong>."
            },
            {
              "title": "Un fattore ripetuto dentro un prodotto",
              "html": "Per il denominatore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math>, lo schema generale è <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>A</mi></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0002B;</mo><mfrac><mrow><mi>B</mi></mrow><mrow><mi>x</mi><mo>&#x02212;</mo><mn>1</mn></mrow></mfrac><mo>&#x0002B;</mo><mfrac><mrow><mi>D</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mrow></math></span> Le costanti possono anche risultare zero: lo scopriremo dai calcoli. Non omettere un termine prima di averlo verificato."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è lo schema generale per una frazione propria con denominatore (x−1)³?",
            "options": [
              "A/(x−1)³ soltanto",
              "A/(x−1) + B/(x−1)² + D/(x−1)³",
              "A/(x−1) + B/(x−1)³ soltanto",
              "Ax+B"
            ],
            "answer": 1,
            "feedback": "Un fattore ripetuto richiede tutte le potenze fino alla sua molteplicità.",
            "feedbackByOption": [
              "Controlla questo passaggio: Un fattore ripetuto richiede tutte le potenze fino alla sua molteplicità.",
              "Un fattore ripetuto richiede tutte le potenze fino alla sua molteplicità.",
              "Controlla questo passaggio: Un fattore ripetuto richiede tutte le potenze fino alla sua molteplicità.",
              "Controlla questo passaggio: Un fattore ripetuto richiede tutte le potenze fino alla sua molteplicità."
            ]
          },
          {
            "question": "Qual è ∫ 3/(x−1)² dx?",
            "options": [
              "3ln|x−1| + C",
              "3/(x−1) + C",
              "−3/(x−1) + C",
              "−6/(x−1)³ + C"
            ],
            "answer": 2,
            "feedback": "Usa la potenza −2, aumentando l’esponente a −1 e dividendo per −1.",
            "feedbackByOption": [
              "Controlla questo passaggio: Usa la potenza −2, aumentando l’esponente a −1 e dividendo per −1.",
              "Controlla questo passaggio: Usa la potenza −2, aumentando l’esponente a −1 e dividendo per −1.",
              "Usa la potenza −2, aumentando l’esponente a −1 e dividendo per −1.",
              "Controlla questo passaggio: Usa la potenza −2, aumentando l’esponente a −1 e dividendo per −1."
            ]
          },
          {
            "question": "Nell’identità x+2 = A(x−1)+B, quanto valgono A e B?",
            "options": [
              "A=1, B=3",
              "A=1, B=2",
              "A=2, B=1",
              "A=0, B=3"
            ],
            "answer": 0,
            "feedback": "Il coefficiente di x dà A=1; il termine costante dà −1+B=2.",
            "feedbackByOption": [
              "Il coefficiente di x dà A=1; il termine costante dà −1+B=2.",
              "Controlla questo passaggio: Il coefficiente di x dà A=1; il termine costante dà −1+B=2.",
              "Controlla questo passaggio: Il coefficiente di x dà A=1; il termine costante dà −1+B=2.",
              "Controlla questo passaggio: Il coefficiente di x dà A=1; il termine costante dà −1+B=2."
            ]
          }
        ]
      }
    },
    {
      "id": "recap",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Controlla il dominio</strong> e semplifica se puoi.</li><li><strong>Confronta i gradi:</strong> la divisione può isolare una parte polinomiale.</li><li><strong>Fattori distinti:</strong> un fratto per ogni fattore lineare.</li><li><strong>Fattori ripetuti:</strong> inserisci tutte le potenze necessarie.</li><li><strong>Trova le costanti con un’identità</strong>, integra la somma e verifica derivando.</li></ul>"
            }
          ]
        }
      ]
    }
  ],
  "nextLesson": {
    "id": "integrali-razionali-quadratiche"
  }
};
window.READER_LESSONS["integrali-razionali-quadratiche"] = {
  "title": "Funzioni razionali fratte: denominatori quadratici",
  "subtitle": "Matematica · Quinta liceo scientifico e primo anno universitario · Bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "classificare",
      "title": "Che cosa dice il denominatore?",
      "cards": [
        {
          "title": "Un trinomio, tre possibilità",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il discriminante",
              "html": "Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mi>b</mi><mi>x</mi><mo>&#x0002B;</mo><mi>c</mi></mrow></math>, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x02260;</mo><mn>0</mn></mrow></math>, calcola il <button type=\"button\" class=\"rm-keyword\" data-term=\"int-discriminante\">discriminante</button> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00394;</mi><mo>&#x0003D;</mo><msup><mi>b</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>4</mn><mi>a</mi><mi>c</mi></mrow></math>.<br><br><strong><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00394;</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math>:</strong> due radici reali distinte, quindi due fattori lineari.<br><strong><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00394;</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>:</strong> una radice doppia, quindi un fattore lineare ripetuto.<br><strong><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00394;</mi><mo>&#x0003C;</mo><mn>0</mn></mrow></math>:</strong> nessuna radice reale; il trinomio non si scompone in fattori lineari reali."
            },
            {
              "title": "Prima guarda anche il numeratore",
              "html": "Non serve sempre una scomposizione: <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Il numeratore è la derivata del denominatore. Il denominatore è sempre positivo: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn></mrow></math>."
            }
          ]
        },
        {
          "title": "Completare il quadrato",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Far comparire una forma nota",
              "html": "Quando il trinomio non ha radici reali, il <button type=\"button\" class=\"rm-keyword\" data-term=\"int-quadrato\">completamento del quadrato</button> permette spesso di riconoscere l’arcotangente. <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup><mo>&#x0002B;</mo><mn>4</mn></mrow></math></span> Perciò <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>arctan</mi><mfrac><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> La sostituzione <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002F;</mo><mn>2</mn></mrow></math> dà <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mn>2</mn><mi>d</mi><mi>u</mi></mrow></math> e denominatore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa significa Δ<0 per un trinomio quadratico reale?",
            "options": [
              "Ha due radici reali distinte.",
              "Ha una radice doppia.",
              "Non ha radici reali.",
              "È sempre uguale a zero."
            ],
            "answer": 2,
            "feedback": "Non puoi scomporlo in due fattori lineari reali.",
            "feedbackByOption": [
              "Controlla questo passaggio: Non puoi scomporlo in due fattori lineari reali.",
              "Controlla questo passaggio: Non puoi scomporlo in due fattori lineari reali.",
              "Non puoi scomporlo in due fattori lineari reali.",
              "Controlla questo passaggio: Non puoi scomporlo in due fattori lineari reali."
            ]
          },
          {
            "question": "Qual è il completamento del quadrato per x²+2x+5?",
            "options": [
              "(x+1)²+4",
              "(x+2)²+1",
              "(x+1)²+5",
              "(x−1)²+4"
            ],
            "answer": 0,
            "feedback": "Sviluppa (x+1)²: ottieni x²+2x+1 e devi aggiungere 4.",
            "feedbackByOption": [
              "Sviluppa (x+1)²: ottieni x²+2x+1 e devi aggiungere 4.",
              "Controlla questo passaggio: Sviluppa (x+1)²: ottieni x²+2x+1 e devi aggiungere 4.",
              "Controlla questo passaggio: Sviluppa (x+1)²: ottieni x²+2x+1 e devi aggiungere 4.",
              "Controlla questo passaggio: Sviluppa (x+1)²: ottieni x²+2x+1 e devi aggiungere 4."
            ]
          },
          {
            "question": "Qual è ∫ 1/(x²+4) dx?",
            "options": [
              "arctan x + C",
              "2arctan(x/2) + C",
              "arctan(x/2)/2 + C",
              "ln(x²+4) + C"
            ],
            "answer": 2,
            "feedback": "Poni u=x/2: dx=2du e il denominatore diventa 4(1+u²).",
            "feedbackByOption": [
              "Controlla questo passaggio: Poni u=x/2: dx=2du e il denominatore diventa 4(1+u²).",
              "Controlla questo passaggio: Poni u=x/2: dx=2du e il denominatore diventa 4(1+u²).",
              "Poni u=x/2: dx=2du e il denominatore diventa 4(1+u²).",
              "Controlla questo passaggio: Poni u=x/2: dx=2du e il denominatore diventa 4(1+u²)."
            ]
          }
        ]
      }
    },
    {
      "id": "numeratore",
      "title": "Una parte logaritmica e una parte arctan",
      "cards": [
        {
          "title": "Costruire la derivata del denominatore",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Dividere il numeratore in due pezzi",
              "html": "Consideriamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>4</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> La derivata del denominatore è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn></mrow></math>. Scriviamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>4</mn><mo>&#x0003D;</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>1</mn></mrow></math></span> Controlla: il primo pezzo è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mi>x</mi><mo>&#x0002B;</mo><mn>3</mn></mrow></math>, quindi manca <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math>."
            },
            {
              "title": "Integra i due pezzi",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>&#x0222B;</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0002B;</mo><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Il primo integrale è un logaritmo, il secondo è quello appena studiato. Il risultato è <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>arctan</mi><mfrac><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow><mrow><mn>2</mn></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span>"
            },
            {
              "title": "La strategia generale",
              "html": "Per un numeratore lineare <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>m</mi><mi>x</mi><mo>&#x0002B;</mo><mi>n</mi></mrow></math> cerca costanti <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003BB;</mi></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x003BC;</mi></mrow></math> tali che <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>m</mi><mi>x</mi><mo>&#x0002B;</mo><mi>n</mi><mo>&#x0003D;</mo><mi>&#x003BB;</mi><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>a</mi><mi>x</mi><mo>&#x0002B;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>&#x003BC;</mi></mrow></math></span> La parte con la derivata del denominatore dà un logaritmo; quella costante si tratta completando il quadrato. È una <strong>riscrittura algebrica</strong>, non una nuova formula da memorizzare."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Come riscrivi 3x+4 usando la derivata 2x+2?",
            "options": [
              "3(2x+2)+4",
              "(3/2)(2x+2)+1",
              "(3/2)(2x+2)+4",
              "(1/2)(2x+2)+3"
            ],
            "answer": 1,
            "feedback": "Moltiplicando per 3/2 ottieni 3x+3: devi aggiungere 1.",
            "feedbackByOption": [
              "Controlla questo passaggio: Moltiplicando per 3/2 ottieni 3x+3: devi aggiungere 1.",
              "Moltiplicando per 3/2 ottieni 3x+3: devi aggiungere 1.",
              "Controlla questo passaggio: Moltiplicando per 3/2 ottieni 3x+3: devi aggiungere 1.",
              "Controlla questo passaggio: Moltiplicando per 3/2 ottieni 3x+3: devi aggiungere 1."
            ]
          },
          {
            "question": "Il pezzo con il numeratore uguale alla derivata del denominatore produce…",
            "options": [
              "Un logaritmo del valore assoluto del denominatore.",
              "Sempre una potenza cubica.",
              "Sempre un’arcotangente.",
              "Il rapporto fra le primitive."
            ],
            "answer": 0,
            "feedback": "È lo schema g′/g; il modulo si può togliere se g è positivo.",
            "feedbackByOption": [
              "È lo schema g′/g; il modulo si può togliere se g è positivo.",
              "Controlla questo passaggio: È lo schema g′/g; il modulo si può togliere se g è positivo.",
              "Controlla questo passaggio: È lo schema g′/g; il modulo si può togliere se g è positivo.",
              "Controlla questo passaggio: È lo schema g′/g; il modulo si può togliere se g è positivo."
            ]
          },
          {
            "question": "Nel risultato di ∫ (3x+4)/(x²+2x+5) dx, perché compare anche arctan?",
            "options": [
              "Perché qualsiasi frazione produce arctan.",
              "Perché la costante d’integrazione dipende da x.",
              "Perché resta un numeratore costante sopra un quadratico senza radici reali.",
              "Perché il discriminante è positivo."
            ],
            "answer": 2,
            "feedback": "Dopo aver isolato la derivata del denominatore resta 1/[(x+1)²+4].",
            "feedbackByOption": [
              "Controlla questo passaggio: Dopo aver isolato la derivata del denominatore resta 1/[(x+1)²+4].",
              "Controlla questo passaggio: Dopo aver isolato la derivata del denominatore resta 1/[(x+1)²+4].",
              "Dopo aver isolato la derivata del denominatore resta 1/[(x+1)²+4].",
              "Controlla questo passaggio: Dopo aver isolato la derivata del denominatore resta 1/[(x+1)²+4]."
            ]
          }
        ]
      }
    },
    {
      "id": "misti",
      "title": "Un denominatore con fattori diversi",
      "cards": [
        {
          "title": "Lo schema con un fattore quadratico",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il numeratore deve essere lineare",
              "html": "Per un fattore quadratico irriducibile <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>, il numeratore del fratto semplice ha la forma <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>B</mi><mi>x</mi><mo>&#x0002B;</mo><mi>D</mi></mrow></math>, non soltanto una costante. Per esempio, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>A</mi></mrow><mrow><mi>x</mi></mrow></mfrac><mo>&#x0002B;</mo><mfrac><mrow><mi>B</mi><mi>x</mi><mo>&#x0002B;</mo><mi>D</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mrow></math></span> Ogni numeratore ha grado minore del fattore che sta al denominatore."
            },
            {
              "title": "Trova le costanti",
              "html": "Moltiplicando per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></math> otteniamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>1</mn><mo>&#x0003D;</mo><mi>A</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>B</mi><mi>x</mi><mo>&#x0002B;</mo><mi>D</mi><mo stretchy=\"false\">&#x00029;</mo><mi>x</mi></mrow></math></span> Confrontando i coefficienti: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>A</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>A</mi><mo>&#x0002B;</mo><mi>B</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>D</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>. Quindi <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>&#x02212;</mo><mfrac><mrow><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mrow></math></span>"
            },
            {
              "title": "Integra e controlla",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>x</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo><mo>&#x02212;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ln</mi><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> La formula vale separatamente su <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003C;</mo><mn>0</mn></mrow></math>. <strong>Non compare sempre arctan:</strong> qui il secondo numeratore è proporzionale alla derivata del denominatore."
            },
            {
              "title": "Se il quadratico è ripetuto",
              "html": "Per un fattore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math>, lo schema generale contiene <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><msub><mi>B</mi><mn>1</mn></msub><mi>x</mi><mo>&#x0002B;</mo><msub><mi>D</mi><mn>1</mn></msub></mrow><mrow><mi>q</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0002B;</mo><mfrac><mrow><msub><mi>B</mi><mn>2</mn></msub><mi>x</mi><mo>&#x0002B;</mo><msub><mi>D</mi><mn>2</mn></msub></mrow><mrow><mi>q</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac></mrow></math></span> I pezzi con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>q</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math> possono richiedere ulteriori passaggi. Per il caso base, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></mfrac><mo>&#x0003D;</mo><mfrac><mrow><mi>x</mi></mrow><mrow><mn>2</mn><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></mfrac><mo>&#x0002B;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>arctan</mi><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Puoi controllare la formula derivando; i casi con potenze più alte saranno un approfondimento."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale numeratore usi nello schema generale sopra un fattore quadratico irriducibile?",
            "options": [
              "Sempre 1.",
              "Un polinomio lineare Bx+D.",
              "Un polinomio dello stesso grado del denominatore.",
              "Sempre x²."
            ],
            "answer": 1,
            "feedback": "Nel fratto semplice il numeratore ha grado minore del fattore quadratico.",
            "feedbackByOption": [
              "Controlla questo passaggio: Nel fratto semplice il numeratore ha grado minore del fattore quadratico.",
              "Nel fratto semplice il numeratore ha grado minore del fattore quadratico.",
              "Controlla questo passaggio: Nel fratto semplice il numeratore ha grado minore del fattore quadratico.",
              "Controlla questo passaggio: Nel fratto semplice il numeratore ha grado minore del fattore quadratico."
            ]
          },
          {
            "question": "Qual è la scomposizione di 1/[x(x²+1)]?",
            "options": [
              "1/x + x/(x²+1)",
              "1/x − x/(x²+1)",
              "1/x − 1/(x²+1)",
              "x/(x²+1)"
            ],
            "answer": 1,
            "feedback": "Portando al denominatore comune il numeratore è (x²+1)−x²=1.",
            "feedbackByOption": [
              "Controlla questo passaggio: Portando al denominatore comune il numeratore è (x²+1)−x²=1.",
              "Portando al denominatore comune il numeratore è (x²+1)−x²=1.",
              "Controlla questo passaggio: Portando al denominatore comune il numeratore è (x²+1)−x²=1.",
              "Controlla questo passaggio: Portando al denominatore comune il numeratore è (x²+1)−x²=1."
            ]
          },
          {
            "question": "Per ∫ x/(x²+1) dx, qual è la primitiva?",
            "options": [
              "arctan x + C",
              "ln(x²+1) + C",
              "ln(x²+1)/2 + C",
              "−1/(x²+1) + C"
            ],
            "answer": 2,
            "feedback": "La derivata del denominatore è 2x: devi compensare con 1/2.",
            "feedbackByOption": [
              "Controlla questo passaggio: La derivata del denominatore è 2x: devi compensare con 1/2.",
              "Controlla questo passaggio: La derivata del denominatore è 2x: devi compensare con 1/2.",
              "La derivata del denominatore è 2x: devi compensare con 1/2.",
              "Controlla questo passaggio: La derivata del denominatore è 2x: devi compensare con 1/2."
            ]
          }
        ]
      }
    },
    {
      "id": "recap",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Il discriminante orienta la scelta</strong>, ma controlla prima se riconosci già <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mi>&#x02032;</mi><mo>&#x0002F;</mo><mi>g</mi></mrow></math>.</li><li><strong>Completa il quadrato</strong> per riconoscere <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo>&#x0002B;</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</li><li><strong>Dividi il numeratore:</strong> derivata del denominatore più una costante.</li><li><strong>Un fattore quadratico richiede un numeratore lineare</strong> nello schema generale.</li><li><strong>Logaritmo o arctan?</strong> Decide la forma del numeratore dopo la riscrittura.</li></ul>"
            }
          ]
        }
      ]
    }
  ],
  "nextLesson": {
    "id": "integrali-parti"
  }
};
window.READER_LESSONS["integrali-parti"] = {
  "title": "Integrazione per parti",
  "subtitle": "Matematica · Quinta liceo scientifico e primo anno universitario · Bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "regola",
      "title": "Usare la derivata di un prodotto",
      "cards": [
        {
          "title": "Trasformare un integrale in uno più semplice",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Da dove viene la regola",
              "html": "La derivata di un prodotto è <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>u</mi><mi>v</mi><mo stretchy=\"false\">&#x00029;</mo><mi>&#x02032;</mi><mo>&#x0003D;</mo><mi>u</mi><mi>&#x02032;</mi><mi>v</mi><mo>&#x0002B;</mo><mi>u</mi><mi>v</mi><mi>&#x02032;</mi></mrow></math></span> Riordinando e integrando ricaviamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>u</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mi>v</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>u</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mi>v</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mo>&#x0222B;</mo><mi>u</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mi>v</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Questa è <button type=\"button\" class=\"rm-keyword\" data-term=\"int-parti\">l’integrazione per parti</button>. Scegliamo un fattore da derivare, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi></mrow></math>, e uno da integrare, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>v</mi><mi>&#x02032;</mi></mrow></math>. La costante <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0002B;</mo><mi>C</mi></mrow></math> si scrive nel risultato finale."
            },
            {
              "title": "La scelta deve aiutarti",
              "html": "La formula è utile se il nuovo integrale <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0222B;</mo><mi>u</mi><mi>&#x02032;</mi><mi>v</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math> è più semplice di quello iniziale.<br><br>Con un polinomio moltiplicato per un’esponenziale o una funzione goniometrica, <strong>derivare il polinomio</strong> ne riduce il grado. Con un logaritmo, derivarlo lo trasforma in una frazione. Sono criteri di scelta, non regole senza eccezioni."
            }
          ]
        },
        {
          "title": "Il primo esempio",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Scegli i due ruoli",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Scegliamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><mi>x</mi></mrow></math>, perché la derivata è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mi>&#x02032;</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math>; scegliamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>v</mi><mi>&#x02032;</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, perché una primitiva è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>v</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>.<br><br>Non è uno schema composto immediato: la derivata dell’argomento <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> dell’esponenziale è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math>, non il fattore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>."
            },
            {
              "title": "Applica la formula",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mo>&#x02212;</mo><mo>&#x0222B;</mo><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Il nuovo integrale è immediato, quindi <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Controllo: la derivata di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0002B;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0003D;</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "In ∫ x e^x dx, quale scelta rende più semplice il nuovo integrale?",
            "options": [
              "u=x, v′=e^x",
              "u=e^x, v′=x",
              "u=x e^x, v′=x",
              "u=1, v′=1"
            ],
            "answer": 0,
            "feedback": "Derivando x ottieni 1; integrare e^x non ne cambia la forma.",
            "feedbackByOption": [
              "Derivando x ottieni 1; integrare e^x non ne cambia la forma.",
              "Controlla questo passaggio: Derivando x ottieni 1; integrare e^x non ne cambia la forma.",
              "Controlla questo passaggio: Derivando x ottieni 1; integrare e^x non ne cambia la forma.",
              "Controlla questo passaggio: Derivando x ottieni 1; integrare e^x non ne cambia la forma."
            ]
          },
          {
            "question": "Quale formula è quella dell’integrazione per parti?",
            "options": [
              "∫uv′ dx = uv + ∫u′v dx",
              "∫uv′ dx = uv − ∫u′v dx",
              "∫uv′ dx = u′v′",
              "∫uv′ dx = (∫u dx)(∫v′ dx)"
            ],
            "answer": 1,
            "feedback": "Il segno meno deriva dal riordino della regola di derivazione del prodotto.",
            "feedbackByOption": [
              "Controlla questo passaggio: Il segno meno deriva dal riordino della regola di derivazione del prodotto.",
              "Il segno meno deriva dal riordino della regola di derivazione del prodotto.",
              "Controlla questo passaggio: Il segno meno deriva dal riordino della regola di derivazione del prodotto.",
              "Controlla questo passaggio: Il segno meno deriva dal riordino della regola di derivazione del prodotto."
            ]
          },
          {
            "question": "Qual è ∫ x e^x dx?",
            "options": [
              "x e^x + C",
              "(x+1)e^x + C",
              "(x−1)e^x + C",
              "x²e^x/2 + C"
            ],
            "answer": 2,
            "feedback": "La formula dà x e^x − ∫e^x dx.",
            "feedbackByOption": [
              "Controlla questo passaggio: La formula dà x e^x − ∫e^x dx.",
              "Controlla questo passaggio: La formula dà x e^x − ∫e^x dx.",
              "La formula dà x e^x − ∫e^x dx.",
              "Controlla questo passaggio: La formula dà x e^x − ∫e^x dx."
            ]
          }
        ]
      }
    },
    {
      "id": "logaritmi",
      "title": "Quando il logaritmo va derivato",
      "cards": [
        {
          "title": "Il prodotto può essere nascosto",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Integrare ln x",
              "html": "Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math>, scriviamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>ln</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo>&#x0222B;</mo><mn>1</mn><mo>&#x000B7;</mo><mi>ln</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Scegliamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><mi>ln</mi><mi>x</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mi>&#x02032;</mi><mo>&#x0003D;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>x</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>v</mi><mi>&#x02032;</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>v</mi><mo>&#x0003D;</mo><mi>x</mi></mrow></math>. Il prodotto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mi>&#x02032;</mi><mi>v</mi></mrow></math> diventa <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math>."
            },
            {
              "title": "Completa il calcolo",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>ln</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>x</mi><mi>ln</mi><mi>x</mi><mo>&#x02212;</mo><mo>&#x0222B;</mo><mn>1</mn><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>x</mi><mi>ln</mi><mi>x</mi><mo>&#x02212;</mo><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Derivando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mi>ln</mi><mi>x</mi><mo>&#x02212;</mo><mi>x</mi></mrow></math> ottieni <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>ln</mi><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0003D;</mo><mi>ln</mi><mi>x</mi></mrow></math>."
            }
          ]
        },
        {
          "title": "Un polinomio per un logaritmo",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La scelta dei fattori",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>x</mi><mi>ln</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math> scegliamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><mi>ln</mi><mi>x</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mi>&#x02032;</mi><mo>&#x0003D;</mo><mn>1</mn><mo>&#x0002F;</mo><mi>x</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>v</mi><mi>&#x02032;</mi><mo>&#x0003D;</mo><mi>x</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>v</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002F;</mo><mn>2</mn></mrow></math>."
            },
            {
              "title": "Il nuovo integrale è un polinomio",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>x</mi><mi>ln</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn></mrow></mfrac><mi>ln</mi><mi>x</mi><mo>&#x02212;</mo><mo>&#x0222B;</mo><mfrac><mrow><mi>x</mi></mrow><mrow><mn>2</mn></mrow></mfrac><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> e quindi <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn></mrow></mfrac><mi>ln</mi><mi>x</mi><mo>&#x02212;</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn></mrow></mfrac><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Qui scegliamo di derivare il logaritmo, anche se è presente un polinomio: è il nuovo integrale a guidare la scelta."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Per ∫ ln x dx, quale fattore possiamo considerare nascosto?",
            "options": [
              "x",
              "1",
              "e^x",
              "1/x"
            ],
            "answer": 1,
            "feedback": "ln x = 1·ln x: integri 1 e derivi il logaritmo.",
            "feedbackByOption": [
              "Controlla questo passaggio: ln x = 1·ln x: integri 1 e derivi il logaritmo.",
              "ln x = 1·ln x: integri 1 e derivi il logaritmo.",
              "Controlla questo passaggio: ln x = 1·ln x: integri 1 e derivi il logaritmo.",
              "Controlla questo passaggio: ln x = 1·ln x: integri 1 e derivi il logaritmo."
            ]
          },
          {
            "question": "Qual è ∫ ln x dx, per x>0?",
            "options": [
              "x ln x + C",
              "1/x + C",
              "x ln x − x + C",
              "ln x/x + C"
            ],
            "answer": 2,
            "feedback": "Derivando x ln x compare anche +1, compensato dalla derivata di −x.",
            "feedbackByOption": [
              "Controlla questo passaggio: Derivando x ln x compare anche +1, compensato dalla derivata di −x.",
              "Controlla questo passaggio: Derivando x ln x compare anche +1, compensato dalla derivata di −x.",
              "Derivando x ln x compare anche +1, compensato dalla derivata di −x.",
              "Controlla questo passaggio: Derivando x ln x compare anche +1, compensato dalla derivata di −x."
            ]
          },
          {
            "question": "Per ∫ x ln x dx, quale scelta semplifica l’integrale residuo?",
            "options": [
              "Derivare ln x e integrare x.",
              "Integrare entrambi e moltiplicare.",
              "Derivare x e integrare ln x senza altri passaggi.",
              "Sostituire ln x con una costante."
            ],
            "answer": 0,
            "feedback": "La derivata 1/x si semplifica con parte della primitiva x²/2.",
            "feedbackByOption": [
              "La derivata 1/x si semplifica con parte della primitiva x²/2.",
              "Controlla questo passaggio: La derivata 1/x si semplifica con parte della primitiva x²/2.",
              "Controlla questo passaggio: La derivata 1/x si semplifica con parte della primitiva x²/2.",
              "Controlla questo passaggio: La derivata 1/x si semplifica con parte della primitiva x²/2."
            ]
          }
        ]
      }
    },
    {
      "id": "ripetere",
      "title": "Se una volta non basta",
      "cards": [
        {
          "title": "Ripetere per abbassare il grado",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un polinomio di secondo grado",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>&#x02212;</mo><mn>2</mn><mo>&#x0222B;</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Abbiamo derivato <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> e integrato <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>v</mi><mi>&#x02032;</mi><mo>&#x0003D;</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>. Il grado del polinomio è sceso da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math> a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math>."
            },
            {
              "title": "Riusa il risultato già trovato",
              "html": "Poiché <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0222B;</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo>&#x02212;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0002B;</mo><mi>C</mi></mrow></math>, otteniamo <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">&#x00028;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&#x02212;</mo><mn>2</mn><mi>x</mi><mo>&#x0002B;</mo><mn>2</mn><mo stretchy=\"false\">&#x00029;</mo><msup><mi>e</mi><mi>x</mi></msup><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Nel risultato finale basta una sola costante arbitraria."
            },
            {
              "title": "Anche una funzione goniometrica",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mo>&#x0222B;</mo><mi>x</mi><mi>cos</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>x</mi><mi>sin</mi><mi>x</mi><mo>&#x02212;</mo><mo>&#x0222B;</mo><mi>sin</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Ricordando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0222B;</mo><mi>sin</mi><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>cos</mi><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math>, il risultato è <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>x</mi><mi>sin</mi><mi>x</mi><mo>&#x0002B;</mo><mi>cos</mi><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Il doppio segno meno diventa un più."
            }
          ]
        },
        {
          "title": "Scegliere il metodo",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il prodotto da solo non basta",
              "html": "In <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0222B;</mo><mn>2</mn><mi>x</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math> la funzione interna <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></math> ha già la derivata <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math> come fattore: conviene il riconoscimento composto.<br><br>In <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0222B;</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math> quel riconoscimento manca: per parti semplifica il prodotto.<br><br><strong>Prima osserva la struttura, poi scegli il metodo.</strong>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Applicando per parti a ∫ x²e^x dx con u=x², quale integrale resta?",
            "options": [
              "∫ x²e^x dx identico, senza altri termini",
              "2∫ x e^x dx",
              "∫ e^(x²) dx",
              "∫ 2e^x dx"
            ],
            "answer": 1,
            "feedback": "La derivata di x² è 2x; v resta e^x.",
            "feedbackByOption": [
              "Controlla questo passaggio: La derivata di x² è 2x; v resta e^x.",
              "La derivata di x² è 2x; v resta e^x.",
              "Controlla questo passaggio: La derivata di x² è 2x; v resta e^x.",
              "Controlla questo passaggio: La derivata di x² è 2x; v resta e^x."
            ]
          },
          {
            "question": "Qual è una primitiva di x cos x?",
            "options": [
              "x sin x − cos x",
              "x sin x + cos x",
              "x cos x + sin x",
              "sin x"
            ],
            "answer": 1,
            "feedback": "Per parti dà x sin x − ∫sin x dx, cioè x sin x + cos x.",
            "feedbackByOption": [
              "Controlla questo passaggio: Per parti dà x sin x − ∫sin x dx, cioè x sin x + cos x.",
              "Per parti dà x sin x − ∫sin x dx, cioè x sin x + cos x.",
              "Controlla questo passaggio: Per parti dà x sin x − ∫sin x dx, cioè x sin x + cos x.",
              "Controlla questo passaggio: Per parti dà x sin x − ∫sin x dx, cioè x sin x + cos x."
            ]
          },
          {
            "question": "Per ∫ 2x e^(x²) dx, quale metodo riconosci subito?",
            "options": [
              "La derivata interna: g=x² e g′=2x.",
              "I fratti semplici.",
              "La divisione tra polinomi.",
              "La regola delle potenze applicata solo a 2x."
            ],
            "answer": 0,
            "feedback": "La struttura composta è già completa: una primitiva è e^(x²).",
            "feedbackByOption": [
              "La struttura composta è già completa: una primitiva è e^(x²).",
              "Controlla questo passaggio: La struttura composta è già completa: una primitiva è e^(x²).",
              "Controlla questo passaggio: La struttura composta è già completa: una primitiva è e^(x²).",
              "Controlla questo passaggio: La struttura composta è già completa: una primitiva è e^(x²)."
            ]
          }
        ]
      }
    },
    {
      "id": "recap",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Per parti viene dalla derivata del prodotto.</strong></li><li><strong>Scegli un fattore da derivare e uno da integrare</strong>, mirando a un integrale più semplice.</li><li><strong>Polinomio con esponenziale o seno/coseno:</strong> spesso conviene derivare il polinomio.</li><li><strong>Logaritmo:</strong> spesso conviene derivarlo.</li><li><strong>Puoi ripetere il procedimento</strong>; controlla i segni e verifica con la derivata.</li></ul>"
            }
          ]
        }
      ]
    }
  ],
  "nextLesson": {
    "id": "integrali-definiti"
  }
};
window.READER_LESSONS["integrali-definiti"] = {
  "title": "Integrali definiti: significato e calcolo",
  "subtitle": "Matematica · Quinta liceo scientifico e primo anno universitario · Bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "accumulare",
      "title": "Dalle piccole variazioni al totale",
      "cards": [
        {
          "title": "Somma di contributi",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un tasso che cambia",
              "html": "Se una quantità cambia a un tasso costante <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>r</mi></mrow></math>, in un intervallo di durata <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00394;</mi><mi>t</mi></mrow></math> la sua variazione è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>r</mi><mi>&#x00394;</mi><mi>t</mi></mrow></math>. Se il tasso cambia, possiamo dividere l’intervallo in piccoli pezzi e sommare contributi del tipo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><msub><mi>x</mi><mi>i</mi></msub><mo stretchy=\"false\">&#x00029;</mo><mi>&#x00394;</mi><msub><mi>x</mi><mi>i</mi></msub></mrow></math>.<br><br>L’<button type=\"button\" class=\"rm-keyword\" data-term=\"int-definito\">integrale definito</button> esprime l’accumulazione complessiva ottenuta rendendo queste suddivisioni sempre più fini."
            },
            {
              "title": "La scrittura",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>b</mi></mrow></math> sono gli <strong>estremi di integrazione</strong>. A differenza dell’integrale indefinito, il risultato è <strong>un numero</strong>.<br><br>Per un tasso costante <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>k</mi></mrow></math>, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mi>k</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>k</mi><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo>&#x02212;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> Per esempio, con un tasso costante di 8 unità al minuto, in 5 minuti la quantità aumenta di 40 unità."
            }
          ]
        },
        {
          "title": "L’idea geometrica",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Area e segno",
              "html": "Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x0003C;</mo><mi>b</mi></mrow></math>, se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo>&#x02265;</mo><mn>0</mn></mrow></math>, l’integrale è l’area compresa tra grafico, asse <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> e rette <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mi>a</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mi>b</mi></mrow></math>. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math> assume valori negativi, quei contributi entrano con <strong>segno meno</strong>.<br><br>In generale, l’integrale è un’<strong>area con segno</strong>: l’area geometrica totale si calcola con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mo stretchy=\"false\">&#x0007C;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo stretchy=\"false\">&#x0007C;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math>."
            },
            {
              "title": "Una definizione essenziale di Riemann",
              "html": "Per una funzione limitata su <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">[</mo><mi>a</mi><mo>&#x0002C;</mo><mi>b</mi><mo stretchy=\"false\">]</mo></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x0003C;</mo><mi>b</mi></mrow></math>, le somme inferiori e superiori stimano l’integrale per difetto e per eccesso, usando minimo e massimo sui singoli pezzi quando esistono; in generale, estremo inferiore e superiore.<br><br>La funzione è integrabile secondo <button type=\"button\" class=\"rm-keyword\" data-term=\"int-riemann\">Riemann</button> se possiamo rendere la differenza fra le due somme piccola quanto vogliamo. <strong>Le funzioni continue su un intervallo chiuso e limitato sono integrabili.</strong>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che tipo di risultato dà un integrale definito con estremi fissati?",
            "options": [
              "Una famiglia di funzioni con +C.",
              "Un numero.",
              "Sempre una funzione lineare.",
              "Sempre zero."
            ],
            "answer": 1,
            "feedback": "L’accumulazione si riferisce a un intervallo fissato.",
            "feedbackByOption": [
              "Controlla questo passaggio: L’accumulazione si riferisce a un intervallo fissato.",
              "L’accumulazione si riferisce a un intervallo fissato.",
              "Controlla questo passaggio: L’accumulazione si riferisce a un intervallo fissato.",
              "Controlla questo passaggio: L’accumulazione si riferisce a un intervallo fissato."
            ]
          },
          {
            "question": "Per a<b, se f è negativa su tutto [a,b], che segno ha l’integrale?",
            "options": [
              "Negativo.",
              "Sempre positivo perché è un’area.",
              "Zero.",
              "Dipende dalla costante C."
            ],
            "answer": 0,
            "feedback": "L’integrale considera i contributi sotto l’asse con segno negativo.",
            "feedbackByOption": [
              "L’integrale considera i contributi sotto l’asse con segno negativo.",
              "Controlla questo passaggio: L’integrale considera i contributi sotto l’asse con segno negativo.",
              "Controlla questo passaggio: L’integrale considera i contributi sotto l’asse con segno negativo.",
              "Controlla questo passaggio: L’integrale considera i contributi sotto l’asse con segno negativo."
            ]
          },
          {
            "question": "Qual è ∫ da 1 a 4 di 5 dx?",
            "options": [
              "5",
              "20",
              "15",
              "3"
            ],
            "answer": 2,
            "feedback": "Il tasso è 5 e la lunghezza dell’intervallo è 4−1=3.",
            "feedbackByOption": [
              "Controlla questo passaggio: Il tasso è 5 e la lunghezza dell’intervallo è 4−1=3.",
              "Controlla questo passaggio: Il tasso è 5 e la lunghezza dell’intervallo è 4−1=3.",
              "Il tasso è 5 e la lunghezza dell’intervallo è 4−1=3.",
              "Controlla questo passaggio: Il tasso è 5 e la lunghezza dell’intervallo è 4−1=3."
            ]
          }
        ]
      }
    },
    {
      "id": "fondamentale",
      "title": "Calcolare usando una primitiva",
      "cards": [
        {
          "title": "Il ponte tra derivata e integrale",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il teorema fondamentale",
              "html": "Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math> è continua su <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">[</mo><mi>a</mi><mo>&#x0002C;</mo><mi>b</mi><mo stretchy=\"false\">]</mo></mrow></math>, la funzione integrale <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>x</mi></msubsup><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>t</mi></mrow></math></span> è derivabile nei punti interni e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>A</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. Il tasso con cui cambia l’accumulazione è la funzione integranda."
            },
            {
              "title": "La formula operativa",
              "html": "Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>F</mi></mrow></math> è una qualsiasi primitiva di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math>, continua su <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">[</mo><mi>a</mi><mo>&#x0002C;</mo><mi>b</mi><mo stretchy=\"false\">]</mo></mrow></math>, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> <strong>Valore al limite superiore meno valore al limite inferiore.</strong><br><br>La costante si cancella: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">[</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>C</mi><mo stretchy=\"false\">]</mo><mo>&#x02212;</mo><mo stretchy=\"false\">[</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mi>C</mi><mo stretchy=\"false\">]</mo><mo>&#x0003D;</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. Nel risultato dell’integrale definito non si aggiunge <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0002B;</mo><mi>C</mi></mrow></math>."
            }
          ]
        },
        {
          "title": "Tre passaggi",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Trova una primitiva",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mn>1</mn><mn>3</mn></msubsup><mn>2</mn><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Una primitiva è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
            },
            {
              "title": "Valuta e sottrai",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mn>1</mn><mn>3</mn></msubsup><mn>2</mn><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo stretchy=\"false\">[</mo><msup><mi>x</mi><mn>2</mn></msup><msubsup><mo stretchy=\"false\">]</mo><mn>1</mn><mn>3</mn></msubsup><mo>&#x0003D;</mo><msup><mn>3</mn><mn>2</mn></msup><mo>&#x02212;</mo><msup><mn>1</mn><mn>2</mn></msup><mo>&#x0003D;</mo><mn>8</mn></mrow></math></span> Le parentesi <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">[</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><msubsup><mo stretchy=\"false\">]</mo><mi>a</mi><mi>b</mi></msubsup></mrow></math> sono un’abbreviazione per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. Non basta sostituire solo l’estremo superiore."
            },
            {
              "title": "Se il segno cambia",
              "html": "Per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>x</mi></mrow></math> fra <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math>, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mn>1</mn></msubsup><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math></span> I contributi negativi e positivi si compensano. L’area geometrica invece è <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mrow><mo>&#x02212;</mo><mn>1</mn></mrow><mn>1</mn></msubsup><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo stretchy=\"false\">&#x0007C;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mn>1</mn></mrow></math></span> e si ottiene sommando le due aree positive."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è la formula di calcolo di ∫ da a a b di f(x) dx usando una primitiva F?",
            "options": [
              "F(a)−F(b)",
              "F(b)−F(a)",
              "F(b)+F(a)+C",
              "F′(b)−F′(a)"
            ],
            "answer": 1,
            "feedback": "Calcoli la differenza dei valori della primitiva, non della funzione integranda.",
            "feedbackByOption": [
              "Controlla questo passaggio: Calcoli la differenza dei valori della primitiva, non della funzione integranda.",
              "Calcoli la differenza dei valori della primitiva, non della funzione integranda.",
              "Controlla questo passaggio: Calcoli la differenza dei valori della primitiva, non della funzione integranda.",
              "Controlla questo passaggio: Calcoli la differenza dei valori della primitiva, non della funzione integranda."
            ]
          },
          {
            "question": "Qual è ∫ da 1 a 3 di 2x dx?",
            "options": [
              "6",
              "9",
              "8",
              "8+C"
            ],
            "answer": 2,
            "feedback": "Una primitiva è x²: 9−1=8, senza +C.",
            "feedbackByOption": [
              "Controlla questo passaggio: Una primitiva è x²: 9−1=8, senza +C.",
              "Controlla questo passaggio: Una primitiva è x²: 9−1=8, senza +C.",
              "Una primitiva è x²: 9−1=8, senza +C.",
              "Controlla questo passaggio: Una primitiva è x²: 9−1=8, senza +C."
            ]
          },
          {
            "question": "∫ da −1 a 1 di x dx è zero. Che cosa significa?",
            "options": [
              "La funzione è zero ovunque.",
              "L’area geometrica totale è zero.",
              "I contributi con segno si compensano.",
              "La funzione non è integrabile."
            ],
            "answer": 2,
            "feedback": "L’integrale con segno può essere zero anche quando l’area geometrica è positiva.",
            "feedbackByOption": [
              "Controlla questo passaggio: L’integrale con segno può essere zero anche quando l’area geometrica è positiva.",
              "Controlla questo passaggio: L’integrale con segno può essere zero anche quando l’area geometrica è positiva.",
              "L’integrale con segno può essere zero anche quando l’area geometrica è positiva.",
              "Controlla questo passaggio: L’integrale con segno può essere zero anche quando l’area geometrica è positiva."
            ]
          }
        ]
      }
    },
    {
      "id": "proprieta",
      "title": "Proprietà che semplificano gli esercizi",
      "cards": [
        {
          "title": "Somma, intervalli e orientamento",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Le proprietà operative",
              "html": "Valgono la linearità e l’additività sugli intervalli: <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mo stretchy=\"false\">&#x00028;</mo><mi>f</mi><mo>&#x0002B;</mo><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0002B;</mo><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mi>g</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>c</mi></msubsup><mi>f</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0002B;</mo><msubsup><mo>&#x0222B;</mo><mi>c</mi><mi>b</mi></msubsup><mi>f</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Per convenzione, <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mi>b</mi><mi>a</mi></msubsup><mi>f</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mspace width=\"2em\" /><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>a</mi></msubsup><mi>f</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math></span> Le formule richiedono l’integrabilità sui tratti considerati."
            },
            {
              "title": "Simmetria e valore medio",
              "html": "Su <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">[</mo><mo>&#x02212;</mo><mi>a</mi><mo>&#x0002C;</mo><mi>a</mi><mo stretchy=\"false\">]</mo></mrow></math>, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math>, una funzione integrabile <strong>dispari</strong> ha integrale zero; per una funzione <strong>pari</strong> l’integrale è il doppio di quello su <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">[</mo><mn>0</mn><mo>&#x0002C;</mo><mi>a</mi><mo stretchy=\"false\">]</mo></mrow></math>.<br><br>Il valore medio di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math> su <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">[</mo><mi>a</mi><mo>&#x0002C;</mo><mi>b</mi><mo stretchy=\"false\">]</mo></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>a</mi><mo>&#x0003C;</mo><mi>b</mi></mrow></math>, è <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>f</mi><mrow><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">e</mi><mi mathvariant=\"normal\">d</mi><mi mathvariant=\"normal\">i</mi><mi mathvariant=\"normal\">o</mi></mrow></mrow></msub><mo>&#x0003D;</mo><mfrac><mrow><mn>1</mn></mrow><mrow><mi>b</mi><mo>&#x02212;</mo><mi>a</mi></mrow></mfrac><msubsup><mo>&#x0222B;</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>f</mi></mrow></math> è continua, assume quel valore in almeno un punto dell’intervallo."
            }
          ]
        },
        {
          "title": "Una sostituzione con gli estremi",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Cambiano anche i limiti",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mn>0</mn><mn>1</mn></msubsup><mn>2</mn><mi>x</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math></span> Poniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>d</mi><mi>u</mi><mo>&#x0003D;</mo><mn>2</mn><mi>x</mi><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi></mrow></math>. Gli estremi diventano <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\">&#x00028;</mo><mn>0</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>0</mn></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\">&#x00028;</mo><mn>1</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>1</mn></mrow></math>: <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mn>0</mn><mn>1</mn></msubsup><msup><mi>e</mi><mi>u</mi></msup><mspace width=\"0.167em\" /><mi>d</mi><mi>u</mi><mo>&#x0003D;</mo><mi>e</mi><mo>&#x02212;</mo><mn>1</mn></mrow></math></span> Con limiti già trasformati, non serve tornare a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math>."
            },
            {
              "title": "Un altro esempio",
              "html": "<span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mn>0</mn><mn>2</mn></msubsup><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></mfrac></mrow></math></span> Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi><mo>&#x0003D;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn></mrow></math>, i nuovi estremi sono <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn></mrow></math>. Quindi <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mn>1</mn><mn>3</mn></msubsup><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><mi>u</mi></mrow></mfrac><mo>&#x0003D;</mo><mi>ln</mi><mn>3</mn></mrow></math></span> Puoi anche trovare <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>ln</mi><mo stretchy=\"false\">&#x0007C;</mo><mi>x</mi><mo>&#x0002B;</mo><mn>1</mn><mo stretchy=\"false\">&#x0007C;</mo></mrow></math> e valutarla direttamente agli estremi originali. <strong>Non mescolare limiti in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi></mrow></math> e integranda in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>u</mi></mrow></math>.</strong>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Se ∫ da 0 a 2 di f(x) dx vale 7, quanto vale l’integrale da 2 a 0?",
            "options": [
              "7",
              "0",
              "−7",
              "14"
            ],
            "answer": 2,
            "feedback": "Invertire l’ordine degli estremi cambia il segno.",
            "feedbackByOption": [
              "Controlla questo passaggio: Invertire l’ordine degli estremi cambia il segno.",
              "Controlla questo passaggio: Invertire l’ordine degli estremi cambia il segno.",
              "Invertire l’ordine degli estremi cambia il segno.",
              "Controlla questo passaggio: Invertire l’ordine degli estremi cambia il segno."
            ]
          },
          {
            "question": "In ∫ da 0 a 2 di 1/(x+1) dx, con u=x+1, quali sono i nuovi estremi?",
            "options": [
              "0 e 2",
              "1 e 3",
              "−1 e 1",
              "0 e 3"
            ],
            "answer": 1,
            "feedback": "Sostituisci gli estremi nella relazione u=x+1.",
            "feedbackByOption": [
              "Controlla questo passaggio: Sostituisci gli estremi nella relazione u=x+1.",
              "Sostituisci gli estremi nella relazione u=x+1.",
              "Controlla questo passaggio: Sostituisci gli estremi nella relazione u=x+1.",
              "Controlla questo passaggio: Sostituisci gli estremi nella relazione u=x+1."
            ]
          },
          {
            "question": "Su [0,4] l’integrale di f vale 12. Qual è il suo valore medio?",
            "options": [
              "12",
              "48",
              "4",
              "3"
            ],
            "answer": 3,
            "feedback": "Dividi l’integrale per la lunghezza dell’intervallo: 12/4=3.",
            "feedbackByOption": [
              "Controlla questo passaggio: Dividi l’integrale per la lunghezza dell’intervallo: 12/4=3.",
              "Controlla questo passaggio: Dividi l’integrale per la lunghezza dell’intervallo: 12/4=3.",
              "Controlla questo passaggio: Dividi l’integrale per la lunghezza dell’intervallo: 12/4=3.",
              "Dividi l’integrale per la lunghezza dell’intervallo: 12/4=3."
            ]
          }
        ]
      }
    },
    {
      "id": "dato-iniziale",
      "title": "Ricostruire una funzione da un dato iniziale",
      "cards": [
        {
          "title": "Dalla derivata al valore della funzione",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il dato iniziale",
              "html": "Supponiamo di conoscere la derivata di una funzione e un suo valore. Se <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>F</mi><mi>&#x02032;</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>6</mn><mspace width=\"2em\" /><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mn>0</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>100</mn></mrow></math></span> l’integrale indefinito dà la famiglia <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>x</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>&#x0002B;</mo><mn>6</mn><mi>x</mi><mo>&#x0002B;</mo><mi>C</mi></mrow></math></span> Il dato iniziale impone <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>C</mi><mo>&#x0003D;</mo><mn>100</mn></mrow></math>."
            },
            {
              "title": "La variazione e il valore finale",
              "html": "La variazione della funzione fra <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>x</mi><mo>&#x0003D;</mo><mn>5</mn></mrow></math> è <span class=\"int-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msubsup><mo>&#x0222B;</mo><mn>0</mn><mn>5</mn></msubsup><mo stretchy=\"false\">&#x00028;</mo><mn>4</mn><mi>x</mi><mo>&#x0002B;</mo><mn>6</mn><mo stretchy=\"false\">&#x00029;</mo><mspace width=\"0.167em\" /><mi>d</mi><mi>x</mi><mo>&#x0003D;</mo><mn>80</mn></mrow></math></span> Quindi <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mn>5</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mn>0</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mn>80</mn><mo>&#x0003D;</mo><mn>180</mn></mrow></math>. <strong>L’integrale della derivata dà la variazione della funzione; per ottenere il valore finale devi aggiungere il valore iniziale.</strong>"
            },
            {
              "title": "Controlla prima le condizioni",
              "html": "La formula <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> non autorizza ad attraversare senza controllo un punto in cui la funzione non è definita. Per esempio <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn><mo>&#x0002F;</mo><mi>x</mi></mrow></math> ha un problema in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0</mn></mrow></math>: l’integrale da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>1</mn></mrow></math> a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>1</mn></mrow></math> non si calcola semplicemente sottraendo due logaritmi.<br><br>Questi sono <strong>integrali impropri</strong>, un argomento separato dal percorso attuale."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Se conosci F′, che cosa dà ∫ da 0 a 5 di F′(x) dx?",
            "options": [
              "Sempre il valore F(5).",
              "La variazione F(5)−F(0).",
              "Il valore iniziale F(0).",
              "La derivata seconda F″(5)."
            ],
            "answer": 1,
            "feedback": "Per ottenere il valore finale devi aggiungere il valore iniziale.",
            "feedbackByOption": [
              "Controlla questo passaggio: Per ottenere il valore finale devi aggiungere il valore iniziale.",
              "Per ottenere il valore finale devi aggiungere il valore iniziale.",
              "Controlla questo passaggio: Per ottenere il valore finale devi aggiungere il valore iniziale.",
              "Controlla questo passaggio: Per ottenere il valore finale devi aggiungere il valore iniziale."
            ]
          },
          {
            "question": "Con F′(x)=4x+6 e F(0)=100, quanto vale F(5)?",
            "options": [
              "80",
              "100",
              "180",
              "200"
            ],
            "answer": 2,
            "feedback": "La variazione è 80; aggiungi il valore iniziale 100.",
            "feedbackByOption": [
              "Controlla questo passaggio: La variazione è 80; aggiungi il valore iniziale 100.",
              "Controlla questo passaggio: La variazione è 80; aggiungi il valore iniziale 100.",
              "La variazione è 80; aggiungi il valore iniziale 100.",
              "Controlla questo passaggio: La variazione è 80; aggiungi il valore iniziale 100."
            ]
          },
          {
            "question": "Puoi calcolare ∫ da −1 a 1 di 1/x dx semplicemente con ln|1|−ln|−1|?",
            "options": [
              "Sì, vale zero.",
              "Sì, perché il modulo elimina ogni problema.",
              "No: c’è una singolarità in 0 e occorre trattare gli integrali impropri.",
              "Sì, aggiungendo C."
            ],
            "answer": 2,
            "feedback": "Devi controllare che l’integranda sia definita e integrabile sul tratto considerato.",
            "feedbackByOption": [
              "Controlla questo passaggio: Devi controllare che l’integranda sia definita e integrabile sul tratto considerato.",
              "Controlla questo passaggio: Devi controllare che l’integranda sia definita e integrabile sul tratto considerato.",
              "Devi controllare che l’integranda sia definita e integrabile sul tratto considerato.",
              "Controlla questo passaggio: Devi controllare che l’integranda sia definita e integrabile sul tratto considerato."
            ]
          }
        ]
      }
    },
    {
      "id": "recap",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Definito:</strong> un’accumulazione con segno su un intervallo, quindi un numero.</li><li><strong>Con una primitiva:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>b</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x02212;</mo><mi>F</mi><mo stretchy=\"false\">&#x00028;</mo><mi>a</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>, senza <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x0002B;</mo><mi>C</mi></mrow></math>.</li><li><strong>Area geometrica:</strong> considera il valore assoluto se la funzione cambia segno.</li><li><strong>Sostituzione:</strong> cambia anche gli estremi, oppure torna alla variabile originale prima di valutarli.</li><li><strong>Integrando la derivata trovi una variazione:</strong> il valore iniziale permette di ricostruire il valore finale.</li></ul>"
            }
          ]
        }
      ]
    }
  ]
};
