/* La velocità scalare · teoria e lavagne guidate. */
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
        },
        {
          "title": "In conclusione",
          "stepMode": "replace",
          "steps": [
            {
              "html": "La velocità media riassume ciò che accade tra due letture, ma <strong>non permette di distinguere come si è svolto il movimento all’interno dell’intervallo</strong>.<br><br>Con l’ascensore abbiamo ottenuto una <strong>velocità media nulla</strong> sia restando fermi sia salendo e tornando al punto di partenza: il risultato è uguale, ma ciò che è accaduto è diverso.<br><br>Anche una <strong>stessa media non nulla</strong> può descrivere un movimento uniforme oppure un movimento con una pausa e tratti più rapidi, come nel viaggio di Red e Morgana.<br><br><strong>La media ci dice quanto è cambiata la posizione per unità di tempo, complessivamente. Non ci dice quanto rapidamente cambiava nei singoli momenti.</strong> Per scoprirlo, dobbiamo ridurre l’intervallo di tempo osservato."
            }
          ]
        }
      ]
    },
    {
      "id": "locale",
      "title": "La velocità istantanea",
      "quiz": {
        "type": "velocity-graph"
      },
      "cards": [
        {
          "title": "Intervalli sempre più brevi",
          "stepMode": "replace",
          "steps": [
            {
              "html": "Come possiamo migliorare l’informazione su <strong>quanto rapidamente avviene uno spostamento</strong>?<br><br>Per distinguere ciò che accade in un intervallo, dobbiamo poter descrivere il movimento <strong>in ogni istante di quell’intervallo</strong>.<br><br>Per farlo, scegliamo un istante e <strong>restringiamo gli intervalli avvicinandoci a quel momento</strong>. Tempo <span class=\"rm-formula\">Δt</span> e spostamento <span class=\"rm-formula\">Δs</span> diventano sempre più piccoli; ogni volta ne calcoliamo il rapporto:<math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><mfrac><mtext>Δs</mtext><mtext>Δt</mtext></mfrac></math>"
            },
            {
              "title": "Quanto possiamo ridurre l’intervallo?",
              "html": "In teoria possiamo ripetere questa procedura quanto vogliamo, usando <strong>durate positive piccole a piacere</strong>.<br><br>Ogni intervallo ha ancora una durata: non diventa un istante e non dividiamo mai per zero. Ma, se la velocità varia poco al suo interno, la media su un intervallo breve può darne una <strong>buona stima nel momento scelto</strong>."
            }
          ]
        },
        {
          "title": "Il rapporto diventa sempre più preciso",
          "stepMode": "replace",
          "steps": [
            {
              "html": "Due quantità che diventano piccole <strong>non danno necessariamente un rapporto piccolo</strong>. In questo esempio teorico, restringendo l’intervallo a partire dallo stesso istante, otteniamo:<div class=\"rm-instant-table\"><table><thead><tr><th>Δt</th><th>Δs</th><th>Δs / Δt</th></tr></thead><tbody><tr><td>1 s</td><td>2,5 m</td><td>2,5 m/s</td></tr><tr><td>0,1 s</td><td>0,205 m</td><td>2,05 m/s</td></tr><tr><td>0,01 s</td><td>0,02005 m</td><td>2,005 m/s</td></tr><tr><td>0,001 s</td><td>0,0020005 m</td><td>2,0005 m/s</td></tr></tbody></table></div><strong>Tempo e spostamento tendono a zero, mentre il loro rapporto si avvicina a 2 m/s.</strong> Le prime cifre si stabilizzano: cambia soltanto un decimale sempre più lontano."
            },
            {
              "title": "Nella pratica: la precisione utile",
              "html": "Misurare intervalli e spostamenti sempre più piccoli richiede <strong>strumenti più precisi, spesso più costosi</strong>. L’<button type=\"button\" class=\"rm-keyword\" data-term=\"incertezza\">incertezza</button> delle letture può rendere il rapporto meno affidabile.<br><br><strong>La precisione necessaria dipende da ciò che dobbiamo fare.</strong> Distinguere la settima cifra significativa può servire in una misura di altissima precisione. Per controllare la velocità di un’auto rispetto a un limite, invece, è normalmente utile ragionare all’unità di km/h, senza inseguire i decimali."
            }
          ]
        },
        {
          "title": "La velocità in ogni istante",
          "board": "velocity-instant",
          "stepMode": "cumulative",
          "steps": [
            {
              "title": "La velocità istantanea",
              "html": "Quando, restringendo gli intervalli verso un istante, le velocità medie si avvicinano a un valore preciso, <strong>quel valore è la velocità scalare istantanea in quell’istante</strong>."
            },
            {
              "html": "Osserva le etichette sulla lavagna e <strong>completa le velocità dei due gatti</strong>. Puoi mettere in pausa o rivedere il movimento.",
              "interaction": "instant-speeds"
            },
            {
              "title": "La funzione velocità v(t)",
              "velocityGraph": true,
              "html": "Associando a ogni istante <span class=\"rm-formula\">t</span> la velocità istantanea, otteniamo la <button type=\"button\" class=\"rm-keyword\" data-term=\"funzione\">funzione</button> <strong>velocità</strong>, scritta <span class=\"rm-formula\">v = v(t)</span>.<br><br>Il grafico si traccia insieme al movimento: per Morgana una linea a <strong>2 m/s</strong>; per Red tre tratti a <strong>6, 0 e 2 m/s</strong>. Leggiamo <strong>quanto vale la velocità e quando cambia</strong>, comprese la durata della pausa e quella dei tratti in movimento.<br><br>Entrambi percorrono 120 m in 60 s e hanno media 2 m/s, ma <strong>i loro grafici v(t) sono diversi</strong>: ora le differenze sono anche quantitative.",
              "replace": true
            }
          ]
        }
      ],
      "optionalNext": {
        "trivia": "quotidiano",
        "recap": "pillole"
      }
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
            },
            {
              "title": "La funzione velocità",
              "html": "La <button type=\"button\" class=\"rm-keyword\" data-term=\"funzione\">funzione</button> <span class=\"rm-formula\">v(t)</span> associa a ogni istante la velocità istantanea. Il suo grafico permette di leggere <strong>quanto vale la velocità, quando cambia e per quanto tempo resta costante o nulla</strong>.<br><br>Due movimenti possono avere la stessa velocità media e <strong>grafici v(t) diversi</strong>, come Red e Morgana.<br><br>La legge oraria <span class=\"rm-formula\">s(t)</span> descrive la posizione nel tempo; <span class=\"rm-formula\">v(t)</span> descrive la velocità istantanea nel tempo."
            }
          ]
        }
      ]
    }
  ]
};
