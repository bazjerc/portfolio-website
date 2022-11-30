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
          <a href="${projectData.url}" target="_blank"><button class="btn">View project</button></a>
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

// Page init

(function () {
  populatePage(projectsData);
})();

// Markup
// project card
/* 
<div class="card">
  <div class="card__figure">
    <img
      src="../../assets/images/portfolio/image-portfolio-manage@2x.jpg"
      alt="Hero"
    />
  </div>
  <div class="card__content">
    <div class="card__content-wrapper">
      <div class="card__main">
        <h2 class="card__title">About me</h2>
        <p class="card__text">
          I’m a junior front-end developer looking for a new role in
          an exciting company. I focus on writing accessible HTML,
          using modern CSS practices and writing clean JavaScript.
          When writing JavaScript code, I mostly use React, but I can
          adapt to whatever tools are required. I’m based in London,
          UK, but I’m happy working remotely and have experience in
          remote teams. When I’m not coding, you’ll find me outdoors.
          I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
      </div>
      <div class="card__action">
        <button class="btn">View project</button>
      </div>
    </div>
  </div>
</div>
*/
