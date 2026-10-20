/* Original GatitoMath rational lessons. See docs/razionali-assoluti-revisione.md. */
(()=>{
"use strict";
Object.assign(window.READER_LESSONS,{
  "razionali-assoluti-insieme": {
    "title": "L’insieme dei numeri razionali assoluti",
    "subtitle": "Matematica · Medie · Numeri razionali assoluti · Prima versione da rivedere",
    "version": 6,
    "status": "work-in-progress",
    "sections": [
      {
        "id": "insieme",
        "title": "L’insieme ℚₐ e la divisione",
        "cards": [
          {
            "title": "Perché ampliare ℕ?",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Una divisione che conosci già",
                "html": "Quante volte ti è capitato di svolgere una <strong>divisione in colonna</strong> e di trovare un <strong>resto diverso da zero</strong>?<br><br>Bjorne sta ripassando <strong>246 : 5</strong> sulla sua lavagnetta. Entriamo a vedere i passaggi.",
                "divisionView": "scene"
              },
              {
                "title": "Che cosa ci dice quel resto?",
                "html": "Abbiamo trovato <strong>49 come quoziente intero e 1 come resto</strong>. La divisione non è esatta: 5 × 49 = 245, mentre 5 × 50 = 250. <strong>Nessun numero naturale, moltiplicato per 5, dà 246.</strong><br><br>Il quoziente esatto di 246 : 5, quindi, <strong>non è un numero naturale</strong>.<br><br>La divisione <strong>non è un’operazione interna a ℕ</strong>: anche con un divisore diverso da zero, il risultato esatto può non appartenere a ℕ. Per questo dobbiamo ampliare l’insieme.",
                "divisionView": "done"
              },
              {
                "title": "Dai naturali ai razionali assoluti",
                "html": "Per avere un insieme che contenga questi quozienti, ampliamo ℕ all’<strong>insieme dei numeri razionali assoluti</strong>, indicato con <strong>ℚₐ</strong>.<br><br>I suoi elementi sono tutti i numeri rappresentabili con una frazione <span class=\"qr-fraction\" role=\"math\" aria-label=\"a fratto b\"><span aria-hidden=\"true\">a</span><span aria-hidden=\"true\">b</span></span>, dove <strong>a e b sono numeri naturali e b ≠ 0</strong>.<br><br>Il quoziente esatto del nostro esempio si rappresenta con <span class=\"qr-fraction\" role=\"math\" aria-label=\"246 fratto 5\"><span aria-hidden=\"true\">246</span><span aria-hidden=\"true\">5</span></span>.<br><br>In ℚₐ la divisione dà ancora un elemento di ℚₐ, <strong>purché il divisore sia diverso da zero</strong>.",
                "divisionView": "done"
              }
            ],
            "board": "division-intro"
          },
          {
            "title": "Rapporto e scrittura frazionaria",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Il rapporto tra due numeri",
                "html": "Il risultato della divisione tra a e b, con b ≠ 0, si chiama <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-rapporto\">rapporto</button> tra a e b e si indica con una <strong>frazione</strong>:<br><br><span class=\"qr-formula\">a : b = <span class=\"qr-fraction\" role=\"math\" aria-label=\"a fratto b\"><span aria-hidden=\"true\">a</span><span aria-hidden=\"true\">b</span></span></span><br><br>Il simbolo che separa i due termini si chiama <strong>linea di frazione</strong>; a è il <strong>numeratore</strong> e b il <strong>denominatore</strong>. Nella divisione di Bjorne, il rapporto è <span class=\"qr-fraction\" role=\"math\" aria-label=\"246 fratto 5\"><span aria-hidden=\"true\">246</span><span aria-hidden=\"true\">5</span></span>."
              },
              {
                "title": "Perché è un ampliamento di ℕ?",
                "html": "Ponendo <strong>b = 1</strong> ritroviamo tutti i numeri naturali:<br><br><span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"n fratto 1\"><span aria-hidden=\"true\">n</span><span aria-hidden=\"true\">1</span></span> = n</span><br><br>Per esempio, <span class=\"qr-fraction\" role=\"math\" aria-label=\"4 fratto 1\"><span aria-hidden=\"true\">4</span><span aria-hidden=\"true\">1</span></span> = 4. Ogni numero naturale, compreso lo zero, appartiene quindi anche a ℚₐ:<br><br><span class=\"qr-formula\">ℕ ⊂ ℚₐ</span>"
              }
            ]
          }
        ]
      },
      {
        "id": "zero",
        "title": "I casi con lo zero",
        "cards": [
          {
            "title": "I casi con lo zero",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Zero al numeratore",
                "html": "Se il denominatore è diverso da zero, il rapporto vale zero:<br><br><span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"0 fratto b\"><span aria-hidden=\"true\">0</span><span aria-hidden=\"true\">b</span></span> = 0 &nbsp; (b ≠ 0)</span><br><br>Per esempio, <span class=\"qr-fraction\" role=\"math\" aria-label=\"0 fratto 5\"><span aria-hidden=\"true\">0</span><span aria-hidden=\"true\">5</span></span> = 0, perché 0 × 5 = 0."
              },
              {
                "title": "Zero al denominatore",
                "html": "Se <strong>a ≠ 0</strong>, <span class=\"qr-fraction\" role=\"math\" aria-label=\"a fratto 0\"><span aria-hidden=\"true\">a</span><span aria-hidden=\"true\">0</span></span> è una divisione <strong>impossibile</strong>: nessun numero moltiplicato per zero dà a.<br><br><span class=\"qr-fraction\" role=\"math\" aria-label=\"0 fratto 0\"><span aria-hidden=\"true\">0</span><span aria-hidden=\"true\">0</span></span> è invece <strong>indeterminato</strong>: ogni numero moltiplicato per zero dà zero, quindi non si individua un unico quoziente.<br><br>In entrambi i casi la divisione non è definita: nelle frazioni che rappresentano gli elementi di ℚₐ il <strong>denominatore deve essere diverso da zero</strong>."
              }
            ]
          }
        ]
      },
      {
        "id": "frazioni",
        "title": "Frazioni equivalenti, stesso numero",
        "cards": [
          {
            "title": "Cambiare i pezzi senza cambiare la quantità",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Due terzi oppure quattro sesti?",
                "html": "Due terzi e quattro sesti rappresentano la <strong>stessa quantità</strong>: quattro parti su sei coprono quanto due parti su tre, se l’unità è la stessa.<br><br><span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"4 fratto 6\"><span aria-hidden=\"true\">4</span><span aria-hidden=\"true\">6</span></span></span><br><br>Sono <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-equivalenti\">frazioni equivalenti</button>. Dividendo entrambi i termini di 4/6 per 2, otteniamo 2/3."
              },
              {
                "title": "Proprietà invariantiva",
                "html": "Moltiplicando o dividendo <strong>entrambi i termini per lo stesso numero naturale diverso da zero</strong>, otteniamo una frazione equivalente. Quando dividiamo, il numero scelto deve essere un <strong>divisore comune</strong> dei due termini.<br><br>Questa è la <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-invariantiva\">proprietà invariantiva</button>. Non vale se cambiamo soltanto un termine."
              }
            ]
          },
          {
            "title": "Una frazione ridotta ai minimi termini",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Semplificare",
                "html": "<span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"18 fratto 24\"><span aria-hidden=\"true\">18</span><span aria-hidden=\"true\">24</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"9 fratto 12\"><span aria-hidden=\"true\">9</span><span aria-hidden=\"true\">12</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span></span><br><br>Prima dividiamo entrambi i termini per 2, poi per 3. Avremmo potuto dividerli subito per <strong>M.C.D.(18, 24) = 6</strong>."
              },
              {
                "title": "Quando ci fermiamo?",
                "html": "Una frazione è <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-minimi\">ridotta ai minimi termini</button> se numeratore e denominatore sono <strong>primi tra loro</strong>: il loro M.C.D. è 1.<br><br>3 e 4 non hanno divisori comuni maggiori di 1: <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> non si può più semplificare dividendo i termini per un naturale maggiore di 1."
              }
            ]
          },
          {
            "title": "Molte frazioni, un solo numero",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Frazione e numero razionale",
                "html": "<span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 4\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">4</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 6\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">6</span></span> = …</span><br><br>Sono scritture diverse che rappresentano <strong>lo stesso numero</strong>. Il <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-razionale\">numero razionale assoluto</button> non cambia quando scegliamo una frazione equivalente."
              },
              {
                "title": "Il nome formale",
                "html": "Tutte le frazioni equivalenti fra loro formano una <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-classe\">classe di equivalenza</button>. Possiamo pensare al numero razionale come alla quantità comune rappresentata dall’intera classe.<br><br>Di solito scegliamo la frazione ridotta ai minimi termini per indicarlo: per esempio <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span>."
              }
            ]
          }
        ]
      },
      {
        "id": "ordine",
        "title": "Confronto e proprietà dell’insieme",
        "cards": [
          {
            "title": "Confrontare nella stessa unità",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Parti della stessa grandezza",
                "html": "Con lo stesso denominatore basta confrontare i numeratori: <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 7\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">7</span></span> &lt; <span class=\"qr-fraction\" role=\"math\" aria-label=\"5 fratto 7\"><span aria-hidden=\"true\">5</span><span aria-hidden=\"true\">7</span></span></span>.<br><br>Con denominatori diversi non possiamo contare direttamente i pezzi: un terzo e un quarto non hanno la stessa grandezza. Prima li trasformiamo in <strong>parti della stessa unità e della stessa grandezza</strong>."
              },
              {
                "title": "Una procedura affidabile",
                "html": "Per confrontare <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> e <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> scegliamo <strong>m.c.m.(3, 4) = 12</strong>: otteniamo <span class=\"qr-fraction\" role=\"math\" aria-label=\"8 fratto 12\"><span aria-hidden=\"true\">8</span><span aria-hidden=\"true\">12</span></span> e <span class=\"qr-fraction\" role=\"math\" aria-label=\"9 fratto 12\"><span aria-hidden=\"true\">9</span><span aria-hidden=\"true\">12</span></span>. Ora le parti hanno la stessa grandezza e 8 &lt; 9.<br><br>Una frazione <strong>propria</strong> ha numeratore minore del denominatore ed è minore di 1; una <strong>impropria</strong> ha numeratore maggiore o uguale al denominatore ed è almeno 1."
              }
            ]
          },
          {
            "title": "Sulla retta non ci sono buchi fra due razionali",
            "stepMode": "replace",
            "steps": [
              {
                "title": "L’ordine e la densità",
                "html": "ℚₐ è un insieme <strong>ordinato</strong>: dati due suoi numeri, possiamo stabilire se il primo è minore, uguale o maggiore del secondo.<br><br>È anche <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-denso\">denso</button>: fra due razionali distinti possiamo sempre trovarne un altro. Fra <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 3\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">3</span></span> e <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span>, per esempio, c’è <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span>."
              },
              {
                "title": "Nessun successivo immediato",
                "html": "Fra a e b, con a &lt; b, il numero <strong>(a + b) : 2</strong> è razionale e sta esattamente a metà. Possiamo ripetere il procedimento senza fermarci.<br><br>Perciò un razionale non ha un <strong>successivo immediato</strong> come accade in ℕ. ℚₐ ha minimo 0, ma non ha un minimo positivo né un massimo.<details class=\"qr-deeper\"><summary>Denso non significa che ogni punto sia razionale</summary><p>Dire che fra due razionali c’è sempre un razionale non equivale a dire che ogni punto della retta rappresenti un razionale. Gli altri numeri saranno oggetto di una lezione successiva.</p></details>"
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
                "title": "Ricostruiamo il percorso",
                "html": "• Una frazione a/b, con b ≠ 0, rappresenta il quoziente a : b.<br><br>• Frazioni equivalenti rappresentano lo stesso numero; la proprietà invariantiva conserva il valore.<br><br>• ℕ ⊂ ℚₐ; lo zero appartiene a entrambi gli insiemi.<br><br>• Il quoziente resta in ℚₐ se il divisore non è zero.<br><br>• ℚₐ è infinito, ordinato e denso. Il rapporto è un quoziente in un ordine preciso."
              }
            ]
          }
        ],
        "quiz": {
          "questions": [
            {
              "question": "Che relazione c’è fra 2/3 e 4/6?",
              "options": [
                "Sono due numeri diversi.",
                "Sono due frazioni che rappresentano lo stesso numero.",
                "La seconda vale il doppio."
              ],
              "answer": 1,
              "feedback": "Dividendo numeratore e denominatore di 4/6 per 2 otteniamo 2/3: la quantità è invariata."
            },
            {
              "question": "Quale scrittura rappresenta un numero razionale assoluto?",
              "options": [
                "0/7",
                "7/0",
                "0/0"
              ],
              "answer": 0,
              "feedback": "0/7 = 0. Il denominatore deve essere diverso da zero."
            },
            {
              "question": "Quale affermazione esprime correttamente ℕ ⊂ ℚₐ?",
              "options": [
                "Ogni razionale assoluto è naturale.",
                "Nessun naturale è razionale.",
                "Ogni naturale è razionale assoluto; alcuni razionali assoluti non sono naturali."
              ],
              "answer": 2,
              "feedback": "n = n/1, ma per esempio 1/2 non è naturale."
            },
            {
              "question": "Qual è il rapporto tra 2 e 5, in quest’ordine?",
              "options": [
                "5/2",
                "2/5",
                "5 − 2"
              ],
              "answer": 1,
              "feedback": "Il rapporto è il primo numero diviso per il secondo: 2 : 5 = 2/5."
            },
            {
              "question": "Tra due razionali assoluti distinti…",
              "options": [
                "c’è sempre almeno un altro razionale assoluto.",
                "non può esserci un altro razionale.",
                "c’è sempre un numero naturale."
              ],
              "answer": 0,
              "feedback": "Il punto medio (a + b) : 2 è razionale ed è compreso strettamente fra a e b."
            }
          ]
        }
      }
    ],
    "nextLesson": {
      "id": "razionali-assoluti-operazioni"
    }
  },
  "razionali-assoluti-operazioni": {
    "title": "Le operazioni in ℚₐ",
    "subtitle": "Matematica · Medie · Numeri razionali assoluti · Prima versione da rivedere",
    "version": 1,
    "status": "work-in-progress",
    "sections": [
      {
        "id": "somma",
        "title": "Addizione e sottrazione",
        "cards": [
          {
            "title": "Sommare parti della stessa unità",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Prima scegliamo parti uguali",
                "html": "Per sommare <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span> e <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 3\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">3</span></span> non possiamo sommare 1 e 1 lasciando denominatori diversi. Riscriviamo entrambi in sesti: <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span> + <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 3\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">3</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 6\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">6</span></span> + <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 6\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">6</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"5 fratto 6\"><span aria-hidden=\"true\">5</span><span aria-hidden=\"true\">6</span></span></span>.<br><br>Il denominatore resta 6: indica <strong>il tipo di parti che stiamo contando</strong>.",
                "cloze": [
                  {
                    "before": "Per sommare metà e terzi scegliamo parti chiamate ",
                    "options": [
                      "quinti",
                      "sesti",
                      "decimi"
                    ],
                    "answer": 1,
                    "after": ".",
                    "feedback": "1/2 = 3/6 e 1/3 = 2/6: ora i pezzi hanno la stessa grandezza."
                  }
                ]
              },
              {
                "title": "Il procedimento",
                "html": "Con denominatori uguali, <strong>sommiamo i numeratori</strong> e conserviamo il denominatore. Con denominatori diversi, prima riduciamo a denominatore comune, preferibilmente al m.c.m.<br><br>Infine semplifichiamo il risultato, se possibile. <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 8\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">8</span></span> + <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 8\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">8</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"4 fratto 8\"><span aria-hidden=\"true\">4</span><span aria-hidden=\"true\">8</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span></span>"
              }
            ],
            "board": "qr-addition"
          },
          {
            "title": "Sottrarre e controllare se si può",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Stessa unità, stessa regola",
                "html": "Per sottrarre usiamo parti della stessa grandezza: <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> − <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 6\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">6</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"9 fratto 12\"><span aria-hidden=\"true\">9</span><span aria-hidden=\"true\">12</span></span> − <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 12\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">12</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"7 fratto 12\"><span aria-hidden=\"true\">7</span><span aria-hidden=\"true\">12</span></span></span>.<br><br>Conserviamo il denominatore comune e sottraiamo i numeratori."
              },
              {
                "title": "La chiusura non vale sempre",
                "html": "In ℚₐ, <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 4\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">4</span></span> − <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> non ha risultato: servirebbe un numero negativo, che non appartiene all’insieme.<br><br>La sottrazione ha risultato in ℚₐ <strong>solo se il minuendo è maggiore o uguale al sottraendo</strong>. L’addizione, invece, è sempre <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-interna\">interna</button> a ℚₐ."
              }
            ],
            "board": "qr-subtraction"
          },
          {
            "title": "Proprietà: riconoscerle per nome",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Commutativa, associativa, elemento neutro",
                "html": "L’addizione è <strong>commutativa</strong>: a + b = b + a. È <strong>associativa</strong>: (a + b) + c = a + (b + c). Ha <strong>elemento neutro 0</strong>: a + 0 = 0 + a = a.<br><br>Queste proprietà valgono per tutti i numeri considerati in ℚₐ."
              },
              {
                "title": "La sottrazione si comporta diversamente",
                "html": "La sottrazione <strong>non è commutativa né associativa</strong>. Per esempio <span class=\"qr-formula\">1 − (<span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span> − <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 4\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">4</span></span>) = <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span></span>, mentre <span class=\"qr-formula\">(1 − <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span>) − <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 4\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">4</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 4\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">4</span></span></span>.<br><br>Ha proprietà <strong>invariantiva</strong>: aggiungendo lo stesso numero ai due termini la differenza non cambia. Sottraendolo, dobbiamo mantenere entrambi i termini in ℚₐ."
              }
            ],
            "board": "qr-properties"
          }
        ]
      },
      {
        "id": "prodotto",
        "title": "Moltiplicazione e divisione",
        "cards": [
          {
            "title": "Una frazione di una frazione",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Il significato del prodotto",
                "html": "Prendiamo <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> di una barra e poi i <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> di quella quantità. Dividendo l’unità in 12 parti uguali, ne scegliamo 6: <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> × <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"6 fratto 12\"><span aria-hidden=\"true\">6</span><span aria-hidden=\"true\">12</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span></span>.<br><br>La moltiplicazione può dare un risultato <strong>più piccolo</strong> dei fattori: succede qui perché entrambi sono compresi fra 0 e 1."
              },
              {
                "title": "La regola e le semplificazioni",
                "html": "Moltiplichiamo i numeratori fra loro e i denominatori fra loro. Prima possiamo semplificare <strong>un fattore al numeratore con un fattore al denominatore</strong>.<br><br><span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> × <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 × 3 fratto 3 × 4\"><span aria-hidden=\"true\">2 × 3</span><span aria-hidden=\"true\">3 × 4</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span></span>. La semplificazione è una divisione dei due termini del prodotto per lo stesso fattore."
              }
            ],
            "board": "qr-multiply"
          },
          {
            "title": "L’inverso e il significato della divisione",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Quante porzioni ci stanno?",
                "html": "Abbiamo <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> di litro e prepariamo porzioni da <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 8\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">8</span></span> di litro. Quante porzioni otteniamo?<br><br><span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> di litro sono <span class=\"qr-fraction\" role=\"math\" aria-label=\"6 fratto 8\"><span aria-hidden=\"true\">6</span><span aria-hidden=\"true\">8</span></span> di litro: contengono <strong>sei porzioni</strong> da un ottavo. Quindi <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 4\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">4</span></span> : <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 8\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">8</span></span> = 6</span>. Il quoziente misura quante volte il divisore è contenuto nel dividendo."
              },
              {
                "title": "Dividere significa moltiplicare per l’inverso",
                "html": "L’<button type=\"button\" class=\"rm-keyword\" data-term=\"qr-inverso\">inverso o reciproco</button> di <span class=\"qr-fraction\" role=\"math\" aria-label=\"a fratto b\"><span aria-hidden=\"true\">a</span><span aria-hidden=\"true\">b</span></span>, con a ≠ 0, è <span class=\"qr-fraction\" role=\"math\" aria-label=\"b fratto a\"><span aria-hidden=\"true\">b</span><span aria-hidden=\"true\">a</span></span>: il loro prodotto è 1.<br><br>Per dividere per una frazione non nulla, moltiplichiamo per il suo inverso: <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> : <span class=\"qr-fraction\" role=\"math\" aria-label=\"4 fratto 5\"><span aria-hidden=\"true\">4</span><span aria-hidden=\"true\">5</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> × <span class=\"qr-fraction\" role=\"math\" aria-label=\"5 fratto 4\"><span aria-hidden=\"true\">5</span><span aria-hidden=\"true\">4</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"5 fratto 6\"><span aria-hidden=\"true\">5</span><span aria-hidden=\"true\">6</span></span></span>. Lo zero <strong>non ha inverso</strong>."
              }
            ],
            "board": "qr-division"
          },
          {
            "title": "Proprietà del prodotto e del quoziente",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Moltiplicazione",
                "html": "La moltiplicazione è <strong>interna, commutativa e associativa</strong>. L’elemento neutro è <strong>1</strong>; lo zero è <strong>assorbente</strong>: a × 0 = 0.<br><br>Vale la proprietà <strong>distributiva</strong>: a × (b + c) = a × b + a × c. Vale anche con la sottrazione quando i passaggi sono definiti in ℚₐ."
              },
              {
                "title": "Divisione",
                "html": "La divisione <strong>non è commutativa né associativa</strong>. Il quoziente resta in ℚₐ per ogni coppia con divisore non nullo.<br><br>Vale la proprietà <strong>invariantiva</strong>: moltiplicando o dividendo dividendo e divisore per lo stesso numero diverso da zero, il quoziente non cambia. Il numero 1 non è un elemento neutro bilatero della divisione: a : 1 = a, ma 1 : a in generale è diverso da a.<details class=\"qr-deeper\"><summary>La divisione è distributiva?</summary><p>Si può distribuire una somma al dividendo: (a + b) : c = a : c + b : c, con c ≠ 0. Non si può in generale distribuire al divisore: a : (b + c) non è a : b + a : c.</p></details>"
              }
            ],
            "board": "qr-properties"
          }
        ]
      },
      {
        "id": "potenze",
        "title": "Potenze e proprietà delle operazioni",
        "cards": [
          {
            "title": "Elevare una frazione a potenza",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Una moltiplicazione ripetuta",
                "html": "Per un esponente naturale n &gt; 0, la potenza è il prodotto di n fattori uguali alla base.<br><br><span class=\"qr-formula\">(<span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span>)³ = <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> × <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> × <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"8 fratto 27\"><span aria-hidden=\"true\">8</span><span aria-hidden=\"true\">27</span></span></span><br><br>Eleviamo allo stesso esponente <strong>numeratore e denominatore</strong>."
              },
              {
                "title": "Esponenti 1 e 0",
                "html": "Per ogni a ∈ ℚₐ, <strong>a¹ = a</strong>. Per a ≠ 0 definiamo <strong>a⁰ = 1</strong>, in modo coerente con le proprietà delle potenze.<br><br><strong>0ⁿ = 0 se n &gt; 0</strong>. In questo percorso <strong>0⁰ non è definito</strong>: la regola dell’esponente zero richiede una base non nulla."
              }
            ],
            "board": "qr-powers"
          },
          {
            "title": "Le proprietà hanno condizioni",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Stessa base e potenza di potenza",
                "html": "<strong>aᵐ × aⁿ = aᵐ⁺ⁿ</strong>: sommiamo gli esponenti perché stiamo riunendo fattori uguali.<br><br><strong>(aᵐ)ⁿ = aᵐⁿ</strong>: moltiplichiamo gli esponenti. <strong>aᵐ : aⁿ = aᵐ⁻ⁿ</strong> se a ≠ 0 e m ≥ n, restando con esponenti naturali. Le scritture devono essere definite: escludiamo sempre 0⁰."
              },
              {
                "title": "Stesso esponente",
                "html": "<strong>aⁿ × bⁿ = (a × b)ⁿ</strong> e <strong>aⁿ : bⁿ = (a : b)ⁿ</strong>, con b ≠ 0 e tutte le potenze definite.<br><br>Non esiste una regola analoga per la somma: <strong>(a + b)² non è in generale a² + b²</strong>. Con a = b = 1, il primo vale 4 e il secondo 2."
              }
            ],
            "board": "qr-powers"
          },
          {
            "title": "Quali operazioni restano in ℚₐ?",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Proprietà di chiusura",
                "html": "Un’operazione è <strong>interna</strong> a un insieme se il risultato appartiene ancora a quell’insieme. In ℚₐ:<br><br>• addizione e moltiplicazione: sempre;<br>• sottrazione: solo se il primo termine è almeno il secondo;<br>• divisione: sempre con <strong>divisore diverso da zero</strong>;<br>• potenze con esponente naturale: purché non si presenti 0⁰."
              },
              {
                "title": "Non confondere due invarianti",
                "html": "La proprietà invariantiva delle <strong>frazioni</strong> conserva il numero rappresentato: <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"4 fratto 6\"><span aria-hidden=\"true\">4</span><span aria-hidden=\"true\">6</span></span>.<br><br>La proprietà invariantiva della <strong>divisione</strong> conserva il quoziente: 2 : 3 = 4 : 6. Sono due modi collegati di esprimere lo stesso fatto: una frazione rappresenta un quoziente."
              }
            ],
            "board": "qr-closure"
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
                "title": "Ricostruiamo il percorso",
                "html": "• Per sommare o sottrarre occorre un denominatore comune.<br><br>• Per moltiplicare, prodotto dei numeratori e prodotto dei denominatori.<br><br>• Per dividere, moltiplichiamo per l’inverso del divisore non nullo.<br><br>• Commutativa, associativa, distributiva, elementi neutri e assorbente descrivono comportamenti precisi.<br><br>• Le potenze rispettano regole e condizioni: zero al divisore e 0⁰ sono esclusi."
              }
            ],
            "board": "qr-summary",
            "qrSummary": [
              [
                "+ e ×",
                "sempre interne"
              ],
              [
                "Sottrazione",
                "primo ≥ secondo"
              ],
              [
                "Divisione",
                "divisore ≠ 0"
              ],
              [
                "Proprietà",
                "nomi e condizioni"
              ]
            ]
          }
        ],
        "quiz": {
          "questions": [
            {
              "question": "Perché 1/2 + 1/3 = 5/6?",
              "options": [
                "Perché si sommano sempre numeratori e denominatori.",
                "Perché 1/2 = 3/6 e 1/3 = 2/6.",
                "Perché basta moltiplicare i denominatori."
              ],
              "answer": 1,
              "feedback": "Dopo aver scelto la stessa grandezza dei pezzi, sommiamo 3 sesti e 2 sesti."
            },
            {
              "question": "Quale operazione non ha risultato in ℚₐ?",
              "options": [
                "1/2 − 3/4",
                "3/4 − 1/2",
                "1/2 × 3/4"
              ],
              "answer": 0,
              "feedback": "Il risultato sarebbe negativo: la sottrazione non è sempre interna a ℚₐ."
            },
            {
              "question": "Per dividere per 2/3 dobbiamo…",
              "options": [
                "moltiplicare per 2/3.",
                "sottrarre 2/3.",
                "moltiplicare per 3/2."
              ],
              "answer": 2,
              "feedback": "3/2 è l’inverso di 2/3: il loro prodotto è 1."
            },
            {
              "question": "Quale proprietà spiega a × (b + c) = a × b + a × c?",
              "options": [
                "Associativa.",
                "Distributiva.",
                "Commutativa."
              ],
              "answer": 1,
              "feedback": "Il prodotto si distribuisce sui due addendi."
            },
            {
              "question": "Quale affermazione è corretta?",
              "options": [
                "0⁰ vale sempre 1.",
                "Ogni razionale, compreso zero, ha un inverso.",
                "Per a ≠ 0, a⁰ = 1."
              ],
              "answer": 2,
              "feedback": "La base non nulla è una condizione necessaria per la regola usata in questa lezione."
            }
          ]
        }
      }
    ],
    "nextLesson": {
      "id": "razionali-assoluti-espressioni"
    }
  },
  "razionali-assoluti-espressioni": {
    "title": "Le espressioni con le frazioni",
    "subtitle": "Matematica · Medie · Numeri razionali assoluti · Prima versione da rivedere",
    "version": 1,
    "status": "work-in-progress",
    "sections": [
      {
        "id": "ordine",
        "title": "Un ordine per le operazioni",
        "cards": [
          {
            "title": "Le frazioni non cambiano le precedenze",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Prima la struttura",
                "html": "Un’espressione indica <strong>quali operazioni eseguire e in quale ordine</strong>. Non basta leggere da sinistra a destra.<br><br>Prima rispettiamo le <strong>parentesi</strong>; a ogni livello eseguiamo le <strong>potenze</strong>, poi <strong>moltiplicazioni e divisioni</strong>, infine <strong>addizioni e sottrazioni</strong>."
              },
              {
                "title": "Stessa precedenza: da sinistra a destra",
                "html": "Moltiplicazione e divisione hanno la <strong>stessa precedenza</strong>; anche addizione e sottrazione hanno la stessa precedenza fra loro. In ciascuna coppia procediamo <strong>da sinistra a destra</strong>.<br><br>8 : 4 × 2 = 2 × 2 = 4. Non è 8 : (4 × 2). Analogamente, 1 − 1/2 + 1/4 = 3/4.<br><br>Se compaiono soltanto somme o soltanto prodotti, le proprietà commutativa e associativa permettono di cambiare ordine o raggruppamenti. Non estendiamo questa libertà a sottrazioni e divisioni."
              }
            ],
            "board": "qr-rules"
          },
          {
            "title": "Le parentesi raggruppano un calcolo",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Dall’interno verso l’esterno",
                "html": "In <span class=\"qr-formula\">(<span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span> + <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 3\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">3</span></span>) : <span class=\"qr-fraction\" role=\"math\" aria-label=\"5 fratto 6\"><span aria-hidden=\"true\">5</span><span aria-hidden=\"true\">6</span></span></span>, la somma fra parentesi deve essere completata prima della divisione.<br><br>Tonde, quadre e graffe rendono più leggibili i raggruppamenti annidati: conta <strong>quale parentesi è interna a quale altra</strong>."
              },
              {
                "title": "Una linea di frazione raggruppa",
                "html": "La linea in <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 + 1/2 fratto 3/4\"><span aria-hidden=\"true\">1 + 1/2</span><span aria-hidden=\"true\">3/4</span></span> raggruppa tutto il numeratore e tutto il denominatore: significa <strong>(1 + 1/2) : (3/4)</strong>.<br><br>Prima il numeratore diventa 3/2; poi dividiamo: (3/2) : (3/4) = 2. Non possiamo interpretarla come 1 + (1/2) : (3/4)."
              }
            ],
            "board": "qr-brackets"
          }
        ]
      },
      {
        "id": "esempio",
        "title": "Un’espressione, un passaggio alla volta",
        "cards": [
          {
            "title": "Prevedi il prossimo passaggio",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Scegliere prima di calcolare",
                "html": "<span class=\"qr-formula\">(<span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span> + <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 3\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">3</span></span>) : <span class=\"qr-fraction\" role=\"math\" aria-label=\"5 fratto 6\"><span aria-hidden=\"true\">5</span><span aria-hidden=\"true\">6</span></span> + (<span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span>)²</span><br><br>La lavagna mostra il procedimento. Prima di premere <strong>«Passaggio successivo»</strong>, individua l’operazione ammessa: la somma nella parentesi e la potenza possono essere calcolate prima della somma finale.",
                "cloze": [
                  {
                    "before": "Prima della somma finale possiamo calcolare ",
                    "options": [
                      "la parentesi e la potenza",
                      "la somma di tutti i numeratori",
                      "soltanto da sinistra a destra"
                    ],
                    "answer": 0,
                    "after": ".",
                    "feedback": "Parentesi e potenza devono essere risolte prima delle operazioni successive."
                  }
                ]
              },
              {
                "title": "Ogni uguale conserva il valore",
                "html": "<span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"5 fratto 6\"><span aria-hidden=\"true\">5</span><span aria-hidden=\"true\">6</span></span> : <span class=\"qr-fraction\" role=\"math\" aria-label=\"5 fratto 6\"><span aria-hidden=\"true\">5</span><span aria-hidden=\"true\">6</span></span> + <span class=\"qr-fraction\" role=\"math\" aria-label=\"4 fratto 9\"><span aria-hidden=\"true\">4</span><span aria-hidden=\"true\">9</span></span> = 1 + <span class=\"qr-fraction\" role=\"math\" aria-label=\"4 fratto 9\"><span aria-hidden=\"true\">4</span><span aria-hidden=\"true\">9</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"13 fratto 9\"><span aria-hidden=\"true\">13</span><span aria-hidden=\"true\">9</span></span></span><br><br>Riscriviamo le parti che non abbiamo ancora calcolato. Il segno <strong>=</strong> collega espressioni dello <strong>stesso valore</strong>, non soltanto il risultato dell’ultima operazione."
              }
            ],
            "board": "qr-expression"
          },
          {
            "title": "Semplificare una struttura, non cancellare cifre",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Semplificazioni ammesse",
                "html": "<span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 8\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">8</span></span> × <span class=\"qr-fraction\" role=\"math\" aria-label=\"4 fratto 9\"><span aria-hidden=\"true\">4</span><span aria-hidden=\"true\">9</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 6\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">6</span></span></span><br><br>Possiamo dividere 3 e 9 per 3, poi 4 e 8 per 4: sono fattori nel numeratore e nel denominatore dello <strong>stesso prodotto</strong>."
              },
              {
                "title": "Una somma non è un prodotto",
                "html": "In <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 + 6 fratto 3\"><span aria-hidden=\"true\">3 + 6</span><span aria-hidden=\"true\">3</span></span>, non possiamo cancellare il 3 del denominatore con <strong>un solo addendo</strong>.<br><br>Possiamo prima sommare: 9/3 = 3. Oppure raccogliere il fattore comune: (3 × 1 + 3 × 2)/3 = [3 × (1 + 2)]/3 = 3. La proprietà che giustifica il raccoglimento è la <strong>distributiva</strong>."
              }
            ],
            "board": "qr-cancel"
          }
        ]
      },
      {
        "id": "controllo",
        "title": "Controllare il significato del risultato",
        "cards": [
          {
            "title": "Tre controlli che evitano molti errori",
            "stepMode": "replace",
            "steps": [
              {
                "title": "L’espressione è definita?",
                "html": "Controlla che nessun <strong>divisore sia zero</strong>, anche quando è scritto come un’espressione. Per esempio 1 : (1/2 − 1/2) non è definita.<br><br>In ℚₐ controlla anche che ogni sottrazione richiesta abbia risultato non negativo e che non compaia 0⁰."
              },
              {
                "title": "Il valore è plausibile?",
                "html": "Un numero positivo moltiplicato per <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span> si dimezza; diviso per <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span> raddoppia. Se hai ottenuto il contrario, ricontrolla.<br><br>Riduci il risultato ai minimi termini e, se utile, confrontalo con 0, 1 o un numero intero vicino. Il controllo <strong>non sostituisce il procedimento</strong>, ma aiuta a riconoscere un errore."
              }
            ],
            "board": "qr-checks"
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
                "title": "Ricostruiamo il percorso",
                "html": "• Parentesi, potenze, prodotti e quozienti, somme e differenze.<br><br>• A pari precedenza si procede da sinistra a destra.<br><br>• La linea di frazione raggruppa numeratore e denominatore.<br><br>• Semplifichiamo fattori, non singoli addendi di una somma.<br><br>• Ogni passaggio con = deve conservare il valore dell’intera espressione."
              }
            ],
            "board": "qr-summary",
            "qrSummary": [
              [
                "Struttura",
                "parentesi e precedenze"
              ],
              [
                "Passaggi",
                "valore conservato"
              ],
              [
                "Semplifica",
                "fattori comuni"
              ],
              [
                "Controlla",
                "definizione e plausibilità"
              ]
            ]
          }
        ],
        "quiz": {
          "questions": [
            {
              "question": "In 8 : 4 × 2, quale risultato è corretto?",
              "options": [
                "1",
                "4",
                "8"
              ],
              "answer": 1,
              "feedback": "Divisione e moltiplicazione hanno pari precedenza: (8 : 4) × 2 = 4."
            },
            {
              "question": "In (1/2 + 1/3) : 5/6, che cosa calcoliamo prima?",
              "options": [
                "La somma fra parentesi.",
                "1/3 : 5/6, ignorando le parentesi.",
                "Sommiamo tutti i numeratori."
              ],
              "answer": 0,
              "feedback": "La parentesi raggruppa la somma, che vale 5/6; poi il quoziente vale 1."
            },
            {
              "question": "Perché (3 + 6)/3 vale 3?",
              "options": [
                "Si cancella soltanto il primo 3.",
                "Il denominatore si può ignorare.",
                "Si somma il numeratore: 9/3 = 3."
              ],
              "answer": 2,
              "feedback": "Prima calcoliamo la somma, oppure raccogliamo un fattore comune a tutti gli addendi."
            },
            {
              "question": "Quale espressione non è definita?",
              "options": [
                "1 : (1/2 − 1/2)",
                "(1/2 + 1/2) : 1",
                "0 : 1/2"
              ],
              "answer": 0,
              "feedback": "La parentesi vale zero: il divisore non può essere zero."
            }
          ]
        }
      }
    ],
    "nextLesson": {
      "id": "razionali-assoluti-decimali"
    }
  },
  "razionali-assoluti-decimali": {
    "title": "Frazioni e numeri decimali",
    "subtitle": "Matematica · Medie · Numeri razionali assoluti · Prima versione da rivedere",
    "version": 1,
    "status": "work-in-progress",
    "sections": [
      {
        "id": "decimali",
        "title": "Due rappresentazioni dello stesso numero",
        "cards": [
          {
            "title": "L’unità si divide ancora",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Decimi, centesimi, millesimi",
                "html": "Dividendo un’unità in 10 parti uguali otteniamo i <strong>decimi</strong>; dividendo ogni decimo in 10 otteniamo i <strong>centesimi</strong>; poi i millesimi.<br><br><span class=\"qr-formula\">0,3 = <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 10\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">10</span></span>; 0,03 = <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 100\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">100</span></span>; 0,003 = <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 1000\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">1000</span></span></span>. La posizione di una cifra determina il suo valore."
              },
              {
                "title": "Frazioni decimali",
                "html": "Una <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-frazione-decimale\">frazione decimale</button> ha per denominatore una <strong>potenza di 10</strong>: 10, 100, 1000, …<br><br><span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"37 fratto 100\"><span aria-hidden=\"true\">37</span><span aria-hidden=\"true\">100</span></span> = 0,37</span> e <span class=\"qr-formula\">2,05 = <span class=\"qr-fraction\" role=\"math\" aria-label=\"205 fratto 100\"><span aria-hidden=\"true\">205</span><span aria-hidden=\"true\">100</span></span></span>. Gli zeri dopo l’ultima cifra decimale non nulla non cambiano il valore: 0,5 = 0,50."
              }
            ],
            "board": "qr-decimal-parts"
          },
          {
            "title": "Ogni frazione è una divisione",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Dal numeratore al quoziente",
                "html": "Per trovare la rappresentazione decimale di <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 8\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">8</span></span> eseguiamo <strong>3 : 8</strong>. Dopo la parte intera, a ogni passo moltiplichiamo il resto per 10 e cerchiamo la cifra successiva.<br><br>Nella lavagna segui resti e cifre: 30 : 8 dà 3 con resto 6; 60 : 8 dà 7 con resto 4; 40 : 8 dà 5 con resto 0."
              },
              {
                "title": "Quando il resto è zero",
                "html": "La divisione termina: <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 8\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">8</span></span> = 0,375</span>. Abbiamo un <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-limitato\">numero decimale limitato</button>.<br><br>È lo stesso numero scritto in un altro modo, non un’approssimazione. Se proseguissimo dopo il resto zero, otterremmo soltanto altre cifre zero."
              }
            ],
            "board": "qr-long-division"
          }
        ]
      },
      {
        "id": "periodici",
        "title": "Quando la divisione non termina",
        "cards": [
          {
            "title": "I resti spiegano il periodo",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Un resto già incontrato",
                "html": "Con <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 6\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">6</span></span>, dopo la prima cifra troviamo resto 4. Il passo 40 : 6 produce la cifra 6 e di nuovo resto 4.<br><br>Stesso resto, stesso passo: le cifre si ripetono. <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 6\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">6</span></span> = 0,1666…</span>. Non interrompiamo il numero: i puntini indicano che il 6 continua <strong>senza fine</strong>."
              },
              {
                "title": "Periodo e antiperiodo",
                "html": "Il blocco che si ripete è il <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-periodo\">periodo</button>. In 0,1666… il periodo è 6; la cifra 1 prima del periodo è l’<strong>antiperiodo</strong>.<br><br>Se il periodo inizia subito dopo la virgola, il numero è <strong>periodico semplice</strong>, come 0,272727…; se è preceduto da un antiperiodo è <strong>periodico misto</strong>, come 0,1666…."
              }
            ],
            "board": "qr-long-division",
            "qrPreset": "1/6"
          },
          {
            "title": "Da che cosa dipende il tipo di decimale?",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Prima riduciamo ai minimi termini",
                "html": "Scomponiamo il <strong>denominatore della frazione ridotta ai minimi termini</strong>:<br><br>• solo fattori primi 2 e/o 5 → decimale <strong>limitato</strong>;<br>• nessun fattore 2 o 5 → periodico <strong>semplice</strong>;<br>• 2 e/o 5 insieme ad altri primi → periodico <strong>misto</strong>.<br><br>Se il denominatore ridotto è 1, il numero è naturale: è un caso limitato."
              },
              {
                "title": "Perché conta la frazione ridotta?",
                "html": "<span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 6\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">6</span></span> ha un 3 nel denominatore, ma si riduce a <span class=\"qr-fraction\" role=\"math\" aria-label=\"1 fratto 2\"><span aria-hidden=\"true\">1</span><span aria-hidden=\"true\">2</span></span>: il decimale è 0,5, quindi limitato.<br><br>Per ottenere una frazione decimale dobbiamo poter trasformare il denominatore in una potenza di 10. Poiché <strong>10ⁿ = 2ⁿ × 5ⁿ</strong>, bastano fattori 2 e 5.<details class=\"qr-deeper\"><summary>Perché ogni frazione dà un decimale limitato o periodico?</summary><p>Con denominatore b i resti possibili sono 0, 1, …, b − 1. Se incontriamo 0 la divisione termina; altrimenti, essendo i resti possibili in numero finito, prima o poi un resto si ripete. Da quel punto si ripete il procedimento e quindi un blocco di cifre.</p></details>"
              }
            ],
            "board": "qr-denominator"
          }
        ]
      },
      {
        "id": "generatrici",
        "title": "Dal decimale alla frazione",
        "cards": [
          {
            "title": "Una frazione generatrice",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Il caso limitato",
                "html": "La <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-generatrice\">frazione generatrice</button> rappresenta esattamente il decimale dato.<br><br>Per 0,375 scriviamo 375/1000 e semplifichiamo: <span class=\"qr-formula\">0,375 = <span class=\"qr-fraction\" role=\"math\" aria-label=\"375 fratto 1000\"><span aria-hidden=\"true\">375</span><span aria-hidden=\"true\">1000</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 8\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">8</span></span></span>. Il denominatore ha tanti zeri quante sono le cifre dopo la virgola. Lo stesso vale per 2,05 = 205/100."
              },
              {
                "title": "Il periodico semplice: da dove arrivano i 9?",
                "html": "Poniamo x = 0,272727…. Allora 100x = 27,272727…. Sottraendo, la coda periodica scompare: <strong>100x − x = 27</strong>, cioè 99x = 27.<br><br>Quindi <span class=\"qr-formula\">x = <span class=\"qr-fraction\" role=\"math\" aria-label=\"27 fratto 99\"><span aria-hidden=\"true\">27</span><span aria-hidden=\"true\">99</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"3 fratto 11\"><span aria-hidden=\"true\">3</span><span aria-hidden=\"true\">11</span></span></span>. Due cifre di periodo producono due 9: 100 − 1 = 99."
              }
            ],
            "board": "qr-generator"
          },
          {
            "title": "Il periodico misto",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Allineare le code periodiche",
                "html": "Poniamo x = <strong>1,23333…</strong>. Moltiplichiamo prima per 10, poi per 100:<br><br><strong>10x = 12,3333…</strong><br><strong>100x = 123,3333…</strong><br><br>Sottraendo otteniamo <strong>90x = 111</strong>: le due code identiche si eliminano."
              },
              {
                "title": "La regola nasce dalla sottrazione",
                "html": "<span class=\"qr-formula\">x = <span class=\"qr-fraction\" role=\"math\" aria-label=\"123 − 12 fratto 90\"><span aria-hidden=\"true\">123 − 12</span><span aria-hidden=\"true\">90</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"111 fratto 90\"><span aria-hidden=\"true\">111</span><span aria-hidden=\"true\">90</span></span> = <span class=\"qr-fraction\" role=\"math\" aria-label=\"37 fratto 30\"><span aria-hidden=\"true\">37</span><span aria-hidden=\"true\">30</span></span></span><br><br>Al numeratore: le cifre fino al primo periodo meno le cifre che precedono il periodo. Al denominatore: <strong>un 9 per ogni cifra del periodo e uno 0 per ogni cifra dell’antiperiodo</strong>.<details class=\"qr-deeper\"><summary>E 0,9999…?</summary><p>Per x = 0,9999… abbiamo 10x − x = 9, quindi x = 9/9 = 1. Non è un numero «appena più piccolo» di 1: <strong>è esattamente 1</strong>. Un decimale limitato non nullo ha anche una scrittura con una coda infinita di 9, per esempio 0,5 = 0,49999…. Nella classificazione usiamo la scrittura terminante quando esiste.</p></details>"
              }
            ],
            "board": "qr-generator",
            "qrPreset": "mixed"
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
                "title": "Ricostruiamo il percorso",
                "html": "• La virgola separa parte intera e parte decimale; il valore dipende dalla posizione.<br><br>• Una frazione decimale ha denominatore 10, 100, 1000, …<br><br>• La divisione produce un resto zero oppure ripete un resto: il decimale è limitato o periodico.<br><br>• Per classificare il decimale guardiamo il denominatore dopo la riduzione ai minimi termini.<br><br>• La frazione generatrice rappresenta il valore esatto, anche per un periodo infinito."
              }
            ],
            "board": "qr-summary",
            "qrSummary": [
              [
                "Frazione",
                "quoziente esatto"
              ],
              [
                "Divisione",
                "resti e cifre"
              ],
              [
                "Periodo",
                "resto che ritorna"
              ],
              [
                "Generatrice",
                "ritorno alla frazione"
              ]
            ]
          }
        ],
        "quiz": {
          "questions": [
            {
              "question": "Qual è il valore di 0,04?",
              "options": [
                "4/10",
                "4/100",
                "4/1000"
              ],
              "answer": 1,
              "feedback": "La cifra 4 occupa la posizione dei centesimi."
            },
            {
              "question": "Per prevedere il tipo di decimale di 3/6, quale denominatore studiamo?",
              "options": [
                "6, senza semplificare.",
                "3, perché è il numeratore.",
                "2, dopo aver ridotto 3/6 a 1/2."
              ],
              "answer": 2,
              "feedback": "La riduzione è indispensabile: 3/6 = 1/2 = 0,5."
            },
            {
              "question": "Perché in una divisione le cifre possono iniziare a ripetersi?",
              "options": [
                "Si ripete un resto e quindi si ripetono i passaggi successivi.",
                "Ogni frazione deve avere una sola cifra decimale.",
                "I puntini indicano un errore di calcolo."
              ],
              "answer": 0,
              "feedback": "Il passo successivo dipende dal resto: un resto già incontrato genera la stessa coda."
            },
            {
              "question": "In 0,1666… qual è l’antiperiodo?",
              "options": [
                "6",
                "16",
                "1"
              ],
              "answer": 2,
              "feedback": "1 è la cifra decimale che precede il periodo 6."
            },
            {
              "question": "La frazione generatrice di 0,272727… è…",
              "options": [
                "27/100",
                "27/99",
                "27/9"
              ],
              "answer": 1,
              "feedback": "Sottraendo x da 100x eliminiamo la coda e otteniamo 99x = 27."
            }
          ]
        }
      }
    ],
    "nextLesson": {
      "id": "razionali-assoluti-approssimazioni"
    }
  },
  "razionali-assoluti-approssimazioni": {
    "title": "I valori approssimati di un numero razionale",
    "subtitle": "Matematica · Medie · Numeri razionali assoluti · Prima versione da rivedere",
    "version": 1,
    "status": "work-in-progress",
    "sections": [
      {
        "id": "esatto",
        "title": "Quando un numero scritto non è il valore esatto",
        "cards": [
          {
            "title": "Una misura sullo schermo",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Il numero e le cifre che vediamo",
                "html": "Dobbiamo usare <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> di metro di nastro. Il valore esatto è <strong>0,6666… metri</strong>, ma uno strumento può mostrare soltanto due cifre decimali.<br><br>0,66 e 0,67 sono due numeri vicini a 2/3: nessuno dei due coincide con il valore esatto."
              },
              {
                "title": "Uguale oppure circa uguale?",
                "html": "Scriviamo <span class=\"qr-formula\"><span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> ≈ 0,67</span>, dove <strong>≈</strong> significa «circa uguale». Scrivere 2/3 = 0,67 sarebbe falso.<br><br>La frazione 2/3 e il periodico 0,6666… sono rappresentazioni <strong>esatte</strong>; 0,67 è un’<strong>approssimazione</strong>."
              }
            ],
            "board": "qr-approximation"
          },
          {
            "title": "Scegliere la precisione",
            "stepMode": "replace",
            "steps": [
              {
                "title": "La griglia dei decimali",
                "html": "Con una cifra decimale la griglia ha passo <strong>0,1</strong>; con due ha passo <strong>0,01</strong>; con tre ha passo <strong>0,001</strong>.<br><br>Più cifre conserviamo, più piccola è la distanza fra due valori consecutivi della griglia. Nella lavagna cambia il numero di cifre."
              },
              {
                "title": "Un limite per l’errore",
                "html": "2/3 è compreso tra <strong>0,66 e 0,67</strong>. La distanza fra i due estremi è 0,01.<br><br>Usando 0,66 oppure 0,67, l’<button type=\"button\" class=\"rm-keyword\" data-term=\"qr-errore\">errore assoluto</button> è minore di 0,01. Dire «a meno di un centesimo» significa controllare la <strong>distanza dal valore esatto</strong>."
              }
            ],
            "board": "qr-approximation"
          }
        ]
      },
      {
        "id": "difetto-eccesso",
        "title": "Per difetto, per eccesso e per arrotondamento",
        "cards": [
          {
            "title": "Racchiudere il valore esatto",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Due estremi vicini",
                "html": "Per 2/3, a due cifre decimali:<br><br>• <strong>0,66</strong> è l’approssimazione per <strong>difetto</strong>;<br>• <strong>0,67</strong> è l’approssimazione per <strong>eccesso</strong>.<br><br><span class=\"qr-formula\">0,66 &lt; <span class=\"qr-fraction\" role=\"math\" aria-label=\"2 fratto 3\"><span aria-hidden=\"true\">2</span><span aria-hidden=\"true\">3</span></span> &lt; 0,67</span><br><br>Fra i numeri della griglia scegliamo rispettivamente il maggiore che non supera il valore esatto e il minore che non gli è inferiore."
              },
              {
                "title": "Il troncamento",
                "html": "Il {K(\"troncamento\",\"troncamento\")} elimina tutte le cifre successive alla posizione scelta, senza modificare quelle conservate.<br><br>Per numeri non negativi, troncare produce il valore per difetto. <strong>3,14159</strong> troncato ai centesimi dà <strong>3,14</strong>. Se il numero è già sulla griglia, per esempio 0,5 ai centesimi, il risultato è esatto: 0,50."
              }
            ],
            "board": "qr-approximation"
          },
          {
            "title": "Arrotondare al valore più vicino",
            "stepMode": "replace",
            "steps": [
              {
                "title": "La prima cifra scartata",
                "html": "Per <button type=\"button\" class=\"rm-keyword\" data-term=\"qr-arrotondamento\">arrotondare</button> guardiamo <strong>la prima cifra che non conserveremo</strong>:<br><br>• da 0 a 4: lasciamo invariata l’ultima cifra conservata;<br>• da 5 a 9: aumentiamo di 1 l’ultima cifra conservata, facendo gli eventuali riporti.<br><br>2/3 ai centesimi diventa <strong>0,67</strong>: la terza cifra decimale è 6."
              },
              {
                "title": "Riporti e casi a metà",
                "html": "<strong>9,995</strong> arrotondato ai centesimi diventa <strong>10,00</strong>: il riporto attraversa entrambi i 9.<br><br>Quando il valore è esattamente a metà, come 1,235 fra 1,23 e 1,24, usiamo la convenzione scolastica: <strong>si arrotonda verso l’alto</strong> per questi numeri non negativi. Altre convenzioni esistono, ma non le usiamo qui."
              }
            ],
            "board": "qr-approximation"
          },
          {
            "title": "Quanto possiamo sbagliare?",
            "stepMode": "replace",
            "steps": [
              {
                "title": "Metà del passo",
                "html": "Arrotondando al valore della griglia più vicino, l’errore assoluto è <strong>al massimo metà del passo</strong>.<br><br>Ai centesimi il passo è 0,01: l’errore è al massimo 0,005. Troncando o prendendo il valore per eccesso, l’errore è invece <strong>minore di un passo</strong>."
              },
              {
                "title": "Scegliere in base allo scopo",
                "html": "Per un conto approssimato può bastare un decimale; per un calcolo successivo possono servirne di più. Non esiste un numero di cifre «giusto» senza sapere a che cosa serve il risultato.<br><br>Quando possibile, conserva la <strong>frazione esatta durante i calcoli</strong> e arrotonda soltanto alla fine: arrotondamenti intermedi possono accumulare errori."
              }
            ],
            "board": "qr-approximation"
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
                "title": "Ricostruiamo il percorso",
                "html": "• Una frazione e il suo sviluppo periodico rappresentano il valore esatto.<br><br>• Per un’approssimazione usiamo ≈, non =.<br><br>• Difetto ed eccesso racchiudono il numero fra valori della griglia scelta.<br><br>• Per i non negativi, il troncamento dà il valore per difetto.<br><br>• L’arrotondamento sceglie il valore più vicino; a metà usiamo la convenzione verso l’alto."
              }
            ],
            "board": "qr-summary",
            "qrSummary": [
              [
                "Valore esatto",
                "frazione o periodico"
              ],
              [
                "Difetto / eccesso",
                "un intervallo"
              ],
              [
                "Troncamento",
                "elimino cifre"
              ],
              [
                "Arrotondamento",
                "il più vicino"
              ]
            ]
          }
        ],
        "quiz": {
          "questions": [
            {
              "question": "Quale scrittura è corretta?",
              "options": [
                "2/3 = 0,67",
                "2/3 ≈ 0,67",
                "2/3 = 0,66"
              ],
              "answer": 1,
              "feedback": "0,67 è un’approssimazione: nessun decimale limitato coincide con 2/3."
            },
            {
              "question": "Il troncamento di 1,278 ai centesimi è…",
              "options": [
                "1,27",
                "1,28",
                "1,2780"
              ],
              "answer": 0,
              "feedback": "Conserviamo due cifre decimali ed eliminiamo le successive senza aumentare la seconda."
            },
            {
              "question": "L’arrotondamento di 1,278 ai centesimi è…",
              "options": [
                "1,27",
                "1,278",
                "1,28"
              ],
              "answer": 2,
              "feedback": "La prima cifra scartata è 8: aumentiamo da 7 a 8 la cifra dei centesimi."
            },
            {
              "question": "Ai centesimi, quale errore massimo garantisce l’arrotondamento al più vicino?",
              "options": [
                "0,1",
                "0,005",
                "0,05"
              ],
              "answer": 1,
              "feedback": "È metà del passo 0,01: al massimo 0,005."
            },
            {
              "question": "9,995 arrotondato ai centesimi, con la nostra convenzione, è…",
              "options": [
                "9,99",
                "9,100",
                "10,00"
              ],
              "answer": 2,
              "feedback": "La cifra scartata è 5 e i riporti portano a 10,00."
            }
          ]
        }
      }
    ]
  }
});
Object.assign(window.READER_GLOSSARY,{
  "qr-frazione": {
    "title": "Frazione",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Una scrittura a/b, con a e b naturali e b diverso da zero. Il numeratore a conta le parti e il denominatore b indica in quante parti uguali dividere l’unità. Rappresenta anche il quoziente a : b."
  },
  "qr-equivalenti": {
    "title": "Frazioni equivalenti",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Frazioni che rappresentano lo stesso numero: per esempio 1/2, 2/4 e 3/6. Le loro rappresentazioni occupano lo stesso punto sulla retta."
  },
  "qr-invariantiva": {
    "title": "Proprietà invariantiva delle frazioni",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Moltiplicare o dividere entrambi i termini per lo stesso naturale diverso da zero conserva il valore. Per dividere i termini ottenendo ancora naturali, scegliamo un loro divisore comune."
  },
  "qr-minimi": {
    "title": "Riduzione ai minimi termini",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Una frazione è ridotta ai minimi termini quando il M.C.D. di numeratore e denominatore è 1. Per ridurla si possono dividere entrambi per il loro M.C.D."
  },
  "qr-razionale": {
    "title": "Numero razionale assoluto",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Numero rappresentabile come a/b con a e b naturali e b ≠ 0. In queste lezioni l’insieme è ℚₐ: contiene lo zero e i razionali positivi, senza numeri negativi."
  },
  "qr-classe": {
    "title": "Classe di equivalenza",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "L’insieme di tutte le frazioni equivalenti a una frazione data. Per esempio la classe di 1/2 contiene 2/4, 3/6, 4/8, … e tutte le altre frazioni che hanno lo stesso valore."
  },
  "qr-rapporto": {
    "title": "Rapporto",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Il rapporto fra a e b, in quest’ordine e con b ≠ 0, è il quoziente a : b. Invertendo l’ordine si ottiene in generale un numero diverso. Per confrontare grandezze omogenee, esprimile prima nella stessa unità."
  },
  "qr-denso": {
    "title": "Insieme denso",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Fra due razionali distinti c’è sempre un altro razionale. Un esempio è il loro punto medio (a + b) : 2. Ripetendo la costruzione si trovano infiniti razionali fra i due iniziali."
  },
  "qr-interna": {
    "title": "Operazione interna e chiusura",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Un’operazione definita su tutte le coppie di un insieme è interna se i suoi risultati restano nell’insieme. In ℚₐ lo sono addizione e moltiplicazione. Per la divisione bisogna escludere il divisore zero; per la sottrazione il primo termine deve essere almeno il secondo."
  },
  "qr-inverso": {
    "title": "Inverso o reciproco",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "L’inverso di un numero non nullo è il numero che moltiplicato per esso dà 1. L’inverso di a/b è b/a, purché a ≠ 0. Zero non ha inverso."
  },
  "qr-frazione-decimale": {
    "title": "Frazione decimale",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Una frazione con denominatore 10, 100, 1000, …, cioè una potenza di 10. Una frazione ordinaria può essere equivalente a una decimale anche se non è già scritta con tale denominatore: 1/4 = 25/100."
  },
  "qr-limitato": {
    "title": "Numero decimale limitato",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Un numero che ammette una scrittura con un numero finito di cifre decimali. Per esempio 0,375 = 3/8. La scrittura può continuare con soli zeri senza cambiare il valore."
  },
  "qr-periodo": {
    "title": "Periodo e antiperiodo",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Il periodo è il blocco più breve di cifre che si ripete indefinitamente nella parte decimale. L’antiperiodo comprende le cifre decimali prima del periodo. In 0,1666… il periodo è 6 e l’antiperiodo è 1."
  },
  "qr-generatrice": {
    "title": "Frazione generatrice",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Una frazione che rappresenta esattamente un numero decimale limitato o periodico. Per esempio 27/99 è generatrice di 0,272727… e si riduce a 3/11."
  },
  "qr-errore": {
    "title": "Errore assoluto",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "La distanza fra il valore esatto e il valore approssimato: il maggiore meno il minore. È sempre non negativo. Dice quanto siamo lontani dal valore esatto, nella stessa unità di misura."
  },
  "qr-troncamento": {
    "title": "Troncamento",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Conservare un numero prefissato di cifre decimali ed eliminare le successive, senza modificare quelle conservate. Per numeri non negativi il risultato non supera il valore esatto."
  },
  "qr-arrotondamento": {
    "title": "Arrotondamento",
    "kind": "Matematica · Numeri razionali assoluti",
    "text": "Scegliere il valore più vicino nella griglia stabilita. Si guarda la prima cifra scartata: da 0 a 4 si lascia invariata l’ultima conservata, da 5 a 9 la si aumenta, con gli eventuali riporti. Qui i casi a metà si risolvono verso l’alto."
  }
});
})();
