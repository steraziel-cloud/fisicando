/* Regia e animazione conservate per il futuro rinforzo della lettura dei grafici. Fuori dal percorso corrente. */
window.READER_LESSONS["cinematica-lettura-grafici-corsa"] = {
  "title": "Leggere i grafici: la corsa",
  "subtitle": "Bozza conservata · Da sviluppare dopo moto uniforme e uniformemente accelerato",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "cambiamento",
      "title": "Quando cambia la velocità",
      "cards": [
        {
          "title": "Gli ultimi cento metri",
          "stepMode": "replace",
          "illustration": {
            "src": "assets/images/reader/kinematics/ultimi-cento-metri.webp",
            "alt": "Red e Morgana quasi alla pari corrono verso il traguardo del campo sportivo della scuola; Bjorne li segue sorridendo.",
            "width": 1774,
            "height": 887
          },
          "steps": [
            {
              "title": "Una sfida fino al traguardo",
              "html": "Al campo sportivo della scuola, <strong>Red, Morgana e Bjorne si sfidano in una gara di corsa.</strong><br><br>La gara è già iniziata e <strong>mancano gli ultimi cento metri al traguardo.</strong> È qui che comincia la nostra osservazione.<br><br>Seguiamoli per capire <strong>come cambia la velocità durante il movimento.</strong>"
            }
          ]
        },
        {
          "title": "Tre moti, una nuova domanda",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La velocità non resta sempre uguale",
              "html": "Seguiamo la corsa per <strong>12 secondi</strong>. Scegliamo l’origine all’inizio degli ultimi cento metri e il verso positivo diretto al traguardo. Il cronometro parte mentre i gatti stanno già correndo.<br><br><strong>Bjorne mantiene la stessa velocità.</strong> Red prima aumenta il ritmo, poi comincia a rallentare. Morgana, invece, aumenta la propria velocità con regolarità.<br><br>Il grafico di <strong>vₛ(t)</strong> si traccia mentre i gatti avanzano: ogni punto indica la velocità di un gatto nell’istante osservato.",
              "cloze": [
                {
                  "before": "La curva orizzontale della velocità appartiene a ",
                  "options": [
                    "Red",
                    "Bjorne"
                  ],
                  "answer": 1,
                  "after": ".",
                  "feedback": "La velocità di Bjorne resta uguale mentre il tempo passa."
                }
              ]
            },
            {
              "title": "Quanto rapidamente cambia?",
              "html": "Nei primi <strong>2 secondi</strong>, la velocità di Red passa da <strong>5 a 7 m/s</strong>; quella di Morgana da <strong>5 a 6 m/s</strong>.<br><br>Entrambi aumentano la velocità, ma nello stesso intervallo Red la aumenta di più: <strong>2 m/s contro 1 m/s</strong>.<br><br>Non ci interessa soltanto quale velocità hanno. Ora chiediamoci: <strong>quanto rapidamente cambia la loro velocità?</strong>"
            },
            {
              "title": "L’accelerazione scalare",
              "html": "L’<button type=\"button\" class=\"rm-keyword\" data-term=\"ks-accelerazione\">accelerazione scalare</button> descrive <strong>quanto rapidamente cambia la velocità scalare nel tempo</strong>. La indichiamo con <strong>aₛ</strong>.<br><br>Bjorne ha accelerazione nulla: corre, ma la sua velocità non cambia. Red cambia accelerazione: nei primi 4 secondi la velocità aumenta regolarmente; poi diminuisce, ancora con regolarità, ma più lentamente. Morgana mantiene un’accelerazione costante: in intervalli di tempo uguali la sua velocità aumenta della stessa quantità.",
              "cloze": [
                {
                  "before": "Un’accelerazione nulla indica una velocità ",
                  "options": [
                    "costante",
                    "necessariamente nulla"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "Bjorne continua a correre anche se la sua accelerazione è nulla."
                }
              ]
            },
            {
              "title": "Misurare il cambiamento",
              "html": "Come per la posizione, confrontiamo due letture. La <strong>variazione della velocità scalare</strong> si ottiene sottraendo la velocità iniziale da quella finale:<span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>Δ</mi><msub><mi>v</mi><mi>s</mi></msub><mo>=</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>2</mn></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>1</mn></mrow></msub></mrow></math></span>Per Red, nei primi 2 secondi, otteniamo <strong>7 − 5 = 2 m/s</strong>.<br><br>La variazione, però, non basta: lo stesso aumento ottenuto in 2 secondi oppure in 10 secondi corrisponde a un cambiamento più o meno rapido. <strong>Dobbiamo tenere conto anche del tempo impiegato.</strong>"
            }
          ],
          "board": "acceleration-race"
        }
      ]
    }
  ],
  "nextLesson": {
    "id": "cinematica-mru"
  }
};
