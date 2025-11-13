// innerHTML 

let a = document.body
console.log(a);

// a.innerHTML = "<h1>Hello World</h1>"
a.innerHTML += "<h1>Hello World</h1>"
a.innerHTML += " "
a.innerHTML += "plain text"

let b = document.getElementById("demo")
console.log(b);

b.style.border = "5px solid red"
b.style.background = "black"
b.style.color = "#fff"

b.innerHTML += `
                <ol id="demo0">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item4</li>
                <li>item5</li>
                </ol>
            `


// createElement()

let demo1 = document.querySelector("#demo1")
console.log(demo1);
demo1.style.border = "5px solid"


let ol = document.createElement("ol")
console.log(ol);
ol.style.color = "yellow"
ol.style.backgroundColor = "green"
ol.setAttribute("type", "A")
ol.setAttribute("start", "4")


demo1.appendChild(ol)

let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let li4 = document.createElement("li")
let li5 = document.createElement("li")

li1.textContent = "Java"
li2.textContent = "Python"
li3.textContent = "C"
li4.textContent = "C++"
li5.textContent = "R"

ol.append(li1)
ol.append(li2)
ol.append(li3)
ol.append(li4)
ol.append(li5)