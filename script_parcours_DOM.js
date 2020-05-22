//Question 1
//Combien y a-t-il d'éléments <p> présents dans la page HTML ?
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length)

//Question 2
//Quel est le contenu texte de l'élément portant l'id coucou ? 
let coucou = document.getElementById("coucou").innerHTML;
console.log(coucou);

//Question 3
//Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? 
let links = document.getElementsByTagName("a");
let third_link = links[2].href;
console.log(third_link);

//Question 4
//Combien d'éléments portent la classe compte-moi ?
let compte_moi = document.getElementsByClassName("compte-moi");
console.log(compte_moi.length);

//Question 5
//Combien d'éléments <li> portent la classe compte-moi ? 
let list_compte_moi = document.querySelectorAll("li.compte-moi");
console.log(list_compte_moi.length);


//Question 6
//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?
let ordered_compte_moi = document.querySelectorAll("ol > li.compte-moi");
console.log(ordered_compte_moi.length);

//Question 7
//La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. 
//Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, 
//tu peux en récupérer le contenu. 
let jeu_de_piste = document.querySelectorAll("div > ul")[1].firstElementChild;
console.log(jeu_de_piste.innerHTML);
