// Page elements

const navPhoneWrapper = document.querySelector(".nav-phone__wrapper");
const btnOpen = document.querySelector(".nav-phone__control-btn--open");
const btnClose = document.querySelector(".nav-phone__control-btn--close");

const phoneMediaQuery = window.matchMedia("(max-width: 576px)");

const openPhoneNav = function () {
  navPhoneWrapper.style.display = "block";
  btnOpen.style.display = "none";
  btnClose.style.display = "block";
};

const closePhoneNav = function () {
  navPhoneWrapper.style.display = "none";
  btnOpen.style.display = "block";
  btnClose.style.display = "none";
};

btnOpen.addEventListener("click", openPhoneNav);
btnClose.addEventListener("click", closePhoneNav);

phoneMediaQuery.addEventListener("change", (e) => {
  if (!e.matches) {
    closePhoneNav();
  }
});
