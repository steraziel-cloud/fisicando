window.READER_LESSONS = {
  "cinematica-introduzione": {
    "title": "Introduzione alla cinematica",
    "subtitle": "Biennio · Cinematica scalare del punto materiale",
    "version": 1,
    "sections": [
      {
        "id": "inizio",
        "title": "Prima di partire",
        "steps": [
          {
            "title": "Il movimento dipende da chi osserva",
            "text": "Sei seduta su un treno in viaggio. Rispetto al sedile sei ferma; rispetto alla stazione ti muovi. Le due descrizioni possono essere entrambe corrette: cambia il riferimento.",
            "board": false
          },
          {
            "title": "La domanda della cinematica",
            "text": "La cinematica descrive il movimento: dove si trova un corpo e come cambia la sua posizione nel tempo. Le cause del movimento, come le forze, saranno il tema della dinamica.",
            "board": false
          },
          {
            "title": "Un modello utile: il punto materiale",
            "text": "Per descrivere il viaggio possiamo rappresentare il treno con un punto, se le sue dimensioni non sono importanti per la domanda che stiamo studiando. È una semplificazione del corpo, non l’affermazione che il corpo sia davvero privo di dimensioni.",
            "board": false
          },
          {
            "title": "Che cosa dobbiamo fissare",
            "text": "Servono un riferimento per indicare le posizioni e un orologio per associare un tempo alle osservazioni. Nel moto rettilineo useremo un asse con un’origine, un verso positivo e un’unità di misura.",
            "board": false
          },
          {
            "title": "Controlla l’idea",
            "text": "Dire soltanto “il corpo è fermo” lascia una domanda aperta: rispetto a che cosa?",
            "board": false
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
        "steps": [
          {
            "title": "Un istante è una lettura dell’orologio",
            "text": "L’istante t indica quando avviene un’osservazione. Possiamo scegliere t = 0 s nel momento in cui iniziamo a osservare: non deve coincidere con l’inizio del movimento.",
            "board": false
          },
          {
            "title": "Un intervallo è una durata",
            "text": "Se osserviamo il corpo a t₁ = 2 s e poi a t₂ = 7 s, tra le osservazioni passano 5 s. L’intervallo di tempo è Δt = t₂ − t₁.",
            "board": false
          },
          {
            "title": "Il simbolo Δ",
            "text": "La lettera greca delta, Δ, indica qui una variazione: valore finale meno valore iniziale. Δt non è un istante: è la durata tra due istanti.",
            "board": false
          },
          {
            "title": "Confrontare misure coerenti",
            "text": "Prima di sottrarre, esprimi i tempi nella stessa unità. Un minuto equivale a 60 secondi: da 30 s a 1 min trascorrono 30 s.",
            "board": false
          },
          {
            "title": "L’orologio può partire prima",
            "text": "Se la seconda osservazione è a 9 s e la prima a 4 s, la durata è 5 s, anche se l’orologio non segnava zero alla prima osservazione.",
            "board": false
          }
        ],
        "quiz": {
          "question": "Osservi il corpo a 3 s e a 8 s. Quanto dura l’intervallo?",
          "options": [
            "8 s",
            "5 s",
            "11 s"
          ],
          "answer": 1,
          "feedback": "La durata si calcola sottraendo l’istante iniziale da quello finale: 8 s − 3 s = 5 s."
        }
      },
      {
        "id": "posizione",
        "title": "Spazio e posizione",
        "steps": [
          {
            "title": "Dove si trova il corpo?",
            "text": "Per un movimento lungo una retta scegliamo un asse. L’origine ha coordinata zero; il verso positivo stabilisce da quale parte aumentano le coordinate.",
            "board": false
          },
          {
            "title": "Una posizione ha una coordinata",
            "text": "La coordinata x ci dice dove si trova il punto rispetto all’origine. Nella figura puoi spostarlo lungo l’asse: non stai ancora descrivendo una velocità.",
            "board": true
          },
          {
            "title": "Il segno indica un lato dell’origine",
            "text": "x = −2 m significa che il punto si trova a 2 m dall’origine nel verso negativo. Il segno meno non indica da solo che il punto si stia muovendo all’indietro.",
            "board": true
          },
          {
            "title": "La posizione cambia nel tempo",
            "text": "Scrivere x(t) significa associare una posizione a ogni istante. Un grafico posizione-tempo mostra questa relazione: l’asse del tempo del grafico non è una seconda direzione dello spazio.",
            "board": false
          },
          {
            "title": "Posizione e distanza dall’origine",
            "text": "Nel moto lungo questo asse, la distanza dall’origine è |x|. Le posizioni +3 m e −3 m sono diverse, ma hanno la stessa distanza dall’origine.",
            "board": false
          }
        ],
        "quiz": {
          "question": "La coordinata di un corpo è x = −4 m. Che cosa puoi concludere?",
          "options": [
            "Si muove nel verso negativo.",
            "Ha percorso 4 m.",
            "Si trova a 4 m dall’origine nel verso negativo."
          ],
          "answer": 2,
          "feedback": "La posizione dice dove si trova il corpo. Da una sola posizione non conosci né il verso del movimento né il percorso già compiuto."
        }
      },
      {
        "id": "spostamento",
        "title": "Spostamento e percorso",
        "steps": [
          {
            "title": "Confrontiamo due posizioni",
            "text": "Lo spostamento lungo l’asse è Δx = x₂ − x₁. Se parti da x₁ = 1 m e arrivi a x₂ = 4 m, lo spostamento è +3 m.",
            "board": false
          },
          {
            "title": "Il segno dello spostamento",
            "text": "Se parti da x₁ = 1 m e arrivi a x₂ = −2 m, lo spostamento è −3 m. Nella figura il punto iniziale resta fissato a 1 m: sposta quello finale e osserva Δx.",
            "board": true
          },
          {
            "title": "La distanza percorsa racconta il tragitto",
            "text": "La distanza percorsa è la lunghezza del cammino effettivo ed è sempre non negativa. Lo spostamento dipende soltanto dalle posizioni iniziale e finale.",
            "board": false
          },
          {
            "title": "Andare e tornare",
            "text": "Parti da 0 m, raggiungi 3 m e torni a 0 m. Hai percorso 6 m, ma lo spostamento totale è 0 m. Per questo distanza percorsa e spostamento non sono intercambiabili.",
            "board": false
          },
          {
            "title": "Le basi per parlare di velocità",
            "text": "Ora possiamo distinguere posizione, spostamento, distanza percorsa e intervallo di tempo. Nella prossima lezione useremo spostamento e durata per costruire la velocità media.",
            "board": false
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
