// alert('hello world!');

console.log('Jonas')
console.log(23);
let firstName="John";//firstName is a variable 
console.log(firstName);

// _ , $ are only two allowed symbols in javascript
//dATA Types...
/*
Primitive data types
-->Number : all numbers
-->String: ' ' , ""
-->Boolean : true,false
-->Undefined:value for not defined variables
-->Null:empty
-->Symbol(ES2015):value that is unique and cannot be changed
-->BigInt(ES2020):for large integers
** Javascript is dynamic typed lang.
*/

let jsIsFun=true;
console.log(jsIsFun);
console.log(typeof(jsIsFun));
console.log(typeof 23);
console.log(typeof 'Jordan');
jsIsFun="Javascript";
console.log("jsIsFun type is ",typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null); //returns object which is considered as bug
//let and const are introduced in ES6 whereas var is part of old code.

//let- block scoped 
//var - function scoped
//we should not create variable without let,const or var because js will create variable at global level...

/* ----------------------Operators----------------------------
Arithmetic Operators
Assignment Operators
TypeOf Operator

*/

let x=10;
x+=5;
console.log(x);
//Comparion Operators
console.log(5>4);

//Operator Preference....
//String template literals....
const firstNameConst="Jones";
const job='Coder';
const bio="I'm "+firstNameConst +" and I'm a "+job;
console.log(bio);

//below is a example of template literals it came to existence with ES6.
const bioJones=`I'm ${firstNameConst} and I'm a ${job}` ;
console.log(bioJones);

//we can write multiline strings using template literals `.
const multiLineString=`Writinig things on 
multi lines
element`;
console.log(multiLineString);

//Decision Making...
let votingAge=18;
let currentAge=17;
if(currentAge>=votingAge)
{
    console.log("Eligible!!✅");//windows+. for emogi
}
else{
    const yearsLeft=votingAge-currentAge;
    console.log(`Not eligible❎!! Wait for ${yearsLeft}yr`);
}


//type conversion- it is explicit conversion done by us.
//type coercion is implicit conversion done by js.
let n='1'+1;//'11'
n=n-1;
console.log(n);

//truthy values and falsy values...
//5 falsy values: 0,'',undefined,null,NaN
//everything else is truthy..

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));

console.log(`Empty Object is truthy ${Boolean({})}`)

//Equality Operators...
const ageNew=18;
if(ageNew===18)//Here type coercion not happening .. strict equality check.
{
    console.log("Age is 18");
}

const stringAge='18';
if(stringAge==18)//loose equality operator.. type coercion happens here
{
    console.log("Eligible to vote!!");
}

// const promptValue=Number(prompt("Enter a number"));
// if(promptValue===5)
// {
//     console.log(`cool number`);
// }else{
//     console.log(`Not a cool number!!`);
// }
// if(promptValue!==9)//strict not equal operator...
// {
//     console.log("Why not 9?");
// }
//Boolean Logic -- && - AND , || - OR ,!- NOT  

console.log(true && true);
console.log(true && false);
console.log(true||false);
console.log(false || false);
console.log(!false);

//Switch Statement...
const day="monday";
switch(day){
    case 'monday'://day==='monday'
        console.log(`Monday is for planning...`);
        break;
    case 'tuesday':
        console.log(`tuesday is spiritual day`);
        break;
    case 'wednesday':
        console.log(`Wednesday I will eat more`);
        break;
    case 'thursday':
        console.log(`thursday is for coding`);
        break;
    case 'friday':
        console.log(`turning on weekend mode on friday`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`saturday & sunday is to learn new things and code`);
        break;
    default:
        console.log(`not a valid day!`);
        break;
}

//Statement and Expresssion
//3+4 , 112 , true && false , !false all are expression expression produce values..
//if else , switch these are statements..

//Conditional or Ternary Operator..

ageNew>=18?console.log("age is valid to drink 🍻"):console.log('drink soda 🥤');

//using strict mode---








































