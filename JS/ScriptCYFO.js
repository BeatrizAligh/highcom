﻿
//homecarrousel

// Slider(all Slides in a container)
const slider = document.querySelector(".slider")
// All trails 
const trail = document.querySelector(".trail").querySelectorAll("div")

// Transform value
let value = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 6000

// Function to slide forward
const slide = (condition) => {
    // CLear interval
    clearInterval(start)
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(value, trailValue)
    // Restart Animation
    animate()
    // start interal for slides back 
    start = setInterval(() => slide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
    // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // increase transform value
    value === 75 ? value = 0 : value += 25
    // update trailValue based on value
    trailUpdate()
}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
     // Remove active from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // decrease transform value
    value === 0 ? value = 75 : value -= 25
     // update trailValue based on value
    trailUpdate()
}

// function to transform slide 
const move = (S, T) => {
    // transform slider
    slider.style.transform = `translateX(-${S}%)`
    //add active class to the current trail
    trail[T].classList.add("active")
}

const tl = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"}})
tl.from(".bg", {x: "-100%", opacity: 0})
  .from("p", {opacity: 0}, "-=0.3")
  .from("h1", {opacity: 0, y: "30px"}, "-=0.3")
  .from("button", {opacity: 0, y: "-40px"}, "-=0.8")

// function to restart animation
const animate = () => tl.restart()

// function to update trailValue based on slide value
const trailUpdate = () => {
    if (value === 0) {
        trailValue = 0
    } else if (value === 25) {
        trailValue = 1
    } else if (value === 50) {
        trailValue = 2
    } else {
        trailValue = 3
    }
}   

// Start interval for slides
let start = setInterval(() => slide("increase"), interval)

// Next  and  Previous button function (SVG icon with different classes)
document.querySelectorAll("svg").forEach(cur => {
    // Assign function based on the class Name("next" and "prev")
    cur.addEventListener("click", () => cur.classList.contains("next") ? slide("increase") : slide("decrease"))
})

// function to slide when trail is clicked
const clickCheck = (e) => {
    // CLear interval
    clearInterval(start)
    // remove active class from all trails
    trail.forEach(cur => cur.classList.remove("active"))
    // Get selected trail
    const check = e.target
    // add active class
    check.classList.add("active")

    // Update slide value based on the selected trail
    if(check.classList.contains("box1")) {
        value = 0
    } else if (check.classList.contains("box2")) {
        value = 25
    } else if (check.classList.contains("box3")) {
        value = 50
    } else {
        value = 75
    }
    // update trail based on value
    trailUpdate()
    // transfrom slide
    move(value, trailValue)
    // start animation
    animate()
    // start interval
    start = setInterval(() => slide("increase"), interval)
}

// Add function to all trails
trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))

// Mobile touch Slide Section
const touchSlide = (() => {
    let start, move, change, sliderWidth

    // Do this on initial touch on screen
    slider.addEventListener("touchstart", (e) => {
        // get the touche position of X on the screen
        start = e.touches[0].clientX
        // (each slide with) the width of the slider container divided by the number of slides
        sliderWidth = slider.clientWidth/trail.length
    })
    
    // Do this on touchDrag on screen
    slider.addEventListener("touchmove", (e) => {
        // prevent default function
        e.preventDefault()
        // get the touche position of X on the screen when dragging stops
        move = e.touches[0].clientX
        // Subtract initial position from end position and save to change variabla
        change = start - move
    })

    const mobile = (e) => {
        // if change is greater than a quarter of sliderWidth, next else Do NOTHING
        change > (sliderWidth/4)  ? slide("increase") : null;
        // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
        (change * -1) > (sliderWidth/4) ? slide("decrease") : null;
        // reset all variable to 0
        [start, move, change, sliderWidth] = [0,0,0,0]
    }
    // call mobile on touch end
    slider.addEventListener("touchend", mobile)
})()

//soluciones----------------






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


/*preuba prodcutos*/

function _class(name) {
    return document.getElementsByClassName(name);
}

let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].addEventListener("click", function () {
        _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");

        _class("tab-indicator")[0].style.top = `calc(80px + ${i * 50}px)`;

        _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");

    });
}





//modal imagen*------------------------------

const images = ["imagen1", "imagen2", "imagen3", "imagen4", "imagen5", "imagen6", "imagen7", "imagen8", "imagen9", "imagen10", "imagen11", "imagen12", "imagen13", "imagen14", "imagen15", "imagen16", "imagen17", "imagen18", "imagen19", "imagen20", "imagen21", "imagen22", "imagen23", "imagen24", "imagen25", "imagen26", "imagen27", "imagen28", "imagen29", "imagen30", "imagen31", "imagen32", "imagen33", "imagen34", "imagen35", "imagen36", "imagen37", "imagen38"];
let currentIndex = 0;

function openModal(imageId) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';

    // Encuentra el índice de la imagen actual
    currentIndex = images.indexOf(imageId);

    // Actualiza la fuente de la imagen en el modal
    modalImage.src = document.querySelector(`.${imageId}`).src;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalImage();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalImage();
}

function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const currentImageId = images[currentIndex];
    modalImage.src = document.querySelector(`.${currentImageId}`).src;
}

function translateToEnglish() {
    var selectField = document.querySelector('.goog-te-combo');
    if (selectField) {
      selectField.value = 'en';  // 'en' es el código del idioma para inglés
      selectField.dispatchEvent(new Event('change')); // Disparar el cambio de idioma
    }
  }

  function translateToSpanish() {
    var selectField = document.querySelector('.goog-te-combo');
    if (selectField) {
      selectField.value = 'es';  // 'es' es el código del idioma para español
      selectField.dispatchEvent(new Event('change')); // Disparar el cambio de idioma
    }
  }


// Selecciona todos los elementos del mega menú
var megaMenus = document.querySelectorAll('.mega-menu');



/// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', function (event) {
    if (!event.target.closest('.mega-menu')) {
        // Oculta todos los menús y elimina la clase activa
        megaMenus.forEach(function (menu) {
            var subMenu = menu.querySelector('ul.menu');
            subMenu.style.top = '-50px';
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
            menu.classList.remove('active-menu');
        });
    }
});


document.addEventListener('click', function (event) {
    if (!event.target.closest('.mega-menu')) {
        // Oculta solo el menú específico y elimina la clase activa
        var specificMenu = document.querySelector('.mega-menu');
        if (specificMenu) {
            var subMenu = specificMenu.querySelector('ul.menu');
            subMenu.style.top = '-50px';
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
            specificMenu.classList.remove('active-menu');
        }
    }
});

// Agrega un evento de clic a cada elemento del menú
// Selecciona todos los elementos del mega menú
var megaMenus = document.querySelectorAll('.mega-menu');



/// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', function (event) {
    if (!event.target.closest('.mega-menu')) {
        // Oculta todos los menús y elimina la clase activa
        megaMenus.forEach(function (menu) {
            var subMenu = menu.querySelector('ul.menu');
            subMenu.style.top = '-50px';
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
            menu.classList.remove('active-menu');
        });
    }
});


document.addEventListener('click', function (event) {
    if (!event.target.closest('.mega-menu')) {
        // Oculta solo el menú específico y elimina la clase activa
        var specificMenu = document.querySelector('.mega-menu');
        if (specificMenu) {
            var subMenu = specificMenu.querySelector('ul.menu');
            subMenu.style.top = '-50px';
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
            specificMenu.classList.remove('active-menu');
        }
    }
});

// Agrega un evento de clic a cada elemento del menú
megaMenus.forEach(function (menu) {
    menu.addEventListener('click', function (event) {
        event.stopPropagation(); // Evita que el clic se propague al documento

        var subMenu = menu.querySelector('ul.menu');

        // Cierra todos los menús y elimina la clase activa antes de abrir el menú clickeado


        if (subMenu.style.visibility === 'visible') {
            subMenu.style.top = '-50px'; // ajusta según sea necesario
            subMenu.style.visibility = 'hidden';
            subMenu.style.opacity = 0;
            menu.classList.remove('active-menu'); // Elimina la clase activa
        } else {
            subMenu.style.top = '-1px'; // ajusta según sea necesario
            subMenu.style.visibility = 'visible';
            subMenu.style.opacity = 1;
            menu.classList.add('active-menu'); // Agrega la clase activa
        }
    });
});

$(document).ready(function () {
    // Agrega un evento de clic a cada elemento del menú li
    $("#mega-menu > ul.menu > li").on("click", function (event) {
        event.stopPropagation(); // Evita que el clic se propague al documento

        // Elimina la clase 'active' de todos los elementos del menú li
        $("#mega-menu > ul.menu > li").removeClass("active");

        // Añade la clase 'active' solo al elemento que se hizo clic
        $(this).addClass("active");
    });
});


$(document).ready(function () {
    // Agrega un evento de clic a cada elemento del menú li
    $("#mega-menu > ul.menu > li").on("click", function (event) {
        event.stopPropagation(); // Evita que el clic se propague al documento

        // Elimina la clase 'active' de todos los elementos del menú li
        $("#mega-menu > ul.menu > li").removeClass("active");

        // Añade la clase 'active' solo al elemento que se hizo clic
        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $(".carousel").slick({
        dots: true, // Muestra los puntos de navegaci�n
        autoplay: true,
        autoplaySpeed: 4000 // Velocidad del carrusel en milisegundos
    });
});


