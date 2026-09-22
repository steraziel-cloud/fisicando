window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");

  // Correzione layout per la pagina "Il progetto": i titoli possono andare su piu righe
  // e restano sempre dentro la colonna di testo senza finire dietro la scena illustrata.
  if (document.body.classList.contains("rm-lock")) {
    const projectTitleFix = document.createElement("style");
    projectTitleFix.textContent = `
      .rm-slide-copy h1 {
        white-space: normal !important;
        text-wrap: balance;
        max-width: 100%;
        overflow-wrap: normal;
        font-size: clamp(28px, 3vw, 44px);
      }
    `;
    document.head.appendChild(projectTitleFix);
  }

  // Applica sempre il tema salvato, anche se il bottone non esiste
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    if (btn) btn.textContent = "☀️";
  } else {
    document.body.removeAttribute("data-theme");
    if (btn) btn.textContent = "🌙";
  }

  // Se il bottone non esiste, non aggiungo il listener ma il tema resta applicato
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.body.removeAttribute("data-theme");
      btn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
      btn.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    }
  });
});