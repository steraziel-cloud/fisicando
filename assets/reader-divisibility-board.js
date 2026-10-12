window.GatitoDivisibility={mount(host,mode){
 host.classList.add('rm-divisibility-card');
 const board=document.createElement('section');board.className='dv-board';board.setAttribute('aria-label','Lavagna dei gruppi e dei multipli');
 const multiples=mode==='divisibility-multiples';
 board.innerHTML='<h4>'+(multiples?'Quanti gruppi da 6?':'18 monete, gruppi uguali')+'</h4><label class="dv-control"><span>'+(multiples?'Numero di gruppi':'Monete per gruppo')+'</span><input type="range" min="1" max="'+(multiples?'8':'10')+'" value="'+(multiples?'3':'6')+'"><output></output></label><div class="dv-groups"></div><p class="dv-equation" aria-live="polite"></p><p class="dv-reading"></p>';
 if(multiples)board.querySelector('input').min='0';
 host.append(board);const input=board.querySelector('input'),groups=board.querySelector('.dv-groups');
 function draw(){const value=Number(input.value),size=multiples?6:value,total=multiples?size*value:18,q=Math.floor(total/size),rest=total%size;board.querySelector('output').textContent=value;groups.replaceChildren();
 for(let g=0;g<q+(rest?1:0);g++){const remaining=g===q,group=document.createElement('div');group.className='dv-group'+(remaining?' dv-remainder':'');group.setAttribute('aria-label',remaining?rest+' monete rimasti':'Gruppo '+(g+1)+' di '+size+' monete');for(let i=0;i<(remaining?rest:size);i++){const dot=document.createElement('span');dot.className='dv-token';dot.setAttribute('aria-hidden','true');group.append(dot);}groups.append(group);}
 if(!total)groups.textContent='Nessun gruppo: 0 monete.';
 board.querySelector('.dv-equation').textContent=multiples?'6 × '+value+' = '+total:total+' = '+size+' × '+q+(rest?' + '+rest:'');
 board.querySelector('.dv-reading').textContent=multiples?total+' è un multiplo di 6.':rest?'Restano '+rest+' monete: 18 non è divisibile per '+size+'.':'Resto zero: '+size+' è un divisore di 18.';
 }
 input.addEventListener('input',draw);draw();return()=>input.removeEventListener('input',draw);
}};

