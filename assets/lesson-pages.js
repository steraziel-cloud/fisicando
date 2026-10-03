/* Preserve level and role when navigating existing learning pages. */
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const level = params.get('livello');
  const role = params.get('ruolo');
  const selection = new URLSearchParams();
  if (['elementari','medie','biennio','triennio','universita'].includes(level)) selection.set('livello',level);
  if (['studente','altro'].includes(role)) selection.set('ruolo',role);
  if (selection.size) {
    document.querySelectorAll('#sidebar a[href],.rm-learning-back').forEach(link => {
      const url = new URL(link.href);
      selection.forEach((value,key) => url.searchParams.set(key,value));
      link.href = url.href;
    });
  }
  document.querySelectorAll('.main table').forEach(table => {
    const scroll = document.createElement('div');
    scroll.className = 'rm-table-scroll';
    scroll.tabIndex = 0;
    scroll.setAttribute('role','region');
    scroll.setAttribute('aria-label','Tabella: scorri per vedere tutte le colonne');
    table.before(scroll); scroll.append(table);
  });
});
