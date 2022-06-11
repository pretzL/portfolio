// NAVBAR

const label = document.querySelector(".menu-icon");
const navbar = document.querySelector(".nav-menu");

// When clicking the hamburger icon
label.addEventListener("click", () => {
  navbar.classList.toggle("hamburger-active");
});
