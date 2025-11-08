//eg:1

demo()  //hosisting
function demo()
{
    console.log("hello world");
}
demo()
demo()
demo()
console.log(demo);

//eg:2
function sum(a , b)
{
    let c = a + b;
    console.log(c);
}
sum(10 , 10) //20
sum(100 + 100 , 100) //300

// console.log(a);//reference error


//eg:3

// function demo1()
// {
//     let a = Number(prompt("enter a value"))
//     let b = Number(prompt("enter b value"))
//     let c = Number(prompt("enter c value"))

//     if(a >= b && a >= c)
//     {
//         console.log(a+" is grater");
//     }else if(b >= a && b >= c)
//     {
//         console.log(b+" is gratest");
//     }else{
//         console.log(c+" is gtarest");
//     }
// }
// demo1()

//eg:4

console.log(demo2());  //hoistsing
function demo2()
{
    let sum = 0;
    for(let i=0; i<=10; i++)
    {
        sum+=i;
    }
    console.log("hii");
    return sum
    console.log("hello");
    
}
console.log(demo2());  //hii 55 

//-----------function expression--------------

//fun() //hosisting not possible (ReferenceError)
let fun = function()
{
    console.log("hello world");   
}
fun()
console.log(fun);

let oddEven = function()
{
    for(let i=0; i<=10; i++)
    {
        if(i % 2  == 0)
        {
            console.log(i+" :is a even number");

        }else{
            console.log(i+" : is a odd number");
            
        }
    }
}
oddEven()

//-----------------this keyword---------------

var a1 = 10;
function demo5()
{
    var a1 = "hello"
    console.log(a1); //hello
    console.log(a1); // hello
    console.log(this.a1); //10
}
demo5()

console.log(window);
console.log(this);

let b1 = 100;
const c1 = 200;
var a2 = 500
function demo6()
{
    let b1 = "ramu"
    const c1 = "kumar"
    console.log(b1); //ramu
    console.log(c1); //kumar
    console.log(this.b1);  //undefined
    console.log(this.c1);   //undefinded
    console.log(this.a2); //500   
}
demo6()

//create a function declaration and function expression to perform 
//arithmetic operation for two number and input should be give by the end-user.
