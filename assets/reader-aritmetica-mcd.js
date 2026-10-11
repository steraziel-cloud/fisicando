/* Original GatitoMath textual draft. See docs/arithmetic-path.md for reference and review scope. */
window.READER_LESSONS["aritmetica-mcd"] = {
  "title": "Massimo comune divisore (M.C.D.)",
  "subtitle": "Matematica · Medie e biennio · Prima bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "in-comune",
      "title": "Un divisore che serve a più numeri",
      "cards": [
        {
          "title": "La stessa lunghezza per tutti i pezzi",
          "steps": [
            {
              "title": "Il problema",
              "html": "Abbiamo due nastri lunghi <strong>24 cm e 36 cm</strong>. Vogliamo tagliarli in pezzi tutti della stessa lunghezza, senza avanzi, scegliendo una lunghezza espressa da un numero naturale positivo di centimetri.<br><br><strong>Quanto possono essere lunghi, al massimo, i pezzi?</strong>"
            },
            {
              "title": "Due condizioni insieme",
              "html": "Una lunghezza adatta deve dividere senza resto sia 24 sia 36. Per esempio, <strong>6 cm</strong> va bene: otteniamo 4 pezzi dal primo nastro e 6 dal secondo.<br><br><strong>8 cm</strong> va bene per 24, ma non per 36: non è un <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisore-comune\">divisore comune</button>."
            }
          ]
        },
        {
          "title": "Comune e massimo",
          "steps": [
            {
              "title": "Le due liste",
              "html": "I divisori positivi di <strong>24</strong> sono <strong>1, 2, 3, 4, 6, 8, 12, 24</strong>.<br>Quelli di <strong>36</strong> sono <strong>1, 2, 3, 4, 6, 9, 12, 18, 36</strong>.<br><br>I divisori comuni sono <strong>1, 2, 3, 4, 6, 12</strong>."
            },
            {
              "title": "La definizione",
              "html": "Il più grande è <strong>12</strong>. È il <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-mcd\">massimo comune divisore</button>, indicato con <strong>M.C.D.(24, 36) = 12</strong>.<br><br>Nel problema possiamo fare pezzi di 12 cm: ne otteniamo 2 e 3. Scegliere i pezzi più lunghi produce il minor numero di pezzi."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa deve fare un divisore comune di 24 e 36?",
            "options": [
              "Dividere senza resto almeno uno dei numeri.",
              "Essere maggiore di entrambi i numeri.",
              "Essere il prodotto 24 × 36.",
              "Dividere senza resto entrambi i numeri."
            ],
            "answer": 3,
            "feedback": "La stessa lunghezza deve essere adatta a tutti e due i nastri.",
            "feedbackByOption": [
              "Questo non basta: 8 divide 24 ma non 36.",
              "Un divisore positivo non supera il numero positivo che divide.",
              "Quel prodotto è un multiplo comune, non un divisore comune.",
              "La stessa lunghezza deve essere adatta a tutti e due i nastri."
            ]
          },
          {
            "question": "Perché 6 non è il M.C.D. di 24 e 36?",
            "options": [
              "6 non divide 36.",
              "Il M.C.D. deve essere un numero primo.",
              "12 è un divisore comune più grande.",
              "6 non divide 24."
            ],
            "answer": 2,
            "feedback": "6 divide entrambi, ma non è il maggiore dei divisori comuni.",
            "feedbackByOption": [
              "36 : 6 = 6 senza resto.",
              "Il M.C.D. può essere composto, come 12.",
              "6 divide entrambi, ma non è il maggiore dei divisori comuni.",
              "24 : 6 = 4 senza resto."
            ]
          },
          {
            "question": "Tagliando nastri di 24 cm e 36 cm in pezzi uguali più lunghi possibile, quanto deve misurare ogni pezzo?",
            "options": [
              "60 cm",
              "12 cm",
              "6 cm",
              "24 cm"
            ],
            "answer": 1,
            "feedback": "12 è il massimo divisore comune; i pezzi sono 2 e 3.",
            "feedbackByOption": [
              "Una lunghezza maggiore dei nastri non può essere quella dei pezzi ottenuti tagliandoli.",
              "12 è il massimo divisore comune; i pezzi sono 2 e 3.",
              "È una lunghezza possibile, ma non la massima.",
              "24 non divide 36 senza resto."
            ]
          }
        ]
      }
    },
    {
      "id": "fattori",
      "title": "Che cosa possiamo prendere da entrambi?",
      "cards": [
        {
          "title": "Le scomposizioni mostrano il materiale disponibile",
          "steps": [
            {
              "title": "",
              "html": "<strong>24 = 2<sup>3</sup> × 3</strong><br><strong>36 = 2<sup>2</sup> × 3<sup>2</sup></strong><br><br>Un divisore comune deve poter essere costruito con i fattori del primo numero <strong>e</strong> con quelli del secondo. Per ogni primo, non possiamo prendere più copie di quante ne abbia il numero che ne possiede meno."
            }
          ]
        },
        {
          "title": "I fattori 2 e 3",
          "steps": [
            {
              "title": "Quanti fattori 2?",
              "html": "24 contiene tre fattori 2; 36 ne contiene due. Possiamo prendere al massimo <strong>due fattori 2</strong>.<br><br>Prenderne tre darebbe un fattore 8: 8 divide 24, ma non 36."
            },
            {
              "title": "Quanti fattori 3?",
              "html": "24 contiene un fattore 3; 36 ne contiene due. Possiamo prendere al massimo <strong>un fattore 3</strong>.<br><br>Il massimo prodotto disponibile in entrambi è quindi <strong>2<sup>2</sup> × 3 = 12</strong>."
            }
          ]
        },
        {
          "title": "La regola nasce da queste disponibilità",
          "steps": [
            {
              "title": "",
              "html": "Per trovare il M.C.D. scomponiamo i numeri in fattori primi. Prendiamo <strong>soltanto i primi comuni a tutti</strong>, ciascuno con <strong>il minore esponente</strong> con cui compare. Infine li moltiplichiamo.<br><br>Un primo assente anche in un solo numero non può far parte di un divisore comune."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Per il M.C.D. di 24 = 2³ × 3 e 36 = 2² × 3², quale potenza di 2 scegliamo?",
            "options": [
              "2²",
              "2³",
              "2⁵",
              "Nessun fattore 2."
            ],
            "answer": 0,
            "feedback": "È il massimo numero di copie di 2 disponibile in entrambi.",
            "feedbackByOption": [
              "È il massimo numero di copie di 2 disponibile in entrambi.",
              "36 contiene soltanto due fattori 2: una terza copia non è disponibile.",
              "Sommare gli esponenti usa tutte le copie insieme, ma non costruisce un divisore comune.",
              "2 compare in entrambi e può essere incluso nel divisore comune."
            ]
          },
          {
            "question": "Quale regola calcola il M.C.D. dalle scomposizioni?",
            "options": [
              "Tutti i primi presenti, con il maggiore esponente.",
              "Primi comuni, con la somma degli esponenti.",
              "Soltanto i primi presenti in un unico numero.",
              "Primi comuni a tutti, con il minore esponente."
            ],
            "answer": 3,
            "feedback": "Serve il prodotto più grande che possa dividere ciascun numero.",
            "feedbackByOption": [
              "Questa è la regola del m.c.m., non del M.C.D.",
              "La somma delle copie supera quelle disponibili in almeno un numero.",
              "Un fattore assente in un altro numero non può dividere tutti i numeri.",
              "Serve il prodotto più grande che possa dividere ciascun numero."
            ]
          },
          {
            "question": "Un primo compare nella scomposizione di un numero, ma non nell’altro. Può comparire nel loro M.C.D.?",
            "options": [
              "Sì, se è il primo più grande.",
              "Sì, ma con esponente 2.",
              "No: il M.C.D. deve dividere anche il numero che non lo contiene.",
              "Sì, perché basta che compaia una volta."
            ],
            "answer": 2,
            "feedback": "Un fattore comune deve essere disponibile in tutte le scomposizioni.",
            "feedbackByOption": [
              "La grandezza del primo non compensa la sua assenza.",
              "Aumentare l’esponente richiede ancora più copie di un fattore assente.",
              "Un fattore comune deve essere disponibile in tutte le scomposizioni.",
              "Una presenza in un solo numero non lo rende comune."
            ]
          }
        ]
      }
    },
    {
      "id": "piu-numeri",
      "title": "Lo stesso ragionamento con più numeri",
      "cards": [
        {
          "title": "M.C.D. di 48, 72 e 120",
          "steps": [
            {
              "title": "Scomporre tutti",
              "html": "<strong>48 = 2<sup>4</sup> × 3</strong><br><strong>72 = 2<sup>3</sup> × 3<sup>2</sup></strong><br><strong>120 = 2<sup>3</sup> × 3 × 5</strong>.<br><br>I primi comuni a tutti sono 2 e 3. Il 5 compare soltanto in 120, quindi non si prende."
            },
            {
              "title": "Scegliere le copie comuni",
              "html": "Per 2 il minore esponente è <strong>3</strong>; per 3 è <strong>1</strong>. Quindi:<br><strong>M.C.D.(48, 72, 120) = 2<sup>3</sup> × 3 = 24</strong>.<br><br>Controlliamo: <strong>48 : 24 = 2; 72 : 24 = 3; 120 : 24 = 5</strong>."
            }
          ]
        },
        {
          "title": "Primi tra loro",
          "steps": [
            {
              "title": "",
              "html": "<strong>8 = 2<sup>3</sup></strong> e <strong>15 = 3 × 5</strong> non hanno fattori primi comuni. Il loro unico divisore comune è <strong>1</strong>, quindi <strong>M.C.D.(8, 15) = 1</strong>.<br><br>Si dicono <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-coprimi\">primi tra loro</button>. Non significa che ciascuno sia primo: 8 e 15 sono entrambi composti."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quanto vale M.C.D.(48, 72, 120)?",
            "options": [
              "12",
              "24",
              "48",
              "120"
            ],
            "answer": 1,
            "feedback": "2³ × 3 usa le massime copie disponibili in tutti e tre.",
            "feedbackByOption": [
              "12 è comune, ma 24 è un divisore comune più grande.",
              "2³ × 3 usa le massime copie disponibili in tutti e tre.",
              "48 non divide 72 né 120 senza resto.",
              "120 non divide 48 né 72."
            ]
          },
          {
            "question": "Che cosa significa che 8 e 15 sono primi tra loro?",
            "options": [
              "Il loro M.C.D. è 1.",
              "Sono entrambi numeri primi.",
              "Il loro M.C.D. è zero.",
              "Non hanno nessun divisore comune."
            ],
            "answer": 0,
            "feedback": "Non hanno divisori comuni maggiori di 1.",
            "feedbackByOption": [
              "Non hanno divisori comuni maggiori di 1.",
              "8 e 15 sono composti; l’espressione riguarda i divisori comuni.",
              "1 divide sempre entrambi i numeri positivi.",
              "Hanno almeno il divisore comune 1."
            ]
          },
          {
            "question": "Calcolando il M.C.D. di tre numeri, quando un primo può essere incluso?",
            "options": [
              "Quando compare in almeno due delle tre.",
              "Quando compare solo nel numero maggiore.",
              "Quando la somma dei tre esponenti è maggiore di 1.",
              "Quando compare in tutte e tre le scomposizioni."
            ],
            "answer": 3,
            "feedback": "Deve dividere ciascun numero.",
            "feedbackByOption": [
              "Essere assente nel terzo impedisce che sia comune a tutti.",
              "Il M.C.D. deve dividere anche gli altri.",
              "Una somma non sostituisce la presenza in tutte le scomposizioni.",
              "Deve dividere ciascun numero."
            ]
          }
        ]
      }
    },
    {
      "id": "situazioni",
      "title": "Riconoscere quando serve il M.C.D.",
      "cards": [
        {
          "title": "Il maggior numero di gruppi identici",
          "steps": [
            {
              "title": "",
              "html": "Abbiamo <strong>24 matite e 36 penne</strong>. Vogliamo preparare il maggior numero possibile di kit tutti uguali, usando tutto.<br><br>Il <strong>numero dei kit</strong> deve dividere sia 24 sia 36: è <strong>M.C.D.(24, 36) = 12</strong>. Ogni kit contiene <strong>2 matite e 3 penne</strong>.<br><br>Qui il M.C.D. conta i kit; nel problema dei nastri misurava la lunghezza dei pezzi. Prima di calcolare, individuiamo quale quantità deve dividere i dati."
            }
          ]
        },
        {
          "title": "Se un numero divide l’altro",
          "steps": [
            {
              "title": "",
              "html": "<strong>12 divide 36</strong>. Ogni divisore di 12 divide anche 36; inoltre nessun divisore di 12 può superare 12.<br><br>Perciò <strong>M.C.D.(12, 36) = 12</strong>.<br><br>Se i numeri coincidono, il M.C.D. è il numero stesso: <strong>M.C.D.(12, 12) = 12</strong>. In questa lezione lavoriamo con numeri naturali positivi."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Vuoi fare il maggior numero di kit identici con 24 matite e 36 penne, senza avanzi. Che cosa indica il M.C.D.?",
            "options": [
              "Il numero totale degli oggetti: 60.",
              "Il numero di penne in ogni kit: 12.",
              "Il numero dei kit: 12.",
              "Il numero di matite in ogni kit: 12."
            ],
            "answer": 2,
            "feedback": "Ogni kit contiene 24 : 12 = 2 matite e 36 : 12 = 3 penne.",
            "feedbackByOption": [
              "60 è la somma degli oggetti, non il numero massimo di kit identici.",
              "Ogni kit contiene 3 penne; 12 è il numero dei kit.",
              "Ogni kit contiene 24 : 12 = 2 matite e 36 : 12 = 3 penne.",
              "12 kit hanno 2 matite ciascuno: il M.C.D. qui conta i kit."
            ]
          },
          {
            "question": "Se 12 divide 36, quanto vale M.C.D.(12, 36)?",
            "options": [
              "432",
              "12",
              "36",
              "1"
            ],
            "answer": 1,
            "feedback": "Il numero minore divide entrambi ed è il più grande divisore possibile di se stesso.",
            "feedbackByOption": [
              "12 × 36 è un multiplo, non un divisore comune.",
              "Il numero minore divide entrambi ed è il più grande divisore possibile di se stesso.",
              "36 non divide 12.",
              "1 è comune, ma non è il maggiore: anche 12 è comune."
            ]
          },
          {
            "question": "Quale richiesta porta a cercare un divisore comune?",
            "options": [
              "Il maggior numero di gruppi identici che usino tutte le quantità date.",
              "Il primo istante positivo in cui due segnali periodici suonano insieme.",
              "Un numero che sia multiplo di tutti i dati.",
              "La somma di tutte le quantità date."
            ],
            "answer": 0,
            "feedback": "Il numero dei gruppi deve dividere senza resto ciascuna quantità.",
            "feedbackByOption": [
              "Il numero dei gruppi deve dividere senza resto ciascuna quantità.",
              "Gli istanti di ripetizione sono multipli dei periodi: serve il m.c.m.",
              "Questa richiesta riguarda i multipli comuni.",
              "Una somma non risponde alla richiesta di divisibilità di ciascun dato."
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
          "title": "La domanda e il metodo",
          "steps": [
            {
              "title": "Che cosa cerchiamo?",
              "html": "Il <strong>M.C.D.</strong> è il maggiore dei divisori positivi comuni. Deve dividere senza resto ciascun numero."
            },
            {
              "title": "Come lo troviamo?",
              "html": "Scomponiamo tutti i numeri. Moltiplichiamo i <strong>primi comuni a tutti</strong>, ciascuno con il <strong>minore esponente</strong>. Il limite è la scomposizione che ne contiene meno copie."
            },
            {
              "title": "Come leggiamo il risultato?",
              "html": "Se non ci sono primi comuni, il M.C.D. è <strong>1</strong>: i numeri sono primi tra loro. Se un numero divide l’altro, il M.C.D. è quello minore.<br><br>Nei problemi controlliamo che cosa rappresenta il divisore trovato: lunghezza dei pezzi, numero dei gruppi o un’altra quantità."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quanto vale M.C.D.(18, 30)?",
            "options": [
              "90",
              "3",
              "18",
              "6"
            ],
            "answer": 3,
            "feedback": "18 = 2 × 3² e 30 = 2 × 3 × 5: prendiamo 2 × 3.",
            "feedbackByOption": [
              "90 è il m.c.m., non un divisore di 18 e 30.",
              "3 è comune, ma anche 6 è comune ed è più grande.",
              "18 non divide 30 senza resto.",
              "18 = 2 × 3² e 30 = 2 × 3 × 5: prendiamo 2 × 3."
            ]
          },
          {
            "question": "M.C.D.(8, 15) = 1. Che cosa segue?",
            "options": [
              "8 e 15 devono essere numeri primi.",
              "Il loro prodotto è 1.",
              "Non esiste un divisore comune maggiore di 1.",
              "Non hanno il divisore comune 1."
            ],
            "answer": 2,
            "feedback": "È proprio il significato di essere primi tra loro.",
            "feedbackByOption": [
              "Essere primi tra loro è diverso dall’essere primi singolarmente.",
              "Il prodotto è 120; M.C.D. e prodotto sono quantità diverse.",
              "È proprio il significato di essere primi tra loro.",
              "1 divide entrambi ed è il loro M.C.D."
            ]
          },
          {
            "question": "Perché scegliamo il minore esponente di ciascun primo comune?",
            "options": [
              "Perché il M.C.D. è sempre primo.",
              "Un divisore comune non può richiedere più copie di quelle disponibili in ciascun numero.",
              "Perché il M.C.D. deve essere il numero più piccolo possibile.",
              "Perché dobbiamo sommare tutti gli esponenti."
            ],
            "answer": 1,
            "feedback": "Il numero che ne possiede meno impone il limite.",
            "feedbackByOption": [
              "Il M.C.D. può essere composto, per esempio 12.",
              "Il numero che ne possiede meno impone il limite.",
              "Cerchiamo il massimo divisore comune, non il minimo.",
              "La somma non rispetta le disponibilità delle singole scomposizioni."
            ]
          }
        ]
      }
    }
  ]
};
