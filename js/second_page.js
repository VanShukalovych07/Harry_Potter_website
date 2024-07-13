const mainMenu = document.querySelector(".main-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnsClose = document.querySelectorAll(".menu-btn-close");
const toggleMenu = () => {
  mainMenu.classList.toggle("is-open");
  disableScroll();
  scrollToMainMenu();
};
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");
const scrollToMainMenu = () => {
  const mainMenuSection = document.querySelector(".main-menu");
  mainMenuSection.scrollIntoView({ behavior: "smooth" });
};
menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnsClose.forEach((btn) => {
  btn.addEventListener("click", toggleMenu);
});
