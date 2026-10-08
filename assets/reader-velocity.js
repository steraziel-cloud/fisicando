/* La velocità scalare · bozza teorica per revisione. */
window.READER_LESSONS["cinematica-velocita"] = {
  "title": "La velocità scalare",
  "subtitle": "Biennio · Meccanica · Cinematica scalare",
  "version": 1,
  "sections": [
    {
      "id": "inizio",
      "title": "Ci serve una nuova grandezza",
      "cards": [
        {
          "title": "Morgana e Red arrivano insieme",
          "steps": [
            {
              "title": "",
              "html": "Morgana e Red partono insieme verso il parco, seguendo lo stesso percorso. Morgana cammina con passo lento e regolare. Red pedala veloce sulla sua BMX, ma si ferma a un chiosco di souvenir. Quando Morgana lo raggiunge, continuano insieme a piedi."
            },
            {
              "title": "Che cosa manca alla descrizione?",
              "html": "I due gatti partono insieme e arrivano insieme: compiono <strong>lo stesso spostamento nello stesso intervallo di tempo</strong>, ma si sono mossi in due modi diversi."
            },
            {
              "title": "",
              "html": "Per descrivere queste differenze dobbiamo introdurre <strong>una nuova grandezza fisica</strong>, che esprima quanto rapidamente cambia la posizione durante il viaggio. Questa grandezza si chiama <strong>velocità</strong>."
            }
          ],
          "illustration": {
            "src": "assets/images/reader/red-morgana-souvenir-v3.png",
            "alt": "Morgana si avvicina a piedi al chiosco di souvenir dove Red osserva gli oggetti in vendita; la sua BMX è parcheggiata accanto al chiosco, con il caschetto appoggiato sul manubrio.",
            "width": 1778,
            "height": 885
          },
          "hideTitle": true
        },
        {
          "title": "Misuriamo quanto è rapido uno spostamento",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Due osservazioni",
              "html": "Fissato opportunamente il <button type=\"button\" class=\"rm-keyword\" data-term=\"riferimento-scalare\">sistema di riferimento</button>, registriamo due posizioni, <span class=\"rm-formula\">s₁</span> e <span class=\"rm-formula\">s₂</span>, e i corrispondenti istanti, <span class=\"rm-formula\">t₁</span> e <span class=\"rm-formula\">t₂</span>. Ricaviamo lo spostamento e il tempo trascorso:<br><br><span class=\"rm-formula\"><button type=\"button\" class=\"rm-keyword\" data-term=\"delta\">Δ</button>s = s₂ − s₁</span><br><span class=\"rm-formula\"><button type=\"button\" class=\"rm-keyword\" data-term=\"delta\">Δ</button>t = t₂ − t₁ > 0</span>"
            },
            {
              "title": "Un rapporto utile",
              "html": "A parità di spostamento, impiegare meno tempo significa compierlo mediamente più rapidamente.<br><br>Un <strong>rapporto</strong> ci dice quanta parte di una grandezza corrisponde a un’unità dell’altra. Qui dividiamo lo spostamento per il tempo impiegato, per stimare <strong>quanto cambia la posizione per ogni unità di tempo</strong>:<br><br><span class=\"rm-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mrow><mfrac><mrow><mi>Δ</mi><mi>s</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>s</mi><mn>2</mn></msub><mo>−</mo><msub><mi>s</mi><mn>1</mn></msub></mrow><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>−</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></mfrac></mrow></math></span><br>Il risultato del calcolo di questo rapporto viene chiamato <strong>velocità scalare media</strong> nell’intervallo osservato."
            }
          ],
          "board": "velocity-story"
        },
        {
          "title": "L’unità di misura della velocità",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Metri al secondo e chilometri orari",
              "html": "Nel <button type=\"button\" class=\"rm-keyword\" data-term=\"sistema-internazionale\">Sistema Internazionale</button> la velocità si misura in <strong>metri al secondo</strong> (<span class=\"rm-formula\">m/s</span>). Su strada usiamo spesso i <strong>chilometri orari</strong> (<span class=\"rm-formula\">km/h</span>).<br><br>Completa le equivalenze che ci servono per passare da un’unità all’altra:",
              "interaction": "units-conversion"
            },
            {
              "title": "Facciamo qualche equivalenza",
              "html": "Da <span class=\"rm-formula\">m/s</span> a <span class=\"rm-formula\">km/h</span> <strong>moltiplichiamo per 3,6</strong>:<br><span class=\"rm-formula\">20 m/s = 72 km/h</span>.<br><br>Da <span class=\"rm-formula\">km/h</span> a <span class=\"rm-formula\">m/s</span> <strong>dividiamo per 3,6</strong>:<br><span class=\"rm-formula\">36 km/h = 10 m/s</span>.<br><br>Cambia l’unità, non il movimento descritto."
            }
          ]
        }
      ],
      "quiz": {
        "type": "velocity-units"
      }
    },
    {
      "id": "media",
      "title": "Che cosa ci dice la velocità media",
      "cards": [
        {
          "title": "Mettiamoci alla prova",
          "stepMode": "replace",
          "steps": [
            {
              "html": "La <strong>velocità scalare media</strong> è il rapporto tra lo spostamento e l’intervallo di tempo in cui avviene.<br><br>Per calcolarla, <strong>misuriamo uno spostamento e l’intervallo di tempo in cui avviene, poi facciamo il rapporto</strong>:<br><br><span class=\"rm-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" displaystyle=\"true\"><mrow><msub><mi>v</mi><mi>m</mi></msub><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>s</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac></mrow></math></span><span class=\"rm-measure-companion\"><span class=\"rm-measure-balloon\">Se ti è tutto chiaro,<br><strong>mettiamoci alla prova!</strong></span><img src=\"assets/images/reader/velocity-measuring-cats-v1.png\" alt=\"Morgana tiene un cronometro e invita a mettersi alla prova; Red tiene una rollina metrica.\" width=\"440\" height=\"294\"></span>"
            }
          ]
        },
        {
          "title": "Misuriamo la velocità media",
          "board": "elevator",
          "stepMode": "replace",
          "steps": [
            {
              "html": "",
              "interaction": "elevator-challenges"
            }
          ]
        }
      ]
    },
    {
      "id": "locale",
      "title": "Osservare più da vicino",
      "cards": [
        {
          "title": "Restringere l’intervallo",
          "stepMode": "replace",
          "steps": [
            {
              "title": "La corsa, la sosta, la ripartenza",
              "html": "Durante la sosta al chiosco Red non cambia posizione: la sua velocità media su quell’intervallo è zero. Morgana, invece, continua a camminare. Durante la corsa iniziale Red compie lo stesso spostamento in meno tempo di lei.<br><br><strong>La stessa procedura, applicata a intervalli più brevi, distingue i due movimenti.</strong>"
            },
            {
              "title": "Sempre più vicino allo stesso momento",
              "html": "Se Red rallenta o riparte, anche la media su un breve intervallo riassume variazioni del movimento. Fissiamo allora il momento che ci interessa e restringiamo gli intervalli nelle sue vicinanze.<br><br><strong>In via del tutto teorica possiamo immaginare durate positive piccole a piacere.</strong> Anche gli spostamenti corrispondenti diventano sempre più piccoli."
            },
            {
              "title": "Due numeri piccoli, un rapporto finito",
              "html": "Il numeratore e il denominatore diventano entrambi piccoli. Questo non significa che il loro rapporto debba diventare piccolo:<br><br><span class=\"rm-formula\">2 m / 0,1 s = 20 m/s</span><br><span class=\"rm-formula\">0,2 m / 0,01 s = 20 m/s</span><br><span class=\"rm-formula\">0,02 m / 0,001 s = 20 m/s</span><br><br>Qui spostamento e durata si riducono nello stesso rapporto: il quoziente rimane uguale."
            }
          ],
          "board": "velocity-story"
        },
        {
          "title": "Un valore che si precisa",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Le cifre iniziano a stabilizzarsi",
              "html": "Quando la velocità varia, le medie su intervalli sempre più brevi possono invece dare risultati come questi, tutti vicini allo stesso momento:<br><br><span class=\"rm-formula\">1 s → 20,84 m/s</span><br><span class=\"rm-formula\">0,1 s → 20,39 m/s</span><br><span class=\"rm-formula\">0,01 s → 20,345 m/s</span><br><span class=\"rm-formula\">0,001 s → 20,3405 m/s</span><br><br>In questo esempio teorico le cifre iniziali si stabilizzano; le differenze si spostano verso decimali sempre più lontani. Il numero si precisa."
            },
            {
              "title": "La velocità istantanea",
              "html": "Nei moti regolari, restringendo gli intervalli verso il momento scelto, le medie si avvicinano a un valore preciso. <strong>Quel valore è la velocità scalare istantanea</strong>.<br><br>Il concetto è sempre quello di velocità: la media descrive un intervallo nel suo complesso; con questa procedura cerchiamo di cogliere il movimento sempre più localmente."
            },
            {
              "title": "Quanta precisione serve?",
              "html": "Nella pratica ci fermiamo alla precisione utile. Se vogliamo un risultato ai decimi e ulteriori riduzioni cambiano soltanto i decimali successivi, non serve inseguirli, purché le misure siano abbastanza affidabili.<br><br><strong>Più cifre sul display non significano automaticamente più precisione.</strong> Gli strumenti hanno un’incertezza: intervalli troppo piccoli possono rendere il rapporto meno affidabile. Non esiste una durata minima adatta a tutti i movimenti."
            }
          ],
          "board": "velocity-story"
        }
      ]
    },
    {
      "id": "segno",
      "title": "Il significato del segno",
      "cards": [
        {
          "title": "Da dove viene il segno meno?",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Una conseguenza del riferimento",
              "html": "Abbiamo scelto un verso positivo e definito lo spostamento come <span class=\"rm-formula\">s₂ − s₁</span>. Il tempo trascorso è positivo: perciò <strong>il rapporto eredita il segno dello spostamento</strong>.<br><br>Se la coordinata passa da <span class=\"rm-formula\">12 m</span> a <span class=\"rm-formula\">4 m</span> in <span class=\"rm-formula\">2 s</span>, la velocità media è <span class=\"rm-formula\">(4 − 12) / 2 = −4 m/s</span>. Invertendo il verso positivo, cambia il segno, non il movimento."
            },
            {
              "title": "Negativo non significa più lento",
              "html": "Nella descrizione locale, il segno indica il verso del movimento; il <button type=\"button\" class=\"rm-keyword\" data-term=\"valore-assoluto\">valore assoluto</button> indica quanto rapidamente ci muoviamo. A <span class=\"rm-formula\">−4 m/s</span> ci si muove più rapidamente che a <span class=\"rm-formula\">+3 m/s</span>.<br><br><strong>Il segno meno non significa né “più piano” né “sta rallentando”.</strong> Nel linguaggio comune non esplicitiamo questa scelta del verso: per questo una velocità negativa può sembrare insolita."
            },
            {
              "title": "Il segno di una media",
              "html": "Il segno della velocità media riguarda lo <strong>spostamento complessivo dell’intervallo</strong>. Una media positiva non garantisce che il corpo abbia proceduto sempre nel verso positivo: possono esserci state inversioni intermedie."
            }
          ]
        }
      ]
    },
    {
      "id": "quotidiano",
      "title": "La velocità nella vita quotidiana",
      "cards": [
        {
          "title": "Il tachimetro",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un numero senza segno",
              "html": "Il tachimetro dell’auto indica quanto rapidamente ci muoviamo, senza il segno legato al verso positivo della nostra traiettoria: l’informazione corrisponde al <strong>valore assoluto della velocità</strong>.<br><br>Leggere <span class=\"rm-formula\">20 m/s</span> non garantisce che nel secondo successivo percorreremo venti metri: potremmo rallentare. La previsione vale se manteniamo quel valore per tutto il secondo."
            }
          ]
        },
        {
          "title": "La velocità del navigatore",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Misurare attraverso i segnali dei satelliti",
              "html": "Il navigatore può stimare la velocità usando i segnali dei satelliti. La qualità della stima dipende dal ricevitore e dalle condizioni di ricezione: edifici e altri ostacoli possono disturbare i segnali.<br><br>Il numero visualizzato è il risultato di una misura e di un’elaborazione: <strong>non tutte le cifre mostrate sono necessariamente affidabili</strong>.<br><br><a href=\"https://www.gps.gov/gps-accuracy\" target=\"_blank\" rel=\"noopener\">Approfondisci: GPS.gov</a>"
            }
          ]
        },
        {
          "title": "L’autovelox",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Un breve tratto di movimento",
              "html": "Per capire una misura locale immaginiamo un rilevatore ideale con due sensori vicini: ciascuno registra il passaggio dello stesso punto dell’auto.<br><br>Se lo spostamento è <span class=\"rm-formula\">+2 m</span> e il tempo è <span class=\"rm-formula\">0,10 s</span>, il rapporto dà <span class=\"rm-formula\">+20 m/s</span>, cioè <span class=\"rm-formula\">+72 km/h</span>. Se la velocità cambia pochissimo durante il passaggio, questa media ne è una buona stima locale."
            },
            {
              "title": "Il dispositivo reale",
              "html": "Il modello a due sensori serve a capire il ragionamento; gli apparecchi reali possono usare tecnologie diverse, fra cui laser e radar.<br><br><strong>Una lunga sosta abbassa la media del viaggio, ma non la velocità durante un successivo passaggio.</strong> È la differenza fra osservare tutto il tragitto e osservarne una piccola parte.<br><br><a href=\"https://sodi.com/autovelox/autovelox-106/\" target=\"_blank\" rel=\"noopener\">Un esempio di sensore laser</a> · <a href=\"https://sodi.com/autovelox/autovelox-106-se-radar/\" target=\"_blank\" rel=\"noopener\">Un esempio di sensore radar</a>"
            }
          ]
        }
      ]
    },
    {
      "id": "pillole",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "Le idee da portare con te",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Dalla media alla descrizione locale",
              "html": "La <strong>velocità scalare</strong> descrive come e quanto rapidamente cambia la coordinata lungo una traiettoria nota, anche curva.<br><br>Il rapporto <span class=\"rm-formula\">Δs / Δt</span> fornisce la <strong>velocità media</strong> nell’intervallo scelto. Può nascondere soste, ripartenze e inversioni.<br><br>Restringendo gli intervalli verso lo stesso momento, nei casi regolari le medie si avvicinano al valore della <strong>velocità istantanea</strong>."
            },
            {
              "title": "Segno, misura e precisione",
              "html": "Il <strong>segno</strong> deriva dal verso positivo scelto; nella descrizione locale indica il verso del moto. Il valore assoluto indica quanto rapidamente ci muoviamo.<br><br>Una misura usa intervalli finiti: la precisione utile dipende dal movimento osservato e dagli strumenti.<br><br>La velocità si esprime in <strong>m/s</strong> oppure in altre unità equivalenti, come <strong>km/h</strong>."
            }
          ]
        }
      ]
    }
  ]
};

