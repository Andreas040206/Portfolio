import { typingAnimation } from "../tools";

//Img
import RVSrc from "../Img/risskovvinduespudsning.png";
import battleshipSrc from "../Img/battleships.png";
import weatherAppSrc from "../Img/weatherApp.png";
import knightMovesCalSrc from "../Img/knightMovesCal.png";

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

    innerContent.appendChild(header);
    innerContent.appendChild(projectsUnderline);

    const projectCon1 = document.createElement("div");
    projectCon1.classList.add("project-con", "flex-row", "al-cen");

    const projectImg = new Image();
    projectImg.src = RVSrc;
    projectImg.classList.add("project-img-right");
    projectImg.addEventListener("click", () => {
      window.open("https://risskovvinduespudsning.com/", "_blank");
    });

    const projectTextCon = document.createElement("div");
    projectTextCon.classList.add("project-text-con", "flex-column");

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

    projectBtnOverflowCon1.addEventListener("click", () => {
      window.open(
        "https://github.com/Andreas040206/Risskov-Vinduesrens",
        "_blank"
      );
    });

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

    projectBtnOverflowCon2.addEventListener("click", () => {
      window.open("https://risskovvinduespudsning.com/", "_blank");
    });

    projectBtnCon.appendChild(projectBtnOverflowCon1);
    projectBtnCon.appendChild(projectBtnOverflowCon2);

    projectTextCon.appendChild(projectTextHeader);
    projectTextCon.appendChild(projectText);
    projectTextCon.appendChild(projectTekText);
    projectTextCon.appendChild(projectBtnCon);

    projectCon1.appendChild(projectImg);

    projectCon1.appendChild(projectTextCon);

    const projectCon2 = document.createElement("div");
    projectCon2.classList.add("project-con", "flex-row", "al-cen");

    const project2Img = new Image();
    project2Img.src = battleshipSrc;
    project2Img.classList.add("project-img-left");
    project2Img.addEventListener("click", () => {
      window.open("https://andreas040206.github.io/Battleships/", "_blank");
    });

    const project2TextCon = document.createElement("div");
    project2TextCon.classList.add("project-text-con", "flex-column", "right");

    const project2TextHeader = document.createElement("span");
    project2TextHeader.classList.add("project-text-header");
    project2TextHeader.textContent = "Battleships";

    const project2Text = document.createElement("span");
    project2Text.classList.add("normal-text");
    project2Text.textContent =
      "Site for playing battleships with your friends. Build with jest testing tools. Smart AI that calculates moves.";

    const project2TekText = document.createElement("span");
    project2TekText.classList.add("project-tek-text");
    project2TekText.textContent = "JS - CSS - HTML - Webpack - Jest";

    const project2BtnCon = document.createElement("div");
    project2BtnCon.classList.add("project-btn-con-right", "flex-row");

    const project2BtnOverflowCon = document.createElement("div");
    project2BtnOverflowCon.classList.add("project-btn-overflow-con");

    const project2BtnCode = document.createElement("button");
    project2BtnCode.classList.add(
      "project-btn",
      "project-btn-code",
      "flex-row",
      "center"
    );
    project2BtnCode.textContent = "<Code/>";

    project2BtnOverflowCon.appendChild(project2BtnCode);

    project2BtnOverflowCon.addEventListener("click", () => {
      window.open("https://github.com/Andreas040206/Battleships", "_blank");
    });

    const project2BtnOverflowCon2 = document.createElement("div");
    project2BtnOverflowCon2.classList.add("project-btn-overflow-con");

    const project2BtnLive = document.createElement("button");
    project2BtnLive.classList.add(
      "project-btn",
      "project-btn-live",
      "flex-row",
      "center"
    );
    project2BtnLive.textContent = "<Live/>";

    project2BtnOverflowCon2.appendChild(project2BtnLive);

    project2BtnOverflowCon2.addEventListener("click", () => {
      window.open("https://andreas040206.github.io/Battleships/", "_blank");
    });

    project2BtnCon.appendChild(project2BtnOverflowCon);
    project2BtnCon.appendChild(project2BtnOverflowCon2);

    project2TextCon.appendChild(project2TextHeader);
    project2TextCon.appendChild(project2Text);
    project2TextCon.appendChild(project2TekText);
    project2TextCon.appendChild(project2BtnCon);

    projectCon2.appendChild(project2Img);
    projectCon2.appendChild(project2TextCon);

    const projectCon3 = document.createElement("div");
    projectCon3.classList.add("project-con", "flex-row", "al-cen");

    const project3Img = new Image();
    project3Img.src = weatherAppSrc;
    project3Img.classList.add("project-img-right");
    project3Img.addEventListener("click", () => {
      window.open("https://andreas040206.github.io/WeatherApp/", "_blank");
    });

    const project3TextCon = document.createElement("div");
    project3TextCon.classList.add("project-text-con", "flex-column");

    const project3TextHeader = document.createElement("span");
    project3TextHeader.classList.add("project-text-header");
    project3TextHeader.textContent = "Weather App";

    const project3Text = document.createElement("span");
    project3Text.classList.add("normal-text");
    project3Text.textContent =
      "A Weather app fetching data from weatherapi.com's free API";

    const project3TekText = document.createElement("span");
    project3TekText.classList.add("project-tek-text");
    project3TekText.textContent = "JS - CSS - HTML - Webpack";

    const project3BtnCon = document.createElement("div");
    project3BtnCon.classList.add("project-btn-con-right", "flex-row");

    const project3BtnOverflowCon = document.createElement("div");
    project3BtnOverflowCon.classList.add("project-btn-overflow-con");

    const project3BtnCode = document.createElement("button");
    project3BtnCode.classList.add(
      "project-btn",
      "project-btn-code",
      "flex-row",
      "center"
    );
    project3BtnCode.textContent = "<Code/>";

    project3BtnOverflowCon.appendChild(project3BtnCode);

    project3BtnOverflowCon.addEventListener("click", () => {
      window.open("https://github.com/Andreas040206/WeatherApp/", "_blank");
    });

    const project3BtnOverflowCon3 = document.createElement("div");
    project3BtnOverflowCon3.classList.add("project-btn-overflow-con");

    const project3BtnLive = document.createElement("button");
    project3BtnLive.classList.add(
      "project-btn",
      "project-btn-live",
      "flex-row",
      "center"
    );
    project3BtnLive.textContent = "<Live/>";

    project3BtnOverflowCon3.appendChild(project3BtnLive);

    project3BtnOverflowCon3.addEventListener("click", () => {
      window.open("https://andreas040206.github.io/WeatherApp/", "_blank");
    });

    project3BtnCon.appendChild(project3BtnOverflowCon);
    project3BtnCon.appendChild(project3BtnOverflowCon3);

    project3TextCon.appendChild(project3TextHeader);
    project3TextCon.appendChild(project3Text);
    project3TextCon.appendChild(project3TekText);
    project3TextCon.appendChild(project3BtnCon);

    projectCon3.appendChild(project3Img);
    projectCon3.appendChild(project3TextCon);

    const projectCon4 = document.createElement("div");
    projectCon4.classList.add("project-con", "flex-row", "al-cen");

    const project4Img = new Image();
    project4Img.src = knightMovesCalSrc;
    project4Img.classList.add("project-img-left");
    project4Img.style.border = "solid black 1px";
    project4Img.addEventListener("click", () => {
      window.open("https://andreas040206.github.io/Chessgames/", "_blank");
    });

    const project4TextCon = document.createElement("div");
    project4TextCon.classList.add("project-text-con", "flex-column", "right");

    const project4TextHeader = document.createElement("span");
    project4TextHeader.classList.add("project-text-header");
    project4TextHeader.textContent = "Knight Moves Calculator";

    const project4Text = document.createElement("span");
    project4Text.classList.add("normal-text");
    project4Text.textContent =
      "Recursive algorithm with a timecomplexity of O(n²) that calculates the shortest knight moves posible.";

    const project4TekText = document.createElement("span");
    project4TekText.classList.add("project-tek-text");
    project4TekText.textContent = "JS - CSS - HTML - Webpack";

    const project4BtnCon = document.createElement("div");
    project4BtnCon.classList.add("project-btn-con-right", "flex-row");

    const project4BtnOverflowCon = document.createElement("div");
    project4BtnOverflowCon.classList.add("project-btn-overflow-con");

    const project4BtnCode = document.createElement("button");
    project4BtnCode.classList.add(
      "project-btn",
      "project-btn-code",
      "flex-row",
      "center"
    );
    project4BtnCode.textContent = "<Code/>";

    project4BtnOverflowCon.appendChild(project4BtnCode);

    project4BtnOverflowCon.addEventListener("click", () => {
      window.open("https://github.com/Andreas040206/Chessgames/", "_blank");
    });

    const project4BtnOverflowCon4 = document.createElement("div");
    project4BtnOverflowCon4.classList.add("project-btn-overflow-con");

    const project4BtnLive = document.createElement("button");
    project4BtnLive.classList.add(
      "project-btn",
      "project-btn-live",
      "flex-row",
      "center"
    );
    project4BtnLive.textContent = "<Live/>";

    project4BtnOverflowCon4.appendChild(project4BtnLive);

    project4BtnOverflowCon4.addEventListener("click", () => {
      window.open("https://andreas040206.github.io/Chessgames/", "_blank");
    });

    project4BtnCon.appendChild(project4BtnOverflowCon);
    project4BtnCon.appendChild(project4BtnOverflowCon4);

    project4TextCon.appendChild(project4TextHeader);
    project4TextCon.appendChild(project4Text);
    project4TextCon.appendChild(project4TekText);
    project4TextCon.appendChild(project4BtnCon);

    projectCon4.appendChild(project4Img);
    projectCon4.appendChild(project4TextCon);

    const moreProjectsBtn = document.createElement("button");
    moreProjectsBtn.classList.add("projects-more-btn", "normal-text");
    moreProjectsBtn.textContent = "More projects";

    moreProjectsBtn.addEventListener("click", () => {
      window.open("https://github.com/Andreas040206/", "_blank");
    });

    content.appendChild(innerContent);
    content.appendChild(projectCon1);
    content.appendChild(projectCon2);
    content.appendChild(projectCon3);
    content.appendChild(projectCon4);
    content.appendChild(moreProjectsBtn);

    resolve(content);
  });
};

export default createProjects;
