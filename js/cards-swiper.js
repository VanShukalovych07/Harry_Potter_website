//Students
document.addEventListener("DOMContentLoaded", function () {
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
  const StudentPage1 = document.querySelector(".students-page-1");
  const StudentPage2 = document.querySelector(".students-page-2");

  function updatePagination() {
    if (StudentPage1.classList.contains("is-hidden")) {
      StudentPaginationButton1.classList.remove("active-pagination");
      StudentPaginationButton2.classList.add("active-pagination");
      StudentNextButton.classList.add("is-hidden");
      StudentPrevButton.classList.remove("is-hidden");
    } else {
      StudentPaginationButton1.classList.add("active-pagination");
      StudentPaginationButton2.classList.remove("active-pagination");
      StudentNextButton.classList.remove("is-hidden");
      StudentPrevButton.classList.add("is-hidden");
    }
  }

  StudentNextButton.addEventListener("click", function () {
    if (!StudentPage2.classList.contains("is-hidden")) return;
    StudentPage1.classList.add("is-hidden");
    StudentPage2.classList.remove("is-hidden");

    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
    updatePagination();
  });

  StudentPrevButton.addEventListener("click", function () {
    if (!StudentPage1.classList.contains("is-hidden")) return;
    StudentPage2.classList.add("is-hidden");
    StudentPage1.classList.remove("is-hidden");

    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
    updatePagination();
  });

  updatePagination();
});
//Personnel
document.addEventListener("DOMContentLoaded", function () {
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
  const PersonnelPage1 = document.querySelector(".personnel-page-1");
  const PersonnelPage2 = document.querySelector(".personnel-page-2");

  function updatePagination() {
    if (PersonnelPage1.classList.contains("is-hidden")) {
      PersonnelPaginationButton1.classList.remove("active-pagination");
      PersonnelPaginationButton2.classList.add("active-pagination");
      PersonnelNextButton.classList.add("is-hidden");
      PersonnelPrevButton.classList.remove("is-hidden");
    } else {
      PersonnelPaginationButton1.classList.add("active-pagination");
      PersonnelPaginationButton2.classList.remove("active-pagination");
      PersonnelNextButton.classList.remove("is-hidden");
      PersonnelPrevButton.classList.add("is-hidden");
    }
  }

  PersonnelNextButton.addEventListener("click", function () {
    if (!PersonnelPage2.classList.contains("is-hidden")) return;
    PersonnelPage1.classList.add("is-hidden");
    PersonnelPage2.classList.remove("is-hidden");

    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
    updatePagination();
  });

  PersonnelPrevButton.addEventListener("click", function () {
    if (!PersonnelPage1.classList.contains("is-hidden")) return;
    PersonnelPage2.classList.add("is-hidden");
    PersonnelPage1.classList.remove("is-hidden");

    document.querySelectorAll(".more-info").forEach((fileContent) => {
      fileContent.classList.add("is-hidden");
    });
    updatePagination();
  });

  updatePagination();
});
