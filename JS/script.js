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

    // Reiniciar la animaci�n de cambio de textos despu�s de actualizar el texto
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

// Reiniciar la animaci�n de cambio de textos
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


// Selecciona todos los elementos del mega men�
var megaMenus = document.querySelectorAll('.mega-menu');



/// Cierra el men� si se hace clic fuera de �l
document.addEventListener('click', function (event) {
    if (!event.target.closest('.mega-menu')) {
        // Oculta todos los men�s y elimina la clase activa
        megaMenus.forEach(function (menu) {
            var subMenu = menu.querySelector('ul.menu');
            subMenu.style.top = '-50px';
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
            menu.classList.remove('active-menu');
        });
    }
});

// Agrega un evento de clic a cada elemento del men�
megaMenus.forEach(function (menu) {
    menu.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic se propague al documento

        var subMenu = menu.querySelector('ul.menu');

        // Cierra todos los men�s y elimina la clase activa antes de abrir el men� clickeado
        megaMenus.forEach(function (otherMenu) {
            if (otherMenu !== menu) {
                var otherSubMenu = otherMenu.querySelector('ul.menu');
                otherSubMenu.style.top = '-50px';
                otherSubMenu.style.visibility = 'hidden';
                otherSubMenu.style.opacity = 0;
                otherMenu.classList.remove('active-menu'); // Elimina la clase activa
            }
        });

        if (subMenu.style.visibility === 'visible') {
            subMenu.style.top = '-50px'; // ajusta seg�n sea necesario
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
            menu.classList.remove('active-menu'); // Elimina la clase activa
        } else {
            subMenu.style.top = '-1px'; // ajusta seg�n sea necesario
            subMenu.style.visibility = 'visible';
            subMenu.style.opacity = 1;
            menu.classList.add('active-menu'); // Agrega la clase activa
        }
    });
});

$(document).ready(function () {
    // Agrega un evento de clic a cada elemento del men� li
    $("#mega-menu > ul.menu > li").on("click", function (event) {
        event.stopPropagation(); // Evita que el clic se propague al documento

        // Elimina la clase 'active' de todos los elementos del men� li
        $("#mega-menu > ul.menu > li").removeClass("active");

        // A�ade la clase 'active' solo al elemento que se hizo clic
        $(this).addClass("active");
    });
});




//cyfo productos 









