/* Original GatitoMath draft. Editorial reference: Mathigon factors-and-multiples; no assets or text copied. */
Object.assign(window.READER_GLOSSARY, {
  "arith-naturali": {
    "title": "Numeri naturali",
    "text": "I numeri 0, 1, 2, 3, … . In questa piattaforma includiamo lo zero nell’insieme dei numeri naturali.",
    "kind": "Concetto"
  },
  "arith-divisore": {
    "title": "Divisore",
    "text": "Un numero naturale positivo d è un divisore del numero naturale n se esiste un numero naturale q tale che n = d × q. Equivalentemente, la divisione di n per d ha resto zero.",
    "kind": "Concetto"
  },
  "arith-multiplo": {
    "title": "Multiplo",
    "text": "Un numero naturale n è multiplo di un numero naturale a se si può scrivere n = a × k, con k numero naturale. Per a positivo, n è multiplo di a esattamente quando a è divisore di n.",
    "kind": "Concetto"
  },
  "arith-divisibilita": {
    "title": "Divisibilità",
    "text": "Un numero naturale n è divisibile per un numero naturale positivo d quando la divisione di n per d è esatta, cioè ha resto zero.",
    "kind": "Concetto"
  },
  "arith-resto": {
    "title": "Resto",
    "text": "Nella divisione tra numeri naturali n = d × q + r, con d positivo, il resto r è il numero naturale che soddisfa 0 ≤ r < d. Il quoziente q indica quanti gruppi completi di d elementi si possono formare.",
    "kind": "Concetto"
  },
  "arith-prodotto": {
    "title": "Prodotto",
    "text": "Il risultato di una moltiplicazione. I numeri che si moltiplicano si chiamano fattori.",
    "kind": "Concetto"
  },
  "arith-quoziente": {
    "title": "Quoziente",
    "text": "Il risultato di una divisione esatta. Nella divisione con resto tra naturali è il numero q nella scrittura n = d × q + r, dove 0 ≤ r < d.",
    "kind": "Concetto"
  }
});
window.READER_LESSONS["aritmetica-divisibilita"] = {
  "title": "Multipli, divisori e divisibilità",
  "subtitle": "Matematica · Medie e biennio · Prima bozza in lavorazione",
  "version": 5,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "gruppi",
      "title": "Gruppi uguali, con o senza resto",
      "cards": [
        {
          "id": "partenza",
          "title": "Come può fare?",
          "steps": [
            {
              "title": "",
              "html": "Bjorne ha <strong>12 monete da 1 €</strong> e vuole <strong>dividerle in mazzetti uguali</strong>, usando tutte le monete."
            }
          ],
          "board": "coin-experiment"
        },
        {
          "id": "resto",
          "title": "Con o senza monete avanzate",
          "steps": [
            {
              "title": "Una suddivisione senza avanzi",
              "html": "<span data-coin-copy=\"arrangement\">Possiamo formare 3 mazzetti da 4 monete ciascuno, usando tutte le 12 monete.</span><br><br><strong><span data-coin-copy=\"product\">12 = 4 × 3</span></strong>.<br><span data-coin-copy=\"exact\">12 : 4 = 3, senza resto.</span><br><br>Abbiamo eseguito una <strong>divisione esatta</strong> e il <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-resto\">resto</button> è <strong>zero</strong>."
            },
            {
              "title": "Mazzetti da 5 monete",
              "html": "Con 12 monete possiamo formare <strong>2 mazzetti da 5</strong>, ma avanzano <strong>2 monete</strong>:<br><strong>12 = 5 × 2 + 2</strong>.<br><br>Il <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-resto\">resto</button> è 2, quindi <strong>la divisione non è esatta</strong>."
            }
          ],
          "board": "coin-observe",
          "stepMode": "replace"
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "12 monete vengono divise in mazzetti da 5. Quante monete restano fuori dai mazzetti completi?",
            "options": [
              "0",
              "1",
              "2",
              "5"
            ],
            "answer": 2,
            "feedback": "Due mazzetti da 5 usano 10 monete: ne restano 2.",
            "feedbackByOption": [
              "Due mazzetti contengono 10 monete: ne restano 2.",
              "12 = 5 × 2 + 2, quindi il resto non è 1.",
              "Due mazzetti da 5 usano 10 monete: ne restano 2.",
              "5 è la quantità per mazzetto, non il resto."
            ]
          },
          {
            "question": "Dividi tutte le 12 monete in 3 mazzetti uguali. Quante monete ci sono in ogni mazzetto?",
            "options": [
              "3",
              "4",
              "9",
              "12"
            ],
            "answer": 1,
            "feedback": "3 mazzetti da 4 monete usano tutte le 12 monete.",
            "feedbackByOption": [
              "3 indica il numero dei mazzetti; 3 × 3 userebbe soltanto 9 monete.",
              "3 mazzetti da 4 monete usano tutte le 12 monete.",
              "Tre mazzetti da 9 richiederebbero 27 monete.",
              "Se ogni mazzetto avesse 12 monete ne servirebbero 36."
            ]
          },
          {
            "question": "Quale altra suddivisione usa tutte le 12 monete in mazzetti uguali?",
            "options": [
              "4 mazzetti da 3 monete.",
              "3 mazzetti da 3 monete.",
              "5 mazzetti da 2 monete.",
              "4 mazzetti da 4 monete."
            ],
            "answer": 0,
            "feedback": "4 × 3 = 12.",
            "feedbackByOption": [
              "4 × 3 = 12.",
              "3 × 3 = 9: avanzano 3 monete.",
              "5 × 2 = 10: avanzano 2 monete.",
              "4 × 4 = 16: servono 4 monete in più."
            ],
            "coinAnother": true
          }
        ]
      }
    },
    {
      "id": "relazione",
      "title": "Due modi di leggere la stessa relazione",
      "cards": [
        {
          "id": "nomi",
          "title": "Due modi di leggere lo stesso fatto",
          "steps": [
            {
              "title": "Divisore e divisibilità",
              "html": "<span data-coin-copy=\"exact\">12 : 4 = 3, senza resto.</span><br><br>Perciò diciamo che <strong><span data-coin-copy=\"divisible\">12 è divisibile per 4</span></strong>, oppure che <strong><span data-coin-copy=\"divisor\">4 è un divisore di 12</span></strong>.<br><br><button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisibilita\">Divisibilità</button> e <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisore\">divisore</button> descrivono una divisione esatta."
            },
            {
              "title": "Il numero 12 come multiplo",
              "html": "<span data-coin-copy=\"same\">Moltiplicando 4 per 3 otteniamo 12. È la stessa relazione letta attraverso la moltiplicazione.</span><br><br>Quindi <strong><span data-coin-copy=\"multiple\">12 è un multiplo di 4</span></strong>. <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-multiplo\">Multiplo</button> e <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisore\">divisore</button> sono due modi di leggere la stessa relazione."
            }
          ],
          "stepMode": "replace"
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale frase esprime correttamente l’uguaglianza 24 = 8 × 3?",
            "options": [
              "24 è un divisore di 8.",
              "8 è un divisore di 24 e 24 è un multiplo di 8.",
              "8 non divide 24 perché è più piccolo.",
              "24 è multiplo di 8, ma 8 non è divisore di 24."
            ],
            "answer": 1,
            "feedback": "24 : 8 = 3 senza resto. Le due frasi descrivono la stessa relazione.",
            "feedbackByOption": [
              "Hai scambiato i ruoli: è 8 che divide 24 senza resto.",
              "24 : 8 = 3 senza resto. Le due frasi descrivono la stessa relazione.",
              "Un divisore positivo può essere più piccolo del numero che divide: 24 : 8 è esatta.",
              "Rivedi la relazione tra le grandezze o gli oggetti citati. 24 : 8 = 3 senza resto. Le due frasi descrivono la stessa relazione."
            ]
          },
          {
            "question": "Quale divisione esatta mostra che 4 è un divisore di 20?",
            "options": [
              "20 : 4 = 5",
              "4 : 20 = 5",
              "20 : 5 = 4",
              "20 : 4 = 4"
            ],
            "answer": 0,
            "feedback": "20 diviso 4 dà 5 senza resto, quindi 4 è un divisore di 20.",
            "feedbackByOption": [
              "20 diviso 4 dà 5 senza resto, quindi 4 è un divisore di 20.",
              "Per verificare se 4 è un divisore di 20, dobbiamo dividere 20 per 4, mantenendo questo ordine.",
              "Questa divisione mostra che 5 è un divisore di 20. Per controllare il 4 dobbiamo dividere per 4.",
              "4 × 4 = 16, mentre 4 × 5 = 20. Il quoziente corretto è 5."
            ]
          },
          {
            "question": "Quale frase descrive 7 × 5 = 35?",
            "options": [
              "7 è multiplo di 35",
              "35 è divisore di 5",
              "5 non divide 35",
              "35 è multiplo sia di 7 sia di 5"
            ],
            "answer": 3,
            "feedback": "Entrambi i fattori dividono 35 senza resto.",
            "feedbackByOption": [
              "Questa risposta non segue la relazione richiesta. Entrambi i fattori dividono 35 senza resto.",
              "Questa risposta non segue la relazione richiesta. Entrambi i fattori dividono 35 senza resto.",
              "Questa risposta non segue la relazione richiesta. Entrambi i fattori dividono 35 senza resto.",
              "Entrambi i fattori dividono 35 senza resto."
            ]
          }
        ]
      }
    },
    {
      "id": "multipli",
      "title": "Costruire i multipli",
      "cards": [
        {
          "id": "sequenza",
          "title": "Le tabelline ci mostrano i multipli",
          "steps": [
            {
              "title": "",
              "html": "I multipli di un numero si ottengono moltiplicandolo per <strong>0, 1, 2, 3, …</strong>.<br><br>Quando reciti la tabellina del numero <span data-multiples-number>7</span>, stai già elencando alcuni suoi multipli:<br><strong><span data-multiples-sequence>0, 7, 14, 21, 28, …</span></strong><br><br>Ogni volta aggiungiamo <span data-multiples-number>7</span> al numero precedente."
            },
            {
              "title": "La lista continua",
              "html": "I multipli di un numero <strong>diverso da zero</strong> sono infiniti. Possiamo continuare la sequenza aggiungendo ogni volta lo stesso numero.<br><br><strong>Il numero stesso è un suo multiplo</strong>, perché moltiplicarlo per 1 lo lascia invariato."
            }
          ],
          "board": "divisibility-multiples"
        }
      ],
      "quiz": {
        "question": "Quale elenco contiene soltanto multipli di 5?",
        "options": [
          "5, 10, 15, 21",
          "0, 5, 10, 15",
          "1, 5, 10, 15"
        ],
        "answer": 1,
        "feedback": "Sono 5 × 0, 5 × 1, 5 × 2 e 5 × 3.",
        "feedbackByOption": [
          "21 non si ottiene moltiplicando 5 per un naturale.",
          "Sono 5 × 0, 5 × 1, 5 × 2 e 5 × 3.",
          "1 non è multiplo di 5. Anche lo zero, invece, è multiplo di 5."
        ]
      }
    },
    {
      "id": "divisori",
      "title": "Trovare tutti i divisori",
      "cards": [
        {
          "id": "coppie",
          "title": "Due fattori, due divisori",
          "steps": [
            {
              "title": "",
              "html": "Per trovare i divisori positivi di 18 cerchiamo le coppie di numeri naturali il cui <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-prodotto\">prodotto</button> è 18:<br><strong>1 × 18 &nbsp; 2 × 9 &nbsp; 3 × 6</strong><br><br>Ogni coppia ci dà due divisori: se 18 = 2 × 9, sia 2 sia 9 dividono 18."
            },
            {
              "title": "Una lista senza ripetizioni",
              "html": "Raccogliendo i numeri delle coppie e ordinandoli troviamo <strong>1, 2, 3, 6, 9, 18</strong>.<br><br>Puoi controllare ogni candidato con una divisione. Quando cerchi le coppie in ordine crescente, fermati quando il primo fattore supera il secondo: da lì ritroveresti le coppie già viste."
            }
          ]
        },
        {
          "id": "quadrato",
          "title": "Una coppia può avere due numeri uguali",
          "steps": [
            {
              "title": "",
              "html": "Per 16 troviamo <strong>1 × 16, 2 × 8 e 4 × 4</strong>. Il 4 compare due volte nella stessa coppia, ma nella lista dei divisori lo scriviamo una volta sola:<br><strong>1, 2, 4, 8, 16</strong>.<br><br>I divisori positivi di un numero positivo sono finiti: nessuno può superare quel numero."
            }
          ]
        }
      ],
      "quiz": {
        "question": "Se 28 = 4 × 7, che cosa possiamo concludere?",
        "options": [
          "Soltanto 4 è divisore di 28.",
          "4 e 7 sono entrambi divisori di 28.",
          "4 e 7 sono multipli di 28."
        ],
        "answer": 1,
        "feedback": "Entrambi i fattori dividono il prodotto senza resto.",
        "feedbackByOption": [
          "Anche 7 divide 28: 28 : 7 = 4.",
          "Entrambi i fattori dividono il prodotto senza resto.",
          "I fattori sono divisori di 28; è 28 a essere multiplo di ciascuno."
        ]
      }
    },
    {
      "id": "uno-zero",
      "title": "Il ruolo di 1 e di 0",
      "cards": [
        {
          "id": "uno",
          "title": "Due divisori che troviamo sempre",
          "steps": [
            {
              "title": "",
              "html": "<strong>1 divide ogni numero naturale</strong>, perché n = 1 × n. Inoltre, ogni numero naturale positivo divide se stesso, perché n = n × 1.<br><br>Per 1 questi due divisori coincidono: il suo unico divisore positivo è 1."
            }
          ]
        },
        {
          "id": "zero",
          "title": "Zero è un multiplo, ma non un divisore",
          "steps": [
            {
              "title": "Zero come multiplo",
              "html": "Per ogni naturale a vale <strong>0 = a × 0</strong>: perciò zero è multiplo di ogni numero naturale. I multipli di zero, invece, sono soltanto zero, perché 0 × k = 0."
            },
            {
              "title": "Zero e la divisione",
              "html": "In questa lezione chiamiamo divisori soltanto i numeri naturali positivi: <strong>non dividiamo per zero</strong>.<br><br>Ogni naturale positivo divide zero, perché 0 : d = 0. Quindi zero, diversamente dai naturali positivi, ha infiniti divisori positivi."
            }
          ],
          "stepMode": "replace"
        }
      ],
      "quiz": {
        "question": "Quale affermazione è corretta?",
        "options": [
          "Zero non è multiplo di 7.",
          "Zero è multiplo di 7 perché 0 = 7 × 0.",
          "7 : 0 = 0."
        ],
        "answer": 1,
        "feedback": "Il fattore zero rende il prodotto uguale a zero.",
        "feedbackByOption": [
          "Un multiplo si ottiene anche moltiplicando per zero.",
          "Il fattore zero rende il prodotto uguale a zero.",
          "La divisione per zero non è definita. Non confonderla con 0 : 7 = 0."
        ]
      }
    },
    {
      "id": "recap",
      "title": "La lezione in pillole",
      "cards": [
        {
          "id": "riepilogo",
          "title": "La lezione in pillole",
          "steps": [
            {
              "title": "",
              "html": "<strong>Divisibilità:</strong> n è divisibile per d, con d positivo, quando n : d ha resto zero.<br><br><strong>Divisore e multiplo:</strong> se n = d × q con q naturale, d è divisore di n e n è multiplo di d.<br><br><strong>Come cercarli:</strong> costruiamo i multipli moltiplicando per 0, 1, 2, … ; troviamo i divisori di un numero positivo cercando coppie di fattori.<br><br><strong>Da ricordare:</strong> ogni numero positivo ha un numero finito di divisori e infiniti multipli. Zero è multiplo di ogni naturale; non si divide per zero."
            }
          ]
        }
      ],
      "quiz": {
        "question": "Sai che a e b sono naturali positivi e che a divide b. Quale relazione deve essere vera?",
        "options": [
          "b = a × q per qualche numero naturale q.",
          "a è necessariamente uguale a b.",
          "a è necessariamente maggiore di b."
        ],
        "answer": 0,
        "feedback": "È la relazione che collega divisione esatta, divisore e multiplo.",
        "feedbackByOption": [
          "È la relazione che collega divisione esatta, divisore e multiplo.",
          "Possono coincidere, ma non è necessario: 3 divide 12.",
          "Un divisore positivo non può superare il numero positivo che divide."
        ]
      }
    }
  ]
};




