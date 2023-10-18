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


////video

//const videoPlayer = document.getElementById("video-player");
//const videoThumbnails = document.querySelectorAll(".video-thumbnails img");

//// Agregar evento clic a las miniaturas
//videoThumbnails.forEach(thumbnail => {
//    thumbnail.addEventListener("click", () => {
//        // Obtener la ruta del video desde el atributo data-video
//        const videoSrc = thumbnail.getAttribute("data-video");

//        // Cambiar la fuente del video principal
//        videoPlayer.src = videoSrc;

//        // Reproducir el nuevo video
//        videoPlayer.load(); // Cargar el nuevo video
//        videoPlayer.play(); // Reproducir automáticamente
//    });
//});

