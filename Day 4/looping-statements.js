// for loop

            // starting number 1
            // starting number 5

for(i=1; i<=5; i++){
    console.log(i);
}

            // starting number 5
            // starting number 1

for(i=5; i>=1; i--){
    console.log(i);
}

            // start 0
            // end 10

for(i=0; i<=10; i+=2){
    console.log(i);
}

//iterate hello in vertical

let str = "shiva"

    //find the length of the string
    console.log(str.length); // --> length of the string
    console.log(str.length - 1); // --> length of the index of the string

for(i=0; i<str.length; i++){
    console.log(str[i]);
}
    
    
// while loop

let a = 1;

while(a <= 5){
    console.log(a);
    a++
}

// do while loop

let j = 10;

do{
    console.log(j);
    j++
}while(j <= 20)


// nested for loop

for(i=1; i<=2; i++){
    console.log(`outer loop = ${i}`);
    
    for(j=0; j<=3; j++){
        console.log(`inner loop = ${j}`);
    }
}