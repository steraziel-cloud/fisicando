/* Fisica tecnica · fondamenti di termodinamica. */
window.READER_LESSONS['fisica-tecnica-sistemi'] = {
  title: 'Sistemi, confini e volumi di controllo',
  subtitle: 'Fisica tecnica · Fondamenti di termodinamica · Prima bozza',
  version: 1,
  status: 'work-in-progress',
  sections: [
    {
      id: 'scegliere-il-confine',
      title: 'Scegliere il confine',
      cards: [
        {
          title: 'Che cosa stai studiando?',
          stepMode: 'replace',
          steps: [
            {
              html: '<p>In un esercizio di Fisica tecnica, prima di scrivere un bilancio scegli che cosa includere nello studio. Il <strong>confine</strong> separa il sistema dall’ambiente. Può coincidere con una parete reale oppure attraversare una tubazione dove vuoi misurare una portata.</p>'
            },
            {
              html: '<p><strong>Sistema chiuso.</strong> Segui una quantità di materia ben definita. Nessuna massa attraversa il confine, ma l’energia può attraversarlo come calore o lavoro. Pensa al gas in un cilindro sigillato con pistone mobile. Il confine si sposta con il pistone e il gas può compiere lavoro.</p>'
            },
            {
              html: '<p><strong>Volume di controllo.</strong> Scegli una regione e osserva che cosa attraversa la sua superficie. Per studiare una turbina, puoi tagliare idealmente i condotti all’ingresso e all’uscita. Il fluido attraversa quelle sezioni e la turbina può erogare lavoro attraverso l’albero.</p>'
            }
          ]
        }
      ]
    },
    {
      id: 'bilancio-di-massa',
      title: 'Da dove passa la massa?',
      cards: [
        {
          title: 'Il bilancio di massa',
          stepMode: 'replace',
          steps: [
            {
              html: '<p>La massa nel volume di controllo aumenta se nell’unità di tempo ne entra più di quanta ne esca. Chiamiamo <strong>portata massica</strong> la massa che attraversa una sezione nell’unità di tempo, misurata in kg/s.</p><math display="block" aria-label="Variazione di massa nel tempo uguale somma delle portate entranti meno somma delle portate uscenti"><mfrac><mrow><mi>d</mi><mi>m</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mo>∑</mo><msub><mover><mi>m</mi><mo>˙</mo></mover><mtext>in</mtext></msub><mo>−</mo><mo>∑</mo><msub><mover><mi>m</mi><mo>˙</mo></mover><mtext>out</mtext></msub></math>'
            },
            {
              html: '<p>In <strong>regime stazionario</strong> le grandezze osservate in punti fissi del volume di controllo sono costanti nel tempo. La massa contenuta resta costante anche se il fluido continua a entrare e uscire. In una turbina con un solo ingresso e una sola uscita, se entrano <strong>2 kg/s</strong>, escono <strong>2 kg/s</strong>.</p>'
            }
          ]
        }
      ],
      quiz: {
        questions: [
          {
            question: 'Il gas in un cilindro sigillato solleva un pistone mobile. Come lo descrivi?',
            options: [
              'Sistema chiuso, con possibile scambio di lavoro.',
              'Sistema aperto, perché il pistone si muove.',
              'Sistema isolato, perché il gas resta nel cilindro.'
            ],
            answer: 0,
            feedback: 'La massa del gas resta nel cilindro. Il confine si muove e il gas compie lavoro sul pistone.'
          },
          {
            question: 'Da un recipiente entrano 3 kg/s e ne escono 2 kg/s. Come varia la massa contenuta?',
            options: ['Diminuisce di 1 kg ogni secondo.', 'Resta costante.', 'Aumenta di 1 kg ogni secondo.'],
            answer: 2,
            feedback: 'Ogni secondo entra 1 kg in più di quanto esce. Quella massa si accumula nel recipiente.'
          }
        ]
      }
    }
  ]
};
