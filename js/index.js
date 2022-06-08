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
