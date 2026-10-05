/* The selection describes the visitor's path; no account or personal data required. */
document.addEventListener("DOMContentLoaded", () => {
  // The legacy index is built by site.js before this script runs.
  document.querySelectorAll('#sidebar .side-group').forEach((group, index) => {
    const toggle = group.querySelector('.side-title');
    const list = group.querySelector('.side-list');
    if (!toggle || !list) return;
    list.id = `topics-${index}`;
    toggle.setAttribute('aria-controls', list.id);
    const update = () => toggle.setAttribute('aria-expanded', String(list.style.display === 'block'));
    update();
    toggle.addEventListener('click', update);
    group.querySelectorAll('.side-item').forEach((item, itemIndex) => {
      const link = item.querySelector('a');
      const sub = item.querySelector('.side-sub');
      if (!link || !sub) return;
      sub.id = `materials-${index}-${itemIndex}`;
      link.setAttribute('role', 'button');
      link.setAttribute('aria-controls', sub.id);
      const updateSub = () => link.setAttribute('aria-expanded', String(sub.style.display === 'block'));
      updateSub();
      link.addEventListener('click', updateSub);
      link.addEventListener('keydown', event => {
        if (event.key === ' ') { event.preventDefault(); link.click(); }
      });
    });
  });
  const roles = {studente:"Studentessa/studente", altro:"Altro"};
  const levels = {elementari:"Elementari", medie:"Medie", biennio:"Biennio superiori", triennio:"Triennio superiori", universita:"Università"};
  const params = new URLSearchParams(location.search);
  const role = params.get("ruolo");
  const level = params.get("livello");
  const selected = document.getElementById("selected-path");
  if (selected && levels[level]) {
    selected.querySelector("span").textContent = `${roles[role] ? roles[role] + " · " : ""}${levels[level]}`;
    const change = new URL("percorsi.html", location.href);
    if (roles[role]) change.searchParams.set("ruolo", role);
    change.searchParams.set("livello", level);
    selected.querySelector("a").href = change.href;
    selected.hidden = false;
    const introductions = {
      elementari:"Un percorso per avvicinarti alla matematica, capire le idee e imparare con curiosità.",
      medie:"Uno spazio per consolidare le basi, ragionare sui problemi e prepararti al passo successivo.",
      biennio:"Esplora il percorso di matematica e fisica del biennio: concetti, grafici, moti e strumenti per imparare.",
      triennio:"Approfondisci matematica e fisica con spiegazioni, esercizi e laboratori interattivi.",
      universita:"Riprendi e approfondisci vettori e meccanica del punto materiale con teoria, esercizi e strumenti interattivi."
    };
    document.getElementById("lessons-lead").textContent = introductions[level];
    document.title = `GatitoMath – Lezioni · ${levels[level]}`;
  }
  const empty = document.getElementById("topics-empty");
  if (empty && window.SITE_MAP && !window.SITE_MAP.length) {
    empty.hidden = false;
    document.getElementById("topics-hint").hidden = true;
    document.getElementById("materials-title").textContent = "Cosa troverai in questo percorso";
  }
  const form = document.querySelector(".rm-path-form");
  if (!form) return;
  const roleStep = document.getElementById("role-step");
  const levelStep = document.getElementById("level-step");
  const roleInput = document.getElementById("path-role");
  function showStep(second, chosenRole, focus = true) {
    roleInput.value = roles[chosenRole] ? chosenRole : "";
    const showLevel = second && !!roleInput.value;
    roleStep.hidden = showLevel;
    levelStep.hidden = !showLevel;
    form.querySelectorAll("[data-path-progress]").forEach(item => {
      const active = item.dataset.pathProgress === (showLevel ? "level" : "role");
      if (active) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
    document.getElementById("path-role-label").textContent = roles[chosenRole] || "";
    if (focus) document.getElementById(showLevel ? "level-title" : "role-title").focus();
  }
  function selectRole(chosenRole) {
    const url = new URL(location.href);
    url.searchParams.set("ruolo", chosenRole);
    url.searchParams.set("passo", "livello");
    url.searchParams.delete("livello");
    history.pushState(null, "", url);
    showStep(true, chosenRole);
  }
  for (const button of form.querySelectorAll("[data-role]")) {
    button.addEventListener("click", () => selectRole(button.dataset.role));
  }
  document.getElementById("path-back").addEventListener("click", () => {
    const url = new URL(location.href);
    url.search = "";
    history.pushState(null, "", url);
    showStep(false, "");
  });
  function restoreStep(focus = false) {
    const current = new URLSearchParams(location.search);
    showStep(current.get("passo") === "livello" || !!levels[current.get("livello")], current.get("ruolo"), focus);
  }
  window.addEventListener("popstate", () => restoreStep(true));
  form.addEventListener("submit", event => {
    if (!roles[roleInput.value]) { event.preventDefault(); showStep(false, ""); }
  });
  restoreStep();
  // Center the artwork against the full left-hand copy, not only the menu row.
  const pathLayout = document.querySelector(".rm-path-layout");
  const pathIntro = document.querySelector(".rm-lessons-main .rm-eyebrow");
  const pathShell = pathLayout.closest(".rm-shell");
  function alignWelcomeArt() {
    let offset = 0;
    if (window.matchMedia("(min-width:1120px)").matches) {
      const row = pathLayout.getBoundingClientRect();
      const intro = pathIntro.getBoundingClientRect();
      const menu = form.getBoundingClientRect();
      offset = (intro.top + menu.bottom) / 2 - (row.top + row.height / 2);
    }
    const value = `${Math.round(offset)}px`;
    if (pathLayout.style.getPropertyValue("--path-art-offset") !== value) {
      pathLayout.style.setProperty("--path-art-offset", value);
    }
  }
  alignWelcomeArt();
  if ("ResizeObserver" in window) {
    const artAlignment = new ResizeObserver(alignWelcomeArt);
    artAlignment.observe(pathShell);
    artAlignment.observe(form);
  }
  window.addEventListener("resize", alignWelcomeArt, {passive:true});
});
