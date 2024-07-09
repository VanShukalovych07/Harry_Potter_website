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

  if (!gryffindor.classList.contains("is-hidden")) {
    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
  }
};
gryffindorBtnOpen.addEventListener("click", toggleActiveGryffindor);

// Slytherin
const slytherin = document.querySelector(".slytherin");
const slytherinBtnOpen = document.querySelector(".slytherin-btn-open");
const toggleActiveSlytherin = () => {
  hideAllPagesAndDeactivateButtons();
  slytherin.classList.remove("is-hidden");
  slytherinBtnOpen.classList.add("active-btn");

  if (!slytherin.classList.contains("is-hidden")) {
    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
  }
};
slytherinBtnOpen.addEventListener("click", toggleActiveSlytherin);

// Ravenclaw
const ravenclaw = document.querySelector(".ravenclaw");
const ravenclawBtnOpen = document.querySelector(".ravenclaw-btn-open");
const toggleActiveRavenclaw = () => {
  hideAllPagesAndDeactivateButtons();
  ravenclaw.classList.remove("is-hidden");
  ravenclawBtnOpen.classList.add("active-btn");

  if (!ravenclaw.classList.contains("is-hidden")) {
    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
  }
};
ravenclawBtnOpen.addEventListener("click", toggleActiveRavenclaw);

// Hufflepuff
const hufflepuff = document.querySelector(".hufflepuff");
const hufflepuffBtnOpen = document.querySelector(".hufflepuff-btn-open");
const toggleActiveHufflepuff = () => {
  hideAllPagesAndDeactivateButtons();
  hufflepuff.classList.remove("is-hidden");
  hufflepuffBtnOpen.classList.add("active-btn");

  if (!hufflepuff.classList.contains("is-hidden")) {
    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
  }
};
hufflepuffBtnOpen.addEventListener("click", toggleActiveHufflepuff);
