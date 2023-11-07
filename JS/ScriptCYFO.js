const languages = document.getElementById("language");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`../languages/${language}.json`);
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.textContent = texts[section][value];
    }

};

languages.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});





//loader

function pageLoaded() {
    let loaderSection = document.querySelector('.loader-section');
    loaderSection.classList.add('loaded');
}

document.onload = pageLoaded();


//counter

const counters = document.querySelectorAll('.value');
const speed = 10000;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 2);
        } else {
            counter.innerText = value;
        }

    }

    animate();
});

//slider
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        // Opciones de Swiper.js, como la velocidad y el modo de bucle
        loop: true,
        autoplay: {
            delay: 2000, // Cambia de slide cada 5 segundos
        },
        // Agrega más opciones según sea necesario
    });
});




