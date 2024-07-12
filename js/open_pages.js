// Students
const students = document.querySelector(".students-section");
const studentsBtnOpen = document.querySelector(".students-btn-open");
const studentsBtnClose = document.querySelector(".students-btn-close");
const toggleStudents = () => {
  students.classList.toggle("is-hidden");
  if (!students.classList.contains("is-hidden")) {
    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
  }
};
studentsBtnOpen.addEventListener("click", toggleStudents);
studentsBtnClose.addEventListener("click", toggleStudents);
// Personnel
const personnel = document.querySelector(".personnel-section");
const personnelBtnOpen = document.querySelector(".personnel-btn-open");
const personnelBtnClose = document.querySelector(".personnel-btn-close");
const togglePersonnel = () => {
  personnel.classList.toggle("is-hidden");
  if (!personnel.classList.contains("is-hidden")) {
    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
  }
};
personnelBtnOpen.addEventListener("click", togglePersonnel);
personnelBtnClose.addEventListener("click", togglePersonnel);

// House
const house = document.querySelector(".house-section");
const houseBtnOpen = document.querySelector(".house-btn-open");
const houseBtnClose = document.querySelector(".house-btn-close");
const toggleHouse = () => {
  house.classList.toggle("is-hidden");
  if (!house.classList.contains("is-hidden")) {
    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
  }
};
houseBtnOpen.addEventListener("click", toggleHouse);
houseBtnClose.addEventListener("click", toggleHouse);
