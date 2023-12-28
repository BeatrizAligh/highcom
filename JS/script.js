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



//videoinicio
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.background-video');
    let currentVideo = 0;

    function playVideo() {
        videos[currentVideo].style.opacity = 0; // Oculta el video actual
        currentVideo = (currentVideo + 1) % videos.length; // Cambia al siguiente video
        videos[currentVideo].style.opacity = 1; // Muestra el nuevo video
        videos[currentVideo].play(); // Reproduce el nuevo video
    }

    videos[currentVideo].style.opacity = 1; // Muestra el primer video
    videos[currentVideo].play(); // Reproduce el primer video

    videos.forEach((video, index) => {
        video.addEventListener('ended', playVideo);
    });
});

//experience

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");

});

//carrusel experience
$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");

});


//click menu
// Selecciona todos los elementos del mega menú
var megaMenus = document.querySelectorAll('.mega-menu');

document.addEventListener('click', function (event) {
    // Verifica si el clic ocurrió dentro de algún menú
    var isClickInsideMenu = false;

    megaMenus.forEach(function (menu) {
        if (menu.contains(event.target)) {
            isClickInsideMenu = true;
        }
    });

    // Cierra todos los menús si el clic no fue dentro de un menú
    if (!isClickInsideMenu) {
        megaMenus.forEach(function (menu) {
            var subMenu = menu.querySelector('ul.menu');
            subMenu.style.top = '-50px'; // ajusta según sea necesario
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
        });
    }
});

// Agrega un evento de clic a cada elemento del mega menú
megaMenus.forEach(function (menu) {
    menu.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic se propague al documento

        var subMenu = menu.querySelector('ul.menu');

        // Cierra todos los menús antes de abrir el menú clickeado
        megaMenus.forEach(function (otherMenu) {
            if (otherMenu !== menu) {
                var otherSubMenu = otherMenu.querySelector('ul.menu');
                otherSubMenu.style.top = '-50px';
                otherSubMenu.style.visibility = 'hidden';
                otherSubMenu.style.opacity = 0;
            }
        });

        if (subMenu.style.visibility === 'visible') {
            subMenu.style.top = '-50px'; // ajusta según sea necesario
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
        } else {
            subMenu.style.top = '-1px'; // ajusta según sea necesario
            subMenu.style.visibility = 'visible';
            subMenu.style.opacity = 1;
        }
    });
});









