/* Original GatitoMath draft. Editorial reference: Mathigon factors-and-multiples; no assets or text copied. */
Object.assign(window.READER_GLOSSARY, {
  "arith-naturali": {
    "title": "Numeri naturali",
    "text": "I numeri 0, 1, 2, 3, … . In questa piattaforma includiamo lo zero nell’insieme dei numeri naturali.",
    "kind": "Concetto"
  },
  "arith-divisore": {
    "title": "Divisore",
    "text": "Un numero naturale diverso da zero che divide un altro numero senza lasciare resto.",
    "kind": "Concetto"
  },
  "arith-multiplo": {
    "title": "Multiplo",
    "text": "Un numero che si ottiene moltiplicando il numero di partenza per 0, 1, 2, 3 e così via.",
    "kind": "Concetto"
  },
  "arith-divisibilita": {
    "title": "Divisibilità",
    "text": "Un numero è divisibile per un altro numero diverso da zero quando la divisione è esatta, cioè non lascia resto.",
    "kind": "Concetto"
  },
  "arith-resto": {
    "title": "Resto",
    "text": "La quantità che avanza in una divisione tra numeri naturali, dopo aver formato tutti i gruppi completi. È sempre più piccola del divisore.",
    "kind": "Concetto"
  },
  "arith-prodotto": {
    "title": "Prodotto",
    "text": "Il risultato di una moltiplicazione. I numeri che si moltiplicano si chiamano fattori.",
    "kind": "Concetto"
  },
  "arith-quoziente": {
    "title": "Quoziente",
    "text": "Il risultato di una divisione. Nella divisione tra numeri naturali con resto, indica quante volte il divisore è contenuto nel dividendo, senza contare la parte che avanza.",
    "kind": "Concetto"
  }
});
window.READER_LESSONS["aritmetica-divisibilita"] = {
  "title": "Multipli, divisori e divisibilità",
  "subtitle": "Matematica · Medie e biennio · Prima bozza in lavorazione",
  "version": 7,
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
              "html": "<span data-coin-copy=\"arrangement\">Possiamo formare 3 mazzetti da 4 monete ciascuno, usando tutte le 12 monete.</span><br><br><strong><span data-coin-copy=\"product\">12 = 4 × 3</span></strong>.<br><span data-coin-copy=\"exact\">12 ÷ 4 = 3, senza resto.</span><br><br>Abbiamo eseguito una <strong>divisione esatta</strong> e il <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-resto\">resto</button> è <strong>zero</strong>."
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
              "html": "<span data-coin-copy=\"exact\">12 ÷ 4 = 3, senza resto.</span><br><br>Perciò diciamo che <strong><span data-coin-copy=\"divisible\">12 è divisibile per 4</span></strong>, oppure che <strong><span data-coin-copy=\"divisor\">4 è un divisore di 12</span></strong>.<br><br><button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisibilita\">Divisibilità</button> e <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisore\">divisore</button> descrivono una divisione esatta."
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
            "feedback": "24 ÷ 8 = 3 senza resto. Le due frasi descrivono la stessa relazione.",
            "feedbackByOption": [
              "Hai scambiato i ruoli: è 8 che divide 24 senza resto.",
              "24 ÷ 8 = 3 senza resto. Le due frasi descrivono la stessa relazione.",
              "Un divisore positivo può essere più piccolo del numero che divide: 24 ÷ 8 è esatta.",
              "Rivedi la relazione tra le grandezze o gli oggetti citati. 24 ÷ 8 = 3 senza resto. Le due frasi descrivono la stessa relazione."
            ]
          },
          {
            "question": "Quale divisione esatta mostra che 4 è un divisore di 20?",
            "options": [
              "20 ÷ 4 = 5",
              "4 ÷ 20 = 5",
              "20 ÷ 5 = 4",
              "20 ÷ 4 = 4"
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
              "html": "I multipli di un numero <strong>diverso da zero</strong> sono infiniti. Possiamo continuare la sequenza aggiungendo ogni volta lo stesso numero."
            },
            {
              "title": "Anche il numero di partenza",
              "html": "<strong>Ogni numero è anche un multiplo di se stesso.</strong> Moltiplicarlo per 1 ci restituisce il numero di partenza. Per esempio:<br><strong><span data-multiples-self-product>7 × 1 = 7</span></strong>.",
              "cumulativeFrom": 1
            }
          ],
          "board": "divisibility-multiples",
          "stepMode": "replace"
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
          "title": "Trovare tutti i divisori",
          "board": "pairs-example",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Tutti questi divisori!",
              "html": "<span class=\"dp-intro-scene dp-ghost-scene\"><span class=\"dp-intro-copy\">Prendiamo 78. I suoi <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisore\">divisori</button> sono:<br><strong>1, 2, 3, 6, 13, 26, 39, 78.</strong><br><br>Sono parecchi! Per trovarli tutti dovremmo provare ogni numero da 1 a 78?</span><span class=\"dp-intro-illustration\"><img class=\"dp-intro-ghost\" src=\"assets/images/reader/red-bjorne-fantasma-78-v1.png\" alt=\"Red e Bjorne si stringono spaventati davanti al buffo fantasma 78\" width=\"1024\" height=\"1024\"></span></span>"
            },
            {
              "title": "Ecco il trucco!",
              "pairsBoard": true,
              "html": "<strong>I divisori si trovano in coppia.</strong> Ogni volta che ne trovi uno, puoi trovare subito anche il suo compagno.<br><br>Proviamolo insieme con <strong>36</strong>.<br><br>La prima coppia è formata da <strong>1 e dal numero stesso</strong>."
            }
          ],
          "pairsConclusion": {
            "title": "Il trucco è sapere quando fermarsi",
            "pairsBoard": true,
            "html": "Proviamo i candidati <strong>in ordine crescente</strong>. Quando il quoziente diventa più piccolo del candidato, possiamo fermarci: <strong>gli eventuali divisori successivi sono già comparsi come compagni nelle coppie precedenti.</strong><br><br>Per esempio, con 36 abbiamo trovato <strong>2 e 18</strong>. Provando 18, ritroveremmo <strong>18 e 2</strong>: la stessa coppia, con i ruoli scambiati.<br><br>Se candidato e quoziente coincidono, come in <strong>6 e 6</strong>, li scriviamo una volta sola e ci fermiamo già lì."
          }
        },
        {
          "id": "coppie-prova",
          "title": "Ora trova i divisori di 32",
          "board": "pairs-practice",
          "steps": [
            {
              "title": "",
              "html": "La prima coppia è già pronta: <strong>1 e 32</strong>. Ti abbiamo dato una mano… ora continui tu!"
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
          "Anche 7 divide 28: 28 ÷ 7 = 4.",
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
          "id": "uno-zero",
          "title": "1 e 0: due casi speciali",
          "steps": [
            {
              "title": "Il ruolo di 1",
              "html": "<strong>Tra i numeri positivi, 1 è divisore di tutti e multiplo solo di se stesso.</strong><br><br>Dividere per 1 lascia il numero invariato. Per ottenere 1 con una moltiplicazione di numeri positivi, invece, possiamo usare soltanto 1 e 1."
            },
            {
              "title": "Il ruolo di 0",
              "html": "<strong class=\"dp-zero-rule\">NON SI PUÒ DIVIDERE PER ZERO.</strong> Per questo, zero non è divisore di nessun numero.<br><br><strong>Zero è multiplo di tutti i numeri:</strong> moltiplicando qualsiasi numero per zero, otteniamo zero.<br><br><strong>Zero ha un solo multiplo: zero.</strong> Moltiplicando zero per qualsiasi numero, il risultato rimane sempre zero."
            }
          ]
        }
      ],
      "quiz": {
        "question": "Quale frase descrive correttamente 1, tra i numeri positivi?",
        "options": [
          "È multiplo di tutti e divisore solo di se stesso.",
          "È divisore solo di se stesso.",
          "È divisore di tutti e multiplo solo di se stesso.",
          "Non è divisore di nessun numero."
        ],
        "answer": 2,
        "feedback": "1 divide tutti i numeri positivi senza resto. Per ottenere 1 con una moltiplicazione di numeri positivi possiamo usare soltanto 1 e 1.",
        "feedbackByOption": [
          "Hai scambiato le due proprietà: 1 è divisore di tutti, ma multiplo solo di se stesso.",
          "1 non divide soltanto se stesso: divide tutti i numeri positivi.",
          "Esatto: divisore di tutti, multiplo solo di se stesso.",
          "Dividendo un numero per 1 non resta nulla: 1 è un suo divisore."
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
              "html": "<ul class=\"dp-memory-list\"><li><strong>Un divisore divide senza resto.</strong> Il numero diviso è un suo multiplo.</li><li><strong>Per trovare i multipli, parti da zero</strong> e aggiungi ogni volta il numero scelto. Per un numero positivo, i multipli sono infiniti e i divisori sono finiti.</li><li><strong>I divisori si cercano in coppia.</strong> Parti da 1 e dal numero stesso; prova i candidati in ordine. Se la divisione è esatta, il quoziente completa la coppia.</li><li><strong>Fermati quando il quoziente è uguale o più piccolo del candidato.</strong> Le eventuali coppie successive sono già state trovate. Un divisore ripetuto si scrive una volta sola.</li><li><strong>1 divide tutti i numeri positivi</strong> ed è multiplo solo di se stesso.</li><li><strong>Non si può dividere per zero.</strong> Zero è multiplo di tutti e ha un solo multiplo: zero.</li></ul>"
            }
          ],
          "visualLayout": "closing",
          "illustration": {
            "src": "assets/images/reader/red-bjorne-rivincita-78-v2.png",
            "alt": "Bjorne e Red inseguono con un aspirapolvere il fantasma 78, che ora fugge spaventato.",
            "width": 1635,
            "height": 962
          }
        }
      ],
      "quiz": {
        "question": "Dividendo 24 per 6 non resta nulla. Quale frase è corretta?",
        "options": [
          "6 è divisore di 24 e 24 è multiplo di 6.",
          "6 è multiplo di 24 e 24 è divisore di 6.",
          "24 e 6 sono divisori uno dell’altro.",
          "24 e 6 sono multipli uno dell’altro."
        ],
        "answer": 0,
        "feedback": "Una divisione senza resto collega i due numeri: 6 è il divisore e 24 è un suo multiplo.",
        "feedbackByOption": [
          "Esatto: un divisore divide senza resto; il numero diviso è un suo multiplo.",
          "Hai invertito i ruoli: è 6 a dividere 24 senza resto.",
          "6 divide 24 senza resto, ma 24 non divide 6 senza resto.",
          "24 è multiplo di 6, ma 6 non è multiplo di 24."
        ]
      }
    }
  ]
};
