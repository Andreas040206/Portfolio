import { typingAnimation } from "../tools";

// Img
import LogoDarkSrc from "../Img/LogoDark.svg";
import LogoDarkBehindSrc from "../Img/LogoDarkBehind.svg";
import LogoLightSrc from "../Img/LogoLight.svg";
import LogoLightBehindSrc from "../Img/LogoLightBehind.svg";
import moonIconSrc from "../Img/moonIcon.svg";
import sunIconSrc from "../Img/sunIcon.svg";

import portrait from "../Img/portait.jpg";

// Icons
import html5Src from "../Img/html5.svg";
import cssSrc from "../Img/css.svg";
import javascriptSrc from "../Img/javascript.svg";
import jestSrc from "../Img/jest.svg";
import webpackSrc from "../Img/webpack.svg";
import gitSrc from "../Img/git.svg";
import chatGptSrc from "../Img/chatgpt.png";

const createHome = () => {
  return new Promise((resolve) => {
    const content = document.createElement("main");
    content.classList.add("home-con");

    const navCon = document.createElement("nav");
    navCon.classList.add("nav-con", "flex-row", "al-cen");

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

    logo.addEventListener("click", () => {
      const display = document.getElementById("display");

      display.scrollIntoView({ behavior: "smooth" });
    });

    const navBtnCon = document.createElement("nav");
    navBtnCon.classList.add("nav-btn-con", "flex-row", "center");

    let forceScrolling = false;

    const aboutBtn = document.createElement("button");
    aboutBtn.classList.add("nav-btn");
    aboutBtn.textContent = "<About/>";

    aboutBtn.addEventListener("click", () => {
      hoverShape.style.right = "calc(4.5vw + 413.2px - 130px + 78.2px)";
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
      hoverShape.style.right = "calc(4.5vw + 271px - 130px + 78.2px)";
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
      hoverShape.style.right = "calc(4.5vw + 120px - 130px + 78.2px)";
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
          hoverShape.style.right = "calc(4.5vw + 120px - 130px + 78.2px)";
          contactBtn.style.color = "var(--bg-secondary-color)";

          projectsBtn.style.color = "";
          aboutBtn.style.color = "";
        } else if (
          projectsPage.getBoundingClientRect().top / innerHeight <
          0.35
        ) {
          hoverShape.style.right = "calc(4.5vw + 271px - 130px + 78.2px)";
          projectsBtn.style.color = "var(--bg-secondary-color)";

          contactBtn.style.color = "";
          aboutBtn.style.color = "";
        } else {
          hoverShape.style.right = "calc(4.5vw + 413.2px - 130px + 78.2px)";
          aboutBtn.style.color = "var(--bg-secondary-color)";

          projectsBtn.style.color = "";
          contactBtn.style.color = "";
        }
      }
    });

    const themeChangeBtn = document.createElement("div");
    themeChangeBtn.classList.add("themeChangeBtn", "flex-row", "center");

    const themeIcon = new Image();
    themeIcon.src = sunIconSrc;
    themeIcon.classList.add("themeIconDark");

    let theme = "light";

    const changeTheme = () => {
      if (theme == "light") {
        const root = document.documentElement;
        root.style.setProperty("--bg-color", "white");
        root.style.setProperty("--bg-secondary-color", "#efefefff");
        root.style.setProperty("--primary-color", "black");
        root.style.setProperty("--secondary-color", "#42676bff");
        root.style.setProperty("--third-color", "#858585ff");

        themeIcon.src = moonIconSrc;
        themeIcon.classList.remove("themeIconDark");
        themeIcon.classList.add("themeIconLight");

        logo.src = LogoLightSrc;
        logoBehind.src = LogoLightBehindSrc;
      } else {
        const root = document.documentElement;
        root.style.setProperty("--bg-color", "#111827ff");
        root.style.setProperty("--bg-secondary-color", "#070c16ff");
        root.style.setProperty("--primary-color", "white");
        root.style.setProperty("--secondary-color", "#17d3e8");
        root.style.setProperty("--third-color", "#454545ff");

        themeIcon.src = sunIconSrc;
        themeIcon.classList.remove("themeIconLight");
        themeIcon.classList.add("themeIconDark");

        logo.src = LogoDarkSrc;
        logoBehind.src = LogoDarkBehindSrc;
      }
    };

    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
      changeTheme();
    }

    themeChangeBtn.addEventListener("click", () => {
      if (theme == "dark") {
        theme = "light";
        localStorage.setItem("theme", theme);
      } else {
        theme = "dark";
        localStorage.setItem("theme", theme);
      }
      changeTheme();
    });

    themeChangeBtn.appendChild(themeIcon);

    const screenResized = () => {
      if (innerWidth < 600) {
        while (navBtnCon.firstChild) {
          navBtnCon.removeChild(navBtnCon.lastChild);
        }
        navCon.appendChild(logoBehind);
        navCon.appendChild(logo);
        navCon.appendChild(navBtnCon);

        navBtnCon.appendChild(themeChangeBtn);
      } else {
        while (navBtnCon.firstChild) {
          navBtnCon.removeChild(navBtnCon.lastChild);
        }
        navBtnCon.appendChild(aboutBtn);
        navBtnCon.appendChild(projectsBtn);
        navBtnCon.appendChild(contactBtn);
        navBtnCon.appendChild(themeChangeBtn);
        navBtnCon.appendChild(hoverShape);

        navCon.appendChild(logoBehind);
        navCon.appendChild(logo);
        navCon.appendChild(navBtnCon);
      }
    };

    window.addEventListener("resize", () => {
      screenResized();
    });

    window.addEventListener("load", () => {
      screenResized();
    });

    const infoCon = document.createElement("div");
    infoCon.classList.add("homeInfo-con", "flex-row", "center");

    const aboutmeTextCon = document.createElement("div");
    aboutmeTextCon.classList.add("aboutme-text-con", "flex-column");

    const aboutmeTextHeader = document.createElement("span");
    aboutmeTextHeader.classList.add("heading-text");
    aboutmeTextHeader.textContent = "";

    let viewed = false;

    window.addEventListener("scroll", () => {
      if (
        content.getBoundingClientRect().top / innerHeight < 0.25 &&
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
      "Hello! I'm a passionate programmer who has a deep appreciation for the fusion of code and captivating designs. My creative spirit fuels my work, and I'm on a constant quest for knowledge, always open to fresh perspectives and flexible in adapting to new challenges. With unwavering determination, I embark on digital journeys to craft not just functional, but truly engaging and innovative experiences.";

    aboutmeTextCon.appendChild(aboutmeTextHeader);
    aboutmeTextCon.appendChild(aboutmeTextUnderline);
    aboutmeTextCon.appendChild(aboutmeText);

    const portait = new Image();
    portait.src = portrait;
    portait.classList.add("aboutme-portrait");

    infoCon.appendChild(aboutmeTextCon);
    infoCon.appendChild(portait);

    const skillsCon = document.createElement("div");
    skillsCon.classList.add("aboutme-skills-con", "flex-column");

    const skillsHeaderCon = document.createElement("div");
    skillsHeaderCon.style.height = "58.4px";

    const skillsHeader1 = document.createElement("span");
    skillsHeader1.classList.add("heading-text");
    skillsHeader1.textContent = "";

    const skillsHeader2 = document.createElement("span");
    skillsHeader2.classList.add("heading-text", "secondary-color");
    skillsHeader2.textContent = "";

    skillsHeaderCon.appendChild(skillsHeader1);
    skillsHeaderCon.appendChild(skillsHeader2);

    const skillsUnderline = document.createElement("div");
    skillsUnderline.classList.add("skillsUnderline");

    let skillsViewed = false;

    window.addEventListener("scroll", () => {
      if (
        skillsCon.getBoundingClientRect().top / innerHeight < 0.65 &&
        skillsViewed == false
      ) {
        skillsViewed = true;

        skillsUnderline.classList.add("skillsUnderline-animation");

        setTimeout(() => {
          typingAnimation(skillsHeader1, "Skills", 60);
          setTimeout(() => {
            typingAnimation(skillsHeader2, " & Tools", 60);
          }, 360);
        }, 1000);

        setTimeout(() => {
          skillsIcon1.classList.add("skill-icon-animation");
          skillsIcon2.classList.add("skill-icon-animation");
          skillsIcon3.classList.add("skill-icon-animation");
          skillsIcon4.classList.add("skill-icon-animation");
          skillsIcon5.classList.add("skill-icon-animation");
          skillsIcon6.classList.add("skill-icon-animation");
          skillsIcon7.classList.add("skill-icon-animation");
        }, 1500);
      }
    });

    const skillsIconCon = document.createElement("div");
    skillsIconCon.classList.add("skill-icons-con", "flex-row", "center");

    const skillsIcon1 = document.createElement("div");
    skillsIcon1.classList.add("skill-icon-con", "flex-column");

    const icon1 = new Image();
    icon1.src = html5Src;
    icon1.classList.add("skill-icon-img");

    const skillIconText1 = document.createElement("span");
    skillIconText1.classList.add("normal-text");
    skillIconText1.textContent = "HTML5";

    skillsIcon1.appendChild(icon1);
    skillsIcon1.appendChild(skillIconText1);

    const skillsIcon2 = document.createElement("div");
    skillsIcon2.classList.add("skill-icon-con", "flex-column");

    const icon2 = new Image();
    icon2.src = cssSrc;
    icon2.classList.add("skill-icon-img");

    const skillIconText2 = document.createElement("span");
    skillIconText2.classList.add("normal-text");
    skillIconText2.textContent = "CSS";

    skillsIcon2.appendChild(icon2);
    skillsIcon2.appendChild(skillIconText2);

    const skillsIcon3 = document.createElement("div");
    skillsIcon3.classList.add("skill-icon-con", "flex-column");

    const icon3 = new Image();
    icon3.src = javascriptSrc;
    icon3.classList.add("skill-icon-img");

    const skillIconText3 = document.createElement("span");
    skillIconText3.classList.add("normal-text");
    skillIconText3.textContent = "JS";

    skillsIcon3.appendChild(icon3);
    skillsIcon3.appendChild(skillIconText3);

    const skillsIcon4 = document.createElement("div");
    skillsIcon4.classList.add("skill-icon-con", "flex-column");

    const icon4 = new Image();
    icon4.src = jestSrc;
    icon4.classList.add("skill-icon-img");

    const skillIconText4 = document.createElement("span");
    skillIconText4.classList.add("normal-text");
    skillIconText4.textContent = "Jest";

    skillsIcon4.appendChild(icon4);
    skillsIcon4.appendChild(skillIconText4);

    const skillsIcon5 = document.createElement("div");
    skillsIcon5.classList.add("skill-icon-con", "flex-column");

    const icon5 = new Image();
    icon5.src = webpackSrc;
    icon5.classList.add("skill-icon-img");

    const skillIconText5 = document.createElement("span");
    skillIconText5.classList.add("normal-text");
    skillIconText5.textContent = "Webpack";

    skillsIcon5.appendChild(icon5);
    skillsIcon5.appendChild(skillIconText5);

    const skillsIcon6 = document.createElement("div");
    skillsIcon6.classList.add("skill-icon-con", "flex-column");

    const icon6 = new Image();
    icon6.src = gitSrc;
    icon6.classList.add("skill-icon-img");

    const skillIconText6 = document.createElement("span");
    skillIconText6.classList.add("normal-text");
    skillIconText6.textContent = "Git";

    skillsIcon6.appendChild(icon6);
    skillsIcon6.appendChild(skillIconText6);

    const skillsIcon7 = document.createElement("div");
    skillsIcon7.classList.add("skill-icon-con", "flex-column");

    const icon7 = new Image();
    icon7.src = chatGptSrc;
    icon7.classList.add("skill-icon-img");

    const skillIconText7 = document.createElement("span");
    skillIconText7.classList.add("normal-text");
    skillIconText7.textContent = "ChatGPT";

    skillsIcon7.appendChild(icon7);
    skillsIcon7.appendChild(skillIconText7);

    skillsIconCon.appendChild(skillsIcon1);
    skillsIconCon.appendChild(skillsIcon2);
    skillsIconCon.appendChild(skillsIcon3);
    skillsIconCon.appendChild(skillsIcon4);
    skillsIconCon.appendChild(skillsIcon5);
    skillsIconCon.appendChild(skillsIcon6);
    skillsIconCon.appendChild(skillsIcon7);

    skillsCon.appendChild(skillsHeaderCon);
    skillsCon.appendChild(skillsUnderline);
    skillsCon.appendChild(skillsIconCon);

    content.appendChild(navCon);
    content.appendChild(infoCon);
    content.appendChild(skillsCon);

    resolve(content);
  });
};

export default createHome;
