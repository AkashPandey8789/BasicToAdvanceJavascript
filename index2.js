'use strict';
//strict mode help write secure code..we can also use strict mode for a particular block/function.
//strict mode creates visible errors,without strict mode console error logging will not happen.
let hasDriverLicense=false;
const passTest=true;

if(passTest){
    hasDriverLicense=true;
}
if(hasDriverLicense)console.log('I can drive');

function logger(){
    console.log("My name is Akash!");
}
//calling / running /invoking function
logger();

function fruitProcessor(apples,oranges)
{
    console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and  ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5,3));

console.log(Number('23'))
//* function declaration vs Expressions */\
console.log(calcAge1(1990));//function declartion func can be used before its decalartion also...
function calcAge1(birthYear){
    return (2023-birthYear);
}

console.log(calcAge1(2000));

//function expression ( function are a value in javascript) used to store function in a variable
const calcAge2=function(birthYear){
    return 2023-birthYear;
}
console.log(calcAge2(1999));

//Arrow functions...(added to javascript in ES6 ), arrow func doesn't have this keyword.
const calcAge3=birthYear=>2023-birthYear;
console.log(calcAge3(1997));

const yearsUntilRetirement=birthYear=>{
    const age=2023-birthYear;
    const retirement=60-age;
    return retirement>0?retirement:0;
}

console.log(`retirement age = ${yearsUntilRetirement(1999)}`);

//calling function inside function..

const cutPieces=function(fruit){
    return fruit*4;
}

function fruitProcessorJuice(apple,orange){
    const applePieces=cutPieces(apple);
    const orangePieces=cutPieces(orange);

    const Juice=`Juice with ${applePieces} pieces of apple and 
    ${orangePieces} pieces of oranges.`;
    return Juice;
}
console.log(fruitProcessorJuice(2,3));
console.log(yearsUntilRetirement(1960));

//Arrays -- arrays are like container where we can store a bunch of data
const fruits=['Apples','Oranges','Banana'];
console.log(fruits);

const years=new Array(1997,1999);
console.log(years[0]);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);
fruits[2]='Peach';//setting the elements in array , we can mutate array even though it is decalared with const, but we can't set a whole new array to the variable fruits that will throw error.
console.log(fruits);
const data=['John',23,['Address','Chennai']];
console.log(data);

const birthYears=[1990,1960,1970,1998];
//we cannot use arithmetic operator directly on the array..

//Basic array operations /array methods..
birthYears.push(1966);
birthYears.unshift(1900);
console.log(birthYears[birthYears.length-1]);
birthYears.forEach(b=>console.log(b));
console.log(birthYears.pop());
console.log(birthYears.includes(1966));


//Objects 
const person={
    name:'Sonak',
    age:32,    //below details is an object method...
    details:function(){
        console.log(`${this.name} is ${this.age}yrs old!!`);
    },
    retirementCalc:function(age){
        this.retirement=60-age;
        console.log(60-age)
    }
};

console.log(person.name);
console.log(person['name']);// incase of using bracket we need to pass string
person.details();

// const propertyNeeded=prompt('What you want , age or name of person?');
// console.log(person[propertyNeeded])
//to add new property..

person['job']='software engineer';
person.school='LPU';
console.log(person);

//*Object methods---
person.retirementCalc(32);
console.log(person.retirement);

//***loops---
for(let i=1;i<=10;i++){
    console.log(`Lifting the weight rep ${i} 🏋️`);
}

fruits.forEach(i=>console.log(i));

//continue(continue will move to the next execution of code) and break(break will break the loop)
for(let i =0;i<data.length;i++)
{
    if(typeof data[i]!='string') continue;
    console.log(data[i] , typeof data[i]);
}
//looping backward

for(let i=data.length-1;i>=0;i--){
    console.log(data[i]);
}
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=5-i;j++)
    {
        console.log('*');
    }
    console.log('\n');
}
//**while loop  */

let dice=Math.trunc(Math.random()*6)+1;
console.log(`dice = ${dice}`);
while(dice!=6)
{
    console.log(`dice = ${dice}`);
    dice=Math.trunc(Math.random()*6)+1;
    if(dice==6)console.log(`loop will die now...`);
}
do{
    let dice=Math.trunc(Math.random()*6)+1;
    console.log(` dice in do is ${dice}`);
}
while(dice!=6);

















































































































