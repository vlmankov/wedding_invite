document.addEventListener("DOMContentLoaded", function () {

    const coverPage = document.getElementById("cover-page");
    const insidePage = document.getElementById("inside-page");
    const coverImage = coverPage.querySelector("img");
    const backButton = document.getElementById("back-button");

    let isOpen = false;

    function openCard() {

        if (isOpen) {
            return;
        }

        isOpen = true;

        coverPage.classList.remove("active");
        insidePage.classList.add("active");
    }

    function closeCard() {

        isOpen = false;

        insidePage.classList.remove("active");
        coverPage.classList.add("active");
    }

    coverImage.addEventListener("click", openCard);

    backButton.addEventListener("click", closeCard);

    setTimeout(openCard, 5000);

});
