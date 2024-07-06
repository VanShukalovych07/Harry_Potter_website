const students = document.querySelector(".students-section");
const studentsBtnOpen = document.querySelector(".students-btn-open");
const studentsBtnClose = document.querySelector(".students-btn-close");
const toggleModal = () => students.classList.toggle("is-hidden");
studentsBtnOpen.addEventListener("click", toggleModal);
studentsBtnClose.addEventListener("click", toggleModal);
