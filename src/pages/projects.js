import { typingAnimation } from "../tools";

//Img
import RVSrc from "../Img/risskovvinduespudsning.png";

const createProjects = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("projects-con", "flex-column", "al-cen");
    content.setAttribute("id", "projects");

    const innerContent = document.createElement("div");
    innerContent.classList.add("projects-innerCon");

    const header = document.createElement("div");
    header.style.height = "58.4px";

    const header1 = document.createElement("span");
    header1.classList.add("heading-text");
    header1.textContent = "";

    const header2 = document.createElement("span");
    header2.classList.add("heading-text", "secondary-color");
    header2.textContent = "";

    header.appendChild(header1);
    header.appendChild(header2);

    const projectsUnderline = document.createElement("div");
    projectsUnderline.classList.add("projectsUnderline");

    let scrolled = false;

    window.addEventListener("scroll", () => {
      if (
        scrolled == false &&
        content.getBoundingClientRect().top / innerHeight < 0.35
      ) {
        scrolled = true;

        projectsUnderline.classList.add("projectsUnderline-animation");

        setTimeout(() => {
          typingAnimation(header1, "Things I have", 60);
          setTimeout(() => {
            typingAnimation(header2, " built", 60);
          }, 780);
        }, 1000);
      }
    });

    const projectCon1 = document.createElement("div");
    projectCon1.classList.add("project-con", "flex-row", "al-cen");

    const projectImg = new Image();
    projectImg.src = RVSrc;
    projectImg.classList.add("project-img-right");

    const projectTextCon = document.createElement("div");
    projectTextCon.classList.add("project-text-con-right", "flex-column");

    const projectTextHeader = document.createElement("span");
    projectTextHeader.classList.add("project-text-header");
    projectTextHeader.textContent = "Local window washing site";

    const projectText = document.createElement("span");
    projectText.classList.add("normal-text");
    projectText.textContent =
      "Site for a local window washing startup. Optimzed UX with responsive design.";

    const projectTekText = document.createElement("span");
    projectTekText.classList.add("project-tek-text");
    projectTekText.textContent = "JS - CSS - HTML - Webpack";

    const projectBtnCon = document.createElement("div");
    projectBtnCon.classList.add("project-btn-con-right", "flex-row");

    const projectBtnOverflowCon1 = document.createElement("div");
    projectBtnOverflowCon1.classList.add("project-btn-overflow-con");

    const projectBtnCode = document.createElement("button");
    projectBtnCode.classList.add(
      "project-btn",
      "project-btn-code",
      "flex-row",
      "center"
    );
    projectBtnCode.textContent = "<Code/>";

    projectBtnOverflowCon1.appendChild(projectBtnCode);

    const projectBtnOverflowCon2 = document.createElement("div");
    projectBtnOverflowCon2.classList.add("project-btn-overflow-con");

    const projectBtnLive = document.createElement("button");
    projectBtnLive.classList.add(
      "project-btn",
      "project-btn-live",
      "flex-row",
      "center"
    );
    projectBtnLive.textContent = "<Live/>";

    projectBtnOverflowCon2.appendChild(projectBtnLive);

    projectBtnCon.appendChild(projectBtnOverflowCon1);
    projectBtnCon.appendChild(projectBtnOverflowCon2);

    projectTextCon.appendChild(projectTextHeader);
    projectTextCon.appendChild(projectText);
    projectTextCon.appendChild(projectTekText);
    projectTextCon.appendChild(projectBtnCon);

    projectCon1.appendChild(projectImg);
    projectCon1.appendChild(projectTextCon);

    innerContent.appendChild(header);
    innerContent.appendChild(projectsUnderline);

    content.appendChild(innerContent);
    content.appendChild(projectCon1);

    resolve(content);
  });
};

export default createProjects;
