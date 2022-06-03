// CAROUSEL FROM https://www.youtube.com/watch?v=yq4BeRtUHbk

const sliderContainer = document.querySelector(".slider");
const carouselIndex = parseInt(getComputedStyle(sliderContainer).getPropertyValue("--carousel-index"));
const itemsPerScreen = parseInt(getComputedStyle(sliderContainer).getPropertyValue("--items-per-screen"));

// FROM https://stackoverflow.com/questions/31223341/detecting-scroll-direction
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let st = window.pageYOffset || document.scrollTop;
  if (st > lastScrollTop) {
    sliderContainer.style.setProperty("--carousel-index", carouselIndex + 1);
  } else {
    if (carouselIndex > 0) {
      sliderContainer.style.setProperty("--carousel-index", carouselIndex - 1);
    } else {
      sliderContainer.style.setProperty("--carousel-index", 0);
    }
  }
  lastScrollTop = st <= 0 ? 0 : st;
});
