// //setTimeOut()

// window.setTimeout(() => {
//     console.log("iam setTimeOut");
// } , 2000)

// //setInterval()
// window.setInterval(() => {
//     console.log("iam setInterval");
// } , 3000)

//synchronous behaviour

// function main(m,n)
// {
//     for(let i=m; i<=n; i++)
//     {
//         console.log(i);
//     }
// }
// main(1 , 10000)

// function sample()
// {
//     console.log("no's printed");
// }
// sample()

//Asynchronous behaviour

// function main(m,n)   //convert main fun into asynchornous
// {
//     setTimeout(() => {
//         for(let i=m; i<=n; i++)
//         {
//             console.log(i);
//         }
//     } , 5000)
// }
// main(1,10)
// // main(1,"10a")  //in this siutation Asynchronous will not work 

// function sample()
// {
//     console.log("no's printed");
// }
// sample()

//promise

// let res  = new Promise((resolve , reject) => {

// })
// console.log(res);

//eg:1

let room = false

    new Promise((resolve , reject) => {

    if(room === true)
    {
        return resolve()
    }else{
        return reject()
    }
})
.then(() => {
    console.log("room is cleaned");
})
.catch(() => {
    console.log("room is not clean");
})
.finally(() => {
    console.log("code is completed");
    
})

function demo()
{
   new Promise((resolve , reject) => {

    setTimeout(() => {

        if(window.navigator.onLine === true)
        {
            return resolve()
        }else{
            return reject()
        }

    } , 5000)

   })
   .then(() => {
    console.log("user is onLine ...😊😊");
   })
   .catch(() => {
    console.log("user is offline ...!");
   })
   .finally(() => {
    console.log("completed");
   })
}
demo()

function main(m,n)
{
    new Promise((resolve , reject) => {
        setTimeout(() => {
            if(isNaN(m) || isNaN(n))
            {
                return reject()
            }

            for(let i=m; i<=n ;i++)
            {
                console.log(i);
            }
            return resolve()

        } , 2000)

    })
    .then(() => console.log("Asynchronous executed successfully"))
    .catch(() => console.log("error occured"))
    .finally(() => console.log("execution is completed"))
}
// main(1 , 10)
main(1 , "10a")

function sample()
{
    console.log("no's printed");
    
}
sample()

// Number.isNaN()

let a = isNaN('10a')
console.log(a);

let b = isNaN(10)
console.log(b);
