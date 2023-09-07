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

//*****Nullish Coalescing Operator (??).
let guestsVar; //nullish values are null and undefined only. Not 0, ''
const res=guestsVar ?? "No guest found";
console.log(res);


//Logical assignment operator
//|| assignment - if the variable is falsy it will assign the value;
let numGuest;
numGuest||=10;
console.log(numGuest);

//nullish assignment operator--if the current value is nullish then it will assign the value...
let numGuest1;
numGuest1??=20;
console.log(numGuest1);
// && assignment operator-it will assign the value only when the current value is truthy..
let numGuest2;
numGuest2 &&=10;
console.log(numGuest2);//since numGuest2 was undefined so it will not be assigned 10.