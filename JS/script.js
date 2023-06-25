const sidebarLinks = document.querySelectorAll('.sidebar a');
const slidebar = document.querySelector('.slidebar');
const sections = document.querySelectorAll('.content > div');
const contactButton = document.querySelector('.contact-button');
const contactSection = document.querySelector('#contactenos');

contactButton.addEventListener('click', function (event) {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

sidebarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
        sidebarLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        updateSlidebar();
    });
});

window.addEventListener('scroll', function () {
    updateSlidebar();
});

function updateSlidebar() {
    const currentPos = window.scrollY;

    sections.forEach(section => {
        const target = section.getAttribute('id');
        const targetElement = document.querySelector(`#${target}`);
        if (
            targetElement.offsetTop <= currentPos &&
            targetElement.offsetTop + targetElement.offsetHeight > currentPos
        ) {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            const correspondingLink = document.querySelector(`.sidebar a[href="#${target}"]`);
            correspondingLink.classList.add('active');
            slidebar.style.height = '100%';
            slidebar.style.transform = `translateY(${correspondingLink.offsetTop}px)`;
        }
    });
}