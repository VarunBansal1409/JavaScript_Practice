// let demo = _ => console.log("hello");  //implict
// console.log(demo);
// demo()

// let demo1 = (a , b) => console.log(a + b);
// console.log(demo1);
// demo1(100 , 100) //200

// let demo2 = _ => {  return "hello" }  //explict
// console.log(demo2);
// console.log(demo2());

// let demo3  = (a , b) => { return a * b }
// console.log(demo3(10 , 10));

// //fun programming using arrow function
// let main = (task) => {
//      console.log(task(10 , 10));
// }

// main((a ,b) => {
//       return a + b
// })

// main((a ,b) => {
//       return a - b
// })

//create a function-programming using arrow function to perform arithmetic operation
// for 3 numbers , and find largest of three numbers but input should be given by 
//end-user.
  

      let m = Number(prompt('Enter the value of m'))
      let n = Number(prompt('Enter the value of n'))
      let o = Number(prompt('Enter the value of o'))

let test = (task) => {
      
      return task(m , n , o)
}  

let p = test(
      (a , b , c) => {
            return(a + b + c);
      }
)
let q = test(
      (a , b , c) => {
            return(a - b - c);
      }
)
let r = test(
      (a , b , c) => {
            return(a * b * c);
      }
)

if(p>q && p>r){
      console.log("add is greater");
}else if(q>p && q>r){
      console.log("sub is greater");
}else{
      console.log("mul is greater");
}

