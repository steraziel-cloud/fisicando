/* Original, accessible diagrams and exact small-integer arithmetic for the rational lessons. */
window.GatitoRationalBoards=(()=>{
 'use strict';
 const mounted=new WeakMap();
 const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
 const gcd=(a,b)=>{while(b){[a,b]=[b,a%b];}return a||1;};
 const reduce=(a,b)=>{const g=gcd(a,b);return[a/g,b/g];};
 const frac=(a,b)=>`<span class="qr-fraction" role="math" aria-label="${esc(a)} fratto ${esc(b)}"><span aria-hidden="true">${esc(a)}</span><span aria-hidden="true">${esc(b)}</span></span>`;
 const value=(a,b)=>b===1?String(a):frac(a,b);
 const equation=s=>`<div class="qr-equation">${s}</div>`;
 const title=s=>`<h4>${s}</h4>`;
 const note=s=>`<p class="qr-board-note">${s}</p>`;
 const buttons=(items,active)=>`<div class="qr-picks" role="group" aria-label="Scegli un esempio">${items.map(([id,label])=>`<button type="button" data-qr-pick="${id}" aria-pressed="${String(id===active)}">${label}</button>`).join('')}</div>`;
 const slider=(key,label,n,min,max)=>`<label class="qr-slider">${label}: <output>${n}</output><input type="range" data-qr-range="${key}" min="${min}" max="${max}" value="${n}" aria-label="${label}"></label>`;
 function bars(a,b,label='',cls=''){
  const rows=Math.max(1,Math.ceil(a/b));
  return `<figure class="qr-bars ${cls}" aria-label="${esc(label||`${a} parti su ${b} per unità`)}">${Array.from({length:rows},(_,row)=>`<div class="qr-bar" style="--qr-pieces:${b}" aria-hidden="true">${Array.from({length:b},(_,i)=>`<span class="${row*b+i<a?'qr-filled':''}"></span>`).join('')}</div>`).join('')}${label?`<figcaption>${label}</figcaption>`:''}</figure>`;
 }
 function longDivision(a,b){
  let rem=a%b;const integer=Math.floor(a/b),seen=new Map(),rows=[],digits=[];let period=-1;
  while(rem!==0&&rows.length<100){
   if(seen.has(rem)){period=seen.get(rem);break;}
   seen.set(rem,rows.length);const before=rem,scaled=before*10,digit=Math.floor(scaled/b);rem=scaled%b;rows.push({before,scaled,digit,rem});digits.push(digit);
  }
  return {integer,rows,digits,period,terminates:rem===0};
 }
 function decimal(a,b,places){
  const scale=10**places,n=Math.floor(a*scale/b);return fixed(n,places);
 }
 function fixed(n,places){const s=String(n).padStart(places+1,'0');return places?s.slice(0,-places)+','+s.slice(-places):s;}
 function approximation(a,b,places){
  const scale=10**places,scaled=a*scale,low=Math.floor(scaled/b),remainder=scaled%b;
  return {low:fixed(low,places),high:fixed(low+(remainder?1:0),places),rounded:fixed(low+(2*remainder>=b?1:0),places),exact:remainder===0,step:fixed(1,places),half:fixed(5,places+1)};
 }
 function factorClass(a,b){
  let [n,d]=reduce(a,b),rest=d,two=0,five=0;
  while(rest%2===0){rest/=2;two++;}while(rest%5===0){rest/=5;five++;}
  return {n,d,two,five,rest,type:rest===1?'limitato':(two||five)?'periodico misto':'periodico semplice'};
 }
 function draw(s){
  const {kind}=s;
  if(kind==='parts'){
   return title('Un’unità, parti uguali')+bars(s.a,s.b,`${s.a} parti, ciascuna grande 1/${s.b} dell’unità`)+equation(frac(s.a,s.b)+' = '+(s.a%s.b===0?String(s.a/s.b):`${Math.floor(s.a/s.b)} ${Math.floor(s.a/s.b)===1?'intero':'interi'} e ${s.a%s.b}/${s.b}`))+slider('a','Parti considerate',s.a,0,12)+slider('b','Parti in ogni unità',s.b,2,12)+note('Ogni barra completa vale un metro. Puoi considerare anche più di un’unità.');
  }
  if(kind==='equivalent'){
   const [a,b]=(s.preset||'2/3').split('/').map(Number),n=a*s.k,d=b*s.k;
   return title('Stessa quantità, parti diverse')+bars(a,b,`${a}/${b} dell’unità`)+bars(n,d,`${n}/${d} della stessa unità`)+equation(`${frac(a,b)} = ${frac(n,d)}`)+slider('k','Fattore comune',s.k,1,6)+note(`Numeratore × ${s.k} e denominatore × ${s.k}: cambia il conteggio, non la quantità.`);
  }
  if(kind==='sets')return title('ℕ è contenuto in ℚₐ')+`<svg class="qr-set-diagram" viewBox="0 0 500 350" role="img" aria-label="Insieme ℚₐ: razionali assoluti. Al suo interno, insieme ℕ: naturali, con gli elementi zero, uno, due, tre. Un mezzo e tre mezzi appartengono a ℚₐ ma non a ℕ."><rect width="500" height="350" rx="18" fill="#f5faf7"/><ellipse cx="250" cy="196" rx="225" ry="137" fill="#e1efee" stroke="#247c7b" stroke-width="3"/><path d="M380 54 L396 88" fill="none" stroke="#247c7b" stroke-width="2"/><rect x="244" y="10" width="243" height="46" rx="10" fill="#247c7b"/><text class="qr-set-name qr-set-outer" x="259" y="41">ℚₐ</text><text class="qr-set-caption qr-set-outer" x="309" y="39">Razionali assoluti</text><ellipse cx="190" cy="203" rx="133" ry="88" fill="#fff5d2" stroke="#aa7829" stroke-width="2"/><text class="qr-set-name" x="118" y="164">ℕ</text><text class="qr-set-caption" x="160" y="163">Naturali</text><text class="qr-set-elements" x="89" y="224">0　1　2　3　…</text><g role="math" aria-label="1 fratto 2" class="qr-set-fraction"><text x="376" y="147">1</text><path d="M361 155 H391"/><text x="376" y="181">2</text></g><g role="math" aria-label="3 fratto 2" class="qr-set-fraction"><text x="388" y="239">3</text><path d="M373 247 H403"/><text x="388" y="273">2</text></g></svg>`+equation('ℕ ⊂ ℚₐ');
  if(kind==='zero')return title('Il denominatore non può essere zero')+buttons([['zero','0 : 5'],['none','5 : 0'],['many','0 : 0']],s.pick||'zero')+equation(s.pick==='none'?'5 : 0 → nessun quoziente':s.pick==='many'?'0 : 0 → nessun quoziente unico':'0 : 5 = 0')+note(s.pick==='none'?'Nessun numero moltiplicato per 0 dà 5.':s.pick==='many'?'Qualunque numero moltiplicato per 0 dà 0: il risultato non è determinato. Perciò la divisione è esclusa.':'Zero è ammesso al numeratore: 0 × 5 = 0.');
  if(kind==='ratio')return title('Rapporti in due ordini')+buttons([['forward','3 rispetto a 2'],['reverse','2 rispetto a 3']],s.pick||'forward')+bars(s.pick==='reverse'?2:3,s.pick==='reverse'?3:2,s.pick==='reverse'?'Il riferimento è il nastro di tre metri':'Il riferimento è il nastro di due metri')+equation(s.pick==='reverse'?`${frac(2,3)} &lt; 1`:`${frac(3,2)} = 1,5`)+note(s.pick==='reverse'?'Il nastro da 2 m è due terzi di quello da 3 m.':'Il nastro da 3 m è una volta e mezza quello da 2 m.');
  if(kind==='compare')return title('Confrontiamo parti della stessa grandezza')+bars(8,12,'2/3 = 8/12')+bars(9,12,'3/4 = 9/12','qr-bars-secondary')+equation(`${frac(8,12)} &lt; ${frac(9,12)} → ${frac(2,3)} &lt; ${frac(3,4)}`)+note('Le unità sono uguali; ogni pezzo è un dodicesimo.');
  if(kind==='density'){
   const [a,b]=s.left,[c,d]=s.right,[m,n]=reduce(a*d+c*b,2*b*d),x=t=>55+(t-a/b)/(c/d-a/b)*390;
   return title('C’è sempre un punto in mezzo')+`<svg viewBox="0 0 500 160" role="img" aria-label="Punto medio fra ${a}/${b} e ${c}/${d}"><line x1="45" y1="75" x2="455" y2="75" stroke="currentColor" stroke-width="2"/>${[[a,b,'#247c7b'],[c,d,'#247c7b'],[m,n,'#ad5b23']].map(([p,q,color])=>`<circle cx="${x(p/q)}" cy="75" r="7" fill="${color}"/><text x="${x(p/q)}" y="${p===m&&q===n?122:48}" text-anchor="middle">${p}/${q}</text>`).join('')}</svg>`+equation(`${frac(a,b)} &lt; ${frac(m,n)} &lt; ${frac(c,d)}`)+`<button type="button" data-qr-action="midpoint" ${s.count>=5?'disabled':''}>Cerca un altro punto fra i primi due</button>`+note(s.count>=5?'Il disegno si ferma qui per leggibilità; il procedimento matematico può continuare senza fine.':'Al clic successivo conserviamo l’estremo sinistro e il punto medio: anche fra loro troveremo un nuovo razionale.');
  }
  if(kind==='addition'||kind==='subtraction'){
   const sub=kind==='subtraction',den=sub?12:6,a=sub?9:3,b=2,result=sub?a-b:a+b;
   return title(sub?'Togliamo parti uguali':'Sommiamo parti uguali')+bars(a,den,sub?'3/4 = 9/12':'1/2 = 3/6')+bars(b,den,sub?'1/6 = 2/12':'1/3 = 2/6','qr-bars-secondary')+equation(`${frac(a,den)} ${sub?'−':'+'} ${frac(b,den)} = ${frac(result,den)}`)+bars(result,den,'La quantità risultante')+note('Il denominatore indica la grandezza di ogni parte: non si somma né si sottrae.');
  }
  if(kind==='multiply')return title('Tre quarti di due terzi')+`<div class="qr-area" role="img" aria-label="Rettangolo diviso in 12 celle uguali: due colonne su tre evidenziate; in tre righe su quattro, sei celle appartengono all’intersezione.">${Array.from({length:12},(_,i)=>`<span class="${i%3<2?(Math.floor(i/3)<3?'qr-intersection':'qr-first'):''}"></span>`).join('')}</div>`+equation(`${frac(2,3)} × ${frac(3,4)} = ${frac(6,12)} = ${frac(1,2)}`)+note('Le due colonne azzurre rappresentano 2/3 dell’unità. Le sei celle più scure sono 3/4 di quella quantità.');
  if(kind==='division')return title('Sei porzioni da un ottavo')+bars(6,8,'3/4 di litro = 6/8 di litro')+bars(1,8,'Una porzione = 1/8 di litro','qr-bars-secondary')+equation(`${frac(3,4)} : ${frac(1,8)} = 6`)+note('Conta i pezzi evidenziati: ciascuno è una porzione. Dividere per un numero minore di 1 può aumentare il risultato.');
  if(kind==='properties')return title('Proprietà con un esempio')+buttons([['comm','Commutativa'],['assoc','Associativa'],['dist','Distributiva']],s.pick||'comm')+equation(s.pick==='assoc'?`(${frac(1,2)} + ${frac(1,3)}) + ${frac(1,6)} = ${frac(1,2)} + (${frac(1,3)} + ${frac(1,6)})`:s.pick==='dist'?`${frac(1,2)} × (${frac(1,3)} + ${frac(2,3)}) = ${frac(1,6)} + ${frac(1,3)}`:`${frac(1,2)} + ${frac(1,3)} = ${frac(1,3)} + ${frac(1,2)}`)+note(s.pick==='assoc'?'Cambiano i raggruppamenti; l’ordine degli addendi è lo stesso.':s.pick==='dist'?'Moltiplichiamo entrambi gli addendi per lo stesso fattore.':'Scambiamo l’ordine dei due addendi.');
  if(kind==='closure')return title('Restiamo in ℚₐ?')+`<div class="qr-map"><div><strong>+ e ×</strong><span>Sempre interne</span></div><div><strong>−</strong><span>Primo termine ≥ secondo</span></div><div><strong>:</strong><span>Divisore ≠ 0</span></div><div><strong>Potenze</strong><span>Esponente naturale; escluso 0⁰</span></div></div>`+note('Le condizioni fanno parte della regola. Non sono eccezioni da dimenticare.');
  if(kind==='powers')return title('Il numero dei fattori uguali')+slider('power','Esponente positivo',s.power,1,4)+equation(`(${frac(2,3)})<sup>${s.power}</sup> = ${Array(s.power).fill(frac(2,3)).join(' × ')} = ${frac(2**s.power,3**s.power)}`)+note('Ogni fattore aggiunge un 2 al numeratore e un 3 al denominatore.');
  if(kind==='rules')return title('La struttura prima dei conti')+`<ol class="qr-priorities"><li>Risolvi i raggruppamenti, dall’interno.</li><li>Calcola le potenze.</li><li>Moltiplicazioni e divisioni, da sinistra.</li><li>Addizioni e sottrazioni, da sinistra.</li></ol>`+equation('5 + 3 × 7 = 5 + 21 = 26')+note('Le proprietà possono giustificare una trasformazione equivalente. Senza una giustificazione, seguiamo le precedenze.');
  if(kind==='brackets')return title('Le parentesi cambiano la struttura')+buttons([['without','Senza parentesi'],['with','Con parentesi']],s.pick||'without')+equation(s.pick==='with'?'(5 + 4) × 3 = 9 × 3 = 27':'5 + 4 × 3 = 5 + 12 = 17')+note(s.pick==='with'?'La somma è raggruppata e precede il prodotto.':'Il prodotto precede la somma.');
  if(kind==='expression'){
   const lines=[`(${frac(1,2)} + ${frac(1,3)}) : ${frac(5,6)} + (${frac(2,3)})²`,`(${frac(3,6)} + ${frac(2,6)}) : ${frac(5,6)} + ${frac(4,9)}`,`${frac(5,6)} : ${frac(5,6)} + ${frac(4,9)}`,`${frac(5,6)} × ${frac(6,5)} + ${frac(4,9)}`,`1 + ${frac(4,9)}`,`${frac(9,9)} + ${frac(4,9)} = ${frac(13,9)}`];
   const why=['Individua prima parentesi e potenza.','Stesso denominatore nella parentesi; potenza di numeratore e denominatore.','La somma nella parentesi vale 5/6.','Dividiamo moltiplicando per l’inverso.','Un numero non nullo moltiplicato per il suo inverso dà 1.','Scriviamo 1 = 9/9 e sommiamo.'];
   return title('Una catena di valori uguali')+`<ol class="qr-worked">${lines.slice(0,s.stage+1).map((l,i)=>`<li>${equation((i?'= ':'')+l)}</li>`).join('')}</ol>`+note(why[s.stage])+`<div class="qr-controls"><button type="button" data-qr-action="back" ${s.stage===0?'disabled':''}>← Indietro</button><button type="button" data-qr-action="next" ${s.stage===5?'disabled':''}>Passaggio successivo →</button></div>`;
  }
  if(kind==='cancel')return title('Fattori oppure addendi?')+buttons([['product','Un prodotto'],['sum','Una somma']],s.pick||'product')+equation(s.pick==='sum'?`${frac('3 + 6',3)} = ${frac(9,3)} = 3`:`${frac(3,8)} × ${frac(4,9)} = ${frac('3 × 4','8 × 9')} = ${frac(1,6)}`)+note(s.pick==='sum'?'Il denominatore divide tutta la somma: non cancelliamo un solo addendo.':'Possiamo semplificare fattori comuni fra il numeratore e il denominatore dell’intero prodotto.');
  if(kind==='checks')return title('Prevedi il comportamento')+buttons([['multiply','Moltiplica per 1/2'],['divide','Dividi per 1/2']],s.pick||'multiply')+equation(s.pick==='divide'?`3 : ${frac(1,2)} = 6`:`3 × ${frac(1,2)} = ${frac(3,2)}`)+note(s.pick==='divide'?'Sei mezzi formano tre interi: il quoziente è più grande del dividendo.':'Metà di tre interi è un intero e mezzo: il prodotto è più piccolo.');
  if(kind==='decimal-parts')return title('La posizione cambia il valore')+buttons([['tenths','3 decimi'],['hundredths','3 centesimi'],['thousandths','3 millesimi']],s.pick||'tenths')+equation(s.pick==='hundredths'?`${frac(3,100)} = 0,03`:s.pick==='thousandths'?`${frac(3,1000)} = 0,003`:`${frac(3,10)} = 0,3`)+`<table class="qr-table"><caption>Parte decimale</caption><tr><th>Decimi</th><th>Centesimi</th><th>Millesimi</th></tr><tr>${(s.pick==='hundredths'?['0','3','0']:s.pick==='thousandths'?['0','0','3']:['3','0','0']).map(t=>`<td>${t}</td>`).join('')}</tr></table>`;
  if(kind==='long-division'){
   const choices=[['3/8','3/8'],['1/6','1/6'],['1/7','1/7'],['3/6','3/6']],pick=s.pick||s.preset||'3/8',[a,b]=pick.split('/').map(Number),d=longDivision(a,b),count=Math.min(s.stage,d.rows.length),done=count===d.rows.length;
   const out=String(d.integer)+','+d.digits.slice(0,count).join('')+(done?(d.terminates?'':'…'):'…');
   return title('La divisione costruisce il decimale')+buttons(choices,pick)+equation(`${frac(a,b)} = ${esc(out)}`)+`<table class="qr-table"><caption>Resto iniziale: ${a%b}. Parte intera: ${d.integer}.</caption><thead><tr><th>Resto × 10</th><th>Cifra</th><th>Nuovo resto</th></tr></thead><tbody>${d.rows.slice(0,count).map(r=>`<tr><td>${r.before} × 10 = ${r.scaled}</td><td>${r.digit}</td><td>${r.rem}</td></tr>`).join('')}</tbody></table>`+note(done?(d.terminates?'Resto zero: il decimale è limitato.':`Il resto ${d.rows.at(-1).rem} era già comparso: da qui ripartono le stesse cifre. Periodo: ${d.digits.slice(d.period).join('')}.`):'Moltiplica il resto per 10 e cerca la cifra successiva.')+`<div class="qr-controls"><button type="button" data-qr-action="restart">Ricomincia</button><button type="button" data-qr-action="digit" ${done?'disabled':''}>Una cifra in più →</button></div>`;
  }
  if(kind==='denominator'){
   const pick=s.pick||'3/8',[a,b]=pick.split('/').map(Number),d=factorClass(a,b),factors=[d.two?`2<sup>${d.two}</sup>`:'',d.five?`5<sup>${d.five}</sup>`:'',d.rest!==1?String(d.rest):''].filter(Boolean).join(' × ')||'1';
   return title('Prima riduci, poi guarda il denominatore')+buttons([['3/8','3/8'],['3/6','3/6'],['5/12','5/12'],['7/15','7/15'],['2/7','2/7'],['6/3','6/3']],pick)+equation(`${frac(a,b)} = ${value(d.n,d.d)}`)+equation(`${d.d} = ${factors}`)+`<p class="qr-outcome">${d.type}</p>`+note(d.rest===1?'Il denominatore ridotto contiene solo 2 e/o 5, oppure è 1.':d.two||d.five?'Nel denominatore ridotto compaiono 2 e/o 5 e anche altri fattori primi.':'Il denominatore ridotto è primo con 10.');
  }
  if(kind==='generator'){
   const pick=s.pick||s.preset||'limited';
   return title('Facciamo scomparire la coda')+buttons([['limited','0,375'],['pure','0,2727…'],['mixed','1,2333…']],pick)+(pick==='limited'?equation(`0,375 = ${frac(375,1000)} = ${frac(3,8)}`)+note('Tre cifre decimali: denominatore 1000.'):pick==='pure'?equation('100x = 27,272727…')+equation('−　x = 0,272727…')+equation(`99x = 27 → x = ${frac(27,99)} = ${frac(3,11)}`):equation('100x = 123,33333…')+equation('− 10x = 12,33333…')+equation(`90x = 111 → x = ${frac(111,90)} = ${frac(37,30)}`))+note(pick==='limited'?'La frazione conserva il valore esatto.':'Le code periodiche sono uguali: sottraendole otteniamo zero nella parte decimale.');
  }
  if(kind==='approximation'){
   const pick=s.pick||'2/3',[a,b]=pick.split('/').map(Number),d=approximation(a,b,s.places);
   return title('Una griglia sempre più precisa')+buttons([['2/3','2/3'],['11/7','11/7'],['1999/200','9,995'],['1/8','1/8']],pick)+slider('places','Cifre dopo la virgola',s.places,0,3)+equation(`${d.low} ≤ ${frac(a,b)} ≤ ${d.high}`)+`<div class="qr-map"><div><strong>${d.low}</strong><span>per difetto / troncamento</span></div><div><strong>${d.high}</strong><span>per eccesso</span></div><div><strong>${d.rounded}</strong><span>arrotondamento</span></div></div>`+note(d.exact?'Il valore è già sulla griglia: in questo caso i tre risultati coincidono con il numero esatto.':`Passo ${d.step}. L’errore di arrotondamento è al massimo ${d.half}.`);
  }
  return title('Le idee restano collegate')+`<div class="qr-summary-scene"><img src="assets/images/reader/red-bjorne-benvenuto-v1.png" alt="Red e Bjorne accompagnano il riepilogo" width="240" height="160" loading="lazy"><div class="qr-map">${(s.summary||[["Quantità","un’unità e parti uguali"],["Frazione","un quoziente esatto"]]).map(([a,b])=>`<div><strong>${esc(a)}</strong><span>${esc(b)}</span></div>`).join('')}</div></div>`;
 }
 function render(s){s.host.innerHTML=draw(s);}
 function mount(box,card,{view}={}){
  if(card.board==='qr-zero-illustration'){const host=document.createElement('aside');host.className='qr-board qr-zero-illustration';const img=document.createElement('img');img.src='assets/images/reader/bjorne-zero-cactus-v4.webp';img.alt='Bjorne perplesso osserva un cactus a forma di zero, con alcuni punti interrogativi sopra la testa';img.width=1536;img.height=1024;img.decoding='async';host.append(img);box.classList.add('qr-reader-card');box.append(host);return()=>{};}
  if(card.copilot&&window.GatitoFractionCopilot){box.classList.add('qr-reader-card','qr-copilot-card');const workbench=window.GatitoFractionCopilot.mount(box,{sessionKey:'razionali-assoluti-insieme',initial:card.copilotExample,example:card.copilotExample,embedded:true});return()=>workbench.dispose();}

  const host=document.createElement('aside');host.className='qr-board';host.setAttribute('aria-label','Lavagna digitale');
  const status=document.createElement('p');status.className='qr-sr-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const s={host,kind:view||card.board.slice(3),preset:card.qrPreset,summary:card.qrSummary,a:3,b:2,k:1,power:2,places:2,stage:0,count:0,left:[1,3],right:[2,3]};
  box.classList.add('qr-reader-card');box.append(host,status);mounted.set(box,s);render(s);
  const preview=e=>{const i=e.target.closest('[data-qr-range]');if(i)i.parentElement.querySelector('output').textContent=i.value;};host.addEventListener('input',preview);
  const announce=()=>{const target=host.querySelector('.qr-outcome')||host.querySelector('.qr-board-note')||host.querySelector('.qr-equation');if(!target){status.textContent='Lavagna aggiornata.';return;}const spoken=target.cloneNode(true);spoken.querySelectorAll('[role="math"]').forEach(node=>{node.textContent=' '+node.getAttribute('aria-label')+' ';});status.textContent=spoken.textContent;};
  const onInput=e=>{
   const input=e.target.closest('[data-qr-range]');if(!input)return;
   const key=input.dataset.qrRange,n=Number(input.value);s[key]=n;
   // Keep the focused range node alive while the illustration changes.
   const focusKey=key;render(s);const next=host.querySelector(`[data-qr-range="${focusKey}"]`);next?.focus({preventScroll:true});announce();
  };
  const onClick=e=>{
   const pick=e.target.closest('[data-qr-pick]'),action=e.target.closest('[data-qr-action]');
   if(pick){s.pick=pick.dataset.qrPick;s.stage=0;render(s);host.querySelector(`[data-qr-pick="${s.pick}"]`)?.focus({preventScroll:true});announce();return;}
   if(!action)return;const k=action.dataset.qrAction;
   if(k==='midpoint'){const [a,b]=s.left,[c,d]=s.right;s.right=reduce(a*d+c*b,2*b*d);s.count++;}
   if(k==='back')s.stage=Math.max(0,s.stage-1);
   if(k==='next')s.stage=Math.min(5,s.stage+1);
   if(k==='digit')s.stage++;
   if(k==='restart')s.stage=0;
   render(s);const target=host.querySelector(`[data-qr-action="${k}"]`);if(target&&!target.disabled)target.focus({preventScroll:true});announce();
  };
  host.addEventListener('change',onInput);host.addEventListener('click',onClick);
  return()=>{host.removeEventListener('change',onInput);host.removeEventListener('input',preview);host.removeEventListener('click',onClick);mounted.delete(box);};
 }
 function setView(box,view){const s=mounted.get(box);if(!s||!view||view===s.kind)return;s.kind=view;s.stage=0;s.pick=null;render(s);}
 return {mount,setView,math:{gcd,reduce,longDivision,approximation,factorClass}};
})();
