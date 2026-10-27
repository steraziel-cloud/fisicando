/* Linked notebook rows use node identity, never value matching. */
(function(global){
 const children=t=>t.child?[t.child]:t.left?[t.left,t.right]:[];
 function visit(t,fn,parents=[]){fn(t,parents);children(t).forEach(c=>visit(c,fn,[...parents,t]));}
 const locked=(row,id)=>!!row?.locks?.includes(id);
 function freeze(rows,until,id,E){for(let i=0;i<=until;i++){const row=rows[i],set=new Set(row.locks||[]);visit(row.tree,(t,parents)=>{if(t.id!==id)return;visit(t,n=>{set.add(n.id);if(n.type==='binary')set.add(n.id+'op');});parents.filter(n=>['fraction','power','group'].includes(n.type)).forEach(n=>set.add(n.id));});row.locks=[...set];}}
 function equal(a,b,E){a=E.evaluate(a,false);b=E.evaluate(b,false);return a.n*b.d===b.n*a.d;}
 function normalize(t){if(t.child)t.child=normalize(t.child);if(t.left){t.left=normalize(t.left);t.right=normalize(t.right);}if(t.type==='fraction'&&t.left.type==='number'&&t.right.type==='number'&&t.right.value.startsWith('-')){t.left.value=t.left.value.startsWith('-')?t.left.value.slice(1):'-'+t.left.value;t.right.value=t.right.value.slice(1);}if(t.type==='group'){const c=t.child;if(c.type==='number'||c.type==='fraction'&&c.left.type==='number'&&c.right.type==='number')return c;}return t;}
 function clean(tree){visit(tree,t=>delete t.fractionInk);return tree;}
 function apply(rows,index,{id,next,newRow=false,rebase,selectedIds=[id],note=''},E){if(index<0||index>=rows.length)throw Error('Seleziona una riga del quaderno.');if(selectedIds.some(key=>locked(rows[index],key)))throw Error('Questa parte è già stata svolta in un altro passaggio.');const old=E.find(rows[index].tree,id);if(!old||!equal(old,next,E))throw Error('Il passaggio cambia il valore della parte selezionata.');const out=structuredClone(rows),start=newRow?index+1:index;
  if(newRow&&(start===out.length||out[start].family!==out[index].family))out.splice(start,0,{tree:clean(structuredClone(rows[index].tree)),note,locks:[],family:out[index].family});
  for(let i=start;i<out.length;i++){const row=out[i],before=row.tree;if(row.family!==out[index].family)break;if(rebase)row.tree=rebase(structuredClone(before));else if(E.find(before,id))row.tree=E.replace(structuredClone(before),id,structuredClone(next));else continue;row.tree=normalize(row.tree);if(!row.tree||!equal(before,row.tree,E))throw Error('Il collegamento tra i passaggi non è coerente.');row.note=note;if(newRow)clean(row.tree);}
  for(const key of selectedIds)freeze(out,newRow?index:index-1,key,E);return{rows:out,index:start};
 }
 function differences(a,b,out=[]){if(a.id!==b.id||a.type!==b.type||a.value!==b.value||a.style!==b.style||a.op!==b.op){out.push({id:a.id,next:b});return out;}const x=children(a),y=children(b);x.forEach((n,i)=>differences(n,y[i],out));return out;}
 const api={visit,locked,apply,differences,clean,normalize};global.GatitoExpressionSteps=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
