// Students
document.addEventListener("DOMContentLoaded", function () {
  const students = document.querySelector(".students-section");
  const studentsBtnOpen = document.querySelector(".students-btn-open");
  const studentsBtnClose = document.querySelector(".students-btn-close");
  const StudentPage1 = document.querySelector(".students-page-1");
  const StudentPage2 = document.querySelector(".students-page-2");
  const StudentPaginationButton1 = document.querySelector(
    ".student-pagination-button-1"
  );
  const StudentPaginationButton2 = document.querySelector(
    ".student-pagination-button-2"
  );
  const StudentPrevButton = document.querySelector(
    ".carousel-button-student.prev"
  );
  const StudentNextButton = document.querySelector(
    ".carousel-button-student.next"
  );
  function initializePagination() {
    StudentPage1.classList.remove("is-hidden");
    StudentPage2.classList.add("is-hidden");
    StudentPaginationButton1.classList.add("active-pagination");
    StudentPaginationButton2.classList.remove("active-pagination");
    StudentNextButton.classList.remove("is-hidden");
    StudentPrevButton.classList.add("is-hidden");
  }
  function toggleStudents() {
    students.classList.toggle("is-hidden");
    if (!students.classList.contains("is-hidden")) {
      document.querySelectorAll(".more-info").forEach((fileContent) => {
        fileContent.classList.add("is-hidden");
      });
      initializePagination();
    }
  }
  studentsBtnOpen.addEventListener("click", toggleStudents);
  studentsBtnClose.addEventListener("click", toggleStudents);
});
// Personnel
document.addEventListener("DOMContentLoaded", function () {
  const personnel = document.querySelector(".personnel-section");
  const personnelBtnOpen = document.querySelector(".personnel-btn-open");
  const personnelBtnClose = document.querySelector(".personnel-btn-close");
  const PersonnelPage1 = document.querySelector(".personnel-page-1");
  const PersonnelPage2 = document.querySelector(".personnel-page-2");
  const PersonnelPaginationButton1 = document.querySelector(
    ".personnel-pagination-button-1"
  );
  const PersonnelPaginationButton2 = document.querySelector(
    ".personnel-pagination-button-2"
  );
  const PersonnelPrevButton = document.querySelector(
    ".carousel-button-personnel.prev"
  );
  const PersonnelNextButton = document.querySelector(
    ".carousel-button-personnel.next"
  );
  function initializePersonnelPagination() {
    PersonnelPage1.classList.remove("is-hidden");
    PersonnelPage2.classList.add("is-hidden");
    PersonnelPaginationButton1.classList.add("active-pagination");
    PersonnelPaginationButton2.classList.remove("active-pagination");
    PersonnelNextButton.classList.remove("is-hidden");
    PersonnelPrevButton.classList.add("is-hidden");
  }
  function togglePersonnel() {
    personnel.classList.toggle("is-hidden");
    if (!personnel.classList.contains("is-hidden")) {
      document.querySelectorAll(".more-info").forEach((fileContent) => {
        fileContent.classList.add("is-hidden");
      });
      initializePersonnelPagination();
    }
  }
  personnelBtnOpen.addEventListener("click", togglePersonnel);
  personnelBtnClose.addEventListener("click", togglePersonnel);
});
//House
document.addEventListener("DOMContentLoaded", function () {
  const house = document.querySelector(".house-section");
  const houseBtnOpen = document.querySelector(".house-btn-open");
  const houseBtnClose = document.querySelector(".house-btn-close");
  const slytherin = document.querySelector(".slytherin");
  const slytherinBtnOpen = document.querySelector(".slytherin-btn-open");
  const ravenclaw = document.querySelector(".ravenclaw");
  const ravenclawBtnOpen = document.querySelector(".ravenclaw-btn-open");
  const hufflepuff = document.querySelector(".hufflepuff");
  const hufflepuffBtnOpen = document.querySelector(".hufflepuff-btn-open");
  const gryffindor = document.querySelector(".gryffindor");
  const gryffindorBtnOpen = document.querySelector(".gryffindor-btn-open");
  const GryffindorPage1 = document.querySelector(".gryffindor-page-1");
  const GryffindorPage2 = document.querySelector(".gryffindor-page-2");
  const GryffindorPaginationButton1 = document.querySelector(
    ".gryffindor-pagination-button-1"
  );
  const GryffindorPaginationButton2 = document.querySelector(
    ".gryffindor-pagination-button-2"
  );
  const GryffindorPrevButton = document.querySelector(
    ".carousel-button-gryffindor.prev"
  );
  const GryffindorNextButton = document.querySelector(
    ".carousel-button-gryffindor.next"
  );
  function initializeGryffindorPagination() {
    console.log("Initializing Gryffindor pagination");
    GryffindorPage1.classList.remove("is-hidden");
    GryffindorPage2.classList.add("is-hidden");
    GryffindorPaginationButton1.classList.add("active-pagination");
    GryffindorPaginationButton2.classList.remove("active-pagination");
    GryffindorNextButton.classList.remove("is-hidden");
    GryffindorPrevButton.classList.add("is-hidden");
  }
  function toggleHouse() {
    console.log("Toggling house section");
    house.classList.toggle("is-hidden");

    if (!house.classList.contains("is-hidden")) {
      document.querySelectorAll(".more-info").forEach((fileContent) => {
        fileContent.classList.add("is-hidden");
      });
      gryffindor.classList.remove("is-hidden");
      slytherin.classList.add("is-hidden");
      ravenclaw.classList.add("is-hidden");
      hufflepuff.classList.add("is-hidden");
      initializeGryffindorPagination();
      gryffindorBtnOpen.classList.add("active-btn");
      slytherinBtnOpen.classList.remove("active-btn");
      ravenclawBtnOpen.classList.remove("active-btn");
      hufflepuffBtnOpen.classList.remove("active-btn");
    }
  }
  houseBtnOpen.addEventListener("click", toggleHouse);
  houseBtnClose.addEventListener("click", toggleHouse);

  GryffindorNextButton.addEventListener("click", function () {
    console.log("Next button clicked");
    if (GryffindorPage2.classList.contains("is-hidden")) {
      GryffindorPage1.classList.add("is-hidden");
      GryffindorPage2.classList.remove("is-hidden");
      GryffindorPaginationButton1.classList.remove("active-pagination");
      GryffindorPaginationButton2.classList.add("active-pagination");
      GryffindorNextButton.classList.add("is-hidden");
      GryffindorPrevButton.classList.remove("is-hidden");
      GryffindorPage1.querySelectorAll(".more-info").forEach((fileContent) => {
        console.log("Hiding more-info on page 1");
        fileContent.classList.add("is-hidden");
      });
    }
  });

  GryffindorPrevButton.addEventListener("click", function () {
    console.log("Prev button clicked");
    if (GryffindorPage1.classList.contains("is-hidden")) {
      GryffindorPage2.classList.add("is-hidden");
      GryffindorPage1.classList.remove("is-hidden");
      GryffindorPaginationButton1.classList.add("active-pagination");
      GryffindorPaginationButton2.classList.remove("active-pagination");
      GryffindorNextButton.classList.remove("is-hidden");
      GryffindorPrevButton.classList.add("is-hidden");
      GryffindorPage2.querySelectorAll(".more-info").forEach((fileContent) => {
        console.log("Hiding more-info on page 1");
        fileContent.classList.add("is-hidden");
      });
    }
  });
});
