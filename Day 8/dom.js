//DOM

console.log(window.document);
console.log(document);

console.log(typeof document); //object
console.dir(document)

//write() and writeln() used to print data on the web-page.

// document.write("hello")
// document.write("hello")
// document.write("hello")
// document.write("hello")
// document.write("hello")

// document.writeln("hello")
// document.writeln("hello")
// document.writeln("hello")
// document.writeln("hello")
// document.writeln("hello")

// document.writeln("<h1>react</h1>")

// document.writeln("<span>hello</span>")
// document.writeln("<span>hello</span>")
// document.writeln("<span>hello</span>")

//dom is having life span --> until page-re loads
//dom tree structure 

//direct access in a DOM
// ========================

console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "flipkart ...😊"
console.log(document.body);

let res = document.links
console.log(res); //htmlCollection[a , a, a]

console.log(res[0]);
console.log(res[2]);

console.log(res.length); //3

console.log("===================");
for(let i=0; i<res.length; i++)
{
    console.log(res[i]);

    res[i].className="demo"
    res[i].id= `demo${i+1}`

    res[i].href="http://www.flipkart.com"
    res[i].target = "_blank"  
}

//target all the image tags
let image = document.images  //htmlCollection[ ]
console.log(image); //htmlCollection[img , img ]
// console.log(image[0]);
// console.log(image[1]);

console.log(image.length);

for(let i=0; i<image.length; i++)
{
    console.log(image[i]);
    image[i].style.height = "200px"
    image[i].style.width = "200px"
    image[i].style.borderRadius = "100px"
    image[i].alt = "animal"  
}

//target forms

document.forms  //htmlCollection[]

/*
create a two forms which consit of username and password and first target the form
provide backgroundImage for that form using dom.
*/







