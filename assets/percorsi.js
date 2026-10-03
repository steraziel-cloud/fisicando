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
  const roles = {studente:"Studente / studentessa", docente:"Docente", genitore:"Genitore", altro:"Altro"};
  const levels = {elementari:"Elementari", medie:"Medie", biennio:"Biennio superiori", triennio:"Triennio superiori", universita:"Università"};
  const params = new URLSearchParams(location.search);
  const role = params.get("ruolo");
  const level = params.get("livello");
  const selected = document.getElementById("selected-path");
  if (selected && roles[role] && levels[level]) {
    selected.querySelector("span").textContent = `${roles[role]} · ${levels[level]}`;
    const change = new URL("percorsi.html", location.href);
    change.search = params.toString();
    selected.querySelector("a").href = change.href;
    selected.hidden = false;
  }
  const form = document.querySelector(".rm-path-form");
  if (!form) return;
  // Restore the choices when the visitor follows “Cambia percorso”.
  for (const input of form.querySelectorAll('input[type="radio"]')) {
    input.checked = input.value === params.get(input.name);
  }
});
