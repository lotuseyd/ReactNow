let navToggleCont = 0
let cardBtnText = "Guarda ora"

let url = 'https://raw.githubusercontent.com/Palarvind03/ReactNow/main/json/progetti.json';
let projectsContainer = document.querySelector(".progettiContainer")
let animeIndex = 0
let anime = ""

fetch(url)
.then(res => res.json())
.then((out) => {
    for (progetto of out) {
        animeIndex++
        if(animeIndex==1){
            anime = "cardAnimetion1"
        }else if(animeIndex==2){
                anime = "cardAnimetion2"
            }else{
                anime = "cardAnimetion2"
            }
        cardHeader = document.createElement("div")
        cardHeader.setAttribute("class","card-header")
        cardHeader.innerText = progetto.titolo
    
        cardTitle = document.createElement("h4")
        cardTitle.setAttribute("class","card-title")
        cardTitle.innerText = progetto.semiTitolo

        cardBadge = document.createElement("span")
        if(progetto.difficolta=="Facile"){
            cardBadge.innerText = "Facile"
            cardBadge.setAttribute("class","badge bg-success")
        }else if(progetto.difficolta=="Mediocre"){
                cardBadge.innerText = "Mediocre"
                cardBadge.setAttribute("class","badge bg-warning")  
            }else if(progetto.difficolta=="Difficile"){
                    cardBadge.innerText = "Difficile"
                    cardBadge.setAttribute("class","badge bg-danger")  
                }else{
                    cardBadge.innerText = progetto.difficolta
                    cardBadge.setAttribute("class","badge bg-info")  
                }

        cardTitle.appendChild(cardBadge)

        cardText = document.createElement("p")
        cardText.setAttribute("class","card-text")
        cardText.innerText = progetto.descrizione

        cardBtn =  document.createElement("a")
        cardBtn.setAttribute("class","btn btn-dark")
        cardBtn.setAttribute("data-bs-toggle","modal")
        cardBtn.setAttribute("data-bs-target","#myModal")
        cardBtn.innerText = cardBtnText


        cardBody = document.createElement("div")
        cardBody.setAttribute("class","card-body")
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(cardBtn)

        card = document.createElement("div")
        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        card.classList.add('card',anime)
        projectsContainer.appendChild(card)
        setTimeout("", .1)
    }
})
.catch(err => { throw err });

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
