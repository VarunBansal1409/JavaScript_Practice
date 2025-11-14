// let btn = document.querySelector("#btn")
// console.log(btn);

// let flag = false

// btn.onclick = () => {
//     let img = document.querySelector("img")
//     console.log(img);

//     if(flag === false){
//         flag = true 
//         img.style.visibility = "hidden"
//         btn.textContent = "Make it Visible"
//     }else{
//         flag = false
//         img.style.visibility = "visible"
//         btn.textContent = "Make it In-visible"
//     }
// }

// Using toggle()

let btn = document.querySelector("#btn")
console.log(btn);

btn.onclick = () => {
    let img = document.querySelector("img")
    console.log(img);

    // img.classList.add("demo")
    // img.classList.remove("demo")

    let res = img.classList.toggle("demo")
    if(res){
        img.style.visibility = "hidden"
        btn.textContent = "Make it Visible"
    }else{
        img.style.visibility = "visible"
        btn.textContent = "Make it In-visible"
    }
}












let btn1 = document.querySelector("#btn1")
console.log(btn1);

btn1.onclick = () => {
    let video = document.querySelector("video")
    console.log(video);

    let res = video.classList.toggle("demo")
    if(res){
        video.play()
        btn1.textContent = "Pause"
    }else{
        video.pause()
        btn1.textContent = "Play"
    }
}













let form = document.querySelector("form")
console.log(form);

form.onsubmit = (z) => {
    
    z.preventDefault()

    let user = document.getElementById("username").value
    console.log(user);
    let pass = document.getElementById("password").value
    console.log(pass);
    
    if(user === "admin" && pass === "admin@123"){
        window.open("http://www.flipkart.com")
    }else{
        window.location.reload()
    }
}











let btn2 = document.getElementById("btn2")
console.log(btn2);

btn2.onclick = () => {
    let ol = document.querySelector("ol")
    console.log(ol);

    let res = ol.classList.toggle("demo")
    if(res){
        ol.style.transform = "translateX(0)"
        ol.style.transitionDuration = "500ms"
    }else{
        ol.style.transform = "translateX(-250px)"
        ol.style.transitionDuration = "500ms"
    }
}

let bxr = document.getElementsByClassName("bxr")
console.log(bxr[0]);

bxr[0].onclick = () => {
    let ol = document.querySelector("ol")
    console.log(ol);
    ol.style.transform = "translateX(-250px)"
    ol.style.transitionDuration = "500ms"
}
