var navToggleCont = 0

function navToggler(x) {
    var md = document.querySelector("#menuDiv")
    var bar1 = document.querySelector(".bar1")
    var bar2 = document.querySelector(".bar3")
    var mbtn = document.querySelector(".navbar-toggler")

    navToggleCont++
    if(navToggleCont%2==0){
        md.style.display = "none"
        bar1.style.backgroundColor = "white"
        bar2.style.backgroundColor = "white"
        document.body.style.overflow = "visible"
    }else{
        document.body.style.overflow = "hidden"
        md.style.display = "block"
        md.style.zIndex = "10"
        bar1.style.backgroundColor = "#212529"
        bar2.style.backgroundColor = "#212529"
        mbtn.style.zIndex = "11"
    }
    x.classList.toggle("change");
}

function mainBtnOver(){
    var btn = document.querySelector("#mainBtn")
    var btnOutline = document.querySelector("#mainBtnOuterLine")
    var arrow = document.querySelector(".fa-arrow-right")

    btn.style.backgroundColor = "#A0E9FD"
    btnOutline.style.top = "0"
    btnOutline.style.left = "0"
    arrow.style.animationName = "Nessuna"
}

function mainBtnOut(){
    var btn = document.querySelector("#mainBtn")
    var btnOutline = document.querySelector("#mainBtnOuterLine")
    var arrow = document.querySelector(".fa-arrow-right")

    btn.style.backgroundColor = "white"
    btnOutline.style.top = "10px"
    btnOutline.style.left = "10px"
    arrow.style.animationName = "anime-arrow"
}
