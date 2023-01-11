let chbox = document.getElementById("chbox")
let right = document.getElementById("right")
let image1 = document.getElementById("image")
let ul = document.getElementById("ul")
let sel = document.getElementById("select")
let size_text = document.getElementById("size_text")

function btn1(){
    right.style.backgroundColor = "Indigo"
}
function btn2(){
    right.style.backgroundColor = "SteelBlue"
}
function btn3(){
    right.style.backgroundColor = "Olive"
}
function select(){
    right.style.color = sel.value
}
function size_fun(){
    right.style.fontSize = size_text.value
}
function checkbox(){
    if(chbox.checked)
        image1.style.border = "solid 1px white"
    else
        image1.style.border = 0
}
function radio1(){
    ul.classList.add("disc")
    ul.classList.remove("square")
    ul.classList.remove("circle")
}
function radio2(){
    ul.classList.remove("disc")
    ul.classList.add("square")
    ul.classList.remove("circle")
}
function radio3(){
    ul.classList.remove("disc")
    ul.classList.remove("square")
    ul.classList.add("circle")
}