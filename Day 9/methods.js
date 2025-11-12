// documnet.getElementById()

let a = document.getElementById("demo")
console.log(a);
console.dir(a)
console.log(a.textContent);
a.textContent = "hello world"
a.style.textAlign ="center"
a.style.backgroundColor = "red"

// console.log(document);

// documnet.getElementByClassName()

let b = document.getElementsByClassName("demo2")
console.log(b);
console.log(b[1]);
b[1].style.textDecoration = "underline";
b[1].style.textAlign = "center"

console.log(b[0]);
b[0].textContent = "excelr"

// documnet.getElementByTagName()

let c = document.getElementsByTagName("span")
console.log(c); //htmlCollection[]
console.log(c[1]);
c[1].style.color = "blue"
c[1].style.border = "2px solid"
c[1].style.marginLeft = "100px"
console.log(c[0]);
c[0].textContent = "hello world"

let arr = [10,20,30,40]
console.log(arr);
console.log(Array.isArray(arr)); //true

console.log(Array.isArray(c)); //false

//convert htmlCollection[] into array type
let res = Array.from(c)
console.log(Array.isArray(res)); //true

//documnet.getElementByName()

let e = document.getElementsByName("demo3")
console.log(e); //nodeList[h1 , h2]
console.log(e[1]);
console.log(e[1].textContent);
e[1].textContent = "hello"

//document.querySelctor()
//-->will gives referemce of first element
//-->pass the value with css symboll

let res1 = document.querySelector("#demo")
console.log(res1);

let res2 = document.querySelector(".demo2")
console.log(res2);
console.log(res2.textContent);

let res3 = document.querySelector("h1")
console.log(res3);

let res4 = document.querySelector("*")
console.log(res4);

//document.querySelectorAll()
//-->it will gvies reference in nodeList
//-->pass the value with css symboll

let res5 = document.querySelectorAll("#demo")
console.log(res5); //nodeList[h1]
console.log(res5[0]);

let res6 = document.querySelectorAll(".demo2")
console.log(res6); //nodeList[p, h2]

let res7 = document.querySelectorAll("*")
console.log(res7); //nodeList[html , head , meta , title , body , ]
console.log(res7[4]);
console.log(res7[4].textContent);














