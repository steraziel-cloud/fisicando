/* GatitoMath: campioni e modelli schematici. Le classificazioni restano metadati editoriali. */
window.GatitoMatterCards=(()=>{
 'use strict';
 const descriptions={
  isolated:'Palline tutte uguali, separate e molto distanti tra loro.',
  liquidAtoms:'Palline tutte uguali, vicine ma senza un ordine regolare.',
  layers:'Palline tutte uguali, collegate in strati sovrapposti.',
  water:'Piccoli gruppi tutti uguali, vicini e disposti senza un ordine regolare.',
  ice:'Piccoli gruppi tutti uguali, disposti in una struttura ordinata.',
  gas:'Piccoli gruppi tutti uguali, separati da molto spazio vuoto.',
  sugar:'Gruppi uguali e più complessi, ripetuti con ordine.',
  ions:'Palline di due tipi, alternate in una struttura ordinata: non ci sono coppie isolate.',
  ions2:'Palline di due tipi in una struttura ordinata; quelle verdi sono il doppio delle altre.',
  network:'Palline di due tipi collegate in una rete continua, senza piccoli gruppi separati.',
  alloy:'Palline di due tipi mescolate nella stessa struttura compatta.',
  solution:'Tanti piccoli gruppi uguali, con poche palline di altri tipi disperse tra loro.',
  air:'Gruppetti di tipi diversi e qualche pallina singola, tutti molto distanti.',
  biscuit:'Zone diverse: una struttura di base e inclusioni con composizione differente.',
  pulp:'Frammenti solidi di polpa immersi in un liquido.',
  fog:'Goccioline di liquido, ciascuna fatta di tantissimi gruppetti, disperse in un gas.',
  chains:'Lunghe catene formate da palline collegate tra loro.'
 };
 const deck=[
  {id:'elio',name:'Elio nel palloncino',state:'Gassoso',model:'isolated',kind:'elemento',scope:'Osserviamo il gas, non la gomma del palloncino.'},
  {id:'acqua',name:'Acqua distillata',state:'Liquido',model:'water',kind:'composto molecolare',scope:'Un campione di acqua pura, a temperatura ambiente.'},
  {id:'grafite',name:'Grafite della matita',state:'Solido',model:'layers',kind:'elemento',scope:'Il modello riguarda la grafite pura: la mina contiene anche altri materiali.'},
  {id:'aria',name:'Aria nel palloncino',state:'Gassoso',model:'air',kind:'miscela omogenea',scope:'Osserviamo l’aria, non la gomma del palloncino.'},
  {id:'sale',name:'Sale da cucina',state:'Solido',model:'ions',kind:'composto ionico',scope:'Consideriamo un cristallo di sale puro.'},
  {id:'spremuta',name:'Spremuta d’arancia con polpa',state:'Altro',model:'pulp',kind:'miscela eterogenea',scope:'La polpa è presente: non è una spremuta filtrata.',stateNote:'Ci sono insieme una parte liquida e frammenti solidi di polpa.'},
  {id:'zucchero',name:'Zucchero',state:'Solido',model:'sugar',kind:'composto molecolare',scope:'Consideriamo i cristalli di zucchero, senza altri ingredienti.'},
  {id:'ottone',name:'Ottone di una chiave',state:'Solido',model:'alloy',kind:'miscela omogenea',scope:'Osserviamo il metallo: un campione di ottone omogeneo.'},
  {id:'co2',name:'Anidride carbonica',state:'Gassoso',model:'gas',kind:'composto molecolare',scope:'Il gas della bombola usata per rendere frizzante l’acqua.'},
  {id:'quarzo',name:'Quarzo',state:'Solido',model:'network',kind:'composto reticolare covalente',scope:'Un singolo cristallo di quarzo, non tutta la sabbia.'},
  {id:'rubinetto',name:'Acqua del rubinetto',state:'Liquido',model:'solution',kind:'miscela omogenea',scope:'Acqua con piccole quantità di sostanze disciolte.'},
  {id:'nebbia',name:'Nebbia',state:'Altro',model:'fog',kind:'miscela eterogenea',scope:'Osserviamo la nebbia nel suo insieme.',stateNote:'Sono minuscole goccioline liquide disperse nell’aria: liquido e gas insieme.'},
  {id:'mercurio',name:'Mercurio',state:'Liquido',model:'liquidAtoms',kind:'elemento',scope:'Il metallo argentato dei vecchi termometri: qui lo osserviamo solo in figura.'},
  {id:'calcio',name:'Granuli di cloruro di calcio',state:'Solido',model:'ions2',kind:'composto ionico',scope:'Un campione puro e anidro, prima che assorba umidità. È usato negli assorbiumidità.'},
  {id:'biscotto',name:'Biscotto con gocce di cioccolato',state:'Solido',model:'biscuit',kind:'miscela eterogenea',scope:'Osserviamo sia l’impasto sia le gocce di cioccolato.'},
  {id:'sic',name:'Carburo di silicio',state:'Solido',model:'network',kind:'composto reticolare covalente',scope:'Un granello abrasivo di una carta al carburo di silicio: non tutta la carta.'},
  {id:'pet',name:'Plastica della bottiglia · PET',state:'Solido',model:'chains',kind:'polimero',scope:'Osserviamo la parete della bottiglia, senza tappo, etichetta e contenuto.'},
  {id:'ghiaccio',name:'Ghiaccio',state:'Solido',model:'ice',kind:'composto molecolare',scope:'Acqua pura congelata: confrontala con la carta dell’acqua distillata.'}
 ];
 const palette={H:'#d7ecff',O:'#ee596a',C:'#53596b',N:'#5689e9',He:'#eeb952',Ar:'#b88be4',Na:'#ae79e2',Cl:'#65c68b',Ca:'#55a8d4',Si:'#d4ab64',Cu:'#ce8c62',Zn:'#82bccd',Hg:'#b9c7d6'};
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function scene(d){
  let out='',seq=0;
  const line=(x,y,a,b,c='#9cabc5',w=5)=>out+=`<line x1="${x}" y1="${y}" x2="${a}" y2="${b}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  const ball=(x,y,k,r=10)=>out+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${palette[k]}" stroke="#182039" stroke-opacity=".2"/><circle cx="${x-r*.28}" cy="${y-r*.3}" r="${r*.24}" fill="white" opacity=".35"/>`;
  const water=(x,y,s=1)=>{line(x-11*s,y+8*s,x,y,'#94a4bf',4*s);line(x,y,x+11*s,y+8*s,'#94a4bf',4*s);ball(x,y,'O',9*s);ball(x-11*s,y+8*s,'H',6*s);ball(x+11*s,y+8*s,'H',6*s);};
  const positions=(cols,rows,dx,dy,ox=35,oy=38)=>{const p=[];for(let j=0;j<rows;j++)for(let i=0;i<cols;i++)p.push([ox+i*dx+(j%2?5:0),oy+j*dy]);return p;};
  const gaspos=[[45,40],[116,33],[210,42],[309,31],[60,102],[156,97],[259,106],[344,98],[34,168],[124,163],[216,167],[312,167],[63,233],[170,229],[267,232],[345,232]];
  if(d.model==='isolated')gaspos.forEach(([x,y])=>ball(x,y,'He',10));
  if(d.model==='gas'||d.model==='air')gaspos.forEach(([x,y],i)=>{if(d.model==='gas'){line(x-13,y,x+13,y);ball(x-15,y,'O',8);ball(x,y,'C',9);ball(x+15,y,'O',8);}else if(i===15)ball(x,y,'Ar',9);else{const k=i%5===0?'O':'N';line(x-7,y-3,x+7,y+3);ball(x-7,y-3,k,8);ball(x+7,y+3,k,8);}});
  if(['water','ice','solution'].includes(d.model)){positions(7,6,48,36,39,33).forEach(([x,y],i)=>{const regular=d.model==='ice',dx=regular?0:Math.sin(i*7)*7,dy=regular?0:Math.cos(i*4)*6;if(d.model==='solution'&&(i===9||i===29))ball(x,y,i===9?'Na':'Cl',11);else water(x+dx,y+dy,.8);});}
  if(d.model==='liquidAtoms'||d.model==='alloy'){positions(13,9,26,25,25,26).forEach(([x,y],i)=>ball(x+(d.model==='liquidAtoms'?Math.sin(i*11)*3:0),y,d.model==='alloy'?(i%4?'Cu':'Zn'):'Hg',12));}
  if(d.model==='ions'||d.model==='ions2')positions(12,8,28,29,28,31).forEach(([x,y],i)=>{let k=d.model==='ions'?((Math.floor(i/12)+i%12)%2?'Cl':'Na'):(i%3?'Cl':'Ca');ball(x,y,k,k==='Cl'?12:9);});
  if(d.model==='layers'){
   for(let layer=0;layer<3;layer++){const pts=new Map(),edges=[];for(let r=0;r<3;r++)for(let c=0;c<6;c++){let vs=[];for(let k=0;k<6;k++){let a=k*Math.PI/3;let x=32+c*43.5+Math.cos(a)*29+layer*9,y=39+r*(29*Math.sqrt(3))+(c%2?29*Math.sqrt(3)/2:0)+Math.sin(a)*29+layer*29;const key=Math.round(x)+','+Math.round(y);pts.set(key,[x,y]);vs.push([x,y]);}vs.forEach((p,i)=>edges.push([...p,...vs[(i+1)%6]]));}out+=`<g opacity="${.42+layer*.27}">`;edges.forEach(e=>line(...e,'#7e889e',3));[...pts.values()].forEach(p=>ball(...p,'C',6));out+='</g>';}
  }
  if(d.model==='network'){
   /* Projection of a connected tetrahedral network fragment. Oxygen bridges shown for silica. */
   const atoms=[];const fcc=[[0,0,0],[0,.5,.5],[.5,0,.5],[.5,.5,0]];
   for(let x=0;x<2;x++)for(let y=0;y<2;y++)for(let z=0;z<2;z++)for(const q of fcc)for(let b=0;b<2;b++)atoms.push({p:q.map((v,i)=>v+[x,y,z][i]+b*.25),b});
   const project=p=>[190+(p[0]-p[1])*70,35+(p[0]+p[1])*23+p[2]*65];
   const bonds=[];atoms.forEach((a,i)=>atoms.forEach((b,j)=>{if(j>i&&Math.abs(a.p.reduce((v,x,k)=>v+(x-b.p[k])**2,0)-.1875)<1e-6)bonds.push([i,j]);}));
   bonds.forEach(([i,j])=>{const a=project(atoms[i].p),b=project(atoms[j].p);line(...a,...b,'#9ca9bf',3);if(d.id==='quarzo')ball((a[0]+b[0])/2,(a[1]+b[1])/2,'O',5);});
   [...atoms].sort((a,b)=>a.p[2]-b.p[2]).forEach(a=>ball(...project(a.p),d.id==='quarzo'?'Si':a.b?'Si':'C',7));
  }
  if(d.model==='sugar'){positions(4,3,89,77,54,53).forEach(([x,y])=>{for(let i=0;i<12;i++){let a=i*2.4,rx=x+Math.cos(a)*(i%3+1)*7,ry=y+Math.sin(a)*(i%3+1)*7;ball(rx,ry,'C',5);if(i<11)ball(rx+6,ry+5,'O',4);}for(let i=0;i<22;i++)ball(x+Math.cos(i*2.3)*25,y+Math.sin(i*2.3)*25,'H',2.7);});}
  if(d.model==='chains'){
   /* PET repeat, heavy atoms only: –O–CH2–CH2–O–C(=O)–C6H4–C(=O)–. */
   for(let row=0;row<4;row++){const pts=[];let y=45+row*58;for(let rep=0;rep<3;rep++){const x=14+rep*122;const sequence=[[x,y,'O'],[x+11,y+8,'C'],[x+22,y,'C'],[x+33,y+7,'O'],[x+44,y,'C']];sequence.forEach((p,i)=>{if(i)line(...sequence[i-1].slice(0,2),...p.slice(0,2),'#9ca9c1',3);pts.push(p);});line(x+44,y,x+44,y-15,'#9ca9c1',3);ball(x+44,y-15,'O',4);const ring=[];for(let k=0;k<6;k++)ring.push([x+70+16*Math.cos(k*Math.PI/3),y+16*Math.sin(k*Math.PI/3),'C']);ring.forEach((p,i)=>{line(...p.slice(0,2),...ring[(i+1)%6].slice(0,2),'#9ca9c1',3);pts.push(p);});line(x+44,y,x+54,y,'#9ca9c1',3);line(x+86,y,x+99,y,'#9ca9c1',3);line(x+99,y,x+99,y-15,'#9ca9c1',3);ball(x+99,y-15,'O',4);pts.push([x+99,y,'C']);line(x+99,y,x+122,y,'#9ca9c1',3);}pts.forEach(([x,y,k])=>ball(x,y,k,4.7));}
  }
  if(d.model==='pulp'||d.model==='biscuit'){
   out+=`<rect x="15" y="15" width="350" height="240" rx="20" fill="${d.model==='pulp'?'#e9bd55':'#d8af7e'}" opacity=".24"/>`;
   if(d.model==='pulp')positions(9,7,37,31,30,35).forEach(([x,y])=>water(x,y,.55));
   else positions(14,9,25,25,24,25).forEach(([x,y],i)=>{if(i%14)line(x,y,x+18,y+8,'#d2b085',4);ball(x,y,i%4?'C':'O',4);});
   [[81,84],[248,172],[282,54]].forEach(([x,y],j)=>{out+=`<path d="M${x-35},${y-20} Q${x},${y-40} ${x+37},${y-13} L${x+24},${y+30} Q${x-20},${y+39} ${x-35},${y-20}" fill="${d.model==='pulp'?'#ec923d':'#664b45'}" stroke="#ad784b" stroke-width="2"/>`;for(let i=0;i<18;i++)ball(x+Math.sin(i*3)*23,y+Math.cos(i*7)*19,i%3?'C':'O',3);});
  }
  if(d.model==='fog'){
   gaspos.forEach(([x,y],i)=>{ball(x-3,y,i%4?'N':'O',3.3);ball(x+3,y,i%4?'N':'O',3.3);});
   [[100,87],[260,178]].forEach(([x,y])=>{out+=`<circle cx="${x}" cy="${y}" r="58" fill="#6ab8e3" fill-opacity=".15" stroke="#7ac0e4"/>`;for(let i=0;i<80;i++){const a=i*2.399,r=5.2*Math.sqrt(i);water(x+r*Math.cos(a),y+r*Math.sin(a),.25);}});
  }
  const notes={chains:'Schema delle catene del PET: alcune palline sono omesse per rendere leggibili le catene.',network:d.id==='quarzo'?'Schema dei collegamenti della rete: non riproduce la geometria esatta del cristallo di quarzo.':'Porzione schematica di una rete che continua nelle tre dimensioni.',sugar:'Gruppi compatti uguali: lo schema evidenzia la ripetizione, non la geometria dei legami.',pulp:'Schema a più scale: frammenti di polpa e liquido circostante.',biscuit:'Schema delle diverse zone; non esiste una singola “molecola di biscotto”.',fog:'Due scale nello stesso schema: ogni gocciolina contiene moltissimi gruppetti.',solution:'Le sostanze disciolte sono ingrandite ed evidenziate; le quantità non sono in scala.',ions2:'Schema della disposizione e del rapporto 1 a 2; non è una cella cristallina.'};
  return {svg:`<svg viewBox="0 0 380 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Modello schematico: ${esc(descriptions[d.model])}"><defs><clipPath id="matter-clip"><rect width="380" height="270" rx="18"/></clipPath></defs><g clip-path="url(#matter-clip)">${out}</g></svg>`,note:notes[d.model]||'Modello schematico: colori convenzionali, dimensioni e distanze illustrative.'};
 }
 function choices(d,index){const distractors=['isolated','water','layers','network','air','ions','chains','pulp'].filter(k=>k!==d.model);const keys=[d.model,...distractors.slice(index%4,index%4+3)];while(keys.length<4)keys.push(distractors[keys.length]);return keys.map((key,i)=>({key,order:(i+index)%4})).sort((a,b)=>a.order-b.order);}
 function mount(box,st,onChange){
  box.classList.add('mc-game-card');st.index??=0;st.answers??=[];
  const host=document.createElement('div');host.className='mc-game';box.append(host);
  host.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight'].includes(e.key))e.stopPropagation();});
  const node=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls||'';if(text!==undefined)n.textContent=text;return n;};
  const btn=(text,fn,cls='')=>{const n=node('button','mc-button '+cls,text);n.type='button';n.onclick=fn;return n;};
  function render(focus=false){
   host.replaceChildren();const d=deck[st.index],answer=st.answers[st.index]||(st.answers[st.index]={state:false,model:false}),back=answer.state&&!st.front;
   const top=node('div','mc-top');top.append(node('span','mc-eyebrow','IL MAZZO DELLA MATERIA'),node('span','mc-count',`Carta ${st.index+1} di ${deck.length}`));
   const progress=node('progress');progress.max=deck.length;progress.value=st.answers.filter(a=>a?.model).length;progress.setAttribute('aria-label','Carte completate');
   host.append(top,progress);const layout=node('div','mc-layout'),card=node('div','mc-playing-card'+(back?' mc-back':''));
   card.append(node('span','mc-side',back?'DENTRO IL MATERIALE':'IL CAMPIONE'));
   const art=node('div','mc-art');if(back){const model=scene(d);art.innerHTML=model.svg;card.append(art,node('h4','',d.name),node('p','mc-model-note',model.note));}else{const img=node('img');img.src=`assets/images/reader/chemistry/cards/${d.id}.webp`;img.alt=d.name;img.width=512;img.height=512;art.append(img);card.append(art,node('h4','',d.name),node('p','mc-scope',d.scope));}
   const question=node('div','mc-question'),heading=node('h4','',back?'Che cosa riconosci nel modello?':'In quale stato si trova?');heading.tabIndex=-1;question.append(heading);
   const opts=node('div',back?'mc-options':'mc-options mc-states');const feedback=node('div','mc-feedback');feedback.setAttribute('role','status');feedback.setAttribute('aria-live','polite');
   const show=(correct,message)=>{if(window.GatitoQuizReactions)window.GatitoQuizReactions.show(feedback,message,{correct,title:correct?'Ci siamo!':'Guarda ancora'});else feedback.textContent=message;};
   if(back){choices(d,st.index).forEach(({key})=>{const b=btn(descriptions[key],()=>{if(key!==d.model){show(false,'Confronta i gruppi, gli spazi e il modo in cui le palline sono collegate.');return;}answer.model=true;render();onChange();},key===d.model&&answer.model?'mc-correct':'');b.disabled=answer.model;opts.append(b);});}
   else ['Solido','Liquido','Gassoso','Altro'].forEach(value=>{const b=btn(value,()=>{if(value!==d.state){show(false,'Considera il campione indicato nella carta, nelle condizioni in cui è mostrato.');return;}answer.state=true;st.front=false;render(true);onChange();},answer.state&&value===d.state?'mc-correct':'');b.disabled=answer.state;opts.append(b);});
   question.append(opts,feedback);
   if(back&&!answer.model){feedback.append(node('p','mc-state-result',d.stateNote||`Stato riconosciuto: ${d.state.toLowerCase()}.`));}
   if(back&&answer.model){show(true,'Hai riconosciuto la struttura mostrata nella carta.');}
   const nav=node('div','mc-nav');if(answer.state)nav.append(btn(back?'Rivedi il campione':'Rivedi il modello',()=>{st.front=back;render();},'mc-secondary'));
   if(answer.model){const last=st.index===deck.length-1;nav.append(btn(last?'Completa il mazzo ✓':'Prossima carta →',()=>{if(last){st.done=true;onChange();render();}else{st.index++;st.front=false;render(true);onChange();}},'mc-primary'));}
   if(st.index>0)nav.append(btn('← Carta precedente',()=>{st.index--;st.front=false;render(true);},'mc-link'));
   if(st.done)nav.append(node('p','mc-finished','Mazzo completato! Puoi proseguire nella lezione oppure rivedere le carte.'));
   question.append(nav);layout.append(card,question);host.append(layout);if(focus)heading.focus({preventScroll:true});
  }
  render();return()=>host.remove();
 }
 return{mount,deck,descriptions,scene,choices};
})();
