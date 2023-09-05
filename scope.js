'use strict';
// console.log(firstName);
function calcAge(birthYear){
    const age=2023-birthYear;
   // console.log(firstName);
   function printAge(){
    const output=`you are ${age},born in ${birthYear}`;
    console.log(output);
    if(birthYear>=1981 && birthYear<=1986)
    {
        var millenial=true;
        const str=`Oh,  and you're a millenial,${firstName}`;
        console.log(str);
        function add(a,b){
            return a+b;
        }
        
    }
    //add(4,5); functions are also block scoped..
    console.log(millenial);
   }
   printAge();
    return age;
}

const firstName='King';
calcAge(1997);
calcAge(1982);

//printAge(); cannot call 


//arguments... keyword

const addExpr=function(a,b)
{
    console.log(arguments);
    return a+b;
}

addExpr(2,5);
addExpr(3,5,7,98,1);
//**************** Primitive vs Objects Reference type..
let age=30;
let oldAge=age;
age=31;
console.log(`age ${age}`);
console.log(`old age ${oldAge}`);

const me={
    name:'Jonas',
    age:30
};
const friend=me;
friend.age=27;
console.log(friend);
console.log(me);
//creating a new object from existing one..
//Object.assign will only do shallow copy any object inside the object will not be newly created it will be a reference to inner object only..
const friendCopy=Object.assign({},me);
friendCopy.name='King';
console.log(friendCopy);
//for deep clone we need to use external library..