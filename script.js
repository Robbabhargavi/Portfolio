// Typing Effect

const roles = [
    "Python Developer",
    "Web Developer",
    "Machine Learning Enthusiast",
    "Data Science Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex--);
    } else {
        typingElement.textContent =
            currentRole.substring(0, charIndex++);
    }

    let typingSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentRole.length + 1) {
        typingSpeed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();


// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }
});