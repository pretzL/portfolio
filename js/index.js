// Experience timer
const experienceEl = document.querySelector("#experience-time");

const currentYear = new Date().getFullYear();
const startYear = 2021;
const yearsOfExperience = currentYear - startYear;

experienceEl.textContent = yearsOfExperience;
