/* Original GatitoMath cafe story, keyboard/touch game and geometric transition. */
(()=>{
 const NS='http://www.w3.org/2000/svg';
 const room='M74 55H470C680 55 810 165 810 290C810 445 625 500 390 500C200 500 74 440 74 230Z';
 const tables=[{x:170,y:145,box:true},{x:390,y:145},{x:625,y:220},{x:240,y:355},{x:500,y:365}];
 const pixelRows=[
 '    gg        gg    ','   gssg      gssg   ','   gsssggggggsssg   ','   gsgssssssssgsg   ',
 '  gssssssssssssssg  ',' gssssssssssssssssg ',' gssswwsssssswwsssg ',' gssswassssssawsssg ',
 ' gssssssssssssssssg ','  gssssssnnssssssg  ','   gsssssmmsssssg   ','    gppppppppppg    ',
 '  gggppppyppppgggg  ',' gsssgppppppgsssggg ',' gssssggggggssssgsg ',
 '  gssssssssssssgssg ','   gssssssssssgssg  ','    gssgssgssggsg   ',
 '    gssg  gssg g    ','    gggg  gggg      '];
 const palette={g:'#414958',s:'#929aa5',w:'#f6f7ef',a:'#e5b448',n:'#df9aa8',m:'#55515d',p:'#9265b4',y:'#ffe194'};
 function node(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
 function svg(tag,attrs){const n=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(attrs||{}))n.setAttribute(k,v);return n;}
 function button(text,fn,cls='rm-btn secondary'){const b=node('button',cls,text);b.type='button';b.addEventListener('click',fn);return b;}
 function pixelCat(){const g=svg('g',{'aria-hidden':'true'});pixelRows.forEach((row,y)=>[...row].forEach((c,x)=>{if(palette[c])g.append(svg('rect',{x:x*2.5-25,y:y*2.5-42,width:2.6,height:2.6,fill:palette[c]}));}));return g;}
 function baseMap(){
  const map=svg('svg',{viewBox:'0 0 900 550',class:'ag-map',role:'img','aria-label':'Sala della caffetteria vista dall’alto, con cinque tavolini e un solo spigolo tra pareti dritte'});
  map.innerHTML='<defs><pattern id="ag-floor" width="32" height="32" patternUnits="userSpaceOnUse"><rect width="32" height="32" fill="#f0dec2"/><path d="M0 0H32V32" fill="none" stroke="#dfc6a1" stroke-width="1"/></pattern></defs>';
  const scenery=svg('g',{class:'ag-scenery'});
  scenery.append(svg('path',{d:room,fill:'url(#ag-floor)',stroke:'#668b89','stroke-width':18,'stroke-linejoin':'round'}));
  scenery.append(svg('path',{d:'M670 440l40 35',stroke:'#f0dec2','stroke-width':28}),svg('path',{d:'M670 440l28-20',stroke:'#927055','stroke-width':5}));
  [[120,75],[360,75],[540,84]].forEach(([x,y])=>{scenery.append(svg('rect',{x,y,width:62,height:9,fill:'#aad9e2',stroke:'#f8f2e6','stroke-width':4}));});
  [[95,245],[745,260],[410,470]].forEach(([x,y])=>{scenery.append(svg('rect',{x:x-10,y:y-6,width:20,height:14,fill:'#b78063'}),svg('circle',{cx:x,cy:y-10,r:15,fill:'#5f9578'}));});
  const tableNodes=tables.map((t,i)=>{
   const group=svg('g',{'data-table':i});
   group.append(svg('rect',{x:t.x-43,y:t.y-25,width:86,height:56,rx:5,fill:'#a07856',opacity:.2}));
   group.append(svg('rect',{x:t.x-38,y:t.y-27,width:76,height:48,rx:4,fill:'#c08d59',stroke:'#8d603f','stroke-width':4}));
   group.append(svg('path',{d:'M'+(t.x-32)+' '+(t.y-8)+'H'+(t.x+32),stroke:'#e4b884','stroke-width':2}));
   for(const dx of [-58,58])group.append(svg('rect',{x:t.x+dx-8,y:t.y-8,width:16,height:23,rx:3,fill:'#8e6a54'}));
   group.append(svg('ellipse',{cx:t.x+10,cy:t.y-8,rx:8,ry:5,fill:'#fff9e9'}),svg('rect',{x:t.x+5,y:t.y-15,width:10,height:9,fill:'#f8efe0'}));
   scenery.append(group);return group;
  });
  map.append(scenery);
  return {map,scenery,tableNodes};
 }
 const speech=[
  ['Bjorne','Miau… miau…'],['Morgana','Che succede?'],
  ['Bjorne','La mia scatolina… forse l’ho lasciata sotto il tavolino.'],
  ['Morgana','Dai, la cerco io. Quale tavolino?'],
  ['Bjorne','Quello vicino all’angolo della sala.'],
  ['Morgana','Aspettami qui. Torno con la tua scatolina.'],['Bjorne','Miau…']
 ];
 const artRoot='assets/images/reader/cafe-layers/';
 function story(host,state,stage){
  host.classList.add('ag-story');
  const scene=node('div','ag-story-picture ag-layer-scene');scene.dataset.stage=stage;
  const picture=(file,cls,alt)=>{const img=node('img',cls);img.src=artRoot+file+'.png';img.alt=alt;img.draggable=false;return img;};
  scene.append(picture('background','ag-layer-background','La caffetteria di giorno, con la porta aperta.'));
  scene.append(picture(stage===5?'morgana-enter':stage>=3?'morgana-listen':'morgana-comfort','ag-layer-morgana',stage===5?'Morgana entra dalla porta della caffetteria.':'Morgana, gatta grigia con bandana viola, consola Bjorne.'));
  const sob=node('div','ag-layer-bjorne');
  sob.append(picture('bjorne-open','ag-sob-open','Bjorne piange con gli occhi aperti.'),picture('bjorne-closed','ag-sob-closed',''));
  scene.append(sob);
  const balloon=i=>{const [who,text]=speech[i],bubble=node('div','ag-png-balloon '+(who==='Bjorne'?'ag-speech-bjorne':'ag-speech-morgana'));
   bubble.setAttribute('role','img');bubble.setAttribute('aria-label',who+': '+text);bubble.style.backgroundPosition=(i%2?100:0)+'% '+(Math.floor(i/2)*100/3)+'%';return bubble;};
  scene.append(balloon(stage));if(stage===5)scene.append(balloon(6));
  host.replaceChildren(scene);
 }
 function geometry(host,state,stage){
  host.classList.add('ag-geometry');const {map,scenery}=baseMap();
  const regions=svg('g',{class:'ag-regions'});
  const convex=svg('path',{d:'M74 55H900V550H74Z',fill:'#2bb5bf',opacity:.18,'data-region':'convesso'});
  const concave=svg('path',{d:'M0 0H900V55H74V550H0Z',fill:'#a18ac9',opacity:.16,'data-region':'concavo'});
  regions.append(concave,convex);map.append(regions);
  const rays=svg('g',{class:'ag-rays'});
  rays.append(svg('path',{d:'M74 55H890M74 55V535',fill:'none',stroke:'#118e9c','stroke-width':5}));
  rays.append(svg('path',{d:'M875 46L890 55 875 64M65 520L74 535 83 520',fill:'none',stroke:'#118e9c','stroke-width':4}));
  const dot=svg('circle',{cx:74,cy:55,r:7,fill:'#263c4b'}),label=svg('text',{x:48,y:40,fill:'#263c4b','font-size':23,'font-weight':700});label.textContent='O';rays.append(dot,label);
  for(const[x,y,text]of [[540,42,'lato'],[85,450,'lato']]){const n=svg('text',{x,y,fill:'#118e9c','font-size':19});n.textContent=text;n.classList.add('ag-side-label');rays.append(n);}
  map.append(rays);
  const select=node('div','ag-region-buttons');
  let chosen=state.region||'convesso';
  const arc=svg('path',{fill:'none',stroke:'#118e9c','stroke-width':3});rays.append(arc);
  const choices=[];
  const apply=()=>{
   state.region=chosen;
   convex.setAttribute('opacity',chosen==='convesso'?'.22':'.05');concave.setAttribute('opacity',chosen==='concavo'?'.22':'.05');
   arc.setAttribute('d',chosen==='convesso'?'M119 55A45 45 0 0 1 74 100':'M119 55A45 45 0 1 0 74 100');
   choices.forEach(([b,v])=>b.setAttribute('aria-pressed',String(v===chosen)));
   map.setAttribute('aria-label','Due semirette di origine O. È evidenziata la regione '+chosen+'. Le semirette continuano oltre i confini della stanza.');
  };
  [['Regione interna','convesso'],['L’altra regione','concavo']].forEach(([text,value])=>{const b=button(text,()=>{chosen=value;apply();});choices.push([b,value]);select.append(b);});
  host.replaceChildren(map,select);
  if(stage===0){scenery.style.opacity=1;scenery.animate([{opacity:1},{opacity:0}],{duration:1200,fill:'forwards'});}
  else scenery.style.opacity=0;
  rays.querySelectorAll('.ag-side-label').forEach(x=>x.style.opacity=stage>=1?1:0);
  apply();
 }
 function game(host,state,onNext){
  host.classList.add('ag-game');const {map,tableNodes}=baseMap();map.setAttribute('role','application');map.setAttribute('tabindex','0');map.setAttribute('aria-label','Guida Morgana con W A S D o le frecce. Avvicinati a un tavolino e premi Spazio per guardare sotto.');
  const player=svg('g',{class:'ag-player'});player.append(svg('ellipse',{cx:0,cy:5,rx:18,ry:7,fill:'#524a56',opacity:.25}),pixelCat());map.append(player);
  const feedback=node('div','ag-game-feedback');feedback.setAttribute('role','status');
  const controls=node('div','ag-game-controls'),pad=node('div','ag-dpad');pad.setAttribute('aria-label','Movimento di Morgana');
  const keys=new Set();let frame=0,last=0,disposed=false,near=-1,active=false;
  state.x??=690;state.y??=395;state.walk??=0;
  const inside=new Path2D(room),check=document.createElement('canvas').getContext('2d');
  const canMove=(x,y)=>{if(!check.isPointInPath(inside,x,y)||!check.isPointInPath(inside,x-14,y)||!check.isPointInPath(inside,x+14,y)||!check.isPointInPath(inside,x,y-15)||!check.isPointInPath(inside,x,y+12))return false;return !tables.some(t=>Math.abs(x-t.x)<54&&Math.abs(y-t.y)<40);};
  const examine=button('Guarda sotto il tavolino',()=>{
   if(near<0||state.found)return;
   if(tables[near].box){state.found=true;keys.clear();active=false;feedback.replaceChildren(node('strong','','Morgana'),node('span','','Eccola! Ora gliela porto.'));const box=svg('g',{class:'ag-found-box'});box.append(svg('rect',{x:tables[near].x-15,y:tables[near].y+28,width:29,height:21,rx:2,fill:'#d6ab77',stroke:'#855a3d','stroke-width':2}),svg('circle',{cx:tables[near].x,cy:tables[near].y+38,r:4,fill:'#8b613e'}));map.append(box);examine.hidden=true;controls.append(button('Osserva la sala →',onNext,'rm-btn primary'));}
   else feedback.textContent='Qui non c’è. Bjorne ha detto: «Vicino all’angolo della sala».';
   sync();
  },'rm-btn primary');
  const sync=()=>{
   player.setAttribute('transform','translate('+state.x+' '+(state.y+(active?Math.sin(state.walk)*2:0))+')');
   near=tables.findIndex(t=>Math.hypot(state.x-t.x,state.y-t.y)<79);
   tableNodes.forEach((n,i)=>n.setAttribute('filter',i===near&&!state.found?'drop-shadow(0 0 5px #19b3c4)':'none'));
   examine.disabled=near<0||!!state.found;examine.setAttribute('aria-label',near<0?'Avvicinati a un tavolino per guardare sotto':'Guarda sotto il tavolino');
   map.dataset.morganaX=Math.round(state.x);map.dataset.morganaY=Math.round(state.y);
  };
  const move=(dx,dy,dt=1)=>{if(state.found)return;const speed=dt;let changed=false;if(canMove(state.x+dx*speed,state.y)){state.x+=dx*speed;changed=true;}if(canMove(state.x,state.y+dy*speed)){state.y+=dy*speed;changed=true;}if(changed)state.walk+=.7;sync();};
  const loop=now=>{if(disposed)return;const dt=last?Math.min((now-last)/1000,.04):0;last=now;let x=0,y=0;if(keys.has('left'))x--;if(keys.has('right'))x++;if(keys.has('up'))y--;if(keys.has('down'))y++;active=!!(x||y)&&!state.found;if(active){const n=Math.hypot(x,y);move(x/n,y/n,dt*165);}frame=requestAnimationFrame(loop);};
  const dirs={w:'up',a:'left',s:'down',d:'right',ArrowUp:'up',ArrowLeft:'left',ArrowDown:'down',ArrowRight:'right'};
  const delta={up:[0,-1],left:[-1,0],down:[0,1],right:[1,0]};
  const keydown=e=>{if(!host.contains(document.activeElement)||document.querySelector('dialog[open]'))return;const dir=dirs[e.key]||dirs[e.key.toLowerCase()];if(dir){e.preventDefault();e.stopPropagation();keys.add(dir);if(!e.repeat)move(...delta[dir],12);}else if(e.key===' '){e.preventDefault();examine.click();}};
  const keyup=e=>{const dir=dirs[e.key]||dirs[e.key.toLowerCase()];if(dir)keys.delete(dir);};
  map.addEventListener('pointerdown',()=>map.focus({preventScroll:true}));
  [['↑','up'],['←','left'],['↓','down'],['→','right']].forEach(([text,dir])=>{
   const b=button(text,()=>move(...delta[dir],12),'ag-move ag-'+dir);b.setAttribute('aria-label','Sposta Morgana '+({up:'in alto',down:'in basso',left:'a sinistra',right:'a destra'}[dir]));
   b.addEventListener('pointerdown',e=>{b.setPointerCapture(e.pointerId);keys.add(dir);});
   const release=()=>keys.delete(dir);b.addEventListener('pointerup',release);b.addEventListener('pointercancel',release);b.addEventListener('lostpointercapture',release);pad.append(b);
  });
  controls.append(pad,examine);
  const start=button('Entra nella sala',()=>{start.remove();map.focus({preventScroll:true});active=true;},'rm-btn primary ag-start');
  host.replaceChildren(map,start,feedback,controls);
  const blur=()=>{keys.clear();active=false;};window.addEventListener('blur',blur);document.addEventListener('visibilitychange',blur);
  host.addEventListener('keydown',keydown);document.addEventListener('keyup',keyup);
  if(state.found){feedback.textContent='Morgana: «Eccola! Ora gliela porto.»';examine.hidden=true;controls.append(button('Osserva la sala →',onNext,'rm-btn primary'));}
  sync();frame=requestAnimationFrame(loop);
  return ()=>{disposed=true;cancelAnimationFrame(frame);keys.clear();window.removeEventListener('blur',blur);document.removeEventListener('visibilitychange',blur);document.removeEventListener('keyup',keyup);};
 }
 function mount(box,type,state,options={}){
  box.classList.add('ag-card',type==='cafe-story'?'ag-story-card':'ag-board-card');
  const host=node('div','ag-host rm-reader-board');box.append(host);
  const st=state[type]||(state[type]={});let cleanup=()=>{};
  const update=stage=>{if(type==='cafe-story')story(host,st,stage);if(type==='cafe-geometry')geometry(host,st,stage);};
  if(type==='cafe-game')cleanup=game(host,st,()=>document.getElementById('reader-next').click());else update(options.stage||0);
  host.agUpdate=update;return ()=>{cleanup();host.agUpdate=null;};
 }
 function setStage(box,stage){box.querySelector('.ag-host')?.agUpdate?.(stage);}
 window.GatitoAngleCafe={mount,setStage};
})();
