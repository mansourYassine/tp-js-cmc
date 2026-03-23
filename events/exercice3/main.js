let searchContainer = document.getElementById("searchModal");
let searchInput = document.getElementById("searchInput");


document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        searchContainer.classList.remove("hide");
        searchInput.focus();
    }

    if (event.key === "Escape") {
        searchContainer.classList.add("hide");
    }
});

