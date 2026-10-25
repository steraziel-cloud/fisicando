/* Catalog rendering is separate from the legacy navigation on learning pages. */
document.addEventListener('DOMContentLoaded', () => {
  let catalog = window.LESSON_CATALOG;
  const nav = document.getElementById('sidebar');
  if (!catalog || !nav) return;
  const levels = window.STUDY_LEVELS;
  const params = new URLSearchParams(location.search);
  const level = Object.hasOwn(levels, params.get('livello')) ? params.get('livello') : null;
  // Alle medie le discipline scientifiche appartengono alla materia Scienze.
  // La proiezione conserva gli oggetti lezione e i loro URL; gli altri livelli
  // continuano a usare il catalogo originale.
  if (level === 'medie') {
    const subjects = catalog;
    const discipline = (id, title, icon) => {
      const source = subjects.find(s => s.id === id);
      if (id === 'chimica') return { title, icon, planned: true, topics: (source?.areas || []).flatMap(a => a.topics || []).map(t => ({ ...t, inlineLessons: true })) };
      return { title, icon, planned: true, topics: (source?.areas || []).map(a => ({
        title: a.title, icon: a.icon, children: a.topics || []
      })) };
    };
    const math = subjects.find(s => s.id === 'matematica');
    const middleSchoolMath = math && { ...math, areas: math.areas.map(a =>
      a.title === 'Algebra' ? { ...a, planned: true } : a
    ) };
    catalog = [middleSchoolMath, {
      id: 'scienze', title: 'Scienze', icon: 'microscope', areas: [
        discipline('fisica', 'Fisica', 'atom'),
        discipline('chimica', 'Chimica', 'molecule'),
        discipline('biologia', 'Biologia', 'dna'),
        discipline('scienze-terra', 'Scienze della Terra', 'earth')
      ]
    }].filter(Boolean);
  }
  const search = document.getElementById('lesson-search');
  const subject = document.getElementById('subject-filter');
  const area = document.getElementById('area-filter');
  const available = document.getElementById('available-filter');
  const all = document.getElementById('all-levels-filter');
  const subjectAllowed = s => !s.visibleLevels || !level || all.checked || s.visibleLevels.includes(level);
  function updateSubjects() {
    const previous=subject.value;
    subject.replaceChildren(new Option('Tutte le materie',''));
    catalog.filter(subjectAllowed).forEach(s=>subject.add(new Option(s.title,s.id)));
    if([...subject.options].some(o=>o.value===previous))subject.value=previous;
  }
  updateSubjects();
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
    earth:'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z M3 12h18 M12 3c5 5 5 13 0 18 M12 3c-5 5-5 13 0 18 M5 7h14 M5 17h14',
    bolt:'m13 2-9 12h7l-1 8 10-13h-7Z'
  };
  Object.assign(paths, {
  "math": "M5 7h14 M8 7v8c0 2-1 3-3 3 M16 7v9c0 2 1 2 3 2",
  "chip": "M6 6h12v12H6Z M9 2v4 M15 2v4 M9 18v4 M15 18v4 M2 9h4 M2 15h4 M18 9h4 M18 15h4 M9 9h6v6H9Z",
  "circuit": "M3 5h18v14H3Z M7 9h5v6H7Z M12 11h5v4h-2 M5 17h2 M17 7h2",
  "dna": "M7 2c0 7 10 13 10 20 M17 2c0 7-10 13-10 20 M8 4h8 M9 8h6 M9 16h6 M8 20h8",
  "cell": "M20 7c3 5 0 13-7 14S2 17 3 10 15 1 20 7Z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M7 16l2 1 M16 16l2-1 M7 8h1",
  "microscope": "m9 3 5 5-3 3-5-5Z M13 7h3a5 5 0 0 1 2 9 M5 14h9 M10 14v5 M4 21h17 M6 19h11 M11 2l4 4",
  "membrane": "M3 6h18 M3 18h18 M5 6v4 M9 6v4 M15 6v4 M19 6v4 M5 14v4 M9 14v4 M15 14v4 M19 14v4 M11 5h2v14h-2Z",
  "energy": "M19 5c5 3 2 13-5 15S2 18 3 12 13 1 19 5Z M8 9l4 1-3 4 5 1 3-4 M15 6l2 2",
  "cytoskeleton": "M4 4l16 16 M20 4 4 20 M3 12h18 M12 3v18 M4 4h16v16H4Z",
  "signal": "M3 10a3 3 0 1 1 0 4 M21 10a3 3 0 1 0 0 4 M7 12h10 m-3-3 3 3-3 3 M9 5a5 5 0 0 1 6 0 M9 19a5 5 0 0 0 6 0",
  "cycle": "M20 10a8 8 0 0 0-14-4 M6 2v4h4 M4 14a8 8 0 0 0 14 4 M18 22v-4h-4 M10 9h4v6h-4Z",
  "sprout": "M12 21V10 M12 14C4 14 3 9 3 5c6 0 9 3 9 9Z M12 10c0-5 4-7 9-7 0 5-3 8-9 8",
  "molecule": "M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z M21 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z M14 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M20 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z M6 7l3 4 M14 12l4-4 M13 15l4 4",
  "pedigree": "M9 2h6v5H9Z M12 7v5 M4 12h16 M4 12v4 M12 12v4 M20 12v4 M2 16h4v5H2Z M10 16h4v5h-4Z M18 16h4v5h-4Z",
  "human": "M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M12 8v7 M5 11l7-2 7 2 M12 15l-4 7 M12 15l4 7",
  "growth": "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z M15 9a3 3 0 1 0-5 3c3 0 5 2 3 5 M12 7h1",
  "evolution": "M4 21V4 M4 15h8 M12 15V7 M12 10h8 M12 15l8 6 M4 7h4 M18 5h4 M18 19h4",
  "leaf": "M20 3C10 2 3 6 4 14c1 7 9 8 13 3 3-4 3-8 3-14Z M5 19 16 8 M9 15v-5 M9 15h5",
  "species": "M3 20V4 M3 8h6 M3 16h6 M9 6h5 M9 14h5 M18 3l3 3-3 3-3-3Z M18 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
});
  Object.assign(paths, {
  "numbers": "M9 3 7 21 M17 3l-2 18 M4 9h17 M3 15h17",
  "variable": "M7 7c3 0 3 10 6 10 M16 7 6 17 M17 4h3 M17 20h3",
  "equation": "M3 8h6 M6 5v6 M13 8h8 M3 16h6 M13 15h8 M13 18h8",
  "coordinates": "M3 12h18 m-3-3 3 3-3 3 M12 21V3 m-3 3 3-3 3 3 M5 18l13-12",
  "sets": "M14 12a6 8 0 1 1-12 0 6 8 0 0 1 12 0Z M22 12a6 8 0 1 1-12 0 6 8 0 0 1 12 0Z",
  "vectors": "M4 20V4 m-3 3 3-3 3 3 M4 20h16 m-3-3 3 3-3 3 M4 20 19 5 M13 5h6v6",
  "motion": "M3 17h18 M4 14l4-4h12 m-4-4 4 4-4 4 M6 20v-3 M12 20v-3 M18 20v-3",
  "balance": "M12 3v18 M4 21h16 M3 7h18 M6 7l-4 8h8Z M18 7l-4 8h8Z",
  "force": "M3 10h8v8H3Z M11 14h10 m-4-4 4 4-4 4 M3 21h18",
  "work": "M3 19h18 M4 10h7v7H4Z M11 13h10 m-3-3 3 3-3 3 M5 5h9 m-3-3 3 3-3 3",
  "expression": "M3 4h7v5H3Z M6 9v5h7 m-3-3 3 3-3 3 M15 11h6v8h-6Z M16 21h4",
  "enzyme": "M3 17V9h6l3 5 3-5h6v8Z M9 3h6v4l-3 4-3-4Z",
  "variation": "M6 2c0 7 8 13 8 20 M14 2c0 7-8 13-8 20 M7 5h6 M7 19h6 M18 8v6 M15 11h6",
  "community": "M8 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M22 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M15 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M8 7h8 M7 10l3 4 M17 10l-3 4",
  "microbe": "M17 7c4 4-2 12-6 12s-7-4-4-8 6-8 10-4Z M9 6 7 3 M15 5l1-3 M19 10h3 M17 16l3 2 M10 20v2 M5 16H2 M10 11h1 M14 14h1"
});
  function icon(key) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24'); svg.setAttribute('aria-hidden','true'); svg.classList.add('rm-catalog-icon');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.7');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');
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
  let selectedKey = null, selectedLessonId = null;
  function catalogReturnURL(anchor='lesson-options') {
    const url = new URL(location.href);
    ['q','materia','area','disponibili','tutti','lezione'].forEach(key => url.searchParams.delete(key));
    if (search.value) url.searchParams.set('q', search.value);
    if (subject.value) url.searchParams.set('materia', subject.value);
    if (area.value) url.searchParams.set('area', area.value);
    if (available.checked) url.searchParams.set('disponibili', '1');
    if (all.checked) url.searchParams.set('tutti', '1');
    if (selectedLessonId) url.searchParams.set('lezione', selectedLessonId);
    url.hash = anchor;
    return url;
  }
  function rememberMaterialOrigin(card, lesson) {
    const origin = catalogReturnURL(card.id);
    const lab = new URL(card.href);
    lab.searchParams.set('ritorno', origin.href);
    if (lesson.id) lab.searchParams.set('lezione', lesson.id);
    card.href = lab.href;
    try {
      sessionStorage.setItem('gatito-catalog-return:' + origin.href, JSON.stringify({
        scrollY: window.scrollY,
        opened: [...nav.querySelectorAll('details[open]')].map(branch => branch.dataset.key)
      }));
    } catch {}
  }
  function selectLesson(l, topic, subjectTitle, areaTitle, key) {
    selectedKey = key; selectedLessonId = l.id || key;
    nav.querySelectorAll('button.rm-catalog-lesson').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lessonKey === key)));
    document.getElementById('selection-prompt').hidden = true;
    const pane = document.getElementById('lesson-options');
    pane.hidden = false; pane.classList.remove('rm-options-enter'); void pane.offsetWidth; pane.classList.add('rm-options-enter');
    document.getElementById('materials-title').textContent = l.title;
    document.getElementById('selected-lesson-path').textContent = `${subjectTitle} · ${areaTitle} · ${topic.title}`;
    document.getElementById('selected-lesson-note').textContent = l.unpublished ? 'Progetto in lavorazione. Questo segnaposto ricorda un’attività futura: i materiali non sono ancora pubblicati.' : l.status==='work-in-progress' ? (l.url ? 'Prima bozza in lavorazione: puoi esplorare il percorso; contenuti e visuali devono ancora essere revisionati.' : 'Lezione in lavorazione. I materiali non sono ancora disponibili.') : l.url ? 'Scegli il materiale disponibile per questa lezione.' : 'Questa lezione è da preparare. I materiali verranno aggiunti qui.';
    const cards = document.getElementById('lesson-cards'); cards.replaceChildren();
    const types = l.kind==='Progetto' ? [['Progetto','Un tachimetro con Arduino','Costruire uno strumento per misurare la velocità.']] : [['Teoria','Capire i concetti','Leggi la spiegazione nel reader.'],['Esercizi','Metterti alla prova','Applica i concetti e allena il ragionamento.'],['Laboratorio','Esplorare e sperimentare','Osserva e manipola i fenomeni.']];
    types.forEach(([kind,title,description],i) => {
      const materialUrl = l.kind === kind ? l.url : kind === 'Esercizi' ? l.exercisesUrl : kind === 'Laboratorio' ? l.labUrl : null;
      const active = !l.unpublished && materialUrl;
      const card = document.createElement(active ? 'a' : 'div'); card.className = 'rm-material-card rm-choice-card' + (active ? ' rm-choice-card-ready' : ' rm-choice-card-disabled');
      if (active) {
        const url = new URL(kind === 'Teoria' && !l.id ? 'reader.html' : materialUrl, location.href);
        if (kind === 'Teoria' && !l.id) url.searchParams.set('materiale', l.url);
        url.searchParams.set('livello',level && l.levels.includes(level) ? level : l.levels[0]);
        if (['studente','altro'].includes(params.get('ruolo'))) url.searchParams.set('ruolo',params.get('ruolo'));
        card.href = url.href;
        {
          card.id = kind === 'Laboratorio' ? 'lesson-lab' : kind === 'Esercizi' ? 'lesson-exercises' : kind === 'Progetto' ? 'lesson-project' : 'lesson-theory';
          const origin = catalogReturnURL(card.id);
          url.searchParams.set('ritorno', origin.href);
          if (l.id) url.searchParams.set('lezione', l.id);
          card.href = url.href;
          ['click','auxclick','contextmenu'].forEach(type => card.addEventListener(type, () => rememberMaterialOrigin(card, l)));
        }
      } else card.setAttribute('aria-disabled','true');
      const label = document.createElement('span'); label.className = 'rm-material-label';label.textContent = `0${i+1} · ${kind}`;
      const heading = document.createElement('h3');heading.textContent = kind === 'Laboratorio' && l.labTitle ? l.labTitle : title;
      const text = document.createElement('p');text.textContent = l.unpublished ? 'In lavorazione · Non ancora disponibile al pubblico.' : active ? (kind === 'Laboratorio' && l.labDescription ? l.labDescription : description) : 'Non ancora disponibile per questa lezione.';
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
        function visitTopic(t, topicKey, parent, ancestors) {
          const lessons=(t.lessons || []).filter(l=> {
            if(level && !all.checked && !l.levels.includes(level))return false;
            if(available.checked && (!l.url||l.unpublished))return false;
            const haystack=normalize([s.title,a.title,...ancestors,t.title,...(t.aliases||[]),l.title,l.kind||''].join(' '));
            return tokens.every(token=>haystack.includes(token));
          });
          const td=branch(t.title,topicKey,t.icon,filtering);td.classList.add('rm-catalog-topic');
          const list=document.createElement('ul');
          lessons.forEach(l=> {
            count++;if(l.url&&!l.unpublished)ready++;
            const li=document.createElement('li');const label=document.createElement('button');label.type='button';label.className='rm-catalog-lesson';
            const key = `${topicKey}/${(t.lessons || []).indexOf(l)}`;
            label.dataset.lessonKey = key; label.dataset.catalogLessonId = l.id || key; label.setAttribute('aria-pressed',String(selectedKey === key));
            label.addEventListener('click',()=>selectLesson(l,t,s.title,[a.title,...ancestors].join(' · '),key));
            const title=document.createElement('span');title.textContent=l.title;label.append(title);
            const status=document.createElement('small');status.textContent=l.status==='work-in-progress'?'In lavorazione':l.url?l.kind || 'Disponibile':'Da preparare';status.className=l.url&&!l.unpublished?'rm-lesson-ready':'rm-lesson-planned';label.append(status);
            if(all.checked || !level){const tags=document.createElement('small');tags.className='rm-lesson-levels';tags.textContent=l.levels.map(k=>levels[k]).join(' · ');label.append(tags);}
            li.append(label);list.append(li);
          });if(lessons.length)td.append(list);
          (t.children || []).forEach((child,ci)=>visitTopic(child,topicKey+'/child/'+ci,td,[...ancestors,t.title]));
          if(td.children.length>1){if(t.inlineLessons)parent.append(...[...td.children].slice(1));else parent.append(td);}
        }
        a.topics.forEach((t,ti)=>visitTopic(t,s.id+'/'+ai+'/'+ti,ad,[]));
        if(ad.children.length===1 && a.planned && !tokens.length && !available.checked) {
          const note=document.createElement('p'); note.className='rm-topics-hint';
          note.textContent='In lavorazione · Le lezioni saranno aggiunte qui.';
          ad.append(note);
        }
        if(ad.children.length>1)sd.append(ad);
      });if(sd.children.length>1)fragment.append(sd);
    });nav.replaceChildren(fragment);
    document.getElementById('topics-empty').hidden=nav.childElementCount!==0;
    document.getElementById('catalog-count').textContent=`${count} ${count===1?'voce':'voci'} · ${ready} materiali disponibili · ${all.checked || !level?'Tutti i livelli':levels[level]}`;
  }
  document.getElementById('catalog-filters').addEventListener('submit',e=>e.preventDefault());
  search.addEventListener('input',render);
  subject.addEventListener('change',()=>{updateAreas();render();});
  [area,available].forEach(el=>el.addEventListener('change',render));
  all.addEventListener('change',()=>{updateSubjects();updateAreas();render();});
  document.getElementById('reset-filters').addEventListener('click',()=>{search.value='';subject.value='';available.checked=false;all.checked=false;area.value='';updateSubjects();updateAreas();render();search.focus();});
  search.value = params.get('q') || '';
  available.checked = params.get('disponibili') === '1';
  all.checked = params.get('tutti') === '1';
  updateSubjects();
  const requestedSubject=params.get('materia');
  if([...subject.options].some(o=>o.value===requestedSubject))subject.value=requestedSubject;
  updateAreas();
  if ([...area.options].some(option => option.value === params.get('area'))) area.value = params.get('area');
  render();
  const requestedLesson = params.get('lezione');
  const selected = [...nav.querySelectorAll('[data-lesson-key]')].find(button => button.dataset.catalogLessonId === requestedLesson || button.dataset.lessonKey === requestedLesson);
  // A filter may hide the selected menu item while its material cards stay open.
  let hiddenSelection = null;
  if (!selected && requestedLesson) catalog.forEach(s => s.areas.forEach((a, ai) => {
    function visit(t, key, ancestors) {
      (t.lessons || []).forEach((l, i) => {
        const lessonKey = key + '/' + i;
        if ((l.id || lessonKey) === requestedLesson) hiddenSelection = [l, t, s.title, [a.title, ...ancestors].join(' · '), lessonKey];
      });
      (t.children || []).forEach((child, i) => visit(child, key + '/child/' + i, [...ancestors, t.title]));
    }
    a.topics.forEach((t, i) => visit(t, s.id + '/' + ai + '/' + i, []));
  }));
  if (selected || hiddenSelection) {
    let saved = null;
    try { saved = JSON.parse(sessionStorage.getItem('gatito-catalog-return:' + location.href)); } catch {}
    if (Array.isArray(saved?.opened)) nav.querySelectorAll('details').forEach(branch => { branch.open = saved.opened.includes(branch.dataset.key); });
    for (let parent = selected?.parentElement; parent && parent !== nav; parent = parent.parentElement) if (parent.tagName === 'DETAILS') parent.open = true;
    if (selected) selected.click(); else selectLesson(...hiddenSelection);
    window.addEventListener('load', () => requestAnimationFrame(() => {
      if (Number.isFinite(saved?.scrollY)) window.scrollTo(0, Math.max(0, saved.scrollY));
      else (document.getElementById(location.hash.slice(1)) || document.getElementById('lesson-options')).scrollIntoView({block:'center'});
    }), {once:true});
  }
});




