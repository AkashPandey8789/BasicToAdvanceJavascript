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

//First-Class functions and Higher Order Functions...
//Javascript treats functions as First-class citizens
//that means functions are simply values..
//functions are just another 'type' of object..

//we store functions in variables..

const adder=(a,b)=>a+b;
const counter={
    countVal:23,
    incrementer:function(){this.countVal++;}

}

//we can pass function into another function's parameter like we do in addEventLister..

//Higher order functions...
//A function that receives another function as an argument that returns a new function or both.
//This is only possible because of first-class function

//-----Both of the below functions are            *Higher Order Function*
//function that receives another function...
//function that returns a new function 

