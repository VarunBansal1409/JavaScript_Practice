let a = prompt("Color");
let btn = document.getElementById("btn")
btn.textContent = `${a}`
btn.style.backgroundColor = `${a}`

btn.onmouseover = () =>{
    document.body.style.backgroundColor = `${a}`
    document.body.style.transition = "ease all 2s"
}



// let ta1 = document.getElementById("ta1")
// let ta2 = document.getElementById("ta2")

// ta1.onkeyup = () => {
//     // console.log(ta1.value);
//     // console.log(ta1);
//     ta2.value = ta1.value
// }