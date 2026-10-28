/* A repeating block marks the existing trailing decimal digits. */
(function(global){
 function decimal(value){const m=String(value).match(/^(\d+)[.,](\d*)(?:\((\d+)\))?$/);if(!m||!(m[2]||m[3]))return null;return{integer:m[1],digits:m[2]+(m[3]||''),period:m[3]||''};}
 function withPeriod(value,period){const n=decimal(value);if(!n)throw Error('Seleziona un numero decimale.');if(!/^\d{1,80}$/.test(period))throw Error('Inserisci le cifre del periodo.');if(!n.digits.endsWith(period))throw Error('Il periodo deve coincidere con le cifre finali del numero selezionato.');return n.integer+','+n.digits.slice(0,-period.length)+'('+period+')';}
 const api={decimal,withPeriod};global.GatitoExpressionDecimals=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
