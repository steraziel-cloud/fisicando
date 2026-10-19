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
 function diagram(view){
  if(view==='atoms')return svg(ball(120,135,'H',40)+ball(240,135,'O',47)+ball(365,135,'C',45)+text(120,225,'idrogeno')+text(240,225,'ossigeno')+text(365,225,'carbonio')+text(240,45,'Tre tipi di atomi',22)+text(240,283,'Colori convenzionali · modelli non in scala',13),'Modelli schematici di un atomo di idrogeno, uno di ossigeno e uno di carbonio.');
  if(view==='elements')return svg(ball(70,90,'He',20)+ball(140,142,'He',20)+ball(65,170,'He',20)+oxygen(340,104)+oxygen(340,190)+text(107,258,'elio: atomi separati',16)+text(340,258,'ossigeno: coppie di atomi',16)+text(240,36,'Un solo elemento in ogni campione',21),'A sinistra tre atomi separati di elio; a destra due coppie di ossigeno. Ogni campione contiene un solo elemento.');
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
 const mounted=new WeakMap();
 function render(host,state){
  const {view}=state;
  if(view==='periodic'){
   host.innerHTML='<div class="ch-periodic-scroll"><div class="ch-periodic-grid" role="group" aria-label="Tavola periodica: seleziona un elemento">'+Array.from({length:18},(_,i)=>`<span class="ch-group-label" style="grid-column:${i+2};grid-row:1">${i+1}</span>`).join('')+Array.from({length:7},(_,i)=>`<span class="ch-period-label" style="grid-column:1;grid-row:${i+2}">${i+1}</span>`).join('')+records.map(r=>`<button type="button" class="ch-element" style="grid-row:${r.row+1};grid-column:${r.col+1}" data-ch-element="${r.symbol}" aria-label="${r.symbol}, ${r.name}" aria-pressed="${r.symbol===state.selected}">${r.symbol}</button>`).join('')+'<span class="ch-series-marker" style="grid-row:7;grid-column:4">↓</span><span class="ch-series-marker" style="grid-row:8;grid-column:4">↓</span></div></div><div class="ch-element-info" aria-live="polite"></div><div class="ch-element-shortcuts" role="group" aria-label="Elementi già incontrati">'+['H','He','C','O','Na','Cl','Fe','Ne','Ar'].map(k=>`<button type="button" data-ch-element="${k}" aria-pressed="${k===state.selected}">${k}</button>`).join('')+'</div>';
   updateSelection(host,state);return;
  }
  if(view==='symbols'){
   host.innerHTML='<div class="ch-symbol-picks">'+['H','O','C','He','Fe','Na','Au'].map(k=>`<button type="button" data-ch-element="${k}" aria-pressed="${k===state.selected}">${k}</button>`).join('')+'</div><div class="ch-element-info" aria-live="polite"></div>';updateSelection(host,state);return;
  }
  if(view==='history'||view==='today'){
   host.innerHTML='<div class="ch-timeline"><div><span>Antica Grecia</span><strong>Leucippo e Democrito</strong><p>L’idea di particelle indivisibili.</p></div><div><span>Inizio Ottocento</span><strong>John Dalton</strong><p>Una teoria per spiegare i risultati degli esperimenti.</p></div><div class="'+(view==='today'?'ch-timeline-current':'')+'"><span>Scoperte successive</span><strong>Dentro l’atomo</strong><p>Una struttura più complessa: sarà il nostro prossimo passo.</p></div></div>';return;
  }
  if(view==='lattice'&&window.GatitoMatterApproved){host.innerHTML=window.GatitoMatterApproved.scene({id:'sale',name:'Sale da cucina'}).svg+'<p class="ch-model-caption">NaCl · rapporto 1 a 1</p>';return;}
  host.innerHTML=diagram(view);
 }
 function updateSelection(host,state){
  const r=records.find(r=>r.symbol===state.selected);host.querySelectorAll('[data-ch-element]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.chElement===r.symbol)));
  const box=host.querySelector('.ch-element-info');box.innerHTML=`<strong>${r.symbol}</strong><span>${r.name}</span>`;
 }
 function mount(box,board,{view}={}){
  box.classList.add('rm-chemistry-card');if(board==='chem-periodic')box.classList.add('rm-chemistry-periodic');
  const host=document.createElement('div');host.className='ch-board';const state={view:view||board.slice(5),selected:'H'};box.append(host);mounted.set(box,{host,state});render(host,state);
  const click=e=>{const b=e.target.closest('[data-ch-element]');if(!b||!host.contains(b))return;state.selected=b.dataset.chElement;updateSelection(host,state);};host.addEventListener('click',click);
  return()=>{host.removeEventListener('click',click);mounted.delete(box);};
 }
 function setView(box,view){const found=mounted.get(box);if(!found||!view||found.state.view===view)return;found.state.view=view;render(found.host,found.state);}
 const quizOxygen=svg(oxygen(210,90),'Due atomi di ossigeno legati.',420,190);
 const quizCompounds=svg(ball(52,105,'He',22)+ball(108,105,'He',22)+oxygen(300,105)+water(500,83)+text(80,35,'A',23)+text(300,35,'B',23)+text(500,35,'C',23),'A: elio separato. B: ossigeno in coppie. C: acqua con H e O.',600,220);
 return {mount,setView,records,diagram,quizOxygen,quizCompounds};
})();
