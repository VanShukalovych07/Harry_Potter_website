const Harry = document.querySelector(".more-info");
const HarryBtnOpen = document.querySelector(".Harry-btn-open");
const HarryBtnClose = document.querySelector(".close-more-info");
const toggleModal = () => Harry.classList.toggle("is-hidden");
HarryBtnOpen.addEventListener("click", toggleModal);
HarryBtnClose.addEventListener("click", toggleModal);
