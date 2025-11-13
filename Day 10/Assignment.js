let body = document.body
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.margin = "15px"

let table = document.createElement("table")
table.style.border = "2px solid red"
table.setAttribute("cellpadding" , "20px")
table.setAttribute("cellspacing" , "20px")
body.appendChild(table)

let tr1 = document.createElement("tr")
let tr2 = document.createElement("tr")
let tr3 = document.createElement("tr")
let tr4 = document.createElement("tr")

table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)
table.appendChild(tr4)

let td11 = document.createElement("td")
td11.setAttribute("rowspan" , "2")
let td12 = document.createElement("td")
td12.setAttribute("colspan" , "2")
let td14 = document.createElement("td")

tr1.appendChild(td11)
tr1.appendChild(td12)
tr1.appendChild(td14)

let td22 = document.createElement("td")
let td23 = document.createElement("td")
td23.setAttribute("colspan" , "2")

tr2.appendChild(td22)
tr2.appendChild(td23)

let td31 = document.createElement("td")
let td32 = document.createElement("td")
td32.setAttribute("rowspan" , "2")
let td33 = document.createElement("td")
let td34 = document.createElement("td")

tr3.appendChild(td31)
tr3.appendChild(td32)
tr3.appendChild(td33)
tr3.appendChild(td34)

let td41 = document.createElement("td")
let td43 = document.createElement("td")
let td44 = document.createElement("td")

tr4.appendChild(td41)
tr4.appendChild(td43)
tr4.appendChild(td44)


td11.style.height = "100px"
td12.style.height = "100px"
td14.style.height = "100px"
td11.style.width = "100px"
td12.style.width = "100px"
td14.style.width = "100px"
td11.style.border = "2px solid"
td12.style.border = "2px solid"
td14.style.border = "2px solid"


td22.style.height = "100px"
td23.style.height = "100px"
td22.style.width = "100px"
td23.style.width = "100px"
td22.style.border = "2px solid"
td23.style.border = "2px solid"


td31.style.height = "100px"
td32.style.height = "100px"
td33.style.height = "100px"
td34.style.height = "100px"
td31.style.width = "100px"
td32.style.width = "100px"
td33.style.width = "100px"
td34.style.width = "100px"
td31.style.border = "2px solid"
td32.style.border = "2px solid"
td33.style.border = "2px solid"
td34.style.border = "2px solid"


td41.style.height = "100px"
td43.style.height = "100px"
td44.style.height = "100px"
td41.style.width = "100px"
td43.style.width = "100px"
td44.style.width = "100px"
td41.style.border = "2px solid"
td43.style.border = "2px solid"
td44.style.border = "2px solid"