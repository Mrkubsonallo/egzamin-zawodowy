function zdj(elem)
{
    if(elem.id == "pies1")
        elem.src = "materialy5-6/pies1-odbicie.jpg"
    else if(elem.id == "pies2")
        elem.src = "materialy5-6/pies2-odbicie.jpg"
    else if(elem.id == "pies3")
        elem.src = "materialy5-6/pies3-odbicie.jpg"
    else if(elem.id == "kot")
        elem.src = "materialy5-6/kot1-odbicie.jpg"
}

function zdj_rev(elem)
{
    if(elem.id == "pies1")
        elem.src = "materialy5-6/pies1.jpg"
    else if(elem.id == "pies2")
        elem.src = "materialy5-6/pies2.jpg"
    else if(elem.id == "pies3")
        elem.src = "materialy5-6/pies3.jpg"
    else if(elem.id == "kot")
        elem.src = "materialy5-6/kot1.jpg"
}

function zdj_click(elem)
{
    let zdj = document.getElementById("zdj")
    if(elem.id == "pies1")
        zdj.src = "materialy5-6/pies1.jpg"
    else if(elem.id == "pies2")
        zdj.src = "materialy5-6/pies2.jpg"
    else if(elem.id == "pies3")
        zdj.src = "materialy5-6/pies3.jpg"
    else if(elem.id == "kot")
        zdj.src = "materialy5-6/kot1.jpg"
}