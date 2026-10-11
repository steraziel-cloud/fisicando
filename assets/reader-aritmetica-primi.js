/* Original GatitoMath textual draft. See docs/arithmetic-path.md for reference and review scope. */
Object.assign(window.READER_GLOSSARY, {
  "arith-primo": {
    "title": "Numero primo",
    "kind": "Concetto",
    "text": "Un numero naturale maggiore di 1 che ha esattamente due divisori positivi distinti: 1 e se stesso."
  },
  "arith-composto": {
    "title": "Numero composto",
    "kind": "Concetto",
    "text": "Un numero naturale maggiore di 1 che non è primo. Può essere scritto come prodotto di due numeri naturali entrambi maggiori di 1."
  },
  "arith-crivello": {
    "title": "Crivello di Eratostene",
    "kind": "Procedura",
    "text": "Un procedimento per trovare tutti i numeri primi fino a un limite assegnato. Si esclude 1 e, a partire da 2, si conservano i primi e si eliminano i loro multipli maggiori del primo stesso."
  },
  "arith-scomposizione": {
    "title": "Scomposizione in fattori primi",
    "kind": "Concetto",
    "text": "La rappresentazione di un numero naturale maggiore di 1 come prodotto di numeri primi. A meno dell’ordine, i fattori primi e il numero di volte in cui compaiono sono determinati univocamente."
  },
  "arith-potenza": {
    "title": "Potenza con esponente naturale positivo",
    "kind": "Concetto",
    "text": "Un prodotto di fattori tutti uguali. La base è il fattore ripetuto; l’esponente indica quante volte compare come fattore. Un esponente 1 lascia invariata la base."
  },
  "arith-divisore-comune": {
    "title": "Divisore comune",
    "kind": "Concetto",
    "text": "Un numero naturale positivo che divide senza resto ciascuno dei numeri considerati."
  },
  "arith-mcd": {
    "title": "Massimo comune divisore",
    "kind": "Concetto",
    "text": "Il maggiore dei divisori positivi comuni ai numeri considerati. Per numeri naturali positivi esiste sempre. Si indica con M.C.D. e si ottiene moltiplicando i fattori primi comuni a tutti, ciascuno con il minore esponente presente nelle scomposizioni."
  },
  "arith-coprimi": {
    "title": "Numeri primi tra loro",
    "kind": "Concetto",
    "text": "Due o più numeri naturali positivi il cui massimo comune divisore è 1. Non devono necessariamente essere numeri primi. Per più di due numeri, essere primi tra loro nel complesso è diverso dall’essere primi tra loro a due a due."
  },
  "arith-multiplo-comune": {
    "title": "Multiplo comune",
    "kind": "Concetto",
    "text": "Un numero naturale che è multiplo di ciascuno dei numeri considerati. Zero è sempre un multiplo comune; nei problemi di primo incontro successivo si cercano multipli comuni positivi."
  },
  "arith-mcm": {
    "title": "Minimo comune multiplo",
    "kind": "Concetto",
    "text": "Il più piccolo multiplo comune positivo dei numeri naturali positivi considerati. Si indica con m.c.m. e si ottiene moltiplicando tutti i fattori primi presenti in almeno una scomposizione, ciascuno con il maggiore esponente presente."
  },
  "arith-teorema-fondamentale": {
    "title": "Teorema fondamentale dell’aritmetica",
    "kind": "Teorema",
    "text": "Ogni numero naturale maggiore di 1 si può scrivere come prodotto di numeri primi in un unico modo, a meno dell’ordine dei fattori."
  },
  "arith-congettura": {
    "title": "Congettura",
    "kind": "Concetto",
    "text": "Un’affermazione matematica proposta come vera, ma per la quale non si dispone di una dimostrazione. La verifica di molti esempi può suggerirla; non sostituisce una dimostrazione generale."
  },
  "arith-gemelli": {
    "title": "Numeri primi gemelli",
    "kind": "Concetto",
    "text": "Due numeri primi la cui differenza è 2."
  }
});
window.READER_LESSONS["aritmetica-primi"] = {
  "title": "Numeri primi e numeri composti",
  "subtitle": "Matematica · Medie e biennio · Prima bozza in lavorazione",
  "version": 1,
  "status": "work-in-progress",
  "sections": [
    {
      "id": "due-divisori",
      "title": "Quando restano solo 1 e il numero stesso",
      "cards": [
        {
          "title": "Non tutti i numeri hanno gli stessi divisori",
          "steps": [
            {
              "title": "Confrontiamo 12 e 13",
              "html": "I divisori positivi di <strong>12</strong> sono <strong>1, 2, 3, 4, 6, 12</strong>. Quelli di <strong>13</strong> sono soltanto <strong>1 e 13</strong>.<br><br>12 si può costruire moltiplicando due numeri maggiori di 1, per esempio <strong>3 × 4</strong>. Per 13, invece, l’unica coppia di fattori positivi è <strong>1 × 13</strong>."
            },
            {
              "title": "Due nomi per questa differenza",
              "html": "Un numero naturale maggiore di 1 è <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-primo\">primo</button> se ha <strong>esattamente due divisori positivi distinti</strong>: 1 e se stesso.<br><br>Se ha altri divisori positivi, è <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-composto\">composto</button>. Quindi 13 è primo e 12 è composto."
            }
          ]
        },
        {
          "title": "Il ruolo di 1, di 0 e di 2",
          "steps": [
            {
              "title": "1 e 0",
              "html": "<strong>1 non è primo:</strong> ha un solo divisore positivo, 1. Non è nemmeno composto, perché non è maggiore di 1.<br><br>Anche <strong>0 non è né primo né composto</strong>. Queste due categorie classificano i numeri naturali maggiori di 1."
            },
            {
              "title": "2 è l’unico primo pari",
              "html": "<strong>2 è primo</strong>: i suoi divisori positivi sono 1 e 2. Ogni altro numero pari maggiore di 2 ha anche 2 come divisore, distinto da 1 e dal numero stesso: è quindi composto.<br><br>I primi cominciano così: <strong>2, 3, 5, 7, 11, 13, 17, 19, …</strong>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale numero è primo?",
            "options": [
              "13",
              "1",
              "12",
              "15"
            ],
            "answer": 0,
            "feedback": "I suoi soli divisori positivi sono 1 e 13.",
            "feedbackByOption": [
              "I suoi soli divisori positivi sono 1 e 13.",
              "1 ha un solo divisore positivo, non due.",
              "12 ha anche 2, 3, 4 e 6 come divisori.",
              "15 = 3 × 5: ha divisori diversi da 1 e da 15."
            ]
          },
          {
            "question": "Perché 1 non è un numero primo?",
            "options": [
              "È un numero dispari.",
              "È divisibile per tutti i naturali positivi.",
              "È troppo piccolo: anche 2 non è primo.",
              "Ha un solo divisore positivo."
            ],
            "answer": 3,
            "feedback": "1 e se stesso coincidono: i divisori distinti sono soltanto uno.",
            "feedbackByOption": [
              "Anche 3, 5 e 7 sono dispari, ma sono primi.",
              "1 è divisibile soltanto per 1; è 1 a dividere ogni naturale.",
              "La definizione riguarda il numero dei divisori: 2 ha esattamente due divisori positivi.",
              "1 e se stesso coincidono: i divisori distinti sono soltanto uno."
            ]
          },
          {
            "question": "Quale affermazione è corretta?",
            "options": [
              "Ogni numero pari è composto.",
              "0 è primo perché è divisibile per 2.",
              "2 è l’unico numero primo pari.",
              "Ogni numero dispari è primo."
            ],
            "answer": 2,
            "feedback": "Ogni pari maggiore di 2 ha 2 come ulteriore divisore.",
            "feedbackByOption": [
              "2 è pari e ha soltanto 1 e 2 come divisori.",
              "Zero non è maggiore di 1 e non ha esattamente due divisori positivi.",
              "Ogni pari maggiore di 2 ha 2 come ulteriore divisore.",
              "9 e 15 sono dispari, ma sono composti."
            ]
          }
        ]
      }
    },
    {
      "id": "riconoscere",
      "title": "Come riconoscere un numero primo",
      "cards": [
        {
          "title": "Un divisore basta a escludere un primo",
          "steps": [
            {
              "title": "",
              "html": "Per dimostrare che <strong>91 è composto</strong> basta trovare una coppia di fattori entrambi maggiori di 1:<br><strong>91 = 7 × 13</strong>.<br><br>Non serve trovare tutti i divisori. Per affermare che un numero è primo, invece, dobbiamo escludere ogni possibile divisore diverso da 1 e dal numero stesso."
            }
          ]
        },
        {
          "title": "I criteri ci aiutano, ma non rispondono a tutto",
          "steps": [
            {
              "title": "Un controllo incompleto",
              "html": "91 non è divisibile per 2, per 3 né per 5. Questo <strong>non basta a renderlo primo</strong>: è divisibile per 7.<br><br>I criteri studiati evitano alcune divisioni, ma non coprono tutti i possibili divisori."
            },
            {
              "title": "Perché basta controllare i primi",
              "html": "Se un numero è divisibile per un numero composto, è divisibile anche per un primo che compare tra i fattori di quel divisore. Per esempio, se è divisibile per 15, è divisibile anche per 3 e per 5.<br><br>Possiamo quindi cercare i divisori tra <strong>2, 3, 5, 7, 11, …</strong>."
            }
          ]
        },
        {
          "title": "Quando possiamo fermarci?",
          "steps": [
            {
              "title": "Le coppie si incontrano",
              "html": "Quando due fattori danno un numero n, <strong>il quadrato del più piccolo non supera n</strong>: moltiplicarlo per se stesso dà un risultato non maggiore che moltiplicarlo per l’altro fattore.<br><br>Perciò, se n è composto, possiede un divisore primo <strong>p con p × p ≤ n</strong>. Possiamo fermare la ricerca quando il quadrato del prossimo primo supera n."
            },
            {
              "title": "Il caso di 29",
              "html": "29 non è divisibile per <strong>2, 3 o 5</strong>. Il prossimo primo è 7, e <strong>7 × 7 = 49 &gt; 29</strong>: non servono altri controlli. <strong>29 è primo.</strong><br><br>Attenzione all’uguaglianza: per 49 il controllo di 7 serve, perché <strong>7 × 7 = 49</strong>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "91 non è divisibile per 2, per 3 o per 5. Possiamo già dire che è primo?",
            "options": [
              "No: ogni numero maggiore di 90 è composto.",
              "No: 91 = 7 × 13.",
              "Sì: abbiamo controllato tutti i numeri primi.",
              "Sì: tutti i numeri che terminano con 1 sono primi."
            ],
            "answer": 1,
            "feedback": "I primi tre criteri non escludono un divisore come 7.",
            "feedbackByOption": [
              "Esistono primi anche oltre 90, per esempio 97.",
              "I primi tre criteri non escludono un divisore come 7.",
              "Esistono altri primi oltre a 2, 3 e 5.",
              "21, 51 e 91 terminano con 1, ma sono composti."
            ]
          },
          {
            "question": "Quale fatto dimostra da solo che 77 è composto?",
            "options": [
              "77 = 7 × 11.",
              "77 è dispari.",
              "77 non è divisibile per 5.",
              "77 = 1 × 77."
            ],
            "answer": 0,
            "feedback": "Entrambi i fattori sono maggiori di 1.",
            "feedbackByOption": [
              "Entrambi i fattori sono maggiori di 1.",
              "Essere dispari è compatibile sia con numeri primi sia con numeri composti.",
              "Questo esclude soltanto un divisore.",
              "Anche un primo si scrive come 1 per se stesso; serve una coppia con entrambi i fattori maggiori di 1."
            ]
          },
          {
            "question": "Dopo aver escluso 2, 3 e 5 come divisori di 29, perché possiamo fermarci?",
            "options": [
              "Perché 29 termina con 9.",
              "Perché bastano sempre tre controlli.",
              "Perché 29 è minore di 100.",
              "Il prossimo primo è 7 e 7 × 7 supera 29."
            ],
            "answer": 3,
            "feedback": "Un eventuale divisore primo necessario sarebbe già fra quelli controllati.",
            "feedbackByOption": [
              "La cifra finale 9 non basta: 9 e 39 sono composti.",
              "La quantità dei controlli dipende dal numero: per 91 serve anche 7.",
              "Essere minore di 100 non implica essere primo.",
              "Un eventuale divisore primo necessario sarebbe già fra quelli controllati."
            ]
          }
        ]
      }
    },
    {
      "id": "crivello",
      "title": "Trovare una lista di primi",
      "cards": [
        {
          "title": "Il crivello di Eratostene",
          "steps": [
            {
              "title": "Eliminare i composti",
              "html": "Per trovare tutti i primi fino a <strong>30</strong>, scriviamo i numeri da 2 a 30. Teniamo 2 ed eliminiamo i suoi multipli maggiori di 2: <strong>4, 6, 8, 10, …</strong>.<br><br>Il procedimento si chiama <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-crivello\">crivello di Eratostene</button>: conserva i primi e filtra i composti."
            },
            {
              "title": "Continuare con il primo rimasto",
              "html": "Il primo numero non eliminato dopo 2 è <strong>3</strong>: lo teniamo ed eliminiamo i suoi multipli maggiori di 3. Poi facciamo lo stesso con <strong>5</strong>.<br><br>Non eliminiamo il primo stesso: altrimenti perderemmo proprio il numero che vogliamo conservare."
            },
            {
              "title": "La lista fino a 30",
              "html": "Il prossimo primo è 7 e <strong>7 × 7 &gt; 30</strong>: tutti i composti fino a 30 sono già stati eliminati.<br><br>Restano <strong>2, 3, 5, 7, 11, 13, 17, 19, 23, 29</strong>. Il crivello trova i primi entro un limite scelto, non tutti i primi esistenti."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Nel crivello, quali multipli di 3 eliminiamo?",
            "options": [
              "Soltanto quelli che sono anche multipli di 5.",
              "Nessuno, perché 3 è primo.",
              "Quelli maggiori di 3, conservando 3.",
              "Tutti, compreso 3."
            ],
            "answer": 2,
            "feedback": "3 è primo: eliminiamo 6, 9, 12, …",
            "feedbackByOption": [
              "Anche 6, 9 e 12 sono composti: non dobbiamo limitarci a 15 e 30.",
              "È primo 3; i suoi multipli maggiori di 3 hanno almeno 3 come ulteriore divisore.",
              "3 è primo: eliminiamo 6, 9, 12, …",
              "Eliminare 3 farebbe perdere un numero primo."
            ]
          },
          {
            "question": "Quale numero viene eliminato nel crivello fino a 30?",
            "options": [
              "2",
              "25",
              "23",
              "29"
            ],
            "answer": 1,
            "feedback": "25 = 5 × 5 è composto.",
            "feedbackByOption": [
              "2 è il primo più piccolo e va conservato.",
              "25 = 5 × 5 è composto.",
              "23 è primo e rimane nella lista.",
              "29 è primo e rimane nella lista."
            ]
          },
          {
            "question": "Che cosa otteniamo usando il crivello fino a 30?",
            "options": [
              "Tutti i numeri primi non maggiori di 30.",
              "Tutti i numeri primi esistenti.",
              "Solo i numeri dispari non maggiori di 30.",
              "Tutti i divisori di 30."
            ],
            "answer": 0,
            "feedback": "Il limite iniziale delimita la lista trovata.",
            "feedbackByOption": [
              "Il limite iniziale delimita la lista trovata.",
              "Un elenco fino a 30 non include primi maggiori di 30.",
              "Anche 9 e 15 sono dispari, ma vengono eliminati; 2 invece resta.",
              "La lista dei primi fino a 30 è diversa da quella dei divisori di 30."
            ]
          }
        ]
      }
    },
    {
      "id": "infiniti",
      "title": "Approfondimento · I primi non finiscono",
      "cards": [
        {
          "title": "Una lista può contenerli tutti?",
          "steps": [
            {
              "title": "Un’ipotesi da mettere alla prova",
              "html": "Immaginiamo che esista una lista finita contenente <strong>tutti</strong> i numeri primi. Moltiplichiamoli e chiamiamo il prodotto <strong>P</strong>. Consideriamo ora <strong>P + 1</strong>.<br><br>Ogni primo della lista divide P. Se dividiamo P + 1 per uno di essi, invece, rimane <strong>resto 1</strong>."
            },
            {
              "title": "Un primo manca comunque",
              "html": "<strong>P + 1</strong> è maggiore di 1: o è primo, oppure è composto e possiede almeno un fattore primo. Nessuno dei primi della lista può dividerlo.<br><br>In entrambi i casi esiste un primo fuori dalla lista: l’ipotesi iniziale non può essere vera. <strong>I numeri primi sono infiniti.</strong>"
            }
          ]
        },
        {
          "title": "Il prodotto più uno non è sempre primo",
          "steps": [
            {
              "title": "",
              "html": "L’argomento non afferma che P + 1 sia sempre primo. Per esempio:<br><strong>2 × 3 × 5 × 7 × 11 × 13 + 1 = 30 031 = 59 × 509</strong>.<br><br>30 031 è composto. Ciò che conta è che i suoi fattori primi <strong>non appartengono alla lista iniziale</strong>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Se P è il prodotto dei primi di una lista, quale resto lascia P + 1 diviso per un primo della lista?",
            "options": [
              "0",
              "Il primo stesso.",
              "Un resto che dipende sempre dal numero di primi nella lista.",
              "1"
            ],
            "answer": 3,
            "feedback": "Quel primo divide P; aggiungere 1 lascia una unità di resto.",
            "feedbackByOption": [
              "Se dividesse anche P + 1, dovrebbe dividere la differenza 1, impossibile per un primo.",
              "Un resto deve essere minore del divisore.",
              "Il prodotto P è multiplo di ciascun primo; il +1 determina il resto.",
              "Quel primo divide P; aggiungere 1 lascia una unità di resto."
            ]
          },
          {
            "question": "Che cosa deve essere vero per P + 1 nell’argomento sui primi infiniti?",
            "options": [
              "È divisibile per tutti i primi della lista.",
              "È sempre pari.",
              "Possiede un fattore primo non presente nella lista.",
              "È sempre primo."
            ],
            "answer": 2,
            "feedback": "Può essere primo oppure composto: in ogni caso ha un fattore primo nuovo.",
            "feedbackByOption": [
              "La divisione per ciascuno di essi lascia resto 1.",
              "Se P contiene il fattore 2, P è pari e P + 1 è dispari.",
              "Può essere primo oppure composto: in ogni caso ha un fattore primo nuovo.",
              "30 031 = 59 × 509 mostra che può essere composto."
            ]
          },
          {
            "question": "Perché l’ipotesi di una lista finita di tutti i primi viene respinta?",
            "options": [
              "Perché ogni numero dispari è primo.",
              "Il ragionamento produce un primo che non appartiene alla lista.",
              "Perché non riusciamo a stampare numeri molto grandi.",
              "Perché basta trovare molti esempi di primi."
            ],
            "answer": 1,
            "feedback": "Una lista che dichiaravamo completa risulta incompleta.",
            "feedbackByOption": [
              "I dispari possono essere composti, per esempio 9 e 15.",
              "Una lista che dichiaravamo completa risulta incompleta.",
              "È un argomento matematico, non un limite di stampa.",
              "Molti esempi non dimostrano da soli che i primi siano infiniti."
            ]
          }
        ]
      },
      "levels": [
        "biennio",
        "terzo-quarto",
        "quinto",
        "triennio",
        "universita",
        "università"
      ]
    },
    {
      "id": "distribuzione",
      "title": "Approfondimento · Dove compaiono i primi?",
      "cards": [
        {
          "title": "Contare non significa prevedere",
          "steps": [
            {
              "title": "",
              "html": "Fra <strong>1 e 30</strong> troviamo 10 primi; fra <strong>31 e 60</strong> ne troviamo 7. Gli intervalli fra primi consecutivi non sono costanti: da 11 a 13 la distanza è 2, da 23 a 29 è 6.<br><br>Possiamo studiare quanti primi compaiono entro un limite e come sono distribuiti, senza avere una regola elementare che individui ogni primo successivo."
            }
          ]
        },
        {
          "title": "Una disposizione può suggerire nuove domande",
          "steps": [
            {
              "title": "",
              "html": "Nella <strong>spirale di Ulam</strong> i numeri naturali positivi sono disposti in una spirale su una griglia e vengono evidenziati quelli primi. Alcune diagonali mostrano addensamenti interessanti.<br><br>Una rappresentazione aiuta a scoprire regolarità da studiare. Un disegno, però, non dimostra da solo che una regolarità continui per tutti i numeri."
            }
          ]
        },
        {
          "title": "Dagli esempi alle congetture",
          "steps": [
            {
              "title": "Primi vicini",
              "html": "<strong>11 e 13</strong>, oppure <strong>17 e 19</strong>, sono <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-gemelli\">primi gemelli</button>: differiscono di 2. Chiedersi se esistano infinite coppie di questo tipo è una domanda distinta dall’infinità dei primi."
            },
            {
              "title": "Somme di primi",
              "html": "La <button type=\"button\" class=\"rm-keyword\" data-term=\"arith-congettura\">congettura</button> di Goldbach propone che <strong>ogni numero pari maggiore di 2 sia somma di due primi</strong>. Per esempio, <strong>28 = 11 + 17</strong> e <strong>30 = 13 + 17</strong>.<br><br>Verificare questi esempi conferma quei casi. Una dimostrazione generale deve invece giustificare l’affermazione per ogni numero ammesso, non soltanto per quelli controllati."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Che cosa significa che 11 e 13 sono primi gemelli?",
            "options": [
              "Sono entrambi primi e differiscono di 2.",
              "Sono entrambi dispari e differiscono di 2.",
              "Hanno gli stessi divisori positivi.",
              "La loro somma è un numero primo."
            ],
            "answer": 0,
            "feedback": "Sono le due condizioni della definizione.",
            "feedbackByOption": [
              "Sono le due condizioni della definizione.",
              "Questo non basta: 25 e 27 sono dispari a distanza 2, ma non sono primi.",
              "I divisori sono 1 e 11 per il primo, 1 e 13 per il secondo.",
              "11 + 13 = 24, che è composto."
            ]
          },
          {
            "question": "Verificare 28 = 11 + 17 che cosa dimostra?",
            "options": [
              "Che tutti i numeri pari sono somme di due primi.",
              "Che 28 è primo.",
              "Che i numeri primi sono finiti.",
              "Che 28 si può scrivere come somma di due primi."
            ],
            "answer": 3,
            "feedback": "È una verifica valida del caso 28, non di tutti i pari.",
            "feedbackByOption": [
              "Un caso non basta a dimostrare una proprietà di infiniti numeri.",
              "28 è composto: una somma di primi non deve essere un primo.",
              "Una somma non fornisce una lista completa dei primi.",
              "È una verifica valida del caso 28, non di tutti i pari."
            ]
          },
          {
            "question": "Quale osservazione è corretta sulla distribuzione dei primi?",
            "options": [
              "Una diagonale in una figura dimostra da sola un teorema.",
              "In ogni intervallo di 30 numeri compaiono esattamente 10 primi.",
              "Le distanze fra primi consecutivi non sono tutte uguali.",
              "Ogni coppia di primi consecutivi dista 2."
            ],
            "answer": 2,
            "feedback": "11 e 13 distano 2, mentre 23 e 29 distano 6.",
            "feedbackByOption": [
              "Una figura suggerisce regolarità; una dimostrazione le giustifica.",
              "Fra 31 e 60 i primi sono 7, non 10.",
              "11 e 13 distano 2, mentre 23 e 29 distano 6.",
              "23 e 29 sono consecutivi nella lista dei primi e distano 6."
            ]
          }
        ]
      },
      "levels": [
        "biennio",
        "terzo-quarto",
        "quinto",
        "triennio",
        "universita",
        "università"
      ]
    },
    {
      "id": "recap",
      "title": "La lezione in pillole",
      "cards": [
        {
          "title": "Distinguere, riconoscere, cercare",
          "steps": [
            {
              "title": "La definizione",
              "html": "<strong>Primo:</strong> naturale maggiore di 1 con esattamente due divisori positivi distinti: 1 e se stesso.<br><strong>Composto:</strong> naturale maggiore di 1 con altri divisori positivi.<br><br>0 e 1 non appartengono a nessuna delle due categorie. 2 è l’unico primo pari."
            },
            {
              "title": "La ricerca",
              "html": "Per escludere un primo basta trovare un divisore diverso da 1 e dal numero stesso. Per riconoscerlo come primo bisogna escluderli tutti: basta controllare i primi il cui quadrato non supera il numero.<br><br>Il <strong>crivello</strong> trova tutti i primi fino a un limite, eliminando i composti."
            },
            {
              "title": "Il prossimo passo",
              "html": "I numeri primi ci permetteranno di riscrivere ogni naturale maggiore di 1 come un prodotto di fattori che non si possono scomporre ulteriormente in fattori naturali maggiori di 1. È la <strong>scomposizione in fattori primi</strong>."
            }
          ]
        }
      ],
      "quiz": {
        "questions": [
          {
            "question": "Quale coppia contiene un numero primo e un numero composto, in quest’ordine?",
            "options": [
              "17 e 19",
              "17 e 21",
              "1 e 21",
              "15 e 17"
            ],
            "answer": 1,
            "feedback": "17 è primo; 21 = 3 × 7 è composto.",
            "feedbackByOption": [
              "Sono entrambi primi.",
              "17 è primo; 21 = 3 × 7 è composto.",
              "1 non è primo.",
              "L’ordine è invertito: 15 è composto e 17 è primo."
            ]
          },
          {
            "question": "Trovi un divisore d di n con 1 < d < n. Che cosa sai di n?",
            "options": [
              "È composto.",
              "È primo.",
              "È necessariamente pari.",
              "È necessariamente minore di 10."
            ],
            "answer": 0,
            "feedback": "Possiede un divisore ulteriore rispetto a 1 e a se stesso.",
            "feedbackByOption": [
              "Possiede un divisore ulteriore rispetto a 1 e a se stesso.",
              "Un primo non ha divisori positivi strettamente fra 1 e se stesso.",
              "Anche 21 ha un divisore come 3 ed è dispari.",
              "La presenza di un divisore ulteriore non impone questo limite."
            ]
          },
          {
            "question": "Perché il controllo di 7 non può essere saltato quando cerchiamo se 49 è primo?",
            "options": [
              "Perché 49 termina con 9.",
              "Perché ogni dispari è divisibile per 7.",
              "Perché 49 è divisibile per 3.",
              "7 × 7 è proprio 49."
            ],
            "answer": 3,
            "feedback": "Vanno controllati anche i primi il cui quadrato è uguale al numero.",
            "feedbackByOption": [
              "La cifra finale non individua il divisore 7.",
              "11 e 13 sono dispari, ma non sono divisibili per 7.",
              "4 + 9 = 13: 49 non è divisibile per 3.",
              "Vanno controllati anche i primi il cui quadrato è uguale al numero."
            ]
          }
        ]
      }
    }
  ]
};
