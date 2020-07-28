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