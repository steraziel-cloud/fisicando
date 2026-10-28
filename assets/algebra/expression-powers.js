/* Integer-exponent power rules; no results are supplied to the student. */
(function(global){
 const unwrap=t=>t?.type==='group'?unwrap(t.child):t;
 function integer(t){t=unwrap(t);return t?.type==='number'&&/^-?\d+$/.test(t.value)&&BigInt(t.value)>= -10000n&&BigInt(t.value)<=10000n?BigInt(t.value):null;}
 function key(t){t=unwrap(t);if(t.type==='number'||t.type==='variable')return t.type+':'+t.value;if(t.left)return [t.type,t.op||'',key(t.left),key(t.right)].join('|');return t.type;}
 function power(t){t=unwrap(t);return t?.type==='power'&&integer(t.right)!==null?{node:t,base:unwrap(t.left),exponent:integer(t.right)}:null;}
 function chosen(tree,selection,E){return selection.length===1?E.find(tree,selection[0]):null;}
 function single(tree,selection,E){return power(chosen(tree,selection,E));}
 function product(tree,selection,E,P){const plan=P.plan(tree,selection);if(!plan)return null;const powers=plan.terms.map(power);return powers.every(Boolean)&&powers.every(p=>key(p.base)===key(powers[0].base))?{plan,powers}:null;}
 function quotient(tree,selection,E){let found=null;function walk(t){const match=(t.type==='fraction'&&selection.length===1&&selection[0]===t.id)||(t.type==='binary'&&t.op==='÷'&&selection.length===3&&[t.left.id,t.id+'op',t.right.id].every(id=>selection.includes(id)));if(match){const a=power(t.left),b=power(t.right);if(a&&b&&key(a.base)===key(b.base))found={node:t,a,b};}if(t.child)walk(t.child);if(t.left){walk(t.left);walk(t.right);}}walk(tree);return found;}
 function nested(tree,selection,E){const outer=single(tree,selection,E),inner=outer&&power(outer.base);return inner?{outer,inner}:null;}
 function base(tree,selection,E){const t=chosen(tree,selection,E);if(!t)return null;if(t.type==='power')return t.left;let result=null;function walk(n){if(n.type==='power'&&n.left.id===t.id)result=t;if(n.child)walk(n.child);if(n.left){walk(n.left);walk(n.right);}}walk(tree);return result;}
 const api={unwrap,integer,key,power,single,product,quotient,nested,base};global.GatitoExpressionPowers=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
