/* Lightweight, original diagrams. No external service or image request. */
window.GatitoChemistryBoards=(()=>{
 'use strict';
 const records=`H|idrogeno;He|elio;Li|litio;Be|berillio;B|boro;C|carbonio;N|azoto;O|ossigeno;F|fluoro;Ne|neon;Na|sodio;Mg|magnesio;Al|alluminio;Si|silicio;P|fosforo;S|zolfo;Cl|cloro;Ar|argon;K|potassio;Ca|calcio;Sc|scandio;Ti|titanio;V|vanadio;Cr|cromo;Mn|manganese;Fe|ferro;Co|cobalto;Ni|nichel;Cu|rame;Zn|zinco;Ga|gallio;Ge|germanio;As|arsenico;Se|selenio;Br|bromo;Kr|cripton;Rb|rubidio;Sr|stronzio;Y|ittrio;Zr|zirconio;Nb|niobio;Mo|molibdeno;Tc|tecnezio;Ru|rutenio;Rh|rodio;Pd|palladio;Ag|argento;Cd|cadmio;In|indio;Sn|stagno;Sb|antimonio;Te|tellurio;I|iodio;Xe|xeno;Cs|cesio;Ba|bario;La|lantanio;Ce|cerio;Pr|praseodimio;Nd|neodimio;Pm|promezio;Sm|samario;Eu|europio;Gd|gadolinio;Tb|terbio;Dy|disprosio;Ho|olmio;Er|erbio;Tm|tulio;Yb|itterbio;Lu|lutezio;Hf|afnio;Ta|tantalio;W|tungsteno;Re|renio;Os|osmio;Ir|iridio;Pt|platino;Au|oro;Hg|mercurio;Tl|tallio;Pb|piombo;Bi|bismuto;Po|polonio;At|astato;Rn|radon;Fr|francio;Ra|radio;Ac|attinio;Th|torio;Pa|protoattinio;U|uranio;Np|nettunio;Pu|plutonio;Am|americio;Cm|curio;Bk|berkelio;Cf|californio;Es|einsteinio;Fm|fermio;Md|mendelevio;No|nobelio;Lr|laurenzio;Rf|rutherfordio;Db|dubnio;Sg|seaborgio;Bh|bohrio;Hs|hassio;Mt|meitnerio;Ds|darmstadtio;Rg|roentgenio;Cn|copernicio;Nh|nihonio;Fl|flerovio;Mc|moscovio;Lv|livermorio;Ts|tennesso;Og|oganesson`.split(';').map((x,i)=>({symbol:x.split('|')[0],name:x.split('|')[1],order:i+1}));
 const positions=[];
 [[1,18],[1,2,13,14,15,16,17,18],[1,2,13,14,15,16,17,18],Array.from({length:18},(_,i)=>i+1),Array.from({length:18},(_,i)=>i+1)].forEach((cols,row)=>cols.forEach(col=>positions.push([row+1,col])));
 positions.push([6,1],[6,2]);for(let col=3;col<=17;col++)positions.push([8,col]);for(let col=4;col<=18;col++)positions.push([6,col]);
 positions.push([7,1],[7,2]);for(let col=3;col<=17;col++)positions.push([9,col]);for(let col=4;col<=18;col++)positions.push([7,col]);
 records.forEach((r,i)=>{[r.row,r.col]=positions[i];});
 const names=Object.fromEntries(records.map(r=>[r.symbol,r.name]));
 const colors={H:'#f6f3db',O:'#ea756f',C:'#5c6671',He:'#e8bc5e',Na:'#b9a0e5',Cl:'#73c4a0'};
 const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
 const line=(x,y,u,v)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${v}" stroke="#718784" stroke-width="7" stroke-linecap="round"/>`;
 const ball=(x,y,k,r=27)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${colors[k]||'#c1ced3'}" stroke="#526c70" stroke-width="1.5"/><ellipse cx="${x-r*.28}" cy="${y-r*.34}" rx="${r*.31}" ry="${r*.16}" fill="white" opacity=".3"/><text x="${x}" y="${y+6}" text-anchor="middle" font-size="${r*.63}" fill="${k==='C'?'#fff':'#293e43'}" font-weight="800">${k}</text>`;
 const text=(x,y,s,size=18)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" fill="#294a4c">${s}</text>`;
 function oxygen(x,y){return line(x-30,y,x+30,y)+ball(x-30,y,'O')+ball(x+30,y,'O');}
 function water(x,y){return line(x,y,x-32,y+36)+line(x,y,x+32,y+36)+ball(x,y,'O',29)+ball(x-32,y+36,'H',20)+ball(x+32,y+36,'H',20);}
 function co2(x,y){return line(x-56,y,x+56,y)+ball(x,y,'C')+ball(x-56,y,'O')+ball(x+56,y,'O');}
 function svg(body,label,w=480,h=320){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${escape(label)}"><title>${escape(label)}</title>${body}</svg>`;}
 const bareBall=(...args)=>ball(...args).replace(/<text[^>]*>.*?<\/text>/g,'');
 function diagram(view){
  if(view==='dalton-join'){
   const group=(x,y)=>`<g transform="translate(${x} ${y}) scale(.8)">${line(0,0,-32,36)+line(0,0,32,36)+bareBall(0,0,'O',29)+bareBall(-32,36,'H',20)+bareBall(32,36,'H',20)}</g>`;
   return svg(text(240,32,'Un esempio di oggi: l’acqua',21)+text(120,75,'1 gruppetto',18)+text(360,75,'2 gruppetti',18)+group(120,125)+group(305,125)+group(410,125)+'<line x1="240" y1="65" x2="240" y2="235" stroke="#b7cbc4" stroke-width="1"/>'+text(120,203,'2 atomi di idrogeno',15)+text(120,225,'1 atomo di ossigeno',15)+text(360,203,'4 atomi di idrogeno',15)+text(360,225,'2 atomi di ossigeno',15)+'<rect x="20" y="250" width="440" height="43" rx="12" fill="#d0e8da"/>'+text(240,278,'Sempre 2 di idrogeno per 1 di ossigeno',18),'Un gruppetto d’acqua contiene due atomi di idrogeno e uno di ossigeno. Due gruppetti contengono quattro atomi di idrogeno e due di ossigeno: la proporzione resta uguale.',480,310);
  }
  if(view==='element-count')return svg(text(240,115,'118',92)+text(240,165,'elementi riconosciuti',25)+bareBall(132,220,'He',19)+bareBall(205,220,'O',19)+bareBall(278,220,'C',19)+bareBall(351,220,'Na',19)+text(240,282,'Tipi diversi di atomi',20),'118 elementi riconosciuti, ciascuno corrisponde a un tipo di atomo. I colori sono convenzionali.');
  if(view==='atoms')return svg(bareBall(120,135,'H',40)+bareBall(240,135,'O',47)+bareBall(365,135,'C',45)+text(120,225,'idrogeno')+text(240,225,'ossigeno')+text(365,225,'carbonio')+text(240,45,'Alcuni tipi di atomi',22),'Modelli schematici di un atomo di idrogeno, uno di ossigeno e uno di carbonio.',480,270);
  if(view==='elements')return svg(bareBall(70,90,'He',20)+bareBall(140,142,'He',20)+bareBall(65,170,'He',20)+line(310,104,370,104)+bareBall(310,104,'O')+bareBall(370,104,'O')+line(310,190,370,190)+bareBall(310,190,'O')+bareBall(370,190,'O')+text(107,258,'elio: atomi separati',16)+text(340,258,'ossigeno: coppie di atomi',16)+text(240,36,'Un solo elemento in ogni campione',21),'A sinistra tre atomi separati di elio; a destra due coppie di ossigeno. Ogni campione contiene un solo elemento.');
  if(['molecules','compounds','recap'].includes(view))return svg(oxygen(125,130)+water(350,113)+text(125,230,'O₂',27)+text(350,230,'H₂O',27)+text(125,267,'2 atomi · 1 elemento',16)+text(350,267,'3 atomi · 2 elementi',16)+text(240,40,view==='compounds'?'Sostanza semplice e composto':'Due molecole, cinque atomi',21),'Una molecola di ossigeno con due O e una molecola d’acqua con due H e un O.');
  if(view==='water-formula')return svg(water(240,100)+text(240,230,'H₂O',55)+text(240,282,'2 atomi di idrogeno + 1 di ossigeno',18),'La formula H₂O corrisponde a una molecola con due atomi di idrogeno e uno di ossigeno.');
  if(view==='carbon-formula')return svg(co2(240,125)+text(240,235,'CO₂',55)+text(240,285,'1 atomo di carbonio + 2 di ossigeno',18),'La formula CO₂ corrisponde a una molecola con un atomo di carbonio e due di ossigeno.');
  if(view==='lattice'){
   let s=text(240,32,'Una struttura estesa',23);
   for(let z=1;z>=0;z--)for(let y=0;y<3;y++)for(let x=0;x<4;x++){const px=102+x*75+z*20,py=80+y*72-z*18,k=(x+y+z)%2?'Cl':'Na';s+=ball(px,py,k,24);s+=text(px+18,py-20,k==='Na'?'+':'−',18);}
   return svg(s+text(240,309,'NaCl · rapporto 1 a 1',19),'Porzione schematica del reticolo del sale: ioni di sodio e cloro alternati con i segni più e meno.');
  }
  if(view==='before-reaction')return svg(line(70,105,125,105)+ball(70,105,'H')+ball(125,105,'H')+line(70,212,125,212)+ball(70,212,'H')+ball(125,212,'H')+oxygen(350,160)+text(240,35,'Prima: idrogeno e ossigeno',23)+text(240,294,'4 H + 2 O',24),'Prima della reazione: due molecole H₂ e una molecola O₂, per un totale di quattro atomi H e due O.');
  if(view==='after-reaction')return svg(water(130,118)+water(350,118)+text(240,35,'Dopo: due molecole d’acqua',23)+text(240,294,'Ancora 4 H + 2 O',24),'Dopo la reazione: due molecole H₂O. Il numero di atomi per ciascun elemento non cambia.');
  return '';
 }
 const assetRoot=new URL('images/reader/chemistry/',document.currentScript?.src||new URL('assets/reader-chemistry-boards.js',location.href)).href;
 const samplePictures={C:['grafite','solido'],Al:['alluminio','solido'],Si:['silicio','solido'],S:['zolfo','solido'],Fe:['ferro','solido'],Cu:['rame','solido'],Au:['oro','solido'],Hg:['mercurio','liquido'],Br:['bromo','liquido']};
 const colourlessGases=['H','He','N','O','Ne','Ar','Kr','Xe'];
 const simpleSamples=[['elio','Elio · atomi separati'],['ossigeno','Ossigeno · atomi a coppie'],['alluminio','Alluminio · struttura reticolare estesa']];
 function showSimpleSample(host,state){
  state.motion?.dispose();state.motion=null;
  const d=simpleSamples.find(x=>x[0]===state.sample)||simpleSamples[0];state.sample=d[0];
  host.querySelectorAll('[data-ch-sample]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.chSample===d[0])));
  const visual=host.querySelector('.ch-sample-visual');
  if(window.GatitoMatterApproved){const desc={id:d[0],name:d[1]},scene=window.GatitoMatterApproved.scene(desc);visual.innerHTML=scene.svg;state.motion=window.GatitoMatterApproved.animate(visual,desc,scene.engine);}
  else visual.innerHTML=diagram('elements');
  host.querySelector('.ch-sample-name').textContent=d[1];
 }
 const hallPortraits={
  democrito:{file:'hall-democrito.webp',name:'Democrito',rect:[40,2,44,54],alt:'Red e Morgana ammirano il ritratto immaginario di Democrito nella sala dell’atomismo antico.'},
  dalton:{file:'hall-dalton.webp',name:'John Dalton',rect:[13,0,30,50],alt:'Red e Morgana visitano la sala degli esperimenti e il ritratto illustrato di John Dalton.'},
  mendeleev:{file:'hall-mendeleev.webp',name:'Dmitrij Mendeleev',rect:[54,0,41,64],alt:'Red e Morgana esplorano una sala dedicata agli elementi e al ritratto illustrato di Mendeleev.'}
 };
 function museum(id){
  const p=hallPortraits[id],r=p.rect;
  const quotations={
   democrito:{text:'Per convenzione il colore, per convenzione il dolce, per convenzione l’amaro: in realtà solo atomi e vuoto.',label:'frammento 68 B 125',url:'https://www.treccani.it/enciclopedia/anassagora-e-democrito_(Storia-della-civilta-Europea)/'},
   dalton:{text:'Tutti i cambiamenti che possiamo produrre consistono nel separare particelle […] e nell’unire quelle che prima erano distanti.',label:'1808 · traduzione italiana',url:'https://web.lemoyne.edu/Giunta/Dalton.html'},
   mendeleev:{text:'Si può prevedere la scoperta di molti nuovi elementi […].',label:'1869 · traduzione italiana',url:'https://webserver.lemoyne.edu/giunta/mendeleev.html'}
  };
  const q=quotations[id];
  const quote=`<blockquote class="ch-hall-quote"><p>«${q.text}»</p><footer><cite>${p.name}</cite> · <a href="${q.url}" target="_blank" rel="noopener noreferrer">${q.label} ↗</a></footer></blockquote>`;

  return `<div class="ch-hall-heading">Hall of Fame della scienza</div><div class="ch-museum"><img src="${assetRoot}${p.file}" width="1200" height="800" alt="${escape(p.alt)}" decoding="async"><button type="button" class="ch-portrait" style="left:${r[0]}%;top:${r[1]}%;width:${r[2]}%;height:${r[3]}%" data-term="${id}" aria-label="${p.name}: apri la biografia"></button></div>${quote}`;
 }
 function symbolGallery(){
  return `<div class="ch-symbol-gallery"><div class="ch-hall-heading">Hall of Fame della scienza</div><div class="ch-museum ch-symbol-room"><img src="${assetRoot}hall-berzelius.webp" width="1200" height="800" alt="Red e Morgana visitano la sala di Berzelius, con il suo ritratto e un banco interattivo dedicato ai simboli chimici." decoding="async"><button type="button" class="ch-portrait ch-berzelius-portrait" data-term="berzelius" aria-label="Jöns Jacob Berzelius: apri la biografia"></button><section class="ch-symbol-exhibit" aria-label="Il banco dei simboli"><div class="ch-symbol-label">Esplora i simboli di oggi</div><div class="ch-symbol-picks" role="group" aria-label="Scegli un simbolo chimico">${['H','O','C','He','Fe','Na','Au'].map(k=>`<button type="button" data-ch-element="${k}" aria-pressed="false">${k}</button>`).join('')}</div><div class="ch-element-info" aria-live="polite" aria-atomic="true"></div></section></div><blockquote class="ch-hall-quote"><p>«I simboli chimici dovrebbero essere lettere, per la maggiore facilità di scrittura.»</p><footer><cite>Jöns Jacob Berzelius</cite> · <a href="https://web.lemoyne.edu/giunta/berzelius.html" target="_blank" rel="noopener noreferrer">1813–1814 · traduzione italiana ↗</a></footer></blockquote></div>`;
 }
 const mounted=new WeakMap();
 function render(host,state){
  state.motion?.dispose();state.motion=null;
  const {view}=state;
  host.parentElement.classList.toggle('rm-chemistry-periodic',view==='periodic');
  if(view==='museum'||view==='dalton-start'||view==='hall-mendeleev'){
   host.innerHTML=museum(view==='museum'?'democrito':view==='dalton-start'?'dalton':'mendeleev');return;
  }
  if(view==='simple-substances'){
   host.innerHTML='<div class="ch-sample-picks" role="group" aria-label="Esplora come sono organizzati gli atomi">'+simpleSamples.map(([id,name])=>`<button type="button" data-ch-sample="${id}">${name.split(' · ')[0]}</button>`).join('')+'</div><div class="ch-sample-visual"></div><p class="ch-sample-name" aria-live="polite"></p>';
   showSimpleSample(host,state);return;
  }
  if(view==='dalton-join'){host.innerHTML='<div class="ch-dalton ch-ratio-board">'+diagram(view)+'</div>';return;}
  if(view.startsWith('dalton')){
   const joined=view==='dalton-join';
   host.innerHTML='<div class="ch-dalton"><span class="ch-eyebrow">Hall of Fame · Inizio Ottocento</span><button type="button" class="rm-keyword ch-historian" data-term="dalton">John Dalton ↗</button>'+diagram(joined?'dalton-join':'atoms')+'<p>'+(joined?'Gli stessi atomi, combinati in rapporti definiti.':'Dalle misure sulle sostanze a una teoria sugli atomi.')+'</p></div>';return;
  }
  if(view==='periodic'){
   host.innerHTML='<div class="ch-periodic-scroll"><div class="ch-periodic-grid" role="group" aria-label="Tavola periodica: seleziona un elemento">'+Array.from({length:18},(_,i)=>`<span class="ch-group-label" style="grid-column:${i+2};grid-row:1">${i+1}</span>`).join('')+Array.from({length:7},(_,i)=>`<span class="ch-period-label" style="grid-column:1;grid-row:${i+2}">${i+1}</span>`).join('')+records.map(r=>`<button type="button" class="ch-element" style="grid-row:${r.row+1};grid-column:${r.col+1}" data-ch-element="${r.symbol}" aria-label="${r.symbol}, ${r.name}" aria-pressed="${r.symbol===state.selected}">${r.symbol}</button>`).join('')+'<span class="ch-series-marker" style="grid-row:7;grid-column:4">↓</span><span class="ch-series-marker" style="grid-row:8;grid-column:4">↓</span></div></div><div class="ch-element-info" aria-live="polite"></div><div class="ch-element-shortcuts" role="group" aria-label="Elementi già incontrati">'+['H','He','C','O','Na','Cl','Fe','Ne','Ar'].map(k=>`<button type="button" data-ch-element="${k}" aria-pressed="${k===state.selected}">${k}</button>`).join('')+'</div>';
   updateSelection(host,state);return;
  }
  if(view==='symbols'){
   host.innerHTML=symbolGallery();updateSelection(host,state);return;
  }
  if(view==='history'||view==='today'){
   host.innerHTML='<div class="ch-timeline"><div><span>Antica Grecia</span><strong>Leucippo e Democrito</strong><p>L’idea di particelle indivisibili.</p></div><div><span>Inizio Ottocento</span><strong>John Dalton</strong><p>Una teoria per spiegare i risultati degli esperimenti.</p></div><div class="'+(view==='today'?'ch-timeline-current':'')+'"><span>Scoperte successive</span><strong>Dentro l’atomo</strong><p>Una struttura più complessa: sarà il nostro prossimo passo.</p></div></div>';return;
  }
  if(view==='lattice'&&window.GatitoMatterApproved){host.innerHTML=window.GatitoMatterApproved.scene({id:'sale',name:'Sale da cucina'}).svg+'<p class="ch-model-caption">NaCl · rapporto 1 a 1</p>';return;}
  host.innerHTML=diagram(view)+(view==='atoms'?'<details class="ch-model-note"><summary aria-label="Informazioni sul modello" title="Informazioni sul modello">i</summary><div class="ch-model-note-content"><strong>Come leggere il modello</strong><p>I colori sono scelti da noi per distinguere i tipi di atomi. Le dimensioni e le distanze non sono in scala: il disegno è un modello, non una fotografia.</p></div></details>':'');
 }
 function updateSelection(host,state){
  const r=records.find(r=>r.symbol===state.selected);host.querySelectorAll('[data-ch-element]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.chElement===r.symbol)));
  const box=host.querySelector('.ch-element-info');let detail='';
  if(state.view==='periodic'){
   const item=samplePictures[r.symbol],gas=colourlessGases.includes(r.symbol);
   if(item||gas){
    const file=gas?'element-gas.webp':`element-${r.symbol}.webp`;
    const description=gas?`${r.name}: gas incolore. La fiala sembra vuota perché il gas non si vede.`:`${r.name}: ${item[1]}. ${r.symbol==='C'?'Qui è mostrata la grafite, una delle forme del carbonio.':''}`;
    detail=`<figure class="ch-specimen"><img src="${assetRoot}${file}" width="180" height="180" alt="Illustrazione generata: ${escape(description)}" loading="lazy" decoding="async"><figcaption>${description}<small>20 °C · 1 atm. Illustrazione generata, non fotografia di laboratorio.${gas?' La stessa immagine della fiala rappresenta i diversi gas incolori.':''}</small></figcaption></figure>`;
   }else{
    const message=r.order>=104?'Non esiste un campione macroscopico da fotografare: questo elemento è stato ottenuto soltanto in quantità estremamente piccole.':'Illustrazione del campione non ancora disponibile.';
    detail=`<p class="ch-specimen-pending">${message}</p>`;
   }
  }
  box.innerHTML=`<div class="ch-element-identity"><strong>${r.symbol}</strong><span>${r.name}</span></div>${detail}`;
 }
 function ratioDetail(){
  const detail=document.createElement('dialog');detail.className='rm-glossary ch-ratio-detail';
  detail.setAttribute('aria-labelledby','ch-ratio-title');
  detail.innerHTML='<form method="dialog"><button type="submit" aria-label="Chiudi l’approfondimento">✕</button></form><span class="rm-eyebrow">Per capire meglio</span><h2 id="ch-ratio-title">Sempre la stessa combinazione</h2><p>Prendiamo un esempio che conosciamo oggi: <strong>l’acqua</strong>. Ogni suo gruppetto contiene <strong>2 atomi di idrogeno e 1 di ossigeno</strong>.</p><div class="ch-ratio-example">'+diagram('dalton-join')+'</div><p><strong>Semplici</strong>: per contare gli atomi bastano piccoli numeri interi, come 2 e 1.<br><strong>Costanti</strong>: se aumentano i gruppetti, aumentano entrambi i conteggi, ma restano <strong>sempre due atomi di idrogeno per ogni atomo di ossigeno</strong>.</p>';
  detail.addEventListener('click',e=>{if(e.target===detail){const r=detail.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)detail.close();}});
  document.body.append(detail);return detail;
 }
 function mount(box,board,{view}={}){
  box.classList.add('rm-chemistry-card');if(board==='chem-periodic')box.classList.add('rm-chemistry-periodic');
  const host=document.createElement('div');host.className='ch-board';const state={view:view||board.slice(5),selected:'H',sample:'elio',motion:null};box.append(host);mounted.set(box,{host,state});render(host,state);
  const click=e=>{const sample=e.target.closest('[data-ch-sample]');if(sample&&host.contains(sample)){state.sample=sample.dataset.chSample;showSimpleSample(host,state);return;}const b=e.target.closest('[data-ch-element]');if(!b||!host.contains(b))return;state.selected=b.dataset.chElement;updateSelection(host,state);};host.addEventListener('click',click);
  let detail=null;
  const inspect=e=>{const trigger=e.target.closest('[data-ch-ratios]');if(!trigger||!box.contains(trigger))return;if(!detail)detail=ratioDetail();detail.showModal();};
  box.addEventListener('click',inspect);
  return()=>{state.motion?.dispose();host.removeEventListener('click',click);box.removeEventListener('click',inspect);if(detail){detail.close();detail.remove();}mounted.delete(box);};
 }
 function setView(box,view){const found=mounted.get(box);if(!found||!view||found.state.view===view)return;found.state.view=view;render(found.host,found.state);}
 const quizOxygen=svg(oxygen(210,90),'Due atomi di ossigeno legati.',420,190);
 const quizCompounds=svg(ball(52,105,'He',22)+ball(108,105,'He',22)+oxygen(300,105)+water(500,83)+text(80,35,'A',23)+text(300,35,'B',23)+text(500,35,'C',23),'A: elio separato. B: ossigeno in coppie. C: acqua con H e O.',600,220);
 return {mount,setView,records,diagram,quizOxygen,quizCompounds};
})();







