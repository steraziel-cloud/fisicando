window.addEventListener("DOMContentLoaded", () => {
  // Le etichette interne servono solo durante la progettazione e non devono comparire nel prototipo visivo.
  document.querySelectorAll(".stage-label, .stage-note").forEach(el => el.style.display = "none");

  const bookPages = [
    {
      title: "Bisogni reali",
      copy: "Si parte dalla situazione concreta di chi studia, non da un percorso preconfezionato."
    },
    {
      title: "Didattica adattabile",
      copy: "Spiegazioni, esercizi e strumenti possono cambiare insieme al percorso."
    },
    {
      title: "Autonomia",
      copy: "L’obiettivo è capire meglio e acquisire metodo, non soltanto arrivare alla risposta."
    }
  ];

  const boardSteps = [
    {
      step: "PASSO 01",
      title: "Individuare il punto di partenza",
      copy: "Capire se la difficoltà nasce da un concetto non compreso, da basi poco solide, da un procedimento meccanico o dalla necessità di una spiegazione diversa."
    },
    {
      step: "PASSO 02",
      title: "Scegliere strumenti e spiegazioni",
      copy: "Spiegazioni, strumenti ed esercizi vengono scelti in base alla situazione e agli obiettivi, senza proporre lo stesso percorso a tutte e tutti."
    },
    {
      step: "PASSO 03",
      title: "Adattare il lavoro nel tempo",
      copy: "Il percorso può cambiare insieme ai progressi che emergono, senza restare bloccato in uno schema deciso in partenza."
    }
  ];

  const resources = [
    {
      title: "Lezioni",
      copy: "Contenuti e spiegazioni da riprendere quando serve."
    },
    {
      title: "Materiali",
      copy: "Schemi, approfondimenti e strumenti utili per organizzare lo studio."
    },
    {
      title: "Esercitazioni",
      copy: "Attività per allenarsi e mettere alla prova ciò che si è capito."
    },
    {
      title: "Laboratori",
      copy: "Strumenti interattivi per osservare, provare e ragionare sui concetti."
    }
  ];

  let bookIndex = 0;
  const bookTitle = document.getElementById("book-title");
  const bookCopy = document.getElementById("book-copy");
  const bookStep = document.getElementById("book-step");
  const bookDots = [...document.querySelectorAll("[data-book-index]")];

  function showBookPage(index) {
    bookIndex = (index + bookPages.length) % bookPages.length;
    const page = bookPages[bookIndex];
    if (bookTitle) bookTitle.textContent = page.title;
    if (bookCopy) bookCopy.textContent = page.copy;
    if (bookStep) bookStep.textContent = `${bookIndex + 1} / ${bookPages.length}`;
    bookDots.forEach((dot, i) => dot.classList.toggle("active", i === bookIndex));
  }

  document.getElementById("book-prev")?.addEventListener("click", () => showBookPage(bookIndex - 1));
  document.getElementById("book-next")?.addEventListener("click", () => showBookPage(bookIndex + 1));
  bookDots.forEach(dot => dot.addEventListener("click", () => showBookPage(Number(dot.dataset.bookIndex))));

  const boardTitle = document.getElementById("board-title");
  const boardCopy = document.getElementById("board-copy");
  const boardStep = document.getElementById("board-step");
  const boardTabs = [...document.querySelectorAll("[data-board-index]")];

  function showBoardStep(index) {
    const step = boardSteps[index];
    if (!step) return;
    if (boardTitle) boardTitle.textContent = step.title;
    if (boardCopy) boardCopy.textContent = step.copy;
    if (boardStep) boardStep.textContent = step.step;
    boardTabs.forEach((tab, i) => tab.classList.toggle("active", i === index));
  }

  boardTabs.forEach(tab => tab.addEventListener("click", () => showBoardStep(Number(tab.dataset.boardIndex))));

  const resourceTitle = document.getElementById("resource-title");
  const resourceCopy = document.getElementById("resource-copy");
  const resourcePills = [...document.querySelectorAll("[data-resource-index]")];

  function showResource(index) {
    const resource = resources[index];
    if (!resource) return;
    if (resourceTitle) resourceTitle.textContent = resource.title;
    if (resourceCopy) resourceCopy.textContent = resource.copy;
    resourcePills.forEach((pill, i) => pill.classList.toggle("active", i === index));
  }

  resourcePills.forEach(pill => pill.addEventListener("click", () => showResource(Number(pill.dataset.resourceIndex))));
});