let a = document.getElementById("demo")
console.log(a);

a.setAttribute("href" , "http://www.pixabay.com")
a.setAttribute("target" , "_blank")
a.setAttribute("alt" , "pixbay")

console.log(a.getAttribute("href"));

a.removeAttribute("target")
     
console.dir(document);
