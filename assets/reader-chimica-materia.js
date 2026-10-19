window.READER_LESSONS["chimica-materia"] = {
  "title": "La materia",
  "subtitle": "Scuole medie · Scienze · Chimica · In lavorazione",
  "version": 5,
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
      "title": "Atomi, elementi e teoria atomica",
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
              "title": "Gli elementi chimici",
              "html": "Gli atomi dello stesso tipo appartengono allo stesso <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"elemento-chimico\">elemento chimico</button></strong>. L’elio, l’ossigeno e il carbonio sono elementi diversi.<br><br><strong>Un atomo è una particella; l’elemento è il tipo a cui appartiene.</strong>",
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
            "question": "Le palline con cui rappresentiamo gli atomi sono:",
            "options": [
              "Fotografie ingrandite degli atomi.",
              "Modelli che ci aiutano a rappresentarli.",
              "Atomi visibili a occhio nudo.",
              "I colori reali delle particelle."
            ],
            "answer": 1,
            "feedback": "Gli atomi sono troppo piccoli per essere visti a occhio nudo: le palline sono un modello, non fotografie."
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
          "title": "Mendeleev: un ordine tra gli elementi",
          "board": "chem-hall-mendeleev",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Mendeleev cercava un ordine",
              "html": "Nel 1869 <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"mendeleev\">Dmitrij Mendeleev</button></strong> organizzò gli elementi allora conosciuti confrontandone le proprietà. Lavorò anche con carte dedicate ai singoli elementi: spostarle aiutava a cercare somiglianze.<br><br>Lasciò dei posti vuoti e previde le proprietà di elementi ancora da scoprire. <strong>Le scoperte successive confermarono molte delle sue previsioni.</strong>",
              "chemView": "hall-mendeleev"
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
              "html": "Oggi conosciamo <strong>118 elementi chimici</strong>, di cui <strong>94 presenti in natura</strong>.<br><br>La <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"tavola-periodica\">tavola periodica degli elementi</button></strong> raccoglie e organizza gli elementi secondo regolarità nelle loro proprietà. La tavola moderna si è sviluppata dal lavoro di Mendeleev e dai contributi successivi.<br><br><strong>Ogni casella corrisponde a un elemento</strong>. Selezionala per scoprirne il nome e, quando disponibile, vedere un’illustrazione del campione.",
              "chemView": "periodic"
            },
            {
              "title": "L’ordine ha un significato",
              "html": "Le righe si chiamano <button type=\"button\" class=\"ch-table-keyword\" data-ch-highlight=\"period\" aria-pressed=\"false\">periodi</button>, le colonne <button type=\"button\" class=\"ch-table-keyword\" data-ch-highlight=\"group\" aria-pressed=\"false\">gruppi</button>. Elementi dello stesso gruppo hanno spesso comportamenti simili.<br><br>Il motivo di quest’ordine diventerà più chiaro quando studieremo l’interno degli atomi. <strong>La tavola si consulta: non serve impararla tutta a memoria.</strong>",
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
              "html": "Un <strong><button type=\"button\" class=\"rm-keyword\" data-term=\"atomo\">atomo</button></strong> è <strong>la più piccola unità che conserva l’<button type=\"button\" class=\"rm-keyword\" data-term=\"identita-chimica\">identità chimica</button> di un elemento</strong>.<br><br>Non significa che un singolo atomo possieda tutte le proprietà del materiale: per esempio, la durezza dell’alluminio riguarda l’insieme degli atomi e la loro organizzazione.<br><br><strong>Che cosa c’è dentro un atomo?</strong> Sarà il punto di partenza della prossima lezione.",
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
        }
      ]
    },
    {
      "id": "lezione-in-pillole",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Dalle carte ai nomi",
              "html": "<strong>Atomi:</strong> sono le piccolissime particelle rappresentate dalle palline.<br><br><strong>Elemento chimico:</strong> identifica il tipo a cui appartiene un atomo.<br><br><strong>Modelli:</strong> le palline e i loro colori ci aiutano a rappresentare e distinguere gli atomi; non sono fotografie.",
              "chemView": "atoms"
            },
            {
              "title": "Un’idea che si sviluppa",
              "html": "<strong>Leucippo e Democrito:</strong> immaginarono particelle indivisibili.<br><br><strong>Dalton:</strong> costruì una teoria atomica per spiegare risultati sperimentali e combinazioni tra atomi.<br><br><strong>Simboli e tavola periodica:</strong> ci permettono di indicare e organizzare i 118 elementi riconosciuti.<br><br><strong>L’atomo ha una struttura interna:</strong> la scopriremo nella prossima lezione.",
              "chemView": "atoms"
            }
          ],
          "visualLayout": "closing",
          "illustration": {
            "src": "assets/images/reader/chemistry/red-morgana-carte-finale.webp",
            "alt": "Red e Morgana tornano alle carte della materia nel cortile della scuola, osservando insieme i campioni e i modelli dopo la partita.",
            "width": 1536,
            "height": 1024
          }
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
            "question": "Quale frase distingue correttamente atomo ed elemento?",
            "options": [
              "L’atomo è una particella; l’elemento identifica il tipo di atomi.",
              "Un elemento è sempre una coppia di atomi.",
              "Ogni atomo di alluminio appartiene a un elemento diverso.",
              "Atomo ed elemento indicano entrambi lo stato solido, liquido o gassoso."
            ],
            "answer": 0,
            "feedback": "Due atomi di ossigeno sono due particelle dello stesso elemento."
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
