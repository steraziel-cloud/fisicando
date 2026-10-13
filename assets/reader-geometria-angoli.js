/* Original textual drafts; scientific reference and pending visual work: docs/geometry-angles-path.md */
window.READER_LESSONS["geometria-angoli"] = {
  "title": "Gli angoli: costruzione e classificazione",
  "subtitle": "Matematica · Medie e biennio · Bozza testuale in lavorazione",
  "version": 2,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "caffetteria",
      "title": "La scatolina di Bjorne",
      "cards": [
        {
          "id": "cafe-fumetto",
          "title": "La scatolina di Bjorne",
          "hideTitle": true,
          "board": "cafe-story",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "",
              "cafeStage": 0
            },
            {
              "title": "",
              "html": "",
              "cafeStage": 1
            },
            {
              "title": "",
              "html": "",
              "cafeStage": 2
            },
            {
              "title": "",
              "html": "",
              "cafeStage": 3
            },
            {
              "title": "",
              "html": "",
              "cafeStage": 4
            },
            {
              "title": "",
              "html": "",
              "cafeStage": 5
            }
          ]
        },
        {
          "id": "cafe-ricerca",
          "title": "Dove sarà la scatolina?",
          "board": "cafe-game",
          "steps": [
            {
              "title": "",
              "html": ""
            }
          ]
        }
      ]
    },
    {
      "id": "costruzione",
      "title": "Due semirette, due angoli",
      "cards": [
        {
          "id": "cafe-definizione",
          "title": "La definizione di angolo",
          "board": "cafe-geometry",
          "steps": [
            {
              "title": "",
              "cafeStage": 0,
              "html": "Un <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-angolo\">angolo</button> è <strong>ciascuna delle due regioni del <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-piano\">piano</button> individuate da due <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semiretta\">semirette</button> con la stessa origine, comprese le <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semiretta\">semirette</button></strong>."
            },
            {
              "title": "Un segno nella figura",
              "html": "Gli <strong>archetti</strong> vicino al vertice distinguono le due regioni: in questa figura ne usiamo uno per una regione e due per l’altra.<br><br>Trascinando i lati, le aperture cambiano: <strong>il numero di archetti non definisce un angolo come convesso o concavo</strong>. L’angolo comprende tutta la regione indicata, non soltanto la zona vicina al vertice.",
              "cafeStage": 1
            },
            {
              "title": "Lati e vertice",
              "cafeStage": 2,
              "html": "Le due <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semiretta\">semirette</button> sono i <strong>lati</strong> dell’angolo; la loro origine comune è il <strong>vertice</strong>. L’angolo comprende tutta la regione scelta, anche oltre ciò che riusciamo a disegnare.",
              "cloze": [
                {
                  "before": "Le due semirette sono ",
                  "options": [
                    "i lati",
                    "il vertice"
                  ],
                  "answer": 0,
                  "after": " dell’angolo.",
                  "feedback": "I lati sono le due semirette; il vertice è la loro origine comune."
                }
              ]
            },
            {
              "title": "Dalla stanza alla geometria",
              "html": "Nel linguaggio quotidiano, «vicino all’angolo» ci ha indicato una zona vicino all’incontro delle pareti. In geometria, invece, l’angolo comprende <strong>l’intera regione scelta, che continua senza limite</strong>.",
              "cafeStage": 3,
              "cumulativeFrom": 3
            },
            {
              "title": "Oltre il disegno",
              "html": "La stanza ha dei confini. Il <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-piano\">piano</button> geometrico e le <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semiretta\">semirette</button> continuano oltre il disegno. Il <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-punto\">punto</button> O è il vertice, non tutto l’angolo.",
              "cafeStage": 3,
              "cumulativeFrom": 3
            }
          ]
        },
        {
          "title": "Un nome per riconoscerlo",
          "steps": [
            {
              "title": "Tre lettere, un angolo",
              "html": "Scegliamo un <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-punto\">punto</button> A su un lato e un <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-punto\">punto</button> B sull’altro. <strong>A e B sono nomi di punti sui lati, non nomi dei lati.</strong><br><br>Scriviamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover accent=\"true\"><mrow><mi mathvariant=\"normal\">A</mi><mi mathvariant=\"normal\">O</mi><mi mathvariant=\"normal\">B</mi></mrow><mo stretchy=\"true\">ˆ</mo></mover></math>, leggendo «angolo A, O, B». <strong>La lettera del vertice sta al centro.</strong>",
              "cafeStage": 12,
              "cloze": [
                {
                  "before": "Nella scrittura AÔB, il vertice è ",
                  "options": [
                    "A",
                    "O"
                  ],
                  "answer": 1,
                  "after": ".",
                  "feedback": "Il nome del vertice sta al centro."
                }
              ]
            },
            {
              "title": "Due cappelli per due angoli",
              "html": "Nelle nostre figure usiamo il <strong>cappello normale</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover accent=\"true\"><mrow><mi mathvariant=\"normal\">A</mi><mi mathvariant=\"normal\">O</mi><mi mathvariant=\"normal\">B</mi></mrow><mo stretchy=\"true\">ˆ</mo></mover></math> per indicare l’angolo segnato con un archetto. Il <strong>cappello rovesciato</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover accent=\"true\"><mrow><mi mathvariant=\"normal\">A</mi><mi mathvariant=\"normal\">O</mi><mi mathvariant=\"normal\">B</mi></mrow><mo stretchy=\"true\">ˇ</mo></mover></math> indica l’altra regione, segnata con due archetti.<br><br>Se i lati sono opposti, le due regioni hanno la stessa apertura: osserviamo il disegno per distinguere quale stiamo indicando. Se coincidono, i due simboli ci permettono di distinguere <strong>l’angolo nullo dall’angolo giro</strong>.",
              "cafeStage": 13
            },
            {
              "title": "Un nome più breve",
              "html": "Scrivere ogni volta tre lettere può essere scomodo. <strong>Se è chiaro quale angolo stiamo indicando</strong>, possiamo usare soltanto il nome del vertice con il cappello: <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover accent=\"true\"><mrow><mi mathvariant=\"normal\">O</mi></mrow><mo stretchy=\"true\">ˆ</mo></mover></math> oppure <math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mover accent=\"true\"><mrow><mi mathvariant=\"normal\">O</mi></mrow><mo stretchy=\"true\">ˇ</mo></mover></math>.<br><br>Possiamo anche assegnargli una lettera greca, come <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-alfa\">α</button>, che si legge «alfa». È un nome breve: la figura deve far capire a quale angolo si riferisce.",
              "cafeStage": 14,
              "replace": true
            }
          ],
          "board": "cafe-geometry"
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale nome a tre lettere indica l’angolo disegnato con vertice O?",
            "options": [
              "AÔB.",
              "OÂB.",
              "A B̂ O.",
              "Non possiamo chiamarlo con tre lettere."
            ],
            "answer": 0,
            "feedback": "La lettera del vertice, O, va al centro; A e B sono punti sui lati.",
            "illustration": {
              "src": "assets/images/reader/quiz-angolo-nome-v1.svg",
              "alt": "Due semirette con origine O e una regione del piano evidenziata.",
              "width": 360,
              "height": 220
            }
          },
          {
            "question": "Che cosa sono i lati di un angolo?",
            "options": [
              "Due semirette con la stessa origine.",
              "Due segmenti necessariamente della stessa lunghezza.",
              "Due rette necessariamente parallele.",
              "Due punti qualsiasi."
            ],
            "answer": 0,
            "feedback": "I lati sono semirette; la loro origine comune è il vertice.",
            "feedbackByOption": [
              "Esatto. I lati sono semirette; la loro origine comune è il vertice.",
              "Controlla questa distinzione: I lati sono semirette; la loro origine comune è il vertice.",
              "Controlla questa distinzione: I lati sono semirette; la loro origine comune è il vertice.",
              "Controlla questa distinzione: I lati sono semirette; la loro origine comune è il vertice."
            ]
          },
          {
            "question": "In AÔB, quale lettera indica il vertice?",
            "options": [
              "A.",
              "O.",
              "B.",
              "Tutte e tre."
            ],
            "answer": 1,
            "feedback": "Nella notazione con tre lettere, quella centrale indica il vertice.",
            "feedbackByOption": [
              "Controlla questa distinzione: Nella notazione con tre lettere, quella centrale indica il vertice.",
              "Esatto. Nella notazione con tre lettere, quella centrale indica il vertice.",
              "Controlla questa distinzione: Nella notazione con tre lettere, quella centrale indica il vertice.",
              "Controlla questa distinzione: Nella notazione con tre lettere, quella centrale indica il vertice."
            ]
          },
          {
            "question": "Due semirette non opposte e non coincidenti, con la stessa origine, individuano…",
            "options": [
              "Un solo angolo.",
              "Tre angoli.",
              "Due angoli, uno per ciascuna regione.",
              "Soltanto due segmenti."
            ],
            "answer": 2,
            "feedback": "Dobbiamo scegliere quale delle due regioni del piano stiamo considerando.",
            "feedbackByOption": [
              "Controlla questa distinzione: Dobbiamo scegliere quale delle due regioni del piano stiamo considerando.",
              "Controlla questa distinzione: Dobbiamo scegliere quale delle due regioni del piano stiamo considerando.",
              "Esatto. Dobbiamo scegliere quale delle due regioni del piano stiamo considerando.",
              "Controlla questa distinzione: Dobbiamo scegliere quale delle due regioni del piano stiamo considerando."
            ]
          },
          {
            "question": "Osserva l’angolo evidenziato nella figura. Come possiamo abbreviarne il nome senza creare confusione?",
            "options": [
              "Con il nome del vertice e il cappello, oppure con una lettera greca assegnata all’angolo.",
              "Con il nome di un punto qualsiasi su uno dei lati.",
              "Con il nome del vertice senza alcun segno, anche quando ci sono più angoli da distinguere.",
              "Con i nomi di due punti sui lati, eliminando sempre quello del vertice."
            ],
            "answer": 0,
            "feedback": "Possiamo usare il vertice con il cappello o una lettera greca, purché sia chiaro quale angolo indica il nome.",
            "illustration": {
              "src": "assets/images/reader/quiz-angolo-nome-v1.svg",
              "alt": "Due semirette di origine O, con A e B segnati sui lati e una regione colorata.",
              "width": 360,
              "height": 220
            }
          }
        ]
      }
    },
    {
      "id": "regioni",
      "title": "Convesso, concavo e casi speciali",
      "cards": [
        {
          "title": "Due regioni diverse",
          "steps": [
            {
              "title": "L’angolo convesso",
              "html": "Prolunghiamo i lati oltre il vertice, dalla parte opposta rispetto alle <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semiretta\">semirette</button> che formano l’angolo.<br><br>Un angolo è <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-convesso\">convesso</button> quando <strong>non contiene i prolungamenti dei suoi lati oltre il vertice</strong>. Nella figura è la regione più piccola.",
              "cafeStage": 4,
              "cloze": [
                {
                  "before": "L’angolo convesso ",
                  "options": [
                    "contiene",
                    "non contiene"
                  ],
                  "answer": 1,
                  "after": " i prolungamenti dei lati oltre il vertice.",
                  "feedback": "I prolungamenti si trovano nell’altra regione."
                }
              ]
            },
            {
              "title": "L’angolo concavo",
              "html": "Un angolo è <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-concavo\">concavo</button> quando <strong>contiene i prolungamenti dei suoi lati oltre il vertice</strong>. Nella figura è la regione più grande.<br><br><strong>I lati sono gli stessi: cambia la regione considerata.</strong>",
              "cafeStage": 5
            }
          ],
          "board": "cafe-geometry"
        },
        {
          "title": "Quando i lati stanno sulla stessa retta",
          "steps": [
            {
              "title": "Il piatto",
              "html": "Se i lati sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semirette-opposte\">semirette opposte</button>, individuano due <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-piatto\">angoli piatti</button>. Ciascuno occupa metà <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-piano\">piano</button>.",
              "cafeStage": 6,
              "cloze": [
                {
                  "before": "Un angolo piatto occupa ",
                  "options": [
                    "metà",
                    "tutto il"
                  ],
                  "answer": 0,
                  "after": " piano.",
                  "feedback": "Ciascuna delle due regioni occupa metà piano."
                }
              ]
            },
            {
              "title": "Nullo e giro",
              "html": "Se i lati coincidono, distinguiamo due casi: l’angolo <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-nullo\">nullo</button> è formato dalla sola <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semiretta\">semiretta</button> comune; l’angolo <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-giro\">giro</button> comprende tutto il <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-piano\">piano</button>.<br><br><strong>I lati sono gli stessi: cambia la regione considerata.</strong>",
              "cafeStage": 7
            }
          ],
          "board": "cafe-geometry"
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "La regione colorata nella figura rappresenta un angolo…",
            "options": [
              "Convesso.",
              "Concavo.",
              "Piatto.",
              "Giro."
            ],
            "answer": 0,
            "feedback": "La regione colorata non contiene i prolungamenti dei lati oltre il vertice.",
            "illustration": {
              "src": "assets/images/reader/quiz-angolo-convesso-v1.svg",
              "alt": "Due semirette con origine O e una regione del piano evidenziata.",
              "width": 360,
              "height": 220
            }
          },
          {
            "question": "E in questa figura, quale angolo è evidenziato?",
            "options": [
              "Convesso.",
              "Concavo.",
              "Nullo.",
              "Piatto."
            ],
            "answer": 1,
            "feedback": "La regione colorata contiene i prolungamenti dei lati oltre il vertice.",
            "illustration": {
              "src": "assets/images/reader/quiz-angolo-concavo-v1.svg",
              "alt": "Due semirette con origine O e una regione del piano evidenziata.",
              "width": 360,
              "height": 220
            }
          },
          {
            "question": "Come classifichi l’angolo colorato nella figura?",
            "options": [
              "Retto.",
              "Giro.",
              "Piatto.",
              "Nullo."
            ],
            "answer": 2,
            "feedback": "I lati sono semirette opposte e la regione occupa metà piano.",
            "illustration": {
              "src": "assets/images/reader/quiz-angolo-piatto-v1.svg",
              "alt": "Due semirette con origine O e una regione del piano evidenziata.",
              "width": 360,
              "height": 220
            }
          },
          {
            "question": "Osserva la regione colorata e i prolungamenti dei lati oltre O. Quale osservazione ci permette di riconoscere un angolo concavo?",
            "options": [
              "La regione non contiene i prolungamenti dei lati oltre O.",
              "I lati sono semirette opposte.",
              "La regione contiene i prolungamenti dei lati oltre O.",
              "I due lati coincidono in una sola semiretta."
            ],
            "answer": 2,
            "feedback": "Un angolo concavo contiene i prolungamenti dei lati oltre il vertice. Nella figura i tratti viola si trovano nella regione colorata.",
            "illustration": {
              "src": "assets/images/reader/quiz-angolo-prolungamenti-v1.svg",
              "alt": "Due semirette con origine O; la regione più ampia è colorata e contiene i tratti viola disegnati oltre O, dalla parte opposta rispetto ai lati.",
              "width": 360,
              "height": 220
            }
          },
          {
            "question": "Un angolo piatto ha come lati…",
            "options": [
              "Due semirette opposte.",
              "Due semirette coincidenti.",
              "Due segmenti paralleli.",
              "Due semirette senza origine comune."
            ],
            "answer": 0,
            "feedback": "Le semirette opposte hanno la stessa origine e direzioni opposte lungo una retta.",
            "feedbackByOption": [
              "Esatto. Le semirette opposte hanno la stessa origine e direzioni opposte lungo una retta.",
              "Controlla questa distinzione: Le semirette opposte hanno la stessa origine e direzioni opposte lungo una retta.",
              "Controlla questa distinzione: Le semirette opposte hanno la stessa origine e direzioni opposte lungo una retta.",
              "Controlla questa distinzione: Le semirette opposte hanno la stessa origine e direzioni opposte lungo una retta."
            ]
          },
          {
            "question": "Nullo e giro hanno lati coincidenti. Che cosa li distingue?",
            "options": [
              "Il giro ha lati più lunghi.",
              "Il nullo è la sola semiretta; il giro comprende tutto il piano.",
              "Il nullo ha due vertici.",
              "Non c’è alcuna differenza."
            ],
            "answer": 1,
            "feedback": "I lati da soli non bastano: bisogna indicare la regione considerata.",
            "feedbackByOption": [
              "Controlla questa distinzione: I lati da soli non bastano: bisogna indicare la regione considerata.",
              "Esatto. I lati da soli non bastano: bisogna indicare la regione considerata.",
              "Controlla questa distinzione: I lati da soli non bastano: bisogna indicare la regione considerata.",
              "Controlla questa distinzione: I lati da soli non bastano: bisogna indicare la regione considerata."
            ]
          }
        ]
      }
    },
    {
      "id": "tipi",
      "title": "Retto, acuto e ottuso",
      "cards": [
        {
          "title": "Un’apertura di riferimento",
          "steps": [
            {
              "title": "Il retto",
              "html": "Dividiamo un angolo piatto in <strong>due angoli della stessa apertura</strong>. Ciascuno è un angolo <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-retto\">retto</button>. Nel disegno lo riconosciamo anche dal piccolo quadratino vicino al vertice.",
              "cafeStage": 8
            },
            {
              "title": "Più piccolo o più grande",
              "html": "Un angolo <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-acuto\">acuto</button> ha un’apertura <strong>maggiore del nullo e minore del retto</strong>.<br><br>Un angolo <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-ottuso\">ottuso</button> ha un’apertura <strong>maggiore del retto e minore del piatto</strong>.",
              "cafeStage": 9,
              "cloze": [
                {
                  "before": "Un angolo acuto è ",
                  "options": [
                    "più piccolo",
                    "più grande"
                  ],
                  "answer": 0,
                  "after": " di un angolo retto.",
                  "feedback": "L’apertura dell’acuto è minore di quella del retto."
                },
                {
                  "before": "Un angolo ottuso è ",
                  "options": [
                    "più piccolo",
                    "più grande"
                  ],
                  "answer": 1,
                  "after": " di un angolo retto.",
                  "feedback": "L’ottuso è più aperto del retto, ma meno del piatto."
                }
              ]
            }
          ],
          "board": "cafe-geometry"
        },
        {
          "title": "Conta l’apertura",
          "steps": [
            {
              "title": "Anche se ruotiamo la figura",
              "html": "Un angolo retto resta retto anche se lo disegniamo inclinato. Allungare i tratti visibili dei lati non cambia il tipo di angolo: <strong>conta l’apertura, non l’orientamento o la grandezza del disegno.</strong>",
              "cafeStage": 10
            }
          ],
          "board": "cafe-geometry"
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Osserva l’apertura colorata: quale tipo di angolo riconosci?",
            "options": [
              "Acuto.",
              "Retto.",
              "Ottuso.",
              "Piatto."
            ],
            "answer": 0,
            "feedback": "La sua apertura è maggiore del nullo e minore del retto.",
            "illustration": {
              "src": "assets/images/reader/quiz-angolo-acuto-v1.svg",
              "alt": "Due semirette con origine O e una regione del piano evidenziata.",
              "width": 360,
              "height": 220
            }
          },
          {
            "question": "Il disegno è inclinato. Come classifichi questo angolo?",
            "options": [
              "Acuto.",
              "Ottuso.",
              "Retto.",
              "Concavo."
            ],
            "answer": 2,
            "feedback": "Ruotare il disegno non cambia l’apertura: questo angolo è retto.",
            "illustration": {
              "src": "assets/images/reader/quiz-angolo-retto-v1.svg",
              "alt": "Due semirette con origine O e una regione del piano evidenziata.",
              "width": 360,
              "height": 220
            }
          },
          {
            "question": "Quale angolo è evidenziato nella figura?",
            "options": [
              "Piatto.",
              "Acuto.",
              "Concavo.",
              "Ottuso."
            ],
            "answer": 3,
            "feedback": "L’apertura è maggiore del retto e minore del piatto.",
            "illustration": {
              "src": "assets/images/reader/quiz-angolo-ottuso-v1.svg",
              "alt": "Due semirette con origine O e una regione del piano evidenziata.",
              "width": 360,
              "height": 220
            }
          },
          {
            "question": "Come otteniamo un angolo retto a partire da un piatto?",
            "options": [
              "Raddoppiando il piatto.",
              "Dividendo il giro in due parti uguali.",
              "Dividendo il piatto in due angoli della stessa apertura.",
              "Allungando un lato."
            ],
            "answer": 2,
            "feedback": "Il retto è metà del piatto e un quarto del giro.",
            "feedbackByOption": [
              "Controlla questa distinzione: Il retto è metà del piatto e un quarto del giro.",
              "Controlla questa distinzione: Il retto è metà del piatto e un quarto del giro.",
              "Esatto. Il retto è metà del piatto e un quarto del giro.",
              "Controlla questa distinzione: Il retto è metà del piatto e un quarto del giro."
            ]
          },
          {
            "question": "Un angolo più grande del retto e più piccolo del piatto è…",
            "options": [
              "Acuto.",
              "Concavo.",
              "Giro.",
              "Ottuso."
            ],
            "answer": 3,
            "feedback": "L’ottuso si trova tra il retto e il piatto.",
            "feedbackByOption": [
              "Controlla questa distinzione: L’ottuso si trova tra il retto e il piatto.",
              "Controlla questa distinzione: L’ottuso si trova tra il retto e il piatto.",
              "Controlla questa distinzione: L’ottuso si trova tra il retto e il piatto.",
              "Esatto. L’ottuso si trova tra il retto e il piatto."
            ]
          },
          {
            "question": "Ruotiamo il disegno di un angolo acuto senza cambiarne l’apertura. Che cosa otteniamo?",
            "options": [
              "Ancora un angolo acuto.",
              "Sempre un retto.",
              "Sempre un ottuso.",
              "Dipende dalla lunghezza dei lati disegnati."
            ],
            "answer": 0,
            "feedback": "Il tipo di angolo dipende dall’apertura, che la rotazione non cambia.",
            "feedbackByOption": [
              "Esatto. Il tipo di angolo dipende dall’apertura, che la rotazione non cambia.",
              "Controlla questa distinzione: Il tipo di angolo dipende dall’apertura, che la rotazione non cambia.",
              "Controlla questa distinzione: Il tipo di angolo dipende dall’apertura, che la rotazione non cambia.",
              "Controlla questa distinzione: Il tipo di angolo dipende dall’apertura, che la rotazione non cambia."
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
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Due <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semiretta\">semirette</button> con origine comune individuano due angoli.</strong> Scegli quale regione osservare.</li><li><strong>I lati sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semiretta\">semirette</button>; il vertice è l’origine comune.</strong> L’archetto indica la regione scelta.</li><li><strong>Convesso e concavo sono due aperture diverse con gli stessi lati.</strong> I prolungamenti dei lati stanno nella regione concava.</li><li><strong>Opposti: piatto. Coincidenti: nullo oppure giro.</strong> Nel primo caso ciascuna regione occupa metà <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-piano\">piano</button>; nel secondo scegliamo la sola <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-semiretta\">semiretta</button> o tutto il <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-piano\">piano</button>.</li><li><strong>Acuto, retto, ottuso: confronta l’apertura.</strong> Il retto è metà del piatto.</li></ul>",
              "cafeStage": 2
            }
          ],
          "board": "cafe-closing"
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa indica l’archetto vicino al vertice?",
            "options": [
              "Dove termina l’angolo.",
              "Quale angolo stiamo considerando.",
              "Quanto sono lunghi i lati.",
              "Un secondo vertice."
            ],
            "answer": 1,
            "feedback": "L’archetto seleziona la regione: non ne costituisce un bordo esterno.",
            "feedbackByOption": [
              "Controlla questa distinzione: L’archetto seleziona la regione: non ne costituisce un bordo esterno.",
              "Esatto. L’archetto seleziona la regione: non ne costituisce un bordo esterno.",
              "Controlla questa distinzione: L’archetto seleziona la regione: non ne costituisce un bordo esterno.",
              "Controlla questa distinzione: L’archetto seleziona la regione: non ne costituisce un bordo esterno."
            ]
          },
          {
            "question": "Se prolungando i lati oltre il vertice restiamo nella regione scelta, l’angolo ordinario è…",
            "options": [
              "Acuto.",
              "Retto.",
              "Concavo.",
              "Convesso."
            ],
            "answer": 2,
            "feedback": "La regione concava contiene i prolungamenti dei lati oltre il vertice.",
            "feedbackByOption": [
              "Controlla questa distinzione: La regione concava contiene i prolungamenti dei lati oltre il vertice.",
              "Controlla questa distinzione: La regione concava contiene i prolungamenti dei lati oltre il vertice.",
              "Esatto. La regione concava contiene i prolungamenti dei lati oltre il vertice.",
              "Controlla questa distinzione: La regione concava contiene i prolungamenti dei lati oltre il vertice."
            ]
          },
          {
            "question": "Un angolo ha un’apertura maggiore del nullo e minore del retto. Come si chiama?",
            "options": [
              "Ottuso.",
              "Piatto.",
              "Giro.",
              "Acuto."
            ],
            "answer": 3,
            "feedback": "L’acuto ha un’apertura positiva più piccola di quella del retto.",
            "feedbackByOption": [
              "Controlla questa distinzione: L’acuto ha un’apertura positiva più piccola di quella del retto.",
              "Controlla questa distinzione: L’acuto ha un’apertura positiva più piccola di quella del retto.",
              "Controlla questa distinzione: L’acuto ha un’apertura positiva più piccola di quella del retto.",
              "Esatto. L’acuto ha un’apertura positiva più piccola di quella del retto."
            ]
          }
        ]
      }
    }
  ],
  "nextLesson": {
    "id": "geometria-confronto-angoli"
  }
};

window.READER_LESSONS["geometria-confronto-angoli"] = {
  "title": "Confrontare gli angoli",
  "subtitle": "Matematica · Medie e biennio · Bozza testuale in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "sovrapporre",
      "title": "Sovrapporre per confrontare",
      "cards": [
        {
          "title": "Quale dei due è più aperto?",
          "steps": [
            {
              "title": "Prepariamo il confronto",
              "html": "Due angoli possono sembrare diversi solo perché sono disegnati in posizioni diverse. Per confrontarli, <strong>facciamo coincidere i vertici e un lato</strong>, disponendo le due regioni dalla stessa parte del lato comune."
            },
            {
              "title": "Guardiamo l’altro lato",
              "html": "Se anche gli altri lati coincidono e le regioni si sovrappongono, gli angoli sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-congruenti\">congruenti</button>. Se un angolo è contenuto nell’altro, è il più piccolo.<br><br>Durante il confronto spostiamo o ruotiamo la figura <strong>senza modificarne l’apertura</strong>."
            }
          ]
        },
        {
          "title": "Una stessa ampiezza",
          "steps": [
            {
              "title": "Il nome della grandezza",
              "html": "L’<button type=\"button\" class=\"rm-keyword\" data-term=\"geo-ampiezza\">ampiezza</button> descrive quanto è aperto un angolo. Angoli congruenti hanno la stessa ampiezza, anche se si trovano in punti diversi.<br><br><strong>La posizione cambia; l’apertura resta.</strong>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è il primo passo per confrontare due angoli per sovrapposizione?",
            "options": [
              "Far coincidere i vertici e un lato.",
              "Far coincidere solo le estremità dei tratti disegnati.",
              "Rendere i lati della stessa lunghezza.",
              "Spostare soltanto l’archetto."
            ],
            "answer": 0,
            "feedback": "Per confrontare le aperture usiamo lo stesso vertice e lo stesso lato di partenza.",
            "feedbackByOption": [
              "Esatto. Per confrontare le aperture usiamo lo stesso vertice e lo stesso lato di partenza.",
              "Controlla questa distinzione: Per confrontare le aperture usiamo lo stesso vertice e lo stesso lato di partenza.",
              "Controlla questa distinzione: Per confrontare le aperture usiamo lo stesso vertice e lo stesso lato di partenza.",
              "Controlla questa distinzione: Per confrontare le aperture usiamo lo stesso vertice e lo stesso lato di partenza."
            ]
          },
          {
            "question": "Gli angoli hanno vertici e lati sovrapposti, ma uno è convesso e l’altro concavo. Sono congruenti?",
            "options": [
              "Sì: bastano gli stessi lati.",
              "No: le regioni e le aperture sono diverse.",
              "Sì: basta lo stesso vertice.",
              "Dipende dal colore."
            ],
            "answer": 1,
            "feedback": "Per la congruenza devono sovrapporsi le regioni considerate, non soltanto i bordi.",
            "feedbackByOption": [
              "Controlla questa distinzione: Per la congruenza devono sovrapporsi le regioni considerate, non soltanto i bordi.",
              "Esatto. Per la congruenza devono sovrapporsi le regioni considerate, non soltanto i bordi.",
              "Controlla questa distinzione: Per la congruenza devono sovrapporsi le regioni considerate, non soltanto i bordi.",
              "Controlla questa distinzione: Per la congruenza devono sovrapporsi le regioni considerate, non soltanto i bordi."
            ]
          },
          {
            "question": "Sovrapponendo correttamente due angoli, il primo è contenuto nel secondo. Quale è più piccolo?",
            "options": [
              "Il secondo.",
              "Sono necessariamente congruenti.",
              "Il primo.",
              "Non si possono confrontare."
            ],
            "answer": 2,
            "feedback": "Il contenimento, con vertice e lato comune, permette di confrontare le aperture.",
            "feedbackByOption": [
              "Controlla questa distinzione: Il contenimento, con vertice e lato comune, permette di confrontare le aperture.",
              "Controlla questa distinzione: Il contenimento, con vertice e lato comune, permette di confrontare le aperture.",
              "Esatto. Il contenimento, con vertice e lato comune, permette di confrontare le aperture.",
              "Controlla questa distinzione: Il contenimento, con vertice e lato comune, permette di confrontare le aperture."
            ]
          }
        ]
      }
    },
    {
      "id": "invarianti",
      "title": "Il disegno può ingannare",
      "cards": [
        {
          "title": "Lati più lunghi, stessa apertura",
          "steps": [
            {
              "title": "L’immagine è limitata",
              "html": "Di una semiretta disegniamo soltanto un tratto. Possiamo rappresentarlo più lungo o più corto: <strong>questo non cambia l’ampiezza dell’angolo</strong>."
            },
            {
              "title": "Anche il verso del disegno",
              "html": "Un retto inclinato è ancora retto; due angoli acuti non sono per forza congruenti. <strong>Lo stesso nome di categoria non garantisce la stessa apertura.</strong>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "In un disegno allunghiamo i tratti visibili dei lati senza cambiarne la direzione. L’ampiezza…",
            "options": [
              "Raddoppia.",
              "Diminuisce sempre.",
              "Diventa quella di un giro.",
              "Rimane invariata."
            ],
            "answer": 3,
            "feedback": "Le direzioni dei lati restano le stesse: la loro lunghezza visibile non determina l’apertura.",
            "feedbackByOption": [
              "Controlla questa distinzione: Le direzioni dei lati restano le stesse: la loro lunghezza visibile non determina l’apertura.",
              "Controlla questa distinzione: Le direzioni dei lati restano le stesse: la loro lunghezza visibile non determina l’apertura.",
              "Controlla questa distinzione: Le direzioni dei lati restano le stesse: la loro lunghezza visibile non determina l’apertura.",
              "Esatto. Le direzioni dei lati restano le stesse: la loro lunghezza visibile non determina l’apertura."
            ]
          },
          {
            "question": "Due angoli sono entrambi acuti. Possiamo concludere che sono congruenti?",
            "options": [
              "No: possono avere aperture diverse.",
              "Sì, sempre.",
              "Sì, se hanno vertici diversi.",
              "No, perché nessuna coppia di angoli acuti può essere congruente."
            ],
            "answer": 0,
            "feedback": "Acuto indica un intervallo di aperture; congruente richiede la stessa ampiezza.",
            "feedbackByOption": [
              "Esatto. Acuto indica un intervallo di aperture; congruente richiede la stessa ampiezza.",
              "Controlla questa distinzione: Acuto indica un intervallo di aperture; congruente richiede la stessa ampiezza.",
              "Controlla questa distinzione: Acuto indica un intervallo di aperture; congruente richiede la stessa ampiezza.",
              "Controlla questa distinzione: Acuto indica un intervallo di aperture; congruente richiede la stessa ampiezza."
            ]
          },
          {
            "question": "Due angoli retti sono disegnati con orientamenti diversi. Sono congruenti?",
            "options": [
              "No, perché i lati non sono paralleli.",
              "Sì: hanno entrambi metà dell’apertura di un piatto.",
              "Solo se condividono il vertice.",
              "Solo se gli archetti hanno lo stesso raggio."
            ],
            "answer": 1,
            "feedback": "Tutti gli angoli retti hanno la stessa ampiezza.",
            "feedbackByOption": [
              "Controlla questa distinzione: Tutti gli angoli retti hanno la stessa ampiezza.",
              "Esatto. Tutti gli angoli retti hanno la stessa ampiezza.",
              "Controlla questa distinzione: Tutti gli angoli retti hanno la stessa ampiezza.",
              "Controlla questa distinzione: Tutti gli angoli retti hanno la stessa ampiezza."
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
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Vertice su vertice, lato su lato.</strong> Disponi le regioni dalla stessa parte e confronta l’apertura.</li><li><strong>Congruenti significa sovrapponibili.</strong> Devono coincidere anche le regioni considerate.</li><li><strong>L’ampiezza non dipende dalla posizione.</strong> Né dalla lunghezza dei tratti visibili dei lati.</li></ul>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa hanno in comune due angoli congruenti?",
            "options": [
              "Necessariamente lo stesso vertice.",
              "Necessariamente lo stesso colore.",
              "La stessa ampiezza.",
              "Necessariamente lo stesso orientamento sul foglio."
            ],
            "answer": 2,
            "feedback": "La congruenza riguarda la figura e la sua apertura, non la posizione nel disegno.",
            "feedbackByOption": [
              "Controlla questa distinzione: La congruenza riguarda la figura e la sua apertura, non la posizione nel disegno.",
              "Controlla questa distinzione: La congruenza riguarda la figura e la sua apertura, non la posizione nel disegno.",
              "Esatto. La congruenza riguarda la figura e la sua apertura, non la posizione nel disegno.",
              "Controlla questa distinzione: La congruenza riguarda la figura e la sua apertura, non la posizione nel disegno."
            ]
          },
          {
            "question": "Per confrontare due angoli, oltre a far coincidere vertici e un lato, come disponiamo le regioni?",
            "options": [
              "Sempre da parti opposte.",
              "Con vertici di nuovo separati.",
              "Sempre una dentro l’archetto dell’altra.",
              "Dalla stessa parte del lato comune."
            ],
            "answer": 3,
            "feedback": "Le regioni dalla stessa parte permettono di confrontare la posizione degli altri lati.",
            "feedbackByOption": [
              "Controlla questa distinzione: Le regioni dalla stessa parte permettono di confrontare la posizione degli altri lati.",
              "Controlla questa distinzione: Le regioni dalla stessa parte permettono di confrontare la posizione degli altri lati.",
              "Controlla questa distinzione: Le regioni dalla stessa parte permettono di confrontare la posizione degli altri lati.",
              "Esatto. Le regioni dalla stessa parte permettono di confrontare la posizione degli altri lati."
            ]
          },
          {
            "question": "Un angolo viene spostato e ruotato senza deformarlo. Quale proprietà conserva?",
            "options": [
              "L’ampiezza.",
              "La posizione del vertice.",
              "L’orientamento dei lati sul foglio.",
              "La distanza del vertice dal bordo del foglio."
            ],
            "answer": 0,
            "feedback": "Spostamenti e rotazioni non modificano l’apertura.",
            "feedbackByOption": [
              "Esatto. Spostamenti e rotazioni non modificano l’apertura.",
              "Controlla questa distinzione: Spostamenti e rotazioni non modificano l’apertura.",
              "Controlla questa distinzione: Spostamenti e rotazioni non modificano l’apertura.",
              "Controlla questa distinzione: Spostamenti e rotazioni non modificano l’apertura."
            ]
          }
        ]
      }
    }
  ],
  "nextLesson": {
    "id": "geometria-coppie-angoli"
  }
};
window.READER_LESSONS["geometria-coppie-angoli"] = {
  "title": "Angoli consecutivi, adiacenti e opposti al vertice",
  "subtitle": "Matematica · Medie e biennio · Bozza testuale in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "vicini",
      "title": "Consecutivi e adiacenti",
      "cards": [
        {
          "title": "Un lato in comune",
          "steps": [
            {
              "title": "Consecutivi",
              "html": "Due angoli sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-consecutivi\">consecutivi</button> quando hanno <strong>lo stesso vertice e un lato in comune</strong>, con le regioni da parti opposte rispetto al lato comune.<br><br>Condividere soltanto il vertice non basta."
            },
            {
              "title": "Adiacenti",
              "html": "Due angoli consecutivi sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-adiacenti\">adiacenti</button> se i lati non comuni sono <strong>semirette opposte</strong>.<br><br>Insieme formano un angolo piatto: tutti gli adiacenti sono consecutivi, ma non tutti i consecutivi sono adiacenti."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Due angoli condividono soltanto il vertice. Sono sicuramente consecutivi?",
            "options": [
              "Sì: basta il vertice.",
              "No: devono condividere anche un lato ed essere da parti opposte rispetto a esso.",
              "Sì: basta che siano entrambi acuti.",
              "Sì: basta che siano congruenti."
            ],
            "answer": 1,
            "feedback": "Per essere consecutivi servono tutte le condizioni della definizione.",
            "feedbackByOption": [
              "Controlla questa distinzione: Per essere consecutivi servono tutte le condizioni della definizione.",
              "Esatto. Per essere consecutivi servono tutte le condizioni della definizione.",
              "Controlla questa distinzione: Per essere consecutivi servono tutte le condizioni della definizione.",
              "Controlla questa distinzione: Per essere consecutivi servono tutte le condizioni della definizione."
            ]
          },
          {
            "question": "Quale condizione distingue gli adiacenti tra gli angoli consecutivi?",
            "options": [
              "I lati non comuni coincidono.",
              "Gli angoli sono entrambi retti.",
              "I lati non comuni sono semirette opposte.",
              "I vertici sono diversi."
            ],
            "answer": 2,
            "feedback": "Gli adiacenti, affiancati lungo il lato comune, compongono un piatto.",
            "feedbackByOption": [
              "Controlla questa distinzione: Gli adiacenti, affiancati lungo il lato comune, compongono un piatto.",
              "Controlla questa distinzione: Gli adiacenti, affiancati lungo il lato comune, compongono un piatto.",
              "Esatto. Gli adiacenti, affiancati lungo il lato comune, compongono un piatto.",
              "Controlla questa distinzione: Gli adiacenti, affiancati lungo il lato comune, compongono un piatto."
            ]
          },
          {
            "question": "Quale relazione è sempre vera?",
            "options": [
              "Tutti i consecutivi sono adiacenti.",
              "Nessun adiacente è consecutivo.",
              "Tutti i consecutivi sono congruenti.",
              "Tutti gli angoli adiacenti sono consecutivi."
            ],
            "answer": 3,
            "feedback": "Adiacenti è un caso particolare di consecutivi.",
            "feedbackByOption": [
              "Controlla questa distinzione: Adiacenti è un caso particolare di consecutivi.",
              "Controlla questa distinzione: Adiacenti è un caso particolare di consecutivi.",
              "Controlla questa distinzione: Adiacenti è un caso particolare di consecutivi.",
              "Esatto. Adiacenti è un caso particolare di consecutivi."
            ]
          }
        ]
      }
    },
    {
      "id": "opposti",
      "title": "Opposti al vertice",
      "cards": [
        {
          "title": "Due rette si incontrano",
          "steps": [
            {
              "title": "Le coppie di fronte",
              "html": "Due rette incidenti individuano quattro angoli convessi. Gli angoli che si fronteggiano sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-opposti-vertice\">opposti al vertice</button>: <strong>i lati di uno sono i prolungamenti dei lati dell’altro oltre il vertice</strong>."
            },
            {
              "title": "La stessa apertura",
              "html": "Due angoli opposti al vertice sono <strong>congruenti</strong>.<br><br>Per capire perché, considera l’angolo vicino a entrambi: ciascuno dei due, sommato a quello vicino, forma lo stesso piatto. Tolta la stessa apertura, rimangono due aperture uguali."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quando due angoli convessi sono opposti al vertice?",
            "options": [
              "Quando i lati di uno sono i prolungamenti dei lati dell’altro.",
              "Quando hanno solo il vertice in comune.",
              "Quando sono entrambi acuti.",
              "Quando condividono un lato."
            ],
            "answer": 0,
            "feedback": "La disposizione dei lati, e non il solo vertice comune, caratterizza gli opposti al vertice.",
            "feedbackByOption": [
              "Esatto. La disposizione dei lati, e non il solo vertice comune, caratterizza gli opposti al vertice.",
              "Controlla questa distinzione: La disposizione dei lati, e non il solo vertice comune, caratterizza gli opposti al vertice.",
              "Controlla questa distinzione: La disposizione dei lati, e non il solo vertice comune, caratterizza gli opposti al vertice.",
              "Controlla questa distinzione: La disposizione dei lati, e non il solo vertice comune, caratterizza gli opposti al vertice."
            ]
          },
          {
            "question": "Due rette incidenti distinte formano quante coppie di angoli opposti al vertice?",
            "options": [
              "Una coppia.",
              "Due coppie.",
              "Tre coppie.",
              "Quattro coppie."
            ],
            "answer": 1,
            "feedback": "I quattro angoli si accoppiano con quelli che li fronteggiano.",
            "feedbackByOption": [
              "Controlla questa distinzione: I quattro angoli si accoppiano con quelli che li fronteggiano.",
              "Esatto. I quattro angoli si accoppiano con quelli che li fronteggiano.",
              "Controlla questa distinzione: I quattro angoli si accoppiano con quelli che li fronteggiano.",
              "Controlla questa distinzione: I quattro angoli si accoppiano con quelli che li fronteggiano."
            ]
          },
          {
            "question": "Che cosa possiamo affermare sugli angoli opposti al vertice?",
            "options": [
              "Sono sempre retti.",
              "Sono sempre consecutivi.",
              "Sono congruenti.",
              "Uno è sempre concavo e l’altro convesso."
            ],
            "answer": 2,
            "feedback": "La loro apertura è uguale; non è necessariamente quella di un retto.",
            "feedbackByOption": [
              "Controlla questa distinzione: La loro apertura è uguale; non è necessariamente quella di un retto.",
              "Controlla questa distinzione: La loro apertura è uguale; non è necessariamente quella di un retto.",
              "Esatto. La loro apertura è uguale; non è necessariamente quella di un retto.",
              "Controlla questa distinzione: La loro apertura è uguale; non è necessariamente quella di un retto."
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
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Consecutivi: vertice e lato comuni, regioni da parti opposte.</strong></li><li><strong>Adiacenti: consecutivi con i lati non comuni opposti.</strong> Insieme formano un piatto.</li><li><strong>Opposti al vertice: lati che si prolungano a coppie.</strong> Le loro ampiezze sono uguali.</li></ul>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Due angoli consecutivi formano un piatto. Che cosa sono?",
            "options": [
              "Necessariamente opposti al vertice.",
              "Necessariamente congruenti.",
              "Necessariamente acuti.",
              "Adiacenti."
            ],
            "answer": 3,
            "feedback": "Se formano un piatto, i lati non comuni sono semirette opposte.",
            "feedbackByOption": [
              "Controlla questa distinzione: Se formano un piatto, i lati non comuni sono semirette opposte.",
              "Controlla questa distinzione: Se formano un piatto, i lati non comuni sono semirette opposte.",
              "Controlla questa distinzione: Se formano un piatto, i lati non comuni sono semirette opposte.",
              "Esatto. Se formano un piatto, i lati non comuni sono semirette opposte."
            ]
          },
          {
            "question": "Due angoli sono congruenti. Sono necessariamente opposti al vertice?",
            "options": [
              "No: la stessa apertura non determina la loro posizione.",
              "Sì, sempre.",
              "Sì, se sono acuti.",
              "Sì, se sono ottusi."
            ],
            "answer": 0,
            "feedback": "Gli opposti al vertice sono congruenti, ma anche angoli in altre posizioni possono esserlo.",
            "feedbackByOption": [
              "Esatto. Gli opposti al vertice sono congruenti, ma anche angoli in altre posizioni possono esserlo.",
              "Controlla questa distinzione: Gli opposti al vertice sono congruenti, ma anche angoli in altre posizioni possono esserlo.",
              "Controlla questa distinzione: Gli opposti al vertice sono congruenti, ma anche angoli in altre posizioni possono esserlo.",
              "Controlla questa distinzione: Gli opposti al vertice sono congruenti, ma anche angoli in altre posizioni possono esserlo."
            ]
          },
          {
            "question": "Due angoli condividono vertice e lato, ma una regione è contenuta nell’altra. Sono consecutivi?",
            "options": [
              "Sì, perché basta il lato.",
              "No: le regioni non sono da parti opposte rispetto al lato comune.",
              "Sì, perché basta il vertice.",
              "Sì, purché siano convessi."
            ],
            "answer": 1,
            "feedback": "La disposizione delle regioni è una condizione necessaria.",
            "feedbackByOption": [
              "Controlla questa distinzione: La disposizione delle regioni è una condizione necessaria.",
              "Esatto. La disposizione delle regioni è una condizione necessaria.",
              "Controlla questa distinzione: La disposizione delle regioni è una condizione necessaria.",
              "Controlla questa distinzione: La disposizione delle regioni è una condizione necessaria."
            ]
          }
        ]
      }
    }
  ],
  "nextLesson": {
    "id": "geometria-operazioni-angoli"
  }
};
window.READER_LESSONS["geometria-operazioni-angoli"] = {
  "title": "Operazioni con gli angoli e bisettrice",
  "subtitle": "Matematica · Medie e biennio · Bozza testuale in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "somma-differenza",
      "title": "Somma e differenza",
      "cards": [
        {
          "title": "Mettere insieme due aperture",
          "steps": [
            {
              "title": "La somma",
              "html": "Per sommare due angoli li disponiamo, o ne costruiamo copie congruenti, <strong>in posizione consecutiva</strong>. La regione complessiva è l’angolo somma.<br><br>Due angoli retti formano un piatto. Un retto e un acuto formano un ottuso."
            },
            {
              "title": "La differenza",
              "html": "Per sottrarre un angolo da uno più grande, facciamo coincidere vertici e un lato, mettendo il minore dentro il maggiore. <strong>L’apertura rimasta è la differenza.</strong><br><br>Un piatto meno un retto dà un retto. Due angoli congruenti hanno come differenza un angolo nullo."
            }
          ]
        },
        {
          "title": "La categoria non basta",
          "steps": [
            {
              "title": "Due acuti",
              "html": "La somma di due angoli acuti può essere acuta, retta oppure ottusa: dipende dalle loro aperture. <strong>Il nome dei due angoli non determina da solo il risultato.</strong>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è la somma di due angoli retti?",
            "options": [
              "Un angolo giro.",
              "Un angolo acuto.",
              "Un angolo piatto.",
              "Un angolo nullo."
            ],
            "answer": 2,
            "feedback": "Due metà dello stesso piatto ricompongono un piatto.",
            "feedbackByOption": [
              "Controlla questa distinzione: Due metà dello stesso piatto ricompongono un piatto.",
              "Controlla questa distinzione: Due metà dello stesso piatto ricompongono un piatto.",
              "Esatto. Due metà dello stesso piatto ricompongono un piatto.",
              "Controlla questa distinzione: Due metà dello stesso piatto ricompongono un piatto."
            ]
          },
          {
            "question": "Due angoli sono congruenti. Qual è la loro differenza?",
            "options": [
              "Un retto.",
              "Un piatto.",
              "Un giro.",
              "Un angolo nullo."
            ],
            "answer": 3,
            "feedback": "Sottraendo un’apertura uguale non rimane alcuna apertura.",
            "feedbackByOption": [
              "Controlla questa distinzione: Sottraendo un’apertura uguale non rimane alcuna apertura.",
              "Controlla questa distinzione: Sottraendo un’apertura uguale non rimane alcuna apertura.",
              "Controlla questa distinzione: Sottraendo un’apertura uguale non rimane alcuna apertura.",
              "Esatto. Sottraendo un’apertura uguale non rimane alcuna apertura."
            ]
          },
          {
            "question": "Sommando due angoli acuti si ottiene sempre un acuto?",
            "options": [
              "No: si può ottenere anche un retto o un ottuso.",
              "Sì, sempre.",
              "No: si ottiene sempre un piatto.",
              "No: si ottiene sempre un concavo."
            ],
            "answer": 0,
            "feedback": "Le due aperture possono superare insieme quella di un retto, pur restando sotto il piatto.",
            "feedbackByOption": [
              "Esatto. Le due aperture possono superare insieme quella di un retto, pur restando sotto il piatto.",
              "Controlla questa distinzione: Le due aperture possono superare insieme quella di un retto, pur restando sotto il piatto.",
              "Controlla questa distinzione: Le due aperture possono superare insieme quella di un retto, pur restando sotto il piatto.",
              "Controlla questa distinzione: Le due aperture possono superare insieme quella di un retto, pur restando sotto il piatto."
            ]
          }
        ]
      }
    },
    {
      "id": "parti",
      "title": "Multipli, sottomultipli e bisettrice",
      "cards": [
        {
          "title": "Ripetere o dividere un’apertura",
          "steps": [
            {
              "title": "Un multiplo",
              "html": "Il <strong>triplo</strong> di un angolo si ottiene sommando tre angoli congruenti a quello di partenza. Il doppio di un piatto è un giro; il quadruplo di un retto è un giro.<br><br>Qui consideriamo somme che non superano un giro."
            },
            {
              "title": "Un sottomultiplo",
              "html": "Dividere un angolo in tre angoli congruenti significa ottenere la sua <strong>terza parte</strong>. Per trovare la metà servono due parti della stessa apertura: dividere «in due» non basta se le parti sono diverse."
            }
          ]
        },
        {
          "title": "La bisettrice",
          "steps": [
            {
              "title": "Due parti congruenti",
              "html": "La <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-bisettrice\">bisettrice</button> è la semiretta che parte dal vertice e divide l’angolo considerato in <strong>due angoli congruenti</strong>.<br><br>La bisettrice di un piatto forma due retti. Quella di un retto forma due acuti della stessa ampiezza."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa significa costruire il triplo di un angolo?",
            "options": [
              "Allungare tre volte i tratti dei lati.",
              "Sommare tre angoli congruenti a quello iniziale.",
              "Disegnare tre vertici.",
              "Ruotare tutto il disegno senza cambiare apertura."
            ],
            "answer": 1,
            "feedback": "Il multiplo riguarda la ripetizione dell’apertura, non la lunghezza dei lati.",
            "feedbackByOption": [
              "Controlla questa distinzione: Il multiplo riguarda la ripetizione dell’apertura, non la lunghezza dei lati.",
              "Esatto. Il multiplo riguarda la ripetizione dell’apertura, non la lunghezza dei lati.",
              "Controlla questa distinzione: Il multiplo riguarda la ripetizione dell’apertura, non la lunghezza dei lati.",
              "Controlla questa distinzione: Il multiplo riguarda la ripetizione dell’apertura, non la lunghezza dei lati."
            ]
          },
          {
            "question": "Una semiretta parte dal vertice e divide un angolo in due parti diverse. È la bisettrice?",
            "options": [
              "Sì: basta che parta dal vertice.",
              "Sì: basta che sia interna.",
              "No: le due parti devono essere congruenti.",
              "Sì: basta che una parte sia acuta."
            ],
            "answer": 2,
            "feedback": "La bisettrice deve soddisfare sia l’origine nel vertice sia l’uguaglianza delle due aperture.",
            "feedbackByOption": [
              "Controlla questa distinzione: La bisettrice deve soddisfare sia l’origine nel vertice sia l’uguaglianza delle due aperture.",
              "Controlla questa distinzione: La bisettrice deve soddisfare sia l’origine nel vertice sia l’uguaglianza delle due aperture.",
              "Esatto. La bisettrice deve soddisfare sia l’origine nel vertice sia l’uguaglianza delle due aperture.",
              "Controlla questa distinzione: La bisettrice deve soddisfare sia l’origine nel vertice sia l’uguaglianza delle due aperture."
            ]
          },
          {
            "question": "La bisettrice di un angolo piatto lo divide in…",
            "options": [
              "Due angoli piatti.",
              "Un nullo e un giro.",
              "Due angoli ottusi.",
              "Due angoli retti."
            ],
            "answer": 3,
            "feedback": "Il retto è metà del piatto.",
            "feedbackByOption": [
              "Controlla questa distinzione: Il retto è metà del piatto.",
              "Controlla questa distinzione: Il retto è metà del piatto.",
              "Controlla questa distinzione: Il retto è metà del piatto.",
              "Esatto. Il retto è metà del piatto."
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
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Somma: affianca le aperture senza sovrapporle.</strong></li><li><strong>Differenza: togli l’apertura minore dalla maggiore.</strong> Due aperture uguali lasciano un nullo.</li><li><strong>Multiplo: ripeti la stessa apertura.</strong> Sottomultiplo: dividi in parti congruenti.</li><li><strong>Bisettrice: dal vertice, due aperture uguali.</strong></li></ul>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è la differenza tra un angolo giro e un piatto?",
            "options": [
              "Un piatto.",
              "Un retto.",
              "Un acuto.",
              "Un nullo."
            ],
            "answer": 0,
            "feedback": "Un giro corrisponde a due piatti; togliendone uno ne rimane uno.",
            "feedbackByOption": [
              "Esatto. Un giro corrisponde a due piatti; togliendone uno ne rimane uno.",
              "Controlla questa distinzione: Un giro corrisponde a due piatti; togliendone uno ne rimane uno.",
              "Controlla questa distinzione: Un giro corrisponde a due piatti; togliendone uno ne rimane uno.",
              "Controlla questa distinzione: Un giro corrisponde a due piatti; togliendone uno ne rimane uno."
            ]
          },
          {
            "question": "Qual è il quadruplo di un angolo retto?",
            "options": [
              "Un piatto.",
              "Un giro.",
              "Un retto.",
              "Un nullo."
            ],
            "answer": 1,
            "feedback": "Quattro angoli retti ricompongono un giro.",
            "feedbackByOption": [
              "Controlla questa distinzione: Quattro angoli retti ricompongono un giro.",
              "Esatto. Quattro angoli retti ricompongono un giro.",
              "Controlla questa distinzione: Quattro angoli retti ricompongono un giro.",
              "Controlla questa distinzione: Quattro angoli retti ricompongono un giro."
            ]
          },
          {
            "question": "Dividiamo un angolo in quattro parti congruenti. Che cosa rappresenta ciascuna parte?",
            "options": [
              "Il quadruplo dell’angolo iniziale.",
              "La metà dell’angolo iniziale.",
              "Un quarto dell’angolo iniziale.",
              "Sempre un retto."
            ],
            "answer": 2,
            "feedback": "La quarta parte dipende dall’apertura iniziale; non è sempre un angolo retto.",
            "feedbackByOption": [
              "Controlla questa distinzione: La quarta parte dipende dall’apertura iniziale; non è sempre un angolo retto.",
              "Controlla questa distinzione: La quarta parte dipende dall’apertura iniziale; non è sempre un angolo retto.",
              "Esatto. La quarta parte dipende dall’apertura iniziale; non è sempre un angolo retto.",
              "Controlla questa distinzione: La quarta parte dipende dall’apertura iniziale; non è sempre un angolo retto."
            ]
          }
        ]
      }
    }
  ],
  "nextLesson": {
    "id": "geometria-angoli-complementari"
  }
};
window.READER_LESSONS["geometria-angoli-complementari"] = {
  "title": "Angoli complementari, supplementari ed esplementari",
  "subtitle": "Matematica · Medie e biennio · Bozza testuale in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "completare",
      "title": "Quale angolo completano?",
      "cards": [
        {
          "title": "Tre somme, tre nomi",
          "steps": [
            {
              "title": "Complementari",
              "html": "Due angoli sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-complementari\">complementari</button> se la loro somma è <strong>un angolo retto</strong>."
            },
            {
              "title": "Supplementari",
              "html": "Due angoli sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-supplementari\">supplementari</button> se la loro somma è <strong>un angolo piatto</strong>."
            },
            {
              "title": "Esplementari",
              "html": "Due angoli sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-esplementari\">esplementari</button> se la loro somma è <strong>un angolo giro</strong>."
            }
          ]
        },
        {
          "title": "Conta la somma, non la posizione",
          "steps": [
            {
              "title": "Anche lontani",
              "html": "Due angoli possono essere complementari, supplementari o esplementari anche se sono disegnati lontani. Questi nomi descrivono <strong>la somma delle aperture</strong>.<br><br>«Adiacenti», invece, descrive anche come sono disposti. Due adiacenti sono supplementari; due supplementari non sono necessariamente adiacenti."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Due angoli sono complementari se la loro somma è…",
            "options": [
              "Un piatto.",
              "Un giro.",
              "Un nullo.",
              "Un retto."
            ],
            "answer": 3,
            "feedback": "Complementari: insieme completano un retto.",
            "feedbackByOption": [
              "Controlla questa distinzione: Complementari: insieme completano un retto.",
              "Controlla questa distinzione: Complementari: insieme completano un retto.",
              "Controlla questa distinzione: Complementari: insieme completano un retto.",
              "Esatto. Complementari: insieme completano un retto."
            ]
          },
          {
            "question": "Due angoli sono supplementari se la loro somma è…",
            "options": [
              "Un piatto.",
              "Un retto.",
              "Un giro.",
              "Un acuto."
            ],
            "answer": 0,
            "feedback": "Supplementari: insieme completano un piatto.",
            "feedbackByOption": [
              "Esatto. Supplementari: insieme completano un piatto.",
              "Controlla questa distinzione: Supplementari: insieme completano un piatto.",
              "Controlla questa distinzione: Supplementari: insieme completano un piatto.",
              "Controlla questa distinzione: Supplementari: insieme completano un piatto."
            ]
          },
          {
            "question": "Due angoli sono disegnati lontani e la somma delle loro aperture è un giro. Sono…",
            "options": [
              "Necessariamente adiacenti.",
              "Esplementari.",
              "Necessariamente opposti al vertice.",
              "Complementari."
            ],
            "answer": 1,
            "feedback": "Esplementari riguarda la somma, non la posizione sul foglio.",
            "feedbackByOption": [
              "Controlla questa distinzione: Esplementari riguarda la somma, non la posizione sul foglio.",
              "Esatto. Esplementari riguarda la somma, non la posizione sul foglio.",
              "Controlla questa distinzione: Esplementari riguarda la somma, non la posizione sul foglio.",
              "Controlla questa distinzione: Esplementari riguarda la somma, non la posizione sul foglio."
            ]
          }
        ]
      }
    },
    {
      "id": "ragionare",
      "title": "Trovare l’apertura che manca",
      "cards": [
        {
          "title": "Completiamo la figura",
          "steps": [
            {
              "title": "Il supplementare",
              "html": "Per trovare il supplementare di un angolo, togliamo la sua apertura da quella di un piatto. <strong>Il supplementare di un retto è un altro retto.</strong>"
            },
            {
              "title": "Una proprietà utile",
              "html": "Se due angoli sono congruenti, anche i loro supplementari sono congruenti: <strong>togliendo la stessa apertura da due piatti rimane la stessa apertura.</strong>"
            }
          ]
        },
        {
          "title": "Un controllo prima di calcolare",
          "steps": [
            {
              "title": "Il complemento",
              "html": "Un ottuso è già più grande di un retto: non possiamo aggiungere un’apertura non negativa per ottenere un retto. <strong>Un ottuso non ha un complementare nel percorso che stiamo studiando.</strong><br><br>Se due angoli non nulli sono complementari, entrambi sono acuti."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Due angoli adiacenti sono sempre supplementari?",
            "options": [
              "No: formano sempre un retto.",
              "No: formano sempre un giro.",
              "Sì: insieme formano un piatto.",
              "Solo se sono congruenti."
            ],
            "answer": 2,
            "feedback": "Gli adiacenti compongono un piatto, anche quando hanno aperture diverse.",
            "feedbackByOption": [
              "Controlla questa distinzione: Gli adiacenti compongono un piatto, anche quando hanno aperture diverse.",
              "Controlla questa distinzione: Gli adiacenti compongono un piatto, anche quando hanno aperture diverse.",
              "Esatto. Gli adiacenti compongono un piatto, anche quando hanno aperture diverse.",
              "Controlla questa distinzione: Gli adiacenti compongono un piatto, anche quando hanno aperture diverse."
            ]
          },
          {
            "question": "Un angolo ottuso può avere un complementare non negativo?",
            "options": [
              "Sì: basta aggiungere un retto.",
              "Sì: basta che siano consecutivi.",
              "Sì: il complementare è sempre ottuso.",
              "No: supera già l’apertura del retto."
            ],
            "answer": 3,
            "feedback": "Aggiungere un’apertura non negativa non può ridurre un ottuso a un retto.",
            "feedbackByOption": [
              "Controlla questa distinzione: Aggiungere un’apertura non negativa non può ridurre un ottuso a un retto.",
              "Controlla questa distinzione: Aggiungere un’apertura non negativa non può ridurre un ottuso a un retto.",
              "Controlla questa distinzione: Aggiungere un’apertura non negativa non può ridurre un ottuso a un retto.",
              "Esatto. Aggiungere un’apertura non negativa non può ridurre un ottuso a un retto."
            ]
          },
          {
            "question": "Due angoli sono congruenti. Che relazione hanno i loro supplementari?",
            "options": [
              "Sono congruenti.",
              "Sono necessariamente retti.",
              "Sono sempre opposti al vertice.",
              "Hanno necessariamente ampiezze diverse."
            ],
            "answer": 0,
            "feedback": "Da due piatti togliamo aperture uguali: restano aperture uguali.",
            "feedbackByOption": [
              "Esatto. Da due piatti togliamo aperture uguali: restano aperture uguali.",
              "Controlla questa distinzione: Da due piatti togliamo aperture uguali: restano aperture uguali.",
              "Controlla questa distinzione: Da due piatti togliamo aperture uguali: restano aperture uguali.",
              "Controlla questa distinzione: Da due piatti togliamo aperture uguali: restano aperture uguali."
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
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Complementari → retto.</strong> Supplementari → piatto. Esplementari → giro.</li><li><strong>Conta la somma delle aperture.</strong> I due angoli non devono per forza essere vicini.</li><li><strong>Adiacenti implica supplementari.</strong> Il contrario richiede anche le condizioni sulla posizione.</li></ul>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Due angoli sono supplementari. Sono necessariamente adiacenti?",
            "options": [
              "Sì, sempre.",
              "No: possono essere disegnati separati.",
              "Sì, se sono ottusi.",
              "No, perché nessuna coppia adiacente è supplementare."
            ],
            "answer": 1,
            "feedback": "Supplementari indica una somma pari al piatto; adiacenti richiede anche una precisa disposizione.",
            "feedbackByOption": [
              "Controlla questa distinzione: Supplementari indica una somma pari al piatto; adiacenti richiede anche una precisa disposizione.",
              "Esatto. Supplementari indica una somma pari al piatto; adiacenti richiede anche una precisa disposizione.",
              "Controlla questa distinzione: Supplementari indica una somma pari al piatto; adiacenti richiede anche una precisa disposizione.",
              "Controlla questa distinzione: Supplementari indica una somma pari al piatto; adiacenti richiede anche una precisa disposizione."
            ]
          },
          {
            "question": "Due angoli retti sono tra loro…",
            "options": [
              "Complementari.",
              "Esplementari.",
              "Supplementari.",
              "Necessariamente opposti al vertice."
            ],
            "answer": 2,
            "feedback": "La somma di due retti è un piatto.",
            "feedbackByOption": [
              "Controlla questa distinzione: La somma di due retti è un piatto.",
              "Controlla questa distinzione: La somma di due retti è un piatto.",
              "Esatto. La somma di due retti è un piatto.",
              "Controlla questa distinzione: La somma di due retti è un piatto."
            ]
          },
          {
            "question": "Due angoli non nulli sono complementari. Quale frase è corretta?",
            "options": [
              "Entrambi sono ottusi.",
              "Uno deve essere piatto.",
              "Entrambi devono essere retti.",
              "Entrambi sono acuti."
            ],
            "answer": 3,
            "feedback": "Ciascuna apertura è positiva e più piccola della loro somma, che è un retto.",
            "feedbackByOption": [
              "Controlla questa distinzione: Ciascuna apertura è positiva e più piccola della loro somma, che è un retto.",
              "Controlla questa distinzione: Ciascuna apertura è positiva e più piccola della loro somma, che è un retto.",
              "Controlla questa distinzione: Ciascuna apertura è positiva e più piccola della loro somma, che è un retto.",
              "Esatto. Ciascuna apertura è positiva e più piccola della loro somma, che è un retto."
            ]
          }
        ]
      }
    }
  ],
  "nextLesson": {
    "id": "geometria-misura-angoli"
  }
};
window.READER_LESSONS["geometria-misura-angoli"] = {
  "title": "Misurare gli angoli: gradi, primi e secondi",
  "subtitle": "Matematica · Medie e biennio · Bozza testuale in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "gradi",
      "title": "Dall’apertura al numero",
      "cards": [
        {
          "title": "Scegliamo un’unità",
          "steps": [
            {
              "title": "Il grado",
              "html": "Per misurare un’ampiezza scegliamo un’unità di riferimento. Il <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-grado\">grado</button> è <strong>una delle 360 parti congruenti di un angolo giro</strong>. Il simbolo è °.<br><br>Dire «35°» significa che l’apertura corrisponde a 35 di queste unità."
            },
            {
              "title": "I riferimenti",
              "html": "<strong>Nullo: 0°. Retto: 90°. Piatto: 180°. Giro: 360°.</strong><br><br>Un acuto misura più di 0° e meno di 90°; un ottuso più di 90° e meno di 180°; un concavo più di 180° e meno di 360°."
            }
          ]
        },
        {
          "title": "Leggere il goniometro",
          "steps": [
            {
              "title": "Tre controlli",
              "html": "Per usare un <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-goniometro\">goniometro</button>, metti il centro sul vertice e fai coincidere un lato con la direzione dello zero. Leggi dove passa l’altro lato.<br><br><strong>Se ci sono due scale, segui quella che parte da zero sul lato scelto.</strong> Controlla che il numero sia compatibile con il tipo di angolo."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quanto misura un angolo piatto?",
            "options": [
              "180°.",
              "90°.",
              "360°.",
              "0°."
            ],
            "answer": 0,
            "feedback": "Un piatto è metà di un giro da 360°.",
            "feedbackByOption": [
              "Esatto. Un piatto è metà di un giro da 360°.",
              "Controlla questa distinzione: Un piatto è metà di un giro da 360°.",
              "Controlla questa distinzione: Un piatto è metà di un giro da 360°.",
              "Controlla questa distinzione: Un piatto è metà di un giro da 360°."
            ]
          },
          {
            "question": "Un angolo misura 125°. Come lo classifichiamo?",
            "options": [
              "Acuto.",
              "Ottuso.",
              "Retto.",
              "Concavo."
            ],
            "answer": 1,
            "feedback": "125° è maggiore di 90° e minore di 180°.",
            "feedbackByOption": [
              "Controlla questa distinzione: 125° è maggiore di 90° e minore di 180°.",
              "Esatto. 125° è maggiore di 90° e minore di 180°.",
              "Controlla questa distinzione: 125° è maggiore di 90° e minore di 180°.",
              "Controlla questa distinzione: 125° è maggiore di 90° e minore di 180°."
            ]
          },
          {
            "question": "Un goniometro mostra 40 e 140 nello stesso punto. Come scegliamo?",
            "options": [
              "Scegliamo sempre il numero più piccolo.",
              "Scegliamo sempre quello più grande.",
              "Seguiamo la scala che parte da zero sul lato allineato.",
              "Sommiamo i due numeri."
            ],
            "answer": 2,
            "feedback": "La scala corretta dipende dal lato da cui parte la misura.",
            "feedbackByOption": [
              "Controlla questa distinzione: La scala corretta dipende dal lato da cui parte la misura.",
              "Controlla questa distinzione: La scala corretta dipende dal lato da cui parte la misura.",
              "Esatto. La scala corretta dipende dal lato da cui parte la misura.",
              "Controlla questa distinzione: La scala corretta dipende dal lato da cui parte la misura."
            ]
          }
        ]
      }
    },
    {
      "id": "sessagesimale",
      "title": "Primi, secondi e operazioni",
      "cards": [
        {
          "title": "Più piccoli di un grado",
          "steps": [
            {
              "title": "Primi e secondi",
              "html": "Un grado si divide in <strong>60 primi</strong>, indicati con ′. Un primo si divide in <strong>60 secondi</strong>, indicati con ″.<br><br><strong>1° = 60′; 1′ = 60″.</strong> Qui primi e secondi misurano un’apertura, non una durata."
            },
            {
              "title": "Una lettura completa",
              "html": "<strong>24° 18′ 30″</strong> si legge «24 gradi, 18 primi e 30 secondi». Questo sistema si chiama <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-sessagesimale\">sessagesimale</button> perché i passaggi tra le unità avvengono per gruppi di 60."
            }
          ]
        },
        {
          "title": "Sommiamo e sottraiamo",
          "steps": [
            {
              "title": "La somma",
              "html": "Sommiamo separatamente gradi, primi e secondi. Quando arriviamo a 60, cambiamo unità.<br><br><strong>12° 40′ + 7° 35′ = 19° 75′ = 20° 15′.</strong> I 75 primi sono un grado e 15 primi."
            },
            {
              "title": "La sottrazione",
              "html": "Se i primi non bastano, scambiamo un grado con 60 primi.<br><br><strong>35° 10′ − 12° 25′ = 34° 70′ − 12° 25′ = 22° 45′.</strong><br><br>Lo stesso scambio vale tra un primo e 60 secondi."
            }
          ],
          "stepMode": "replace"
        },
        {
          "title": "Ripetere e dividere",
          "steps": [
            {
              "title": "Per un numero naturale",
              "html": "Per moltiplicare, ripetiamo l’ampiezza e poi sistemiamo le unità: <strong>2 × 14° 40′ = 28° 80′ = 29° 20′.</strong>"
            },
            {
              "title": "Dividere in parti uguali",
              "html": "Per trovare la metà di <strong>25°</strong>, possiamo scrivere <strong>24° 60′</strong>. Dividendo per 2 otteniamo <strong>12° 30′</strong>.<br><br>Se serve, trasformiamo tutta la misura in primi o secondi, eseguiamo la divisione e torniamo alle unità iniziali."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "A quanti primi corrisponde un grado?",
            "options": [
              "100′.",
              "360′.",
              "10′.",
              "60′."
            ],
            "answer": 3,
            "feedback": "Nel sistema sessagesimale un grado equivale a 60 primi.",
            "feedbackByOption": [
              "Controlla questa distinzione: Nel sistema sessagesimale un grado equivale a 60 primi.",
              "Controlla questa distinzione: Nel sistema sessagesimale un grado equivale a 60 primi.",
              "Controlla questa distinzione: Nel sistema sessagesimale un grado equivale a 60 primi.",
              "Esatto. Nel sistema sessagesimale un grado equivale a 60 primi."
            ]
          },
          {
            "question": "Come riscriviamo 18° 80′?",
            "options": [
              "19° 20′.",
              "18° 8′.",
              "18° 20′.",
              "20° 0′."
            ],
            "answer": 0,
            "feedback": "80 primi sono un grado e 20 primi.",
            "feedbackByOption": [
              "Esatto. 80 primi sono un grado e 20 primi.",
              "Controlla questa distinzione: 80 primi sono un grado e 20 primi.",
              "Controlla questa distinzione: 80 primi sono un grado e 20 primi.",
              "Controlla questa distinzione: 80 primi sono un grado e 20 primi."
            ]
          },
          {
            "question": "Quanto fa 40° 15′ − 18° 35′?",
            "options": [
              "22° 20′.",
              "21° 40′.",
              "22° 40′.",
              "21° 80′."
            ],
            "answer": 1,
            "feedback": "Riscriviamo 40° 15′ come 39° 75′; sottraendo otteniamo 21° 40′.",
            "feedbackByOption": [
              "Controlla questa distinzione: Riscriviamo 40° 15′ come 39° 75′; sottraendo otteniamo 21° 40′.",
              "Esatto. Riscriviamo 40° 15′ come 39° 75′; sottraendo otteniamo 21° 40′.",
              "Controlla questa distinzione: Riscriviamo 40° 15′ come 39° 75′; sottraendo otteniamo 21° 40′.",
              "Controlla questa distinzione: Riscriviamo 40° 15′ come 39° 75′; sottraendo otteniamo 21° 40′."
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
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Un giro misura 360°.</strong> Retto 90°, piatto 180°, nullo 0°.</li><li><strong>Centro sul vertice, zero sul lato.</strong> Sul goniometro segui la scala corretta.</li><li><strong>60 secondi fanno un primo; 60 primi fanno un grado.</strong></li><li><strong>Somma: raggruppa per 60. Sottrazione: scambia un’unità con 60 della successiva.</strong></li></ul>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Due angoli supplementari misurano insieme…",
            "options": [
              "90°.",
              "360°.",
              "180°.",
              "60°."
            ],
            "answer": 2,
            "feedback": "La somma dei supplementari è un piatto, che misura 180°.",
            "feedbackByOption": [
              "Controlla questa distinzione: La somma dei supplementari è un piatto, che misura 180°.",
              "Controlla questa distinzione: La somma dei supplementari è un piatto, che misura 180°.",
              "Esatto. La somma dei supplementari è un piatto, che misura 180°.",
              "Controlla questa distinzione: La somma dei supplementari è un piatto, che misura 180°."
            ]
          },
          {
            "question": "Quanto vale la metà di 25°?",
            "options": [
              "12° 5′.",
              "12° 50′.",
              "13° 0′.",
              "12° 30′."
            ],
            "answer": 3,
            "feedback": "Mezzo grado è 30 primi, non 5 o 50 primi.",
            "feedbackByOption": [
              "Controlla questa distinzione: Mezzo grado è 30 primi, non 5 o 50 primi.",
              "Controlla questa distinzione: Mezzo grado è 30 primi, non 5 o 50 primi.",
              "Controlla questa distinzione: Mezzo grado è 30 primi, non 5 o 50 primi.",
              "Esatto. Mezzo grado è 30 primi, non 5 o 50 primi."
            ]
          },
          {
            "question": "Quanto fa il doppio di 14° 40′?",
            "options": [
              "29° 20′.",
              "28° 40′.",
              "28° 20′.",
              "29° 40′."
            ],
            "answer": 0,
            "feedback": "Il doppio è 28° 80′; 60 dei primi diventano un grado.",
            "feedbackByOption": [
              "Esatto. Il doppio è 28° 80′; 60 dei primi diventano un grado.",
              "Controlla questa distinzione: Il doppio è 28° 80′; 60 dei primi diventano un grado.",
              "Controlla questa distinzione: Il doppio è 28° 80′; 60 dei primi diventano un grado.",
              "Controlla questa distinzione: Il doppio è 28° 80′; 60 dei primi diventano un grado."
            ]
          }
        ]
      }
    }
  ],
  "nextLesson": {
    "id": "geometria-perpendicolari"
  }
};
window.READER_LESSONS["geometria-perpendicolari"] = {
  "title": "Rette perpendicolari, distanza e asse di un segmento",
  "subtitle": "Matematica · Medie e biennio · Bozza testuale in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "rette",
      "title": "Incontrarsi ad angolo retto",
      "cards": [
        {
          "title": "Una posizione particolare",
          "steps": [
            {
              "title": "Perpendicolari",
              "html": "Due <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-retta\">rette</button> sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-perpendicolari\">perpendicolari</button> se si incontrano formando <strong>quattro angoli retti</strong>. Si può scrivere <strong>r ⟂ s</strong>, leggendo «r è perpendicolare a s»."
            },
            {
              "title": "Basta riconoscerne uno",
              "html": "Se uno degli angoli formati da due rette incidenti è retto, anche gli altri lo sono: quello opposto ha la stessa ampiezza e quelli adiacenti completano un piatto.<br><br><strong>Le rette possono essere inclinate sul foglio: conta l’angolo che formano.</strong>"
            }
          ]
        },
        {
          "title": "La distanza da una retta",
          "steps": [
            {
              "title": "Il percorso più corto",
              "html": "Da un punto P esterno a una retta tracciamo la perpendicolare e chiamiamo H il punto d’incontro. H è il <strong>piede della perpendicolare</strong>.<br><br>La <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-distanza-retta\">distanza di P dalla retta</button> è la lunghezza di PH: tra i segmenti che collegano P alla retta, è il più corto. Se P appartiene alla retta, la distanza è zero."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Due rette sono perpendicolari quando…",
            "options": [
              "Sono entrambe inclinate.",
              "Si incontrano formando quattro angoli retti.",
              "Non si incontrano mai.",
              "Formano quattro angoli qualsiasi."
            ],
            "answer": 1,
            "feedback": "Essere incidenti non basta: gli angoli devono essere retti.",
            "feedbackByOption": [
              "Controlla questa distinzione: Essere incidenti non basta: gli angoli devono essere retti.",
              "Esatto. Essere incidenti non basta: gli angoli devono essere retti.",
              "Controlla questa distinzione: Essere incidenti non basta: gli angoli devono essere retti.",
              "Controlla questa distinzione: Essere incidenti non basta: gli angoli devono essere retti."
            ]
          },
          {
            "question": "Due rette inclinate rispetto ai bordi del foglio possono essere perpendicolari?",
            "options": [
              "No: una deve essere verticale.",
              "No: una deve essere orizzontale.",
              "Sì: dipende dall’angolo tra le rette.",
              "Solo se sono parallele."
            ],
            "answer": 2,
            "feedback": "L’orientamento del disegno non determina la perpendicolarità.",
            "feedbackByOption": [
              "Controlla questa distinzione: L’orientamento del disegno non determina la perpendicolarità.",
              "Controlla questa distinzione: L’orientamento del disegno non determina la perpendicolarità.",
              "Esatto. L’orientamento del disegno non determina la perpendicolarità.",
              "Controlla questa distinzione: L’orientamento del disegno non determina la perpendicolarità."
            ]
          },
          {
            "question": "Come misuriamo la distanza di un punto esterno da una retta?",
            "options": [
              "Con un segmento obliquo qualsiasi.",
              "Con la lunghezza di tutta la retta.",
              "Con la distanza dal bordo del foglio.",
              "Con la lunghezza del segmento perpendicolare dal punto alla retta."
            ],
            "answer": 3,
            "feedback": "La perpendicolare individua il collegamento più corto.",
            "feedbackByOption": [
              "Controlla questa distinzione: La perpendicolare individua il collegamento più corto.",
              "Controlla questa distinzione: La perpendicolare individua il collegamento più corto.",
              "Controlla questa distinzione: La perpendicolare individua il collegamento più corto.",
              "Esatto. La perpendicolare individua il collegamento più corto."
            ]
          }
        ]
      }
    },
    {
      "id": "asse",
      "title": "L’asse di un segmento",
      "cards": [
        {
          "title": "Due condizioni insieme",
          "steps": [
            {
              "title": "Il punto medio",
              "html": "Il <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-punto-medio\">punto medio</button> divide un segmento in due segmenti congruenti. Per AB lo indichiamo, per esempio, con M."
            },
            {
              "title": "La retta da costruire",
              "html": "L’<button type=\"button\" class=\"rm-keyword\" data-term=\"geo-asse-segmento\">asse di AB</button> è la retta <strong>perpendicolare ad AB e passante per il suo punto medio</strong>.<br><br>Per essere l’asse deve soddisfare entrambe le condizioni: passare per M non basta; essere perpendicolare non basta."
            }
          ]
        },
        {
          "title": "Due punti simmetrici",
          "steps": [
            {
              "title": "Una relazione tra i punti",
              "html": "A e B sono <button type=\"button\" class=\"rm-keyword\" data-term=\"geo-simmetrici\">simmetrici</button> rispetto all’asse del segmento AB. La retta sta a metà e incontra AB ad angolo retto: ribaltando idealmente il piano attorno a quella retta, i due punti si sovrappongono."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quali condizioni definiscono l’asse di un segmento?",
            "options": [
              "Perpendicolare al segmento e passante per il punto medio.",
              "Passante per un estremo e parallela al segmento.",
              "Passante per il punto medio in qualunque direzione.",
              "Perpendicolare in un punto qualunque."
            ],
            "answer": 0,
            "feedback": "L’asse richiede entrambe le condizioni, non una sola.",
            "feedbackByOption": [
              "Esatto. L’asse richiede entrambe le condizioni, non una sola.",
              "Controlla questa distinzione: L’asse richiede entrambe le condizioni, non una sola.",
              "Controlla questa distinzione: L’asse richiede entrambe le condizioni, non una sola.",
              "Controlla questa distinzione: L’asse richiede entrambe le condizioni, non una sola."
            ]
          },
          {
            "question": "Una retta passa per il punto medio di AB ma non è perpendicolare ad AB. È il suo asse?",
            "options": [
              "Sì, sempre.",
              "No.",
              "Sì, se AB è orizzontale.",
              "Sì, se il punto medio si chiama M."
            ],
            "answer": 1,
            "feedback": "Il punto medio è necessario, ma serve anche la perpendicolarità.",
            "feedbackByOption": [
              "Controlla questa distinzione: Il punto medio è necessario, ma serve anche la perpendicolarità.",
              "Esatto. Il punto medio è necessario, ma serve anche la perpendicolarità.",
              "Controlla questa distinzione: Il punto medio è necessario, ma serve anche la perpendicolarità.",
              "Controlla questa distinzione: Il punto medio è necessario, ma serve anche la perpendicolarità."
            ]
          },
          {
            "question": "Che cosa significa che M è il punto medio di AB?",
            "options": [
              "M è un punto qualunque della retta AB.",
              "M coincide sempre con A.",
              "M appartiene al segmento e AM e MB sono congruenti.",
              "M si trova fuori dal segmento."
            ],
            "answer": 2,
            "feedback": "Il punto medio è sul segmento e lo divide in due parti della stessa lunghezza.",
            "feedbackByOption": [
              "Controlla questa distinzione: Il punto medio è sul segmento e lo divide in due parti della stessa lunghezza.",
              "Controlla questa distinzione: Il punto medio è sul segmento e lo divide in due parti della stessa lunghezza.",
              "Esatto. Il punto medio è sul segmento e lo divide in due parti della stessa lunghezza.",
              "Controlla questa distinzione: Il punto medio è sul segmento e lo divide in due parti della stessa lunghezza."
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
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Perpendicolari: quattro angoli retti.</strong> Anche quando il disegno è inclinato.</li><li><strong>Distanza da una retta: segui la perpendicolare.</strong> Misura il segmento dal punto al piede.</li><li><strong>Asse del segmento: a metà e ad angolo retto.</strong> Sono necessarie entrambe le condizioni.</li></ul>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Una retta è perpendicolare ad AB, ma lo incontra lontano dal punto medio. È l’asse di AB?",
            "options": [
              "Sì: basta la perpendicolarità.",
              "Sì: basta che incontri AB.",
              "Solo se AB è verticale.",
              "No."
            ],
            "answer": 3,
            "feedback": "L’asse deve passare anche per il punto medio.",
            "feedbackByOption": [
              "Controlla questa distinzione: L’asse deve passare anche per il punto medio.",
              "Controlla questa distinzione: L’asse deve passare anche per il punto medio.",
              "Controlla questa distinzione: L’asse deve passare anche per il punto medio.",
              "Esatto. L’asse deve passare anche per il punto medio."
            ]
          },
          {
            "question": "Se un punto appartiene a una retta, qual è la sua distanza dalla retta?",
            "options": [
              "Zero.",
              "Un grado.",
              "La lunghezza della retta.",
              "Non è possibile definirla."
            ],
            "answer": 0,
            "feedback": "Non c’è alcuna separazione tra il punto e la retta.",
            "feedbackByOption": [
              "Esatto. Non c’è alcuna separazione tra il punto e la retta.",
              "Controlla questa distinzione: Non c’è alcuna separazione tra il punto e la retta.",
              "Controlla questa distinzione: Non c’è alcuna separazione tra il punto e la retta.",
              "Controlla questa distinzione: Non c’è alcuna separazione tra il punto e la retta."
            ]
          },
          {
            "question": "Due rette incidenti formano un angolo retto. Quanti dei quattro angoli sono retti?",
            "options": [
              "Soltanto uno.",
              "Tutti e quattro.",
              "Soltanto due.",
              "Soltanto tre."
            ],
            "answer": 1,
            "feedback": "L’opposto è congruente e ciascun adiacente completa un piatto.",
            "feedbackByOption": [
              "Controlla questa distinzione: L’opposto è congruente e ciascun adiacente completa un piatto.",
              "Esatto. L’opposto è congruente e ciascun adiacente completa un piatto.",
              "Controlla questa distinzione: L’opposto è congruente e ciascun adiacente completa un piatto.",
              "Controlla questa distinzione: L’opposto è congruente e ciascun adiacente completa un piatto."
            ]
          }
        ]
      }
    }
  ]
};



