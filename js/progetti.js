document.body.style.overflow = "hidden"
loaderTime = Math.floor(Math.random() * 2500) + 1000;

setTimeout(function(){
    let loaderWin = document.querySelector(".loader")
    let loaderImg = document.querySelector(".loaderLogoAnime")
    loaderWin.style.zIndex = "-10"
    document.body.style.overflow = "visible"
    loaderImg.style.display = "none"
}, loaderTime)

let url = 'https://raw.githubusercontent.com/Palarvind03/myData/main/ReactNowJson/json/progetti.json'
let navToggleCont = 0
let cardBtnText = "Guarda ora"
let Index = -1
let anime = ""
let clickedBtnIndex = 0
let arraylinkIndexJs = []
let arraylinkIndexCss = []
let arraylinkCompNome = []
let arraylinkCompJsLink = []
let arraylinkCompCssLink = []
let arrayCardTitoli=[]
let arrayNumImg=[]
let projectsContainer = document.querySelector(".progettiContainer")
let spinner = document.querySelector(".divSpinner")

fetch(url)
.then(res => res.json())
.then((out) => {
    for (progetto of out) {
        Index++
        arraylinkIndexJs[Index] = progetto.src.indexJs
        arraylinkIndexCss[Index] = progetto.src.indexCss
        arraylinkCompNome[Index] = progetto.src.compNome
        arraylinkCompJsLink[Index] = progetto.src.compJsLink
        arraylinkCompCssLink[Index] = progetto.src.compCssLink
        arrayNumImg[Index]=progetto.numImg

        if(Index==0){
            anime = "cardAnimetion1"
        }else if(Index==1){
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
        arrayCardTitoli[Index] = progetto.semiTitolo

        cardBadge = document.createElement("span")
        if(progetto.difficolta=="Facile"){
            cardBadge.innerText = "Facile"
            cardBadge.setAttribute("class","badge bg-success")
        }else if(progetto.difficolta=="Medio"){
                cardBadge.innerText = "Medio"
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

        cardBtn =  document.createElement("button")
        cardBtn.setAttribute("class","btn btn-dark")
        cardBtn.innerText = cardBtnText
        cardBtn.setAttribute("data-bs-toggle","modal")
        cardBtn.setAttribute("data-bs-target","#staticBackdrop")

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
    spinner.style.display = "none"

    foot = `<footer class="bg-dark text-white text-center text-lg-start mt-5">
    <div class="container p-4">
      <div class="row">
        <div class="d-flex flex-column align-items-center col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5>React Now</h5>
          <p>
            La guida che ti aiuta ad imparare React...
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Link Utili</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="./guida.html" class="text-white">Guida</a>
            </li>
            <li>
              <a href="./progetti.html" class="text-white">Progetti</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Powered By?</h5>

          <ul class="list-unstyled">
            <li>
              <a href="https://github.com/Palarvind03" target="_blank" class="text-white">Arvind Pal</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center p-3" >
      © 2020 Copyright:
      <a class="text-white" href="#">ReactNow</a>
    </div>
  </footer>`
  $(".footerCont").append(foot)
})
.catch(err => { throw err });

$(document).on('click','.btn-dark',function(){
    clickedBtnIndex = $('.btn-dark').index(this)
    let modelTitle = document.querySelector('.modal-title')
    let arrayCardHeader = document.querySelectorAll('.card-header')
    let carouselContainer = document.querySelector('.carousel-inner')


    $(".carousel-inner").empty()
    let cont=1

    modelTitle.innerText = arrayCardTitoli[clickedBtnIndex]

    for(let i=0;i<arrayNumImg[clickedBtnIndex];i++){
        carouselItem = document.createElement("div")
        if(i==0){
            carouselItem.setAttribute("class","carousel-item active")
        }else{
            carouselItem.setAttribute("class","carousel-item")
        }
        img = document.createElement("img")
        img.setAttribute("class","d-block w-100")
        img.src = "./img/progetti/" + arrayCardHeader[clickedBtnIndex].innerText + "/" + cont + ".png"
        carouselItem.appendChild(img)
        carouselContainer.appendChild(carouselItem)
        cont++
    }
})

$(document).on('click','.scarica',function(){
    let zip = new JSZip();
    let src = zip.folder("src")

    let idxJs = readFile(arraylinkIndexJs[clickedBtnIndex]) 
    console.log(idxJs)
    src.file("index.js", idxJs);
    let idxCss = readFile(arraylinkIndexCss[clickedBtnIndex]) 
    src.file("index.css", idxCss);
    for(let k=0;k<arraylinkCompNome[clickedBtnIndex].length;k++){
        let compJs = readFile(arraylinkCompJsLink[clickedBtnIndex][k])
        src.file(arraylinkCompNome[clickedBtnIndex][k]+".js", compJs);
        let compCss = readFile(arraylinkCompCssLink[clickedBtnIndex][k])
        src.file(arraylinkCompNome[clickedBtnIndex][k]+".css", compCss);
    }

    zip.generateAsync({type:"blob"})
    .then(function(content){
        saveAs(content, arrayCardTitoli[clickedBtnIndex]+".zip")
    })
})

async function readFile(url) {
    const response = await fetch(url)
    .then(resp => resp.text())
    .then(data => {
        return data
    })
    .catch(error => {
        console.error(error);
    });
    return response
}

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