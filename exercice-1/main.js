let villes = [];

// stocker les noms des villes
function ajouter() {
    let ville = document.querySelector('input').value;
    villes.push(ville);
    afficherVilles();
}
// afficher tout les villes qui trouvent dans le tableau villes
function afficherVilles() {
    let ul = document.getElementsByTagName('ul')[0];
    ul.innerHTML = "";
    for (let i = 0; i < villes.length; i++) {
        let ville = villes[i];
        let li = document.createElement('li');
        li.innerHTML = ville;
        li.setAttribute('onclick', `select(${i})`);
        ul.appendChild(li);
    }
}

let idVillesSupprimer = [];
// Stocker l'Id des villes que l'utilisateur veut supprimer
function select(id) {
    idVillesSupprimer.push(id);
    event.target.style = "background-color: #a0fc4f";
}
// supprimer les villes
function supprimerVilles() {
    for (let villeId of idVillesSupprimer) {
        villes.splice(villeId, 1);
    }
    afficherVilles();
}

