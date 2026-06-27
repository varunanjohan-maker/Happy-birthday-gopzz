/* ==================================
   HAPPY BIRTHDAY GOPIKA
   script.js (Part 1)
================================== */

const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

const letter = document.getElementById("letter");
const giftSection = document.getElementById("giftSection");
const gallery = document.getElementById("gallery");
const cakeSection = document.getElementById("cakeSection");
const finalSection = document.getElementById("final");

startBtn.addEventListener("click", () => {

    music.play();

    startBtn.style.display = "none";

    letter.classList.remove("hidden");

    setTimeout(() => {

        giftSection.classList.remove("hidden");

        giftSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 3500);

});

/* Gift Box */

const giftBox = document.getElementById("giftBox");

giftBox.addEventListener("click", () => {

    if (typeof confetti === "function") {

        confetti({
            particleCount: 250,
            spread: 120,
            origin: {
                y: 0.6
            }
        });

    }

    gallery.classList.remove("hidden");

    cakeSection.classList.remove("hidden");

    finalSection.classList.remove("hidden");

    gallery.scrollIntoView({
        behavior: "smooth"
    });

});

/* Photo Gallery */

const photos = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg",
    "photos/photo5.jpg"
];

const slide = document.getElementById("slide");

let currentPhoto = 0;

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    slide.src = photos[currentPhoto];

}

setInterval(nextPhoto, 3000);
/* ==================================
   script.js (Part 2)
   Extra animations & effects
================================== */

/* Floating hearts generator */

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "💙";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = "0.7";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    let fall = setInterval(() => {
        let currentTop = parseFloat(heart.style.top);
        heart.style.top = (currentTop - 2) + "px";

        if (currentTop < -50) {
            clearInterval(fall);
            heart.remove();
        }
    }, 20);
}

setInterval(createHeart, 800);

/* Cake click animation */

const cake = document.querySelector(".cake");

cake.addEventListener("click", () => {

    if (typeof confetti === "function") {

        confetti({
            particleCount: 300,
            spread: 160,
            origin: { y: 0.6 }
        });

    }

    cake.innerHTML = "🎉💖🎂💖🎉";

});

/* Smooth reveal effect on scroll */

const revealElements = document.querySelectorAll(
    "#letter, #giftSection, #gallery, #cakeSection, #final"
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "1s ease";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

/* Initial animation setup */

revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
});
