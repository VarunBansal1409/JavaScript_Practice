let gp = document.getElementById("grand_parent")
console.log(gp);

gp.addEventListener("click" , (e) => {
    e.stopImmediatePropagation()
    e.target.style.backgroundColor = "yellow"
    console.log("grand_parent clicked");
    
} , false)


let parent = document.getElementById("parent")
console.log(parent);

parent.addEventListener("click" , (f) => {
    f.stopImmediatePropagation()
    f.target.style.backgroundColor = "blue"
    console.log("parent clicked");
    
} , false)

let child = document.getElementById("child")
console.log(child);

child.addEventListener("click" , (a) => {
    a.stopImmediatePropagation()
    a.target.style.backgroundColor = "red"
    console.log("child clicked");
    
} , false)


// let gp = document.getElementById("grand_parent")
// console.log(gp);

// gp.addEventListener("click" , (e) => {
//    e.stopImmediatePropagation()
//     console.log("grand_parent clicked");
    
// } , true)


// let parent = document.getElementById("parent")
// console.log(parent);

// parent.addEventListener("click" , (f) => {
//    f.stopImmediatePropagation()
//     console.log("parent clicked");
    
// } , true)

// let child = document.getElementById("child")
// console.log(child);

// child.addEventListener("click" , (a) => {
//   a.stopImmediatePropagation()
//     console.log("child clicked");
    
// } ,  true)

let demo = document.getElementById("demo")
console.log(demo);

demo.addEventListener("click" , (e) => {
    if(e.target.tagName == "LI")
    {
        e.target.style.backgroundColor = "yellow"
        console.log("child clicked");
        console.log(e.target.textContent);
        if(e.target.textContent === "item3")
        {
            e.target.textContent = "excelr"
        }
        
    }
})


