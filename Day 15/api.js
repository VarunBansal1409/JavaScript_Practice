let obj = {
    name : "ramu" ,
    id : 10,
    designation : "developer"
}
console.log(obj);

//convert object into json format
let obj1 = JSON.stringify(obj)
console.log(obj1);

//convert json into object
let obj2 = JSON.parse(obj1)
console.log(obj2);
