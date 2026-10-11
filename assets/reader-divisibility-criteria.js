/* Original GatitoMath draft. Mathigon is an editorial reference; no source text or assets copied. */
Object.assign(window.READER_GLOSSARY, {
  "arith-criterio": {
    "title": "Criterio di divisibilità",
    "kind": "Concetto",
    "text": "Una condizione necessaria e sufficiente per stabilire se un numero naturale è divisibile per un dato numero naturale positivo. Quando la condizione è soddisfatta la divisione ha resto zero; quando non lo è, il resto è diverso da zero."
  },
  "arith-pari": {
    "title": "Numero pari",
    "kind": "Concetto",
    "text": "Un numero naturale divisibile per 2, cioè esprimibile come 2 × k con k numero naturale. Anche zero è pari."
  }
});
window.READER_LESSONS["aritmetica-criteri-divisibilita"] = {
  "title": "Criteri di divisibilità",
  "subtitle": "Matematica · Medie e biennio · Prima bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "riconoscere",
      "title": "Una divisione che possiamo evitare",
      "cards": [
        {
          "title": "È divisibile, oppure no?",
          "steps": [
            {
              "title": "",
              "html": "Nella lezione precedente abbiamo imparato che un numero è <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisibilita\">divisibile</button> per un altro quando la divisione ha <strong>resto zero</strong>. Ma dobbiamo eseguire ogni volta la divisione per scoprirlo?"
            },
            {
              "title": "Un indizio nella scrittura",
              "html": "Consideriamo <strong>235</strong>. Sappiamo che 235 : 5 è esatta: i multipli di 5 terminano tutti con 0 oppure con 5. Ci è bastato osservare l’ultima cifra, senza calcolare il quoziente."
            }
          ]
        },
        {
          "title": "Un criterio dà una risposta certa",
          "steps": [
            {
              "title": "",
              "html": "Un <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-criterio\">criterio di divisibilità</button> è una regola che permette di stabilire se una divisione ha resto zero, usando alcune caratteristiche del numero.<br><br><strong>Se la condizione è soddisfatta, il numero è divisibile; se non lo è, non è divisibile.</strong> Il criterio dà una risposta esatta, ma non ci dice necessariamente quanto vale il quoziente."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa permette di stabilire un criterio di divisibilità?",
            "options": [
              "Il quoziente di qualunque divisione.",
              "Se una divisione ha resto zero.",
              "Soltanto se il numero è grande.",
              "Il valore del resto in ogni caso."
            ],
            "answer": 1,
            "feedback": "Ci dice se la divisione è esatta, cioè se il resto è zero.",
            "feedbackByOption": [
              "Il criterio riconosce la divisibilità; non calcola necessariamente il quoziente.",
              "Ci dice se la divisione è esatta, cioè se il resto è zero.",
              "La grandezza del numero non è ciò che il criterio verifica.",
              "Distingue il resto zero da un resto diverso da zero; non determina necessariamente il resto."
            ]
          },
          {
            "question": "Applichi correttamente un criterio e la sua condizione non è soddisfatta. Che cosa concludi?",
            "options": [
              "Il numero potrebbe essere divisibile: il criterio è solo una stima.",
              "Il quoziente è zero.",
              "Devi cambiare il numero.",
              "Il numero non è divisibile per quel divisore."
            ],
            "answer": 3,
            "feedback": "La condizione è necessaria e sufficiente: quando manca, la divisione non è esatta.",
            "feedbackByOption": [
              "I criteri che studiamo danno una risposta certa, non una stima.",
              "Il mancato rispetto del criterio riguarda il resto, non significa quoziente zero.",
              "Il criterio verifica il numero dato: non dobbiamo modificarlo.",
              "La condizione è necessaria e sufficiente: quando manca, la divisione non è esatta."
            ]
          },
          {
            "question": "Sai che 235 è divisibile per 5. Quale informazione possiedi già, prima di calcolare 235 : 5?",
            "options": [
              "Il resto è zero.",
              "Il quoziente è 5.",
              "Il resto è 5.",
              "235 è divisibile per qualsiasi numero che termina con 5."
            ],
            "answer": 0,
            "feedback": "Essere divisibile per 5 significa proprio che la divisione per 5 ha resto zero.",
            "feedbackByOption": [
              "Essere divisibile per 5 significa proprio che la divisione per 5 ha resto zero.",
              "5 è il divisore, non il quoziente: 235 : 5 = 47.",
              "Il resto è zero; inoltre un resto della divisione per 5 deve essere minore di 5.",
              "Il criterio riguarda il divisore 5, non tutti i numeri che terminano con 5."
            ]
          }
        ]
      }
    },
    {
      "id": "ultima-cifra",
      "title": "L’ultima cifra: 2 e 5",
      "cards": [
        {
          "title": "Perché possiamo guardare solo le unità?",
          "steps": [
            {
              "title": "",
              "html": "La scrittura di <strong>238</strong> ci permette di separare <strong>23 decine e 8 unità</strong>:<br><strong>238 = 230 + 8</strong>.<br><br>La parte 230 è un multiplo di 10. Ogni decina si divide esattamente per 2 e per 5. Per questi due divisori, quindi, il resto dipende soltanto dalle unità."
            }
          ]
        },
        {
          "title": "Divisibilità per 2",
          "steps": [
            {
              "title": "Il criterio",
              "html": "Un numero è divisibile per <strong>2</strong> se e solo se l’ultima cifra è <strong>0, 2, 4, 6 oppure 8</strong>. Questi numeri si chiamano <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-pari\">pari</button>."
            },
            {
              "title": "Due esempi",
              "html": "<strong>238 è divisibile per 2</strong>, perché termina con 8. <strong>235 non lo è</strong>, perché termina con 5.<br><br>Non conta quante cifre abbia il numero, né quante di esse siano pari: conta la cifra delle unità."
            }
          ]
        },
        {
          "title": "Divisibilità per 5",
          "steps": [
            {
              "title": "Il criterio",
              "html": "Un numero è divisibile per <strong>5</strong> se e solo se termina con <strong>0 oppure 5</strong>.<br><strong>235</strong> è divisibile per 5; <strong>238</strong> non lo è."
            },
            {
              "title": "Due criteri, due risposte",
              "html": "<strong>230</strong> termina con 0: è divisibile sia per 2 sia per 5.<br><strong>235</strong> è divisibile per 5, ma non per 2.<br><strong>238</strong> è divisibile per 2, ma non per 5.<br><br>I criteri rispondono a domande diverse: un numero può soddisfarne uno solo, entrambi oppure nessuno."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale numero è divisibile per 2?",
            "options": [
              "2 351",
              "4 127",
              "7 408",
              "8 003"
            ],
            "answer": 2,
            "feedback": "Termina con 8, una delle cifre 0, 2, 4, 6, 8.",
            "feedbackByOption": [
              "Conta l’ultima cifra: 1 non è pari, anche se il numero comincia con 2.",
              "L’ultima cifra è 7: la divisione per 2 non è esatta.",
              "Termina con 8, una delle cifre 0, 2, 4, 6, 8.",
              "L’ultima cifra è 3; gli zeri all’interno non decidono la divisibilità per 2."
            ]
          },
          {
            "question": "Quale numero è divisibile per 5, ma non per 2?",
            "options": [
              "350",
              "352",
              "503",
              "345"
            ],
            "answer": 3,
            "feedback": "Termina con 5: è divisibile per 5 e non è pari.",
            "feedbackByOption": [
              "Termina con 0: è divisibile sia per 5 sia per 2.",
              "Termina con 2: è divisibile per 2, ma non per 5.",
              "Conta l’ultima cifra, non la prima: 503 termina con 3.",
              "Termina con 5: è divisibile per 5 e non è pari."
            ]
          },
          {
            "question": "Un numero termina con 0. Che cosa sappiamo sulla sua divisibilità per 2 e per 5?",
            "options": [
              "È divisibile per entrambi.",
              "È divisibile solo per 2.",
              "È divisibile solo per 5.",
              "Non è divisibile per nessuno dei due."
            ],
            "answer": 0,
            "feedback": "0 soddisfa sia il criterio per 2 sia quello per 5.",
            "feedbackByOption": [
              "0 soddisfa sia il criterio per 2 sia quello per 5.",
              "La cifra finale 0 soddisfa anche il criterio per 5.",
              "La cifra finale 0 soddisfa anche il criterio per 2.",
              "Un numero che termina con 0 supera entrambi i controlli."
            ]
          }
        ]
      }
    },
    {
      "id": "zeri-finali",
      "title": "Gli zeri finali: 10, 100 e 1 000",
      "cards": [
        {
          "title": "Da gruppi di dieci a gruppi di cento",
          "steps": [
            {
              "title": "Per 10",
              "html": "Un numero è divisibile per <strong>10</strong> se e solo se termina con <strong>0</strong>.<br><br><strong>230 = 23 × 10</strong>: ci sono 23 decine intere e nessuna unità in più. <strong>235 = 23 × 10 + 5</strong>: avanzano 5 unità, quindi 235 non è divisibile per 10."
            },
            {
              "title": "Per 100",
              "html": "Un numero naturale positivo è divisibile per <strong>100</strong> se e solo se termina con <strong>almeno due zeri</strong>.<br><br><strong>2 300 = 23 × 100</strong>: sono 23 centinaia intere. <strong>2 350 = 23 × 100 + 50</strong>: restano 50 unità fuori dalle centinaia complete."
            }
          ]
        },
        {
          "title": "Divisibilità per 1 000",
          "steps": [
            {
              "title": "",
              "html": "Un numero naturale positivo è divisibile per <strong>1 000</strong> se e solo se termina con <strong>almeno tre zeri</strong>.<br><br><strong>23 000 = 23 × 1 000</strong>: contiene 23 migliaia intere. <strong>23 500</strong>, invece, contiene 23 migliaia e altre 500 unità: non è divisibile per 1 000."
            }
          ]
        },
        {
          "title": "Conta dove si trovano gli zeri",
          "steps": [
            {
              "title": "Zeri consecutivi in fondo",
              "html": "<strong>10 020</strong> contiene tre zeri, ma termina con un solo zero: è divisibile per 10, non per 100 né per 1 000.<br><br>Contiamo gli <strong>zeri consecutivi a destra</strong>, non tutti gli zeri presenti nella scrittura del numero."
            },
            {
              "title": "Almeno, non esattamente",
              "html": "<strong>23 000</strong> termina con tre zeri, quindi è divisibile per 1 000, ma anche per 100 e per 10.<br><br>Per 100 bastano due zeri finali: averne un terzo non fa perdere la divisibilità."
            }
          ]
        },
        {
          "title": "La regola continua",
          "steps": [
            {
              "title": "",
              "html": "Per i numeri naturali positivi, a <strong>10, 100, 1 000, 10 000, …</strong> corrispondono <strong>almeno uno, due, tre, quattro, … zeri finali</strong>.<br><br><strong>Zero</strong> è un caso da ricordare a parte: è divisibile per ciascuno di questi numeri, perché 0 = 10 × 0 = 100 × 0 = 1 000 × 0."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale numero è divisibile per 100, ma non per 1 000?",
            "options": [
              "23 000",
              "2 350",
              "2 300",
              "2 030"
            ],
            "answer": 2,
            "feedback": "Ha due zeri finali, ma non tre: supera il criterio per 100 e non quello per 1 000.",
            "feedbackByOption": [
              "Ha tre zeri finali: è divisibile anche per 1 000.",
              "Ha un solo zero finale: è divisibile per 10, non per 100.",
              "Ha due zeri finali, ma non tre: supera il criterio per 100 e non quello per 1 000.",
              "Gli zeri interni non contano: termina con un solo zero."
            ]
          },
          {
            "question": "10 020 contiene tre zeri. Quale affermazione è corretta?",
            "options": [
              "È divisibile per 1 000 perché contiene tre zeri.",
              "È divisibile per 100 perché contiene almeno due zeri.",
              "Non è divisibile per 10 perché gli zeri sono separati.",
              "È divisibile per 10, ma non per 100 né per 1 000."
            ],
            "answer": 3,
            "feedback": "Termina con un solo zero: il criterio per 10 è soddisfatto, gli altri due no.",
            "feedbackByOption": [
              "Occorrono tre zeri consecutivi alla fine, non tre zeri in qualsiasi posizione.",
              "Le ultime due cifre sono 20: per 100 devono essere 00.",
              "L’ultima cifra è 0, quindi il criterio per 10 è soddisfatto.",
              "Termina con un solo zero: il criterio per 10 è soddisfatto, gli altri due no."
            ]
          },
          {
            "question": "Un numero positivo termina con almeno tre zeri. Quale conclusione è sempre corretta?",
            "options": [
              "È divisibile per 10, per 100 e per 1 000.",
              "È divisibile soltanto per 1 000.",
              "È divisibile per 100, ma non per 10.",
              "È divisibile per 1 000 soltanto se ha esattamente tre zeri finali."
            ],
            "answer": 0,
            "feedback": "Tre zeri finali soddisfano anche le condizioni di uno e di due zeri finali.",
            "feedbackByOption": [
              "Tre zeri finali soddisfano anche le condizioni di uno e di due zeri finali.",
              "La divisibilità per 1 000 implica anche quella per 100 e per 10.",
              "Se termina con tre zeri, termina anche con un solo zero: è divisibile per 10.",
              "Il criterio richiede almeno tre zeri: anche quattro o più vanno bene."
            ]
          },
          {
            "question": "Quale scrittura dimostra direttamente che 2 300 è divisibile per 100?",
            "options": [
              "2 300 = 230 × 10.",
              "2 300 = 23 × 100.",
              "2 300 = 2 × 1 000 + 300.",
              "2 300 = 2 350 − 50."
            ],
            "answer": 1,
            "feedback": "È il prodotto di 100 per il naturale 23: la divisione per 100 è esatta.",
            "feedbackByOption": [
              "Questa scrittura esprime direttamente la divisibilità per 10; per 100 vogliamo un fattore 100 e un altro fattore naturale.",
              "È il prodotto di 100 per il naturale 23: la divisione per 100 è esatta.",
              "Sono due migliaia e altre 300 unità; la scrittura non esprime direttamente il numero come prodotto di 100 per un naturale.",
              "Una differenza da sola non dà il prodotto richiesto per dimostrare direttamente la divisibilità per 100."
            ]
          }
        ]
      }
    },
    {
      "id": "somma-cifre",
      "title": "Per 3: sommare tutte le cifre",
      "cards": [
        {
          "title": "L’ultima cifra non basta",
          "steps": [
            {
              "title": "",
              "html": "<strong>123 e 124</strong> sono numeri vicini, ma soltanto 123 è divisibile per 3. Anche <strong>13 e 33</strong> terminano con la stessa cifra, ma 13 non è divisibile per 3 e 33 lo è.<br><br>Per questo divisore dobbiamo osservare il numero in un altro modo."
            }
          ]
        },
        {
          "title": "Il criterio di divisibilità per 3",
          "steps": [
            {
              "title": "La somma delle cifre",
              "html": "Un numero è divisibile per <strong>3</strong> se e solo se la <strong>somma di tutte le sue cifre</strong> è divisibile per 3.<br><br>Per <strong>2 346</strong> otteniamo <strong>2 + 3 + 4 + 6 = 15</strong>. Poiché 15 è divisibile per 3, lo è anche 2 346."
            },
            {
              "title": "La somma non deve essere proprio 3",
              "html": "Anche <strong>6, 9, 12, 15, …</strong> sono multipli di 3: ciascuna di queste somme soddisfa il criterio.<br><br>Per <strong>2 347</strong> la somma è <strong>16</strong>, che non è divisibile per 3: nemmeno 2 347 lo è."
            }
          ]
        },
        {
          "title": "Perché funziona?",
          "steps": [
            {
              "title": "Separiamo le parti",
              "html": "Consideriamo <strong>243 = 2 × 100 + 4 × 10 + 3</strong>.<br><br>Un centinaio è <strong>99 + 1</strong> e una decina è <strong>9 + 1</strong>. Possiamo perciò riscrivere:<br><strong>243 = 2 × 99 + 4 × 9 + (2 + 4 + 3)</strong>."
            },
            {
              "title": "Resta la somma delle cifre",
              "html": "Le parti <strong>2 × 99</strong> e <strong>4 × 9</strong> sono già divisibili per 3. La parte che decide è <strong>2 + 4 + 3</strong>: proprio la somma delle cifre.<br><br>La stessa idea funziona con le migliaia, perché <strong>1 000 = 999 + 1</strong>, e con le altre posizioni decimali."
            }
          ]
        },
        {
          "title": "Possiamo sommare ancora",
          "steps": [
            {
              "title": "",
              "html": "Per <strong>9 876</strong> la somma delle cifre è <strong>30</strong>. Possiamo ripetere il controllo su 30: <strong>3 + 0 = 3</strong>.<br><br>Ogni passaggio conserva la risposta al criterio: 9 876 è divisibile per 3. La somma finale <strong>non è il quoziente</strong>: serve soltanto a riconoscere se la divisione è esatta."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Per 4 218 la somma delle cifre è 15. Che cosa concludi?",
            "options": [
              "Non è divisibile per 3, perché la somma non è 3.",
              "È divisibile per 3, perché 15 è multiplo di 3.",
              "È divisibile per 3 soltanto perché termina con 8.",
              "Il quoziente 4 218 : 3 è 15."
            ],
            "answer": 1,
            "feedback": "15 = 3 × 5: il criterio è soddisfatto.",
            "feedbackByOption": [
              "La somma può essere qualsiasi multiplo di 3: anche 15 soddisfa il criterio.",
              "15 = 3 × 5: il criterio è soddisfatto.",
              "La cifra finale 8 non basta a stabilire la divisibilità per 3.",
              "15 è la somma delle cifre, non il quoziente: il criterio non lo calcola."
            ]
          },
          {
            "question": "Quale numero è divisibile per 3?",
            "options": [
              "2 347",
              "2 348",
              "2 346",
              "2 350"
            ],
            "answer": 2,
            "feedback": "La somma è 15, che è divisibile per 3.",
            "feedbackByOption": [
              "La somma è 16, che non è multiplo di 3.",
              "La somma è 17, che non è multiplo di 3.",
              "La somma è 15, che è divisibile per 3.",
              "La somma è 10: lo zero finale non è un criterio per 3."
            ]
          },
          {
            "question": "Per 9 876 sommi le cifre e ottieni 30, poi 3 + 0 = 3. Che cosa significa?",
            "options": [
              "La divisione 9 876 : 3 ha resto zero.",
              "Il quoziente 9 876 : 3 è 3.",
              "9 876 non è divisibile per 3 perché contiene una cifra 8.",
              "Il criterio non permette di ripetere la somma."
            ],
            "answer": 0,
            "feedback": "La somma 30 è divisibile per 3; la seconda somma conferma la stessa risposta.",
            "feedbackByOption": [
              "La somma 30 è divisibile per 3; la seconda somma conferma la stessa risposta.",
              "3 è la somma finale, non il quoziente della divisione.",
              "Conta la somma di tutte le cifre; ogni cifra da sola non deve essere divisibile per 3.",
              "Possiamo applicare il criterio anche al numero ottenuto sommando le cifre."
            ]
          },
          {
            "question": "13 e 33 terminano entrambi con 3. Quale affermazione è corretta?",
            "options": [
              "Sono entrambi divisibili per 3 perché terminano con 3.",
              "Nessuno dei due è divisibile per 3 perché sono dispari.",
              "Solo 13 è divisibile per 3, perché 1 è più piccolo di 3.",
              "Solo 33 è divisibile per 3: le somme delle cifre sono 4 e 6."
            ],
            "answer": 3,
            "feedback": "4 non è multiplo di 3, mentre 6 lo è.",
            "feedbackByOption": [
              "Per 3 l’ultima cifra non basta: 1 + 3 = 4 non è divisibile per 3.",
              "Essere pari o dispari non decide la divisibilità per 3.",
              "La grandezza della prima cifra non è il criterio: dobbiamo sommare tutte le cifre.",
              "4 non è multiplo di 3, mentre 6 lo è."
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
          "title": "Che cosa osservare?",
          "steps": [
            {
              "title": "L’ultima cifra",
              "html": "<strong>Per 2:</strong> deve essere 0, 2, 4, 6 oppure 8.<br><strong>Per 5:</strong> deve essere 0 oppure 5."
            },
            {
              "title": "Gli zeri finali",
              "html": "<strong>Per 10:</strong> almeno uno zero finale.<br><strong>Per 100:</strong> almeno due zeri finali.<br><strong>Per 1 000:</strong> almeno tre zeri finali.<br><br>Per i numeri positivi contiamo gli zeri consecutivi in fondo, non tutti quelli presenti. Zero è divisibile per ciascuno di questi divisori."
            },
            {
              "title": "La somma delle cifre",
              "html": "<strong>Per 3:</strong> sommiamo tutte le cifre e controlliamo se il risultato è un multiplo di 3. Se serve, possiamo sommare ancora le cifre del risultato."
            },
            {
              "title": "Che cosa ci dice il criterio?",
              "html": "Il criterio stabilisce <strong>se una divisione ha resto zero</strong>; non calcola necessariamente il quoziente.<br><br>Non è una scorciatoia basata su una coincidenza: funziona grazie al modo in cui scriviamo i numeri con unità, decine, centinaia e così via."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale frase descrive correttamente 450?",
            "options": [
              "È divisibile per 100 perché contiene uno zero.",
              "È divisibile per 1 000 perché ha tre cifre.",
              "È divisibile per 2, per 3, per 5 e per 10.",
              "È divisibile per 5, ma non per 2."
            ],
            "answer": 2,
            "feedback": "Termina con 0 e la somma delle cifre è 9: supera tutti e quattro i criteri.",
            "feedbackByOption": [
              "Per 100 servono due zeri finali; le ultime due cifre sono 50.",
              "Servono tre zeri finali, non tre cifre qualsiasi.",
              "Termina con 0 e la somma delle cifre è 9: supera tutti e quattro i criteri.",
              "La cifra finale 0 soddisfa anche il criterio per 2."
            ]
          },
          {
            "question": "Quale affermazione su 15 000 è corretta?",
            "options": [
              "È divisibile per 1 000, ma non per 100.",
              "È divisibile per 10, per 100 e per 1 000.",
              "Non è divisibile per 3 perché termina con 0.",
              "È divisibile per 5, ma non per 10."
            ],
            "answer": 1,
            "feedback": "Ha tre zeri finali: supera tutti e tre i controlli.",
            "feedbackByOption": [
              "Tre zeri finali soddisfano anche il criterio di due zeri per 100.",
              "Ha tre zeri finali: supera tutti e tre i controlli.",
              "La somma delle cifre è 6, quindi è divisibile anche per 3.",
              "L’ultima cifra è 0: è divisibile anche per 10."
            ]
          },
          {
            "question": "Zero è divisibile per 2, per 3 e per 5?",
            "options": [
              "No, perché non ha gruppi positivi.",
              "Solo per 2, perché è pari.",
              "No, perché la divisione per zero non è definita.",
              "Sì: per ciascun divisore positivo d, 0 = d × 0."
            ],
            "answer": 3,
            "feedback": "Il divisore è positivo e il quoziente è zero: ogni divisione è esatta.",
            "feedbackByOption": [
              "Il quoziente può essere zero: 0 : d = 0 ha resto zero per d positivo.",
              "Zero ha somma delle cifre 0 e termina con 0: soddisfa anche i criteri per 3 e per 5.",
              "Stiamo dividendo zero per numeri positivi, non dividendo per zero.",
              "Il divisore è positivo e il quoziente è zero: ogni divisione è esatta."
            ]
          }
        ]
      }
    }
  ]
};
