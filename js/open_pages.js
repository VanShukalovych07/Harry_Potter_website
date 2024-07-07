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
    // open second section when students-section was closed
    // document.querySelectorAll(".main-menu").forEach((fileContent) => {
    //   fileContent.classList.add("is-open");
    // });
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
    // open second section when personnel-section was closed
    // document.querySelectorAll(".main-menu").forEach((fileContent) => {
    //   fileContent.classList.add("is-open");
    // });
  }
};
personnelBtnOpen.addEventListener("click", togglePersonnel);
personnelBtnClose.addEventListener("click", togglePersonnel);
