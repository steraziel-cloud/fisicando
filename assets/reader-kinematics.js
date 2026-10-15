/* Convenzione editoriale: velocità e accelerazione scalari v_s e a_s. */
window.READER_LESSONS["cinematica-accelerazione"] = {
  "title": "L’accelerazione scalare",
  "subtitle": "Biennio e ripasso · Meccanica · Cinematica scalare · In lavorazione",
  "version": 2,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "cambiamento",
      "title": "Quando cambia la velocità",
      "cards": [
        {
          "title": "La velocità può cambiare",
          "board": "acceleration-class",
          "classScene": "observe",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Una macchinina sulla lavagna",
              "html": "Red e Bjorne osservano una macchinina disegnata sulla lavagna: <strong>può prendere velocità, rallentare oppure procedere sempre alla stessa velocità.</strong><br><br>La velocità scalare vₛ ci dice quanto rapidamente cambia la posizione lungo la traiettoria orientata. Per descrivere <strong>quanto rapidamente cambia la velocità stessa</strong> usiamo un’altra grandezza: l’<button type=\"button\" class=\"rm-keyword\" data-term=\"ks-accelerazione\">accelerazione scalare</button>, indicata con <strong>aₛ</strong>."
            },
            {
              "title": "Che cosa osserviamo?",
              "html": "Quando la macchinina passa da <strong>2 a 10 m/s</strong>, la sua velocità cambia. Se invece continua a muoversi a <strong>6 m/s</strong>, la velocità rimane costante.<br><br><strong>Muoversi non significa necessariamente accelerare.</strong> Nella lavagna puoi confrontare le tre situazioni.",
              "cloze": [
                {
                  "before": "Se la velocità rimane costante, l’accelerazione è ",
                  "options": [
                    "nulla",
                    "sempre positiva"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "La posizione cambia, ma la velocità resta la stessa."
                }
              ]
            }
          ]
        },
        {
          "title": "La variazione non basta",
          "board": "acceleration-class",
          "classScene": "compare",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La stessa variazione, tempi diversi",
              "html": "La velocità aumenta da <strong>2 a 10 m/s</strong>: la variazione è <strong>10 − 2 = 8 m/s</strong>.<br><br>Questo aumento può avvenire in <strong>4 secondi</strong> oppure in <strong>8 secondi</strong>. La variazione è la stessa, ma nel primo caso la velocità cambia più rapidamente.<br><br>Per misurare questo cambiamento dobbiamo mettere in relazione <strong>la variazione della velocità e il tempo impiegato</strong>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale cambiamento descrive l’accelerazione scalare?",
            "options": [
              "Il cambiamento della velocità scalare nel tempo.",
              "Il cambiamento della posizione nel tempo.",
              "La distanza totale percorsa.",
              "La velocità più alta raggiunta."
            ],
            "answer": 0,
            "feedback": "La velocità descrive il cambiamento della posizione; l’accelerazione descrive il cambiamento della velocità."
          },
          {
            "question": "Una macchinina procede sempre a 6 m/s. La sua accelerazione è…",
            "options": [
              "6 m/s², perché si muove.",
              "Positiva, perché la velocità è positiva.",
              "Nulla, perché la velocità non cambia.",
              "Impossibile da determinare, anche sapendo che la velocità è costante."
            ],
            "answer": 2,
            "feedback": "Essere in movimento e cambiare velocità sono due cose diverse."
          },
          {
            "question": "La stessa variazione di velocità avviene in 4 s oppure in 8 s. In quale caso il cambiamento medio è più rapido?",
            "options": [
              "In 8 s.",
              "In 4 s.",
              "È uguale, perché la variazione è uguale.",
              "Dipende soltanto dalla posizione iniziale."
            ],
            "answer": 1,
            "feedback": "A parità di variazione della velocità, un tempo minore corrisponde a un cambiamento medio più rapido."
          }
        ]
      }
    },
    {
      "id": "media",
      "title": "Calcolare e interpretare l’accelerazione",
      "cards": [
        {
          "title": "L’accelerazione scalare media",
          "board": "acceleration-class",
          "classScene": "mean",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La definizione",
              "html": "L’<button type=\"button\" class=\"rm-keyword\" data-term=\"ks-accelerazione-media\">accelerazione scalare media</button> è il <strong>rapporto fra la variazione della velocità scalare e l’intervallo di tempo in cui avviene</strong>:<span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>s</mi><mo>,</mo><mi>m</mi></mrow></msub><mo>=</mo><mfrac><mrow><mi>Δ</mi><msub><mi>v</mi><mi>s</mi></msub></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>2</mn></mrow></msub><mo>−</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>1</mn></mrow></msub></mrow><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>−</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></mfrac></mrow></math></span>Il simbolo <button type=\"button\" class=\"rm-keyword\" data-term=\"delta\">Δ</button> indica la differenza fra il valore finale e quello iniziale. Consideriamo un intervallo di durata positiva."
            },
            {
              "title": "Facciamo il calcolo",
              "html": "Tra <strong>t₁ = 0 s</strong> e <strong>t₂ = 4 s</strong>, la velocità passa da <strong>vₛ,₁ = 2 m/s</strong> a <strong>vₛ,₂ = 10 m/s</strong>.<br><br>Prima calcoliamo le due differenze: <strong>Δvₛ = 8 m/s</strong> e <strong>Δt = 4 s</strong>. Poi eseguiamo il rapporto:<span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>s</mi><mo>,</mo><mi>m</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>8</mn><mtext> m/s</mtext></mrow><mrow><mn>4</mn><mtext> s</mtext></mrow></mfrac><mo>=</mo><mn>2</mn><mtext> m/s²</mtext></mrow></math></span>La velocità è aumentata <strong>mediamente di 2 m/s per ogni secondo</strong>."
            }
          ]
        },
        {
          "title": "Che cosa significa m/s²?",
          "board": "acceleration-class",
          "classScene": "units",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Metri al secondo, per secondo",
              "html": "Dividiamo una variazione di velocità, espressa in <strong>m/s</strong>, per un tempo espresso in <strong>s</strong>. L’unità dell’accelerazione è quindi <strong>m/s²</strong>: metri al secondo per secondo.<br><br>Se l’accelerazione rimane costante a <strong>+2 m/s²</strong>, la velocità aumenta di <strong>2 m/s in ogni secondo</strong>. Partendo da 2 m/s, leggiamo 4, poi 6, poi 8, poi 10 m/s."
            },
            {
              "title": "La media guarda l’intero intervallo",
              "html": "Un’accelerazione <strong>media</strong> di +2 m/s², da sola, non garantisce un aumento uguale in ogni secondo: descrive il cambiamento complessivo nell’intervallo.<br><br>Per lo stesso motivo, se la velocità iniziale e quella finale coincidono, <strong>l’accelerazione media è zero</strong>. In mezzo, però, la velocità potrebbe essere cambiata. Per sapere che cosa accade in ogni istante ci serve l’accelerazione istantanea.",
              "classMode": "average"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "La velocità passa da 2 m/s a 10 m/s in 4 s. Qual è l’accelerazione media?",
            "options": [
              "8 m/s²",
              "2 m/s²",
              "3 m/s²",
              "0,5 m/s²"
            ],
            "answer": 1,
            "feedback": "La variazione è 10−2=8 m/s. Dividendo per 4 s otteniamo 2 m/s²."
          },
          {
            "question": "Un’accelerazione costante di +2 m/s² significa che…",
            "options": [
              "Il corpo percorre 2 m in ogni secondo.",
              "La velocità vale sempre 2 m/s.",
              "La velocità aumenta di 2 m/s in ogni secondo.",
              "La velocità raddoppia in ogni secondo."
            ],
            "answer": 2,
            "feedback": "m/s² esprime una variazione di velocità per unità di tempo."
          },
          {
            "question": "La velocità vale 2 m/s all’inizio e alla fine di un intervallo. Che cosa possiamo concludere?",
            "options": [
              "Il corpo è rimasto fermo.",
              "L’accelerazione è stata sempre nulla.",
              "La velocità è stata sempre 2 m/s.",
              "L’accelerazione media nell’intervallo è nulla."
            ],
            "answer": 3,
            "feedback": "La differenza fra le due velocità è zero. Questo non rivela tutti i cambiamenti avvenuti fra le due letture."
          }
        ]
      }
    },
    {
      "id": "istantanea",
      "title": "L’accelerazione in ogni istante",
      "cards": [
        {
          "title": "L’accelerazione istantanea e aₛ(t)",
          "board": "acceleration-class",
          "classScene": "instant",
          "stepMode": "replace",
          "steps": [
            {
              "title": "In un determinato istante",
              "html": "L’<button type=\"button\" class=\"rm-keyword\" data-term=\"ks-accelerazione-istantanea\">accelerazione scalare istantanea</button> descrive <strong>quanto rapidamente cambia la velocità scalare in un determinato istante</strong>.<br><br>Il passaggio dalla media all’istante segue l’idea già usata per la velocità: confrontiamo letture su intervalli sempre più brevi attorno all’istante che ci interessa.<br><br>Quando diciamo semplicemente «accelerazione» e la indichiamo con <strong>aₛ</strong>, ci riferiamo a quella istantanea."
            },
            {
              "title": "Una funzione del tempo",
              "html": "Associando a ogni istante t la sua accelerazione otteniamo una <button type=\"button\" class=\"rm-keyword\" data-term=\"funzione\">funzione</button>, che scriviamo <strong>aₛ(t)</strong> e leggiamo «a con pedice s di t».<br><br>Nel grafico mettiamo <strong>il tempo sull’asse orizzontale</strong> e <strong>l’accelerazione sull’asse verticale</strong>. L’altezza di un punto indica l’accelerazione in quell’istante.<br><br>In questa sequenza la macchinina prima prende velocità, poi la mantiene e infine rallenta.",
              "classMode": "graph",
              "cloze": [
                {
                  "before": "Nel grafico aₛ(t), all’istante t = 6 s l’accelerazione vale ",
                  "options": [
                    "−1 m/s²",
                    "4 m/s"
                  ],
                  "answer": 0,
                  "after": ".",
                  "feedback": "Si legge l’ordinata del grafico dell’accelerazione: a 6 s vale −1 m/s²."
                }
              ]
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Nel grafico aₛ(t), che cosa leggiamo sull’asse verticale?",
            "options": [
              "La posizione del corpo.",
              "La velocità scalare.",
              "L’accelerazione scalare.",
              "La distanza percorsa."
            ],
            "answer": 2,
            "feedback": "Il nome della funzione indica quale grandezza è associata al tempo."
          },
          {
            "question": "Osserva il grafico: quanto vale aₛ all’istante t = 2 s?",
            "options": [
              "2 m/s",
              "+2 m/s²",
              "0 m/s²",
              "−1 m/s²"
            ],
            "answer": 1,
            "feedback": "A 2 s il grafico si trova sul tratto di ordinata +2 m/s².",
            "illustration": {
              "src": "assets/images/reader/kinematics/classroom/a-tempo-schema.svg",
              "alt": "Accelerazione-tempo: +2 m/s² da 0 a 3 s; 0 da 3 a 5 s; −1 m/s² da 5 a 9 s.",
              "width": 600,
              "height": 310
            }
          },
          {
            "question": "Nel tratto fra 3 s e 5 s, l’accelerazione è zero. Che cosa possiamo dire della velocità in quel tratto?",
            "options": [
              "È sicuramente zero.",
              "Aumenta.",
              "Diminuisce.",
              "Rimane costante."
            ],
            "answer": 3,
            "feedback": "Un tratto di accelerazione nulla indica che la velocità non cambia: può essere diversa da zero.",
            "illustration": {
              "src": "assets/images/reader/kinematics/classroom/a-tempo-schema.svg",
              "alt": "Accelerazione-tempo: +2 m/s² da 0 a 3 s; 0 da 3 a 5 s; −1 m/s² da 5 a 9 s.",
              "width": 600,
              "height": 310
            }
          }
        ]
      }
    },
    {
      "id": "segno",
      "title": "Il segno e l’accelerazione nulla",
      "cards": [
        {
          "title": "Il segno dell’accelerazione",
          "board": "acceleration-class",
          "classScene": "sign",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Aumenta o diminuisce il valore della velocità?",
              "html": "Se <strong>aₛ è positiva</strong>, la velocità scalare aumenta; se <strong>aₛ è negativa</strong>, la velocità scalare diminuisce.<br><br>Nel verso positivo, passare da <strong>+2 a +6 m/s</strong> significa andare più rapidamente; passare da <strong>+6 a +2 m/s</strong> significa rallentare.<br><br>Ma la velocità può anche essere negativa. <strong>Per capire se il corpo acquista o perde rapidità, dobbiamo considerare entrambi i segni.</strong>"
            },
            {
              "title": "Quando il corpo va nel verso negativo",
              "html": "Passando da <strong>−6 a −2 m/s</strong>, il valore della velocità aumenta, ma la rapidità diminuisce: il corpo rallenta, pur avendo accelerazione positiva.<br><br>Passando da <strong>−2 a −6 m/s</strong>, invece, la velocità diventa più negativa e la rapidità aumenta.<br><br>Finché il corpo si muove: <strong>vₛ e aₛ dello stesso segno → aumenta la rapidità; di segno opposto → diminuisce la rapidità.</strong>",
              "classMode": "negative"
            }
          ]
        },
        {
          "title": "Accelerazione zero: possiamo ancora muoverci",
          "board": "acceleration-class",
          "classScene": "zero",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Il cambiamento è nullo",
              "html": "Se l’accelerazione resta <strong>nulla durante un intervallo</strong>, la velocità rimane costante.<br><br>La macchinina può essere ferma, con <strong>vₛ = 0</strong>, oppure continuare a muoversi, per esempio a <strong>6 m/s</strong>. In entrambi i casi l’accelerazione è zero.<br><br><strong>Accelerazione nulla non significa velocità nulla.</strong>"
            },
            {
              "title": "Attenzione a un solo istante",
              "html": "Sapere che <strong>aₛ = 0 in un singolo istante</strong> non basta per dire che la velocità sia costante prima e dopo.<br><br>Allo stesso modo, un corpo può avere <strong>velocità nulla in un istante e accelerazione diversa da zero</strong>: per esempio nel momento in cui si ferma prima di invertire il verso. Non confondiamo il valore della velocità con il suo cambiamento."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "La velocità passa da −6 m/s a −2 m/s. L’accelerazione media è…",
            "options": [
              "Negativa e il corpo rallenta.",
              "Positiva e il corpo rallenta.",
              "Positiva e il corpo acquista rapidità.",
              "Nulla perché il verso non cambia."
            ],
            "answer": 1,
            "feedback": "Δvₛ=(−2)−(−6)=+4 m/s: l’accelerazione media è positiva. La rapidità scende da 6 a 2 m/s."
          },
          {
            "question": "Un corpo ha vₛ negativa e aₛ negativa. In quel tratto…",
            "options": [
              "Rallenta sempre.",
              "È fermo.",
              "Aumenta la propria rapidità.",
              "Si muove nel verso positivo."
            ],
            "answer": 2,
            "feedback": "La velocità diventa più negativa e il suo valore assoluto cresce."
          },
          {
            "question": "L’accelerazione è nulla per tutto un intervallo. La velocità…",
            "options": [
              "È sicuramente nulla.",
              "Resta costante, anche se diversa da zero.",
              "Deve essere positiva.",
              "Può cambiare liberamente."
            ],
            "answer": 1,
            "feedback": "L’assenza di variazione della velocità non impedisce al corpo di muoversi."
          },
          {
            "question": "In un istante vₛ = 0. Possiamo concludere che anche aₛ = 0?",
            "options": [
              "Sì, perché il corpo è momentaneamente fermo.",
              "Sì, ma solo se il tempo è positivo.",
              "No: in quell’istante il corpo potrebbe stare invertendo il verso.",
              "No, perché l’accelerazione deve essere sempre positiva."
            ],
            "answer": 2,
            "feedback": "Una velocità nulla in un istante non implica una variazione di velocità nulla."
          }
        ]
      }
    },
    {
      "id": "recap",
      "title": "In conclusione",
      "cards": [
        {
          "title": "Dobbiamo introdurre altre grandezze?",
          "board": "acceleration-class",
          "classScene": "closure",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La descrizione del moto",
              "html": "Se conosciamo la <strong>legge oraria s(t)</strong>, sappiamo dove si trova il corpo in ogni istante lungo la traiettoria: il moto è già descritto.<br><br>Velocità e accelerazione mettono in evidenza due aspetti di quella descrizione: <strong>come cambia la posizione</strong> e <strong>come cambia la velocità</strong>.<br><br>Potremmo misurare anche quanto rapidamente cambia l’accelerazione: è utile in alcuni problemi particolari. <strong>Per studiare i moti che affronteremo, però, queste grandezze ci bastano.</strong> Non occorre introdurne altre."
            }
          ]
        },
        {
          "title": "La lezione in pillole",
          "board": "acceleration-class",
          "classScene": "recap",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Che cosa misura:</strong> l’accelerazione scalare descrive quanto rapidamente cambia la velocità scalare.</li><li><strong>Come si calcola la media:</strong> differenza delle velocità divisa per il tempo trascorso, aₛ,ₘ = Δvₛ / Δt.</li><li><strong>Come si misura:</strong> in m/s², cioè metri al secondo per secondo.</li><li><strong>Come si interpreta il segno:</strong> aₛ positiva fa aumentare vₛ; aₛ negativa la fa diminuire. Per la rapidità, confronta anche il segno di vₛ.</li><li><strong>Accelerazione nulla:</strong> la velocità non cambia; il corpo può continuare a muoversi.</li><li><strong>Istante per istante:</strong> aₛ(t) associa al tempo l’accelerazione e si rappresenta con un grafico.</li></ul>"
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "La velocità passa da 10 m/s a 2 m/s in 4 s. Qual è l’accelerazione media?",
            "options": [
              "+2 m/s²",
              "−8 m/s²",
              "−2 m/s²",
              "+3 m/s²"
            ],
            "answer": 2,
            "feedback": "(2−10)/4=−2 m/s². L’ordine è sempre valore finale meno valore iniziale."
          },
          {
            "question": "Quale affermazione è corretta?",
            "options": [
              "Un’accelerazione negativa significa sempre rallentare.",
              "Per sapere se aumenta la rapidità bisogna confrontare i segni di velocità e accelerazione.",
              "Un’accelerazione nulla significa sempre essere fermi.",
              "Il grafico aₛ(t) mostra direttamente la posizione."
            ],
            "answer": 1,
            "feedback": "Segni uguali fanno aumentare la rapidità, segni opposti la fanno diminuire, finché il corpo si muove."
          },
          {
            "question": "Conosci soltanto l’accelerazione media in un intervallo. Conosci necessariamente l’accelerazione in ogni istante?",
            "options": [
              "Sì, la media vale in ogni istante.",
              "Sì, se la velocità iniziale è positiva.",
              "Sì, perché le due grandezze hanno la stessa unità.",
              "No: cambiamenti diversi possono produrre la stessa media."
            ],
            "answer": 3,
            "feedback": "L’accelerazione media sintetizza l’intero intervallo. La funzione aₛ(t) descrive ciò che accade istante per istante."
          }
        ]
      }
    }
  ],
  "nextLesson": {
    "id": "cinematica-mru"
  }
};window.READER_LESSONS["cinematica-mru"] = {
  "title": "Moto rettilineo uniforme",
  "subtitle": "Biennio e ripasso · Meccanica · Cinematica scalare · In lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "modello",
      "title": "Un moto semplice da riconoscere",
      "cards": [
        {
          "title": "Due parole, due condizioni",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Rettilineo e uniforme",
              "html": "Un moto è <button type=\"button\" class=\"rm-keyword\" data-term=\"ks-mru\">rettilineo uniforme</button> quando la traiettoria è una retta e la velocità rimane costante nel tempo.<br><br>«Rettilineo» descrive il percorso; «uniforme» descrive il modo in cui viene percorso. In intervalli di tempo uguali, il corpo compie spostamenti uguali."
            },
            {
              "title": "Costante non significa positiva",
              "html": "La velocità costante può essere positiva o negativa: il segno indica il verso lungo la retta orientata. Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>3</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math>, ogni secondo la coordinata diminuisce di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>.<br><br>Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, la posizione rimane costante: è il caso particolare della quiete. In tutti questi casi l’accelerazione è nulla, perché la velocità non cambia."
            }
          ]
        },
        {
          "title": "Dalla velocità allo spostamento",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La media coincide con l’istantanea",
              "html": "Poiché la velocità è sempre la stessa, la velocità media in qualunque intervallo coincide con quella istantanea. Da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mi>&#x00394;</mi><mi>s</mi><mo>&#x0002F;</mo><mi>&#x00394;</mi><mi>t</mi></mrow></math> ricaviamo <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>&#x00394;</mi><mi>s</mi><mo>&#x0003D;</mo><msub><mi>v</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>t</mi></mrow></math></span> Per esempio, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>3</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math>, in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math> lo spostamento è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>12</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>. Non è ancora la posizione finale: per trovarla serve anche la posizione iniziale."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quali condizioni definiscono un MRU?",
            "options": [
              "Traiettoria retta e velocità costante.",
              "Traiettoria qualunque e accelerazione positiva.",
              "Traiettoria retta e velocità crescente.",
              "Spostamento sempre nullo."
            ],
            "answer": 0,
            "feedback": "Rettilineo riguarda la traiettoria; uniforme significa velocità costante.",
            "feedbackByOption": [
              "Rettilineo riguarda la traiettoria; uniforme significa velocità costante.",
              "Rivedi la relazione fra le grandezze. Rettilineo riguarda la traiettoria; uniforme significa velocità costante.",
              "Rivedi la relazione fra le grandezze. Rettilineo riguarda la traiettoria; uniforme significa velocità costante.",
              "Rivedi la relazione fra le grandezze. Rettilineo riguarda la traiettoria; uniforme significa velocità costante."
            ]
          },
          {
            "question": "Con vₛ=−3 m/s, lo spostamento in 4 s è…",
            "options": [
              "+12 m",
              "−12 m",
              "−0,75 m",
              "+4 m"
            ],
            "answer": 1,
            "feedback": "Δs=vₛΔt=(−3)·4=−12 m.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Δs=vₛΔt=(−3)·4=−12 m.",
              "Δs=vₛΔt=(−3)·4=−12 m.",
              "Rivedi la relazione fra le grandezze. Δs=vₛΔt=(−3)·4=−12 m.",
              "Rivedi la relazione fra le grandezze. Δs=vₛΔt=(−3)·4=−12 m."
            ]
          },
          {
            "question": "Nel MRU l’accelerazione è nulla perché…",
            "options": [
              "La posizione è sempre zero.",
              "Il tempo non trascorre.",
              "La velocità non cambia.",
              "Il corpo non può muoversi nel verso negativo."
            ],
            "answer": 2,
            "feedback": "Accelerazione nulla significa assenza di variazioni della velocità.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Accelerazione nulla significa assenza di variazioni della velocità.",
              "Rivedi la relazione fra le grandezze. Accelerazione nulla significa assenza di variazioni della velocità.",
              "Accelerazione nulla significa assenza di variazioni della velocità.",
              "Rivedi la relazione fra le grandezze. Accelerazione nulla significa assenza di variazioni della velocità."
            ]
          }
        ]
      }
    },
    {
      "id": "legge",
      "title": "Costruiamo la legge oraria",
      "cards": [
        {
          "title": "Posizione iniziale più spostamento",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un istante iniziale qualunque",
              "html": "Se all’istante <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub></mrow></math> il corpo occupa la posizione <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>s</mi><mn>0</mn></msub></mrow></math>, dopo un tempo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x02212;</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> troviamo <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo>&#x02212;</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> La <button type=\"button\" class=\"rm-keyword\" data-term=\"legge-oraria\">legge oraria</button> associa così una posizione a ogni istante. <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>s</mi><mn>0</mn></msub></mrow></math> non deve essere zero: l’origine delle posizioni e l’istante iniziale sono due scelte distinte."
            },
            {
              "title": "La scrittura più frequente",
              "html": "Scegliendo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, la formula diventa <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mi>s</mi></msub><mi>t</mi></mrow></math></span> Il termine <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mi>t</mi></mrow></math> è lo spostamento dall’istante iniziale; sommando <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>s</mi><mn>0</mn></msub></mrow></math> otteniamo la posizione. Controllo: per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> ritroviamo proprio <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>s</mi><mn>0</mn></msub></mrow></math>."
            }
          ]
        },
        {
          "title": "Leggiamo un esempio",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Una retta nel grafico posizione-tempo",
              "html": "Il corpo parte da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>2</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math> con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>3</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math>. Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi></mrow></math> espresso in secondi e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi></mrow></math> in metri, la legge è <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>2</mn><mo>&#x0002B;</mo><mn>3</mn><mi>t</mi></mrow></math></span> A <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><mn>4</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math> si trova a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo>&#x0003D;</mo><mn>14</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>; lo spostamento è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>14</mn><mo>&#x02212;</mo><mn>2</mn><mo>&#x0003D;</mo><mn>12</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>. Il grafico di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> è una retta."
            },
            {
              "title": "Risalire al tempo",
              "html": "Per raggiungere <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo>&#x0003D;</mo><mn>11</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>, imponiamo <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>11</mn><mo>&#x0003D;</mo><mn>2</mn><mo>&#x0002B;</mo><mn>3</mn><mi>t</mi></mrow></math></span> Sottraiamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn></mrow></math>, poi dividiamo per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn></mrow></math>: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><mn>3</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math>. Abbiamo cercato <strong>quando</strong> il corpo occupa una posizione assegnata, usando la stessa legge oraria."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/kinematics/mru-posizione.svg?vₛ=2",
            "alt": "Grafico posizione-tempo di un MRU: retta che passa per (0 s,2 m) e (4 s,14 m).",
            "width": 640,
            "height": 400
          }
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Con s₀=2 m e vₛ=3 m/s, qual è la posizione dopo 4 s?",
            "options": [
              "12 m",
              "14 m",
              "5 m",
              "6 m"
            ],
            "answer": 1,
            "feedback": "s=s₀+vt=2+12=14 m; 12 m è soltanto lo spostamento.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. s=s₀+vt=2+12=14 m; 12 m è soltanto lo spostamento.",
              "s=s₀+vt=2+12=14 m; 12 m è soltanto lo spostamento.",
              "Rivedi la relazione fra le grandezze. s=s₀+vt=2+12=14 m; 12 m è soltanto lo spostamento.",
              "Rivedi la relazione fra le grandezze. s=s₀+vt=2+12=14 m; 12 m è soltanto lo spostamento."
            ]
          },
          {
            "question": "Quale formula usa un istante iniziale t₀ non necessariamente nullo?",
            "options": [
              "s=s₀+vt₀",
              "s=vₛ(t+t₀)",
              "s=s₀+vₛ(t−t₀)",
              "s=s₀+vₛ/t"
            ],
            "answer": 2,
            "feedback": "L’intervallo trascorso dall’istante iniziale è t−t₀.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. L’intervallo trascorso dall’istante iniziale è t−t₀.",
              "Rivedi la relazione fra le grandezze. L’intervallo trascorso dall’istante iniziale è t−t₀.",
              "L’intervallo trascorso dall’istante iniziale è t−t₀.",
              "Rivedi la relazione fra le grandezze. L’intervallo trascorso dall’istante iniziale è t−t₀."
            ]
          },
          {
            "question": "Per s(t)=2+3t, con s in metri e t in secondi, quando il corpo raggiunge s=11 m?",
            "options": [
              "3 s",
              "11 s",
              "9 s",
              "13/3 s"
            ],
            "answer": 0,
            "feedback": "11=2+3t implica 9=3t e quindi t=3 s.",
            "feedbackByOption": [
              "11=2+3t implica 9=3t e quindi t=3 s.",
              "Rivedi la relazione fra le grandezze. 11=2+3t implica 9=3t e quindi t=3 s.",
              "Rivedi la relazione fra le grandezze. 11=2+3t implica 9=3t e quindi t=3 s.",
              "Rivedi la relazione fra le grandezze. 11=2+3t implica 9=3t e quindi t=3 s."
            ]
          }
        ]
      }
    },
    {
      "id": "grafici",
      "title": "Tre grafici dello stesso moto",
      "cards": [
        {
          "title": "La posizione e la velocità",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Intercetta e pendenza",
              "html": "Nel grafico posizione-tempo, il punto a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math> indica <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>s</mi><mn>0</mn></msub></mrow></math>. La pendenza della retta è la velocità: una retta crescente indica <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003E;</mo><mn>0</mn></mrow></math>, una decrescente <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003C;</mo><mn>0</mn></mrow></math>.<br><br>Una retta orizzontale nel grafico di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> indica la quiete. <strong>Una retta inclinata non è la traiettoria del corpo: è un grafico che mette in relazione posizione e tempo.</strong>"
            },
            {
              "title": "Una linea orizzontale in vₛ(t)",
              "html": "Nel grafico velocità-tempo del nostro esempio, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>3</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math> a ogni istante: la linea è orizzontale, anche se il corpo si muove.<br><br>La stessa forma orizzontale significa cose diverse in grafici diversi: <strong>in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> significa posizione costante; in <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> significa velocità costante.</strong>"
            }
          ],
          "illustration": {
            "src": "assets/images/reader/kinematics/mru-velocita.svg?vₛ=2",
            "alt": "Grafico velocità-tempo: linea orizzontale a 3 m/s da zero a quattro secondi.",
            "width": 640,
            "height": 400
          }
        },
        {
          "title": "Dall’area allo spostamento",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un rettangolo da interpretare",
              "html": "Nel grafico <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>, fra due istanti la regione fra la linea e l’asse del tempo è un rettangolo: base <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00394;</mi><mi>t</mi></mrow></math>, altezza <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub></mrow></math>. Il prodotto <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>t</mi></mrow></math> restituisce lo spostamento.<br><br>Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003C;</mo><mn>0</mn></mrow></math>, lo spostamento è negativo: l’area geometrica è positiva, ma il contributo sotto l’asse si considera <strong>con segno meno</strong>. Nel MRU la distanza percorsa è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x0007C;</mo><mi>&#x00394;</mi><mi>t</mi></mrow></math>. Il grafico di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> è invece la linea <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Una linea orizzontale a vₛ=3 m/s nel grafico vₛ(t) indica…",
            "options": [
              "Un corpo fermo.",
              "Velocità costante e moto nel verso positivo.",
              "Accelerazione uguale a 3 m/s².",
              "Posizione costante uguale a 3 m."
            ],
            "answer": 1,
            "feedback": "L’asse verticale riporta la velocità: il valore 3 m/s resta costante.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. L’asse verticale riporta la velocità: il valore 3 m/s resta costante.",
              "L’asse verticale riporta la velocità: il valore 3 m/s resta costante.",
              "Rivedi la relazione fra le grandezze. L’asse verticale riporta la velocità: il valore 3 m/s resta costante.",
              "Rivedi la relazione fra le grandezze. L’asse verticale riporta la velocità: il valore 3 m/s resta costante."
            ],
            "illustration": {
              "src": "assets/images/reader/kinematics/mru-velocita.svg?vₛ=2",
              "alt": "Grafico velocità-tempo: linea orizzontale a 3 m/s da zero a quattro secondi.",
              "width": 640,
              "height": 400
            }
          },
          {
            "question": "Una retta decrescente nel grafico s(t) di un MRU indica…",
            "options": [
              "Velocità negativa.",
              "Velocità positiva e crescente.",
              "Accelerazione sempre negativa.",
              "Tempo che scorre all’indietro."
            ],
            "answer": 0,
            "feedback": "La coordinata diminuisce mentre il tempo aumenta: vₛ è negativa e costante.",
            "feedbackByOption": [
              "La coordinata diminuisce mentre il tempo aumenta: vₛ è negativa e costante.",
              "Rivedi la relazione fra le grandezze. La coordinata diminuisce mentre il tempo aumenta: vₛ è negativa e costante.",
              "Rivedi la relazione fra le grandezze. La coordinata diminuisce mentre il tempo aumenta: vₛ è negativa e costante.",
              "Rivedi la relazione fra le grandezze. La coordinata diminuisce mentre il tempo aumenta: vₛ è negativa e costante."
            ]
          },
          {
            "question": "Con vₛ=−3 m/s per 4 s, distanza e spostamento sono…",
            "options": [
              "Entrambi −12 m.",
              "Entrambi +12 m.",
              "Distanza 12 m e spostamento −12 m.",
              "Distanza zero e spostamento −12 m."
            ],
            "answer": 2,
            "feedback": "La distanza è non negativa; lo spostamento conserva il segno della variazione della coordinata.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. La distanza è non negativa; lo spostamento conserva il segno della variazione della coordinata.",
              "Rivedi la relazione fra le grandezze. La distanza è non negativa; lo spostamento conserva il segno della variazione della coordinata.",
              "La distanza è non negativa; lo spostamento conserva il segno della variazione della coordinata.",
              "Rivedi la relazione fra le grandezze. La distanza è non negativa; lo spostamento conserva il segno della variazione della coordinata."
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
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>MRU:</strong> traiettoria retta e velocità costante.</li><li><strong>Spostamento:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00394;</mi><mi>s</mi><mo>&#x0003D;</mo><msub><mi>v</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>t</mi></mrow></math>.</li><li><strong>Legge oraria:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo>&#x02212;</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\">&#x00029;</mo></mrow></math>; se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mi>s</mi></msub><mi>t</mi></mrow></math>.</li><li><strong>s(t):</strong> una retta; la pendenza è la velocità.</li><li><strong>vₛ(t):</strong> una linea orizzontale; <strong>aₛ(t):</strong> zero.</li><li><strong>Prima identifica gli assi:</strong> la stessa forma grafica può rappresentare grandezze diverse.</li></ul>"
            }
          ]
        }
      ]
    }
  ],
  "nextLesson": {
    "id": "cinematica-mrua"
  }
};
window.READER_LESSONS["cinematica-mrua"] = {
  "title": "Moto rettilineo uniformemente accelerato",
  "subtitle": "Biennio e ripasso · Meccanica · Cinematica scalare · In lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "costante",
      "title": "Una variazione regolare della velocità",
      "cards": [
        {
          "title": "Che cosa rimane costante?",
          "stepMode": "replace",
          "steps": [
            {
              "title": "L’accelerazione, non la velocità",
              "html": "Il <button type=\"button\" class=\"rm-keyword\" data-term=\"ks-mrua\">moto rettilineo uniformemente accelerato</button> ha una traiettoria retta e un’accelerazione costante. In intervalli di tempo uguali, la velocità cambia della stessa quantità.<br><br>«Uniformemente accelerato» non significa necessariamente «sempre più rapido»: a seconda dei segni di velocità e accelerazione, il corpo può rallentare e poi invertire il verso."
            },
            {
              "title": "Dalla variazione alla velocità",
              "html": "Con accelerazione costante, la media coincide con l’istantanea. Dalla definizione ricaviamo <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>&#x00394;</mi><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><msub><mi>a</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>t</mi></mrow></math></span> Se all’istante <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub></mrow></math> la velocità è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub></mrow></math>, allora <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0002B;</mo><msub><mi>a</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo>&#x02212;</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> Scegliendo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math> otteniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0002B;</mo><msub><mi>a</mi><mi>s</mi></msub><mi>t</mi></mrow></math>."
            }
          ]
        },
        {
          "title": "Un esempio da seguire",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La velocità cresce in modo lineare",
              "html": "Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0003D;</mo><mn>2</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>2</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math>, ogni secondo la velocità aumenta di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math>: a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><mn>1</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math> vale <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math>, a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><mn>2</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math> vale <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>6</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math>.<br><br>Nel grafico <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> otteniamo una retta con pendenza <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub></mrow></math>. Il grafico <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> è una linea orizzontale al valore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>2</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math>."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/kinematics/accelerazione-positiva.svg?vₛ=2",
            "alt": "Grafico velocità-tempo: la velocità cresce linearmente da 2 m/s a t=0 a 10 m/s a t=4 s.",
            "width": 640,
            "height": 400
          }
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Nel MRUA quale grandezza è costante?",
            "options": [
              "La posizione.",
              "La velocità.",
              "L’accelerazione.",
              "Lo spostamento in ogni secondo."
            ],
            "answer": 2,
            "feedback": "La velocità varia, ma lo fa con accelerazione costante.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. La velocità varia, ma lo fa con accelerazione costante.",
              "Rivedi la relazione fra le grandezze. La velocità varia, ma lo fa con accelerazione costante.",
              "La velocità varia, ma lo fa con accelerazione costante.",
              "Rivedi la relazione fra le grandezze. La velocità varia, ma lo fa con accelerazione costante."
            ]
          },
          {
            "question": "Con vₛ₀=2 m/s e aₛ=2 m/s², quanto vale vₛ dopo 3 s?",
            "options": [
              "6 m/s",
              "8 m/s",
              "4 m/s",
              "2 m/s"
            ],
            "answer": 1,
            "feedback": "vₛ=vₛ₀+at=2+2·3=8 m/s.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. vₛ=vₛ₀+at=2+2·3=8 m/s.",
              "vₛ=vₛ₀+at=2+2·3=8 m/s.",
              "Rivedi la relazione fra le grandezze. vₛ=vₛ₀+at=2+2·3=8 m/s.",
              "Rivedi la relazione fra le grandezze. vₛ=vₛ₀+at=2+2·3=8 m/s."
            ]
          },
          {
            "question": "Un’accelerazione costante negativa implica sempre un rallentamento?",
            "options": [
              "Sì, il segno meno significa sempre frenata.",
              "No: con velocità negativa può aumentare la rapidità.",
              "No: la velocità non può cambiare.",
              "Sì, ma soltanto se la posizione è positiva."
            ],
            "answer": 1,
            "feedback": "Conta il confronto dei segni di vₛ e aₛₛ, non il solo segno di aₛ.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Conta il confronto dei segni di vₛ e aₛₛ, non il solo segno di aₛ.",
              "Conta il confronto dei segni di vₛ e aₛₛ, non il solo segno di aₛ.",
              "Rivedi la relazione fra le grandezze. Conta il confronto dei segni di vₛ e aₛₛ, non il solo segno di aₛ.",
              "Rivedi la relazione fra le grandezze. Conta il confronto dei segni di vₛ e aₛₛ, non il solo segno di aₛ."
            ]
          }
        ]
      }
    },
    {
      "id": "posizione",
      "title": "Dalla velocità alla posizione",
      "cards": [
        {
          "title": "Quanto si sposta il corpo?",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La velocità media nel MRUA",
              "html": "Con accelerazione costante, il grafico <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> è una retta. Se le due velocità sono positive, la regione fra il grafico e l’asse del tempo è un trapezio: il suo contributo è la media delle velocità alle estremità moltiplicata per la durata. Se compaiono velocità negative, consideriamo con segno meno le parti sotto l’asse.<br><br>La velocità media è quindi: <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mi>m</mi></mrow></msub><mo>&#x0003D;</mo><mfrac><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mi>s</mi></msub></mrow><mrow><mn>2</mn></mrow></mfrac></mrow></math></span> Poiché <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0002B;</mo><msub><mi>a</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>t</mi></mrow></math>, troviamo <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mi>m</mi></mrow></msub><mo>&#x0003D;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0002B;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>a</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>t</mi></mrow></math></span> Questa relazione vale <strong>per la variazione lineare della velocità</strong>; non è la formula generale della velocità media."
            },
            {
              "title": "La legge oraria",
              "html": "Nel grafico velocità-tempo, lo spostamento si ricava dal contributo con segno della regione fra il grafico e l’asse del tempo. Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub></mrow></math> lineare, il contributo iniziale <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mi>&#x00394;</mi><mi>t</mi></mrow></math> e quello dovuto alla variazione di velocità <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\">&#x00028;</mo><msub><mi>a</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mi>&#x00394;</mi><mi>t</mi></mrow></math> danno <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>&#x00394;</mi><mi>s</mi><mo>&#x0003D;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mi>&#x00394;</mi><mi>t</mi><mo>&#x0002B;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>a</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>&#x00394;</mi><mi>t</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math></span> Aggiungiamo la posizione iniziale: <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo>&#x02212;</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0002B;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>a</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo>&#x02212;</mo><msub><mi>t</mi><mn>0</mn></msub><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math></span> Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, la legge diventa <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mi>t</mi><mo>&#x0002B;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>a</mi><mi>s</mi></msub><msup><mi>t</mi><mn>2</mn></msup></mrow></math></span> Non serve partire da fermi: il termine <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mi>t</mi></mrow></math> tiene conto della velocità iniziale."
            }
          ]
        },
        {
          "title": "Tre contributi, una posizione",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un calcolo con significato",
              "html": "Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>1</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0003D;</mo><mn>2</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>2</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math>, dopo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>3</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math>: <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>s</mi><mo>&#x0003D;</mo><mn>1</mn><mo>&#x0002B;</mo><mn>2</mn><mo>&#x000B7;</mo><mn>3</mn><mo>&#x0002B;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&#x000B7;</mo><mn>2</mn><mo>&#x000B7;</mo><msup><mn>3</mn><mn>2</mn></msup><mo>&#x0003D;</mo><mn>16</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math></span> Il primo termine è la posizione iniziale; il secondo è il contributo della velocità iniziale; il terzo è il contributo dell’accelerazione. Lo spostamento è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>16</mn><mo>&#x02212;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>15</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>."
            },
            {
              "title": "Una curva nel grafico s(t)",
              "html": "Nel nostro esempio il grafico <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> è curvo: in tempi uguali gli spostamenti diventano sempre più grandi. La curva è una <button type=\"button\" class=\"rm-keyword\" data-term=\"ks-parabola\">parabola</button>.<br><br>La sua pendenza in ogni istante indica la velocità. <strong>La curva del grafico non è una traiettoria curva:</strong> il corpo continua a muoversi lungo una retta."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/kinematics/mrua-posizione.svg?vₛ=2",
            "alt": "Grafico posizione-tempo curvo del MRUA: s=1+2t+t². La pendenza aumenta nel tempo.",
            "width": 640,
            "height": 400
          }
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Con s₀=1 m, vₛ₀=2 m/s e aₛ=2 m/s², qual è la posizione dopo 3 s?",
            "options": [
              "15 m",
              "10 m",
              "16 m",
              "7 m"
            ],
            "answer": 2,
            "feedback": "s=1+2·3+(1/2)·2·9=16 m. 15 m è lo spostamento.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. s=1+2·3+(1/2)·2·9=16 m. 15 m è lo spostamento.",
              "Rivedi la relazione fra le grandezze. s=1+2·3+(1/2)·2·9=16 m. 15 m è lo spostamento.",
              "s=1+2·3+(1/2)·2·9=16 m. 15 m è lo spostamento.",
              "Rivedi la relazione fra le grandezze. s=1+2·3+(1/2)·2·9=16 m. 15 m è lo spostamento."
            ]
          },
          {
            "question": "Quando possiamo usare vₛₘ=(vₛ₀+vₛ)/2?",
            "options": [
              "Sempre, per qualunque variazione di vₛ.",
              "Quando la velocità varia linearmente nel tempo.",
              "Solo se vₛ₀=0.",
              "Solo se il corpo non si muove."
            ],
            "answer": 1,
            "feedback": "Nel MRUA la velocità varia linearmente; in un moto generico la media dei valori estremi non basta.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Nel MRUA la velocità varia linearmente; in un moto generico la media dei valori estremi non basta.",
              "Nel MRUA la velocità varia linearmente; in un moto generico la media dei valori estremi non basta.",
              "Rivedi la relazione fra le grandezze. Nel MRUA la velocità varia linearmente; in un moto generico la media dei valori estremi non basta.",
              "Rivedi la relazione fra le grandezze. Nel MRUA la velocità varia linearmente; in un moto generico la media dei valori estremi non basta."
            ]
          },
          {
            "question": "La parabola nel grafico s(t) di un MRUA rappresenta…",
            "options": [
              "La traiettoria curva nello spazio.",
              "La relazione fra posizione e tempo lungo una traiettoria retta.",
              "Un’accelerazione che cresce nel tempo.",
              "Una velocità sempre negativa."
            ],
            "answer": 1,
            "feedback": "Un asse riporta il tempo e l’altro la posizione: non è una mappa del percorso.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Un asse riporta il tempo e l’altro la posizione: non è una mappa del percorso.",
              "Un asse riporta il tempo e l’altro la posizione: non è una mappa del percorso.",
              "Rivedi la relazione fra le grandezze. Un asse riporta il tempo e l’altro la posizione: non è una mappa del percorso.",
              "Rivedi la relazione fra le grandezze. Un asse riporta il tempo e l’altro la posizione: non è una mappa del percorso."
            ],
            "illustration": {
              "src": "assets/images/reader/kinematics/mrua-posizione.svg?vₛ=2",
              "alt": "Grafico posizione-tempo curvo del MRUA: s=1+2t+t². La pendenza aumenta nel tempo.",
              "width": 640,
              "height": 400
            }
          }
        ]
      }
    },
    {
      "id": "inversione",
      "title": "Fermarsi e cambiare verso",
      "cards": [
        {
          "title": "Un’accelerazione costante può invertire il moto",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Prima rallenta, poi riparte",
              "html": "Consideriamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0003D;</mo><mn>6</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>2</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math>. Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>6</mn><mo>&#x02212;</mo><mn>2</mn><mi>t</mi></mrow></math></span> La velocità si annulla a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><mn>3</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math>. Prima di quell’istante è positiva e la rapidità diminuisce; dopo diventa negativa e la rapidità aumenta.<br><br>L’accelerazione rimane <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>2</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math> anche quando il corpo è momentaneamente fermo."
            },
            {
              "title": "Spostamento e distanza non coincidono sempre",
              "html": "Poniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>: <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>6</mn><mi>t</mi><mo>&#x02212;</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></math></span> A <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><mn>3</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math> il corpo è a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>9</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>; a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><mn>4</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math> è a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>8</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>. Lo spostamento complessivo è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>8</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>, ma la distanza percorsa è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>9</mn><mo>&#x0002B;</mo><mn>1</mn><mo>&#x0003D;</mo><mn>10</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>.<br><br>Quando il corpo inverte il verso, per trovare la distanza separiamo i tratti prima e dopo l’inversione e sommiamo le loro lunghezze."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Per vₛ(t)=6−2t, con vₛ in m/s e t in s, quando il corpo è momentaneamente fermo?",
            "options": [
              "2 s",
              "3 s",
              "6 s",
              "Mai."
            ],
            "answer": 1,
            "feedback": "Poniamo vₛ=0: 6−2t=0, quindi t=3 s.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Poniamo vₛ=0: 6−2t=0, quindi t=3 s.",
              "Poniamo vₛ=0: 6−2t=0, quindi t=3 s.",
              "Rivedi la relazione fra le grandezze. Poniamo vₛ=0: 6−2t=0, quindi t=3 s.",
              "Rivedi la relazione fra le grandezze. Poniamo vₛ=0: 6−2t=0, quindi t=3 s."
            ]
          },
          {
            "question": "Nell’istante in cui vₛ=0 nell’esempio precedente, aₛ vale…",
            "options": [
              "0 m/s²",
              "+2 m/s²",
              "−2 m/s²",
              "Non è definita."
            ],
            "answer": 2,
            "feedback": "L’accelerazione è costante per tutto il moto, anche all’inversione.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. L’accelerazione è costante per tutto il moto, anche all’inversione.",
              "Rivedi la relazione fra le grandezze. L’accelerazione è costante per tutto il moto, anche all’inversione.",
              "L’accelerazione è costante per tutto il moto, anche all’inversione.",
              "Rivedi la relazione fra le grandezze. L’accelerazione è costante per tutto il moto, anche all’inversione."
            ]
          },
          {
            "question": "Il corpo parte da s=0, raggiunge s=9 m e torna a s=8 m. Qual è la distanza percorsa?",
            "options": [
              "8 m",
              "9 m",
              "1 m",
              "10 m"
            ],
            "answer": 3,
            "feedback": "Ha percorso 9 m all’andata e 1 m al ritorno; lo spostamento invece è 8 m.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Ha percorso 9 m all’andata e 1 m al ritorno; lo spostamento invece è 8 m.",
              "Rivedi la relazione fra le grandezze. Ha percorso 9 m all’andata e 1 m al ritorno; lo spostamento invece è 8 m.",
              "Rivedi la relazione fra le grandezze. Ha percorso 9 m all’andata e 1 m al ritorno; lo spostamento invece è 8 m.",
              "Ha percorso 9 m all’andata e 1 m al ritorno; lo spostamento invece è 8 m."
            ]
          }
        ]
      }
    },
    {
      "id": "scelta",
      "title": "Scegliere la relazione utile",
      "cards": [
        {
          "title": "Se non compare il tempo",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Collegare velocità e spostamento",
              "html": "Con accelerazione costante possiamo eliminare il tempo dalle due leggi del moto e ottenere <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msup><msub><mi>v</mi><mi>s</mi></msub><mn>2</mn></msup><mo>&#x0003D;</mo><msubsup><msub><mi>v</mi><mi>s</mi></msub><mn>0</mn><mn>2</mn></msubsup><mo>&#x0002B;</mo><mn>2</mn><msub><mi>a</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>s</mi><mo>&#x02212;</mo><msub><mi>s</mi><mn>0</mn></msub><mo stretchy=\"false\">&#x00029;</mo></mrow></math></span> È utile quando conosciamo lo spostamento e vogliamo la velocità, o viceversa. È valida anche per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>; se però dividiamo per <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub></mrow></math> durante un calcolo, dobbiamo avere <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x02260;</mo><mn>0</mn></mrow></math>."
            },
            {
              "title": "Il quadrato perde il segno",
              "html": "Da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><msub><mi>v</mi><mi>s</mi></msub><mn>2</mn></msup></mrow></math> ricaviamo prima la rapidità <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo stretchy=\"false\">&#x0007C;</mo><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x0007C;</mo></mrow></math>. Per assegnare il segno a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub></mrow></math> dobbiamo sapere in quale verso si muove il corpo nell’istante cercato.<br><br>Per esempio, con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>2</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>&#x00394;</mi><mi>s</mi><mo>&#x0003D;</mo><mn>9</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>, troviamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><msub><mi>v</mi><mi>s</mi></msub><mn>2</mn></msup><mo>&#x0003D;</mo><mn>36</mn><mspace width=\"0.167em\" /><mrow><msup><mi mathvariant=\"normal\">m</mi><mn>2</mn></msup><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math>. Dopo la partenza il corpo si muove nel verso positivo, quindi <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mo>&#x0002B;</mo><mn>6</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math>."
            }
          ]
        },
        {
          "title": "Prima il modello, poi la formula",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Una scelta guidata dai dati",
              "html": "<strong>Serve la velocità dopo un tempo?</strong> Usa <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0002B;</mo><msub><mi>a</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>t</mi></mrow></math>.<br><strong>Serve la posizione dopo un tempo?</strong> Usa <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo>&#x0003D;</mo><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mi>&#x00394;</mi><mi>t</mi><mo>&#x0002B;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>a</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>&#x00394;</mi><mi>t</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math>.<br><strong>Tempo assente, ma spostamento noto?</strong> Valuta <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><msub><mi>v</mi><mi>s</mi></msub><mn>2</mn></msup><mo>&#x0003D;</mo><msubsup><msub><mi>v</mi><mi>s</mi></msub><mn>0</mn><mn>2</mn></msubsup><mo>&#x0002B;</mo><mn>2</mn><msub><mi>a</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>s</mi></mrow></math>.<br><br>Queste formule descrivono un’accelerazione costante. Se <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, ritroviamo le leggi del MRU. Se l’accelerazione varia, questo modello non descrive esattamente l’intero intervallo."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Con accelerazione costante, quale relazione collega vₛ e Δs senza il tempo?",
            "options": [
              "vₛ=vₛ₀+aΔs",
              "vₛ²=vₛ₀²+2aΔs",
              "s=s₀+vt²",
              "vₛ²=2a/Δs"
            ],
            "answer": 1,
            "feedback": "È la relazione ottenuta eliminando il tempo dalle leggi del MRUA.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. È la relazione ottenuta eliminando il tempo dalle leggi del MRUA.",
              "È la relazione ottenuta eliminando il tempo dalle leggi del MRUA.",
              "Rivedi la relazione fra le grandezze. È la relazione ottenuta eliminando il tempo dalle leggi del MRUA.",
              "Rivedi la relazione fra le grandezze. È la relazione ottenuta eliminando il tempo dalle leggi del MRUA."
            ]
          },
          {
            "question": "Dal solo risultato vₛ²=36 m²/s² possiamo concludere…",
            "options": [
              "Che vₛ è sempre +6 m/s.",
              "Che vₛ è sempre −6 m/s.",
              "Che la rapidità è 6 m/s; il verso determina il segno.",
              "Che l’accelerazione è 36 m/s²."
            ],
            "answer": 2,
            "feedback": "Il quadrato non distingue +6 da −6: serve l’informazione sul verso.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Il quadrato non distingue +6 da −6: serve l’informazione sul verso.",
              "Rivedi la relazione fra le grandezze. Il quadrato non distingue +6 da −6: serve l’informazione sul verso.",
              "Il quadrato non distingue +6 da −6: serve l’informazione sul verso.",
              "Rivedi la relazione fra le grandezze. Il quadrato non distingue +6 da −6: serve l’informazione sul verso."
            ]
          },
          {
            "question": "Ponendo aₛ=0 nelle leggi del MRUA, ritroviamo…",
            "options": [
              "Le leggi del MRU.",
              "Un moto necessariamente fermo.",
              "Una velocità crescente.",
              "Una posizione sempre nulla."
            ],
            "answer": 0,
            "feedback": "vₛ resta uguale a vₛ₀ e s=s₀+vₛ₀Δt: è il caso uniforme.",
            "feedbackByOption": [
              "vₛ resta uguale a vₛ₀ e s=s₀+vₛ₀Δt: è il caso uniforme.",
              "Rivedi la relazione fra le grandezze. vₛ resta uguale a vₛ₀ e s=s₀+vₛ₀Δt: è il caso uniforme.",
              "Rivedi la relazione fra le grandezze. vₛ resta uguale a vₛ₀ e s=s₀+vₛ₀Δt: è il caso uniforme.",
              "Rivedi la relazione fra le grandezze. vₛ resta uguale a vₛ₀ e s=s₀+vₛ₀Δt: è il caso uniforme."
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
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>MRUA:</strong> traiettoria retta e accelerazione costante.</li><li><strong>Velocità:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0002B;</mo><msub><mi>a</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>t</mi></mrow></math>.</li><li><strong>Posizione:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>s</mi><mo>&#x0003D;</mo><msub><mi>s</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mi>&#x00394;</mi><mi>t</mi><mo>&#x0002B;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>a</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>&#x00394;</mi><mi>t</mi><msup><mo stretchy=\"false\">&#x00029;</mo><mn>2</mn></msup></mrow></math>.</li><li><strong>Senza il tempo:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><msub><mi>v</mi><mi>s</mi></msub><mn>2</mn></msup><mo>&#x0003D;</mo><msubsup><msub><mi>v</mi><mi>s</mi></msub><mn>0</mn><mn>2</mn></msubsup><mo>&#x0002B;</mo><mn>2</mn><msub><mi>a</mi><mi>s</mi></msub><mi>&#x00394;</mi><mi>s</mi></mrow></math>; il quadrato non determina il verso.</li><li><strong>Un arresto può essere momentaneo:</strong> vₛ può annullarsi mentre aₛ resta diversa da zero.</li><li><strong>Se cambia il verso:</strong> separa i tratti per calcolare la distanza percorsa.</li></ul>"
            }
          ]
        }
      ]
    }
  ],
  "nextLesson": {
    "id": "cinematica-caduta"
  }
};
window.READER_LESSONS["cinematica-caduta"] = {
  "title": "Caduta libera e lancio verticale",
  "subtitle": "Biennio e ripasso · Meccanica · Cinematica scalare · In lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "modello",
      "title": "La gravità come accelerazione costante",
      "cards": [
        {
          "title": "Un modello da dichiarare",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Che cosa trascuriamo",
              "html": "Un corpo è in <button type=\"button\" class=\"rm-keyword\" data-term=\"ks-caduta-libera\">caduta libera</button> quando, nel modello considerato, agisce soltanto la gravità. Vicino alla superficie terrestre e su dislivelli piccoli rispetto al raggio della Terra, trattiamo l’accelerazione gravitazionale come costante.<br><br>Trascuriamo la resistenza dell’aria. Non stiamo dicendo che l’aria non esiste: scegliamo un modello adatto quando il suo effetto è piccolo."
            },
            {
              "title": "La stessa accelerazione per corpi diversi",
              "html": "In questo modello, corpi con masse diverse hanno la stessa accelerazione gravitazionale. A parità di condizioni iniziali, il loro moto è uguale.<br><br>Il valore <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi></mrow></math> indica il modulo dell’accelerazione gravitazionale: vicino alla superficie terrestre usiamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo>&#x02243;</mo><mn>9</mn><mrow><mo>&#x0002C;</mo></mrow><mn>8</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math>. In alcuni esercizi si approssima a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>10</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math>: dichiariamo sempre quale valore usiamo."
            }
          ]
        },
        {
          "title": "Scegliamo il riferimento",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Verso l’alto positivo",
              "html": "Indichiamo la coordinata verticale con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi></mrow></math> e scegliamo il verso positivo verso l’alto. La gravità è diretta verso il basso, quindi <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>g</mi></mrow></math></span> Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, le leggi del MRUA diventano <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x02212;</mo><mi>g</mi><mi>t</mi></mrow></math></span> <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><msub><mi>y</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mi>t</mi><mo>&#x02212;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math></span> Se scegliessimo positivo verso il basso, cambierebbero i segni nelle formule, ma non il fenomeno fisico."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale ipotesi usiamo nel modello di caduta libera di questa lezione?",
            "options": [
              "Trascuriamo la gravità.",
              "Trascuriamo la resistenza dell’aria.",
              "Ogni corpo mantiene velocità costante.",
              "Solo i corpi pesanti possono cadere."
            ],
            "answer": 1,
            "feedback": "Il moto è descritto sotto l’effetto della sola gravità, approssimata costante.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Il moto è descritto sotto l’effetto della sola gravità, approssimata costante.",
              "Il moto è descritto sotto l’effetto della sola gravità, approssimata costante.",
              "Rivedi la relazione fra le grandezze. Il moto è descritto sotto l’effetto della sola gravità, approssimata costante.",
              "Rivedi la relazione fra le grandezze. Il moto è descritto sotto l’effetto della sola gravità, approssimata costante."
            ]
          },
          {
            "question": "Con verso positivo verso l’alto, l’accelerazione gravitazionale è…",
            "options": [
              "+g",
              "0",
              "−g",
              "Uguale alla velocità iniziale."
            ],
            "answer": 2,
            "feedback": "La gravità è diretta verso il basso, opposto al verso positivo scelto.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. La gravità è diretta verso il basso, opposto al verso positivo scelto.",
              "Rivedi la relazione fra le grandezze. La gravità è diretta verso il basso, opposto al verso positivo scelto.",
              "La gravità è diretta verso il basso, opposto al verso positivo scelto.",
              "Rivedi la relazione fra le grandezze. La gravità è diretta verso il basso, opposto al verso positivo scelto."
            ]
          },
          {
            "question": "Due corpi di massa diversa cadono senza resistenza dell’aria dalle stesse condizioni iniziali. Il modello prevede…",
            "options": [
              "Accelerazione maggiore per quello più pesante.",
              "Accelerazione maggiore per quello più leggero.",
              "Accelerazioni nulle.",
              "La stessa accelerazione e lo stesso moto."
            ],
            "answer": 3,
            "feedback": "La massa non compare nelle leggi cinematiche della caduta libera.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. La massa non compare nelle leggi cinematiche della caduta libera.",
              "Rivedi la relazione fra le grandezze. La massa non compare nelle leggi cinematiche della caduta libera.",
              "Rivedi la relazione fra le grandezze. La massa non compare nelle leggi cinematiche della caduta libera.",
              "La massa non compare nelle leggi cinematiche della caduta libera."
            ]
          }
        ]
      }
    },
    {
      "id": "caduta",
      "title": "Lasciare cadere un corpo",
      "cards": [
        {
          "title": "Partire da fermi",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Velocità iniziale nulla",
              "html": "«Lasciato cadere» significa che il corpo parte da fermo rispetto al riferimento scelto: <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>. Ponendo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mi>h</mi></mrow></math> e il suolo a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, otteniamo <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>g</mi><mi>t</mi></mrow></math></span> <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mi>h</mi><mo>&#x02212;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math></span> Il corpo si muove verso il basso e la sua rapidità aumenta. Il tempo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi></mrow></math> è quello trascorso dal rilascio."
            },
            {
              "title": "Il tempo di caduta",
              "html": "Per trovare quando raggiunge il suolo imponiamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><mn>0</mn></mrow></math>: <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mn>0</mn><mo>&#x0003D;</mo><mi>h</mi><mo>&#x02212;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math></span> e quindi <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>t</mi><mo>&#x0003D;</mo><msqrt><mrow><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><mi>g</mi></mrow></mfrac></mrow></msqrt></mrow></math></span> Scegliamo la radice positiva, perché cerchiamo una durata dopo il rilascio. La formula presuppone <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>h</mi><mo>&#x0003E;</mo><mn>0</mn></mrow></math> e partenza da fermi."
            }
          ]
        },
        {
          "title": "Un esempio completo",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Altezza, durata, velocità",
              "html": "Un corpo viene lasciato cadere da <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>20</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>. Per questo esempio usiamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo>&#x0003D;</mo><mn>10</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math>: <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mi>t</mi><mo>&#x0003D;</mo><msqrt><mrow><mfrac><mrow><mn>2</mn><mo>&#x000B7;</mo><mn>20</mn></mrow><mrow><mn>10</mn></mrow></mfrac></mrow></msqrt><mo>&#x0003D;</mo><mn>2</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math></span> Subito prima di toccare il suolo, <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>g</mi><mi>t</mi><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>20</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math></span> Il segno meno indica il verso; la rapidità è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>20</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math>. Le formule valgono fino al contatto: l’urto non fa parte di questo modello."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "«Lasciato cadere da fermo» significa…",
            "options": [
              "y₀=0 sempre.",
              "vₛ₀=0 nel riferimento scelto.",
              "aₛ=0.",
              "Il corpo non può muoversi."
            ],
            "answer": 1,
            "feedback": "È la velocità iniziale a essere nulla, non necessariamente la posizione.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. È la velocità iniziale a essere nulla, non necessariamente la posizione.",
              "È la velocità iniziale a essere nulla, non necessariamente la posizione.",
              "Rivedi la relazione fra le grandezze. È la velocità iniziale a essere nulla, non necessariamente la posizione.",
              "Rivedi la relazione fra le grandezze. È la velocità iniziale a essere nulla, non necessariamente la posizione."
            ]
          },
          {
            "question": "Da 20 m, con g=10 m/s² e partenza da fermi, il tempo di caduta è…",
            "options": [
              "1 s",
              "2 s",
              "4 s",
              "20 s"
            ],
            "answer": 1,
            "feedback": "t=√(2h/g)=√4=2 s.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. t=√(2h/g)=√4=2 s.",
              "t=√(2h/g)=√4=2 s.",
              "Rivedi la relazione fra le grandezze. t=√(2h/g)=√4=2 s.",
              "Rivedi la relazione fra le grandezze. t=√(2h/g)=√4=2 s."
            ]
          },
          {
            "question": "Nell’esempio precedente, vₛ=−20 m/s subito prima dell’impatto significa…",
            "options": [
              "Rapidità negativa.",
              "Posizione −20 m.",
              "Movimento verso il basso con rapidità 20 m/s.",
              "Accelerazione −20 m/s²."
            ],
            "answer": 2,
            "feedback": "Il segno esprime il verso; il valore assoluto della velocità è la rapidità.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Il segno esprime il verso; il valore assoluto della velocità è la rapidità.",
              "Rivedi la relazione fra le grandezze. Il segno esprime il verso; il valore assoluto della velocità è la rapidità.",
              "Il segno esprime il verso; il valore assoluto della velocità è la rapidità.",
              "Rivedi la relazione fra le grandezze. Il segno esprime il verso; il valore assoluto della velocità è la rapidità."
            ]
          }
        ]
      }
    },
    {
      "id": "lancio",
      "title": "Lanciare un corpo verso l’alto",
      "cards": [
        {
          "title": "Salita e discesa, un solo moto",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La gravità non cambia verso",
              "html": "Con <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0003E;</mo><mn>0</mn></mrow></math>, il corpo sale mentre <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>g</mi></mrow></math>: velocità e accelerazione hanno segni opposti, quindi la rapidità diminuisce. Alla quota massima <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, ma <strong>l’accelerazione resta <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mi>g</mi></mrow></math></strong>.<br><br>Dopo quell’istante la velocità diventa negativa: il corpo scende e aumenta la propria rapidità. Non servono due accelerazioni diverse per descrivere salita e discesa."
            },
            {
              "title": "Tempo di salita e quota massima",
              "html": "Poniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math> nella legge della velocità: <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>t</mi><mrow><mrow><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">l</mi><mi mathvariant=\"normal\">i</mi><mi mathvariant=\"normal\">t</mi><mi mathvariant=\"normal\">a</mi></mrow></mrow></msub><mo>&#x0003D;</mo><mfrac><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub></mrow><mrow><mi>g</mi></mrow></mfrac></mrow></math></span> Sostituendo questo tempo nella legge oraria, <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>y</mi><mrow><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">x</mi></mrow></mrow></msub><mo>&#x0003D;</mo><msub><mi>y</mi><mn>0</mn></msub><mo>&#x0002B;</mo><mfrac><mrow><msubsup><msub><mi>v</mi><mi>s</mi></msub><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mn>2</mn><mi>g</mi></mrow></mfrac></mrow></math></span> Il termine <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msubsup><msub><mi>v</mi><mi>s</mi></msub><mn>0</mn><mn>2</mn></msubsup><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> è l’aumento di quota rispetto al punto di lancio, non sempre la quota rispetto al suolo. Queste formule si riferiscono a un lancio iniziale verso l’alto."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/kinematics/lancio-velocita.svg?vₛ=2",
            "alt": "Grafico velocità-tempo per un lancio verso l’alto con g approssimato a 10 m/s²: da +20 m/s a -20 m/s, passando per zero a t=2 s.",
            "width": 640,
            "height": 400
          }
        },
        {
          "title": "Un lancio numerico",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Venti metri al secondo verso l’alto",
              "html": "Poniamo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>&#x0003D;</mo><mn>0</mn></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x0003D;</mo><mn>20</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math> e <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>g</mi><mo>&#x0003D;</mo><mn>10</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math>. Il corpo raggiunge la quota massima dopo <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>20</mn><mo>&#x0002F;</mo><mn>10</mn><mo>&#x0003D;</mo><mn>2</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math>; l’aumento di quota è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msup><mn>20</mn><mn>2</mn></msup><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mo>&#x000B7;</mo><mn>10</mn><mo stretchy=\"false\">&#x00029;</mo><mo>&#x0003D;</mo><mn>20</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>.<br><br>Il grafico <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math> è una parabola: rappresenta la quota nel tempo. <strong>La traiettoria nello spazio è invece una retta verticale.</strong>"
            },
            {
              "title": "Tornare alla quota di partenza",
              "html": "Se il corpo può proseguire fino a tornare a <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>y</mi><mn>0</mn></msub></mrow></math>, il tempo totale è <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>t</mi><mrow><mrow><mi mathvariant=\"normal\">r</mi><mi mathvariant=\"normal\">i</mi><mi mathvariant=\"normal\">t</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">r</mi><mi mathvariant=\"normal\">n</mi><mi mathvariant=\"normal\">o</mi></mrow></mrow></msub><mo>&#x0003D;</mo><mfrac><mrow><mn>2</mn><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub></mrow><mrow><mi>g</mi></mrow></mfrac></mrow></math></span> Nel nostro esempio vale <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>4</mn><mspace width=\"0.167em\" /><mi>&#x00073;</mi></mrow></math>; la velocità al ritorno è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mo>&#x02212;</mo><mn>20</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><mi mathvariant=\"normal\">s</mi></mrow></mrow></math>.<br><br>Salita e ritorno alla stessa quota durano lo stesso tempo. Se il punto di arrivo è a una quota diversa, non usiamo automaticamente questa simmetria: imponiamo quella quota nella legge oraria."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/kinematics/lancio-posizione.svg?vₛ=2",
            "alt": "Grafico quota-tempo del lancio con y iniziale zero: sale fino a 20 m a t=2 s e torna a y=0 a t=4 s. Non rappresenta la traiettoria nello spazio.",
            "width": 640,
            "height": 400
          }
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Alla quota massima di un lancio verticale, velocità e accelerazione sono…",
            "options": [
              "Entrambe nulle.",
              "vₛ=0 e aₛ=−g, con verso positivo verso l’alto.",
              "vₛ=+g e aₛ=0.",
              "vₛ=0 e aₛ=+g."
            ],
            "answer": 1,
            "feedback": "La velocità è momentaneamente nulla, ma la gravità continua a cambiarla.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. La velocità è momentaneamente nulla, ma la gravità continua a cambiarla.",
              "La velocità è momentaneamente nulla, ma la gravità continua a cambiarla.",
              "Rivedi la relazione fra le grandezze. La velocità è momentaneamente nulla, ma la gravità continua a cambiarla.",
              "Rivedi la relazione fra le grandezze. La velocità è momentaneamente nulla, ma la gravità continua a cambiarla."
            ]
          },
          {
            "question": "Con vₛ₀=20 m/s e g=10 m/s², il tempo di salita è…",
            "options": [
              "4 s",
              "20 s",
              "2 s",
              "1 s"
            ],
            "answer": 2,
            "feedback": "t salita=vₛ₀/g=20/10=2 s.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. t salita=vₛ₀/g=20/10=2 s.",
              "Rivedi la relazione fra le grandezze. t salita=vₛ₀/g=20/10=2 s.",
              "t salita=vₛ₀/g=20/10=2 s.",
              "Rivedi la relazione fra le grandezze. t salita=vₛ₀/g=20/10=2 s."
            ]
          },
          {
            "question": "La parabola nel grafico y(t) del lancio indica…",
            "options": [
              "Una traiettoria parabolica nello spazio.",
              "La quota in funzione del tempo, lungo una traiettoria verticale.",
              "Che la gravità cambia verso alla sommità.",
              "Che la velocità è sempre positiva."
            ],
            "answer": 1,
            "feedback": "Gli assi sono tempo e quota: il grafico non è il disegno della traiettoria.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Gli assi sono tempo e quota: il grafico non è il disegno della traiettoria.",
              "Gli assi sono tempo e quota: il grafico non è il disegno della traiettoria.",
              "Rivedi la relazione fra le grandezze. Gli assi sono tempo e quota: il grafico non è il disegno della traiettoria.",
              "Rivedi la relazione fra le grandezze. Gli assi sono tempo e quota: il grafico non è il disegno della traiettoria."
            ],
            "illustration": {
              "src": "assets/images/reader/kinematics/lancio-posizione.svg?vₛ=2",
              "alt": "Grafico quota-tempo del lancio con y iniziale zero: sale fino a 20 m a t=2 s e torna a y=0 a t=4 s. Non rappresenta la traiettoria nello spazio.",
              "width": 640,
              "height": 400
            }
          }
        ]
      }
    },
    {
      "id": "lettura",
      "title": "Leggere i dati prima di calcolare",
      "cards": [
        {
          "title": "Una formula va interpretata",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Quota, verso e intervallo",
              "html": "Prima di sostituire i numeri, fissa l’origine delle quote e il verso positivo. Distingui la quota iniziale <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>y</mi><mn>0</mn></msub></mrow></math>, la velocità iniziale <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub></mrow></math> e l’istante da cui conti il tempo.<br><br>Per cercare un istante di arrivo, imponi la quota richiesta nella legge <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\">&#x00028;</mo><mi>t</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>. Se trovi più soluzioni, scegli quelle che appartengono al tratto fisico considerato: dopo il lancio e prima di eventuali urti."
            },
            {
              "title": "Distanza e spostamento nel lancio",
              "html": "Nell’esempio che sale di <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>20</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math> e torna alla quota di partenza, lo spostamento totale è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>0</mn></mrow></math>, ma la distanza percorsa è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mn>40</mn><mspace width=\"0.167em\" /><mi>&#x0006D;</mi></mrow></math>.<br><br>La velocità media sull’intero viaggio è zero, anche se il corpo si è mosso. L’accelerazione media, invece, è <span class=\"ks-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>s</mi><mo>,</mo><mi>m</mi></mrow></msub><mo>&#x0003D;</mo><mfrac><mrow><mo>&#x02212;</mo><mn>20</mn><mo>&#x02212;</mo><mn>20</mn></mrow><mrow><mn>4</mn></mrow></mfrac><mo>&#x0003D;</mo><mo>&#x02212;</mo><mn>10</mn><mspace width=\"0.167em\" /><mrow><mi mathvariant=\"normal\">m</mi><mo>&#x0002F;</mo><msup><mi mathvariant=\"normal\">s</mi><mn>2</mn></msup></mrow></mrow></math></span> Ritroviamo la stessa accelerazione gravitazionale costante."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Il corpo sale di 20 m e torna al punto di lancio. Distanza e spostamento sono…",
            "options": [
              "Entrambi zero.",
              "Distanza 20 m e spostamento zero.",
              "Distanza 40 m e spostamento zero.",
              "Distanza zero e spostamento 40 m."
            ],
            "answer": 2,
            "feedback": "Sommi le lunghezze dei due tratti per la distanza; le posizioni iniziale e finale coincidono.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Sommi le lunghezze dei due tratti per la distanza; le posizioni iniziale e finale coincidono.",
              "Rivedi la relazione fra le grandezze. Sommi le lunghezze dei due tratti per la distanza; le posizioni iniziale e finale coincidono.",
              "Sommi le lunghezze dei due tratti per la distanza; le posizioni iniziale e finale coincidono.",
              "Rivedi la relazione fra le grandezze. Sommi le lunghezze dei due tratti per la distanza; le posizioni iniziale e finale coincidono."
            ]
          },
          {
            "question": "Nel ritorno alla quota di partenza, la velocità media sull’intero viaggio è…",
            "options": [
              "Nulla, perché lo spostamento totale è nullo.",
              "Uguale a g.",
              "Uguale alla velocità iniziale.",
              "Sempre negativa."
            ],
            "answer": 0,
            "feedback": "La velocità media è spostamento diviso durata, non distanza divisa durata.",
            "feedbackByOption": [
              "La velocità media è spostamento diviso durata, non distanza divisa durata.",
              "Rivedi la relazione fra le grandezze. La velocità media è spostamento diviso durata, non distanza divisa durata.",
              "Rivedi la relazione fra le grandezze. La velocità media è spostamento diviso durata, non distanza divisa durata.",
              "Rivedi la relazione fra le grandezze. La velocità media è spostamento diviso durata, non distanza divisa durata."
            ]
          },
          {
            "question": "Nell’esempio, vₛ passa da +20 a −20 m/s in 4 s. L’accelerazione media vale…",
            "options": [
              "0 m/s²",
              "−5 m/s²",
              "+10 m/s²",
              "−10 m/s²"
            ],
            "answer": 3,
            "feedback": "Δvₛ=−20−20=−40 m/s; dividi per 4 s.",
            "feedbackByOption": [
              "Rivedi la relazione fra le grandezze. Δvₛ=−20−20=−40 m/s; dividi per 4 s.",
              "Rivedi la relazione fra le grandezze. Δvₛ=−20−20=−40 m/s; dividi per 4 s.",
              "Rivedi la relazione fra le grandezze. Δvₛ=−20−20=−40 m/s; dividi per 4 s.",
              "Δvₛ=−20−20=−40 m/s; dividi per 4 s."
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
          "title": "La lezione in pillole",
          "stepMode": "replace",
          "steps": [
            {
              "title": "",
              "html": "<ul><li><strong>Caduta libera:</strong> sola gravità nel modello; trascuriamo l’aria.</li><li><strong>Verso positivo in alto:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>a</mi><mi>s</mi></msub><mo>&#x0003D;</mo><mo>&#x02212;</mo><mi>g</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>&#x0003D;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mo>&#x02212;</mo><mi>g</mi><mi>t</mi></mrow></math>, <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>y</mi><mo>&#x0003D;</mo><msub><mi>y</mi><mn>0</mn></msub><mo>&#x0002B;</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>,</mo><mn>0</mn></mrow></msub><mi>t</mi><mo>&#x02212;</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>.</li><li><strong>Da fermi, da altezza h:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><mi>t</mi><mo>&#x0003D;</mo><msqrt><mrow><mn>2</mn><mi>h</mi><mo>&#x0002F;</mo><mi>g</mi></mrow></msqrt></mrow></math>.</li><li><strong>Lancio verso l’alto:</strong> <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msub><mi>t</mi><mrow><mrow><mi mathvariant=\"normal\">s</mi><mi mathvariant=\"normal\">a</mi><mi mathvariant=\"normal\">l</mi><mi mathvariant=\"normal\">i</mi><mi mathvariant=\"normal\">t</mi><mi mathvariant=\"normal\">a</mi></mrow></mrow></msub></mrow></math>=vₛ_0/g}}; l’aumento di quota è <math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"inline\"><mrow><msubsup><msub><mi>v</mi><mi>s</mi></msub><mn>0</mn><mn>2</mn></msubsup><mo>&#x0002F;</mo><mo stretchy=\"false\">&#x00028;</mo><mn>2</mn><mi>g</mi><mo stretchy=\"false\">&#x00029;</mo></mrow></math>.</li><li><strong>Alla sommità:</strong> velocità nulla, accelerazione ancora diretta verso il basso.</li><li><strong>Stessa quota di ritorno:</strong> stessa rapidità, verso opposto; distanza e spostamento restano grandezze diverse.</li></ul>"
            }
          ]
        }
      ]
    }
  ]
};
if(window.READER_LESSONS["cinematica-velocita"])window.READER_LESSONS["cinematica-velocita"].nextLesson={id:"cinematica-accelerazione"};



