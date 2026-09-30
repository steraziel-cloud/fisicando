# GatitoMath

Piattaforma didattica statica pubblicata con GitHub Pages dal ramo `main`.

- Sito: https://steraziel-cloud.github.io/fisicando/
- Presentazione del progetto: https://steraziel-cloud.github.io/fisicando/info.html

## Struttura

| Percorso | Contenuto |
| --- | --- |
| `index.html` | Home |
| `info.html` | Presentazione del progetto in cinque slide |
| `contatti.html` | Contatti |
| `lezioni.html` | Indice dei contenuti didattici |
| `assets/` | Stili, JavaScript e immagini |
| `pillole/vettori/` | Teoria, esercizi e laboratorio sui vettori |
| `meccanica_punto_materiale/` | Materiali di cinematica, dinamica e laboratorio di statica |
| `docs/` | Note di manutenzione |

## Avvio sul PC

Dalla cartella del repository, con Python 3 installato:

```sh
python -m http.server 8000
```

Aprire http://localhost:8000/ oppure http://localhost:8000/info.html.
Non serve una compilazione. Font e librerie matematiche esterne richiedono una connessione Internet.

Per aggiornare una copia locale sul ramo `main`:

```sh
git pull --ff-only origin main
```

## File della presentazione

- `assets/main.js`: tema e sequenza della lavagna con Red e Bjorne.
- `assets/progetto.js`: navigazione delle slide, libro e animazione di Morgana.
- `assets/oltre-lezioni.js`: sequenza principale della slide 4 e dialogo speciale attivato da Bjorne.
- I fogli CSS elencati in `info.html` sono attivi: anche quelli con `v2`, `v3` o `polish` nel nome fanno parte della versione corrente. L'ordine di caricamento determina il risultato finale.
- `assets/content.js` e `assets/site.js`: indice e navigazione dei contenuti didattici; `assets/style.css`: stile delle pagine didattiche.

## Sticker QR e materiali del marchio

Lo sticker è già realizzato e conservato nel repository:

- [Sticker completo](assets/images/gatitomath-sticker.png)
- [QR separato](assets/images/gatitomath-qr.png)
- [Logo](assets/images/gatitomath-logo.png)
- [Logo trasparente](assets/images/gatitomath-logo-transparent.png)
- [Simbolo della zampa](assets/images/gatitomath-paw.svg)

Questi materiali sono conservati anche quando non vengono caricati dalle pagine del sito.

La [nota di pulizia](docs/pulizia-2026-09-30.md) elenca i residui rimossi e i controlli effettuati. Le versioni precedenti rimangono recuperabili dalla cronologia Git.
