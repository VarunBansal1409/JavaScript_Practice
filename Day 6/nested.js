function outer()
{
    console.log("iam outer function");
    function inner()
    {
        console.log("iam inner function");
    }
    inner()
}
outer()

// eg:2

console.log("start");

function parent()
{
    let a = 10;
    function child()
    {
        console.log(a);
    }
    child()
}
parent() //10

var m = 100;
let n = 200;
function parent1()
{
    console.log(m); //100
    console.log(n); //200   
}
parent1() 