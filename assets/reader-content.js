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
                "html": "Studieremo il movimento <strong>senza studiarne le cause</strong>. Le cause, come le forze, saranno il tema della dinamica."
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
                "html": "Per descrivere un movimento dobbiamo scegliere rispetto a che cosa osservare la posizione del corpo e i suoi cambiamenti. Il <button type=\"button\" class=\"rm-keyword\" data-term=\"riferimento\">sistema di riferimento</button> ci permette di stabilire <strong>dove si trova il corpo e quando</strong>. Nell’esempio abbiamo scelto prima la stazione e poi il treno."
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
            "retainPrevious": true
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
                "html": "Su questa linea scegliamo un’<strong>origine</strong>, che sarà lo zero delle posizioni, e un <strong>verso positivo</strong> di percorrenza. Tra poco vedremo perché queste scelte ci permettono di indicare la posizione del corpo."
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
                "html": "Per misurare il tempo usiamo un <button type=\"button\" class=\"rm-keyword\" data-term=\"orologio\">orologio</button>; nel nostro laboratorio useremo un <strong>cronometro</strong>. La sua lettura assegna un valore <span class=\"rm-formula\">t</span> all’istante in cui osserviamo un evento. Possiamo scegliere <span class=\"rm-formula\">t = 0 s</span> quando iniziamo a osservare: non deve coincidere con l’inizio del movimento."
              }
            ]
          },
          {
            "title": "Gli intervalli di tempo",
            "steps": [
              {
                "title": "Un intervallo è una durata",
                "html": "Registra due letture con il pulsante superiore del cronometro. La prima è <span class=\"rm-formula\">t₁</span>, la seconda è <span class=\"rm-formula\">t₂</span>. La durata tra le osservazioni è <span class=\"rm-formula\">Δt = t₂ − t₁</span>."
              },
              {
                "title": "Il simbolo Δ",
                "html": "La lettera greca delta, <span class=\"rm-formula\">Δ</span>, indica qui una variazione: <strong>valore finale meno valore iniziale</strong>. Δt è la durata tra due istanti. Per esempio, da 2 s a 7 s passano 5 s."
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
                "title": "Il segno indica il verso rispetto all’origine",
                "html": "<span class=\"rm-formula\">s = −2 m</span> significa che il punto si trova a 2 m dall’origine, misurati lungo la traiettoria nel verso negativo. Il segno meno <strong>non indica da solo il verso del movimento</strong>."
              },
              {
                "title": "Posizione e distanza dall’origine",
                "html": "La distanza dall’origine <strong>misurata lungo questa traiettoria</strong> è <button type=\"button\" class=\"rm-keyword\" data-term=\"valore-assoluto\">|s|</button>. Le posizioni <span class=\"rm-formula\">+3 m</span> e <span class=\"rm-formula\">−3 m</span> sono diverse, ma si trovano entrambe a 3 m dall’origine lungo il percorso."
              }
            ],
            "board": "position"
          },
          {
            "title": "La legge oraria",
            "steps": [
              {
                "title": "Una posizione per ogni istante",
                "html": "A ogni istante <span class=\"rm-formula\">t</span> associamo la posizione <span class=\"rm-formula\">s</span> del punto materiale lungo la traiettoria. Questa relazione si chiama <button type=\"button\" class=\"rm-keyword\" data-term=\"legge-oraria\">legge oraria</button> e si scrive <span class=\"rm-formula\">s = s(t)</span>: la posizione è una <button type=\"button\" class=\"rm-keyword\" data-term=\"funzione\">funzione</button> del tempo. Studieremo i suoi grafici nelle lezioni sui singoli moti."
              },
              {
                "title": "Ricomponiamo il sistema di riferimento",
                "html": "Ora possiamo precisare come è fatto il nostro <button type=\"button\" class=\"rm-keyword\" data-term=\"riferimento\">sistema di riferimento</button>: un orologio per assegnare i tempi e un sistema di coordinate per individuare le posizioni. Sulla traiettoria nota abbiamo fissato origine, verso positivo e unità di misura."
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
                "html": "Lo <strong>spostamento lungo la traiettoria</strong> è la variazione dell’ascissa curvilinea: <span class=\"rm-formula\">Δs = s₂ − s₁</span>. Se parti da <span class=\"rm-formula\">s₁ = 1 m</span> e arrivi a <span class=\"rm-formula\">s₂ = 4 m</span>, ottieni <span class=\"rm-formula\">Δs = +3 m</span>."
              },
              {
                "title": "Il segno dello spostamento",
                "html": "Se parti da <span class=\"rm-formula\">s₁ = 1 m</span> e arrivi a <span class=\"rm-formula\">s₂ = −2 m</span>, ottieni <span class=\"rm-formula\">Δs = −3 m</span>. Nella lavagna la posizione iniziale resta a 1 m: sposta quella finale e osserva la differenza."
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
    ],
    "glossary": {
      "riferimento": {
        "title": "Sistema di riferimento",
        "text": "L’insieme degli strumenti e delle convenzioni con cui assegniamo una posizione e un tempo agli eventi. Comprende un sistema di coordinate e orologi. Nel nostro studio di una traiettoria nota scegliamo un’origine, un verso positivo e un’unità di lunghezza.",
        "kind": "Definizione di fisica"
      },
      "punto": {
        "title": "Punto materiale",
        "text": "Un modello che rappresenta un corpo con un punto dotato della massa del corpo. Ne trascuriamo forma e dimensioni quando non sono rilevanti per il fenomeno studiato. Lo stesso corpo può essere trattato come punto materiale per un problema e richiedere un modello diverso per un altro.",
        "kind": "Definizione di fisica"
      },
      "traiettoria": {
        "title": "Traiettoria",
        "text": "La linea descritta dalle posizioni occupate nel tempo dal punto materiale, rispetto al riferimento scelto. Può essere rettilinea o curva. Conoscerla non significa sapere con quale velocità il corpo la percorre.",
        "kind": "Definizione di fisica"
      },
      "orologio": {
        "title": "Orologio e cronometro",
        "text": "Un orologio misura il tempo contando le ripetizioni di un fenomeno periodico di durata nota. Un cronometro permette di leggere il tempo trascorso a partire da un avvio scelto. Due letture consentono di ricavare la durata tra due osservazioni.",
        "kind": "Definizione di fisica"
      },
      "ascissa": {
        "title": "Ascissa curvilinea",
        "text": "La coordinata s assegnata lungo una traiettoria orientata. A partire dall’origine misuriamo la lunghezza lungo la curva: il segno è positivo nel verso scelto e negativo nel verso opposto. Nel caso rettilineo coincide con una coordinata lungo l’asse. Su un circuito chiuso occorre anche tenere conto dei giri.",
        "kind": "Definizione di fisica"
      },
      "valore-assoluto": {
        "title": "Valore assoluto",
        "text": "Il valore assoluto di un numero è la sua distanza da zero sulla retta dei numeri: |3| = 3 e |−3| = 3. È sempre non negativo. Per la coordinata s, |s| dà la distanza dall’origine lungo la traiettoria; |s₂ − s₁| dà la lunghezza del tratto tra le due coordinate, senza inversioni di verso.",
        "kind": "Riprendi la matematica"
      },
      "funzione": {
        "title": "Funzione",
        "text": "Una funzione associa a ogni valore ammesso in ingresso un solo valore in uscita. Nella legge oraria l’ingresso è l’istante t e l’uscita è la posizione s. Istanti diversi possono avere la stessa posizione, per esempio se il corpo torna in un punto già visitato.",
        "kind": "Riprendi la matematica"
      },
      "legge-oraria": {
        "title": "Legge oraria",
        "text": "La relazione s = s(t) che assegna la posizione lungo la traiettoria a ogni istante di tempo. Può essere descritta con una formula, una tabella o un grafico. La sola traiettoria non basta a determinarla.",
        "kind": "Definizione di fisica"
      },
      "periodo": {
        "title": "Periodo",
        "text": "La durata di una ripetizione completa di un fenomeno periodico. Per il trenino a velocità costante è il tempo tra due passaggi consecutivi nello stesso punto, nello stesso verso. Si misura in secondi.",
        "kind": "Definizione di fisica"
      }
    }
  }
};
