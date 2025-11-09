// //fun-programming using fun-declarartion
// // eg:-1
function main(task)
{
   console.log(task);
   console.log(task());
   
}
main(function(){
    return "iam call back fun1"
})

main(function(){
    return "iam call back fun2"
    
})

// //fun-programming using fun-expression

// // eg:2

let main1 = function(task1 , task2)
           {
                console.log(task1);
                console.log(task2);
                task1()
                task2()
           }

// main1(function(){
//     console.log("iam cbf1");
// } , function(){
//     console.log("iam cbf2");
    
// })

// function demo(a)
// {
//    console.log(a);
//    console.log(arguments); //10
//    console.log(arguments[3]); //40
//    console.log(arguments[1]); //20
// }
// demo(10 , 20 , 30 , 40) 

// //fun-programming using fun-declaration
function operation(task)
{
      console.log(task(10 , 10));
      
}
operation( function(a,b){
            return a + b;
        } )

operation( function(a , b){
            return a - b
        } )

operation( function(a , b){
             return a * b;
        } )


//------------------------------------------------------------


var a = Number(prompt("enter a value"))
var b = Number(prompt("enter b value"))
function operation(task)
{
     return task(a,b)
      
}
operation( function(a,b){
            console.log(a + b);
            
        } )

operation( function(a , b){
            console.log(a - b);
            
        } )

operation( function(a , b){
            console.log(a * b);
            
        } )



function operation(task)
{
    return task()     
}   
operation(function(){
            var a = Number(prompt("enter a value for add"))
            var b = Number(prompt("enter b value for add"))
            console.log(a + b);
        } )

operation( function(a , b){
            var a = Number(prompt("enter a value for sub"))
            var b = Number(prompt("enter b value for sub"))
            console.log(a - b);
            
        } )

operation( function(a , b){
              var a = Number(prompt("enter a value for mul"))
            var b = Number(prompt("enter b value for mul"))
            console.log(a * b);
            
        } )

    