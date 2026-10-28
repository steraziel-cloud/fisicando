/* Stretch delimiters to their actual contents, including nested fractions. */
window.GatitoExpressionDelimiters=(()=>{
 const closeFor={'(':')','[':']','{':'}'};
 const shapes={
  '(':'M10 1 C1 20 1 80 10 99',')':'M2 1 C11 20 11 80 2 99',
  '[':'M10 1 H3 V99 H10',']':'M2 1 H9 V99 H2',
  '{':'M10 1 C4 1 4 10 4 24 V37 C4 46 2 49 1 50 C2 51 4 54 4 63 V76 C4 90 4 99 10 99',
  '}':'M2 1 C8 1 8 10 8 24 V37 C8 46 10 49 11 50 C10 51 8 54 8 63 V76 C8 90 8 99 2 99'
 };
 function delimiter(symbol){return `<span class="em-delimiter" data-delimiter="${symbol}" aria-hidden="true"><svg viewBox="0 0 12 100" preserveAspectRatio="none" focusable="false"><path d="${shapes[symbol]}"/></svg></span>`;}
 function wrap(open,content,{close=true,attributes='',className=''}={}){return `<span class="em-group ${className}"${attributes}>${delimiter(open)}<span class="em-group-body">${content}</span>${close?delimiter(closeFor[open]):''}</span>`;}
 return{wrap,closeFor};
})();
