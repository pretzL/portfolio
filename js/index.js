// Handle the hover state for social icons, hover on/off

const iconButton = document.querySelectorAll(".social-icons");

iconButton.forEach((e) => {
  e.addEventListener("mouseover", () => {
    const toolTip = e.firstElementChild;
    toolTip.style.display = "block";
  });
});

iconButton.forEach((e) => {
  e.addEventListener("mouseout", () => {
    const toolTip = e.firstElementChild;
    toolTip.style.display = "none";
  });
});

// CAROUSEL FROM https://www.youtube.com/watch?v=yq4BeRtUHbk

// Show or hide carousel buttons

const carousel = document.querySelector(".carousel");
const arrow = document.querySelectorAll(".arrow");

carousel.addEventListener("mouseover", () => {
  arrow.forEach((e) => {
    e.style.opacity = "1";
  });
});

carousel.addEventListener("mouseout", () => {
  arrow.forEach((e) => {
    e.style.opacity = "0";
  });
});

// Handle button for carousel sliding
document.addEventListener("click", (e) => {
  let carouselButton;
  if (e.target.matches(".arrow")) {
    carouselButton = e.target;
  } else {
    carouselButton = e.target.closest(".arrow");
  }

  if (carouselButton != null) {
    moveCarousel(carouselButton);
  }
});

// Carousel slide function, with infinite loop
function moveCarousel(button) {
  const carouselContainer = document.querySelector(".all-projects-container");
  const carouselIndex = parseInt(getComputedStyle(carouselContainer).getPropertyValue("--carousel-index"));
  const itemsPerScreen = parseInt(getComputedStyle(carouselContainer).getPropertyValue("--items-per-screen"));

  if (button.classList.contains("left-arrow")) {
    if (carouselIndex - 1 < 0) {
      carouselContainer.style.setProperty("--carousel-index", carouselContainer.childElementCount / itemsPerScreen - 1);
    } else {
      carouselContainer.style.setProperty("--carousel-index", carouselIndex - 1);
    }
  }

  if (button.classList.contains("right-arrow")) {
    if (carouselIndex + 1 >= carouselContainer.childElementCount / itemsPerScreen) {
      carouselContainer.style.setProperty("--carousel-index", 0);
    } else {
      carouselContainer.style.setProperty("--carousel-index", carouselIndex + 1);
    }
  }
}

// ONSCROLL NAVIGATION THANKS TO ALEXANDER BARRETT

const slider = document.querySelector(".slider");
const sections = document.querySelectorAll(".home, .about, .education, .contact, .projects");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObservation = new IntersectionObserver((sections) => {
  sections.forEach(
    (section) => {
      if (section.isIntersecting) {
        navLinks.forEach((li) => {
          li.classList.remove("nav-active");
          if (li.href.includes(section.target.classList[0])) {
            li.classList.add("nav-active");
          }
        });
      }
    },
    { threshold: 0.3 }
  );
});

sections.forEach((section) => {
  sectionObservation.observe(section);
});
