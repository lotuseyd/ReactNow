let navToggleCont = 0
let numArgument = document.querySelectorAll(".sideMenuArument")
let expA = document.querySelectorAll(".expArgument")

for (let i = 0 ; i < 2; i++) {
    numArgument[i].addEventListener('click' , function(){
        for(let k=0;k<2; k++){
            numArgument[k].style.backgroundColor = "transparent"
            expA[k].style.display = "none"
        }
        numArgument[i].style.backgroundColor = "#61DAFB"
        expA[i].style.display = "block"
    }, false) ; 
}

numArgument[0].click()

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
