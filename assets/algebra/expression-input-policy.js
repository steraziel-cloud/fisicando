/* Mathematical fields use the notebook keypads. Only explicit text entry
   requests a system keyboard. Touch fields stay read-only to the browser,
   while our keypad and a connected physical keyboard can still edit them. */
(function(global){
 'use strict';
 const selector='input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="hidden"])';
 const touch=()=>Number(global.navigator?.maxTouchPoints||0)>0||!!global.matchMedia?.('(any-pointer: coarse)').matches;
 const managed=field=>!!field?.matches?.(selector)&&field.id!=='entry'&&!field.hasAttribute?.('data-native-keyboard');
 function prepare(root=document){const fields=[...(root.matches?.(selector)?[root]:[]),...root.querySelectorAll(selector)];for(const field of fields){if(!managed(field))continue;field.setAttribute('inputmode','none');field.setAttribute('autocomplete','off');field.setAttribute('autocorrect','off');field.setAttribute('spellcheck','false');field.setAttribute('virtualkeyboardpolicy','manual');if(touch()&&!field.disabled){field.readOnly=true;field.dataset.expressionKeypadOnly='true';}}}
 function replace(field,text,start=field.selectionStart??field.value.length,end=field.selectionEnd??start){const max=field.maxLength>0?field.maxLength:2000,room=Math.max(0,max-(field.value.length-(end-start)));field.setRangeText(text.slice(0,room),start,end,'end');field.dispatchEvent(new Event('input',{bubbles:true}));}
 function keydown(event){const field=event.target;if(event.defaultPrevented||!managed(field)||!field.dataset.expressionKeypadOnly||field.disabled||event.isComposing||event.ctrlKey||event.metaKey||event.altKey)return;
  const a=field.selectionStart??field.value.length,b=field.selectionEnd??a;
  if(event.key==='Enter'){if(field.form){event.preventDefault();field.form.requestSubmit();}return;}
  if(event.key==='Backspace'||event.key==='Delete'){event.preventDefault();replace(field,'',a===b?event.key==='Backspace'?Math.max(0,a-1):a:a,a===b&&event.key==='Delete'?Math.min(field.value.length,b+1):b);return;}
  if(event.key.length===1){event.preventDefault();replace(field,event.key);}
 }
 function paste(event){const field=event.target;if(event.defaultPrevented||!managed(field)||!field.dataset.expressionKeypadOnly||field.disabled||!event.clipboardData)return;event.preventDefault();replace(field,event.clipboardData.getData('text/plain'));}
 function cut(event){const field=event.target;if(event.defaultPrevented||!managed(field)||!field.dataset.expressionKeypadOnly||field.disabled||!event.clipboardData)return;const a=field.selectionStart??0,b=field.selectionEnd??a;if(a===b)return;event.preventDefault();event.clipboardData.setData('text/plain',field.value.slice(a,b));replace(field,'',a,b);}
 global.GatitoExpressionInputs={prepare};
 if(typeof document!=='undefined'){
  prepare();
  // Explicit render hooks prepare fields before programmatic focus. The observer
  // also covers fields added by auxiliary labs and future contextual tools.
  new MutationObserver(records=>{for(const record of records)for(const node of record.addedNodes)if(node.nodeType===1)prepare(node);}).observe(document.body,{childList:true,subtree:true});
  document.addEventListener('pointerdown',event=>{if(managed(event.target))prepare(event.target);},true);
  document.addEventListener('focus',event=>{if(managed(event.target))prepare(event.target);},true);
  document.addEventListener('keydown',keydown);
  document.addEventListener('paste',paste);document.addEventListener('cut',cut);
 }
})(typeof window==='undefined'?globalThis:window);
