'use strict';

//Default parameters...

function add(a=5,b=4){
    return a+b;
}
console.log(add());
console.log(add(2,3));
console.log(add(undefined,9));
