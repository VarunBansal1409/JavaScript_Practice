//by using literal way

let obj = {
 // key  : value pair
    id : 1,
    name : "ramu",
    boolean : true ,
    null : null,
    undefined : undefined ,
    arr : [10 , 20 , 30],
    demo : () => console.log("hello world"),
    obj1 : {
              designation : "developer"
           }
    
}
console.log(obj);
console.log(obj.id);
console.log(obj.arr);
console.log(obj.arr[0]);
console.log(obj.demo);
obj.demo()
console.log(obj.obj1);
console.log(obj.obj1.designation);

//by using construcor function

function demo(id , name)
{
    this.id = id  // to target current object
    this.name = name
}
let p1 = new demo(1 , "ramu")
console.log(p1);
console.log(p1.name);

let p2 = new demo(100 , "kuamr")
console.log(p2);

//methods of object

let main = {
    id : 1,
    name : "abhi"
}
console.log(main);

//add new key and value pair
main.designation = "developer"
console.log(main);

//update existing keys value.
main.id = 100;
console.log(main);

//delete key and value
delete main.designation
console.log(main);

//print only keys
console.log(Object.keys(main));

//print only values
console.log(Object.values(main));

//Object.assign(target , source) used to concat more than two object

let main1 = {
    comapny : "excelr"
}

console.log(Object.assign(main , main1));

//Object.entries() used to convert object into array data type
console.log(Object.entries(main));

//Object.seal()
//we can update existing key's value we can't add new key and value and we can't
//  delete key and value

let bank = {
    accNo : 123456789 ,
    pinCode : 12345
}
console.log(bank);

Object.seal(bank)

console.log(Object.isSealed(bank));

bank.pinCode = 8888;  //updated existing key value
console.log(bank);

bank.name = "ramu"; //we can't create new key and value
console.log(bank);

delete bank.accNo  //we can't delete key and value pair
console.log(bank);

//Object.freeze()
//we cann't update existing key's value we can't add new key and value and we can't
//  delete key and value

let bank1 = {
    name : "ramu" ,
    accNo : 123456789,
    pinCode : 1234
}
console.log(bank1);

Object.freeze(bank1)

console.log(Object.isFrozen(bank1));

bank1.lname = "kumar" //we cann't add new key and value
console.log(bank1);

bank1.name = "lilla"  //we can't update existing key's value
console.log(bank1);

delete bank1.name  // we can't delete key and value
console.log(bank1);

//Object.create() //it will create copy of an object (prototype)

let a = {
    name : "ramu",
    id  : 100
}
console.log(a);

let res = Object.create(a)
console.log(res);










