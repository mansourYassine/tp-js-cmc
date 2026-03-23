let card = document.getElementsByClassName("product-card")[0];

let btn = document.getElementById("addBtn");

card.addEventListener("mouseenter", function () {
    btn.classList.replace("hidden", "visible");
});

card.addEventListener("mouseleave", function () {
    btn.classList.replace("visible", "hidden");
});

btn.addEventListener("click", function () {
    alert('Produit ajouté au panier !')
})