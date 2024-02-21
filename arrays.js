//methods are functions attached to objects.. arrays methods are same.. arrays are object and methods are functions attached to them
let arr=['a','b','c','d','e'];

//slice
console.log(arr.slice(2));//slice returns a new array after extracting from existing array.
console.log(arr.slice(2,4));//end parameter will not be included
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice());//shallow copy of array...
console.log([...arr]); // shallow copy using spread operator.

//SPLICE
//-->it works same as slice but it does mutate the original array.
console.log(arr.splice(2));//elements starting from 2 index will be returned and they will also be removed from original array.
console.log(arr);//left over elements will be returned from array


//REVERSE
//-->it reverses the elements returs result as array and mutates the original array.
arr=['a','b','c','d','e','f'];
console.log(arr.reverse());
console.log(arr);


//CONCAT
//-->it concats two arrays but doesn't mutate any original array.
const letters=arr.concat(['g','h']);
console.log(letters)

//JOIN
//--> it joins all the elements of array into string by putting character provided between them.
console.log(letters.join('-'));

//THE NEW AT METHOD
//at --> Works like index to get elements present at a location.
const ar=[23,11,54];
console.log(ar[0]);
console.log(ar.at(0));

//at can work with -ve indexes.. 
console.log(ar.at(-1));//[-1] won't work ,for method chaining and calling elements from back we should use at method. 

//at works on string also.
console.log("jonas".at(-1));

//Looping over array using foreach loop..

const movements=[200,450,-400,3000,-650,-130,70,1300];
for(const mov of movements){
    if(mov>0){
        console.log(`You deposited ${mov}`);
    }
    else{
        console.log(`You withdrew ${mov}`);
    }
}

console.log('iterating using forEach method---------------------');
movements.forEach(function(movement,index,arr){ // forEach method passes values, index and the whole array while calling a call back method.
    if(movement>0){
        console.log(`You deposited ${movement}`);
    }
    else{
        console.log(`You withdrew ${movement}`);
    }
})


//forEach with maps and sets....

const currencies=new Map([
    ['USD','United States Dollar'],
    ['EUR','Euro'],
    ['GBP','Pound']
]);

currencies.forEach(function(value,key,map){
    console.log(`${key} ${value}`);
});

//Set
const uniqueCurrenices=new Set(['USD','GBP','USD','EUR','GBP']);
console.log(uniqueCurrenices);

uniqueCurrenices.forEach(function(value,key,set){
    console.log(`${key} ${value} `)
});


//map method 
//-->creates a new array based on original array. Map takes an array and takes a callback method for each iteration.
const mapArr=[1,2,3,4,5];
console.log(mapArr.map(function(value){
    return value*2;
}))

//filter method
//-->used to filter elements in original array which statisfies a condition and creates a new array of result. 
console.log(mapArr.filter(function(value){
    return value%2==0;
}))

//Reduce method..
//--> it boils down all array elements to one single value, for example adding all elements together.
let sum=0;
console.log(mapArr.reduce(function(prevValue,curValue){
    sum+=curValue;
    return sum;
}));
console.log(sum);

//method chaining of map ,filter and reduce...

console.log(mapArr.filter(value=>value%2!=0).map(value=>value*2).reduce((prevValue,curValue)=>prevValue+curValue));


//find method...
//-->it loops over an array and finds the first element which satisfies the condition.

console.log(mapArr.find(value=>value%2==0));

//findIndex Method..

console.log(mapArr.findIndex(value=>value==2));

//includes method to test whether array contains that value.
console.log(mapArr.includes(3)); //returns boolean .

//some method to test something above or below based on condition , it will return boolean.
console.log(mapArr.some(value=>value>2)); // returns true;

//every method tests condition on every element of array and returns true if every element satisfies the condition or false if any element fails the condition.
console.log(mapArr.every(value=>value>0));

//flat method
//--> it will flat or pull all the elements from sub array and create a single array with all these elements.
const flatArr=[[1,2,3],[3,5,7,8,9]];
console.log(flatArr.flat()); // no need for any callback it will flat the array.

const flatArr2=[[1,2,[3,4]],[8.9,56]];
//flat method takes one argument that is depth till which the array needs to be flattend.

console.log(flatArr2.flat(2));
console.log(flatArr2.flat(Infinity))//We can pass infnity to flatten the array to the very deep.

//flatMap --> below we have array of student object so we can flatten the scores by passing callback using flatMap.
const studentObj=[{
    'name':'Max',
    'scores':[12,54,67,91]
},
{
   'name':'Tod',
    'scores':[30,85,67,91] 
}
]
console.log(studentObj.flatMap(st=>st.scores));

//Sorting arrays...
const arrStr=['Jonas','Max','Adam','Tod','Martha'];
console.log(arrStr.sort());//sort method mutates the original array ...Also sort method does sorting based on strings.
console.log(arrStr);//will get mutated sorted array...

let negativeNums=[-1300,-200,-500,300,200,-100,5000];
//console.log(negativeNums.sort());

//passing callback in sort to get correct output for negative numbers...
//below we have descending order sorting..
console.log(negativeNums.sort((a,b)=>{
    if(a>b){    //if a > b and we don't want to sort then we can pass -1.
        return -1;
    }
    if(b>a){
        return 1;
    }

}))
console.log(negativeNums);

//ascending order sorting,..
console.log(negativeNums.sort((a,b)=>{
    if(a>b){    //if a > b and we want to sort then we can pass 1.
        return 1;
    }
    if(b>a){
        return -1;
    }

}))

//Creating and filling arrays...
console.log([1,2,3,4,5,6,7]);
console.log(new Array(1,2,3,4,5,6,7,8,9,10,11));
console.log(new Array(7)); //it will create empty array with 7 positions.

let x=new Array(7);
x.fill(99);//fill will put value entered in the whole array...
console.log(x);
x.fill(3,2,5); // 2 - is begin index and 5 -  is end index.
console.log(x);

//Array.from 
let z=Array.from({length:7},(cur,i) => (i+1));
console.log(z);
//Array.from can be used to create arrays while DOM manipulation by reading the node list.