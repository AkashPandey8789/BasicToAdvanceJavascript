'use strict';
//Destructuring Arrays....
const restaurant={
    name:'Classico Italiano',
    location:'Via Angelo Tavanti 23,Firenze Italy',
    categories:['Italian','Pizzeria','Vegetaian','Organic'],
    starterMenu:['Focaccia','Bruschetta','Garlic Bread'],
    mainMenu:['Pizza','Pasta','Risotto'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23
        },
        sat:{
            open:0,
            close:24
        }
    },
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
