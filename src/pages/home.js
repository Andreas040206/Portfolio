import { typingAnimation } from "../tools";

// Img
import LogoDarkSrc from "../Img/LogoDark.svg";
import LogoDarkBehindSrc from "../Img/LogoDarkBehind.svg";
import LogoLightSrc from "../Img/LogoLight.svg";

import portrait from "../Img/portait.jpg";
import { findLastKey } from "lodash";

const createHome = () => {
  return new Promise((resolve) => {
    const content = document.createElement("main");
    content.classList.add("home-con");

    const navCon = document.createElement("nav");
    navCon.classList.add("nav-con", "flex-row-alignCenter");

    window.addEventListener("scroll", () => {
      if (content.getBoundingClientRect().top <= 0) {
        navCon.classList.add("fixed");
      } else {
        navCon.classList.remove("fixed");
      }
    });

    const logo = new Image();
    logo.src = LogoDarkSrc;
    logo.classList.add("nav-logo");

    const logoBehind = new Image();
    logoBehind.src = LogoDarkBehindSrc;
    logoBehind.classList.add("nav-logo", "nav-logo-behind");

    const navBtnCon = document.createElement("nav");
    navBtnCon.classList.add("nav-btn-con", "flex-row-center");

    let forceScrolling = false;

    const aboutBtn = document.createElement("button");
    aboutBtn.classList.add("nav-btn");
    aboutBtn.textContent = "<About/>";

    aboutBtn.addEventListener("click", () => {
      hoverShape.style.right = "calc(4.5vw + 413.2px - 130px)";
      aboutBtn.style.color = "var(--bg-secondary-color)";

      projectsBtn.style.color = "";
      contactBtn.style.color = "";

      content.scrollIntoView({ behavior: "smooth" });
      forceScrolling = true;
      setTimeout(() => {
        forceScrolling = false;
      }, 1000);
    });

    const projectsBtn = document.createElement("button");
    projectsBtn.classList.add("nav-btn");
    projectsBtn.textContent = "<Projects/>";

    projectsBtn.addEventListener("click", () => {
      hoverShape.style.right = "calc(4.5vw + 271px - 130px)";
      projectsBtn.style.color = "var(--bg-secondary-color)";

      contactBtn.style.color = "";
      aboutBtn.style.color = "";

      const projectsPage = document.getElementById("projects");

      projectsPage.scrollIntoView({ behavior: "smooth" });
      forceScrolling = true;
      setTimeout(() => {
        forceScrolling = false;
      }, 1000);
    });

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("nav-btn");
    contactBtn.textContent = "<Contact/>";

    contactBtn.addEventListener("click", () => {
      hoverShape.style.right = "calc(4.5vw + 120px - 130px)";
      contactBtn.style.color = "var(--bg-secondary-color)";

      projectsBtn.style.color = "";
      aboutBtn.style.color = "";

      const contactPage = document.getElementById("contact");

      contactPage.scrollIntoView({ behavior: "smooth" });
      forceScrolling = true;
      setTimeout(() => {
        forceScrolling = false;
      }, 1000);
    });

    const hoverShape = document.createElement("div");
    hoverShape.classList.add("hovershape");

    hoverShape.style.right = "calc(4.5vw + 413.2px - 130px)";
    aboutBtn.style.color = "var(--bg-color)";

    window.addEventListener("scroll", () => {
      const projectsPage = document.getElementById("projects");
      const contactPage = document.getElementById("contact");

      if (forceScrolling == false) {
        if (contactPage.getBoundingClientRect().top / innerHeight < 0.35) {
          hoverShape.style.right = "calc(4.5vw + 120px - 130px)";
          contactBtn.style.color = "var(--bg-secondary-color)";

          projectsBtn.style.style.color = "";
          aboutBtn.style.color = "";
        } else if (
          projectsPage.getBoundingClientRect().top / innerHeight <
          0.35
        ) {
          hoverShape.style.right = "calc(4.5vw + 271px - 130px)";
          projectsBtn.style.color = "var(--bg-secondary-color)";

          contactBtn.style.color = "";
          aboutBtn.style.color = "";
        } else {
          hoverShape.style.right = "calc(4.5vw + 413.2px - 130px)";
          aboutBtn.style.color = "var(--bg-secondary-color)";

          projectsBtn.style.color = "";
          contactBtn.style.color = "";
        }
      }
    });

    navBtnCon.appendChild(aboutBtn);
    navBtnCon.appendChild(projectsBtn);
    navBtnCon.appendChild(contactBtn);
    navBtnCon.appendChild(hoverShape);

    navCon.appendChild(logoBehind);
    navCon.appendChild(logo);
    navCon.appendChild(navBtnCon);

    const infoCon = document.createElement("div");
    infoCon.classList.add("homeInfo-con", "flex-row-center");

    const aboutmeTextCon = document.createElement("div");
    aboutmeTextCon.classList.add("aboutme-text-con", "flex-column");

    const aboutmeTextHeader = document.createElement("span");
    aboutmeTextHeader.classList.add("heading-text");
    aboutmeTextHeader.textContent = "";

    let viewed = false;

    window.addEventListener("scroll", () => {
      if (
        content.getBoundingClientRect().top / innerHeight < 0.35 &&
        viewed == false
      ) {
        viewed = true;
        typingAnimation(aboutmeTextHeader, "About me", 90);
        portait.classList.add("portait-animation");
      }
    });

    const aboutmeTextUnderline = document.createElement("div");
    aboutmeTextUnderline.classList.add("aboutme-underline");

    const aboutmeText = document.createElement("span");
    aboutmeText.classList.add("normal-text");
    aboutmeText.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    aboutmeTextCon.appendChild(aboutmeTextHeader);
    aboutmeTextCon.appendChild(aboutmeTextUnderline);
    aboutmeTextCon.appendChild(aboutmeText);

    const portait = new Image();
    portait.src = portrait;
    portait.classList.add("aboutme-portrait");

    infoCon.appendChild(aboutmeTextCon);
    infoCon.appendChild(portait);

    content.appendChild(navCon);
    content.appendChild(infoCon);

    resolve(content);
  });
};

export default createHome;
