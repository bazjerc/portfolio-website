// Page elements

import { socialLinks } from "./data/social-links.js";

const socialLinksWrapper = document.querySelectorAll(".social");

// Generate social icon

const generateSocialLinkIcon = function (linkData, accent) {
  const socialLinkIcon = document.createElement("a");
  socialLinkIcon.href = linkData.link;
  socialLinkIcon.target = "_blank";
  socialLinkIcon.innerHTML = `
    <img
      class="social__icon"
      src="../../assets/icons/${linkData.type.toLowerCase()}-${accent}.svg"
      alt="${linkData.type} link"
    />
  `;
  return socialLinkIcon;
};

// Populate social components with icons

socialLinksWrapper.forEach((wrapper) => {
  socialLinks.forEach((linkData) => {
    const socialLink = generateSocialLinkIcon(linkData, wrapper.dataset.accent);
    wrapper.appendChild(socialLink);
  });
});
