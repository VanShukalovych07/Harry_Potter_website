// Функция для скрытия всех страниц и деактивации всех кнопок
const hideAllPagesAndDeactivateButtons = () => {
  document
    .querySelectorAll(".page")
    .forEach((page) => page.classList.add("is-hidden"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((btn) => btn.classList.remove("active-btn"));
};

// Gryffindor
const gryffindor = document.querySelector(".gryffindor");
const gryffindorBtnOpen = document.querySelector(".gryffindor-btn-open");
const toggleActiveGryffindor = () => {
  hideAllPagesAndDeactivateButtons();
  gryffindor.classList.remove("is-hidden");
  gryffindorBtnOpen.classList.add("active-btn");
};
gryffindorBtnOpen.addEventListener("click", toggleActiveGryffindor);

// Slytherin
const slytherin = document.querySelector(".slytherin");
const slytherinBtnOpen = document.querySelector(".slytherin-btn-open");
const toggleActiveSlytherin = () => {
  hideAllPagesAndDeactivateButtons();
  slytherin.classList.remove("is-hidden");
  slytherinBtnOpen.classList.add("active-btn");
};
slytherinBtnOpen.addEventListener("click", toggleActiveSlytherin);

// Ravenclaw
const ravenclaw = document.querySelector(".ravenclaw");
const ravenclawBtnOpen = document.querySelector(".ravenclaw-btn-open");
const toggleActiveRavenclaw = () => {
  hideAllPagesAndDeactivateButtons();
  ravenclaw.classList.remove("is-hidden");
  ravenclawBtnOpen.classList.add("active-btn");
};
ravenclawBtnOpen.addEventListener("click", toggleActiveRavenclaw);

// Hufflepuff
const hufflepuff = document.querySelector(".hufflepuff");
const hufflepuffBtnOpen = document.querySelector(".hufflepuff-btn-open");
const toggleActiveHufflepuff = () => {
  hideAllPagesAndDeactivateButtons();
  hufflepuff.classList.remove("is-hidden");
  hufflepuffBtnOpen.classList.add("active-btn");
};
hufflepuffBtnOpen.addEventListener("click", toggleActiveHufflepuff);
