import "./js/nav.js";
import "./js/social.js";

// Page elements

const aboutButton = document.querySelector(".hero .icn-btn");
const bioImage = document.querySelector(".card--bio img");

// Scroll to bio logic

const scrollToBio = function () {
  const yOffset = -40;
  const y =
    window.pageYOffset +
    document.querySelector(".card--bio").getBoundingClientRect().top +
    yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

// Bio image filter logic

const bioImgObserver = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    if (!sessionStorage.getItem("hasVisited")) {
      entry.target.classList.add("grayscale");
    }
    if (!entry.isIntersecting) return;
    sessionStorage.setItem("hasVisited", true);
    entry.target.classList.remove("grayscale");
    observer.unobserve(entry.target);
  },
  { root: null, rootMargin: "30px", threshold: 0 }
);

// Event listeners

aboutButton.addEventListener("click", scrollToBio);
bioImgObserver.observe(bioImage);
