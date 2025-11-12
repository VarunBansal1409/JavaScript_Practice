let ol = document.getElementById("demo")
console.log(ol);

//firstElemntChild
let a = ol.firstElementChild
console.log(a);
console.log(a.textContent);
a.style.backgroundColor = "red"
a.textContent = "footer"

//firstChild
let b = ol.firstChild
console.log(b);
console.log(b.textContent);
// b.style.color = "red"

//lastElementChild
console.log(ol.lastElementChild);

//lastChild
console.log(ol.lastChild);

//nextElementChild
console.log(ol.firstElementChild.nextElementSibling);


//nextSibling
console.log(ol.firstElementChild.nextSibling);

//previousElementSibling
console.log(ol.firstElementChild.nextElementSibling.previousElementSibling);

//previousSibling
console.log(ol.firstElementChild.nextElementSibling.previousSibling);

//children
console.log(ol.children); //htmlCollection[li , li ,li ,li]

//childNodes
console.log(ol.childNodes); //nodeList[text , li , text , li ,text , li , text ,li ,text]

//parentElemnt
console.log(ol.parentElement.parentElement);

//parentNode
console.log(ol.parentNode.parentNode.parentNode);



console.log(ol.nextElementSibling.firstElementChild);
