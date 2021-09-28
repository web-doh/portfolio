"use strict";

// Navbar : color ->  transparent (when it is on the top)
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar__color");
  } else {
    navbar.classList.remove("navbar__color");
  }
});

// Scroll to section (when tapping on the navbar menu)
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target.dataset.link;
  if (target == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(target);
});

// Open Navbar menu (when tapping on the toggle-btn)
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
const navbarLogo = document.querySelector(".navbar__logo");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Scroll to section (when tapping on the contact button)
const homeContact = document.querySelector(".home__contact");
homeContact.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Home : slowly fade to transparent (when scrolling)
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show Arrow-up button : Scroll to top
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (scrollY > homeHeight) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Scroll to Home (when tapping on the arrow-up-btn)
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

//Projects filtering
const workCategories = document.querySelector(".work__categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".work__projects");

workCategories.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  //Animation
  projectsContainer.classList.add("anim__effect");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.id) {
        project.classList.remove("hide");
      } else {
        project.classList.add("hide");
      }
    });
    projectsContainer.classList.remove("anim__effect");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
