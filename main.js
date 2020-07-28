'use strict';

// Navbar : color ->  transparent (when it is on the top)
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar__color');
} else {
    navbar.classList.remove('navbar__color');
}
});

// Scroll to section (when tapping on the navbar menu)
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',()=>{
    const target = event.target.dataset.link;
    if (target == null){
        return;
    }
    const scrollTo = document.querySelector(target);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
});

// Scroll to section (when tapping on the contact button)
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click',()=>{
    const target = event.target.dataset.link;
    const scrollTo = document.querySelector(target);
    scrollTo.scrollIntoView();
});
