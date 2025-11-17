//fetch json data using fetch() method

// let res = window.fetch("data1.json")  //it is a promise
// console.log(res);

window.fetch("data1.json")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    // console.log(data[0]);
    // console.log(data[1]);

    //to iterate json use for loop , for of loop , map() method
    data.map((x) => {
        console.log(x);
        // console.log(x.name);

        let tr = `
                   <tr>
                        <td>${x.id}</td>
                        <td>${x.name}</td>
                        <td>${x.designation}</td>
                        <td><img src="${x.image}"></td>
                   </tr> 
                    `
        
        let table = document.getElementById("table")
        table.innerHTML += tr
    })
    
    
})
.catch(() => {
    console.log("error occured");
    
})