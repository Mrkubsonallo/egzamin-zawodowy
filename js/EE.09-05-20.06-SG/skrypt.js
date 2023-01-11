let result = document.getElementById("wynik")

let short = document.getElementById("krotkie")
let medium = document.getElementById("srednie")
let halflong = document.getElementById("poldlugie")
let long = document.getElementById("dlugie")

function send(){
    if(short.checked)
        result.innerHTML = short.value
    else if(medium.checked)
        result.innerHTML = medium.value
    else if(halflong.checked)
        result.innerHTML = halflong.value
    else if(long.checked)
        result.innerHTML = long.value
}