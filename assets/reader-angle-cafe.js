/* Original GatitoMath cafe story, keyboard/touch game and geometric transition. */
(()=>{
 const NS='http://www.w3.org/2000/svg';
 const room='M185 88H550C695 88 812 155 812 290C812 425 650 480 415 480C240 480 93 380 112 320L185 88Z';
 const tables=[{x:245,y:170,box:true},{x:445,y:170},{x:650,y:265},{x:280,y:345},{x:505,y:375}];
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
function spriteCat(color,scarf){
 const cell=color==='#c79565'?3:color==='#dba569'?0:color==='#eee4cb'?1:2;
 const g=svg('g',{'aria-hidden':'true'}),v=svg('svg',{x:-29,y:-48,width:58,height:58,viewBox:'0 0 100 100',overflow:'hidden',class:'ag-npc-sprite'});
 v.append(svg('image',{href:'assets/images/reader/cafe-npcs-rpg-v2.png',width:200,height:200,x:-(cell%2)*100,y:-Math.floor(cell/2)*100,'image-rendering':'pixelated'}));g.append(v);return g;
}
function baseMap(){
 const map=svg('svg',{viewBox:'0 0 900 550',class:'ag-map',role:'img','aria-label':'Caffetteria in prospettiva dall’alto, con tavolini, bancone e un solo angolo tra le pareti dritte'});
 map.innerHTML='<defs><pattern id="ag-floor" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#e6cda3"/><path d="M0 0H40V40" fill="none" stroke="#c4a67e" stroke-width="2"/><path d="M3 5H36M5 18H32M7 31H35" stroke="#f0ddba" stroke-width="2" opacity=".5"/></pattern><clipPath id="ag-room-clip"><path d="'+room+'"/></clipPath></defs>';
 const scenery=svg('g',{class:'ag-scenery'});
 scenery.append(svg('path',{d:room,transform:'translate(0 16)',fill:'#516865',stroke:'#425351','stroke-width':20,'stroke-linejoin':'round'}));
 scenery.append(svg('path',{d:room,fill:'url(#ag-floor)',stroke:'#67908a','stroke-width':20,'stroke-linejoin':'round'}));
 scenery.append(svg('path',{d:room,fill:'none',stroke:'#a2b7a4','stroke-width':5,'stroke-linejoin':'round'}));
 const inside=svg('g',{'clip-path':'url(#ag-room-clip)'});scenery.append(inside);
 // Straight walls retain a clear common vertex; the other joins are smooth.
 inside.append(svg('path',{d:'M185 88H550M185 88L112 320',fill:'none',stroke:'#547c76','stroke-width':14}));
 [[290,91],[435,91]].forEach(([x,y])=>{const w=svg('g',{transform:'translate('+x+' '+y+')'});w.innerHTML='<rect x="-31" y="0" width="64" height="34" fill="#705b48"/><rect x="-27" y="3" width="56" height="25" fill="#98d4d6"/><path d="M1 3V28M-27 16H29" stroke="#fff0d0" stroke-width="4"/><path d="M-22 7L-10 7-22 20M10 7H22L10 20" fill="#daf3ea"/><rect x="-34" y="29" width="70" height="7" fill="#b58b62"/>';inside.append(w);});
 function plant(x,y){const g=svg('g',{transform:'translate('+x+' '+y+')','shape-rendering':'crispEdges'});g.innerHTML='<ellipse cy="8" rx="22" ry="9" fill="#716854" opacity=".22"/><rect x="-13" y="-5" width="26" height="21" fill="#a66c4d"/><rect x="-10" y="0" width="20" height="13" fill="#c78a61"/><rect x="-17" y="-17" width="34" height="13" fill="#528560"/><rect x="-12" y="-30" width="24" height="26" fill="#477855"/><rect x="-23" y="-23" width="20" height="15" fill="#69a367"/><rect x="4" y="-26" width="20" height="15" fill="#69a367"/><rect x="-4" y="-31" width="7" height="13" fill="#8abb72"/>';inside.append(g);}
 [[141,282],[760,288],[426,453]].forEach(([x,y])=>plant(x,y));
 // A counter with thickness, equipment, cups and a moving barista.
 const counter=svg('g',{class:'ag-counter'});counter.innerHTML='<ellipse cx="617" cy="185" rx="91" ry="16" fill="#77604a" opacity=".2"/><rect x="546" y="136" width="150" height="54" rx="4" fill="#785440"/><path d="M554 153H688V181H554Z" fill="#aa7553"/><path d="M559 155V181M588 155V181M625 155V181M664 155V181" stroke="#865939" stroke-width="3"/><rect x="540" y="129" width="164" height="24" rx="4" fill="#d0a478" stroke="#805c42" stroke-width="3"/><path d="M546 133H699" stroke="#eed1a2" stroke-width="4"/><rect x="565" y="111" width="38" height="25" fill="#687d80"/><rect x="569" y="115" width="30" height="12" fill="#b7c7c2"/><rect x="572" y="119" width="6" height="5" fill="#56605d"/><path d="M572 132H596" stroke="#3c555c" stroke-width="3"/><rect x="674" y="120" width="15" height="14" fill="#fff2ce"/><path d="M689 123h5v7h-5" fill="none" stroke="#fff2ce" stroke-width="3"/><rect x="631" y="123" width="25" height="10" fill="#695a47"/>';
 const barista=svg('g',{class:'ag-barista',transform:'translate(632 126)'});barista.append(spriteCat('#c79565','#edf0d8'));inside.append(barista,counter);
 const tableNodes=tables.map((t,i)=>{
  const g=svg('g',{'data-table':i});g.innerHTML='<ellipse cx="'+t.x+'" cy="'+(t.y+20)+'" rx="58" ry="17" fill="#826347" opacity=".2"/>';
  for(const dx of [-58,58]){const c=svg('g',{transform:'translate('+(t.x+dx)+' '+t.y+')'});c.innerHTML='<rect x="-11" y="-19" width="22" height="7" fill="#795541"/><rect x="-10" y="-12" width="20" height="24" fill="#ac7a51"/><rect x="-10" y="12" width="6" height="8" fill="#684c3c"/><rect x="4" y="12" width="6" height="8" fill="#684c3c"/>';g.append(c);}
  g.append(svg('rect',{x:t.x-35,y:t.y-10,width:70,height:31,rx:3,fill:'#956442'}),svg('rect',{x:t.x-40,y:t.y-28,width:80,height:37,rx:5,fill:'#c39565',stroke:'#805537','stroke-width':3}),svg('path',{d:'M'+(t.x-33)+' '+(t.y-21)+'h65',stroke:'#e6bb83','stroke-width':3}));
  const dishes=svg('g',{transform:'translate('+t.x+' '+t.y+')'});dishes.innerHTML='<ellipse cx="10" cy="-8" rx="12" ry="7" fill="#f5edce"/><rect x="5" y="-20" width="12" height="12" fill="#fff5d6"/><path d="M17-17h4v6h-4" fill="none" stroke="#fff5d6" stroke-width="2"/><ellipse cx="-15" cy="-8" rx="10" ry="5" fill="#b78558"/><path d="M-23-9l5-5 10 2-1 6Z" fill="#e8b45f"/>';g.append(dishes);
  inside.append(g);return g;
 });
 const customers=[];
 [[0,'Milo','#dba569','#77975e'],[2,'Luna','#eee4cb','#cf8d9b'],[4,'Nilo','#7e8494','#e0ae5f']].forEach(([i,name,color,scarf])=>{const t=tables[i];const g=svg('g',{transform:'translate('+(t.x+61)+' '+(t.y+8)+')',class:'ag-customer'});g.append(spriteCat(color,scarf));inside.append(g);customers.push({x:t.x+61,y:t.y+8,name,node:g,table:i});});
 // The opening follows the wall tangent; no floor is painted outside the room.
 const door=svg('g',{transform:'translate(739 414) rotate(-33)'});door.innerHTML='<rect x="-28" y="-10" width="56" height="19" fill="#e6cda3"/><path d="M-28-10v18M28-10v18" stroke="#705c48" stroke-width="5"/><path d="M-27-6L8-29" stroke="#775743" stroke-width="7"/><path d="M-24-7L8-27" stroke="#b98e61" stroke-width="3"/><circle cx="3" cy="-22" r="2" fill="#ecc365"/>';scenery.append(door);
 const actors=svg('g',{class:'ag-depth-layer'});scenery.append(actors);map.append(scenery);return {map,scenery,tableNodes,barista,customers,insideLayer:actors,depth:[...tableNodes.map((node,i)=>({node,y:tables[i].y+18})),...customers.map(c=>({node:c.node,y:c.y})),{node:barista,y:126},{node:counter,y:190}]};
}
 const speech=[
  ['Bjorne','Miau… miau…'],['Morgana','Che succede?'],
  ['Bjorne','La mia scatolina… forse l’ho lasciata sotto il tavolino.'],
  ['Morgana','Dai, la cerco io. Quale tavolino?'],
  ['Bjorne','Quello vicino all’angolo della sala.'],
  ['Morgana','Aspettami qui. Torno con la tua scatolina.'],['Bjorne','Miau…']
 ];
 const artRoot='assets/images/reader/cafe-layers/';
 const storyViews=new WeakMap();
 function story(host,state,stage){
  let view=storyViews.get(host);
  if(!view){
   host.classList.add('ag-story');
   const scene=node('div','ag-story-picture ag-layer-scene');
   const picture=(file,cls,alt)=>{const img=node('img',cls);img.src=artRoot+file+'.png';img.alt=alt;img.draggable=false;img.loading='eager';return img;};
   scene.append(picture('background','ag-layer-background','La caffetteria di giorno, con la porta aperta.'));
   const poses={};
   for(const name of ['comfort','listen','enter']){
    const img=picture('morgana-'+name,'ag-layer-morgana ag-pose-'+name,'');
    img.setAttribute('aria-hidden','true');scene.append(img);
    const ready=img.decode?img.decode().catch(()=>{}):Promise.resolve();
    poses[name]={img,ready};
   }
   const sob=node('div','ag-layer-bjorne');
   sob.append(picture('bjorne-open','ag-sob-open','Bjorne piange con gli occhi aperti.'),picture('bjorne-closed','ag-sob-closed',''));
   scene.append(sob);
   const dialogue=node('div','ag-dialogue');scene.append(dialogue);
   const atlas=new Image();atlas.src=artRoot+'balloons.png';
   view={scene,poses,dialogue,current:null,wanted:null,revision:0,atlas};
   storyViews.set(host,view);host.replaceChildren(scene);
  }
  view.scene.dataset.stage=stage;
  const wanted=stage===5?'enter':stage>=3?'listen':'comfort';
  if(view.wanted!==wanted){
   view.wanted=wanted;const revision=++view.revision;
   // Decode once in advance; keep the previous pose visible until the new one is ready.
   view.poses[wanted].ready.then(()=>{
    if(view.revision!==revision||!host.isConnected)return;
    for(const [name,{img}] of Object.entries(view.poses)){
     const visible=name===wanted;
     img.classList.toggle('ag-pose-visible',visible);
     img.setAttribute('aria-hidden',String(!visible));
     img.alt=visible?(name==='enter'?'Morgana entra dalla porta della caffetteria.':'Morgana, gatta grigia con bandana viola, consola Bjorne.'):'';
    }
    view.current=wanted;
   });
  }
  const balloon=i=>{const [who,text]=speech[i],bubble=node('div','ag-png-balloon '+(who==='Bjorne'?'ag-speech-bjorne':'ag-speech-morgana'));
   bubble.setAttribute('role','img');bubble.setAttribute('aria-label',who+': '+text);bubble.style.backgroundPosition=(i%2?100:0)+'% '+(Math.floor(i/2)*31)+'%';return bubble;};
  view.dialogue.replaceChildren(balloon(stage));
  if(stage===5)view.dialogue.append(balloon(6));
 }
 function geometry(host,state,stage){
  host.classList.add('ag-geometry');const {map,scenery}=baseMap();
  const regions=svg('g',{class:'ag-regions'});
  const convex=svg('path',{d:'M185 88H900V550H40Z',fill:'#2bb5bf',opacity:.18,'data-region':'convesso'});
  const concave=svg('path',{d:'M0 0H900V88H185L40 550H0Z',fill:'#a18ac9',opacity:.16,'data-region':'concavo'});
  regions.append(concave,convex);map.append(regions);
  const rays=svg('g',{class:'ag-rays'});
  rays.append(svg('path',{d:'M185 88H890M185 88L44 535',fill:'none',stroke:'#118e9c','stroke-width':5}));
  rays.append(svg('path',{d:'M875 79L890 88 875 97M40 518L44 535 57 523',fill:'none',stroke:'#118e9c','stroke-width':4}));
  const dot=svg('circle',{cx:185,cy:88,r:7,fill:'#263c4b'}),label=svg('text',{x:157,y:70,fill:'#263c4b','font-size':23,'font-weight':700});label.textContent='O';rays.append(dot,label);
  for(const[x,y,text]of [[460,69,'lato'],[86,330,'lato']]){const n=svg('text',{x,y,fill:'#118e9c','font-size':19});n.textContent=text;n.classList.add('ag-side-label');rays.append(n);}
  map.append(rays);
  const select=node('div','ag-region-buttons');
  let chosen=state.region||'convesso';
  const arc=svg('path',{fill:'none',stroke:'#118e9c','stroke-width':3});rays.append(arc);
  const choices=[];
  const apply=()=>{
   state.region=chosen;
   convex.setAttribute('opacity',chosen==='convesso'?'.22':'.05');concave.setAttribute('opacity',chosen==='concavo'?'.22':'.05');
   arc.setAttribute('d',chosen==='convesso'?'M230 88A45 45 0 0 1 171.5 130.9':'M230 88A45 45 0 1 0 171.5 130.9');
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
function music(host,muted=false){
 let ctx=null,gain=null,timer=0,next=0,beat=0,disposed=false;const voices=new Set();
 const lead=[69,72,76,74,72,71,69,null,71,74,77,76,74,72,71,null,72,76,79,77,76,74,72,null,71,74,76,74,71,68,69,null];
 const hz=n=>440*Math.pow(2,(n-69)/12);
 function note(n,t,d,volume,type='triangle'){
  if(n===null)return;const osc=ctx.createOscillator(),env=ctx.createGain();osc.type=type;osc.frequency.value=hz(n);env.gain.setValueAtTime(0,t);env.gain.linearRampToValueAtTime(volume,t+.015);env.gain.exponentialRampToValueAtTime(.0001,t+d);osc.connect(env);env.connect(gain);osc.start(t);osc.stop(t+d+.03);voices.add(osc);osc.onended=()=>{voices.delete(osc);osc.disconnect();env.disconnect();};
 }
 function schedule(){if(disposed||!ctx||ctx.state!=='running')return;while(next<ctx.currentTime+.35){const b=beat%32,root=[45,43,48,40][Math.floor(b/8)];note(lead[b],next,.42,.12);if(b%2===0)note(root,next,.9,.09,'sine');note(root+[12,19,24,19][b%4],next+.32,.22,.045);next+=.64;beat++;}}
 async function wake(){if(disposed)return;try{if(!ctx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return;ctx=new C();gain=ctx.createGain();gain.gain.value=muted?0:.17;gain.connect(ctx.destination);ctx.onstatechange=()=>{host.dataset.audioState=ctx.state;};next=ctx.currentTime+.08;timer=setInterval(schedule,100);}if(ctx.state==='suspended'){await ctx.resume();next=ctx.currentTime+.08;}schedule();host.dataset.audioState=ctx.state;}catch{host.dataset.audioState='waiting';}}
 const gesture=()=>wake();document.addEventListener('pointerdown',gesture,{passive:true});document.addEventListener('keydown',gesture);
 const visibility=()=>{if(!ctx)return;if(document.hidden){ctx.suspend().catch(()=>{});}else wake();};document.addEventListener('visibilitychange',visibility);wake();
 return {toggle(){muted=!muted;if(gain&&ctx){gain.gain.cancelScheduledValues(ctx.currentTime);gain.gain.setTargetAtTime(muted?0:.17,ctx.currentTime,.08);}wake();return muted;},dispose(){disposed=true;clearInterval(timer);document.removeEventListener('pointerdown',gesture);document.removeEventListener('keydown',gesture);document.removeEventListener('visibilitychange',visibility);if(ctx){gain.gain.cancelScheduledValues(ctx.currentTime);gain.gain.setTargetAtTime(0,ctx.currentTime,.08);setTimeout(()=>{voices.forEach(v=>{try{v.stop();}catch{}});ctx.close().catch(()=>{});},350);}}};
}
function game(host,state,onNext){
 host.classList.add('ag-game');const {map,tableNodes,barista,customers,insideLayer,depth}=baseMap();map.setAttribute('role','application');map.setAttribute('tabindex','0');map.setAttribute('aria-label','Caffetteria esplorabile. Muovi Morgana con WASD o frecce; Spazio ispeziona, I mostra un indizio.');
 const player=svg('g',{class:'ag-player'}),shade=svg('ellipse',{cx:0,cy:2,rx:18,ry:8,fill:'#4b4253',opacity:.25});player.append(shade);
 const sprite=svg('svg',{x:-38,y:-60,width:76,height:76,viewBox:'0 0 100 100',overflow:'hidden',class:'ag-morgana-sprite'});const sheet=svg('image',{href:'assets/images/reader/cafe-morgana-rpg-v1.png',x:0,y:0,width:300,height:400,'image-rendering':'pixelated'});sprite.append(sheet);player.append(sprite);insideLayer.append(player);let sortedY=null;
 const frameBox=node('div','ag-game-screen');frameBox.append(map);
 const keys=new Set();let raf=0,last=0,disposed=false,dialogue=null,near=null,walkClock=0,active=false,barClock=0;
 state.x??=735;state.y??=390;state.dir??='up';state.musicMuted??=false;state.hints??=0;
 const sound=music(host,state.musicMuted);
 const dialogueBox=node('div','ag-rpg-dialogue');dialogueBox.hidden=true;dialogueBox.setAttribute('role','status');
 const portrait=node('div','ag-rpg-portrait'),speech=node('div','ag-rpg-speech'),speaker=node('strong'),words=node('p'),dismiss=button('▼',()=>inspect(),'ag-dialogue-next');dismiss.setAttribute('aria-label','Continua il dialogo');speech.append(speaker,words);dialogueBox.append(portrait,speech,dismiss);frameBox.append(dialogueBox);
 function say(who,text,after){keys.clear();active=false;dialogue={after};speaker.textContent=who;words.textContent=text;portrait.textContent='';const cell={Milo:0,Luna:1,Nilo:2,Barista:3}[who];portrait.style.backgroundImage='url(assets/images/reader/'+(who==='Morgana'?'cafe-morgana-rpg-v1.png':'cafe-npcs-rpg-v2.png')+')';portrait.style.backgroundSize=who==='Morgana'?'300% 400%':'200% 200%';portrait.style.backgroundPosition=who==='Morgana'?'0% 0%':(cell%2?100:0)+'% '+(cell>=2?100:0)+'%';dialogueBox.hidden=false;sync();}
 function closeDialogue(){if(!dialogue)return;const after=dialogue.after;dialogue=null;dialogueBox.hidden=true;if(after)after();map.focus({preventScroll:true});}
 const controls=node('div','ag-console-controls'),pad=node('div','ag-dpad');pad.setAttribute('aria-label','Croce direzionale');
 const action=button('Ispeziona',()=>inspect(),'ag-console-action ag-inspect');action.setAttribute('aria-label','Ispeziona o continua il dialogo');
 const hint=button('Indizio',()=>{if(dialogue){closeDialogue();return;}const hints=['Vediamo… quale tavolino aveva detto Bjorne?','Quello vicino all’angolo della sala. Devo osservare dove si incontrano le due pareti dritte.','Gli altri tratti della parete sono curvi. Il tavolino che cerco è vicino all’unico spigolo.'];say('Morgana',hints[Math.min(state.hints++,2)]);},'ag-console-action ag-hint');
 const audio=button(state.musicMuted?'🔇':'🔊',()=>{state.musicMuted=sound.toggle();audio.textContent=state.musicMuted?'🔇':'🔊';audio.setAttribute('aria-label',state.musicMuted?'Attiva musica':'Disattiva musica');},'ag-music');audio.setAttribute('aria-label',state.musicMuted?'Attiva musica':'Disattiva musica');frameBox.append(audio);
 const inside=new Path2D(room),check=document.createElement('canvas').getContext('2d');
 const delta={up:[0,-1],left:[-1,0],down:[0,1],right:[1,0]},dirs={w:'up',a:'left',s:'down',d:'right',ArrowUp:'up',ArrowLeft:'left',ArrowDown:'down',ArrowRight:'right'};
 const canMove=(x,y)=>check.isPointInPath(inside,x-13,y)&&check.isPointInPath(inside,x+13,y)&&check.isPointInPath(inside,x,y-7)&&check.isPointInPath(inside,x,y+10)&&!tables.some(t=>Math.abs(x-t.x)<53&&Math.abs(y-t.y)<33)&&!(x>529&&x<714&&y>111&&y<203)&&!customers.some(c=>Math.hypot(x-c.x,y-c.y)<24);
 function sync(){
  player.setAttribute('transform','translate('+state.x+' '+state.y+')');map.dataset.morganaX=Math.round(state.x);map.dataset.morganaY=Math.round(state.y);map.dataset.direction=state.dir;
  if(sortedY!==state.y){[...depth,{node:player,y:state.y}].sort((a,b)=>a.y-b.y).forEach(d=>insideLayer.append(d.node));sortedY=state.y;}
  const row={down:0,left:1,right:2,up:3}[state.dir],col=active?1+(Math.floor(walkClock/.14)%2):0;sheet.setAttribute('x',-col*100);sheet.setAttribute('y',-row*100);
  const objects=[...tables.map((t,i)=>({...t,type:'table',i})),...customers.map(c=>({...c,type:'customer'})),{x:622,y:211,type:'barista'}, {x:426,y:453,type:'plant'}];
  near=objects.map(o=>({...o,d:Math.hypot(state.x-o.x,state.y-o.y)})).filter(o=>o.d<(o.type==='table'?85:65)).sort((a,b)=>a.d-b.d)[0]||null;
  tableNodes.forEach((n,i)=>n.classList.toggle('ag-table-near',near?.type==='table'&&near.i===i&&!dialogue));
  action.classList.toggle('ag-action-ready',!!near||!!dialogue);action.textContent=dialogue?'Continua':state.found?'Osserva':'Ispeziona';
 }
 function inspect(){
  if(dialogue){closeDialogue();return;}if(state.found){onNext();return;}if(!near){say('Morgana','Meglio avvicinarmi a un tavolino, a un oggetto o a qualcuno prima di ispezionare.');return;}
  if(near.type==='barista'){say('Barista','Le preparo un cappuccino? Miao. Se cerca una scatolina, provi a chiedere ai clienti.');return;}
  if(near.type==='plant'){say('Morgana','Una pianta molto curata. La scatolina di Bjorne non è un vaso… per ora.');return;}
  if(near.type==='customer'){const texts={Milo:'Prima qui c’era un gattino con una bandana turchese. Gli è scivolato qualcosa sotto il tavolino.',Luna:'Cerchi qualcosa? Vicino all’angolo c’è un altro tavolino. Io ho soltanto biscotti!',Nilo:'Questo posto sembra un labirinto… ma il cappuccino è buonissimo.'};say(near.name,texts[near.name]);return;}
  if(near.box){state.found=true;const box=svg('g',{class:'ag-found-box',transform:'translate('+(near.x-12)+' '+(near.y+22)+')'});box.innerHTML='<rect width="25" height="19" fill="#bd8b59" stroke="#715037" stroke-width="2"/><path d="M0 6H25M12 0V19" stroke="#f4c46e" stroke-width="3"/>';map.append(box);say('Morgana','Eccola! La scatolina era proprio sotto il tavolino vicino all’angolo. Ora gliela porto.',onNext);}
  else say('Morgana','Sotto questo tavolino non c’è. Continuo a cercare.');
 }
 function move(dx,dy,amount){if(dialogue||state.found)return;state.dir=Math.abs(dx)>Math.abs(dy)?(dx<0?'left':'right'):(dy<0?'up':'down');let moved=false;if(canMove(state.x+dx*amount,state.y)){state.x+=dx*amount;moved=true;}if(canMove(state.x,state.y+dy*amount)){state.y+=dy*amount;moved=true;}active=moved;sync();}
 [['↑','up'],['←','left'],['↓','down'],['→','right']].forEach(([text,dir])=>{const b=button(text,()=>{move(...delta[dir],12);map.focus({preventScroll:true});},'ag-move ag-'+dir);b.setAttribute('aria-label','Sposta Morgana '+({up:'in alto',down:'in basso',left:'a sinistra',right:'a destra'}[dir]));b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys.add(dir);});const release=()=>keys.delete(dir);b.addEventListener('pointerup',release);b.addEventListener('pointercancel',release);b.addEventListener('lostpointercapture',release);pad.append(b);});
 const center=node('span','ag-pad-center');pad.append(center);controls.append(pad,action,hint);frameBox.append(controls);host.replaceChildren(frameBox);
 function keydown(e){if(document.querySelector('dialog[open]'))return;const focused=document.activeElement;if(!host.contains(focused)&&focused!==document.body&&focused.id!=='reader-section-title')return;const dir=dirs[e.key]||dirs[e.key.toLowerCase()];if(dir){e.preventDefault();e.stopPropagation();if(!dialogue){keys.add(dir);if(!e.repeat)move(...delta[dir],12);}}else if(e.key===' '||e.key==='Enter'){e.preventDefault();e.stopPropagation();if(!e.repeat)inspect();}else if(e.key.toLowerCase()==='i'){e.preventDefault();hint.click();}else if(e.key==='Escape'&&dialogue){e.preventDefault();closeDialogue();}}
 const keyup=e=>{const d=dirs[e.key]||dirs[e.key.toLowerCase()];if(d)keys.delete(d);};const blur=()=>{keys.clear();active=false;};
 document.addEventListener('keydown',keydown,true);document.addEventListener('keyup',keyup);window.addEventListener('blur',blur);document.addEventListener('visibilitychange',blur);map.addEventListener('pointerdown',()=>map.focus({preventScroll:true}));
 function loop(now){if(disposed)return;const dt=last?Math.min((now-last)/1000,.04):0;last=now;walkClock+=dt;barClock+=dt;let dx=0,dy=0;if(keys.has('left'))dx--;if(keys.has('right'))dx++;if(keys.has('up'))dy--;if(keys.has('down'))dy++;active=false;if((dx||dy)&&!dialogue){const n=Math.hypot(dx,dy);move(dx/n,dy/n,dt*155);}const bx=632+Math.sin(barClock*.7)*17;barista.setAttribute('transform','translate('+bx+' '+(126+Math.sin(barClock*2)*.6)+')');sync();raf=requestAnimationFrame(loop);}
 sync();raf=requestAnimationFrame(now=>{map.focus({preventScroll:true});loop(now);});
 return ()=>{disposed=true;cancelAnimationFrame(raf);keys.clear();sound.dispose();document.removeEventListener('keydown',keydown,true);document.removeEventListener('keyup',keyup);window.removeEventListener('blur',blur);document.removeEventListener('visibilitychange',blur);};
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
