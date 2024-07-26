const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".popular__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".register__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".register__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".register__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
});
