/* GatitoMath: tachimetro didattico, un magnete e un impulso per giro.
 * Destinazione: Arduino UNO R3, sensore Hall digitale attivo LOW su D2.
 * Monitor seriale: 115200 baud. Impostare la circonferenza misurata.
 */
#include <Arduino.h>

const uint8_t SENSOR_PIN = 2;
const float CIRCUMFERENCE_M = 0.314159f;  // Esempio: r = 5 cm. Sostituire!
const uint32_t MIN_PERIOD_US = 5000UL;   // Scarta impulsi spuri troppo vicini.
const uint32_t STOP_US = 5000000UL;      // Dopo 5 s senza impulsi: misura scaduta.

volatile uint32_t lastPulseUs = 0;
volatile uint32_t periodUs = 0;
volatile bool haveFirstPulse = false;
volatile bool havePeriod = false;

void onPulse() {
  const uint32_t now = micros();
  if (!haveFirstPulse) {
    lastPulseUs = now;
    haveFirstPulse = true;
    return;
  }
  const uint32_t elapsed = now - lastPulseUs; // Funziona anche al rollover di micros().
  if (elapsed < MIN_PERIOD_US) return;
  lastPulseUs = now;
  if (elapsed > STOP_US) {
    havePeriod = false; // Questo impulso apre una nuova coppia di letture.
    return;
  }
  periodUs = elapsed;
  havePeriod = true;
}

void setup() {
  Serial.begin(115200);
  pinMode(SENSOR_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(SENSOR_PIN), onPulse, FALLING);
  Serial.println(F("Tachimetro GatitoMath: un impulso per giro."));
  Serial.println(F("Imposta CIRCUMFERENCE_M prima della prova."));
}

void loop() {
  static uint32_t lastPrintMs = 0;
  const uint32_t nowMs = millis();
  if (nowMs - lastPrintMs < 200UL) return;
  lastPrintMs = nowMs;

  // Su UNO i valori a 32 bit richiedono una copia atomica fuori dall'ISR.
  noInterrupts();
  const uint32_t measuredPeriod = periodUs;
  const uint32_t lastPulse = lastPulseUs;
  const bool first = haveFirstPulse;
  const bool valid = havePeriod;
  const uint32_t nowUs = micros();
  interrupts();

  if (!first) {
    Serial.println(F("In attesa del primo passaggio del magnete."));
  } else if (nowUs - lastPulse > STOP_US) {
    Serial.println(F("Nessun impulso da 5 s: ruota ferma oppure rotazione troppo lenta."));
  } else if (!valid) {
    Serial.println(F("Prima lettura acquisita: attendo il giro completo."));
  } else {
    const float seconds = measuredPeriod / 1000000.0f;
    const float speedMs = CIRCUMFERENCE_M / seconds;
    Serial.print(F("T = ")); Serial.print(seconds, 4);
    Serial.print(F(" s | v = ")); Serial.print(speedMs, 3);
    Serial.print(F(" m/s | ")); Serial.print(speedMs * 3.6f, 2);
    Serial.println(F(" km/h"));
  }
}
