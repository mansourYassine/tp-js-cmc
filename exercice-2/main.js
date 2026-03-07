let numberOfPosts = 0;

function ajoutePoste() {
    let poste = document.createElement('div');
    poste.setAttribute('class', 'post');

    let posteTitle = document.createElement('h3');
    posteTitle.innerHTML = document.querySelector('main .insert-post input').value;
    poste.appendChild(posteTitle);

    let posteComments = document.createElement('div');
    posteComments.setAttribute('class', 'comments');
    poste.appendChild(posteComments);

    let addComment = document.createElement('div');
    addComment.innerHTML = `<input type="text">\n<button onclick="ajouteCommentaire(${numberOfPosts})">ajoute</button>`;
    numberOfPosts += 1;
    addComment.setAttribute('class', 'add-comment');
    poste.appendChild(addComment);

    let postes = document.querySelector('.posts');
    postes.appendChild(poste);
}

function ajouteCommentaire(id) {
    let commentaire = document.createElement('p');
    commentaire.innerHTML = event.target.previousElementSibling.value;

    document.querySelectorAll(".comments")[id].appendChild(commentaire);
}