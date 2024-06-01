window.addEventListener('DOMContentLoaded', (event) => {
    const home = document.querySelector('#home');
    const about = document.querySelector('#about');
    const contact = document.querySelector('#contact');
    const homeside = document.querySelector('.home');
    const aboutside = document.querySelector('.about');
    const contactside = document.querySelector('.contact');

    const screen = window.innerHeight / 2;
    window.addEventListener('scroll', (event) => {
        if (about.getBoundingClientRect().top < aboutside.getBoundingClientRect().top && about.getBoundingClientRect().bottom > aboutside.getBoundingClientRect().bottom) {
            aboutside.classList.add('about-active');
            homeside.classList.remove('home-active');
            contactside.classList.remove('contact-active');
            console.log('active');
        }
        else if (contact.getBoundingClientRect().top < contactside.getBoundingClientRect().top && contact.getBoundingClientRect().bottom > contactside.getBoundingClientRect().top) {
            contactside.classList.add('contact-active');
            aboutside.classList.remove('about-active');
            homeside.classList.remove('home-active');
        }
        else {
            homeside.classList.add('home-active');
            contactside.classList.remove('contact-active');
            aboutside.classList.remove('about-active');
        }

        console.log(homeside.getBoundingClientRect().top);
        console.log(homeside.getBoundingClientRect().bottom);
        console.log(aboutside.getBoundingClientRect().top);
        console.log(aboutside.getBoundingClientRect().bottom);
    })
    console.log(screen);
})