console.log("start");

function parent()
{
    let a = 10;
    function child()
    {
        console.log(a);
    }
    return child
}
parent()()
parent()()
parent()()

function parent1()
{
    function child()
    {
        console.log("iam child function");
         let a = 100;
        function child1()
        {
            console.log("iam child function1");
            console.log(a);
            
        }
        return child1  
    }
    return child
}
parent1()()()

function parent2()
{
    function child1()
    {
        console.log("iam child1 function");
        function child()
        {
            console.log("hello world");
            
        }
        return child
    }

    function child2()
    {
        console.log("iam child2 function");
        
    }

    return [child1 , child2]

}
parent2()[0]()();
parent2()[1]();

// --------------------------------------------

// IIFE

(function()
{
    console.log("hello");
})();

(() => {
    console.log("react");
})();

(function  main(a , b)
{
    console.log("java");
    console.log(a + b);
})(100 , 100);

(function()
{
    var name = "abhi"
    function main1()
    {
    console.log(name);
    }
    main1()

    var a1 = 100;
    function main2()
    {
    let b1 = 200;
    console.log(b1 + a1);
    }
    main2()
})();


let arr = [10 , 20 , 30]
console.log(typeof arr);
console.log(typeof parent2);
console.log(typeof document);
console.log(typeof window);


