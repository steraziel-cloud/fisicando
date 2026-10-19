# GatitoMath — Consegna campioni elementi (19 ottobre 2026)

**36 nuove illustrazioni originali** in `immagini/element-<simbolo>.png`.
Coprono i lotti 01, 02, 03, 04, 05 e 06. Il lotto 02 (Li, Rb, Bi, Se, As, Sb) è stato organizzato per la prima volta in questa consegna.

**Non include i 17 elementi che avevano già un'immagine nella piattaforma all'inizio del lavoro** (C-grafite, Al, Si, S, Fe, Cu, Au, Hg, Br, e H, He, N, O, Ne, Ar, Kr, Xe). Questi vanno conservati e non sovrascritti; l'altro operatore ha accesso al codice/asset della piattaforma e dovrà verificare il percorso reale degli asset esistenti.

## Avvertenze scientifiche ed editoriali
- Sono **illustrazioni generate con IA**, non fotografie, né dimostrazioni di purezza dei campioni.
- Condizioni di riferimento per lo stato fisico: **20 °C e 1 atm**. La pressione effettiva dentro i contenitori sigillati non è attestata, e non va confusa con la pressione di riferimento della tavola.
- Le immagini sono **bozze da validare prima della pubblicazione definitiva**; quelle del lotto 03 (eccetto K), 04 e 06 sono ritagli da collage ingranditi a 1024 px (dettaglio effettivo originario ~500 px). Le altre sono generazioni individuali da 1254 px.
- **B (boro amorfo): da rivedere** perché mostra frammenti troppo grossi per una normale polvere amorfa.
- **Bi (bismuto):** cristalli iridescenti con strato superficiale di ossido (colori non intrinseci al bismuto metallico puro).
- **P (fosforo):** rappresentata la forma allotropica rossa.
- **Se (selenio):** forma allotropica grigia.
- **Na, Li, K, Rb, Cs:** contenitori di protezione; l'olio mostrato per Na e Li non appartiene all'elemento.
- **Ga e Cs:** solidi a 20 °C; fondono poco sopra la temperatura ambiente.
- **Cl:** gas giallo-verde; non rappresentato come liquido.
- Non usare le illustrazioni per indicazioni su manipolazione sicura di sostanze pericolose.
- I link alle schede RSC sono riferimenti alle proprietà, **non fonti delle immagini generate**; dove mancano verifiche bibliografiche puntuali, queste restano da effettuare.

## File
- `immagini/` — 36 PNG nominati con simbolo: `element-Na.png`, `element-Li.png`, ecc.
- `inventario.csv` e `inventario.json` — mappatura simbolo, nome italiano, file, didascalia, stato, alt text, fonte, lotto, dimensioni e stato di revisione.
- `ISTRUZIONI_PER_AGENTE.txt` — istruzione pronta da passare a chi cura l'integrazione.

## Indicazione per l'integrazione
I 36 PNG possono essere usati come **asset provvisori in ambiente di sviluppo**, conservando il loro stato di revisione. **Non sovrascrivere immagini già presenti**, non pubblicare come scientificamente validate, verificare in anteprima il comportamento della tavola e lasciare separati nome/simbolo/didascalia da immagine.
