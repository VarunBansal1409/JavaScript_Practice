// Simple if

let a = 5;

if(a <= 10)
{
    console.log(`${a} is lesser`);
}

// if else

let a1 = 50;

if(a1 <=10)
{
    console.log(`${a1} is lesser`);
}
else{
    console.log(`${a1} is greater`);
}

// check whether the number is positive or negative

let b = 10;
if(b >= 0){
    console.log(`${b} is a positive number`);
}
else{
    console.log(`${b} is a negative number`);
}

// prompt --> used to take the input from the end user
            // window.prompt

            // let m = Number(prompt("enter m value"));
            // let n = Number(prompt("enter n value"));
            // let o = m + n
            // console.log(`The sum of ${m} and ${n} = ${o}`);
 
            
 // find the largest number 100 200 300

 let a3 = 100;
 let b3 = 200;
 let c3 = 300;

 if(a3>b3 && a3>c3){
    console.log(`${a3} is greatest`);
 }
 else if(b3>a3 && b3>c3){
    console.log(`${b3} is greatest`);
 }
 else{
    console.log(`${c3} is greatest`);
 }

//  If the given character is a vowel or not

let a4 = b;

if((a4 === 'a') || (a4 === 'e') || (a4 === 'i') || (a4 === 'o') || (a4 === 'u') || (a4 === 'A') || (a4 === 'E') || (a4 === 'I') || (a4 === 'O') || (a4 === 'U')){
    console.log(`${a4} is a vowel`);
}
else{
    console.log(`${a4} is not a vowel`)
}

// Check the given input is a uppercase, lowercase, digit or special character

let a5 = 'b';

if(a5>='a' && a5<='z'){
    console.log(`${a5} is a lowercase`);
}
else if(a5>='A' && a5<='Z'){
    console.log(`${a5} is a uppercase`);
}
else if(a5>='0' && a5<='9'){
    console.log(`${a5} is a digit`);
}
else{
    console.log(`${a5} is a special character`);
}

// nested if

let user = "admin";
let password = "admin@123";

if(user === "admin"){
    console.log("user is valid");
    if(password === "admin@123"){
        console.log("password is valid");
        console.log("login sucessfull");
    }
    else{
        console.log("password is in-valid");
        console.log("login un-sucessfull");
    }
    
}
else{
    console.log("user is in-valid");
    console.log("login un-sucessfull");
}

// Check if the gender male or female is eligible for voting if the age is above 18

let gender = "male";
let age = 19;

if(gender === "male"){
    console.log("gender is male");
    if(age >= 18){
        console.log("the given age is eligible for voting");
    }
    else{
        console.log("the given age is not eligible for voting");
    }
}
else{
    console.log("gender is female");
    if(age >= 18){
        console.log("the given age is eligible for voting");
    }
    else{
        console.log("the given age is not eligible for voting");
    }
}

// Switch statement

let count = 1;
switch (count) {
    case 1:
        console.log("1");
        break;

    case 2:
        console.log("2");
        break;
    
    case 3:
        console.log("3");
        break;
    
    default:
        console.log("in-valid value");
}

// check for days and sports

let day = "sunday";

switch (day)
{
    case "monday" :
    case "tuesday":
        console.log("cricket");
        break;

    case "wednesday" :
    case "thursday" :
        console.log("vollyball");
        break;

    case "friday" : 
    case "saturday" :
        console.log("football");
        break;

    default:
        console.log("it's a holiday");
}