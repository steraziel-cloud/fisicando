window.READER_LESSONS["chimica-materia"] = {
  "title": "La materia",
  "subtitle": "Scuole medie · Scienze · Chimica · In lavorazione",
  "version": 4,
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
              "title": "Strutture diverse",
              "html": "<span class=\"ch-inside-copy\">Ispezionando i campioni di materia hai incontrato <strong>palline isolate, libere di muoversi</strong>, <strong>piccoli raggruppamenti</strong> e <strong>grandi strutture reticolari</strong>. Hai visto anche materiali in cui convivono strutture diverse.<br><br><strong>Molte delle proprietà e delle differenze che osserviamo dipendono proprio da questa organizzazione microscopica.</strong></span>"
            },
            {
              "title": "Qualcosa in comune",
              "html": "<span class=\"ch-inside-copy\">Tante strutture, tante differenze. Eppure, in tutti i modelli c’era qualcosa in comune: <strong>le palline</strong>.<strong class=\"ch-inside-question\">Ma che cosa sono quelle palline?</strong></span>"
            }
          ]
        }
      ]
    },
    {
      "id": "atomi-elementi",
      "title": "Dalle palline agli atomi",
      "cards": [
        {
          "title": "I costituenti della materia",
          "board": "chem-atoms",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Gli atomi",
              "html": "La materia è formata da <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"atomo\">atomi</button></strong>, particelle piccolissime che nelle carte abbiamo rappresentato con le palline.<br><br>Esistono <strong>tipi diversi di atomi</strong>. Nel gioco li abbiamo distinti con colori diversi. È una scelta del nostro modello: <strong>gli atomi non hanno quei colori</strong>.",
              "cloze": [
                {
                  "before": "Due palline dello stesso colore rappresentano ",
                  "options": [
                    "atomi dello stesso tipo",
                    "due pezzi dello stesso colore reale"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "Il colore è un codice scelto da noi, non una proprietà visibile dell’atomo."
                }
              ],
              "chemView": "atoms"
            },
            {
              "title": "Un modello per rappresentarli",
              "html": "Un atomo è troppo piccolo per essere visto a occhio nudo. Le palline ci aiutano a rappresentarlo: <strong>sono modelli, non fotografie</strong>.<br><br>Oggi l’esistenza degli atomi è sostenuta da moltissime prove sperimentali. Ma l’idea che la materia fosse fatta di atomi è molto più antica.",
              "chemView": "atoms"
            }
          ]
        },
        {
          "title": "Un’idea lunga più di duemila anni",
          "board": "chem-museum",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Fin dove possiamo dividere?",
              "html": "Nel V secolo a.C. i filosofi greci <strong>Leucippo e <button type=\"button\" class=\"rm-keyword\" data-term=\"democrito\">Democrito</button></strong> proposero questa idea: dividendo la materia, prima o poi si sarebbe arrivati a particelle che non si potevano dividere ancora.<br><br>Le chiamarono <strong>atomi</strong>, dal greco <em>átomos</em>, «indivisibile». Democrito sviluppò questa visione, chiamata <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"atomismo\">atomismo</button></strong>.",
              "cloze": [
                {
                  "before": "Per gli atomisti, dividendo la materia si sarebbe arrivati ",
                  "options": [
                    "sempre a frammenti ancora più piccoli, senza un limite",
                    "a un limite oltre il quale non dividerla più"
                  ],
                  "answer": 1,
                  "after": ".",
                  "feedback": "Il loro atomo era, per ipotesi, l’ultimo livello della divisione."
                }
              ],
              "chemView": "museum"
            },
            {
              "title": "Un’intuizione, non ancora una prova",
              "html": "Era una proposta filosofica: <strong>non nasceva da esperimenti capaci di verificare l’esistenza degli atomi</strong>.<br><br>La sua forza era la domanda: e se dietro materiali tanto diversi ci fossero piccolissimi costituenti? Per trasformare questa intuizione in una teoria scientifica sarebbe servito molto altro.",
              "chemView": "museum"
            }
          ]
        },
        {
          "title": "Dalton: dagli indizi a una teoria",
          "board": "chem-dalton",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Entrano in gioco gli esperimenti",
              "html": "All’inizio dell’Ottocento il chimico inglese <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"dalton\">John Dalton</button></strong> riprese l’idea degli atomi per spiegare i risultati degli esperimenti.<br><br>La sua <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"teoria-atomica\">teoria atomica</button></strong> non si limitava a immaginare particelle invisibili: doveva spiegare le regolarità osservate nelle misure.",
              "chemView": "dalton-start"
            },
            {
              "title": "Le ipotesi di Dalton",
              "html": "Secondo Dalton:<br><span class=\"ch-dalton-hypothesis\"><span class=\"ch-hypothesis-number\">1</span><span>La materia è formata da <strong>atomi indivisibili e indistruttibili</strong>.</span></span>",
              "cumulativeFrom": 1,
              "chemView": "dalton-start"
            },
            {
              "title": "",
              "html": "<span class=\"ch-dalton-hypothesis\"><span class=\"ch-hypothesis-number\">2</span><span>Gli atomi dello stesso tipo hanno <strong>la stessa massa e le stesse proprietà</strong>.</span></span>",
              "cumulativeFrom": 1,
              "chemView": "dalton-start"
            },
            {
              "title": "",
              "html": "<span class=\"ch-dalton-hypothesis\"><span class=\"ch-hypothesis-number\">3</span><span>Atomi di tipi diversi hanno <strong>masse e proprietà diverse</strong>.</span></span>",
              "cumulativeFrom": 1,
              "chemView": "dalton-start"
            },
            {
              "title": "",
              "html": "<span class=\"ch-dalton-hypothesis\"><span class=\"ch-hypothesis-number\">4</span><span>Gli atomi di tipi diversi si uniscono per formare <button type=\"button\" class=\"rm-keyword\" data-term=\"sostanza\">sostanze</button> chiamate <button type=\"button\" class=\"rm-keyword\" data-term=\"composto-chimico\">composti</button>. In uno stesso composto si combinano in <button type=\"button\" class=\"rm-keyword ch-insight-keyword\" data-ch-ratios aria-haspopup=\"dialog\">rapporti numerici semplici e costanti</button>.</span></span>",
              "cumulativeFrom": 1,
              "chemView": "dalton-start"
            },
            {
              "title": "",
              "html": "<span class=\"ch-dalton-hypothesis\"><span class=\"ch-hypothesis-number\">5</span><span>Nelle <button type=\"button\" class=\"rm-keyword\" data-term=\"reazione-chimica\">trasformazioni chimiche</button> gli atomi si separano, si uniscono e si riorganizzano: <strong>non vengono creati o distrutti e non cambiano tipo</strong>.</span></span>",
              "cumulativeFrom": 1,
              "chemView": "dalton-start"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa rappresentavano i colori diversi delle palline?",
            "options": [
              "Colori reali degli atomi.",
              "Tipi diversi di atomi.",
              "La temperatura di ciascun atomo.",
              "Il colore del materiale visto a occhio nudo."
            ],
            "answer": 1,
            "feedback": "I colori sono una convenzione del modello: distinguono i tipi di atomi."
          },
          {
            "question": "Che cosa significava «atomo» per Leucippo e Democrito?",
            "options": [
              "Una particella indivisibile.",
              "Una sostanza liquida.",
              "Una particella visibile a occhio nudo.",
              "Una particella scoperta con il microscopio."
            ],
            "answer": 0,
            "feedback": "Il termine greco rimanda all’idea di qualcosa che non si può dividere."
          },
          {
            "question": "Quale affermazione appartiene alla teoria di Dalton?",
            "options": [
              "Ogni materiale contiene un solo atomo.",
              "Gli atomi scompaiono quando si uniscono.",
              "Gli atomi possono combinarsi in rapporti numerici definiti.",
              "Nelle trasformazioni chimiche un tipo di atomo diventa un altro."
            ],
            "answer": 2,
            "feedback": "L’unione degli atomi in rapporti definiti è un punto centrale della teoria."
          }
        ]
      }
    },
    {
      "id": "elementi",
      "title": "Un tipo di atomi, un elemento",
      "cards": [
        {
          "title": "Atomo ed elemento: due idee diverse",
          "board": "chem-elements",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La particella e il suo tipo",
              "html": "Un <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"elemento-chimico\">elemento chimico</button></strong> è un tipo di atomi. L’elio è un elemento; il carbonio è un altro; l’ossigeno un altro ancora.<br><br><strong>Un atomo è una singola particella. L’elemento identifica il tipo a cui appartiene.</strong> Due atomi di ossigeno sono due particelle dello stesso elemento.",
              "cloze": [
                {
                  "before": "Due atomi di ossigeno appartengono ",
                  "options": [
                    "allo stesso elemento",
                    "a due elementi diversi"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "Il numero di particelle non cambia il tipo di atomi."
                }
              ],
              "chemView": "elements"
            },
            {
              "title": "Una sostanza fatta di un solo elemento",
              "html": "Una <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"sostanza-semplice\">sostanza semplice</button></strong> è formata soltanto da atomi dello stesso elemento.<br><br>Questi atomi possono rimanere <strong>separati</strong>, unirsi in <strong>piccoli gruppi</strong> oppure legarsi in <strong>strutture estese</strong>. Non devono per forza trovarsi tutti nella stessa disposizione.",
              "chemView": "simple-substances",
              "cloze": [
                {
                  "before": "Una sostanza semplice contiene ",
                  "options": [
                    "almeno due tipi di atomi",
                    "un solo tipo di atomi"
                  ],
                  "answer": 1,
                  "after": ".",
                  "feedback": "Gli atomi possono essere separati o uniti, ma appartengono tutti allo stesso elemento."
                }
              ]
            }
          ]
        },
        {
          "title": "Tre carte, tre modi di stare insieme",
          "board": "chem-simple-substances",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Ritroviamo i modelli del gioco",
              "html": "Nell’<strong>elio</strong> del palloncino gli atomi restano separati. Nell’<strong>ossigeno</strong> sono legati a coppie. Nella <strong>grafite</strong> gli atomi di carbonio formano piani di esagoni, sovrapposti tra loro.<br><br>Sono tutte sostanze semplici: <strong>ogni campione contiene un solo tipo di atomi</strong>.",
              "cloze": [
                {
                  "before": "L’ossigeno è una sostanza semplice perché ogni coppia contiene ",
                  "options": [
                    "atomi dello stesso elemento",
                    "atomi di elementi diversi"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "Essere legati a coppie non rende diversi i due atomi."
                }
              ],
              "chemView": "simple-substances"
            },
            {
              "title": "Perché si organizzano diversamente?",
              "html": "Dipende dalle <strong>proprietà dei singoli tipi di atomi e dalle loro interazioni</strong>. Le studieremo nelle prossime lezioni.<br><br>Per ora ci basta distinguere due domande: <strong>quali atomi ci sono?</strong> E <strong>come sono organizzati?</strong>",
              "chemView": "simple-substances"
            }
          ]
        },
        {
          "title": "Quanti tipi di atomi conosciamo?",
          "board": "chem-element-count",
          "stepMode": "replace",
          "steps": [
            {
              "title": "118 elementi riconosciuti",
              "html": "Oggi sono riconosciuti <strong>118 elementi chimici</strong>: 118 tipi di atomi.<br><br>Alcuni sono molto comuni, altri rarissimi; altri ancora sono stati prodotti soltanto in laboratorio. Contando anche le presenze naturali in tracce, <strong>94 elementi si trovano in natura</strong>.",
              "cloze": [
                {
                  "before": "A ogni elemento corrisponde ",
                  "options": [
                    "un diverso stato della materia",
                    "un tipo di atomi"
                  ],
                  "answer": 1,
                  "after": ".",
                  "feedback": "Solido, liquido e gas sono stati della materia, non tipi di atomi."
                }
              ],
              "chemView": "element-count"
            },
            {
              "title": "Una precisazione sul numero",
              "html": "Nei libri puoi trovare il numero <strong>92</strong>: è il conteggio tradizionale che si ferma all’uranio. Anche nettunio e plutonio sono però presenti in natura in quantità piccolissime: includendoli si arriva a <strong>94</strong>.<br><br>Per orientarci tra tanti nomi, ci serviranno dei simboli e una tabella che li organizzi.",
              "chemView": "element-count"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Un campione contiene moltissimi atomi, tutti di elio. Quanti elementi sono presenti?",
            "options": [
              "Tanti quanti sono gli atomi.",
              "Due, perché gli atomi sono separati.",
              "Non si può sapere senza pesarlo.",
              "Uno: l’elio."
            ],
            "answer": 3,
            "feedback": "Moltissimi atomi possono appartenere tutti a un solo elemento."
          },
          {
            "question": "Elio, ossigeno e grafite hanno strutture diverse. Perché sono tutti esempi di sostanze semplici?",
            "options": [
              "Sono tutti gas.",
              "Ogni campione contiene un solo tipo di atomi.",
              "I loro atomi sono tutti separati.",
              "Tutti i loro atomi hanno lo stesso colore reale."
            ],
            "answer": 1,
            "feedback": "Conta il tipo di atomi presente in ogni sostanza, non la loro disposizione."
          },
          {
            "question": "Nella grafite troviamo molti atomi di carbonio legati in una struttura estesa. Quale frase è corretta?",
            "options": [
              "La struttura contiene un solo elemento.",
              "Ogni esagono è un elemento diverso.",
              "Ogni legame crea un nuovo tipo di atomo.",
              "Gli atomi non sono più di carbonio perché sono uniti."
            ],
            "answer": 0,
            "feedback": "Gli atomi restano di carbonio anche quando sono legati tra loro."
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
              "html": "Per indicare un elemento usiamo un <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"simbolo-chimico\">simbolo chimico</button></strong>. H indica l’idrogeno, O l’ossigeno, C il carbonio.<br><br>All’inizio dell’Ottocento <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"berzelius\">Jöns Jacob Berzelius</button></strong> propose un sistema basato sulle lettere dei nomi: da lì si è sviluppata la scrittura usata oggi.",
              "chemView": "symbols"
            },
            {
              "title": "Anche le maiuscole contano",
              "html": "I simboli degli elementi riconosciuti hanno <strong>una o due lettere</strong>: la prima maiuscola e l’eventuale seconda minuscola. <strong>He</strong> è elio; <strong>Fe</strong> è ferro.<br><br>Alcuni derivano da nomi antichi: <strong>Au</strong>, oro, viene dal latino <em>aurum</em>.",
              "cloze": [
                {
                  "before": "Il simbolo corretto del ferro è ",
                  "options": [
                    "Fe",
                    "FE"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "Una sola iniziale maiuscola; la seconda lettera è minuscola."
                }
              ],
              "chemView": "symbols"
            }
          ]
        },
        {
          "title": "La tavola periodica",
          "board": "chem-periodic",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Una mappa degli elementi",
              "html": "La <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"tavola-periodica\">tavola periodica degli elementi</button></strong> raccoglie e organizza gli elementi secondo regolarità nelle loro proprietà.<br><br><strong>Ogni casella corrisponde a un elemento</strong>. Selezionandola puoi leggerne il nome. Per alcuni trovi anche un’illustrazione del campione: la raccolta delle immagini crescerà nel tempo.",
              "cloze": [
                {
                  "before": "La casella He corrisponde ",
                  "options": [
                    "a due elementi chiamati H ed e",
                    "all’elemento elio"
                  ],
                  "answer": 1,
                  "after": ".",
                  "feedback": "Le due lettere formano un unico simbolo."
                }
              ],
              "chemView": "periodic"
            },
            {
              "title": "Mendeleev cercava un ordine",
              "html": "Nel 1869 <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"mendeleev\">Dmitrij Mendeleev</button></strong> organizzò gli elementi allora conosciuti confrontandone le proprietà. Lavorò anche con carte dedicate ai singoli elementi: spostarle aiutava a cercare somiglianze.<br><br>Lasciò dei posti vuoti e previde le proprietà di elementi ancora da scoprire. <strong>Le scoperte successive confermarono molte delle sue previsioni.</strong>",
              "chemView": "hall-mendeleev"
            },
            {
              "title": "L’ordine ha un significato",
              "html": "La tavola moderna si è sviluppata da quel lavoro. Le righe si chiamano <strong>periodi</strong>, le colonne <strong>gruppi</strong>. Elementi dello stesso gruppo hanno spesso comportamenti simili.<br><br>Il motivo di quest’ordine diventerà più chiaro quando studieremo l’interno degli atomi. <strong>La tavola si consulta: non serve impararla tutta a memoria.</strong>",
              "cloze": [
                {
                  "before": "La disposizione degli elementi nella tavola ",
                  "options": [
                    "segue regolarità nelle loro proprietà",
                    "è scelta a caso"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "La posizione delle caselle aiuta a riconoscere relazioni tra gli elementi."
                }
              ],
              "chemView": "periodic"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Qual è il simbolo dell’elio scritto correttamente?",
            "options": [
              "HE",
              "he",
              "He",
              "hE"
            ],
            "answer": 2,
            "feedback": "La prima lettera è maiuscola e la seconda minuscola."
          },
          {
            "question": "Che cosa trovi in una casella della tavola periodica?",
            "options": [
              "Un elemento.",
              "Tutte le sostanze liquide.",
              "Un miscuglio.",
              "Un solo atomo reale."
            ],
            "answer": 0,
            "feedback": "La casella rappresenta un elemento, non un singolo atomo materiale."
          },
          {
            "question": "Che cosa rese particolarmente importante il lavoro di Mendeleev?",
            "options": [
              "Diede agli atomi i loro colori reali.",
              "Dimostrò che esistono solo tre elementi.",
              "Inventò la prima pallina del modello.",
              "Trovò regolarità e previde proprietà di elementi ancora sconosciuti."
            ],
            "answer": 3,
            "feedback": "La tavola permise anche previsioni verificabili, confermate da scoperte successive."
          }
        ]
      }
    },
    {
      "id": "in-pillole",
      "title": "Che cosa resta dell’idea di atomo?",
      "cards": [
        {
          "title": "Indivisibile? Non proprio",
          "board": "chem-today",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La scienza corregge i suoi modelli",
              "html": "Tra la fine dell’Ottocento e il Novecento nuove osservazioni mostrarono che <strong>anche l’atomo ha una struttura interna</strong>. L’ipotesi dell’indivisibilità non poteva più essere mantenuta.<br><br>Questo non rende inutile l’idea di atomo: una teoria può aprire la strada a una spiegazione più completa.",
              "cloze": [
                {
                  "before": "Quando nuove prove contraddicono un modello, la scienza ",
                  "options": [
                    "ignora le prove",
                    "lo corregge"
                  ],
                  "answer": 1,
                  "after": ".",
                  "feedback": "I modelli devono confrontarsi con le osservazioni."
                }
              ],
              "chemView": "today"
            },
            {
              "title": "Una definizione che ci accompagna",
              "html": "Un <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"atomo\">atomo</button></strong> è <strong>la più piccola unità che conserva l’identità chimica di un elemento</strong>.<br><br>Non significa che un singolo atomo possieda tutte le proprietà del materiale: per esempio, la durezza della grafite riguarda l’insieme degli atomi e la loro organizzazione.<br><br><strong>Che cosa c’è dentro un atomo?</strong> Sarà il punto di partenza della prossima lezione.",
              "chemView": "today",
              "cloze": [
                {
                  "before": "Un atomo conserva l’identità dell’elemento, ma ",
                  "options": [
                    "non tutte le proprietà del materiale",
                    "sempre tutte le proprietà del materiale"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "Durezza e altre proprietà macroscopiche dipendono dall’insieme degli atomi e dalla loro organizzazione."
                }
              ]
            }
          ]
        },
        {
          "title": "La lezione in pillole",
          "board": "chem-simple-substances",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Dalle carte ai nomi",
              "html": "<strong>Atomi:</strong> sono le piccolissime unità rappresentate dalle palline. I colori sono una nostra convenzione.<br><br><strong>Elemento:</strong> identifica un tipo di atomi. Una <strong>sostanza semplice</strong> contiene soltanto atomi di quel tipo, separati o uniti.<br><br><strong>Struttura:</strong> gli atomi possono stare da soli, in piccoli gruppi o in strutture estese.",
              "chemView": "simple-substances"
            },
            {
              "title": "Un’idea che si sviluppa",
              "html": "<strong>Leucippo e Democrito:</strong> immaginarono particelle indivisibili.<br><br><strong>Dalton:</strong> costruì una teoria atomica per spiegare risultati sperimentali e combinazioni tra atomi.<br><br><strong>Simboli e tavola periodica:</strong> ci permettono di indicare e organizzare i 118 elementi riconosciuti.<br><br><strong>L’atomo ha una struttura interna:</strong> la scopriremo nella prossima lezione.",
              "chemView": "simple-substances"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa conserva l’atomo di un elemento?",
            "options": [
              "Tutte le proprietà di un pezzo del materiale.",
              "L’identità chimica dell’elemento.",
              "La forma del contenitore.",
              "Il colore della pallina del modello."
            ],
            "answer": 1,
            "feedback": "Identità dell’elemento e proprietà del materiale non sono la stessa cosa."
          },
          {
            "question": "Quale frase distingue correttamente atomo e sostanza semplice?",
            "options": [
              "La sostanza semplice è sempre un singolo atomo.",
              "Una sostanza semplice contiene sempre atomi diversi.",
              "L’atomo è una particella; la sostanza semplice è formata da un solo tipo di atomi.",
              "L’atomo è visibile a occhio nudo; la sostanza semplice no."
            ],
            "answer": 2,
            "feedback": "Una sostanza semplice può contenere un numero enorme di atomi, ma tutti dello stesso elemento."
          },
          {
            "question": "Quale scoperta ha corretto una delle ipotesi storiche sugli atomi?",
            "options": [
              "L’atomo possiede una struttura interna.",
              "Ogni atomo ha un colore visibile.",
              "Gli elementi non possono avere simboli.",
              "La tavola periodica è ordinata a caso."
            ],
            "answer": 0,
            "feedback": "L’atomo non è indivisibile: questo sarà l’argomento della prossima lezione."
          }
        ]
      }
    }
  ]
};
