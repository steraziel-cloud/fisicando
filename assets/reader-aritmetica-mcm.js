/* Original GatitoMath textual draft. See docs/arithmetic-path.md for reference and review scope. */
window.READER_LESSONS["aritmetica-mcm"] = {
  "title": "Minimo comune multiplo (m.c.m.)",
  "subtitle": "Matematica · Medie e biennio · Prima bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "incontro",
      "title": "Quando si ripetono insieme?",
      "cards": [
        {
          "title": "Due segnali, due ritmi",
          "steps": [
            {
              "title": "La domanda",
              "html": "Due segnali suonano insieme all’istante iniziale. Il primo si ripete ogni <strong>6 minuti</strong>; il secondo ogni <strong>8 minuti</strong>. I ritmi restano costanti.<br><br><strong>Dopo quanti minuti suoneranno di nuovo insieme, per la prima volta?</strong>"
            },
            {
              "title": "Gli istanti possibili",
              "html": "Il primo suona dopo <strong>6, 12, 18, 24, 30, … minuti</strong>; il secondo dopo <strong>8, 16, 24, 32, … minuti</strong>.<br><br>Gli istanti sono multipli dei due periodi. Il primo valore positivo presente in entrambe le liste è <strong>24</strong>."
            }
          ]
        },
        {
          "title": "Comune, minimo e positivo",
          "steps": [
            {
              "title": "La definizione",
              "html": "Un <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-multiplo-comune\">multiplo comune</button> è multiplo di tutti i numeri considerati. Il più piccolo fra quelli <strong>positivi</strong> è il <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-mcm\">minimo comune multiplo</button>.<br><br>Scriviamo <strong>m.c.m.(6, 8) = 24</strong>."
            },
            {
              "title": "Perché escludiamo zero?",
              "html": "Zero è multiplo comune di ogni coppia di naturali: rappresenta anche l’istante iniziale del nostro problema. Se lo ammettessimo come candidato minimo, la risposta sarebbe sempre zero.<br><br>Il m.c.m. cerca il <strong>primo multiplo comune positivo</strong>, cioè il primo nuovo incontro."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Due segnali si ripetono ogni 6 e 8 minuti, partendo insieme. Dopo quanto avviene il primo nuovo incontro?",
            "options": [
              "24 minuti",
              "14 minuti",
              "48 minuti",
              "0 minuti"
            ],
            "answer": 0,
            "feedback": "24 è il primo multiplo positivo comune di 6 e 8.",
            "feedbackByOption": [
              "24 è il primo multiplo positivo comune di 6 e 8.",
              "6 + 8 non è un multiplo né di 6 né di 8.",
              "È un incontro successivo; 24 è un multiplo comune positivo più piccolo.",
              "È l’istante iniziale, non un nuovo incontro."
            ]
          },
          {
            "question": "Che cosa deve soddisfare un multiplo comune di 6 e 8?",
            "options": [
              "Dividere 6 e 8 senza resto.",
              "Essere multiplo soltanto del numero più grande.",
              "Essere la somma 6 + 8.",
              "Essere divisibile sia per 6 sia per 8."
            ],
            "answer": 3,
            "feedback": "Entrambi devono dividerlo senza resto.",
            "feedbackByOption": [
              "Questa è la condizione di un divisore comune: il rapporto è invertito.",
              "8 è multiplo di 8, ma non di 6.",
              "La somma non è necessariamente un multiplo comune.",
              "Entrambi devono dividerlo senza resto."
            ]
          },
          {
            "question": "Perché nella definizione di m.c.m. richiediamo un multiplo positivo?",
            "options": [
              "Perché i multipli comuni positivi sono finiti.",
              "Perché ogni multiplo positivo è comune.",
              "Zero sarebbe sempre il più piccolo multiplo comune.",
              "Perché zero non è multiplo di alcun numero."
            ],
            "answer": 2,
            "feedback": "La positività esclude la risposta zero e permette di cercare il primo nuovo incontro.",
            "feedbackByOption": [
              "Sono infiniti: possiamo moltiplicare un multiplo comune positivo per 1, 2, 3, …",
              "Essere positivo non basta: 6 non è multiplo di 8.",
              "La positività esclude la risposta zero e permette di cercare il primo nuovo incontro.",
              "Zero è multiplo di ogni naturale: 0 = n × 0."
            ]
          }
        ]
      }
    },
    {
      "id": "fattori",
      "title": "Un numero che contenga tutto il necessario",
      "cards": [
        {
          "title": "Le richieste dei due numeri",
          "steps": [
            {
              "title": "",
              "html": "<strong>6 = 2 × 3</strong><br><strong>8 = 2<sup>3</sup></strong>.<br><br>Un multiplo di 6 deve contenere almeno un fattore 2 e un fattore 3. Un multiplo di 8 deve contenere almeno tre fattori 2. Per essere multiplo di entrambi deve soddisfare <strong>tutte e due le richieste</strong>."
            }
          ]
        },
        {
          "title": "Prendere abbastanza copie, senza aggiungerne inutilmente",
          "steps": [
            {
              "title": "Il massimo fra le richieste",
              "html": "Per il primo 2 servono <strong>tre copie</strong>: bastano anche a soddisfare la richiesta di 6. Serve inoltre <strong>un fattore 3</strong>.<br><br>Il prodotto minimo necessario è <strong>2<sup>3</sup> × 3 = 24</strong>. Non dobbiamo sommare le copie richieste dai due numeri."
            },
            {
              "title": "Il prodotto è comune, ma può essere troppo grande",
              "html": "<strong>6 × 8 = 48</strong> è un multiplo comune, ma conta separatamente il fattore 2 presente in 6 e i tre fattori 2 di 8. Una copia non serve.<br><br>Un multiplo comune non è automaticamente il <strong>minimo</strong> comune multiplo."
            }
          ]
        },
        {
          "title": "La regola",
          "steps": [
            {
              "title": "",
              "html": "Scomponiamo tutti i numeri. Prendiamo <strong>tutti i primi presenti in almeno una scomposizione</strong>, ciascuno con il <strong>maggiore esponente</strong> con cui compare. Infine li moltiplichiamo.<br><br>Un primo assente in un numero può comunque essere necessario per rendere il risultato multiplo di un altro."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Per m.c.m.(6, 8), quale potenza di 2 scegliamo?",
            "options": [
              "Nessun fattore 2.",
              "2³",
              "2",
              "2⁴"
            ],
            "answer": 1,
            "feedback": "8 richiede tre copie di 2; soddisfano anche la richiesta di 6.",
            "feedbackByOption": [
              "Entrambi i numeri richiedono il primo 2.",
              "8 richiede tre copie di 2; soddisfano anche la richiesta di 6.",
              "Una sola copia non basta per essere multiplo di 8.",
              "Hai sommato le copie: quattro bastano, ma non sono il minimo necessario."
            ]
          },
          {
            "question": "Quale regola calcola il m.c.m. dalle scomposizioni?",
            "options": [
              "Tutti i primi presenti, con il maggiore esponente.",
              "Soltanto i primi comuni, con il minore esponente.",
              "Soltanto i primi che compaiono in entrambi.",
              "Tutti i primi, con la somma degli esponenti."
            ],
            "answer": 0,
            "feedback": "Il risultato deve soddisfare la richiesta più alta per ogni primo.",
            "feedbackByOption": [
              "Il risultato deve soddisfare la richiesta più alta per ogni primo.",
              "Questa è la regola del M.C.D.",
              "Il primo 3 compare solo in 6, ma è indispensabile per un multiplo di 6.",
              "La somma può aggiungere copie inutili e produrre un multiplo comune troppo grande."
            ]
          },
          {
            "question": "Perché 48 non è il m.c.m. di 6 e 8?",
            "options": [
              "48 non è divisibile per 6.",
              "48 non è divisibile per 8.",
              "Il m.c.m. deve essere primo.",
              "24 è un multiplo comune positivo più piccolo."
            ],
            "answer": 3,
            "feedback": "48 è comune, ma non è minimo.",
            "feedbackByOption": [
              "48 : 6 = 8 senza resto.",
              "48 : 8 = 6 senza resto.",
              "Un m.c.m. può essere composto, come 24.",
              "48 è comune, ma non è minimo."
            ]
          }
        ]
      }
    },
    {
      "id": "piu-numeri",
      "title": "Tre numeri e alcuni casi utili",
      "cards": [
        {
          "title": "m.c.m. di 12, 18 e 30",
          "steps": [
            {
              "title": "Tutte le scomposizioni",
              "html": "<strong>12 = 2<sup>2</sup> × 3</strong><br><strong>18 = 2 × 3<sup>2</sup></strong><br><strong>30 = 2 × 3 × 5</strong>.<br><br>Servono i primi 2, 3 e 5. Le richieste massime sono due copie di 2, due di 3 e una di 5."
            },
            {
              "title": "Il risultato e il controllo",
              "html": "<strong>m.c.m.(12, 18, 30) = 2<sup>2</sup> × 3<sup>2</sup> × 5 = 180</strong>.<br><br>Controlliamo: <strong>180 : 12 = 15; 180 : 18 = 10; 180 : 30 = 6</strong>. Una copia in meno di 2, di 3 o di 5 farebbe fallire almeno una richiesta."
            }
          ]
        },
        {
          "title": "Se un numero divide l’altro",
          "steps": [
            {
              "title": "",
              "html": "Se <strong>6 divide 18</strong>, ogni multiplo di 18 è anche multiplo di 6. Il più piccolo positivo è 18 stesso:<br><strong>m.c.m.(6, 18) = 18</strong>.<br><br>Se i numeri coincidono, il m.c.m. è quel numero: <strong>m.c.m.(6, 6) = 6</strong>."
            }
          ]
        },
        {
          "title": "Se due numeri sono primi tra loro",
          "steps": [
            {
              "title": "",
              "html": "<strong>8 = 2<sup>3</sup></strong> e <strong>15 = 3 × 5</strong> non hanno primi comuni. Non ci sono copie condivise da riutilizzare:<br><strong>m.c.m.(8, 15) = 2<sup>3</sup> × 3 × 5 = 120 = 8 × 15</strong>.<br><br>Per <strong>due numeri primi tra loro</strong>, il m.c.m. è il loro prodotto. Non occorre che siano primi singolarmente."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quanto vale m.c.m.(12, 18, 30)?",
            "options": [
              "60",
              "360",
              "180",
              "30"
            ],
            "answer": 2,
            "feedback": "2² × 3² × 5 soddisfa tutte le richieste con gli esponenti minimi necessari.",
            "feedbackByOption": [
              "60 è divisibile per 12 e per 30, ma non per 18.",
              "È un multiplo comune, ma 180 è più piccolo.",
              "2² × 3² × 5 soddisfa tutte le richieste con gli esponenti minimi necessari.",
              "30 non è divisibile per 12 né per 18."
            ]
          },
          {
            "question": "Se 6 divide 18, quanto vale m.c.m.(6, 18)?",
            "options": [
              "1",
              "18",
              "6",
              "108"
            ],
            "answer": 1,
            "feedback": "Il numero maggiore è già il più piccolo multiplo positivo di entrambi.",
            "feedbackByOption": [
              "1 non è multiplo né di 6 né di 18.",
              "Il numero maggiore è già il più piccolo multiplo positivo di entrambi.",
              "6 non è multiplo di 18.",
              "Il prodotto è comune, ma 18 è un multiplo comune più piccolo."
            ]
          },
          {
            "question": "Perché m.c.m.(8, 15) = 8 × 15?",
            "options": [
              "8 e 15 sono primi tra loro.",
              "Perché 8 e 15 sono entrambi primi.",
              "Perché il m.c.m. è sempre il prodotto.",
              "Perché 8 è minore di 15."
            ],
            "answer": 0,
            "feedback": "Non hanno fattori primi comuni da condividere nel multiplo.",
            "feedbackByOption": [
              "Non hanno fattori primi comuni da condividere nel multiplo.",
              "Sono entrambi composti; ciò che conta è l’assenza di fattori primi comuni.",
              "Per 6 e 8 il m.c.m. è 24, non 48.",
              "L’ordine di grandezza non rende il prodotto minimo."
            ]
          }
        ]
      }
    },
    {
      "id": "distinguere",
      "title": "M.C.D. oppure m.c.m.?",
      "cards": [
        {
          "title": "La direzione della divisibilità",
          "steps": [
            {
              "title": "Due domande diverse",
              "html": "Con il <strong>M.C.D.</strong> cerchiamo un numero che <strong>divida tutti i dati</strong>: deve usare soltanto ciò che è disponibile in tutti.<br><br>Con il <strong>m.c.m.</strong> cerchiamo un numero che <strong>sia divisibile per tutti i dati</strong>: deve contenere tutto ciò che ciascun dato richiede."
            },
            {
              "title": "Non basta cercare una parola nel problema",
              "html": "Pezzi o gruppi senza avanzi portano spesso ai divisori comuni. Eventi periodici che tornano insieme portano ai multipli comuni.<br><br>Prima di applicare una regola, scriviamo la relazione richiesta: <strong>il risultato divide i dati, oppure i dati dividono il risultato?</strong>"
            }
          ]
        },
        {
          "title": "Un legame fra le due risposte",
          "steps": [
            {
              "title": "Per due numeri positivi",
              "html": "Per due numeri naturali positivi a e b vale:<br><strong>M.C.D.(a, b) × m.c.m.(a, b) = a × b</strong>.<br><br>Per 6 e 8: <strong>2 × 24 = 6 × 8 = 48</strong>. Può essere un controllo utile o un modo di calcolare il m.c.m. dopo aver trovato il M.C.D."
            },
            {
              "title": "Perché, e con quale limite",
              "html": "Per ogni primo comune, il M.C.D. prende l’esponente minore e il m.c.m. quello maggiore: insieme conservano tutte le copie presenti nel prodotto dei due numeri. Un primo presente in un solo numero va invece soltanto nel m.c.m., con tutte le sue copie.<br><br><strong>La formula riguarda due numeri.</strong> Non si estende semplicemente a tre: per 2, 4 e 8, M.C.D. × m.c.m. vale 16, mentre il prodotto dei tre vale 64."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Vuoi sapere quando due segnali periodici suoneranno di nuovo insieme. Quale quantità cerchi?",
            "options": [
              "Il M.C.D. dei loro periodi.",
              "La somma dei periodi.",
              "Il minore dei due periodi.",
              "Il m.c.m. dei loro periodi."
            ],
            "answer": 3,
            "feedback": "Il tempo cercato deve essere multiplo di ciascun periodo.",
            "feedbackByOption": [
              "Un divisore comune non descrive un istante di ripetizione per entrambi.",
              "La somma non è necessariamente multiplo dei periodi.",
              "Al primo ritorno di un segnale l’altro potrebbe non essere ancora tornato.",
              "Il tempo cercato deve essere multiplo di ciascun periodo."
            ]
          },
          {
            "question": "Sai che M.C.D.(12, 18) = 6. Come puoi calcolare il loro m.c.m.?",
            "options": [
              "6 × 12 × 18 = 1 296",
              "12 : 6 = 2",
              "(12 × 18) : 6 = 36",
              "12 + 18 − 6 = 24"
            ],
            "answer": 2,
            "feedback": "Per due numeri positivi il prodotto di M.C.D. e m.c.m. è il prodotto dei dati.",
            "feedbackByOption": [
              "Devi dividere il prodotto dei dati per il M.C.D., non moltiplicare ancora.",
              "Questo quoziente non è multiplo di entrambi i dati.",
              "Per due numeri positivi il prodotto di M.C.D. e m.c.m. è il prodotto dei dati.",
              "La relazione non usa la somma; 24 non è multiplo di 18."
            ]
          },
          {
            "question": "La formula M.C.D. × m.c.m. = prodotto dei dati si usa direttamente per quanti numeri?",
            "options": [
              "Solo due numeri primi tra loro.",
              "Due numeri naturali positivi.",
              "Qualsiasi quantità di numeri, senza cambiamenti.",
              "Solo due numeri primi."
            ],
            "answer": 1,
            "feedback": "Per tre numeri non vale in generale: 2, 4 e 8 danno un controesempio.",
            "feedbackByOption": [
              "Vale anche quando il M.C.D. è maggiore di 1.",
              "Per tre numeri non vale in generale: 2, 4 e 8 danno un controesempio.",
              "Con 2, 4 e 8 il lato sinistro è 16, quello destro è 64.",
              "Vale anche per composti, per esempio 12 e 18."
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
          "title": "Il primo multiplo comune positivo",
          "steps": [
            {
              "title": "La definizione",
              "html": "Il <strong>m.c.m.</strong> è il più piccolo multiplo comune <strong>positivo</strong>. Ciascun dato deve dividerlo senza resto. Zero è comune, ma non è un candidato per il m.c.m."
            },
            {
              "title": "Il metodo",
              "html": "Scomponiamo tutti i numeri. Moltiplichiamo <strong>tutti i primi presenti</strong>, ognuno con il <strong>maggiore esponente</strong>. Il risultato contiene tutte le copie richieste, senza aggiungerne inutilmente."
            },
            {
              "title": "Il confronto",
              "html": "<strong>M.C.D.:</strong> primi comuni, esponenti minori; il risultato divide i dati.<br><strong>m.c.m.:</strong> tutti i primi, esponenti maggiori; i dati dividono il risultato.<br><br>Se un numero divide l’altro, M.C.D. e m.c.m. sono rispettivamente quello minore e quello maggiore. Per due numeri primi tra loro, il m.c.m. è il prodotto."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quali sono M.C.D. e m.c.m. di 12 e 18, in quest’ordine?",
            "options": [
              "6 e 36",
              "36 e 6",
              "6 e 216",
              "1 e 30"
            ],
            "answer": 0,
            "feedback": "Il massimo divisore comune è 6; il minimo multiplo comune positivo è 36.",
            "feedbackByOption": [
              "Il massimo divisore comune è 6; il minimo multiplo comune positivo è 36.",
              "Hai invertito i ruoli: 36 è multiplo, 6 è divisore.",
              "216 è comune, ma non è minimo: 36 basta.",
              "12 e 18 hanno il divisore comune 6; 30 non è multiplo di 12 né di 18."
            ]
          },
          {
            "question": "Quanto vale m.c.m.(9, 15)?",
            "options": [
              "3",
              "15",
              "135",
              "45"
            ],
            "answer": 3,
            "feedback": "9 = 3² e 15 = 3 × 5: prendiamo 3² × 5.",
            "feedbackByOption": [
              "3 è il M.C.D., non il m.c.m.",
              "15 non è divisibile per 9.",
              "È il prodotto dei dati, ma contiene una copia di 3 non necessaria.",
              "9 = 3² e 15 = 3 × 5: prendiamo 3² × 5."
            ]
          },
          {
            "question": "Quale controllo verifica la condizione di multiplo comune per un risultato candidato?",
            "options": [
              "Controllare soltanto che sia più grande di tutti i dati.",
              "Controllare che sia uguale al prodotto dei dati.",
              "Dividerlo per ciascun dato e ottenere sempre resto zero.",
              "Dividere ciascun dato per il candidato e ottenere resto zero."
            ],
            "answer": 2,
            "feedback": "È il candidato a dover essere divisibile per tutti i dati; per il m.c.m. va anche giustificata la minimalità.",
            "feedbackByOption": [
              "Essere grande non basta: 20 supera 6 e 8, ma non è multiplo di nessuno dei due.",
              "Il prodotto è sempre comune per dati positivi, ma può non essere il minimo.",
              "È il candidato a dover essere divisibile per tutti i dati; per il m.c.m. va anche giustificata la minimalità.",
              "Questo controlla se il candidato è un divisore comune, non un multiplo comune."
            ]
          }
        ]
      }
    }
  ]
};
