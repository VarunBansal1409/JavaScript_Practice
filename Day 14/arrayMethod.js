//create an array using literal way

let a = [10 , "hello" , null , undefined , 1n , true]
console.log(a);
console.log(a[5]);

let b = [10 , 20 , 30 , 40]
console.log(b);
console.log(b[1]);

//create an array using new keyword
let c = new Array(10 , 20 , 30)
console.log(c);


//array methods

let arr = [10 , 20 , 30 , 40 , 40]
console.log(arr);

//find length of an array (length property)
console.log(arr.length); //4

//indexOf() it returns an index of an  particular element.
console.log(arr.indexOf(10)); //0
console.log(arr.indexOf(40)); //3
console.log(arr.indexOf(100)); //-1

//lastIndexOf()
console.log(arr.lastIndexOf(40)); //4

//add element at the end of an array
//push()

let arr1 = [10 , 20 , 30]
console.log(arr1);
arr1.push(40)
console.log(arr1);

arr1.push(50,"hello")
console.log(arr1);

//remove element from the end of an array
//pop()
arr1.pop()
console.log(arr1);

arr1.pop()
console.log(arr1);

//unshift()
//used to add more than one more element at the starting of an array
arr1.unshift("hello" , 5)
console.log(arr1);

//shift()
//used to remove an element from the starting of an array
arr1.shift()
console.log(arr1);

arr1.shift()
console.log(arr1);

//slice()
//used to create a new array from the original array
//synatx :- slice(start-index , end-index)

let arr2 = [10 , 20 , 30 , 40]
console.log(arr2);
console.log(arr2.slice(0,3));
console.log(arr2.slice(0));

//splice()
//used to modify an array
//synatx :- splice(start-index , delete count , add item)

let arr3 = [10 , 20 , 30 , 40 , 50]
console.log(arr3);

arr3.splice(0 , 2 , "hello")
console.log(arr3);

arr3.splice(1 , 2 , "java scrpit")
console.log(arr3);

//join()
//used to add special symbol for each element present in a array
let arr4 = [10 , 20 , 30]
console.log(arr4);
console.log(arr4.join('+'));

//reverse()
//used to reverse an array
let arr5 = [10 , 20 , 30 , 40]
console.log(arr5);
console.log(arr5.reverse());

//reverse an string
let str = "hello"
console.log(str);

let res = str.split("")
console.log(res);
console.log(res.reverse().join(""));

//concat()
//used to more than two arrays

let arr6 = [10 , 20]
console.log(arr6);

let arr7 = [100 , 200]
console.log(arr7);

console.log(arr6.concat(arr7));

//isArray()
//used to check wheather it is array or not and returns boolean
console.log(Array.isArray(arr6)); //true
console.log(Array.isArray(str)); //false

//from()
//used to convert any datatype into array data type

//note :- convert string into array
//       1)split()
//       2)from()

let str1 = "hello"
console.log(str1);
console.log(Array.from(str1));

//sort()
//used to sort an array based on ascending order or desencing order
//sort() HOF (it will accept CBF)

let arr8 = [50 , 40, 10 , 30 , 20]
console.log(arr8);
console.log(arr8.sort());

let arr9 = [1000 , 1 , 50 , 100]
console.log(arr9);
console.log(arr9.sort((a,b) => {return a - b}));
console.log(arr9.sort((a,b) => {return b - a}));

//note : in Array we have higher order methods
//sort()
//forEach()
//map()
//filter()
//reduce()

let arr10 = [10 , 20 , 30 , 40]
console.log(arr10);

//print index value of array
// 0 , 1 , 2 , 3 

for(let i=0; i<arr10.length; i++)
{
    console.log(i);
    console.log(arr10[i]) ;
    
}

//for in loop (used to print only index values)
for(let ele in arr10)
{
    console.log(ele)
}

//for of loop (used to print only items present in array)

for(let ele of arr10)
{
    console.log(ele);
}

//want to iterate index and values at a time
//forEach()

let arr11 = [10 , 20 , 30 , 40]
console.log(arr11);

arr11.forEach((value ,index) => {
     console.log(`${value} ---> ${index}`);
})

//map()
//used to modify an array and retruns an new array

let arr12 = [10 , 20 , 30 , 40]
console.log(arr12);

let res1  = arr12.map((value) => {
     return value + 10
})
console.log(res1);
[20 , 30 , 40 , 50]

//filter()
//used to filer an array based on condition and return new array

let arr13 = [10 , 20 , 30 , 40]
console.log(arr13);

let res3 = arr13.filter((value) => {
    return value > 10
})
console.log(res3);  //[20, 30, 40]

//reduce()
//used to find total sum of an array

let arr14 = [10 , 20 , 30 , 40] //10+20+30+40 = 100

let res4 = arr14.reduce((preValue , curValue) => {
    return preValue + curValue
},10)
console.log(res4); //110

// find()
// --> it is used to get the element from the depth of an array

let arr15 = [[[10]]]
console.log(arr15.flat(Infinity));


//some()
//every()
//find()
//flat()
//flatMap()























