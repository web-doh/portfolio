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
    scrollIntoView(target);
});

// Scroll to section (when tapping on the contact button)
const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click',()=>{
    scrollIntoView('#contact')
});

// Home : slowlt fade to transparent (when scrolling)
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
home.style.opacity = 1- window.scrollY / homeHeight
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
};

