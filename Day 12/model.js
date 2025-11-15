let btn = document.getElementById("btn")
console.log(btn);

btn.onclick = () => {
    let model = document.getElementById("model")
    console.log(model);
    let res = model.classList.toggle("demo")
    if(res)
    {
        model.style.display = "block"
    }else{
        model.style.display = "none"
    }
}

let nav = document.getElementById("nav")
console.log(nav);

nav.onclick = () => {
    let model = document.getElementById("model")
    console.log(model);
    model.style.display = "none"
}
