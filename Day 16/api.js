 //target table tag
let table = document.getElementById("table")
console.log(table);

window.fetch("https://api.github.com/users")
.then((res) => res.json())  //convert response into array of object (json() method)
.then((data) => {               //promise chaining
    console.log(data);
    //iterate using map()
    data.map((x) => {
       console.log(x);
       console.log(x.id);
       console.log(x.login);
   
   //create row append to table

   let tr = `
                <tr>
                   <td>${x.id}</td>
                   <td>${x.login}</td>
                   <td><img src=${x.avatar_url}  /></td>
                </tr>
            `
     table.innerHTML += tr
    
    })
}) 
.catch(() => {
    console.log("error occured");
})

