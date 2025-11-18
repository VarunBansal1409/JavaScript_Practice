//async and await keyword
//--> to avoid promise chaining

//how to use async and await

/*
async function demo()
{
        await
        await
        await
}
        */

/*
let demo1 = async function()
                  {
                        await
                        await
                        await
                   }
*/

/*
let demo2 = async () => { 
        await
        await
        await
}
        */


let main = async () => {
      let data =  await window.fetch("data.json")
      console.log(data);
      //converting array buffer to array of object using json()
      let res = await data.json()
      
      console.log(res);

      //use map() to iterate array of object
      res.map((x) => {
        console.log(x);
        console.log(x.country);

        let country = document.getElementById("country")
        console.log(country);
        
        let option = `<option value=${x.country} >${x.country}</option>`
        //append option tag to select tag
        country.innerHTML += option

        //target datalist tag
        let country1 = document.getElementById("country1")
        console.log(country1);
        country1.innerHTML += option
        
      })
      
      
}
main()