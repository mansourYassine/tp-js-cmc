function afficheFormulaire() {
    // Affiche la formulaire
    document.querySelector('form').style.display = "block";

    // Hide ajoute boutton
    let table = document.getElementsByTagName('table')[0];
    let ajouteBoutton = table.nextElementSibling;
    ajouteBoutton.style.display = "none";
}

function annuler() {
    // Hide la formulaire
    document.querySelector('form').style.display = "none";

    // Empty les champs
    let informationsEtudiant = document.querySelectorAll('form .champs input');
    for (let info of informationsEtudiant) {
        info.value = "";
    }

    // Affiche ajoute boutton
    let table = document.getElementsByTagName('table')[0];
    let ajouteBoutton = table.nextElementSibling;
    ajouteBoutton.style.display = "inline";
}

let nbrEtudiants = 0;
function ajouteEtudiant() {
    let etudiant = document.createElement('tr');
    etudiant.setAttribute('id', ++nbrEtudiants);
    let informationsEtudiant = document.querySelectorAll('form .champs input');
    for (let info of informationsEtudiant) {
        let td = document.createElement('td');
        td.innerHTML = info.value;
        etudiant.appendChild(td);
    }
    let tableBody = document.getElementsByTagName('tbody')[0];
    tableBody.appendChild(etudiant);
    addClickEvent(`${nbrEtudiants}`);
}

function addClickEvent(idLigne) {
    let ligne = document.getElementById(idLigne);
    ligne.addEventListener('click', function () {
        ligne.style = "background-color: #a0fc4f";
        let idLigne = Number(ligne.id);
        idEtudiantsASupprimer.push(idLigne);
    });
}

let idEtudiantsASupprimer = [];

function supprimerEtudiant() {
    let tbody = document.getElementsByTagName('tbody')[0];
    console.log(idEtudiantsASupprimer);

    for (let i = 0; i < idEtudiantsASupprimer.length; i++) {
        let idEtudiant = idEtudiantsASupprimer[i];
        let etudiantSupprimer = document.getElementById(idEtudiant);
        tbody.removeChild(etudiantSupprimer);
        idEtudiantsASupprimer[i] = null;
    }

    idEtudiantsASupprimer = [];
}
