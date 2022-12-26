import "./js/nav.js";
import "./js/social.js";

// Page elements

const aboutButton = document.querySelector(".hero .icn-btn");

// Scroll to bio logic

const scrollToBio = function () {
  const yOffset = -40;
  const y =
    window.pageYOffset +
    document.querySelector(".card--bio").getBoundingClientRect().top +
    yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

// Event listeners

aboutButton.addEventListener("click", scrollToBio);
