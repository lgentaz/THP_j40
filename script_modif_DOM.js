function changeTitles(){
    let title_get = document.querySelector("h1.jumbotron-heading");
    title_get.innerHTML = "Ce que j'ai appris à THP";
    let subtitle_get = title_get.nextElementSibling;
    subtitle_get.innerHTML="THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}


function changeCallToActions(){
    let cta = document.querySelectorAll("section > div > p > a");
    cta[0].innerHTML = "OK je veux tester !";
    cta[0].href = "http://www.thehackingproject.org";
    cta[1].innerHTML = "Non Merci";
    cta[1].href = "https://www.pole-emploi.fr/accueil/";
}


function changeLogoName() {
    let nav_title = document.querySelectorAll("div.navbar > div > a");
    nav_title[0].children[1].innerHTML = "The THP Experience";
    nav_title[0].style.fontSize = "2em";
}


function populateImages(array) {
    let card_image = document.querySelectorAll(".card-img-top");
    for(let count = 0; count < card_image.length; count++) {
        card_image[count].src = array[count];
    }
}

let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", 
"https://img.icons8.com/color/480/000000/css3.png", 
"https://img.icons8.com/color/480/000000/javascript.png", 
"https://img.icons8.com/color/480/000000/ruby-programming-language.png", 
"https://img.icons8.com/color/480/000000/bootstrap.png", 
"https://img.icons8.com/color/480/000000/github.png", 
"http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", 
"https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", 
"https://img.icons8.com/color/480/000000/heroku.png"];



function deleteLastCards() {
    let cards = document.querySelectorAll(".card");
    let n = cards.length - 1;
    let removed = n - 3;
    for(let count = n; count > removed; count--) {
        cards[count].remove();
    }
}


function changeCardsText(array) {
    let card_text = document.querySelectorAll(".card-text")
    for(let count = 0; count < 3; count++) {
        card_text[count].innerHTML = array[count];
    }
}

let textArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
"Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
"JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];


function changeViewButtons() {
    let card_button = document.querySelectorAll(".btn-group");
    console.log(card_button)
    card_button.forEach (button =>{
        button.children[0].className = "btn btn-sm btn-success";
        console.log(button.children[0].className)
    })
}


changeTitles();
changeCallToActions();
changeLogoName();
populateImages(imagesArray);
deleteLastCards();
changeCardsText(textArray);
changeViewButtons();
