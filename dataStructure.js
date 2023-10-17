'use strict';
//Destructuring Arrays....

//we can compute property names for the objects
const weekDaysProp=['thu','fri'];
const weekend=['sat','sun'];
const openingHoursObj={
        [weekDaysProp[0]]:{
            open:12,
            close:22,
        },
        [weekDaysProp[1]]:{
            open:11,
            close:23
        },
        [weekend[0]]:{   //here we need to put the property in [] otherwise it will throw error
            open:0,
            close:24
        }
    };
const restaurant={
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23,Firenze Italy',
    categories:['Italian','Pizzeria','Vegetaian','Organic'],
    starterMenu:['Focaccia','Bruschetta','Garlic Bread'],
    mainMenu:['Pizza','Pasta','Risotto'],
    openingHours:openingHoursObj,
    order:function(starter,mainCourse)
    {
        return [this.starterMenu[starter],this.mainMenu[mainCourse]];
    },
    //below we are doing object destructuring in function argument..
    orderDelivery:function({starterIndex=1,mainIndex=0,time='20:00',address})
    {
        console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} by ${time}`);
    },
    orderPasta:function(ing1,ing2,ing3){
        console.log(`Here is your pasta with ${ing1} , ${ing2} and ${ing3}`);

    }
}

const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];

const [x,y,z]=arr;//destructuring of array...
console.log(x,y,z);
const [first,second]=restaurant.categories;
console.log(first,second);
const [f,,t]=restaurant.categories;//to skip an element we need to leave a empty place `, ,`. 
console.log(f,t);

//We can use destructuring of array to swap two variables..
let v1=2,v2=4;
[v1,v2]=[v2,v1]
console.log(v1,v2);

const [starter,mainCourse]=restaurant.order(2,0);
console.log(starter,mainCourse);

//Destructuring in nested array...
const nested=[2,4,[5,6]];
const [i,,j]=nested;
console.log(i,j);
//like below we can do destructuring inside destructuring
const [m,,[n,p]]=nested;
console.log(m,n,p);

//Setting Default Values in destructuring..
const [k=1,l=1,o=1]=[8,0];
console.log(k,l,o);

//Destructuring Objects...
const {name,openingHours,categories}=restaurant;
console.log(name,openingHours,categories);

const{name:restaurantName,openingHours:Hours,categories:tags}=restaurant
console.log(restaurantName,Hours,tags);

//setting default values..
const {menu=[],starterMenu:starters=[]}=restaurant;
console.log(menu,starters);

//mutating or swapping variables..

let aVar=111;
let bVar=999;
const obj={aVar:23,bVar:7,c:12};
({aVar,bVar}=obj);
console.log(aVar,bVar);
//nested objects destructuring....

const {fri:{open:O,close:C}}=openingHours;
console.log(O,C);


//destructuring object in function parameter..
restaurant.orderDelivery({
    time:'22:30',
    address:'Val del 22 3',
    mainIndex:2,
    starterIndex:2
})

restaurant.orderDelivery({
    address:'Val del 22 3',
})

restaurant.orderDelivery({
    address:'Val del 22 3',
    mainIndex:2,
})

//Spread operator.. it is ES6 feature.
//Spread operator is used to unpack an array..

const num=[7,8,9];

const newArr=[1,2,...num];
console.log(newArr);
//shallow copy of array using spread operator..
const mainMenuCopy=[...restaurant.mainMenu]
console.log(mainMenuCopy);
mainMenuCopy[2]='X';
console.log(restaurant.mainMenu);
//join two array..
const menuMerge=[...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menuMerge);

//Iterables: arrays,strings,maps,sets but not objects
//spread operator works on all iterables.
const str='King';
console.log([...str,'a']);
// const ingredients=[prompt('Let\'s make pasta ingredient1?'),prompt('Let\'s make pasta ingredient2?'),prompt('Let\'s make pasta ingredient3?')]
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);


//we can use spread operator make copy of objects also...
const newRestaurant={...restaurant,founder:'king'};
console.log(newRestaurant);


//Rest pattern , when we use ... on left side.
const[r,s,...others]=[1,2,3,4,5,6];
console.log(r,s,others); //rest creates as a new array

const{sat , ...weekDays}=restaurant.openingHours;
console.log(sat,weekDays);

//rest parameters..
const add=function(...nums){
    console.log(nums);
    let sum=0;
    nums.forEach(i=>{sum=i+sum})
    console.log(`sum ${sum}`);
}
add(2,3);
add(5,74754,74,6745,7457,56,47);
const Array=[1,32,5,6,7,54];
add(...Array); //first spread will give each num and then rest will make it array.

//looping in array-----
const menuArray=[...restaurant.starterMenu,...restaurant.mainMenu];

for(const item of menuArray)console.log(item);

//to get the index also using for of loop---
for(const item of menuArray.entries()){
    console.log(item);
}

//Enhanched Object literals-------

//Three ways to write object literals
//in ES6 we don't need to write both same property name in object and value..
const address={
    streetName:'16 Tower',
    houseNo:12,
    city:'TM'
}
const personDetails={
    firstName:'Sam',
    lastName:'King',
    age:31,
    address, //just writting address will work , we don't need to write address:address...(ES6 feature)

    //below is the way of writting methods in ES6... We can omit function keyword from the function expression and directly we can write like below...
    printDetails(){
        console.log(` Full name : ${this.firstName} ${this.lastName} , age : ${this.age} lives at ${address.city}`);
    }
}
console.log(personDetails);
personDetails.printDetails();

//Optional Chaining....(?.)
//if certain property doesn't exist it will return undefined... we will not get error
console.log(restaurant?.openingHours?.mon?.open);
//real life example for optional chaining...
const days=['mon','tue','wed','thu','fri','sat','sun'];
for(const day of days){
    const open=restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day} restaurant is ${open}`);
}
//optional chaining will mostly be used with nullish operator...
const user=[];
console.log(user[0]?.name ?? 'array is empty');


//Looping over objects...
for(const days of Object.keys(openingHoursObj)){
    console.log(days);
}
for(const openHours of Object.values(openingHoursObj)){
    console.log(openHours);
}
//below we are doing destructuring of value , first array destructuring and then object destructuring...
for(const [key,{open,close}] of Object.entries(openingHoursObj)){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//Sets--
const ordersSet=new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Pasta',
    'Rasam'
]);
//set will return unique values only...
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.delete('Rasam');
//there are no indexes in set we cannot retrive elements on the basis of index like we do in array.
console.log(ordersSet);
//we can loop through set using  below for of loop 
for(const order of ordersSet)
{
    console.log(order);
}
//use case of set is to remove duplicate values...
ordersSet.clear();//will delete all elements of set..
//to check how many different letters are there in string..
console.log(new Set('johfsfnwefnw').size);//we can directly pass string to create Set as we just need to pass any iterables..


//Maps in javascript...
//In maps we can store key value pair.. where key and value both can be anything..

const rest=new Map();
//adding new element to map..
rest.set('name','Classico Italiano');
rest.set(1,'Firenze Italy');
//set method updates the map and also returns the map...
console.log(rest.set(2,'test item'));
//since set returns the updated map we can call set again on that , chaining can be done..
rest.set('categories',['Italian','Pizzeria','Vegetaian','Organic']).set('open',11).set('close',23);
console.log(rest);

//We can use get to get the value...
console.log(rest.get('categories'));
//to check wether map contains certain key..
console.log(rest.has('categories')); //true

//deleting an item from map..
rest.delete(2);
console.log(rest);
//map also has size keyword
//rest.clear(); // method to clear whole map ...
console.log(rest.size);

const aarr=[1,2];
rest.set(aarr,'Test');
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);
console.log(arr);
console.log(rest.get(document.querySelector('h1')));

//--------------------Maps Iteration---------------

//below is another way to populate map...
//we can just pass multi array and it will work...
const question=new Map([
    ['question','What is the best programming language in the world?'],
    [1,'C'],
    [2,'Java'],
    [3,'Javascript'],
    ['correct',3],
    [true,'Correct 🎉'],
    [false,'Wrong ❌']
]);

//convert object to maps..
console.log(openingHours)
console.log(Object.entries(openingHours));

const openingHoursMap=new Map(Object.entries(openingHours));
console.log(openingHoursMap);

console.log(`Q: ${question.get('question')}`);
for(const [key,value] of question){
    if(typeof key ==='number')
    {
        console.log(`Answer ${key}:${value}`);
    }
}

const numb=Number(prompt('Enter the correct answer:'));
console.log(numb);
(numb===question.get('correct'))?console.log(`${question.get(true)}`):console.log(`${question.get(false)}`);

//converting map to array...
console.log(...question);