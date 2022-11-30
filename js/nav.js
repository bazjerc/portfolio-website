// Page elements

const siteNavs = document.querySelectorAll(".nav");
const phoneNav = document.querySelector(".nav-phone__wrapper");
const btnOpenPhoneNav = document.querySelector(".nav-phone__control-btn--open");
const btnClosePhoneNav = document.querySelector(
  ".nav-phone__control-btn--close"
);

const phoneMediaQuery = window.matchMedia("(max-width: 576px)");

// Phone nav open and close logic

const openPhoneNav = function () {
  phoneNav.style.display = "block";
  btnOpenPhoneNav.style.display = "none";
  btnClosePhoneNav.style.display = "block";
};

const closePhoneNav = function () {
  phoneNav.style.display = "none";
  btnOpenPhoneNav.style.display = "block";
  btnClosePhoneNav.style.display = "none";
};

// Link hover effect logic

const handleLinkHover = function (e) {
  if (!e.target.parentElement.classList.contains("nav__item")) return;
  const siblingLinks = e.currentTarget.querySelectorAll(".nav__item");
  const targetLink = e.target.parentElement;
  siblingLinks.forEach((link) => {
    if (link !== targetLink) {
      if (e.type === "mouseover") {
        link.classList.add("minified");
      } else if (e.type === "mouseout") {
        link.classList.remove("minified");
      }
    }
  });
};

const handlePhoneLinkHover = function (e) {
  if (!e.target.parentElement.classList.contains("nav-phone__item")) return;
  const siblingLinks = e.currentTarget.querySelectorAll(".nav-phone__item");
  const targetLink = e.target.parentElement;
  siblingLinks.forEach((link) => {
    if (link !== targetLink) {
      if (e.type === "mouseover") {
        link.classList.add("minified");
      } else if (e.type === "mouseout") {
        link.classList.remove("minified");
      }
    }
  });
};

// Event listeners

btnOpenPhoneNav.addEventListener("click", openPhoneNav);
btnClosePhoneNav.addEventListener("click", closePhoneNav);

phoneMediaQuery.addEventListener("change", (e) => {
  if (!e.matches) {
    closePhoneNav();
  }
});

siteNavs.forEach((nav) => {
  nav.addEventListener("mouseover", handleLinkHover);
  nav.addEventListener("mouseout", handleLinkHover);
});

phoneNav.addEventListener("mouseover", handlePhoneLinkHover);
phoneNav.addEventListener("mouseout", handlePhoneLinkHover);
