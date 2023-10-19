'use strict';

//Default parameters...

function add(a=5,b=4){
    return a+b;
}
console.log(add());
console.log(add(2,3));
console.log(add(undefined,9));

//pass by value and pass by reference...
const flight='LH234';
const jonas={
    name:'Jonas Schemdtmann',
    passenger:343252352
};

const checkIn=function(flightNum,passenger){
    flightNum='LH214';
    passenger.name='Mr. '+passenger.name;
}
checkIn(flight,jonas)
console.log(flight);
console.log(jonas);//since objects are passed by reference its original value will also change...
//Note: Javascript doesn't have pass by reference it only has pass by value...
//when we pass an object we pass it's memory location value and not it acts as reference...
