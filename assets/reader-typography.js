/* Keep mathematical division legible in text and dynamically generated feedback. */
document.addEventListener('DOMContentLoaded',()=>{
 const root=document.querySelector('.rm-reader-column');if(!root)return;
 function format(){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];
  while(walker.nextNode()){
   const node=walker.currentNode,parent=node.parentElement;
   if(node.data.includes('÷')&&parent&&!parent.closest('script,style,input,textarea,select,math,svg,.rm-division-sign'))nodes.push(node);
  }
  for(const node of nodes){const parts=node.data.split('÷'),fragment=document.createDocumentFragment();parts.forEach((part,i)=>{if(i){const sign=document.createElement('span');sign.className='rm-division-sign';sign.textContent='÷';fragment.append(sign);}if(part)fragment.append(document.createTextNode(part));});node.replaceWith(fragment);}
 }
 format();const observer=new MutationObserver(format);observer.observe(root,{subtree:true,childList:true,characterData:true});
});
