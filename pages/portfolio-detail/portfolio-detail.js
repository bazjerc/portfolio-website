import "../../js/nav.js";
import "../../js/social.js"

import { projectsData } from "../../js/data/portfolio-projects.js";

// Page elements

const contentWrapper = document.querySelector(".content-wrapper");
const errorMessage = document.querySelector(".error-message");

const projectHeroImage = document.querySelector(".project-hero");
const projectTitleElement = document.querySelector(".project-summary__title");
const projectSummaryElement = document.querySelector(".project-summary__text");
const projectKeywordsContainer = document.querySelector(
  ".project-summary__keywords"
);
const projectActionContainer = document.querySelector(
  ".project-summary__action"
);
const projectBackgroundElement = document.querySelector(
  ".project-background__text"
);
const projectPreviewsContainer = document.querySelector(
  ".project-background__preview"
);
const btnPreviousProject = document.querySelector(".navigation__btn--left");
const btnNextProject = document.querySelector(".navigation__btn--right");

// Page logic

const getProjectId = function () {
  const urlParams = new URLSearchParams(document.location.search);
  return urlParams.get("project");
};

const getProjectData = function (projectId) {
  return projectsData.find((projectData) => projectData.id === projectId);
};

const updatePageWithData = function (projectData) {
  // Update hero image
  projectHeroImage.innerHTML = `
    <img src="../../assets/images/portfolio/${projectData.figure.hero}" alt="Project thumbnail" />
  `;
  // Update project title
  projectTitleElement.textContent = projectData.name;
  // Update project summary
  projectSummaryElement.textContent = projectData.description;
  // Update project background
  projectBackgroundElement.textContent = projectData.descriptionLong;
  // Update project keywords
  const categoryKeywords = document.createElement("p");
  const techKeywords = document.createElement("p");
  projectData.keywords.category.forEach(
    (keyword, idx, arr) =>
      (categoryKeywords.textContent +=
        idx === arr.length - 1 ? keyword : keyword + " / ")
  );
  projectData.keywords.tech.forEach(
    (keyword, idx, arr) =>
      (techKeywords.textContent +=
        idx === arr.length - 1 ? keyword : keyword + " / ")
  );
  projectKeywordsContainer.append(categoryKeywords, techKeywords);
  // Update project actions
  projectActionContainer.innerHTML = `
    <a href="${projectData.url}" target="_blank">
      <button class="btn">Visit website</button>
    </a>
  `;
  // Update project previews
  projectData.figure.preview.forEach((previewImg) => {
    projectPreviewsContainer.innerHTML += `
    <div class="project-background__preview-img">
      <img
        src="../../assets/images/portfolio/${previewImg}"
        alt="Project preview"
      />
    </div>
    `;
  });
};

const updateNavigationButtons = function (projectId) {
  const projectIdx = projectsData.findIndex(
    (projectData) => projectData.id === projectId
  );
  const prevIdx = projectIdx === 0 ? projectsData.length - 1 : projectIdx - 1;
  const nextIdx = projectIdx === projectsData.length - 1 ? 0 : projectIdx + 1;
  const prevProjectData = projectsData[prevIdx];
  const nextProjectData = projectsData[nextIdx];

  btnPreviousProject.closest("a").href = `./?project=${prevProjectData.id}`;
  btnNextProject.closest("a").href = `./?project=${nextProjectData.id}`;

  btnPreviousProject.querySelector("h3").textContent = prevProjectData.name;
  btnNextProject.querySelector("h3").textContent = nextProjectData.name;
};

const showErrorMessage = function () {
  contentWrapper.style.display = "none";
  errorMessage.style.display = "block";
};

// Page init

(function () {
  const projectId = getProjectId();
  const projectData = getProjectData(projectId);
  if (!projectData) {
    showErrorMessage();
    return;
  }
  updatePageWithData(projectData);
  updateNavigationButtons(projectId);
})();
