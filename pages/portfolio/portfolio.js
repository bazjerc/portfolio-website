import "../../js/nav.js";
import "../../js/social.js";

import { projectsData } from "../../js/data/portfolio-projects.js";

// Page elements

const projectsContainer = document.getElementById("projects");

// Generate content functions

const generateProjectCard = function (projectData) {
  const projectCard = document.createElement("div");
  projectCard.className = "card";

  const cardInnerHTML = `
    <div class="card__figure">
      <img
        src="../../assets/images/portfolio/${projectData.figure.thumb}"
        alt="${projectData.name} thumbnail"
      />
    </div>
    <div class="card__content">
      <div class="card__content-wrapper">
        <div class="card__main">
          <h2 class="card__title">${projectData.name}</h2>
          <p class="card__text">
            ${projectData.description}
          </p>
        </div>
        <div class="card__action">
          <a href="/pages/portfolio-detail?project=${projectData.id}" target="_blank"><button class="btn">View project</button></a>
        </div>
      </div>
    </div>
  `;

  projectCard.innerHTML = cardInnerHTML;
  return projectCard;
};

const populatePage = function (projectsData) {
  projectsContainer.innerHTML = "";
  projectsData.forEach((project) => {
    const projectCard = generateProjectCard(project);
    projectsContainer.appendChild(projectCard);
  });
};

// Project thumbnail scale animation

const scaleProjectThumbnail = function (e) {
  if (!e.target.classList.contains("btn")) return;
  const projectThumbnail = e.target
    .closest(".card")
    .querySelector(".card__figure img");
  projectThumbnail.classList.add("scaled");
  e.target.addEventListener(
    "mouseout",
    function () {
      projectThumbnail.classList.remove("scaled");
    },
    { once: true }
  );
};

// Page init

(function () {
  populatePage(projectsData);
})();

// Event listeners

projectsContainer.addEventListener("mouseover", scaleProjectThumbnail);
