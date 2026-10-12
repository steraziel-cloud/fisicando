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
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "gruppi",
      "title": "Gruppi uguali, con o senza resto",
      "cards": [
        {
          "id": "partenza",
          "title": "Riusciamo a usarli tutti?",
          "steps": [
            {
              "title": "",
              "html": "Abbiamo <strong>18 gettoni</strong> e vogliamo formare gruppi di <strong>6 gettoni ciascuno</strong>. Possiamo usare tutti i gettoni senza lasciarne fuori?<br><br>Lavoriamo con i <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-naturali\">numeri naturali</button>, includendo lo zero."
            }
          ],
          "board": "divisibility-groups"
        },
        {
          "id": "resto",
          "title": "La differenza è nel resto",
          "steps": [
            {
              "title": "Gruppi da 6",
              "html": "Con 18 gettoni formiamo 3 gruppi da 6, senza avanzo: <strong>18 = 6 × 3</strong>. La divisione 18 : 6 è esatta e il suo quoziente è 3."
            },
            {
              "title": "Gruppi da 4",
              "html": "Con gruppi da 4 otteniamo 4 gruppi completi e avanzano 2 gettoni: <strong>18 = 4 × 4 + 2</strong>. Il <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-resto\">resto</button> è 2: la divisione tra naturali non è esatta."
            }
          ],
          "board": "divisibility-groups",
          "stepMode": "replace"
        }
      ],
      "quiz": {
        "question": "18 gettoni sono distribuiti in gruppi da 4. Che cosa impedisce di usare tutti i gettoni in gruppi completi?",
        "options": [
          "Avanzano 2 gettoni.",
          "Ci sono troppo pochi gruppi.",
          "Il numero dei gruppi deve essere pari."
        ],
        "answer": 0,
        "feedback": "Il resto è 2: restano gettoni fuori dai gruppi completi.",
        "feedbackByOption": [
          "Il resto è 2: restano gettoni fuori dai gruppi completi.",
          "Il numero dei gruppi non decide se la divisione è esatta: controlla il resto.",
          "Il numero dei gruppi può essere pari o dispari. Conta che il resto sia zero."
        ]
      }
    },
    {
      "id": "relazione",
      "title": "Tre modi di leggere la stessa relazione",
      "cards": [
        {
          "id": "nomi",
          "title": "18 = 6 × 3",
          "steps": [
            {
              "title": "6 è un divisore di 18",
              "html": "La divisione 18 : 6 ha resto zero. Diciamo che <strong>18 è <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisibilita\">divisibile</button> per 6</strong>, oppure che <strong>6 è un <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-divisore\">divisore</button> di 18</strong>."
            },
            {
              "title": "18 è un multiplo di 6",
              "html": "La stessa uguaglianza dice che 18 si ottiene moltiplicando 6 per un numero naturale: 3. Perciò <strong>18 è un <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-multiplo\">multiplo</button> di 6</strong>.<br><br>Non sono due fatti diversi: stiamo leggendo la stessa relazione da due punti di vista."
            }
          ]
        },
        {
          "id": "notazione",
          "title": "L’ordine dei numeri conta",
          "steps": [
            {
              "title": "",
              "html": "<strong>6 divide 18</strong> si può scrivere <strong>6 ∣ 18</strong>. La barretta si legge «divide»: il divisore è a sinistra, il numero divisibile è a destra.<br><br>Non significa 6 : 18 e non si può invertire liberamente: 18 non divide 6."
            }
          ]
        }
      ],
      "quiz": {
        "question": "Quale frase esprime correttamente l’uguaglianza 24 = 8 × 3?",
        "options": [
          "24 è un divisore di 8.",
          "8 è un divisore di 24 e 24 è un multiplo di 8.",
          "8 non divide 24 perché è più piccolo."
        ],
        "answer": 1,
        "feedback": "24 : 8 = 3 senza resto. Le due frasi descrivono la stessa relazione.",
        "feedbackByOption": [
          "Hai scambiato i ruoli: è 8 che divide 24 senza resto.",
          "24 : 8 = 3 senza resto. Le due frasi descrivono la stessa relazione.",
          "Un divisore positivo può essere più piccolo del numero che divide: 24 : 8 è esatta."
        ]
      }
    },
    {
      "id": "multipli",
      "title": "Costruire i multipli",
      "cards": [
        {
          "id": "sequenza",
          "title": "Aggiungere un gruppo alla volta",
          "steps": [
            {
              "title": "",
              "html": "I multipli di 6 si ottengono moltiplicando 6 per 0, 1, 2, 3, … :<br><strong>0, 6, 12, 18, 24, 30, …</strong><br><br>Ogni nuovo gruppo aggiunge 6 gettoni. Puoi scegliere nella lavagna quanti gruppi formare."
            },
            {
              "title": "La lista continua",
              "html": "I multipli di un numero naturale positivo sono infiniti: possiamo sempre aggiungere un altro gruppo. <strong>Il numero stesso è un suo multiplo</strong>, perché moltiplicarlo per 1 lo lascia invariato."
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
              "html": "<strong>Divisibilità:</strong> n è divisibile per d, con d positivo, quando n : d ha resto zero.<br><br><strong>Divisore e multiplo:</strong> se n = d × q con q naturale, d è divisore di n e n è multiplo di d. Scriviamo d ∣ n.<br><br><strong>Come cercarli:</strong> costruiamo i multipli moltiplicando per 0, 1, 2, … ; troviamo i divisori di un numero positivo cercando coppie di fattori.<br><br><strong>Da ricordare:</strong> ogni numero positivo ha un numero finito di divisori e infiniti multipli. Zero è multiplo di ogni naturale; non si divide per zero."
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
