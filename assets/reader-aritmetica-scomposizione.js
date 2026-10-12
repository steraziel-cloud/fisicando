/* Original GatitoMath textual draft. See docs/arithmetic-path.md for reference and review scope. */
window.READER_LESSONS["aritmetica-scomposizione"] = {
  "title": "Scomposizione in fattori primi",
  "subtitle": "Matematica · Medie e biennio · Prima bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "scomporre",
      "title": "Un prodotto sempre più semplice",
      "cards": [
        {
          "title": "Possiamo continuare a scomporre?",
          "steps": [
            {
              "title": "Un primo passaggio",
              "html": "<strong>90 = 9 × 10</strong>. Abbiamo scritto 90 come prodotto, ma 9 e 10 sono ancora composti: <strong>9 = 3 × 3</strong> e <strong>10 = 2 × 5</strong>."
            },
            {
              "title": "Arrivare ai primi",
              "html": "Sostituendo i fattori otteniamo <strong>90 = 3 × 3 × 2 × 5</strong>. Ora tutti i fattori sono primi.<br><br>Questa scrittura è una <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-scomposizione\">scomposizione in fattori primi</button>. Il valore del prodotto resta 90: cambia il modo in cui lo descriviamo."
            }
          ]
        },
        {
          "title": "Quando il lavoro è completo",
          "steps": [
            {
              "title": "",
              "html": "<strong>90 = 2 × 45</strong> è un’uguaglianza corretta, ma non è ancora una scomposizione completa in fattori primi: 45 è composto.<br><br>Possiamo fermarci quando <strong>tutti i fattori sono primi</strong>. Per un numero primo, come 13, la scomposizione è semplicemente 13."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale scrittura è una scomposizione completa di 90 in fattori primi?",
            "options": [
              "90 = 2 × 45",
              "90 = 2 × 3 × 5",
              "90 = 2 × 3 × 3 × 5",
              "90 = 9 × 10"
            ],
            "answer": 2,
            "feedback": "Tutti i fattori sono primi e il prodotto è 90.",
            "feedbackByOption": [
              "45 deve ancora essere scomposto.",
              "Il prodotto è 30: manca un fattore 3.",
              "Tutti i fattori sono primi e il prodotto è 90.",
              "Il prodotto è corretto, ma 9 e 10 sono composti."
            ]
          },
          {
            "question": "Hai scritto 72 = 8 × 9. Che cosa manca?",
            "options": [
              "Eliminare 9 perché è dispari.",
              "Scomporre 8 e 9 fino a ottenere soltanto fattori primi.",
              "Niente: ogni prodotto è una scomposizione in fattori primi.",
              "Sommare 8 e 9."
            ],
            "answer": 1,
            "feedback": "8 = 2 × 2 × 2 e 9 = 3 × 3.",
            "feedbackByOption": [
              "Anche un fattore dispari deve essere conservato e scomposto.",
              "8 = 2 × 2 × 2 e 9 = 3 × 3.",
              "I fattori devono essere primi, mentre 8 e 9 non lo sono.",
              "Una somma cambia l’operazione e non ricostruisce 72."
            ]
          },
          {
            "question": "Qual è la scomposizione in fattori primi di 13?",
            "options": [
              "13",
              "1 × 13 × 13",
              "Non esiste perché 13 è primo.",
              "2 × 6 + 1"
            ],
            "answer": 0,
            "feedback": "13 è già primo: compare come unico fattore.",
            "feedbackByOption": [
              "13 è già primo: compare come unico fattore.",
              "Questo prodotto vale 169 e 1 non è primo.",
              "Un numero primo ha una scomposizione con un solo fattore.",
              "È una somma con resto, non un prodotto di fattori primi."
            ]
          }
        ]
      }
    },
    {
      "id": "divisioni",
      "title": "Scomporre con divisioni successive",
      "cards": [
        {
          "title": "Ogni divisione estrae un fattore",
          "steps": [
            {
              "title": "Cominciamo da 90",
              "html": "90 è divisibile per 2: <strong>90 ÷ 2 = 45</strong>. Abbiamo estratto un fattore 2.<br><br>45 non è divisibile per 2, ma lo è per 3: <strong>45 ÷ 3 = 15</strong>. Poi <strong>15 ÷ 3 = 5</strong> e infine <strong>5 ÷ 5 = 1</strong>."
            },
            {
              "title": "Leggere i divisori usati",
              "html": "I divisori primi usati sono <strong>2, 3, 3, 5</strong>: il loro prodotto ricostruisce 90.<br><br>Si arriva a <strong>1</strong> perché abbiamo estratto tutti i fattori. 1 è il risultato finale delle divisioni, <strong>non un fattore primo da aggiungere</strong>."
            }
          ]
        },
        {
          "title": "Una procedura ordinata",
          "steps": [
            {
              "title": "",
              "html": "Partiamo dal primo più piccolo, 2. Finché divide esattamente il numero rimasto, lo usiamo ancora; quando non lo divide più, passiamo a 3, poi a 5, a 7 e così via.<br><br>Ogni divisione deve avere <strong>resto zero</strong>. I criteri di divisibilità ci aiutano a scegliere un divisore adatto."
            }
          ]
        },
        {
          "title": "Lo stesso primo può servire più volte",
          "steps": [
            {
              "title": "",
              "html": "Per <strong>72</strong> le divisioni sono:<br><strong>72 ÷ 2 = 36<br>36 ÷ 2 = 18<br>18 ÷ 2 = 9<br>9 ÷ 3 = 3<br>3 ÷ 3 = 1</strong>.<br><br>Quindi <strong>72 = 2 × 2 × 2 × 3 × 3</strong>. Il primo 2 compare tre volte: dopo averlo usato una volta non dobbiamo scartarlo."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Nella scomposizione di 72 hai eseguito 72 ÷ 2 = 36. Quale divisione è adatta come passo successivo?",
            "options": [
              "36 ÷ 5 = 7 con resto 1",
              "36 ÷ 7 = 5 con resto 1",
              "36 ÷ 1 = 36",
              "36 ÷ 2 = 18"
            ],
            "answer": 3,
            "feedback": "Possiamo usare ancora 2: il numero rimasto è divisibile per 2.",
            "feedbackByOption": [
              "Una divisione con resto non estrae un fattore esatto.",
              "Serve resto zero.",
              "1 non è primo e non riduce il numero rimasto.",
              "Possiamo usare ancora 2: il numero rimasto è divisibile per 2."
            ]
          },
          {
            "question": "Perché nelle divisioni successive ci fermiamo a 1?",
            "options": [
              "Perché dobbiamo aggiungere 1 alla lista dei fattori primi.",
              "Perché il numero iniziale era necessariamente primo.",
              "Abbiamo estratto tutti i fattori primi del numero.",
              "Perché 1 è l’ultimo numero primo."
            ],
            "answer": 2,
            "feedback": "Il prodotto dei divisori primi usati ricostruisce il numero iniziale.",
            "feedbackByOption": [
              "1 non fa parte della scomposizione in fattori primi.",
              "Anche i composti, come 90, arrivano a 1 con questo procedimento.",
              "Il prodotto dei divisori primi usati ricostruisce il numero iniziale.",
              "1 non è un numero primo."
            ]
          },
          {
            "question": "Quale condizione deve soddisfare ogni divisione usata per estrarre un fattore?",
            "options": [
              "Deve usare sempre il divisore più grande.",
              "Deve avere resto zero.",
              "Deve avere quoziente pari.",
              "Deve usare un primo mai usato prima."
            ],
            "answer": 1,
            "feedback": "Il divisore deve essere un fattore esatto del numero rimasto.",
            "feedbackByOption": [
              "Scegliere i primi in ordine crescente è comodo, ma non serve il divisore più grande.",
              "Il divisore deve essere un fattore esatto del numero rimasto.",
              "Il quoziente può essere dispari: 90 ÷ 2 = 45.",
              "Un fattore primo può ripetersi, come i tre 2 di 72."
            ]
          }
        ]
      }
    },
    {
      "id": "potenze",
      "title": "Scrivere i fattori ripetuti con le potenze",
      "cards": [
        {
          "title": "Quante volte compare un fattore?",
          "steps": [
            {
              "title": "La scrittura compatta",
              "html": "In <strong>72 = 2 × 2 × 2 × 3 × 3</strong>, il 2 compare tre volte e il 3 due volte. Con le <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-potenza\">potenze</button> scriviamo:<br><strong>72 = 2<sup>3</sup> × 3<sup>2</sup></strong>.<br><br>L’esponente conta le ripetizioni di un fattore, non i divisori del numero."
            },
            {
              "title": "Base ed esponente",
              "html": "<strong>2<sup>3</sup> = 2 × 2 × 2 = 8</strong>, non 2 × 3. La <strong>base</strong> è 2; l’<strong>esponente</strong> è 3.<br><br>Un fattore che compare una sola volta si può scrivere senza esponente: <strong>90 = 2 × 3<sup>2</sup> × 5</strong>."
            }
          ]
        },
        {
          "title": "Gli esponenti conservano le ripetizioni",
          "steps": [
            {
              "title": "",
              "html": "Le scomposizioni <strong>12 = 2<sup>2</sup> × 3</strong> e <strong>18 = 2 × 3<sup>2</sup></strong> usano gli stessi primi, 2 e 3, ma con ripetizioni diverse.<br><br>Non basta conoscere quali primi compaiono: <strong>anche gli esponenti sono necessari per ricostruire il numero</strong>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa significa 2³ nella scomposizione di 72?",
            "options": [
              "Il fattore 2 compare tre volte.",
              "Si deve calcolare 2 × 3.",
              "72 ha esattamente tre divisori.",
              "Il fattore 3 compare due volte."
            ],
            "answer": 0,
            "feedback": "2³ = 2 × 2 × 2.",
            "feedbackByOption": [
              "2³ = 2 × 2 × 2.",
              "Una potenza è un prodotto di fattori uguali, non base per esponente.",
              "L’esponente conta le ripetizioni di 2 nella scomposizione.",
              "La base è il fattore ripetuto: qui è 2."
            ]
          },
          {
            "question": "Quanto vale 3² × 5?",
            "options": [
              "30",
              "15",
              "225",
              "45"
            ],
            "answer": 3,
            "feedback": "3² × 5 = 3 × 3 × 5 = 45.",
            "feedbackByOption": [
              "3² non è 3 × 2: vale 9.",
              "Hai contato il fattore 3 una volta invece di due.",
              "Hai elevato al quadrato anche 5: qui l’esponente 2 riguarda soltanto 3.",
              "3² × 5 = 3 × 3 × 5 = 45."
            ]
          },
          {
            "question": "12 e 18 hanno entrambi i fattori primi 2 e 3. Perché non sono lo stesso numero?",
            "options": [
              "Perché 2 è primo solo nella scomposizione di 12.",
              "Perché gli esponenti possono essere ignorati.",
              "I fattori compaiono con esponenti diversi.",
              "Perché l’ordine dei fattori cambia il prodotto."
            ],
            "answer": 2,
            "feedback": "12 = 2² × 3, mentre 18 = 2 × 3².",
            "feedbackByOption": [
              "2 è sempre un numero primo.",
              "Proprio gli esponenti distinguono queste due scomposizioni.",
              "12 = 2² × 3, mentre 18 = 2 × 3².",
              "L’ordine dei fattori non cambia il prodotto."
            ]
          }
        ]
      }
    },
    {
      "id": "unicita",
      "title": "Percorsi diversi, stessi fattori",
      "cards": [
        {
          "title": "Possiamo cominciare in un altro modo",
          "steps": [
            {
              "title": "Due percorsi per 60",
              "html": "Possiamo partire da <strong>60 = 6 × 10</strong>, oppure da <strong>60 = 4 × 15</strong>.<br><br>Nel primo caso otteniamo <strong>(2 × 3) × (2 × 5)</strong>; nel secondo <strong>(2 × 2) × (3 × 5)</strong>. In entrambi troviamo <strong>2 × 2 × 3 × 5</strong>."
            },
            {
              "title": "Un risultato unico",
              "html": "Il <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-teorema-fondamentale\">teorema fondamentale dell’aritmetica</button> afferma che ogni naturale maggiore di 1 ha una scomposizione in fattori primi <strong>unica, a meno dell’ordine dei fattori</strong>.<br><br>Il percorso può cambiare; i primi e le loro ripetizioni no."
            }
          ]
        },
        {
          "title": "Una lettura utile dei divisori",
          "steps": [
            {
              "title": "",
              "html": "Un divisore di <strong>60 = 2<sup>2</sup> × 3 × 5</strong> si costruisce usando alcuni di questi fattori, senza prendere più copie di quelle disponibili.<br><br><strong>12 = 2<sup>2</sup> × 3</strong> divide 60. <strong>8 = 2<sup>3</sup></strong> non lo divide: richiederebbe un terzo fattore 2.<br><br>1 divide 60 senza prendere alcun fattore primo. Questa lettura ci servirà per M.C.D. e m.c.m."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale proprietà esprime l’unicità della scomposizione in fattori primi?",
            "options": [
              "L’ordine dei fattori deve essere sempre crescente.",
              "Cambiano al massimo l’ordine dei fattori, non i primi e le loro ripetizioni.",
              "Devi sempre dividere prima per 2.",
              "Ogni numero ha un solo fattore primo."
            ],
            "answer": 1,
            "feedback": "La stessa quantità di ogni primo ricompare in ogni scomposizione completa.",
            "feedbackByOption": [
              "L’ordine non modifica la scomposizione come prodotto.",
              "La stessa quantità di ogni primo ricompare in ogni scomposizione completa.",
              "È una scelta pratica, non il significato dell’unicità.",
              "60 ha i fattori primi 2, 3 e 5."
            ]
          },
          {
            "question": "Perché 8 non divide 60 = 2² × 3 × 5?",
            "options": [
              "8 richiede tre fattori 2, mentre 60 ne contiene due.",
              "Perché 8 è composto.",
              "Perché 8 è minore di 60.",
              "Perché 60 contiene il fattore 5."
            ],
            "answer": 0,
            "feedback": "8 = 2³: nella scomposizione di 60 manca una copia di 2.",
            "feedbackByOption": [
              "8 = 2³: nella scomposizione di 60 manca una copia di 2.",
              "Anche un numero composto può essere divisore: 12 divide 60.",
              "Un divisore può essere minore del numero che divide.",
              "La presenza di 5 non impedisce a un altro numero di dividere 60."
            ]
          },
          {
            "question": "Quale numero divide 60 = 2² × 3 × 5?",
            "options": [
              "9 = 3²",
              "25 = 5²",
              "7",
              "12 = 2² × 3"
            ],
            "answer": 3,
            "feedback": "I suoi fattori e le loro ripetizioni sono disponibili in 60.",
            "feedbackByOption": [
              "60 contiene un solo fattore 3, non due.",
              "60 contiene un solo fattore 5, non due.",
              "7 non compare nella scomposizione di 60.",
              "I suoi fattori e le loro ripetizioni sono disponibili in 60."
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
          "title": "Scomporre e leggere il risultato",
          "steps": [
            {
              "title": "La procedura",
              "html": "Scriviamo il numero come prodotto ed estraiamo i fattori primi con divisioni esatte. Un primo può essere usato più volte. Le divisioni successive terminano a 1."
            },
            {
              "title": "La scrittura",
              "html": "Raggruppiamo i fattori uguali con le potenze: la base indica il primo e l’esponente quante volte compare. Controlliamo il risultato calcolando il prodotto."
            },
            {
              "title": "Il significato",
              "html": "La scomposizione è unica a meno dell’ordine. Un divisore usa soltanto fattori disponibili, ciascuno con un numero di ripetizioni non maggiore di quello presente.<br><br>Nelle prossime lezioni confronteremo le scomposizioni di più numeri."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è la scomposizione completa di 84?",
            "options": [
              "4 × 21",
              "2² × 3² × 7",
              "2² × 3 × 7",
              "2 × 3 × 7"
            ],
            "answer": 2,
            "feedback": "4 × 3 × 7 = 84 e le basi 2, 3 e 7 sono prime.",
            "feedbackByOption": [
              "Vale 84, ma i fattori 4 e 21 non sono primi.",
              "Vale 252: c’è un fattore 3 in più.",
              "4 × 3 × 7 = 84 e le basi 2, 3 e 7 sono prime.",
              "Vale 42: manca un fattore 2."
            ]
          },
          {
            "question": "Nella scrittura 50 = 2 × 5², quante volte compare 5 come fattore?",
            "options": [
              "Dieci volte.",
              "Due volte.",
              "Cinque volte.",
              "Una volta."
            ],
            "answer": 1,
            "feedback": "5² = 5 × 5.",
            "feedbackByOption": [
              "Non si moltiplicano base ed esponente per contare le ripetizioni.",
              "5² = 5 × 5.",
              "La base è 5, ma le ripetizioni sono indicate dall’esponente 2.",
              "Una sola volta darebbe 2 × 5 = 10."
            ]
          },
          {
            "question": "Quale controllo riconosce una scomposizione completa e corretta?",
            "options": [
              "Tutti i fattori sono primi e il loro prodotto è il numero iniziale.",
              "Basta che il prodotto sia il numero iniziale.",
              "Basta che tutti i fattori siano primi.",
              "Basta che ogni fattore compaia una sola volta."
            ],
            "answer": 0,
            "feedback": "Servono entrambe le condizioni.",
            "feedbackByOption": [
              "Servono entrambe le condizioni.",
              "36 = 4 × 9 è corretto come prodotto, ma non è scomposto in fattori primi.",
              "2 × 3 sono primi, ma il loro prodotto non ricostruisce 36.",
              "Le ripetizioni vanno conservate: 36 = 2² × 3²."
            ]
          }
        ]
      }
    }
  ]
};

