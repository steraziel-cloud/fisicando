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
              "html": "<span class=\"rm-measure-layout\"><span class=\"rm-measure-companion\"><span class=\"rm-measure-balloon\">Se ti è tutto chiaro,<br><strong>mettiamoci alla prova!</strong></span><img src=\"assets/images/reader/velocity-measuring-cats-v1.png\" alt=\"Morgana tiene un cronometro e invita a mettersi alla prova; Red tiene una rollina metrica.\" width=\"440\" height=\"294\"></span><span class=\"rm-measure-explanation\">La <strong>velocità scalare media</strong> è il rapporto tra lo spostamento e l’intervallo di tempo in cui avviene.<br><br>Per calcolarla, <strong>misuriamo uno spostamento e l’intervallo di tempo in cui avviene, poi facciamo il rapporto</strong>:<br><br><span class=\"rm-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" displaystyle=\"true\"><mrow><msub><mi>v</mi><mi>m</mi></msub><mo>=</mo><mfrac><mrow><mi>Δ</mi><mi>s</mi></mrow><mrow><mi>Δ</mi><mi>t</mi></mrow></mfrac></mrow></math></span></span></span>"
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
              "html": "La velocità media riassume ciò che accade tra due letture, ma <strong>non permette di distinguere come si è svolto il movimento all’interno dell’intervallo</strong>.<br><br>Con l’ascensore abbiamo ottenuto una <strong>velocità media nulla</strong> sia restando fermi sia salendo e tornando al punto di partenza: il risultato è uguale, ma ciò che è accaduto è diverso.<br><br>Lo stesso vale quando la <strong>velocità media non è nulla</strong>: uno stesso valore può descrivere un movimento a velocità costante oppure un viaggio con una pausa e tratti percorsi più rapidamente, come nel caso di Red e Morgana.<br><br>In definitiva, la media ci dice <em>quanto</em> è cambiata la posizione per unità di tempo nel complesso, ma <strong>non ci dice <em>quanto rapidamente</em> cambiava nei singoli istanti</strong>. Per scoprirlo, dobbiamo ridurre l’intervallo di tempo osservato."
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
          "stepMode": "replace",
          "steps": [
            {
              "title": "La velocità istantanea",
              "html": "Per conoscere la velocità in un certo istante, consideriamo intervalli di tempo sempre più piccoli attorno a quell’istante. Se le velocità medie si avvicinano a un unico valore, <strong>quel valore è la velocità scalare istantanea in quell’istante</strong>."
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
      "title": "La velocità nella vita quotidiana · In lavorazione",
      "cards": [
        {
          "title": "Il tachimetro · In lavorazione",
          "board": "wheel-speed",
          "stepMode": "replace",
          "steps": [
            {
              "title": "Dalla rotazione della ruota al movimento dell’auto",
              "html": "Questo approfondimento è <strong>in lavorazione</strong>: la lavagna è un primo prototipo, da sviluppare e rendere più interessante.<br><br>Il <strong>tachimetro</strong> è lo strumento a bordo degli autoveicoli che indica quanto rapidamente si stanno muovendo, con una lancetta oppure un display digitale.<br><br>Per capirne l’idea, immaginiamo una ruota circolare di raggio <span class=\"rm-formula\">r</span> che <strong>rotola senza slittare</strong>. Dopo un giro completo, l’auto è avanzata di una circonferenza: <span class=\"rm-formula\">C = 2πr</span>.<br><br>Nella lavagna, il punto arancione segna un punto della ruota. Un sensore solidale all’auto ne rileva il passaggio: <strong>due passaggi consecutivi delimitano un giro</strong>."
            },
            {
              "title": "Il sensore misura il tempo, il sistema calcola la velocità",
              "html": "Il primo segnale avvia il conteggio del tempo; il secondo lo conclude. Il sistema conosce la circonferenza della ruota e calcola:<br><br><span class=\"rm-formula\">velocità = C / Δt = 2πr / Δt</span>.<br><br>È quindi <strong>la distanza a essere divisa per il tempo</strong>. Il risultato in m/s viene moltiplicato per 3,6 e inviato all’indicatore in km/h.<br><br><strong>Prova nella lavagna:</strong> a parità di raggio, dimezza il tempo di un giro. La velocità raddoppia. Il giro a schermo è rallentato; il cronometro mostra il tempo del modello."
            },
            {
              "title": "Dal modello allo strumento reale",
              "html": "Il rapporto dà una <strong>media durante il giro</strong>. Se la velocità cambia poco in quel breve intervallo, è una buona stima della velocità istantanea, espressa senza il segno del verso.<br><br>Nei sistemi elettronici si possono rilevare <strong>molti segnali per giro</strong>, usando sensori e ruote foniche o anelli magnetici: non occorre sempre aspettare un’intera rotazione. Il valore visualizzato deriva dall’elaborazione dei segnali e dalla taratura del sistema.<br><br>La circonferenza effettiva di rotolamento deve essere conosciuta correttamente; se la ruota slitta, la sua rotazione non descrive fedelmente l’avanzamento dell’auto.<br><br><a href=\"https://www.bosch-mobility.com/en/solutions/sensors/wheel-speed-sensor/\" target=\"_blank\" rel=\"noopener\">Approfondisci: un sensore di velocità delle ruote</a>"
            }
          ]
        },
        {
          "title": "L’autovelox · In lavorazione",
          "steps": [
            {
              "html": "<strong>Approfondimento da sviluppare.</strong><br><br>Come possiamo ricavare la velocità di un’auto durante il suo passaggio? Qui prepareremo un’esperienza interattiva per collegare le letture dei sensori a distanza, tempo e velocità, distinguendo il modello didattico dai dispositivi reali."
            }
          ]
        },
        {
          "title": "La velocità del GPS · In lavorazione",
          "steps": [
            {
              "html": "<strong>Approfondimento da sviluppare.</strong><br><br>Come fa un navigatore a stimare quanto rapidamente ci muoviamo? Qui esploreremo i segnali dei satelliti e la qualità della misura con un esempio concreto e interattivo."
            }
          ]
        }
      ],
      "status": "work-in-progress"
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
              "title": "La velocità media riassume un intervallo",
              "html": "La <strong>velocità scalare</strong> descrive quanto rapidamente cambia la posizione lungo una traiettoria, tenendo conto del verso scelto come positivo.<br><br>La <strong>velocità media</strong> si calcola dividendo lo spostamento per il tempo trascorso: <span class=\"rm-formula\">vₘ = Δs / Δt</span>.<br><br>Questo numero <strong>non racconta ciò che accade all’interno dell’intervallo</strong>: restare fermi oppure andare e tornare può dare la stessa media nulla; muoversi uniformemente oppure alternare tratti rapidi e pause può dare la stessa media non nulla."
            },
            {
              "title": "La velocità istantanea descrive i singoli momenti",
              "html": "Per distinguere questi movimenti, restringiamo gli intervalli verso l’istante che ci interessa. Se le velocità medie si avvicinano a un valore preciso, <strong>quel valore è la velocità istantanea in quell’istante</strong>.<br><br>La <button type=\"button\" class=\"rm-keyword\" data-term=\"funzione\">funzione</button> <span class=\"rm-formula\">v(t)</span> associa a ogni istante la sua velocità. Il grafico permette di leggere <strong>quanto vale, quando cambia e quanto durano i diversi tratti del moto</strong>.<br><br>Morgana mantiene <strong>2 m/s</strong>; Red passa da <strong>6 a 0 e poi a 2 m/s</strong>. La media dell’intero viaggio è uguale, ma i grafici rendono evidenti le differenze."
            },
            {
              "title": "Leggere e misurare una velocità",
              "html": "Il <strong>segno della velocità istantanea</strong> indica il verso del movimento: positivo nel verso scelto, negativo nel verso opposto. Il suo <strong>valore assoluto</strong> indica quanto rapidamente ci muoviamo; durante una pausa la velocità è nulla.<br><br>L’unità del Sistema Internazionale è il <strong>m/s</strong>: per passare ai <strong>km/h</strong> moltiplichiamo per <strong>3,6</strong>; per tornare ai m/s dividiamo per 3,6.<br><br>Nella pratica misuriamo sempre su intervalli finiti. Intervalli brevi possono dare una buona stima della velocità istantanea, ma <strong>la precisione dipende anche dagli strumenti e dall’<button type=\"button\" class=\"rm-keyword\" data-term=\"incertezza\">incertezza</button> della misura</strong>. Cerchiamo la precisione utile al nostro scopo."
            }
          ]
        }
      ]
    }
  ]
};
