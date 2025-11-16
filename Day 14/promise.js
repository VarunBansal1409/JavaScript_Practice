function main(m,n)
{
    new Promise((resolve , reject) => {

    setTimeout(() => {

        if(isNaN(m) || isNaN(n))
        {
            return reject()
        }

        for(let i=m; i<=n; i++)
        {
            if(i%2 ===0)
            {
                console.log(`even numbers --> ${i}`);
            }else{
                console.log(`odd numbers --> ${i}`);
                
            }
        }

        return resolve()
    } , 2000)
    

})
.then(() => console.log("async is successfull"))  //promise chaining
.then(() => console.log(5+5))
.then(() => console.log(5*5))
.catch(() => console.log("error occured"))
}
// main(1 , "10a")
main(1 ,10)

function sample()
{
    console.log("no's printed");
}
sample()