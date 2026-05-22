const heroBtn = document.querySelector(".hero button");

heroBtn.addEventListener("click", () => {
    alert("Welcome To EduVerse University 🚀");
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {
        image.style.transform = "scale(1.1)";
    });

});