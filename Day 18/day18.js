//call()

let obj  = {
    name : "abhi"
}

function demo()
{
    console.log(this);
    console.log(this.name);
    
}
demo.call(obj)

let obj1 = {
    a : 1,
    b : 2
}

function demo1(c , d)
{
    console.log(this);
    console.log(this.a + this.b + c + d);
    
}
demo1.call(obj1 , 10 , 10)

//Apply()

let obj2 = {
    name : "anil"
}

function demo2()
{
    console.log(this);
    console.log(this.name);
    
}
demo2.apply(obj2)

let obj3 = {
    a : 10,
    b : 10
}

function demo3(c,d)
{
    console.log(this);
    console.log(this.a + this.b + c + d);
    
}
demo3.apply(obj3 , [10 , 10])


let obj4 = {
    name : "kumar"
}

function demo4()
{
    console.log(this);
    console.log(this.name);
    
}
let res = demo4.bind(obj4)
console.log(res);
res()

let obj5 = {
    a : 10,
    b : 10
}

function demo5(c, d) {
   console.log(this);
   console.log(this.a + this.b + c + d);
   
}
let y = demo5.bind(obj5 , 10 , 10)
y()

localStorage.setItem("name" , "abhi")
localStorage.setItem("id" , 100)

console.log(localStorage.getItem("name"));

localStorage.removeItem("name")

localStorage.clear()

sessionStorage.setItem("name" , "excelr")
sessionStorage.setItem("id" , 101)

console.log(sessionStorage.getItem("name"));

sessionStorage.removeItem("name")

sessionStorage.clear()

document.cookie  = "username = ramu "


function* demo6()
{
    yield(1)
    console.log("start");
    yield(2)
    console.log("excelr");
    yield(3)
    console.log("end");
}
let res1 = demo6()
console.log(res1.next().value);
console.log(res1.next().value);
console.log(res1.next());
console.log(res1.next());


function* main()
{
    let i = 1
    while(true)
    {
        yield i++;  
    }
}
let res2 = main()
console.log(res2.next());
console.log(res2.next());






