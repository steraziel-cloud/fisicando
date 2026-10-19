const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),path=require('path');
let reduceMotion=false,requests=0,runs=0;const revoked=[];
class Node{constructor(tag){this.tagName=tag;this.children=[];this.style={};this.attrs={};}append(...nodes){this.children.push(...nodes)}replaceChildren(...nodes){this.children=nodes}setAttribute(k,v){this.attrs[k]=v}getAttribute(k){return this[k]||this.attrs[k]}contains(n){return this.children.includes(n)||this.children.some(x=>x.contains(n))}}
class PlaybackURL extends URL{static createObjectURL(blob){return 'blob:play-'+(++runs)+'/'+blob.source;}static revokeObjectURL(src){revoked.push(src);}}
const context={URL:PlaybackURL,fetch:async src=>{requests++;return{ok:true,blob:async()=>({source:src})};},Image:class{constructor(){this.complete=true;this.naturalWidth=256}},document:{currentScript:{src:'https://example.test/assets/reader-reactions.js'},baseURI:'https://example.test/reader.html',readyState:'loading',createElement:tag=>new Node(tag)},window:{addEventListener(){}},setTimeout(){return 1},clearTimeout(){},matchMedia:()=>({matches:reduceMotion})};vm.createContext(context);vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/reader-reactions.js'),'utf8'),context);
const api=context.window.GatitoQuizReactions,target=new Node('div'),image=()=>target.children[0].children[0],flush=()=>new Promise(setImmediate);
(async()=>{
 const positives=[],negatives=[];
 for(let i=0;i<6;i++){api.show(target,'corretto',{correct:true});await flush();positives.push(image().src);assert(!image().src.includes('dubbio'));}
 for(let i=0;i<6;i++){api.show(target,'riprova',{correct:false});await flush();negatives.push(image().src);assert(!image().src.includes('festeggiamento'));}
 for(const name of ['bjorne_festeggiamento','bjorne_scatolina','morgana_ottimo_v2','morgana_aura_v2'])assert.equal(positives.filter(x=>x.includes(name+'-quiz.webp')).length,1);
 for(const name of ['bjorne_dubbio','bjorne_riprova'])assert.equal(negatives.filter(x=>x.includes(name+'-quiz.webp')).length,1);
 assert.equal(requests,4,'Each new animation is fetched once');
 const again=[];for(let i=0;i<6;i++){api.show(target,'corretto',{correct:true});await flush();again.push(image().src);}
 assert.notEqual(again[1],positives[1],'Fresh playback URL restarts Morgana');assert.equal(requests,4,'Replaying uses cached bytes');assert(revoked.length>0);
 for(let i=0;i<4;i++){api.show(target,'finito',{correct:true,final:true});await flush();}assert(image().src.includes('bjorne_scatolina-quiz.webp'));
 reduceMotion=true;for(let i=0;i<4;i++){api.show(target,'finito',{correct:true,final:true});await flush();}assert(image().src.includes('bjorne_scatolina-still-quiz.webp'));assert.equal(requests,4);assert(!image().className.includes('morgana-shine'));
 console.log('PASS: six distinct variants per polarity; new Bjorne and Morgana; final reward; reduced motion; replay restarts without new downloads; playback URLs released.');
})().catch(e=>{console.error(e);process.exitCode=1;});
