let btn = document.getElementById("btn")
console.log(btn);

btn.onclick = (a) => {
    let res = Math.round(Math.random() * 1000)
    console.log(res);
    console.log(a);   
}

let btn1 = document.getElementById("btn1")
console.log(btn1);


btn1.onmouseover = (b) => {
       let res = Math.round(Math.random() * 10000).toString(16)
       console.log(res);
       document.body.style.backgroundColor = `#${res}`
       console.log(b);
}
// btn1.onmouseenter = (b) => {
//        let res = Math.round(Math.random() * 10000).toString(16)
//        console.log(res);
//        document.body.style.backgroundColor = `#${res}`
//        console.log(b);
// }
// btn1.onmouseleave = (b) => {
//        let res = Math.round(Math.random() * 10000).toString(16)
//        console.log(res);
//        document.body.style.backgroundColor = `#${res}`
//        console.log(b);
// }

let key = document.getElementById("key")
console.log(key);

key.onkeydown = (c) => {
       let res = Math.round(Math.random() * 10000).toString(16)
       console.log(res);
       document.body.style.backgroundColor = `#${res}`
       console.log(c);
}
// key.onkeyup = (c) => {
//        let res = Math.round(Math.random() * 10000).toString(16)
//        console.log(res);
//        document.body.style.backgroundColor = `#${res}`
//        console.log(c);
// }
// key.onkeypress = (c) => {
//        let res = Math.round(Math.random() * 10000).toString(16)
//        console.log(res);
//        document.body.style.backgroundColor = `#${res}`
//        console.log(c);
// }