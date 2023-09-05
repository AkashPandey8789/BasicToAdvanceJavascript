'use strict';
//if the first operand is truthy value it will return that value instead of checking the other value..
console.log(3 || 'Jonas'); // result = 3

console.log(''||'Jonas');//Jonas
console.log(true||0);//true
console.log(undefined || null);//null
console.log(undefined||0||''||'Hello'||23||null);///Hello

//And Operator shortcircuting..
console.log('----------------And----------------');
//and operator shortcircutes when first value is falsy..
console.log(0 && 'Jonas');//0
console.log(3 && 'Jonas');//Jonas
console.log('Hello' && 23 && null && 'Jonas');//null
