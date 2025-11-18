let btn = document.getElementById("btn")
console.log(btn);

//target div tag
let container = document.getElementById("container")
console.log(container);
btn.addEventListener("click" , async () => {
    let search = document.getElementById("search").value
    console.log(search);
   
    let per_page = 30

    if(search === "")
    {
        window.alert("enter any image name")
        return ;
    }
    
    let data = await window.fetch(`https://pixabay.com/api/?key=38192665-2d3ab1349b930bd3f02761df2
        &q=${search}&image_type=photo&pretty=true&per_page=${per_page}`)
    // console.log(data);

    //convert array buffer to array of objects using json()
    let res = await data.json()
    // console.log(res);
    // console.log(res.hits);

    //implement object de-structre
    let {hits} = res
    console.log(hits);
    
    //iterate array of objects using map() method
    hits.map((x) => {
        console.log(x);
        console.log(x.largeImageURL);

        //create a img tag

        let image = ` <img src=${x.largeImageURL}   />`

        //append img tag to container (div tag)
        container.innerHTML += image
        
    })
  
    
} )
