// assets/site.js — sidebar con sottomenu chiusi di default (compatibile file://)
(function(){
  const sidebar = document.getElementById('sidebar');
  const main = document.getElementById('main');
  if (!sidebar || !window.SITE_MAP) return;

  // siamo in home se index.html o root dir
  function isHomePage(){
    const p = location.pathname.replace(/\\/g,'/').toLowerCase();
    const file = p.split('/').pop();
    return (file === '' || file === 'index.html');
  }
  const IS_HOME = isHomePage();

  // percorsi relativi sempre rispetto alla root del progetto
function toHref(relPath){
  return '/fisicando/' + relPath;
}

	function pageMatches(relPath){
  const current = location.pathname.replace(/\\/g,'/').toLowerCase();

  const expected = toHref(relPath).toLowerCase();

  return current.endsWith(expected);
}

  // costruiamo la sidebar
  window.SITE_MAP.forEach(group => {
    const wrap = document.createElement('div');
    wrap.className = 'side-group';

    const btn = document.createElement('button');
    btn.className = 'side-title';
    btn.textContent = group.title;

    const list = document.createElement('div');
    list.className = 'side-list';
    list.style.display = 'none'; // macro-argomenti chiusi di default

    // per ogni sottoargomento
    group.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'side-item';

      // link titolo sottoargomento
      const titleLink = document.createElement('a');
      titleLink.textContent = item.title;
      titleLink.href = "#";

      // toggle sub-menu al click sul titolo
      titleLink.addEventListener('click', (ev) => {
        ev.preventDefault();
        sub.style.display = (sub.style.display === 'block') ? 'none' : 'block';
      });

      row.appendChild(titleLink);

      // sub-link del sottoargomento (Teoria, Esercizi, Laboratorio)
      const sub = document.createElement('div');
      sub.className = 'side-sub';
      sub.style.display = 'none'; // chiusi di default

      if (item.pages) {
        // vecchia struttura: object {teoria: "...", esercizi: "..."}
        for (const [key, relPath] of Object.entries(item.pages)) {
          const link = document.createElement('a');
          link.textContent = key[0].toUpperCase() + key.slice(1);
          link.href = toHref(relPath);
          if (pageMatches(relPath)) {
            link.classList.add('active');
            sub.style.display = 'block'; // apri il menu se siamo in quella pagina
            list.style.display = 'block';
          }
          sub.appendChild(link);
        }
      } else if (item.items) {
        // nuova struttura: array [{title,url}, ...]
        item.items.forEach(subitem => {
          const link = document.createElement('a');
          link.textContent = subitem.title;
          link.href = toHref(subitem.url);
		  
		  if (subitem.title.toLowerCase() === "laboratorio") {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
      }
		  
          if (pageMatches(subitem.url)) {
            link.classList.add('active');
            sub.style.display = 'block';
            list.style.display = 'block';
          }
          sub.appendChild(link);
        });
      }

      row.appendChild(sub);
      list.appendChild(row);
    });

    wrap.appendChild(btn);
    wrap.appendChild(list);

    // toggle macro-argomento
    btn.addEventListener('click', () => {
      list.style.display = (list.style.display === 'block') ? 'none' : 'block';
    });

    sidebar.appendChild(wrap);
  });
})();
