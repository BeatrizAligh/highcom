const languages = document.getElementById("language");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.textContent = texts[section][value];
    }

    // Reiniciar la animación de cambio de textos después de actualizar el texto
    setTimeout(restartTextChangeAnimation, 0);
};

languages.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split(" . ");
    word.textContent = "  ";
    letters.forEach((letter, index) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let textChangeInterval = setInterval(changeText, 3000);

// Reiniciar la animación de cambio de textos
function restartTextChangeAnimation() {
    clearInterval(textChangeInterval);
    currentWordIndex = 0;
    words.forEach((word) => {
        let letters = word.textContent.split(" . ");
        word.textContent = "  ";/* elimnar espacion en caso de querer que funcion letra por letra*/
        letters.forEach((letter, index) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);

        });
    });
    words.forEach((word, index) => {
        word.style.opacity = index === 0 ? "1" : "0";
        Array.from(word.children).forEach((letter) => {
            letter.className = "letter";
        });
    });
    textChangeInterval = setInterval(changeText, 3000);
}

function changeText() {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
}

//filtros de catalogo

var mixer = mixitup('.productos-gallery');

let menuLinks = document.querySelectorAll('.navlist a');


//sticky navbar--------

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 50)
})

//toggle icon  navbar--------

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-x");
    navlist.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    menuIcon.classList.remove("fa-x");
    navlist.classList.remove("open");
});

//Parallax--------

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add("show-items");

    } else {
        entry.target.classList.remove("show-items");
    }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrolltop = document.querySelectorAll(".scroll-top");
scrolltop.forEach((el) => observer.observe(el));


//loader

function pageLoaded() {
    let loaderSection = document.querySelector('.loader-section');
    loaderSection.classList.add('loaded');
}

document.onload = pageLoaded();




