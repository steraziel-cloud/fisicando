/* Catalog rendering is separate from the legacy navigation on learning pages. */
document.addEventListener('DOMContentLoaded', () => {
  const catalog = window.LESSON_CATALOG;
  const nav = document.getElementById('sidebar');
  if (!catalog || !nav) return;
  const levels = window.STUDY_LEVELS;
  const params = new URLSearchParams(location.search);
  const level = Object.hasOwn(levels, params.get('livello')) ? params.get('livello') : null;
  const search = document.getElementById('lesson-search');
  const subject = document.getElementById('subject-filter');
  const area = document.getElementById('area-filter');
  const available = document.getElementById('available-filter');
  const all = document.getElementById('all-levels-filter');
  const subjectAllowed = s => !s.visibleLevels || !!level && s.visibleLevels.includes(level);
  subject.replaceChildren(new Option('Tutte le materie',''));
  catalog.filter(subjectAllowed).forEach(s=>subject.add(new Option(s.title,s.id)));
  if (!level) all.closest('label').hidden = true;
  const paths = {
    ruler:'M4 4h16v16H4z M8 4v5 M12 4v3 M16 4v5',
    calculator:'M6 2h12v20H6z M9 5h6v4H9z M9 13h1 M14 13h1 M9 17h1 M14 17h1',
    triangle:'M12 3 22 21H2Z M7 16h3v5',
    graph:'M3 3v18h18 M5 17l5-7 5 3 5-9',
    arrow:'M4 20 20 4 M10 4h10v10',
    atom:'M21 12c0 2-4 4-9 4s-9-2-9-4 4-4 9-4 9 2 9 4Z M16 4c2 1 2 6-1 10s-6 7-8 6-2-6 1-10 6-7 8-6Z M8 4c-2 1-2 6 1 10s6 7 8 6 2-6-1-10-6-7-8-6Z',
    measure:'M3 17 17 3l4 4L7 21Z M8 12l3 3 M12 8l3 3 M16 4l3 3',
    gear:'M9 3h6l1 4 4 1v8l-4 1-1 4H9l-1-4-4-1V8l4-1Z M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
    thermometer:'M9 14V5a3 3 0 0 1 6 0v9a5 5 0 1 1-6 0Z M12 8v10 M18 6h3 M18 10h3',
    bolt:'m13 2-9 12h7l-1 8 10-13h-7Z'
  };
  function icon(key) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('aria-hidden','true'); svg.classList.add('rm-catalog-icon');
    const path = document.createElementNS(svg.namespaceURI,'path'); path.setAttribute('d',paths[key] || paths.graph); svg.append(path); return svg;
  }
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const opened = new Set();
  function branch(title,key,iconKey,expanded) {
    const d = document.createElement('details'); d.className='rm-catalog-branch';d.dataset.key=key;d.open=expanded || opened.has(key);
    const s=document.createElement('summary'); if(iconKey)s.append(icon(iconKey));
    const t=document.createElement('span');t.textContent=title;s.append(t);d.append(s);
    d.addEventListener('toggle',()=> { if (!search.value.trim() && !subject.value && !area.value && !available.checked && !all.checked) {if(d.open)opened.add(key);else opened.delete(key);} });
    return d;
  }
  function updateAreas() {
    const previous=area.value;area.replaceChildren(new Option('Tutte le macroaree',''));
    catalog.filter(s=>subjectAllowed(s)&&(!subject.value || s.id===subject.value)).forEach(s=>s.areas.forEach(a=>area.add(new Option(a.title,s.id+'/'+a.title))));
    if ([...area.options].some(o=>o.value===previous))area.value=previous;
  }
  let selectedKey = null;
  function selectLesson(l, topic, subjectTitle, areaTitle, key) {
    selectedKey = key;
    nav.querySelectorAll('button.rm-catalog-lesson').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lessonKey === key)));
    document.getElementById('selection-prompt').hidden = true;
    const pane = document.getElementById('lesson-options');
    pane.hidden = false; pane.classList.remove('rm-options-enter'); void pane.offsetWidth; pane.classList.add('rm-options-enter');
    document.getElementById('materials-title').textContent = l.title;
    document.getElementById('selected-lesson-path').textContent = `${subjectTitle} · ${areaTitle} · ${topic.title}`;
    document.getElementById('selected-lesson-note').textContent = l.unpublished ? 'Progetto in lavorazione. Questo segnaposto ricorda un’attività futura: i materiali non sono ancora pubblicati.' : l.url ? 'Scegli il materiale disponibile per questa lezione.' : 'Questa lezione è da preparare. I materiali verranno aggiunti qui.';
    const cards = document.getElementById('lesson-cards'); cards.replaceChildren();
    const types = l.kind==='Progetto' ? [['Progetto','Un tachimetro con Arduino','Costruire uno strumento per misurare la velocità.']] : [['Teoria','Capire i concetti','Leggi la spiegazione nel reader.'],['Esercizi','Metterti alla prova','Applica i concetti e allena il ragionamento.'],['Laboratorio','Esplorare e sperimentare','Osserva e manipola i fenomeni.']];
    types.forEach(([kind,title,description],i) => {
      const active = !l.unpublished && l.url && l.kind === kind;
      const card = document.createElement(active ? 'a' : 'div'); card.className = 'rm-material-card rm-choice-card' + (active ? ' rm-choice-card-ready' : ' rm-choice-card-disabled');
      if (active) {
        const url = new URL(kind === 'Teoria' && !l.id ? 'reader.html' : l.url, location.href);
        if (kind === 'Teoria' && !l.id) url.searchParams.set('materiale', l.url);
        url.searchParams.set('livello',level && l.levels.includes(level) ? level : l.levels[0]);
        if (['studente','altro'].includes(params.get('ruolo'))) url.searchParams.set('ruolo',params.get('ruolo'));
        card.href = url.href;
      } else card.setAttribute('aria-disabled','true');
      const label = document.createElement('span'); label.className = 'rm-material-label';label.textContent = `0${i+1} · ${kind}`;
      const heading = document.createElement('h3');heading.textContent = title;
      const text = document.createElement('p');text.textContent = l.unpublished ? 'In lavorazione · Non ancora disponibile al pubblico.' : active ? description : 'Non ancora disponibile per questa lezione.';
      card.append(label,heading,text);cards.append(card);
    });
  }
  function render() {
    const tokens=normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    const filtering=!!(tokens.length || subject.value || area.value || available.checked || all.checked);
    const fragment=document.createDocumentFragment();let count=0, ready=0;
    catalog.forEach(s=> {
      if(!subjectAllowed(s))return;
      if(subject.value && s.id!==subject.value)return;
      const sd=branch(s.title,s.id,s.icon,filtering);
      sd.classList.add('rm-catalog-subject');
      s.areas.forEach((a,ai)=> {
        if(area.value && area.value!==s.id+'/'+a.title)return;
        const ad=branch(a.title,s.id+'/'+ai,a.icon,filtering);
        a.topics.forEach((t,ti)=> {
          const lessons=t.lessons.filter(l=> {
            if(level && !all.checked && !l.levels.includes(level))return false;
            if(available.checked && (!l.url||l.unpublished))return false;
            const haystack=normalize([s.title,a.title,t.title,...(t.aliases||[]),l.title,l.kind||''].join(' '));
            return tokens.every(token=>haystack.includes(token));
          });
          if(!lessons.length)return;
          const td=branch(t.title,s.id+'/'+ai+'/'+ti,null,tokens.length > 0 || available.checked);td.classList.add('rm-catalog-topic');
          const list=document.createElement('ul');
          lessons.forEach(l=> {
            count++;if(l.url&&!l.unpublished)ready++;
            const li=document.createElement('li');const label=document.createElement('button');label.type='button';label.className='rm-catalog-lesson';
            const key = `${s.id}/${ai}/${ti}/${t.lessons.indexOf(l)}`;
            label.dataset.lessonKey = key; label.setAttribute('aria-pressed',String(selectedKey === key));
            label.addEventListener('click',()=>selectLesson(l,t,s.title,a.title,key));
            const title=document.createElement('span');title.textContent=l.title;label.append(title);
            const status=document.createElement('small');status.textContent=l.status==='work-in-progress'?'In lavorazione':l.url?l.kind || 'Disponibile':'Da preparare';status.className=l.url&&!l.unpublished?'rm-lesson-ready':'rm-lesson-planned';label.append(status);
            if(all.checked || !level){const tags=document.createElement('small');tags.className='rm-lesson-levels';tags.textContent=l.levels.map(k=>levels[k]).join(' · ');label.append(tags);}
            li.append(label);list.append(li);
          });td.append(list);ad.append(td);
        });if(ad.children.length>1)sd.append(ad);
      });if(sd.children.length>1)fragment.append(sd);
    });nav.replaceChildren(fragment);
    document.getElementById('topics-empty').hidden=count!==0;
    document.getElementById('catalog-count').textContent=`${count} ${count===1?'voce':'voci'} · ${ready} materiali disponibili · ${all.checked || !level?'Tutti i livelli':levels[level]}`;
  }
  document.getElementById('catalog-filters').addEventListener('submit',e=>e.preventDefault());
  search.addEventListener('input',render);
  subject.addEventListener('change',()=>{updateAreas();render();});
  [area,available,all].forEach(el=>el.addEventListener('change',render));
  document.getElementById('reset-filters').addEventListener('click',()=>{search.value='';subject.value='';available.checked=false;all.checked=false;area.value='';updateAreas();render();search.focus();});
  updateAreas();render();
});
