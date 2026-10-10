window.READER_LESSONS = {
  "cinematica-introduzione": {
    "title": "Introduzione alla cinematica scalare",
    "subtitle": "Biennio · Meccanica · Cinematica scalare",
    "version": 2,
    "sections": [
      {
        "id": "inizio",
        "title": "Prima di partire",
        "cards": [
          {
            "title": "Benvenuta, benvenuto!",
            "steps": [
              {
                "title": "La prima lezione di cinematica scalare",
                "html": "Benvenuta, benvenuto nella prima lezione di cinematica scalare! Qui impareremo a <strong>descrivere il movimento</strong>: dove si trova un corpo e come cambia la sua posizione nel tempo."
              },
              {
                "title": "Che cosa studieremo",
                "html": "Ci concentreremo su come descrivere il movimento senza badare alle cause che lo determinano."
              }
            ]
          },
          {
            "title": "Il movimento dipende da chi osserva",
            "steps": [
              {
                "title": "Prima di partire",
                "html": "Immagina di viaggiare in treno, senza alzarti dal sedile. Completa le due descrizioni.",
                "interaction": "train-reference"
              },
              {
                "title": "Diamo un nome al riferimento",
                "html": "Per descrivere un movimento dobbiamo scegliere rispetto a che cosa osservare la posizione del corpo e i suoi cambiamenti. Il <button type=\"button\" class=\"rm-keyword\" data-term=\"riferimento\">sistema di riferimento</button> ci permette di stabilire <strong>dove si trova il corpo e quando</strong>. Nell’esempio abbiamo scelto prima la stazione e poi il treno.",
                "replace": true
              }
            ],
            "board": "train-reference"
          },
          {
            "title": "Un modello utile: il punto materiale",
            "steps": [
              {
                "title": "Semplifichiamo il corpo",
                "html": "Per descrivere il viaggio possiamo rappresentare il treno con un punto, se le sue dimensioni non sono importanti per ciò che vogliamo studiare. Questa rappresentazione semplificata del corpo si chiama <strong>modello del <button type=\"button\" class=\"rm-keyword\" data-term=\"punto\">punto materiale</button></strong>."
              }
            ],
            "retainPrevious": false,
            "collapsePrevious": true
          },
          {
            "title": "Una traiettoria che conosciamo",
            "steps": [
              {
                "title": "La nostra ipotesi",
                "html": "Nella cinematica scalare che studieremo, supponiamo di conoscere la <button type=\"button\" class=\"rm-keyword\" data-term=\"traiettoria\">traiettoria</button>, cioè la linea lungo cui si muove il punto materiale. Può essere <strong>rettilinea oppure curva</strong>."
              },
              {
                "title": "Due scelte sul percorso",
                "html": "Su questa linea scegliamo un’<strong>origine</strong> e un <strong>verso positivo</strong> di percorrenza. Tra poco vedremo come usare queste scelte per indicare la posizione del corpo."
              }
            ]
          }
        ],
        "quiz": {
          "question": "Una passeggera resta seduta su un treno in viaggio. Quale descrizione è corretta?",
          "options": [
            "È ferma rispetto al sedile e in movimento rispetto alla stazione.",
            "È ferma rispetto a qualsiasi riferimento.",
            "Il movimento non dipende dal riferimento."
          ],
          "answer": 0,
          "feedback": "Per descrivere il moto devi specificare il riferimento: sedile e stazione danno descrizioni diverse."
        }
      },
      {
        "id": "tempo",
        "title": "Tempo e intervalli",
        "cards": [
          {
            "title": "L’istante di tempo",
            "steps": [
              {
                "title": "Leggere il cronometro",
                "html": "Un <button type=\"button\" class=\"rm-keyword\" data-term=\"orologio\">orologio</button> permette di misurare il tempo. Il cronometro che useremo è uno strumento di questo tipo: la sua lettura assegna un <strong>valore numerico</strong> all’istante in cui osserviamo un evento. Indichiamo questo valore con <span class=\"rm-formula\">t</span>. Possiamo scegliere <span class=\"rm-formula\">t = 0 s</span> quando iniziamo a osservare: non deve coincidere con l’inizio del movimento."
              }
            ]
          },
          {
            "title": "Gli intervalli di tempo",
            "steps": [
              {
                "title": "Un intervallo è una durata",
                "html": "Un <strong>intervallo di tempo</strong> è la durata compresa tra due istanti. Se un evento inizia all’istante <span class=\"rm-formula\">t₁</span> e termina all’istante <span class=\"rm-formula\">t₂</span>, la sua durata è la differenza <span class=\"rm-formula\">Δt = t₂ − t₁</span>. Per esempio, tra <span class=\"rm-formula\">t₁ = 2 s</span> e <span class=\"rm-formula\">t₂ = 7 s</span> trascorrono <span class=\"rm-formula\">5 s</span>."
              },
              {
                "title": "Confrontare misure coerenti",
                "html": "Prima di sottrarre, esprimi i tempi nella stessa unità. Un minuto equivale a 60 secondi: da 30 s a 1 min trascorrono 30 s."
              },
              {
                "title": "Il cronometro può partire prima",
                "html": "Se la prima lettura è 4 s e la seconda è 9 s, la durata è 5 s. <strong>La prima lettura non deve essere zero.</strong> Prova a registrare un nuovo intervallo senza riavviare il cronometro."
              }
            ],
            "board": "stopwatch"
          }
        ],
        "quiz": {
          "type": "period-lab"
        }
      },
      {
        "id": "posizione",
        "title": "Spazio e posizione",
        "cards": [
          {
            "title": "Dove si trova il corpo?",
            "steps": [
              {
                "title": "Una sola coordinata",
                "html": "Conosciamo la traiettoria e abbiamo scelto un’origine e un verso positivo. Fissiamo anche l’unità di misura: il metro. Misurando <strong>lungo la traiettoria</strong> a partire dall’origine, possiamo individuare la posizione con un solo numero, anche quando la linea è curva."
              }
            ]
          },
          {
            "title": "La posizione lungo la traiettoria",
            "steps": [
              {
                "title": "Una posizione ha una coordinata",
                "html": "La coordinata <span class=\"rm-formula\">s</span>, chiamata <button type=\"button\" class=\"rm-keyword\" data-term=\"ascissa\">ascissa curvilinea</button>, indica la posizione lungo la traiettoria rispetto all’origine. Sposta il punto con il cursore: le posizioni possono assumere anche valori intermedi, come <span class=\"rm-formula\">1,84 m</span>."
              },
              {
                "title": "Il segno indica la posizione rispetto all’origine",
                "html": "<span class=\"rm-formula\">s = −2 m</span> significa che il punto si trova a 2 m dall’origine, lungo la traiettoria nel verso negativo. Il segno della posizione ci dice <strong>dove si trova il corpo</strong>: da lì può muoversi sia nel verso positivo sia nel verso negativo, oppure restare fermo."
              },
              {
                "title": "Posizione e distanza dall’origine",
                "html": "La distanza dall’origine <strong>misurata lungo questa traiettoria</strong> è <button type=\"button\" class=\"rm-keyword\" data-term=\"valore-assoluto\">|s|</button>. <span class=\"rm-position-example\" aria-live=\"polite\"></span>"
              }
            ],
            "board": "position"
          },
          {
            "title": "La legge oraria",
            "steps": [
              {
                "title": "Una posizione per ogni istante",
                "html": "La <button type=\"button\" class=\"rm-keyword\" data-term=\"legge-oraria\">legge oraria</button> descrive come cambia la posizione del punto materiale nel tempo. È una <button type=\"button\" class=\"rm-keyword\" data-term=\"funzione\">funzione</button> che associa a ogni istante <span class=\"rm-formula\">t</span> la corrispondente posizione <span class=\"rm-formula\">s</span> lungo la traiettoria. Si scrive <span class=\"rm-formula\">s = s(t)</span> e permette di sapere dove si trova il corpo all’istante considerato."
              }
            ]
          }
        ],
        "quiz": {
          "question": "La coordinata di un corpo è s = −4 m. Che cosa puoi concludere?",
          "options": [
            "Si muove nel verso negativo.",
            "Ha percorso 4 m.",
            "Si trova a 4 m dall’origine lungo la traiettoria, nel verso negativo."
          ],
          "answer": 2,
          "feedback": "La posizione dice dove si trova il corpo. Da una sola posizione non conosci né il verso del movimento né il percorso già compiuto."
        }
      },
      {
        "id": "spostamento",
        "title": "Spostamento e percorso",
        "cards": [
          {
            "title": "Confrontiamo due posizioni",
            "steps": [
              {
                "title": "La variazione della posizione",
                "html": "Lo <strong>spostamento lungo la traiettoria</strong> è la variazione dell’ascissa curvilinea: <span class=\"rm-formula\">Δs = s₂ − s₁</span>. <span class=\"rm-displacement-example\" aria-live=\"polite\"></span>"
              },
              {
                "title": "Il segno dello spostamento",
                "html": "<span class=\"rm-displacement-sign\" aria-live=\"polite\"></span> Sposta entrambe le posizioni con i cursori e osserva come cambia la differenza."
              }
            ],
            "board": "displacement"
          },
          {
            "title": "La distanza percorsa",
            "steps": [
              {
                "title": "La lunghezza del cammino",
                "html": "La distanza percorsa è la lunghezza del cammino effettivo ed è sempre non negativa. <strong>Se non cambi verso</strong>, vale <span class=\"rm-formula\">d = <button type=\"button\" class=\"rm-keyword\" data-term=\"valore-assoluto\">|Δs|</button></span>. Se cambi verso, sommi le lunghezze dei singoli tratti. Δs dipende soltanto dalle posizioni iniziale e finale."
              },
              {
                "title": "Andare e tornare",
                "html": "Parti da <span class=\"rm-formula\">s = 0 m</span>, raggiungi <span class=\"rm-formula\">s = 3 m</span> e torni a <span class=\"rm-formula\">s = 0 m</span>. La distanza percorsa è <span class=\"rm-formula\">|3 − 0| + |0 − 3| = 6 m</span>, mentre <span class=\"rm-formula\">Δs = 0 − 0 = 0 m</span>. Distanza percorsa e spostamento lungo la traiettoria descrivono due aspetti diversi."
              }
            ]
          },
          {
            "title": "Le basi per parlare di velocità",
            "steps": [
              {
                "title": "Pronti per il prossimo passo",
                "html": "Ora distinguiamo posizione, spostamento lungo la traiettoria, distanza percorsa e intervallo di tempo. Nella prossima lezione useremo variazione di posizione e durata per costruire la <strong>velocità media lungo la traiettoria</strong>."
              }
            ]
          }
        ],
        "quiz": {
          "question": "Vai da 0 m a 5 m e poi torni a 0 m. Quali sono spostamento totale e distanza percorsa?",
          "options": [
            "Spostamento 0 m; distanza 10 m.",
            "Spostamento 10 m; distanza 0 m.",
            "Entrambi 5 m."
          ],
          "answer": 0,
          "feedback": "Lo spostamento confronta partenza e arrivo: 0 − 0 = 0 m. La distanza somma andata e ritorno: 5 + 5 = 10 m."
        }
      }
    ]
  }
};
