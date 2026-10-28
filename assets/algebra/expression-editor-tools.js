/* Structural clipboard and vertical navigation for the visual composer. */
(function(global){
 const fields=['top','bottom','base','exponent','prefix','period'];
 function children(node){return node.type==='seq'?node.items.map((n,index)=>({node:n,key:'items',index})):fields.filter(key=>node[key]).map(key=>({node:node[key],key}));}
 function path(root,id,ancestors=[]){if(root.id===id)return [...ancestors,{node:root}];for(const child of children(root)){const found=path(child.node,id,[...ancestors,{node:root,key:child.key,index:child.index}]);if(found)return found;}return null;}
 function slots(n){return n.type==='slot'?[n]:children(n).flatMap(c=>slots(c.node));}
 function vertical(root,id,direction){const route=path(root,id)||[];for(let i=route.length-2;i>=0;i--){const {node,key}=route[i];if(node.type==='fraction'&&((direction>0&&key==='top')||(direction<0&&key==='bottom')))return slots(node[direction>0?'bottom':'top']);if(node.type==='power'&&((direction<0&&key==='base')||(direction>0&&key==='exponent')))return slots(node[direction<0?'exponent':'base']);}return [];}
 function clone(node,nextId){const copy=structuredClone(node);function visit(n){n.id=nextId();delete n.sourceId;for(const child of children(n))visit(child.node);}visit(copy);return copy;}
 function fromMath(tree,nextId,holeId=null){let hole=null;const slot=value=>({type:'slot',id:nextId(),value}),seq=items=>({type:'seq',id:nextId(),items});
  function field(n,label){const result=n.type==='seq'?n:seq([n]);if(result.items.length===1&&result.items[0].type==='slot'){result.items[0].required=true;result.items[0].label=label;}return result;}
  function convert(t){const result=convertNode(t);result.sourceId=t.id;return result;}
  function convertNode(t){if(t.id===holeId){hole=slot('');hole.required=true;return hole;}if(t.type==='literal')return convert(t.child);if(t.type==='variable')return slot(t.value);if(t.type==='number'){const m=t.value.match(/^(\d+[.,]\d*)\((\d+)\)$/),n=slot((m?m[1]+m[2]:t.value).replace('.',','));if(m)n.repeatLength=m[2].length;return n;}if(t.type==='fraction')return{type:'fraction',id:nextId(),fractionInk:structuredClone(t.fractionInk),top:field(convert(t.left),'Numeratore'),bottom:field(convert(t.right),'Denominatore')};if(t.type==='power')return{type:'power',id:nextId(),base:field(convert(t.left),'Base'),exponent:field(convert(t.right),'Esponente')};if(t.type==='group')return seq([{type:'symbol',id:nextId(),value:t.style},convert(t.child),{type:'symbol',id:nextId(),value:{'(':')','[':']','{':'}'}[t.style]}]);if(t.unary)return seq([{type:'symbol',id:nextId(),value:'−'},convert(t.right)]);if(t.implicit)return seq([convert(t.left),convert(t.right)]);return seq([convert(t.left),{type:'symbol',id:nextId(),value:t.op},convert(t.right)]);}
  const n=convert(tree);return {root:n.type==='seq'?n:seq([n]),hole};
 }
 // Find a coefficient gap at the beginning of a literal part. Cross a base
 // of a power so the new coefficient goes before x², not inside (coefficient·x)².
 function coefficientPosition(root,id,pos){const route=path(root,id),leaf=route?.at(-1)?.node;if(pos!==0||leaf?.type!=='slot'||!/^[A-Za-z]/.test(leaf.value))return null;let candidate=null;
  for(let i=route.length-2;i>=0;i--){const {node,key,index}=route[i];if(node.type==='seq'){if(index>0){const previous=node.items[index-1];return previous.type==='symbol'&&['+','−','-','·','÷','(','[','{'].includes(previous.value)?{parent:node,index}:null;}candidate={parent:node,index:0};}else if(node.type==='power'&&key==='exponent')return null;else if(node.type==='fraction')return candidate;}
  return candidate;
 }
 const api={children,path,slots,vertical,clone,fromMath,coefficientPosition};global.GatitoExpressionEditorTools=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
