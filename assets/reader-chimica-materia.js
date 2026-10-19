/* Bozza originale per le medie; riferimenti e scelte didattiche in docs/chimica-atomi-fonti.md. */
window.READER_LESSONS["chimica-materia"] = {
  "title": "La materia",
  "subtitle": "Scuole medie · Scienze · Chimica · In lavorazione",
  "version": 3,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "intorno-a-noi",
      "title": "La materia intorno a noi",
      "cards": [
        {
          "title": "Un mondo di differenze",
          "matterIntro": true,
          "stepMode": "replace",
          "illustration": {
            "src": "assets/images/reader/chemistry/red-morgana-carte-cortile-v3.png",
            "alt": "Red e Morgana giocano con carte illustrate al tavolo del cortile della scuola.",
            "width": 1536,
            "height": 1024
          },
          "steps": [
            {
              "title": "Partiamo da un fatto",
              "html": "L’acqua che bevi, il letto su cui dormi, il tuo stesso corpo: sono tutti fatti di <button class=\"rm-keyword\" data-term=\"materia\" type=\"button\">materia</button>. Anche l’aria è materia. Non la vediamo, ma la sentiamo quando tira il vento.<br><br>Eppure la materia si presenta ai nostri sensi in modi molto diversi: pensa alla trasparenza del vetro, alla morbidezza di un tessuto o alla durezza di un sasso.<br><br><strong>Da dove nasce tutta questa varietà? È un caso oppure c’è una ragione?</strong>"
            },
            {
              "title": "Scopriamolo insieme",
              "html": "<span class=\"mc-invitation\">Red e Morgana sono già al tavolo.<br><strong>Ora tocca a te!</strong></span><span class=\"mc-invitation-sub\">Pesca, osserva e prova a riconoscere gli indizi della materia.</span><div class=\"mc-round-picker\"><p>Quanto vuoi giocare?</p><div class=\"mc-round-options\" role=\"group\" aria-label=\"Numero di carte del round\"><button type=\"button\" data-mc-round=\"5\"><strong>5</strong><span>Un assaggio</span></button><button type=\"button\" data-mc-round=\"10\"><strong>10</strong><span>La sfida</span></button><button type=\"button\" data-mc-round=\"18\"><strong>Tutte</strong><span>18 carte</span></button></div></div>"
            }
          ]
        },
        {
          "title": "Identikit della materia",
          "board": "matter-cards",
          "steps": [
            {
              "html": "Osserva il campione e riconosci la struttura mostrata nel modello."
            }
          ]
        },
        {
          "title": "Dentro la materia",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La varietà non è solo in superficie",
              "html": "Hai incontrato palline separate, piccoli gruppi, reticoli e lunghe catene. Hai visto anche materiali in cui convivono strutture diverse.<br><br><strong>La materia non è tutta organizzata allo stesso modo.</strong> La sua struttura microscopica ci aiuta a spiegare molte delle differenze che osserviamo."
            },
            {
              "title": "Una domanda rimane",
              "html": "Nei modelli abbiamo usato delle palline per rappresentare la struttura dei materiali.<br><br><strong>Ma che cosa rappresentano quelle palline?</strong><br><br>Partiamo da qui per dare un nome a ciò che abbiamo osservato."
            }
          ]
        }
      ]
    },
    {
      "id": "atomi-elementi",
      "title": "Atomi, elementi e molecole",
      "cards": [
        {
          "title": "Le palline hanno un nome",
          "board": "chem-atoms",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Partiamo dagli atomi",
              "html": "Per descrivere la struttura della materia partiamo da particelle piccolissime: gli <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"atomo\">atomi</button></strong>. Ne esistono tipi diversi, come gli atomi di idrogeno, di ossigeno e di carbonio.<br><br>Nel gioco abbiamo rappresentato queste particelle con delle palline.",
              "chemView": "atoms"
            },
            {
              "title": "Un modello, non una fotografia",
              "html": "Le palline rendono visibili differenze che altrimenti non potremmo osservare a occhio nudo. <strong>I colori sono scelti da noi per distinguere i tipi di atomi</strong>: non sono i colori reali degli atomi.<br><br>Le palline segnate con + o − rappresentano invece <button type=\"button\" class=\"rm-keyword\" data-term=\"ione\">ioni</button>. Capiremo quei segni quando entreremo nella struttura dell’atomo.",
              "chemView": "atoms",
              "cloze": [
                {
                  "before": "Nel modello, palline dello stesso colore indicano ",
                  "options": [
                    "lo stesso tipo di atomo",
                    "atomi tutti dello stesso materiale colorato"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "Il colore è un codice del modello: serve a riconoscere il tipo di atomo."
                }
              ]
            }
          ]
        },
        {
          "title": "Un tipo di atomi, un elemento",
          "board": "chem-elements",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il tipo ha un nome",
              "html": "Un <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"elemento-chimico\">elemento chimico</button></strong> corrisponde a un tipo di atomo. Tutti gli atomi di elio appartengono all’elemento elio; quelli di ossigeno all’elemento ossigeno.<br><br><strong>Atomo ed elemento non sono sinonimi</strong>: un atomo è una particella, un elemento identifica il tipo a cui appartiene.",
              "chemView": "elements"
            },
            {
              "title": "Dal singolo atomo al campione",
              "html": "Un atomo è la più piccola parte di un elemento che ne conserva l’identità. Un campione formato da un solo elemento contiene moltissimi atomi di quel tipo.<br><br>Gli atomi possono trovarsi <strong>separati, legati in piccoli gruppi o in strutture estese</strong>. Per riconoscere l’elemento conta il tipo di atomi, non il modo in cui sono raggruppati.",
              "chemView": "elements",
              "cumulativeFrom": 1
            },
            {
              "title": "Un esempio dal gioco",
              "html": "L’elio nel palloncino è formato da atomi separati. Nell’ossigeno gli atomi sono legati a coppie. La grafite della matita è formata da atomi di carbonio legati in strutture estese.<br><br><strong>In tutti e tre i casi troviamo un solo elemento.</strong>",
              "chemView": "elements",
              "cumulativeFrom": 1
            }
          ]
        },
        {
          "title": "Atomo o molecola?",
          "board": "chem-molecules",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un gruppo legato",
              "html": "Una <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"molecola\">molecola</button></strong> è un gruppo definito di due o più atomi legati tra loro. Può contenere atomi dello stesso elemento oppure di elementi diversi.<br><br>La molecola di ossigeno contiene <strong>due atomi di ossigeno</strong>. Una molecola d’acqua contiene <strong>due atomi di idrogeno e uno di ossigeno</strong>.",
              "chemView": "molecules"
            },
            {
              "title": "Contiamo cose diverse",
              "html": "Nel disegno ci sono due molecole: una di ossigeno e una d’acqua. Gli atomi, invece, sono cinque in tutto.<br><br><strong>Un atomo è una particella; una molecola è un gruppo di atomi legati.</strong> Un atomo di elio da solo non è una molecola.",
              "chemView": "molecules",
              "cloze": [
                {
                  "before": "Una molecola d’acqua contiene ",
                  "options": [
                    "2",
                    "3"
                  ],
                  "answer": 1,
                  "after": " atomi.",
                  "feedback": "Due atomi di idrogeno più un atomo di ossigeno: tre atomi in una molecola."
                }
              ]
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Nel modello vediamo due palline uguali legate tra loro. Quale descrizione è corretta?",
            "options": [
              "Due atomi di elementi diversi.",
              "Una molecola formata da due atomi dello stesso elemento.",
              "Un atomo formato da due molecole.",
              "Due elementi perché ci sono due palline."
            ],
            "answer": 1,
            "feedback": "I due atomi sono dello stesso tipo; il loro gruppo legato è una molecola.",
            "illustration": {
              "src": "assets/images/reader/chemistry/quiz-ossigeno.svg",
              "alt": "Due palline entrambe etichettate O sono legate tra loro.",
              "width": 420,
              "height": 190
            }
          },
          {
            "question": "Un palloncino contiene solo elio. Quale frase distingue atomo ed elemento?",
            "options": [
              "L’elio è un elemento; ciascuna delle sue particelle isolate è un atomo.",
              "L’elio è un atomo grande quanto il palloncino.",
              "Ogni atomo di elio è un elemento diverso.",
              "Atomo ed elemento indicano sempre la stessa cosa."
            ],
            "answer": 0,
            "feedback": "Elemento è il tipo; atomo è la singola particella."
          },
          {
            "question": "Una molecola d’acqua contiene due atomi di idrogeno e uno di ossigeno. Quanti atomi ci sono in due molecole d’acqua?",
            "options": [
              "2",
              "3",
              "5",
              "6"
            ],
            "answer": 3,
            "feedback": "Ogni molecola contiene tre atomi: in due molecole ce ne sono sei."
          }
        ]
      }
    },
    {
      "id": "simboli-tavola",
      "title": "Simboli e tavola periodica",
      "cards": [
        {
          "title": "Un simbolo per ogni elemento",
          "board": "chem-symbols",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un linguaggio condiviso",
              "html": "Ogni elemento ha un nome e un <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"simbolo-chimico\">simbolo chimico</button></strong>, usato in tutto il mondo. H indica l’idrogeno, O l’ossigeno e C il carbonio.<br><br>I simboli degli elementi oggi riconosciuti hanno <strong>una o due lettere: la prima maiuscola, la seconda, se presente, minuscola</strong>.",
              "chemView": "symbols"
            },
            {
              "title": "Anche le maiuscole contano",
              "html": "He è il simbolo dell’elio; Fe quello del ferro. <strong>La seconda lettera fa parte dello stesso simbolo</strong>: non indica un secondo elemento.<br><br>Alcuni simboli derivano da nomi antichi: Au, per esempio, viene dal latino <em>aurum</em> e indica l’oro.",
              "chemView": "symbols",
              "cloze": [
                {
                  "before": "Il simbolo corretto del ferro è ",
                  "options": [
                    "Fe",
                    "FE"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "La prima lettera è maiuscola e la seconda minuscola."
                }
              ]
            }
          ]
        },
        {
          "title": "La tavola periodica",
          "board": "chem-periodic",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Una mappa da consultare",
              "html": "I <strong>118 elementi oggi riconosciuti</strong> sono raccolti nella <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"tavola-periodica\">tavola periodica</button></strong>. Ogni casella corrisponde a un elemento e riporta il suo simbolo e il suo nome.<br><br>Qui puoi selezionare una casella per leggerla più comodamente. <strong>La tavola si consulta: non serve impararla tutta a memoria.</strong>",
              "chemView": "periodic"
            },
            {
              "title": "L’ordine non è casuale",
              "html": "Le righe si chiamano <strong>periodi</strong> e le colonne <strong>gruppi</strong>. Gli elementi di uno stesso gruppo hanno spesso comportamenti chimici simili.<br><br>Per esempio, elio, neon e argon sono nella stessa colonna. Li trovi nella tavola? Le due serie sotto sono riportate lì per rendere compatta la tavola. Il significato dell’ordine delle caselle diventerà più chiaro studiando l’interno degli atomi.",
              "chemView": "periodic"
            }
          ]
        },
        {
          "title": "Dai simboli alle formule",
          "board": "chem-formulas",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Leggiamo una molecola",
              "html": "Una <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"formula-chimica\">formula chimica</button></strong> usa i simboli per indicare quali elementi costituiscono una sostanza. Per una sostanza fatta di molecole, indica anche quanti atomi di ogni tipo contiene una molecola.<br><br>In <strong>H₂O</strong>, il 2 si riferisce soltanto a H: due atomi di idrogeno. Dopo O non c’è un numero: significa <strong>un atomo di ossigeno</strong>.",
              "chemView": "water-formula"
            },
            {
              "title": "Il numero segue il suo simbolo",
              "html": "L’anidride carbonica ha formula <strong>CO₂</strong>: ogni molecola contiene un atomo di carbonio e due di ossigeno.<br><br><strong>Il numero in basso si riferisce al simbolo che lo precede.</strong> Quando il numero è 1, non lo scriviamo.",
              "chemView": "carbon-formula",
              "cloze": [
                {
                  "before": "Una molecola di CO₂ contiene ",
                  "options": [
                    "2",
                    "3"
                  ],
                  "answer": 1,
                  "after": " atomi in tutto.",
                  "feedback": "Un atomo di carbonio e due di ossigeno: tre atomi."
                }
              ]
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale simbolo è scritto correttamente?",
            "options": [
              "HE",
              "he",
              "He",
              "hE"
            ],
            "answer": 2,
            "feedback": "Il simbolo dell’elio è He: prima lettera maiuscola, seconda minuscola."
          },
          {
            "question": "Che cosa rappresenta una casella della tavola periodica?",
            "options": [
              "Una miscela di materiali.",
              "Un elemento chimico.",
              "Una singola molecola di qualsiasi sostanza.",
              "Uno stato della materia."
            ],
            "answer": 1,
            "feedback": "Ogni elemento ha una propria casella nella tavola periodica."
          },
          {
            "question": "La formula CH₄ indica una molecola di metano. Quale composizione descrive?",
            "options": [
              "Quattro atomi di carbonio e uno di idrogeno.",
              "Un atomo di carbonio e quattro di idrogeno.",
              "Un atomo di carbonio e uno di idrogeno.",
              "Quattro molecole di carbonio e quattro di idrogeno."
            ],
            "answer": 1,
            "feedback": "Il 4 segue H e si riferisce all’idrogeno. Dopo C non c’è numero: un solo atomo."
          }
        ]
      }
    },
    {
      "id": "teoria-atomica",
      "title": "Composti e teoria atomica",
      "cards": [
        {
          "title": "Quando si combinano elementi diversi",
          "board": "chem-compounds",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un nuovo nome",
              "html": "Un <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"composto-chimico\">composto chimico</button></strong> è una sostanza formata da elementi diversi combinati chimicamente in proporzioni definite.<br><br>L’acqua è un composto: ogni sua molecola contiene idrogeno e ossigeno nel rapporto di <strong>due atomi a uno</strong>. L’ossigeno, invece, è una sostanza semplice: le sue molecole contengono un solo elemento.",
              "chemView": "compounds"
            },
            {
              "title": "Non tutte le sostanze hanno molecole",
              "html": "Il sale da cucina è un composto formato da sodio e cloro. Nel solido, però, le particelle formano una <strong>struttura estesa</strong>: non ci sono piccole molecole separate di sale.<br><br>La formula <strong>NaCl</strong> indica il rapporto uno a uno tra sodio e cloro nella struttura. Ricordi il reticolo visto nel gioco?",
              "chemView": "lattice"
            }
          ]
        },
        {
          "title": "L’idea di una materia fatta di atomi",
          "board": "chem-history",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Da un’idea a una spiegazione scientifica",
              "html": "Nell’antica Grecia, Leucippo e Democrito immaginarono una materia fatta di particelle indivisibili. La parola <em>atomo</em> viene proprio dal greco e significa «non divisibile».<br><br>All’inizio dell’Ottocento <strong>John Dalton</strong> sviluppò una teoria atomica per spiegare i risultati degli esperimenti chimici.",
              "chemView": "history"
            },
            {
              "title": "Le idee che ci servono",
              "html": "La <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"teoria-atomica\">teoria atomica</button></strong> permette di collegare ciò che osserviamo ai suoi componenti microscopici:<br><br>• la materia è costituita da atomi;<br>• a elementi diversi corrispondono tipi diversi di atomi;<br>• nei composti gli elementi si combinano in rapporti definiti;<br>• nelle reazioni chimiche gli atomi si riorganizzano.",
              "chemView": "history"
            }
          ]
        },
        {
          "title": "Stessi atomi, nuove sostanze",
          "board": "chem-reaction",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Prima della trasformazione",
              "html": "Una <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"reazione-chimica\">reazione chimica</button></strong> è una trasformazione in cui si formano nuove sostanze.<br><br>Il disegno mostra due molecole di idrogeno e una di ossigeno: <strong>quattro atomi di idrogeno e due di ossigeno</strong>. Osserva che cosa cambia quando si forma l’acqua.",
              "chemView": "before-reaction"
            },
            {
              "title": "Cambiano i legami",
              "html": "Alla fine abbiamo due molecole d’acqua. Contiamo ancora <strong>quattro atomi di idrogeno e due di ossigeno</strong>.<br><br>In una reazione chimica gli atomi <strong>non vengono creati o distrutti e non cambiano elemento</strong>: cambiano i legami e il modo in cui sono raggruppati.",
              "chemView": "after-reaction",
              "cloze": [
                {
                  "before": "Durante questa reazione, il numero degli atomi di ossigeno ",
                  "options": [
                    "rimane lo stesso",
                    "diminuisce"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "Prima e dopo ci sono due atomi di ossigeno. Si trovano in molecole diverse."
                }
              ]
            }
          ]
        },
        {
          "title": "Una teoria si può migliorare",
          "board": "chem-history",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Che cosa abbiamo scoperto dopo Dalton",
              "html": "Dalton considerava gli atomi indivisibili e pensava che quelli dello stesso elemento avessero tutti la stessa massa. <strong>Le scoperte successive hanno corretto queste idee</strong>, senza cancellare l’utilità della descrizione atomica della materia.",
              "chemView": "today"
            },
            {
              "title": "La prossima domanda",
              "html": "Le palline del gioco ci hanno aiutato a riconoscere come si organizza la materia. Ma un atomo <strong>non è una pallina piena e indivisibile</strong>: possiede una struttura interna.<br><br><strong>Che cosa c’è dentro un atomo?</strong> Sarà il punto di partenza della prossima lezione.",
              "chemView": "today",
              "cumulativeFrom": 0
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Nel disegno, quale campione contiene un composto molecolare?",
            "options": [
              "A: solo atomi di elio separati.",
              "B: molecole formate da due atomi di ossigeno.",
              "C: molecole formate da idrogeno e ossigeno.",
              "Tutti e tre: in ogni campione ci sono più particelle."
            ],
            "answer": 2,
            "feedback": "Solo C contiene atomi di elementi diversi combinati nelle stesse molecole.",
            "illustration": {
              "src": "assets/images/reader/chemistry/quiz-elementi-composti.svg",
              "alt": "A: atomi di elio separati. B: coppie di atomi di ossigeno. C: gruppi con due H e un O.",
              "width": 600,
              "height": 220
            }
          },
          {
            "question": "Durante una reazione chimica che cosa succede agli atomi?",
            "options": [
              "Gli atomi scompaiono quando non servono più.",
              "Gli atomi di ossigeno diventano atomi di idrogeno.",
              "Gli atomi si riorganizzano cambiando legami.",
              "Si formano sempre nuovi tipi di atomi."
            ],
            "answer": 2,
            "feedback": "Le reazioni chimiche cambiano i legami, non l’identità degli elementi."
          },
          {
            "question": "Quale idea del modello di Dalton è stata corretta dalle scoperte successive?",
            "options": [
              "La materia può essere descritta attraverso gli atomi.",
              "L’atomo è indivisibile e non ha struttura interna.",
              "Gli elementi diversi corrispondono a tipi diversi di atomi.",
              "I composti contengono elementi diversi."
            ],
            "answer": 1,
            "feedback": "Oggi sappiamo che l’atomo ha una struttura interna: la studieremo nella prossima lezione."
          }
        ]
      }
    },
    {
      "id": "in-pillole",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "La lezione in pillole",
          "board": "chem-recap",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Dalle palline al linguaggio della chimica",
              "html": "<strong><button type=\"button\" class=\"rm-keyword\" data-term=\"atomo\">Atomo</button>:</strong> la singola particella.<br><br><strong><button type=\"button\" class=\"rm-keyword\" data-term=\"elemento-chimico\">Elemento</button>:</strong> il tipo di atomo.<br><br><strong><button type=\"button\" class=\"rm-keyword\" data-term=\"molecola\">Molecola</button>:</strong> un gruppo definito di atomi legati.<br><br><strong><button type=\"button\" class=\"rm-keyword\" data-term=\"composto-chimico\">Composto</button>:</strong> una sostanza che combina elementi diversi in proporzioni definite.",
              "chemView": "recap"
            },
            {
              "title": "Gli strumenti per leggere la materia",
              "html": "<strong>Il simbolo identifica l’elemento.</strong> La tavola periodica raccoglie gli elementi.<br><br><strong>La formula descrive la composizione.</strong> Per una molecola, i numeri in basso indicano quanti atomi di ciascun elemento contiene.<br><br><strong>Nelle reazioni cambiano i legami, non i tipi di atomi.</strong>",
              "chemView": "recap"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "La grafite è una struttura estesa formata soltanto da atomi di carbonio. Come la descrivi?",
            "options": [
              "Un composto perché ha tanti atomi.",
              "Una sostanza semplice, formata da un solo elemento.",
              "Una molecola di acqua.",
              "Una miscela perché gli atomi sono disposti in strati."
            ],
            "answer": 1,
            "feedback": "Avere molti atomi o una struttura estesa non significa contenere elementi diversi."
          },
          {
            "question": "Una molecola ha formula H₂O₂. Quanti atomi contiene?",
            "options": [
              "Due: uno di H e uno di O.",
              "Tre: due di H e uno di O.",
              "Quattro: due di H e due di O.",
              "Sei: quattro di H e due di O."
            ],
            "answer": 2,
            "feedback": "Ogni numero si riferisce al simbolo precedente: due H e due O."
          },
          {
            "question": "Un compagno dice: «Ogni pallina del modello è una minuscola goccia della sostanza». Come gli rispondi?",
            "options": [
              "Sì: ogni atomo d’acqua è una gocciolina.",
              "No: le palline rappresentano particelle; le proprietà del materiale dipendono anche da come sono legate e organizzate.",
              "Sì: il colore della pallina è sempre il colore reale della sostanza.",
              "No: le palline rappresentano solo lo spazio vuoto."
            ],
            "answer": 1,
            "feedback": "Il modello mostra i componenti microscopici. Non sono copie in miniatura del materiale."
          }
        ]
      }
    }
  ]
};
