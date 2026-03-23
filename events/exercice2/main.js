let stars = document.querySelectorAll('.star');

let hadSelected = false;

stars.forEach(function (star, index, stars) {
    // colorize stars
    star.addEventListener('mouseover', function () {
        if (hadSelected) return;
        for (let i = 0; i <= index; i++) {
            if (!stars[i].classList.contains("selected")) {
                stars[i].classList.add("hovered");
            }
        }
    });

    // select stars
    star.addEventListener('click', function () {
        if (hadSelected) return;
        for (let i = 0; i <= index; i++) {
            stars[i].classList.remove("hovered");
            stars[i].classList.add("selected");
        }
        document.getElementById('ratingText').textContent = `Note : ${index + 1}/5`;
        hadSelected = true;
    });
});

// remove colorizing from all stars
document.getElementById("starRating").addEventListener("mouseout", function () {
    stars.forEach(function (star) {
        star.classList.remove("hovered");
    });
})
