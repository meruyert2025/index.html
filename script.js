let button = document.querySelector("#likeButton");

button.addEventListener("click", function () {

    if (button.innerText === "♡ Like") {

        button.innerText = "♥ Liked";
        button.style.backgroundColor = "pink";

    } else {

        button.innerText = "♡ Like";
        button.style.backgroundColor = "white";

    }

});