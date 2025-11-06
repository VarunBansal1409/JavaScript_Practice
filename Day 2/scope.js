"use strict"

console.log("start")

// global scope

var a = 10;
console.log(a); //10

//local scope / script scope

let b = 20;
console.log(b); //20

const c = 30;
console.log(c); //30

//block scope

{
    var m = 100;
    console.log(m);

    let n = 200;
    console.log(n);

    const o = 300;
    console.log(o);

}

// a1 = 500;
// console.log(a1);


console.log(true + true);
console.log(true + false);
console.log(true + null);

(undefined) ? console.log(true) : console.log(false);
(NaN) ? console.log(true) : console.log(false);
(0) ? console.log(true) : console.log(false);
(null) ? console.log(true) : console.log(false);
(false) ? console.log(true) : console.log(false);