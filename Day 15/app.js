//rest parameter

//in function will use ... in parameter side (rest parameter)

function demo(a , ...b )
{
    console.log(a);  //10
    console.log(b);
    console.log(b[2]);
    
    
}
demo(10 , 20 , 30 , 40)

//spread operator

//we pass ... in the argument side will call it has a spread operator

let arr = [10 , 20 , 30 , 40]
console.log(arr);

console.log(...arr);


let str = "hello"
console.log(str);
console.log(...str);

//how to convert string into array
//1)split()
//2)Array.from()
//3)by using sprad operator

console.log([...str]);



console.log(typeof console.log); //function

//deep copy and shallow copy 

//deep copy
let arr1 = [10 , 20 , 30 , 40]
console.log(arr1);

let arr2 = arr1
console.log(arr2);

arr2[4]=50
console.log(arr2);
console.log(arr1);

//shallow copy

let arr3 = [10 , 20 , 30 , 40]
console.log(arr3);

let arr4 = [...arr3]
console.log(arr4);

arr4[4] = 50
console.log(arr4);
console.log(arr3);

//object de-structure
let obj = {
    id : 1,
    name : "abhi"
}
console.log(obj);

const {id , name , designation = "data not found"} = obj
console.log(id);
console.log(name);
console.log(designation);

const {...res} = obj  //rest paramter
console.log(res);
console.log(res.id);
console.log(res.name);

let arr6 = [10 , 20 , 30 , 40]
console.log(arr6);

let [ a , b , c , d ] = arr6
console.log(a);
console.log(b);
console.log(c);
console.log(d);

let btn = document.getElementById("btn")
console.log(btn);

btn.addEventListener("click" , () => {
    let res = window.navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          let {latitude , longitude} = position.coords //obj de-structure
          console.log(latitude , longitude);

          let maps = `https://www.google.com/maps/place/${latitude},${longitude}`
          console.log(maps);
          window.open(maps)  
    })
    console.log(res);
    
})













