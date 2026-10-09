# Un tachimetro con Arduino

Una ruota, un magnete e un sensore permettono di trasformare due passaggi in una misura di velocità. Questo prototipo da banco riprende la lavagna di GatitoMath; non è un tachimetro per un veicolo reale.

## Materiale

- Arduino UNO R3 con cavo USB e computer con Arduino IDE.
- Piccola ruota montata su un supporto, con un magnete fissato alla periferia.
- Sensore Hall **digitale non bistabile**, compatibile con 5 V, con uscita attiva LOW al passaggio del magnete. Il programma usa un impulso per giro.
- Breadboard, cavetti e metro o righello.

Il magnete passa vicino al sensore fisso senza toccarlo. Ruotando la ruota a mano, deve essere rilevato una sola volta per giro. Orientamento del magnete e distanza dipendono dal sensore scelto.

## Collegamenti per UNO R3

| Sensore | Arduino |
| --- | --- |
| Alimentazione VCC compatibile con 5 V | 5 V |
| Massa GND | GND |
| Uscita digitale OUT attiva LOW | D2 |

Identifica i piedini dalla scheda tecnica del componente: il loro ordine non è universale. Il codice abilita la resistenza interna di pull-up su D2. Con un'uscita attiva HIGH occorre adattare il fronte dell'interrupt da `FALLING` a `RISING`.

## Circonferenza e calcolo

Fai rotolare la ruota senza slittare per un giro, dal segno iniziale al suo successivo contatto con il piano. Misura l'avanzamento: questa è la circonferenza di rotolamento **C**. In alternativa, per una ruota circolare rigida usa **C = 2πr**.

Inserisci C in **metri** nella costante `CIRCUMFERENCE_M`. Il valore di esempio, 0,314159 m, corrisponde a un raggio di 5 cm.

Tra due passaggi consecutivi Arduino registra il tempo **T**. Il programma calcola **v = C/T** in m/s e moltiplica per **3,6** per ottenere i km/h. Un solo sensore fornisce il valore senza distinguere il verso di rotazione.

Se la ruota gira sul supporto senza avanzare, il risultato è la velocità di avanzamento che avrebbe rotolando senza slittare; non è lo spostamento effettivo del supporto.

## Prima prova

1. Apri [tachimetro.ino](tachimetro.ino), imposta la circonferenza e caricalo su UNO R3.
2. Apri il monitor seriale a **115200 baud**.
3. Fai passare il magnete davanti al sensore: il primo impulso acquisisce la prima lettura.
4. Completa un giro: il secondo impulso permette il calcolo. I giri successivi aggiornano la misura.
5. Con C = 0,314159 m e T = 0,5 s, attenditi circa **0,628 m/s**, cioè **2,26 km/h**.

## Che cosa osservare

A parità di ruota, dimezzando T la velocità raddoppia. A parità di T, una ruota con circonferenza doppia avrebbe velocità di avanzamento doppia.

Il programma scarta segnali distanti meno di 5 ms. Dopo 5 s senza impulsi dichiara la misura scaduta: non può distinguere una ruota ferma da una che gira più lentamente di un giro ogni 5 s. Al ritorno dei segnali attende una nuova coppia di passaggi. Per studiare giri più lenti, aumenta `STOP_US`.

Si misura una media tra due impulsi. Magneti aggiuntivi equidistanti permetterebbero intervalli più brevi, usando **C/N** come distanza per impulso e adattando il programma. Numero di impulsi, stabilità del montaggio e circonferenza impostata influiscono sulla misura.

## Estensioni

- Aggiungere un display per mostrare m/s e km/h.
- Confrontare la misura con un video a frequenza nota.
- Tracciare la velocità nel tempo sul computer, rendendo visibili accelerazioni e pause.

Riferimento tecnico: [interrupt nella documentazione Arduino](https://docs.arduino.cc/language-reference/en/functions/external-interrupts/attachInterrupt/).
