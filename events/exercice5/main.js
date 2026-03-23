let formulaire = document.forms[0];

formulaire.addEventListener("submit", function (event) {
    let isUserValid = false;
    let isPassValid = false;

    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");

    if (usernameInput.value.length >= 5) {
        isUserValid = true;
    } else {
        usernameInput.classList.add("invalid");
        document.getElementById("errorName").textContent = "Le nom doit contenir au moins 5 caractères";
    }

    if (passwordInput.value.length >= 8) {
        isPassValid = true;
    } else {
        passwordInput.classList.add("invalid");
        document.getElementById("errorPwd").textContent = "Mot de passe trop court";
    }

    event.preventDefault();
    
    if (isUserValid === true && isPassValid === true) {
        formulaire.classList.add("hide");
        document.getElementById("successMsg").classList.remove("hide");
    }
});