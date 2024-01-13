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
//Note: Javascript doesn't have pass by reference it only has pass by value , here it passes the memory address as value...
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

//----------------------Functions accepting callback functions------------------------------

const correctCapitalization=function(str){
    return str[0].toUpperCase()+str.slice(1,str.indexOf(' '))+' '+str[str.indexOf(' ')+1].toUpperCase()+str[str]
}

const greeter=function greet(str){
    return function greetWithName(name){
        console.log(`${str} ${name}`);
    }
}

greeter('Hi')('Ramesh')

//**this keyword binding........................ */

const StudentClass={
    name:'Akash',
    Roll:32,
    marks:987,
    displayReport(){
        console.log(`${this.name} with roll ${this.Roll} has marks ${this.marks}` );
    },
    studentAddressLine(ward,street){
        console.log(`${this.name} lives at ${ward} , ${street} `);
    }
}

const stObj=StudentClass.displayReport; // assigning desplayReport method to constVar...
StudentClass.displayReport();
//bellow code doesn't work
//stObj(); // this will throw error because this is undefined over here....

//to make the method work we need to bind this somehow...
//function is nothing but an object..
const objStudent={
    name:'King',
    Roll:31,
    marks:980
}
stObj.call(objStudent);
console.log(stObj.name); //name will give name of function..


//-----------------------bind method--------------------------

//** like call method bind doesn't call the method but it returns a new method with object bound to this keyword of that method...

const studentMethod=stObj.bind(objStudent);
studentMethod();
//scenario ==>we can use bind in result creation we can have the grading system constant defined in method and just bind different students object to generate result/report card.

//we can also set some parameters with bind and also this

const studentAddressMethod=StudentClass.studentAddressLine;
const stdAddress=studentAddressMethod.bind(objStudent,39);
stdAddress('Kanserwa');

//creating school obj....
const schoolObj={
    name:'akps',
    studentCount:200
}
//With Event Listeners
schoolObj.studentCountIncrementor=function(){
    console.log(this);
    this.studentCount++;
    console.log(this.studentCount);
}
//this keyword of the handler function points to the querySelector it is attached to ...
document.querySelector('.addStudent').addEventListener
('click',schoolObj.studentCountIncrementor.bind(schoolObj));//here we are using bind method because we don't want the method to get called immediately... and this way we are updating the this keyword for the method...
//in short bind helps create partial application..

//not only this we can use bind to set other parameters also ,it will help create a whole new method...

//Scenario Tax calculator ...
const taxForEdibles=(rate,values)=>values+(values*rate);

const taxForSpicyEdibles=taxForEdibles.bind(null,0.2);//first parameter of bind is this keyword , here we are setting it null..
const taxForSweetEdibles=taxForEdibles.bind(null,0.9);
const taxForSweetestEdibles=taxForSweetEdibles.bind(null,10);
console.log(`${taxForSpicyEdibles(20)} spicy`);
console.log(taxForSweetEdibles(2));
console.log(taxForSweetestEdibles(2));


//creating bind scenario using function returning other function ... using higher order method 
//below taxForGeneralMaterial method is higher order method
//taxForSpecificeMaterial is first order method...
const taxForMaterial=function taxForGeneralMaterial(rates){
    return function taxForSpecificeMaterial(values){
        return values+values*rates;
    }
}

const taxForMaggii=taxForMaterial(0.2);
console.log(`10 maggi cost ${taxForMaggii(10)} with taxes`);