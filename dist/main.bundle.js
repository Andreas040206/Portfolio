/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/display */ "./src/pages/display.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/projects */ "./src/pages/projects.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");





const appendPage = () => {
  (0,_pages_display__WEBPACK_IMPORTED_MODULE_0__["default"])().then((el) => {
    document.body.appendChild(el);
  });
  (0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])().then((el) => {
    document.body.appendChild(el);
  });
  (0,_pages_projects__WEBPACK_IMPORTED_MODULE_2__["default"])().then((el) => {
    document.body.appendChild(el);
  });
  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__["default"])().then((el) => {
    document.body.appendChild(el);
  });
};

appendPage();


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools */ "./src/tools.js");


const createContact = () => {
  return new Promise((resolve) => {
    const content = document.createElement("footer");
    content.setAttribute("id", "contact");
    content.classList.add("contact-con", "flex-row", "center");

    const innerCon = document.createElement("div");
    innerCon.classList.add("contact-innerCon", "flex-column");

    const header = document.createElement("header");
    header.classList.add("heading-text");

    const header1 = document.createElement("span");

    const header2 = document.createElement("span");
    header2.classList.add("secondary-color");

    header.appendChild(header1);
    header.appendChild(header2);

    const headerUnderline = document.createElement("div");
    headerUnderline.classList.add("contact-underline");

    const contactText = document.createElement("span");
    contactText.classList.add("normal-text");
    contactText.style.marginTop = "10px";
    contactText.style.height = "28.8px";

    let scrolled = false;

    window.addEventListener("scroll", () => {
      if (
        header.getBoundingClientRect().top / innerHeight < 0.65 &&
        scrolled == false
      ) {
        scrolled = true;
        headerUnderline.classList.add("contact-underline-animation");

        setTimeout(() => {
          (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(header1, "Contact", 60);
          setTimeout(() => {
            (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(header2, " me", 60);
            setTimeout(() => {
              (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(contactText, "What's next? ", 40);
              setTimeout(() => {
                (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(contactText, " Let's find out together!", 40);
              }, 1500);
            }, 500);
          }, 420);
        }, 1000);
      }
    });

    const mailBtnCon = document.createElement("div");
    mailBtnCon.classList.add("flex-row", "center");

    const mailBtn = document.createElement("button");
    mailBtn.classList.add("contact-btn");
    mailBtn.textContent = "Send mail";

    mailBtnCon.appendChild(mailBtn);

    mailBtn.addEventListener("click", () => {
      const mailLink = document.createElement("a");
      mailLink.setAttribute("href", "mailto:andreasskakkebaekkruse@gmail.com");

      mailLink.click();
    });

    innerCon.appendChild(header);
    innerCon.appendChild(headerUnderline);
    innerCon.appendChild(contactText);
    innerCon.appendChild(mailBtnCon);

    content.appendChild(innerCon);

    resolve(content);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);


/***/ }),

/***/ "./src/pages/display.js":
/*!******************************!*\
  !*** ./src/pages/display.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools */ "./src/tools.js");


const createDisplay = () => {
  return new Promise((resolve) => {
    const content = document.createElement("header");
    content.setAttribute("id", "display");
    content.classList.add("display-con", "flex-row", "center");

    const typingCon = document.createElement("div");
    typingCon.classList.add("typing-con");

    const typeline = document.createElement("div");
    typeline.classList.add("typeline");

    const typingTextCon = document.createElement("div");

    const typingText = document.createElement("span");
    typingText.classList.add("text-size6");

    const typingText2 = document.createElement("span");
    typingText2.classList.add("text-size6", "secondary-color");
    typingText2.textContent = " ";

    setTimeout(() => {
      (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(typingText, "WEB DEVELOPER", 60);
    }, 3000);

    setTimeout(() => {
      (0,_tools__WEBPACK_IMPORTED_MODULE_0__.deleteTypedText)(typingText, "WEB DEVELOPER", 30);
    }, 6000);

    setTimeout(() => {
      (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(typingText, "DESIGNER", 60);
    }, 6500);

    setTimeout(() => {
      (0,_tools__WEBPACK_IMPORTED_MODULE_0__.deleteTypedText)(typingText, "DESIGNER", 30);
    }, 9000);

    // AI-Enabled Developer

    setTimeout(() => {
      (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(typingText, "ANDREAS", 60);
    }, 9500);
    setTimeout(() => {
      typingTextCon.appendChild(typingText2);
      (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(typingText2, "SKAKKEBÆK-KRUSE", 60);
    }, 9920);

    typingTextCon.appendChild(typingText);

    typingCon.appendChild(typingTextCon);
    typingCon.appendChild(typeline);

    const codeText1 = document.createElement("span");
    codeText1.classList.add("moving-code-sideways");
    codeText1.textContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head><body><p>I will create the content that suits your buisness</p></body></html>`;

    const codeText2 = document.createElement("span");
    codeText2.classList.add("moving-code-upward");
    codeText2.textContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head><body><p>I will create the content that suits your buisness</p></body></html>`;

    const codeText3 = document.createElement("span");
    codeText3.classList.add("moving-code-sideways");
    codeText3.textContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head><body><p>I will create the content that suits your buisness</p></body></html>`;

    const codeText4 = document.createElement("span");
    codeText4.classList.add("moving-code-upward");
    codeText4.textContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head><body><p>I will create the content that suits your buisness</p></body></html>`;

    content.appendChild(typingCon);
    content.appendChild(codeText1);
    content.appendChild(codeText2);
    content.appendChild(codeText3);
    content.appendChild(codeText4);

    resolve(content);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplay);


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools */ "./src/tools.js");
/* harmony import */ var _Img_LogoDark_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Img/LogoDark.svg */ "./src/Img/LogoDark.svg");
/* harmony import */ var _Img_LogoDarkBehind_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Img/LogoDarkBehind.svg */ "./src/Img/LogoDarkBehind.svg");
/* harmony import */ var _Img_LogoLight_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Img/LogoLight.svg */ "./src/Img/LogoLight.svg");
/* harmony import */ var _Img_LogoLightBehind_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Img/LogoLightBehind.svg */ "./src/Img/LogoLightBehind.svg");
/* harmony import */ var _Img_moonIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Img/moonIcon.svg */ "./src/Img/moonIcon.svg");
/* harmony import */ var _Img_sunIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Img/sunIcon.svg */ "./src/Img/sunIcon.svg");
/* harmony import */ var _Img_portait_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Img/portait.jpg */ "./src/Img/portait.jpg");
/* harmony import */ var _Img_html5_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Img/html5.svg */ "./src/Img/html5.svg");
/* harmony import */ var _Img_css_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Img/css.svg */ "./src/Img/css.svg");
/* harmony import */ var _Img_javascript_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Img/javascript.svg */ "./src/Img/javascript.svg");
/* harmony import */ var _Img_jest_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Img/jest.svg */ "./src/Img/jest.svg");
/* harmony import */ var _Img_webpack_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Img/webpack.svg */ "./src/Img/webpack.svg");
/* harmony import */ var _Img_git_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Img/git.svg */ "./src/Img/git.svg");
/* harmony import */ var _Img_chatgpt_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Img/chatgpt.png */ "./src/Img/chatgpt.png");


// Img









// Icons








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
    logo.src = _Img_LogoDark_svg__WEBPACK_IMPORTED_MODULE_1__;
    logo.classList.add("nav-logo");

    const logoBehind = new Image();
    logoBehind.src = _Img_LogoDarkBehind_svg__WEBPACK_IMPORTED_MODULE_2__;
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
    themeIcon.src = _Img_sunIcon_svg__WEBPACK_IMPORTED_MODULE_6__;
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

        themeIcon.src = _Img_moonIcon_svg__WEBPACK_IMPORTED_MODULE_5__;
        themeIcon.classList.remove("themeIconDark");
        themeIcon.classList.add("themeIconLight");

        logo.src = _Img_LogoLight_svg__WEBPACK_IMPORTED_MODULE_3__;
        logoBehind.src = _Img_LogoLightBehind_svg__WEBPACK_IMPORTED_MODULE_4__;
      } else {
        const root = document.documentElement;
        root.style.setProperty("--bg-color", "#111827ff");
        root.style.setProperty("--bg-secondary-color", "#070c16ff");
        root.style.setProperty("--primary-color", "white");
        root.style.setProperty("--secondary-color", "#17d3e8");
        root.style.setProperty("--third-color", "#454545ff");

        themeIcon.src = _Img_sunIcon_svg__WEBPACK_IMPORTED_MODULE_6__;
        themeIcon.classList.remove("themeIconLight");
        themeIcon.classList.add("themeIconDark");

        logo.src = _Img_LogoDark_svg__WEBPACK_IMPORTED_MODULE_1__;
        logoBehind.src = _Img_LogoDarkBehind_svg__WEBPACK_IMPORTED_MODULE_2__;
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
        (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(aboutmeTextHeader, "About me", 90);
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
    portait.src = _Img_portait_jpg__WEBPACK_IMPORTED_MODULE_7__;
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
          (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(skillsHeader1, "Skills", 60);
          setTimeout(() => {
            (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(skillsHeader2, " & Tools", 60);
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
    icon1.src = _Img_html5_svg__WEBPACK_IMPORTED_MODULE_8__;
    icon1.classList.add("skill-icon-img");

    const skillIconText1 = document.createElement("span");
    skillIconText1.classList.add("normal-text");
    skillIconText1.textContent = "HTML5";

    skillsIcon1.appendChild(icon1);
    skillsIcon1.appendChild(skillIconText1);

    const skillsIcon2 = document.createElement("div");
    skillsIcon2.classList.add("skill-icon-con", "flex-column");

    const icon2 = new Image();
    icon2.src = _Img_css_svg__WEBPACK_IMPORTED_MODULE_9__;
    icon2.classList.add("skill-icon-img");

    const skillIconText2 = document.createElement("span");
    skillIconText2.classList.add("normal-text");
    skillIconText2.textContent = "CSS";

    skillsIcon2.appendChild(icon2);
    skillsIcon2.appendChild(skillIconText2);

    const skillsIcon3 = document.createElement("div");
    skillsIcon3.classList.add("skill-icon-con", "flex-column");

    const icon3 = new Image();
    icon3.src = _Img_javascript_svg__WEBPACK_IMPORTED_MODULE_10__;
    icon3.classList.add("skill-icon-img");

    const skillIconText3 = document.createElement("span");
    skillIconText3.classList.add("normal-text");
    skillIconText3.textContent = "JS";

    skillsIcon3.appendChild(icon3);
    skillsIcon3.appendChild(skillIconText3);

    const skillsIcon4 = document.createElement("div");
    skillsIcon4.classList.add("skill-icon-con", "flex-column");

    const icon4 = new Image();
    icon4.src = _Img_jest_svg__WEBPACK_IMPORTED_MODULE_11__;
    icon4.classList.add("skill-icon-img");

    const skillIconText4 = document.createElement("span");
    skillIconText4.classList.add("normal-text");
    skillIconText4.textContent = "Jest";

    skillsIcon4.appendChild(icon4);
    skillsIcon4.appendChild(skillIconText4);

    const skillsIcon5 = document.createElement("div");
    skillsIcon5.classList.add("skill-icon-con", "flex-column");

    const icon5 = new Image();
    icon5.src = _Img_webpack_svg__WEBPACK_IMPORTED_MODULE_12__;
    icon5.classList.add("skill-icon-img");

    const skillIconText5 = document.createElement("span");
    skillIconText5.classList.add("normal-text");
    skillIconText5.textContent = "Webpack";

    skillsIcon5.appendChild(icon5);
    skillsIcon5.appendChild(skillIconText5);

    const skillsIcon6 = document.createElement("div");
    skillsIcon6.classList.add("skill-icon-con", "flex-column");

    const icon6 = new Image();
    icon6.src = _Img_git_svg__WEBPACK_IMPORTED_MODULE_13__;
    icon6.classList.add("skill-icon-img");

    const skillIconText6 = document.createElement("span");
    skillIconText6.classList.add("normal-text");
    skillIconText6.textContent = "Git";

    skillsIcon6.appendChild(icon6);
    skillsIcon6.appendChild(skillIconText6);

    const skillsIcon7 = document.createElement("div");
    skillsIcon7.classList.add("skill-icon-con", "flex-column");

    const icon7 = new Image();
    icon7.src = _Img_chatgpt_png__WEBPACK_IMPORTED_MODULE_14__;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/pages/projects.js":
/*!*******************************!*\
  !*** ./src/pages/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools */ "./src/tools.js");
/* harmony import */ var _Img_risskovvinduespudsning_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Img/risskovvinduespudsning.png */ "./src/Img/risskovvinduespudsning.png");
/* harmony import */ var _Img_battleships_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Img/battleships.png */ "./src/Img/battleships.png");
/* harmony import */ var _Img_weatherApp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Img/weatherApp.png */ "./src/Img/weatherApp.png");
/* harmony import */ var _Img_knightMovesCal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Img/knightMovesCal.png */ "./src/Img/knightMovesCal.png");


//Img





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
          (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(header1, "Things I have", 60);
          setTimeout(() => {
            (0,_tools__WEBPACK_IMPORTED_MODULE_0__.typingAnimation)(header2, " built", 60);
          }, 780);
        }, 1000);
      }
    });

    innerContent.appendChild(header);
    innerContent.appendChild(projectsUnderline);

    const projectCon1 = document.createElement("div");
    projectCon1.classList.add("project-con", "flex-row", "al-cen");

    const projectImg = new Image();
    projectImg.src = _Img_risskovvinduespudsning_png__WEBPACK_IMPORTED_MODULE_1__;
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
    project2Img.src = _Img_battleships_png__WEBPACK_IMPORTED_MODULE_2__;
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
    project3Img.src = _Img_weatherApp_png__WEBPACK_IMPORTED_MODULE_3__;
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
    project4Img.src = _Img_knightMovesCal_png__WEBPACK_IMPORTED_MODULE_4__;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjects);


/***/ }),

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteTypedText: () => (/* binding */ deleteTypedText),
/* harmony export */   typingAnimation: () => (/* binding */ typingAnimation)
/* harmony export */ });
const typingAnimation = (textEl, textToType, typingSpeed) => {
  let index = 0;

  const typeCharacter = () => {
    if (index < textToType.length) {
      textEl.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeCharacter, typingSpeed);
    }
  };
  typeCharacter();
};

const deleteTypedText = (textEl, textToDelete, deleteSpeed) => {
  let index = 0;

  const deleteCharacter = () => {
    if (index < textToDelete.length) {
      textEl.textContent = textEl.textContent.slice(0, -1);
      index++;
      setTimeout(deleteCharacter, deleteSpeed);
    }
  };
  deleteCharacter();
};




/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!**************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --bg-color: white;\n  --bg-secondary-color: #efefefff;\n  --primary-color: black;\n  --secondary-color: #42676bff;\n  --third-color: #858585ff;\n}\n\n/* Universal styles */\n\nbody {\n  margin: 0px;\n  font-family: \"Jost\";\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.al-cen {\n  align-items: center;\n}\n\n.ju-cen {\n  justify-content: center;\n}\n\n.center {\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.right {\n  right: 0px;\n}\n\n/* Text */\n.text-size6 {\n  font-weight: 700;\n  font-size: min(60px, 9vw);\n  color: var(--primary-color);\n}\n\n.heading-text {\n  font-size: min(40px, 11vw);\n  color: var(--primary-color);\n  height: 58.4px;\n}\n\n.normal-text {\n  font-size: 20px;\n  color: var(--primary-color);\n}\n\n.secondary-color {\n  color: var(--secondary-color);\n}\n\n.fixed {\n  position: fixed;\n}\n\n/* display styles */\n\n.display-con {\n  background-color: var(--bg-color);\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  align-items: center;\n}\n\n.typing-con {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: min(5px, 0.4vw);\n\n  position: absolute;\n  z-index: 10;\n  height: 90px;\n\n  width: min(950px, 80vw);\n\n  animation-name: none;\n  animation-delay: 4.5s;\n  animation-duration: 0.5s;\n  animation-iteration-count: 1;\n}\n\n.typeline {\n  background-color: var(--primary-color);\n  height: min(55px, 9vw);\n  width: min(3px, 0.4vw);\n  margin-top: min(14px, 2vw);\n  animation: forwards;\n  animation-name: typelineBlink, cWhite, typelineBlink, cWhite, typelineBlink,\n    cWhite, typelineBlink;\n  animation-duration: 1.5s, 1.15s, 1.5s, 1.15s, 1.5s, 3s, 1.5s;\n  animation-timing-function: linear;\n  animation-delay: 0s, 3s, 4.15s, 5.65s, 6.5s, 8s, 11s, 12.5s;\n  animation-iteration-count: 2, 1, 1, 1, 1, 1, 1;\n}\n\n@media (max-width: 1138px) {\n  .typeline {\n    animation-name: typelineBlink, cWhite, typelineBlink, cWhite, typelineBlink;\n  }\n}\n\n.moving-code-sideways {\n  color: var(--secondary-color);\n  font-size: min(25px, 5vw);\n  position: absolute;\n  animation: moveLeftText 12s linear forwards;\n  white-space: nowrap;\n}\n\n.moving-code-upward {\n  color: var(--secondary-color);\n  font-size: min(25px, 5vw);\n  position: absolute;\n  animation: moveUpText 12s linear forwards;\n  white-space: nowrap;\n}\n\n.moving-code-sideways:nth-child(2) {\n  top: 10vh;\n  animation-duration: 12s;\n  color: var(--primary-color);\n}\n\n.moving-code-upward:nth-child(3) {\n  margin-left: calc(min(950px, 80vw) - 20vw);\n  animation-duration: 13s;\n}\n\n@media (max-width: 760px) {\n  .moving-code-upward:nth-child(3) {\n    margin-left: 90vw;\n  }\n}\n\n.moving-code-sideways:nth-child(4) {\n  bottom: 10vh;\n  animation-direction: reverse;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  transform: translateX(max(100vw, 100%));\n}\n\n.moving-code-upward:nth-child(5) {\n  color: var(--primary-color);\n  animation-duration: 11.3s;\n  animation-delay: 1s;\n  opacity: 0;\n  margin-right: calc(min(950px, 80vw) + 10vw);\n}\n\n@keyframes typelineBlink {\n  0% {\n    background-color: var(--primary-color);\n  }\n  50% {\n    background-color: var(--primary-color);\n  }\n  51% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  100% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n}\n\n@keyframes cWhite {\n  0% {\n    background-color: var(--primary-color);\n  }\n  100% {\n    background-color: var(--primary-color);\n  }\n}\n\n@keyframes moveLeftText {\n  0% {\n    transform: translateX(max(100vw, 100%)); /* Start off-screen on the right */\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(min(-100vw, -100%)); /* End off-screen on the left */\n    opacity: 1;\n  }\n}\n\n@keyframes moveUpText {\n  0% {\n    transform: rotate(90deg) translateX(100%);\n    opacity: 1;\n  }\n  100% {\n    transform: rotate(90deg) translateX(-100%);\n    opacity: 1;\n  }\n}\n\n/* Home */\n\n.home-con {\n  background-color: var(--bg-color);\n  position: relative;\n}\n\n.nav-con {\n  height: 80px;\n  background-color: var(--bg-secondary-color);\n  width: calc(100% - 4vw);\n  top: 0px;\n  padding: 0px 2vw;\n  justify-content: flex-end;\n  position: absolute;\n  z-index: 20;\n}\n\n.nav-con.fixed {\n  position: fixed;\n}\n\n.nav-logo {\n  height: 70px;\n  transition: 0.3s;\n  position: absolute;\n  left: 2vw;\n}\n\n.nav-logo:hover {\n  transform: translate(2px, 2px);\n}\n\n.nav-btn-con {\n  gap: 40px;\n  margin-right: 2.5vw;\n}\n\n.nav-btn {\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  color: var(--secondary-color);\n  font-size: 20px;\n  position: relative;\n  z-index: 10;\n  transition: 0.3s;\n}\n\n.nav-btn:hover {\n  color: var(--primary-color);\n}\n\n.themeChangeBtn {\n  height: 35px;\n  width: 35px;\n  background-color: var(--bg-color);\n  border-radius: 20px;\n  transition: 0.3s;\n  border: var(--third-color) solid 2px;\n}\n\n.themeChangeBtn:hover {\n  scale: 1.1;\n}\n\n.themeIconDark {\n  height: 23px;\n}\n\n.themeIconLight {\n  height: 35px;\n  margin-top: 4px;\n  margin-left: 3px;\n}\n\n.hovershape {\n  background-color: var(--secondary-color);\n  height: 35px;\n  width: 130px;\n  border-radius: 20px;\n  position: absolute;\n  transition: cubic-bezier(0.06, 0.26, 0.45, 1.19) 0.3s;\n}\n\n.homeInfo-con {\n  gap: 100px;\n  flex-wrap: wrap;\n  padding-top: 30vh;\n  padding-bottom: 20vh;\n}\n\n.aboutme-text-con {\n  gap: 15px;\n  width: min(500px, 90vw);\n}\n\n.aboutme-underline {\n  height: 10px;\n  width: 70px;\n  background-color: var(--secondary-color);\n}\n\n.aboutme-portrait {\n  height: 400px;\n  width: 300px;\n  object-fit: cover;\n  opacity: 0;\n  transition: 1s;\n}\n\n.portait-animation {\n  animation: imgSlide 1s forwards ease-out;\n  animation-delay: 0.5s;\n}\n\n@keyframes imgSlide {\n  0% {\n    opacity: 0;\n    transform: translate(-50px);\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    box-shadow: var(--secondary-color) 7px 7px;\n    transform: translate(0px);\n    opacity: 1;\n  }\n}\n\n.aboutme-skills-con {\n  align-items: center;\n  gap: 5px;\n}\n\n.skillsUnderline {\n  height: 2px;\n  width: 0px;\n  background-color: var(--secondary-color);\n}\n\n.skillsUnderline-animation {\n  animation: skillsUnderlineExpand 1s forwards;\n}\n\n@keyframes skillsUnderlineExpand {\n  from {\n    width: 0px;\n  }\n  to {\n    width: min(90vw, 900px);\n  }\n}\n\n.skill-icons-con {\n  flex-wrap: wrap;\n  justify-content: center;\n  width: min(90vw, 900px);\n  margin-top: 20px;\n}\n\n.skill-icon-con {\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 120px;\n  height: 150px;\n  opacity: 0;\n}\n\n.skill-icon-animation {\n  animation: slideInLeft 1s forwards;\n}\n\n.skill-icon-con:nth-child(1) {\n  animation-delay: 0s;\n}\n\n.skill-icon-con:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.skill-icon-con:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.skill-icon-con:nth-child(4) {\n  animation-delay: 0.3s;\n}\n.skill-icon-con:nth-child(5) {\n  animation-delay: 0.4s;\n}\n.skill-icon-con:nth-child(6) {\n  animation-delay: 0.5s;\n}\n.skill-icon-con:nth-child(7) {\n  animation-delay: 0.6s;\n}\n\n@keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-100px);\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n.skill-icon-img {\n  height: 80px;\n}\n\n/* Projects */\n\n.projects-con {\n  background-color: var(--bg-color);\n  padding-top: 30vh;\n  gap: max(10vh, 100px);\n}\n\n.projects-innerCon {\n  width: min(90vw, 900px);\n}\n\n.projectsUnderline {\n  height: 2px;\n  width: 0px;\n  background-color: var(--secondary-color);\n}\n\n.projectsUnderline-animation {\n  animation: 1s projectsUnderlineExpand forwards;\n}\n\n@keyframes projectsUnderlineExpand {\n  0% {\n  }\n  100% {\n    width: min(309px, 90vw);\n  }\n}\n\n.project-con {\n  height: 500px;\n  width: min(1200px, 95vw);\n  position: relative;\n}\n\n.project-img-right {\n  width: min(900px, 95vw);\n  box-shadow: var(--secondary-color) 10px 10px;\n  position: absolute;\n  right: 0px;\n  transition: 0.5s;\n}\n\n.project-img-right:hover {\n  transform: translate(-10px, -10px);\n  box-shadow: var(--secondary-color) 27px 27px;\n}\n\n.project-img-left {\n  width: min(900px, 95vw);\n  box-shadow: var(--secondary-color) -10px 10px;\n  position: absolute;\n  left: 0px;\n  transition: 0.5s;\n}\n\n.project-img-left:hover {\n  transform: translate(10px, -10px);\n  box-shadow: var(--secondary-color) -27px 27px;\n}\n\n.project-text-con {\n  height: 150px;\n  width: min(600px, calc(90vw - 24px));\n  background-color: var(--bg-secondary-color);\n  position: absolute;\n  bottom: 50px;\n  padding: 16px 24px;\n}\n\n.project-text-header {\n  color: var(--secondary-color);\n  font-size: 26px;\n}\n\n.project-tek-text {\n  color: var(--third-color);\n  font-size: 18px;\n  position: absolute;\n  bottom: 16px;\n  word-spacing: 10px;\n  margin-left: 10px;\n}\n\n.project-btn-con-right {\n  position: absolute;\n  justify-content: space-between;\n  right: 30px;\n  bottom: 20px;\n  gap: 20px;\n}\n\n.project-btn-overflow-con {\n  overflow: hidden;\n  position: relative;\n}\n\n.project-btn {\n  background-color: rgba(0, 0, 0, 0);\n  font-size: 20px;\n  transition: 0.2s;\n  border: none;\n}\n\n.project-btn-live {\n  color: var(--secondary-color);\n}\n\n.project-btn-live::after {\n  content: \"<Live/>\";\n  position: absolute;\n  bottom: -22px;\n}\n\n.project-btn:hover {\n  transform: translateY(-20px);\n}\n\n.project-btn-code {\n  color: var(--primary-color);\n}\n\n.project-btn-code::after {\n  content: \"<Code/>\";\n  position: absolute;\n  bottom: -22px;\n}\n\n.projects-more-btn {\n  height: 50px;\n  width: 200px;\n  border-radius: 30px;\n  background-color: rgba(0, 0, 0, 0);\n  color: var(--secondary-color);\n  border: solid 2px var(--secondary-color);\n  transition: 0.3s;\n  margin-top: max(5vh, 100px);\n}\n\n.projects-more-btn:hover {\n  background-color: var(--secondary-color);\n  color: var(--bg-color);\n}\n\n@media (max-width: 1100px) {\n  .project-text-con {\n    bottom: -50px;\n  }\n  .projectsUnderline {\n    margin-bottom: -50px;\n  }\n}\n\n@media (max-width: 600px) {\n  .project-con {\n    height: 600px;\n  }\n  .project-text-con {\n    bottom: -100px;\n    padding-bottom: 50px;\n  }\n  .project-img-right {\n    object-fit: cover;\n    height: min(70vh, 500px);\n  }\n  .project-img-left {\n    height: min(70vh, 500px);\n    object-fit: cover;\n  }\n  .project-text-header {\n    font-size: 20px;\n  }\n  .project-tek-text {\n    display: none;\n  }\n}\n/* Contact */\n\n.contact-con {\n  height: 100vh;\n  background-color: var(--bg-color);\n}\n\n.contact-innerCon {\n  width: min(90vw, 900px);\n}\n.contact-underline {\n  height: 2px;\n  width: 0px;\n  background-color: var(--secondary-color);\n}\n\n.contact-underline-animation {\n  animation: contactUnderlineExpand 1s forwards;\n}\n\n@keyframes contactUnderlineExpand {\n  0% {\n    width: 0px;\n  }\n  100% {\n    width: 193px;\n  }\n}\n\n.contact-btn {\n  margin-top: 10vh;\n  background-color: var(--secondary-color);\n  border: solid 2px var(--secondary-color);\n  height: 50px;\n  width: 200px;\n  font-size: 22px;\n  color: var(--bg-color);\n  border-radius: 5px;\n  transition: 0.3s;\n}\n\n.contact-btn:hover {\n  scale: 1.1;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap\");\n\n:root {\n  --bg-color: white;\n  --bg-secondary-color: #efefefff;\n  --primary-color: black;\n  --secondary-color: #42676bff;\n  --third-color: #858585ff;\n}\n\n/* Universal styles */\n\nbody {\n  margin: 0px;\n  font-family: \"Jost\";\n}\n\n.flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.al-cen {\n  align-items: center;\n}\n\n.ju-cen {\n  justify-content: center;\n}\n\n.center {\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.right {\n  right: 0px;\n}\n\n/* Text */\n.text-size6 {\n  font-weight: 700;\n  font-size: min(60px, 9vw);\n  color: var(--primary-color);\n}\n\n.heading-text {\n  font-size: min(40px, 11vw);\n  color: var(--primary-color);\n  height: 58.4px;\n}\n\n.normal-text {\n  font-size: 20px;\n  color: var(--primary-color);\n}\n\n.secondary-color {\n  color: var(--secondary-color);\n}\n\n.fixed {\n  position: fixed;\n}\n\n/* display styles */\n\n.display-con {\n  background-color: var(--bg-color);\n  height: 100vh;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  align-items: center;\n}\n\n.typing-con {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: min(5px, 0.4vw);\n\n  position: absolute;\n  z-index: 10;\n  height: 90px;\n\n  width: min(950px, 80vw);\n\n  animation-name: none;\n  animation-delay: 4.5s;\n  animation-duration: 0.5s;\n  animation-iteration-count: 1;\n}\n\n.typeline {\n  background-color: var(--primary-color);\n  height: min(55px, 9vw);\n  width: min(3px, 0.4vw);\n  margin-top: min(14px, 2vw);\n  animation: forwards;\n  animation-name: typelineBlink, cWhite, typelineBlink, cWhite, typelineBlink,\n    cWhite, typelineBlink;\n  animation-duration: 1.5s, 1.15s, 1.5s, 1.15s, 1.5s, 3s, 1.5s;\n  animation-timing-function: linear;\n  animation-delay: 0s, 3s, 4.15s, 5.65s, 6.5s, 8s, 11s, 12.5s;\n  animation-iteration-count: 2, 1, 1, 1, 1, 1, 1;\n}\n\n@media (max-width: 1138px) {\n  .typeline {\n    animation-name: typelineBlink, cWhite, typelineBlink, cWhite, typelineBlink;\n  }\n}\n\n.moving-code-sideways {\n  color: var(--secondary-color);\n  font-size: min(25px, 5vw);\n  position: absolute;\n  animation: moveLeftText 12s linear forwards;\n  white-space: nowrap;\n}\n\n.moving-code-upward {\n  color: var(--secondary-color);\n  font-size: min(25px, 5vw);\n  position: absolute;\n  animation: moveUpText 12s linear forwards;\n  white-space: nowrap;\n}\n\n.moving-code-sideways:nth-child(2) {\n  top: 10vh;\n  animation-duration: 12s;\n  color: var(--primary-color);\n}\n\n.moving-code-upward:nth-child(3) {\n  margin-left: calc(min(950px, 80vw) - 20vw);\n  animation-duration: 13s;\n}\n\n@media (max-width: 760px) {\n  .moving-code-upward:nth-child(3) {\n    margin-left: 90vw;\n  }\n}\n\n.moving-code-sideways:nth-child(4) {\n  bottom: 10vh;\n  animation-direction: reverse;\n  animation-duration: 10s;\n  animation-delay: 2s;\n  transform: translateX(max(100vw, 100%));\n}\n\n.moving-code-upward:nth-child(5) {\n  color: var(--primary-color);\n  animation-duration: 11.3s;\n  animation-delay: 1s;\n  opacity: 0;\n  margin-right: calc(min(950px, 80vw) + 10vw);\n}\n\n@keyframes typelineBlink {\n  0% {\n    background-color: var(--primary-color);\n  }\n  50% {\n    background-color: var(--primary-color);\n  }\n  51% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n  100% {\n    background-color: rgba(255, 255, 255, 0);\n  }\n}\n\n@keyframes cWhite {\n  0% {\n    background-color: var(--primary-color);\n  }\n  100% {\n    background-color: var(--primary-color);\n  }\n}\n\n@keyframes moveLeftText {\n  0% {\n    transform: translateX(max(100vw, 100%)); /* Start off-screen on the right */\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(min(-100vw, -100%)); /* End off-screen on the left */\n    opacity: 1;\n  }\n}\n\n@keyframes moveUpText {\n  0% {\n    transform: rotate(90deg) translateX(100%);\n    opacity: 1;\n  }\n  100% {\n    transform: rotate(90deg) translateX(-100%);\n    opacity: 1;\n  }\n}\n\n/* Home */\n\n.home-con {\n  background-color: var(--bg-color);\n  position: relative;\n}\n\n.nav-con {\n  height: 80px;\n  background-color: var(--bg-secondary-color);\n  width: calc(100% - 4vw);\n  top: 0px;\n  padding: 0px 2vw;\n  justify-content: flex-end;\n  position: absolute;\n  z-index: 20;\n}\n\n.nav-con.fixed {\n  position: fixed;\n}\n\n.nav-logo {\n  height: 70px;\n  transition: 0.3s;\n  position: absolute;\n  left: 2vw;\n}\n\n.nav-logo:hover {\n  transform: translate(2px, 2px);\n}\n\n.nav-btn-con {\n  gap: 40px;\n  margin-right: 2.5vw;\n}\n\n.nav-btn {\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  color: var(--secondary-color);\n  font-size: 20px;\n  position: relative;\n  z-index: 10;\n  transition: 0.3s;\n}\n\n.nav-btn:hover {\n  color: var(--primary-color);\n}\n\n.themeChangeBtn {\n  height: 35px;\n  width: 35px;\n  background-color: var(--bg-color);\n  border-radius: 20px;\n  transition: 0.3s;\n  border: var(--third-color) solid 2px;\n}\n\n.themeChangeBtn:hover {\n  scale: 1.1;\n}\n\n.themeIconDark {\n  height: 23px;\n}\n\n.themeIconLight {\n  height: 35px;\n  margin-top: 4px;\n  margin-left: 3px;\n}\n\n.hovershape {\n  background-color: var(--secondary-color);\n  height: 35px;\n  width: 130px;\n  border-radius: 20px;\n  position: absolute;\n  transition: cubic-bezier(0.06, 0.26, 0.45, 1.19) 0.3s;\n}\n\n.homeInfo-con {\n  gap: 100px;\n  flex-wrap: wrap;\n  padding-top: 30vh;\n  padding-bottom: 20vh;\n}\n\n.aboutme-text-con {\n  gap: 15px;\n  width: min(500px, 90vw);\n}\n\n.aboutme-underline {\n  height: 10px;\n  width: 70px;\n  background-color: var(--secondary-color);\n}\n\n.aboutme-portrait {\n  height: 400px;\n  width: 300px;\n  object-fit: cover;\n  opacity: 0;\n  transition: 1s;\n}\n\n.portait-animation {\n  animation: imgSlide 1s forwards ease-out;\n  animation-delay: 0.5s;\n}\n\n@keyframes imgSlide {\n  0% {\n    opacity: 0;\n    transform: translate(-50px);\n  }\n  40% {\n    opacity: 0;\n  }\n  100% {\n    box-shadow: var(--secondary-color) 7px 7px;\n    transform: translate(0px);\n    opacity: 1;\n  }\n}\n\n.aboutme-skills-con {\n  align-items: center;\n  gap: 5px;\n}\n\n.skillsUnderline {\n  height: 2px;\n  width: 0px;\n  background-color: var(--secondary-color);\n}\n\n.skillsUnderline-animation {\n  animation: skillsUnderlineExpand 1s forwards;\n}\n\n@keyframes skillsUnderlineExpand {\n  from {\n    width: 0px;\n  }\n  to {\n    width: min(90vw, 900px);\n  }\n}\n\n.skill-icons-con {\n  flex-wrap: wrap;\n  justify-content: center;\n  width: min(90vw, 900px);\n  margin-top: 20px;\n}\n\n.skill-icon-con {\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  width: 120px;\n  height: 150px;\n  opacity: 0;\n}\n\n.skill-icon-animation {\n  animation: slideInLeft 1s forwards;\n}\n\n.skill-icon-con:nth-child(1) {\n  animation-delay: 0s;\n}\n\n.skill-icon-con:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.skill-icon-con:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.skill-icon-con:nth-child(4) {\n  animation-delay: 0.3s;\n}\n.skill-icon-con:nth-child(5) {\n  animation-delay: 0.4s;\n}\n.skill-icon-con:nth-child(6) {\n  animation-delay: 0.5s;\n}\n.skill-icon-con:nth-child(7) {\n  animation-delay: 0.6s;\n}\n\n@keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-100px);\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n.skill-icon-img {\n  height: 80px;\n}\n\n/* Projects */\n\n.projects-con {\n  background-color: var(--bg-color);\n  padding-top: 30vh;\n  gap: max(10vh, 100px);\n}\n\n.projects-innerCon {\n  width: min(90vw, 900px);\n}\n\n.projectsUnderline {\n  height: 2px;\n  width: 0px;\n  background-color: var(--secondary-color);\n}\n\n.projectsUnderline-animation {\n  animation: 1s projectsUnderlineExpand forwards;\n}\n\n@keyframes projectsUnderlineExpand {\n  0% {\n  }\n  100% {\n    width: min(309px, 90vw);\n  }\n}\n\n.project-con {\n  height: 500px;\n  width: min(1200px, 95vw);\n  position: relative;\n}\n\n.project-img-right {\n  width: min(900px, 95vw);\n  box-shadow: var(--secondary-color) 10px 10px;\n  position: absolute;\n  right: 0px;\n  transition: 0.5s;\n}\n\n.project-img-right:hover {\n  transform: translate(-10px, -10px);\n  box-shadow: var(--secondary-color) 27px 27px;\n}\n\n.project-img-left {\n  width: min(900px, 95vw);\n  box-shadow: var(--secondary-color) -10px 10px;\n  position: absolute;\n  left: 0px;\n  transition: 0.5s;\n}\n\n.project-img-left:hover {\n  transform: translate(10px, -10px);\n  box-shadow: var(--secondary-color) -27px 27px;\n}\n\n.project-text-con {\n  height: 150px;\n  width: min(600px, calc(90vw - 24px));\n  background-color: var(--bg-secondary-color);\n  position: absolute;\n  bottom: 50px;\n  padding: 16px 24px;\n}\n\n.project-text-header {\n  color: var(--secondary-color);\n  font-size: 26px;\n}\n\n.project-tek-text {\n  color: var(--third-color);\n  font-size: 18px;\n  position: absolute;\n  bottom: 16px;\n  word-spacing: 10px;\n  margin-left: 10px;\n}\n\n.project-btn-con-right {\n  position: absolute;\n  justify-content: space-between;\n  right: 30px;\n  bottom: 20px;\n  gap: 20px;\n}\n\n.project-btn-overflow-con {\n  overflow: hidden;\n  position: relative;\n}\n\n.project-btn {\n  background-color: rgba(0, 0, 0, 0);\n  font-size: 20px;\n  transition: 0.2s;\n  border: none;\n}\n\n.project-btn-live {\n  color: var(--secondary-color);\n}\n\n.project-btn-live::after {\n  content: \"<Live/>\";\n  position: absolute;\n  bottom: -22px;\n}\n\n.project-btn:hover {\n  transform: translateY(-20px);\n}\n\n.project-btn-code {\n  color: var(--primary-color);\n}\n\n.project-btn-code::after {\n  content: \"<Code/>\";\n  position: absolute;\n  bottom: -22px;\n}\n\n.projects-more-btn {\n  height: 50px;\n  width: 200px;\n  border-radius: 30px;\n  background-color: rgba(0, 0, 0, 0);\n  color: var(--secondary-color);\n  border: solid 2px var(--secondary-color);\n  transition: 0.3s;\n  margin-top: max(5vh, 100px);\n}\n\n.projects-more-btn:hover {\n  background-color: var(--secondary-color);\n  color: var(--bg-color);\n}\n\n@media (max-width: 1100px) {\n  .project-text-con {\n    bottom: -50px;\n  }\n  .projectsUnderline {\n    margin-bottom: -50px;\n  }\n}\n\n@media (max-width: 600px) {\n  .project-con {\n    height: 600px;\n  }\n  .project-text-con {\n    bottom: -100px;\n    padding-bottom: 50px;\n  }\n  .project-img-right {\n    object-fit: cover;\n    height: min(70vh, 500px);\n  }\n  .project-img-left {\n    height: min(70vh, 500px);\n    object-fit: cover;\n  }\n  .project-text-header {\n    font-size: 20px;\n  }\n  .project-tek-text {\n    display: none;\n  }\n}\n/* Contact */\n\n.contact-con {\n  height: 100vh;\n  background-color: var(--bg-color);\n}\n\n.contact-innerCon {\n  width: min(90vw, 900px);\n}\n.contact-underline {\n  height: 2px;\n  width: 0px;\n  background-color: var(--secondary-color);\n}\n\n.contact-underline-animation {\n  animation: contactUnderlineExpand 1s forwards;\n}\n\n@keyframes contactUnderlineExpand {\n  0% {\n    width: 0px;\n  }\n  100% {\n    width: 193px;\n  }\n}\n\n.contact-btn {\n  margin-top: 10vh;\n  background-color: var(--secondary-color);\n  border: solid 2px var(--secondary-color);\n  height: 50px;\n  width: 200px;\n  font-size: 22px;\n  color: var(--bg-color);\n  border-radius: 5px;\n  transition: 0.3s;\n}\n\n.contact-btn:hover {\n  scale: 1.1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Img/LogoDark.svg":
/*!******************************!*\
  !*** ./src/Img/LogoDark.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "640803110bbb548c04d0.svg";

/***/ }),

/***/ "./src/Img/LogoDarkBehind.svg":
/*!************************************!*\
  !*** ./src/Img/LogoDarkBehind.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "80f55ca48e04aebfddb1.svg";

/***/ }),

/***/ "./src/Img/LogoLight.svg":
/*!*******************************!*\
  !*** ./src/Img/LogoLight.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5795b94f6ea345833937.svg";

/***/ }),

/***/ "./src/Img/LogoLightBehind.svg":
/*!*************************************!*\
  !*** ./src/Img/LogoLightBehind.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9040d0270c79d13dab7.svg";

/***/ }),

/***/ "./src/Img/battleships.png":
/*!*********************************!*\
  !*** ./src/Img/battleships.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f234f20faf9e534bf07.png";

/***/ }),

/***/ "./src/Img/chatgpt.png":
/*!*****************************!*\
  !*** ./src/Img/chatgpt.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "50bbb315e3124ff9a2b5.png";

/***/ }),

/***/ "./src/Img/css.svg":
/*!*************************!*\
  !*** ./src/Img/css.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fddbbaa2ccd6635e2fa.svg";

/***/ }),

/***/ "./src/Img/git.svg":
/*!*************************!*\
  !*** ./src/Img/git.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd381642a8b14fec88b8.svg";

/***/ }),

/***/ "./src/Img/html5.svg":
/*!***************************!*\
  !*** ./src/Img/html5.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "daa6b56582c54d8cbd1c.svg";

/***/ }),

/***/ "./src/Img/javascript.svg":
/*!********************************!*\
  !*** ./src/Img/javascript.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd46ca41839433d73577.svg";

/***/ }),

/***/ "./src/Img/jest.svg":
/*!**************************!*\
  !*** ./src/Img/jest.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9af4e60c6fab328c50be.svg";

/***/ }),

/***/ "./src/Img/knightMovesCal.png":
/*!************************************!*\
  !*** ./src/Img/knightMovesCal.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9de5717090349a20ce3.png";

/***/ }),

/***/ "./src/Img/moonIcon.svg":
/*!******************************!*\
  !*** ./src/Img/moonIcon.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95e7ce8724e5e8720452.svg";

/***/ }),

/***/ "./src/Img/portait.jpg":
/*!*****************************!*\
  !*** ./src/Img/portait.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d966e8dc27b35692b63e.jpg";

/***/ }),

/***/ "./src/Img/risskovvinduespudsning.png":
/*!********************************************!*\
  !*** ./src/Img/risskovvinduespudsning.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a13060ac438afc038348.png";

/***/ }),

/***/ "./src/Img/sunIcon.svg":
/*!*****************************!*\
  !*** ./src/Img/sunIcon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48e314c92026d8f384dc.svg";

/***/ }),

/***/ "./src/Img/weatherApp.png":
/*!********************************!*\
  !*** ./src/Img/weatherApp.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffc3e5be82119b054e5b.png";

/***/ }),

/***/ "./src/Img/webpack.svg":
/*!*****************************!*\
  !*** ./src/Img/webpack.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b460dec8736fcf92a8c7.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnREFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isb0RBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pZOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUI1QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDZHQUE2RyxrQkFBa0I7QUFDL0g7QUFDQSxpREFBaUQsc0JBQXNCLG9DQUFvQywyQkFBMkIsaUNBQWlDLDZCQUE2QixHQUFHLG9DQUFvQyxnQkFBZ0IsMEJBQTBCLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLEdBQUcsYUFBYSx3QkFBd0IsR0FBRyxhQUFhLDRCQUE0QixHQUFHLGFBQWEsd0JBQXdCLDRCQUE0QixHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLEdBQUcsWUFBWSxlQUFlLEdBQUcsNkJBQTZCLHFCQUFxQiw4QkFBOEIsZ0NBQWdDLEdBQUcsbUJBQW1CLCtCQUErQixnQ0FBZ0MsbUJBQW1CLEdBQUcsa0JBQWtCLG9CQUFvQixnQ0FBZ0MsR0FBRyxzQkFBc0Isa0NBQWtDLEdBQUcsWUFBWSxvQkFBb0IsR0FBRywwQ0FBMEMsc0NBQXNDLGtCQUFrQixnQkFBZ0IsdUJBQXVCLHFCQUFxQix3QkFBd0IsR0FBRyxpQkFBaUIsa0JBQWtCLHdCQUF3QixvQkFBb0IseUJBQXlCLHlCQUF5QixnQkFBZ0IsaUJBQWlCLDhCQUE4QiwyQkFBMkIsMEJBQTBCLDZCQUE2QixpQ0FBaUMsR0FBRyxlQUFlLDJDQUEyQywyQkFBMkIsMkJBQTJCLCtCQUErQix3QkFBd0IsNEdBQTRHLGlFQUFpRSxzQ0FBc0MsZ0VBQWdFLG1EQUFtRCxHQUFHLGdDQUFnQyxlQUFlLGtGQUFrRixLQUFLLEdBQUcsMkJBQTJCLGtDQUFrQyw4QkFBOEIsdUJBQXVCLGdEQUFnRCx3QkFBd0IsR0FBRyx5QkFBeUIsa0NBQWtDLDhCQUE4Qix1QkFBdUIsOENBQThDLHdCQUF3QixHQUFHLHdDQUF3QyxjQUFjLDRCQUE0QixnQ0FBZ0MsR0FBRyxzQ0FBc0MsK0NBQStDLDRCQUE0QixHQUFHLCtCQUErQixzQ0FBc0Msd0JBQXdCLEtBQUssR0FBRyx3Q0FBd0MsaUJBQWlCLGlDQUFpQyw0QkFBNEIsd0JBQXdCLDRDQUE0QyxHQUFHLHNDQUFzQyxnQ0FBZ0MsOEJBQThCLHdCQUF3QixlQUFlLGdEQUFnRCxHQUFHLDhCQUE4QixRQUFRLDZDQUE2QyxLQUFLLFNBQVMsNkNBQTZDLEtBQUssU0FBUywrQ0FBK0MsS0FBSyxVQUFVLCtDQUErQyxLQUFLLEdBQUcsdUJBQXVCLFFBQVEsNkNBQTZDLEtBQUssVUFBVSw2Q0FBNkMsS0FBSyxHQUFHLDZCQUE2QixRQUFRLCtDQUErQyxvREFBb0QsS0FBSyxVQUFVLGlEQUFpRCxpREFBaUQsS0FBSyxHQUFHLDJCQUEyQixRQUFRLGdEQUFnRCxpQkFBaUIsS0FBSyxVQUFVLGlEQUFpRCxpQkFBaUIsS0FBSyxHQUFHLDZCQUE2QixzQ0FBc0MsdUJBQXVCLEdBQUcsY0FBYyxpQkFBaUIsZ0RBQWdELDRCQUE0QixhQUFhLHFCQUFxQiw4QkFBOEIsdUJBQXVCLGdCQUFnQixHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxlQUFlLGlCQUFpQixxQkFBcUIsdUJBQXVCLGNBQWMsR0FBRyxxQkFBcUIsbUNBQW1DLEdBQUcsa0JBQWtCLGNBQWMsd0JBQXdCLEdBQUcsY0FBYyx1Q0FBdUMsaUJBQWlCLGtDQUFrQyxvQkFBb0IsdUJBQXVCLGdCQUFnQixxQkFBcUIsR0FBRyxvQkFBb0IsZ0NBQWdDLEdBQUcscUJBQXFCLGlCQUFpQixnQkFBZ0Isc0NBQXNDLHdCQUF3QixxQkFBcUIseUNBQXlDLEdBQUcsMkJBQTJCLGVBQWUsR0FBRyxvQkFBb0IsaUJBQWlCLEdBQUcscUJBQXFCLGlCQUFpQixvQkFBb0IscUJBQXFCLEdBQUcsaUJBQWlCLDZDQUE2QyxpQkFBaUIsaUJBQWlCLHdCQUF3Qix1QkFBdUIsMERBQTBELEdBQUcsbUJBQW1CLGVBQWUsb0JBQW9CLHNCQUFzQix5QkFBeUIsR0FBRyx1QkFBdUIsY0FBYyw0QkFBNEIsR0FBRyx3QkFBd0IsaUJBQWlCLGdCQUFnQiw2Q0FBNkMsR0FBRyx1QkFBdUIsa0JBQWtCLGlCQUFpQixzQkFBc0IsZUFBZSxtQkFBbUIsR0FBRyx3QkFBd0IsNkNBQTZDLDBCQUEwQixHQUFHLHlCQUF5QixRQUFRLGlCQUFpQixrQ0FBa0MsS0FBSyxTQUFTLGlCQUFpQixLQUFLLFVBQVUsaURBQWlELGdDQUFnQyxpQkFBaUIsS0FBSyxHQUFHLHlCQUF5Qix3QkFBd0IsYUFBYSxHQUFHLHNCQUFzQixnQkFBZ0IsZUFBZSw2Q0FBNkMsR0FBRyxnQ0FBZ0MsaURBQWlELEdBQUcsc0NBQXNDLFVBQVUsaUJBQWlCLEtBQUssUUFBUSw4QkFBOEIsS0FBSyxHQUFHLHNCQUFzQixvQkFBb0IsNEJBQTRCLDRCQUE0QixxQkFBcUIsR0FBRyxxQkFBcUIsd0JBQXdCLDRCQUE0QixjQUFjLGlCQUFpQixrQkFBa0IsZUFBZSxHQUFHLDJCQUEyQix1Q0FBdUMsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsa0NBQWtDLDBCQUEwQixHQUFHLGdDQUFnQywwQkFBMEIsR0FBRyxnQ0FBZ0MsMEJBQTBCLEdBQUcsZ0NBQWdDLDBCQUEwQixHQUFHLGdDQUFnQywwQkFBMEIsR0FBRyxnQ0FBZ0MsMEJBQTBCLEdBQUcsNEJBQTRCLFFBQVEsaUJBQWlCLG9DQUFvQyxLQUFLLFNBQVMsaUJBQWlCLEtBQUssVUFBVSxpQkFBaUIsaUNBQWlDLEtBQUssR0FBRyxxQkFBcUIsaUJBQWlCLEdBQUcscUNBQXFDLHNDQUFzQyxzQkFBc0IsMEJBQTBCLEdBQUcsd0JBQXdCLDRCQUE0QixHQUFHLHdCQUF3QixnQkFBZ0IsZUFBZSw2Q0FBNkMsR0FBRyxrQ0FBa0MsbURBQW1ELEdBQUcsd0NBQXdDLFFBQVEsS0FBSyxVQUFVLDhCQUE4QixLQUFLLEdBQUcsa0JBQWtCLGtCQUFrQiw2QkFBNkIsdUJBQXVCLEdBQUcsd0JBQXdCLDRCQUE0QixpREFBaUQsdUJBQXVCLGVBQWUscUJBQXFCLEdBQUcsOEJBQThCLHVDQUF1QyxpREFBaUQsR0FBRyx1QkFBdUIsNEJBQTRCLGtEQUFrRCx1QkFBdUIsY0FBYyxxQkFBcUIsR0FBRyw2QkFBNkIsc0NBQXNDLGtEQUFrRCxHQUFHLHVCQUF1QixrQkFBa0IseUNBQXlDLGdEQUFnRCx1QkFBdUIsaUJBQWlCLHVCQUF1QixHQUFHLDBCQUEwQixrQ0FBa0Msb0JBQW9CLEdBQUcsdUJBQXVCLDhCQUE4QixvQkFBb0IsdUJBQXVCLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcsNEJBQTRCLHVCQUF1QixtQ0FBbUMsZ0JBQWdCLGlCQUFpQixjQUFjLEdBQUcsK0JBQStCLHFCQUFxQix1QkFBdUIsR0FBRyxrQkFBa0IsdUNBQXVDLG9CQUFvQixxQkFBcUIsaUJBQWlCLEdBQUcsdUJBQXVCLGtDQUFrQyxHQUFHLDhCQUE4Qix5QkFBeUIsdUJBQXVCLGtCQUFrQixHQUFHLHdCQUF3QixpQ0FBaUMsR0FBRyx1QkFBdUIsZ0NBQWdDLEdBQUcsOEJBQThCLHlCQUF5Qix1QkFBdUIsa0JBQWtCLEdBQUcsd0JBQXdCLGlCQUFpQixpQkFBaUIsd0JBQXdCLHVDQUF1QyxrQ0FBa0MsNkNBQTZDLHFCQUFxQixnQ0FBZ0MsR0FBRyw4QkFBOEIsNkNBQTZDLDJCQUEyQixHQUFHLGdDQUFnQyx1QkFBdUIsb0JBQW9CLEtBQUssd0JBQXdCLDJCQUEyQixLQUFLLEdBQUcsK0JBQStCLGtCQUFrQixvQkFBb0IsS0FBSyx1QkFBdUIscUJBQXFCLDJCQUEyQixLQUFLLHdCQUF3Qix3QkFBd0IsK0JBQStCLEtBQUssdUJBQXVCLCtCQUErQix3QkFBd0IsS0FBSywwQkFBMEIsc0JBQXNCLEtBQUssdUJBQXVCLG9CQUFvQixLQUFLLEdBQUcsaUNBQWlDLGtCQUFrQixzQ0FBc0MsR0FBRyx1QkFBdUIsNEJBQTRCLEdBQUcsc0JBQXNCLGdCQUFnQixlQUFlLDZDQUE2QyxHQUFHLGtDQUFrQyxrREFBa0QsR0FBRyx1Q0FBdUMsUUFBUSxpQkFBaUIsS0FBSyxVQUFVLG1CQUFtQixLQUFLLEdBQUcsa0JBQWtCLHFCQUFxQiw2Q0FBNkMsNkNBQTZDLGlCQUFpQixpQkFBaUIsb0JBQW9CLDJCQUEyQix1QkFBdUIscUJBQXFCLEdBQUcsd0JBQXdCLGVBQWUsR0FBRyxTQUFTLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLGFBQWEsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLHdCQUF3QixXQUFXLEtBQUssS0FBSyx3QkFBd0IsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFL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O1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wYWdlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9wYWdlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3N0eWxlLmNzcz9jYjQwIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRGlzcGxheSBmcm9tIFwiLi9wYWdlcy9kaXNwbGF5XCI7XG5pbXBvcnQgY3JlYXRlSG9tZSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSBcIi4vcGFnZXMvcHJvamVjdHNcIjtcbmltcG9ydCBjcmVhdGVDb250YWN0IGZyb20gXCIuL3BhZ2VzL2NvbnRhY3RcIjtcblxuY29uc3QgYXBwZW5kUGFnZSA9ICgpID0+IHtcbiAgY3JlYXRlRGlzcGxheSgpLnRoZW4oKGVsKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gIH0pO1xuICBjcmVhdGVIb21lKCkudGhlbigoZWwpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgfSk7XG4gIGNyZWF0ZVByb2plY3RzKCkudGhlbigoZWwpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgfSk7XG4gIGNyZWF0ZUNvbnRhY3QoKS50aGVuKChlbCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICB9KTtcbn07XG5cbmFwcGVuZFBhZ2UoKTtcbiIsImltcG9ydCB7IHR5cGluZ0FuaW1hdGlvbiB9IGZyb20gXCIuLi90b29sc1wiO1xuXG5jb25zdCBjcmVhdGVDb250YWN0ID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvblwiLCBcImZsZXgtcm93XCIsIFwiY2VudGVyXCIpO1xuXG4gICAgY29uc3QgaW5uZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlubmVyQ29uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWlubmVyQ29uXCIsIFwiZmxleC1jb2x1bW5cIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZy10ZXh0XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhlYWRlcjIuY2xhc3NMaXN0LmFkZChcInNlY29uZGFyeS1jb2xvclwiKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyMik7XG5cbiAgICBjb25zdCBoZWFkZXJVbmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlclVuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC11bmRlcmxpbmVcIik7XG5cbiAgICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnRhY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJub3JtYWwtdGV4dFwiKTtcbiAgICBjb250YWN0VGV4dC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEwcHhcIjtcbiAgICBjb250YWN0VGV4dC5zdHlsZS5oZWlnaHQgPSBcIjI4LjhweFwiO1xuXG4gICAgbGV0IHNjcm9sbGVkID0gZmFsc2U7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLyBpbm5lckhlaWdodCA8IDAuNjUgJiZcbiAgICAgICAgc2Nyb2xsZWQgPT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBzY3JvbGxlZCA9IHRydWU7XG4gICAgICAgIGhlYWRlclVuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC11bmRlcmxpbmUtYW5pbWF0aW9uXCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHR5cGluZ0FuaW1hdGlvbihoZWFkZXIxLCBcIkNvbnRhY3RcIiwgNjApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdHlwaW5nQW5pbWF0aW9uKGhlYWRlcjIsIFwiIG1lXCIsIDYwKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICB0eXBpbmdBbmltYXRpb24oY29udGFjdFRleHQsIFwiV2hhdCdzIG5leHQ/IFwiLCA0MCk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHR5cGluZ0FuaW1hdGlvbihjb250YWN0VGV4dCwgXCIgTGV0J3MgZmluZCBvdXQgdG9nZXRoZXIhXCIsIDQwKTtcbiAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgIH0sIDQyMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbWFpbEJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbEJ0bkNvbi5jbGFzc0xpc3QuYWRkKFwiZmxleC1yb3dcIiwgXCJjZW50ZXJcIik7XG5cbiAgICBjb25zdCBtYWlsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtYWlsQnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWJ0blwiKTtcbiAgICBtYWlsQnRuLnRleHRDb250ZW50ID0gXCJTZW5kIG1haWxcIjtcblxuICAgIG1haWxCdG5Db24uYXBwZW5kQ2hpbGQobWFpbEJ0bik7XG5cbiAgICBtYWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBtYWlsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbWFpbExpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIm1haWx0bzphbmRyZWFzc2tha2tlYmFla2tydXNlQGdtYWlsLmNvbVwiKTtcblxuICAgICAgbWFpbExpbmsuY2xpY2soKTtcbiAgICB9KTtcblxuICAgIGlubmVyQ29uLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgaW5uZXJDb24uYXBwZW5kQ2hpbGQoaGVhZGVyVW5kZXJsaW5lKTtcbiAgICBpbm5lckNvbi5hcHBlbmRDaGlsZChjb250YWN0VGV4dCk7XG4gICAgaW5uZXJDb24uYXBwZW5kQ2hpbGQobWFpbEJ0bkNvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGlubmVyQ29uKTtcblxuICAgIHJlc29sdmUoY29udGVudCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImltcG9ydCB7IHR5cGluZ0FuaW1hdGlvbiwgZGVsZXRlVHlwZWRUZXh0IH0gZnJvbSBcIi4uL3Rvb2xzXCI7XG5cbmNvbnN0IGNyZWF0ZURpc3BsYXkgPSAoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkaXNwbGF5XCIpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktY29uXCIsIFwiZmxleC1yb3dcIiwgXCJjZW50ZXJcIik7XG5cbiAgICBjb25zdCB0eXBpbmdDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHR5cGluZ0Nvbi5jbGFzc0xpc3QuYWRkKFwidHlwaW5nLWNvblwiKTtcblxuICAgIGNvbnN0IHR5cGVsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0eXBlbGluZS5jbGFzc0xpc3QuYWRkKFwidHlwZWxpbmVcIik7XG5cbiAgICBjb25zdCB0eXBpbmdUZXh0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHR5cGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0eXBpbmdUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LXNpemU2XCIpO1xuXG4gICAgY29uc3QgdHlwaW5nVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0eXBpbmdUZXh0Mi5jbGFzc0xpc3QuYWRkKFwidGV4dC1zaXplNlwiLCBcInNlY29uZGFyeS1jb2xvclwiKTtcbiAgICB0eXBpbmdUZXh0Mi50ZXh0Q29udGVudCA9IFwiIFwiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0eXBpbmdBbmltYXRpb24odHlwaW5nVGV4dCwgXCJXRUIgREVWRUxPUEVSXCIsIDYwKTtcbiAgICB9LCAzMDAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGVsZXRlVHlwZWRUZXh0KHR5cGluZ1RleHQsIFwiV0VCIERFVkVMT1BFUlwiLCAzMCk7XG4gICAgfSwgNjAwMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHR5cGluZ0FuaW1hdGlvbih0eXBpbmdUZXh0LCBcIkRFU0lHTkVSXCIsIDYwKTtcbiAgICB9LCA2NTAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGVsZXRlVHlwZWRUZXh0KHR5cGluZ1RleHQsIFwiREVTSUdORVJcIiwgMzApO1xuICAgIH0sIDkwMDApO1xuXG4gICAgLy8gQUktRW5hYmxlZCBEZXZlbG9wZXJcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdHlwaW5nQW5pbWF0aW9uKHR5cGluZ1RleHQsIFwiQU5EUkVBU1wiLCA2MCk7XG4gICAgfSwgOTUwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0eXBpbmdUZXh0Q29uLmFwcGVuZENoaWxkKHR5cGluZ1RleHQyKTtcbiAgICAgIHR5cGluZ0FuaW1hdGlvbih0eXBpbmdUZXh0MiwgXCJTS0FLS0VCw4ZLLUtSVVNFXCIsIDYwKTtcbiAgICB9LCA5OTIwKTtcblxuICAgIHR5cGluZ1RleHRDb24uYXBwZW5kQ2hpbGQodHlwaW5nVGV4dCk7XG5cbiAgICB0eXBpbmdDb24uYXBwZW5kQ2hpbGQodHlwaW5nVGV4dENvbik7XG4gICAgdHlwaW5nQ29uLmFwcGVuZENoaWxkKHR5cGVsaW5lKTtcblxuICAgIGNvbnN0IGNvZGVUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvZGVUZXh0MS5jbGFzc0xpc3QuYWRkKFwibW92aW5nLWNvZGUtc2lkZXdheXNcIik7XG4gICAgY29kZVRleHQxLnRleHRDb250ZW50ID0gYDwhRE9DVFlQRSBodG1sPjxodG1sIGxhbmc9XCJlblwiPjxoZWFkPjxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLjBcIj48L2hlYWQ+PGJvZHk+PHA+SSB3aWxsIGNyZWF0ZSB0aGUgY29udGVudCB0aGF0IHN1aXRzIHlvdXIgYnVpc25lc3M8L3A+PC9ib2R5PjwvaHRtbD5gO1xuXG4gICAgY29uc3QgY29kZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29kZVRleHQyLmNsYXNzTGlzdC5hZGQoXCJtb3ZpbmctY29kZS11cHdhcmRcIik7XG4gICAgY29kZVRleHQyLnRleHRDb250ZW50ID0gYDwhRE9DVFlQRSBodG1sPjxodG1sIGxhbmc9XCJlblwiPjxoZWFkPjxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLjBcIj48L2hlYWQ+PGJvZHk+PHA+SSB3aWxsIGNyZWF0ZSB0aGUgY29udGVudCB0aGF0IHN1aXRzIHlvdXIgYnVpc25lc3M8L3A+PC9ib2R5PjwvaHRtbD5gO1xuXG4gICAgY29uc3QgY29kZVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29kZVRleHQzLmNsYXNzTGlzdC5hZGQoXCJtb3ZpbmctY29kZS1zaWRld2F5c1wiKTtcbiAgICBjb2RlVGV4dDMudGV4dENvbnRlbnQgPSBgPCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz1cImVuXCI+PGhlYWQ+PG1ldGEgY2hhcnNldD1cIlVURi04XCI+PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEuMFwiPjwvaGVhZD48Ym9keT48cD5JIHdpbGwgY3JlYXRlIHRoZSBjb250ZW50IHRoYXQgc3VpdHMgeW91ciBidWlzbmVzczwvcD48L2JvZHk+PC9odG1sPmA7XG5cbiAgICBjb25zdCBjb2RlVGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb2RlVGV4dDQuY2xhc3NMaXN0LmFkZChcIm1vdmluZy1jb2RlLXVwd2FyZFwiKTtcbiAgICBjb2RlVGV4dDQudGV4dENvbnRlbnQgPSBgPCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz1cImVuXCI+PGhlYWQ+PG1ldGEgY2hhcnNldD1cIlVURi04XCI+PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEuMFwiPjwvaGVhZD48Ym9keT48cD5JIHdpbGwgY3JlYXRlIHRoZSBjb250ZW50IHRoYXQgc3VpdHMgeW91ciBidWlzbmVzczwvcD48L2JvZHk+PC9odG1sPmA7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHR5cGluZ0Nvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb2RlVGV4dDEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29kZVRleHQyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvZGVUZXh0Myk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb2RlVGV4dDQpO1xuXG4gICAgcmVzb2x2ZShjb250ZW50KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXNwbGF5O1xuIiwiaW1wb3J0IHsgdHlwaW5nQW5pbWF0aW9uIH0gZnJvbSBcIi4uL3Rvb2xzXCI7XG5cbi8vIEltZ1xuaW1wb3J0IExvZ29EYXJrU3JjIGZyb20gXCIuLi9JbWcvTG9nb0Rhcmsuc3ZnXCI7XG5pbXBvcnQgTG9nb0RhcmtCZWhpbmRTcmMgZnJvbSBcIi4uL0ltZy9Mb2dvRGFya0JlaGluZC5zdmdcIjtcbmltcG9ydCBMb2dvTGlnaHRTcmMgZnJvbSBcIi4uL0ltZy9Mb2dvTGlnaHQuc3ZnXCI7XG5pbXBvcnQgTG9nb0xpZ2h0QmVoaW5kU3JjIGZyb20gXCIuLi9JbWcvTG9nb0xpZ2h0QmVoaW5kLnN2Z1wiO1xuaW1wb3J0IG1vb25JY29uU3JjIGZyb20gXCIuLi9JbWcvbW9vbkljb24uc3ZnXCI7XG5pbXBvcnQgc3VuSWNvblNyYyBmcm9tIFwiLi4vSW1nL3N1bkljb24uc3ZnXCI7XG5cbmltcG9ydCBwb3J0cmFpdCBmcm9tIFwiLi4vSW1nL3BvcnRhaXQuanBnXCI7XG5cbi8vIEljb25zXG5pbXBvcnQgaHRtbDVTcmMgZnJvbSBcIi4uL0ltZy9odG1sNS5zdmdcIjtcbmltcG9ydCBjc3NTcmMgZnJvbSBcIi4uL0ltZy9jc3Muc3ZnXCI7XG5pbXBvcnQgamF2YXNjcmlwdFNyYyBmcm9tIFwiLi4vSW1nL2phdmFzY3JpcHQuc3ZnXCI7XG5pbXBvcnQgamVzdFNyYyBmcm9tIFwiLi4vSW1nL2plc3Quc3ZnXCI7XG5pbXBvcnQgd2VicGFja1NyYyBmcm9tIFwiLi4vSW1nL3dlYnBhY2suc3ZnXCI7XG5pbXBvcnQgZ2l0U3JjIGZyb20gXCIuLi9JbWcvZ2l0LnN2Z1wiO1xuaW1wb3J0IGNoYXRHcHRTcmMgZnJvbSBcIi4uL0ltZy9jaGF0Z3B0LnBuZ1wiO1xuXG5jb25zdCBjcmVhdGVIb21lID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb25cIik7XG5cbiAgICBjb25zdCBuYXZDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdkNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWNvblwiLCBcImZsZXgtcm93XCIsIFwiYWwtY2VuXCIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgaWYgKGNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDw9IDApIHtcbiAgICAgICAgbmF2Q29uLmNsYXNzTGlzdC5hZGQoXCJmaXhlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hdkNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9nby5zcmMgPSBMb2dvRGFya1NyYztcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJuYXYtbG9nb1wiKTtcblxuICAgIGNvbnN0IGxvZ29CZWhpbmQgPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvQmVoaW5kLnNyYyA9IExvZ29EYXJrQmVoaW5kU3JjO1xuICAgIGxvZ29CZWhpbmQuY2xhc3NMaXN0LmFkZChcIm5hdi1sb2dvXCIsIFwibmF2LWxvZ28tYmVoaW5kXCIpO1xuXG4gICAgbG9nby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheVwiKTtcblxuICAgICAgZGlzcGxheS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmF2QnRuQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBuYXZCdG5Db24uY2xhc3NMaXN0LmFkZChcIm5hdi1idG4tY29uXCIsIFwiZmxleC1yb3dcIiwgXCJjZW50ZXJcIik7XG5cbiAgICBsZXQgZm9yY2VTY3JvbGxpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhYm91dEJ0bi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcbiAgICBhYm91dEJ0bi50ZXh0Q29udGVudCA9IFwiPEFib3V0Lz5cIjtcblxuICAgIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBob3ZlclNoYXBlLnN0eWxlLnJpZ2h0ID0gXCJjYWxjKDQuNXZ3ICsgNDEzLjJweCAtIDEzMHB4ICsgNzguMnB4KVwiO1xuICAgICAgYWJvdXRCdG4uc3R5bGUuY29sb3IgPSBcInZhcigtLWJnLXNlY29uZGFyeS1jb2xvcilcIjtcblxuICAgICAgcHJvamVjdHNCdG4uc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgY29udGFjdEJ0bi5zdHlsZS5jb2xvciA9IFwiXCI7XG5cbiAgICAgIGNvbnRlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIGZvcmNlU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb3JjZVNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZChcIm5hdi1idG5cIik7XG4gICAgcHJvamVjdHNCdG4udGV4dENvbnRlbnQgPSBcIjxQcm9qZWN0cy8+XCI7XG5cbiAgICBwcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaG92ZXJTaGFwZS5zdHlsZS5yaWdodCA9IFwiY2FsYyg0LjV2dyArIDI3MXB4IC0gMTMwcHggKyA3OC4ycHgpXCI7XG4gICAgICBwcm9qZWN0c0J0bi5zdHlsZS5jb2xvciA9IFwidmFyKC0tYmctc2Vjb25kYXJ5LWNvbG9yKVwiO1xuXG4gICAgICBjb250YWN0QnRuLnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgIGFib3V0QnRuLnN0eWxlLmNvbG9yID0gXCJcIjtcblxuICAgICAgY29uc3QgcHJvamVjdHNQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0c1wiKTtcblxuICAgICAgcHJvamVjdHNQYWdlLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICBmb3JjZVNjcm9sbGluZyA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm9yY2VTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKFwibmF2LWJ0blwiKTtcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCI8Q29udGFjdC8+XCI7XG5cbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBob3ZlclNoYXBlLnN0eWxlLnJpZ2h0ID0gXCJjYWxjKDQuNXZ3ICsgMTIwcHggLSAxMzBweCArIDc4LjJweClcIjtcbiAgICAgIGNvbnRhY3RCdG4uc3R5bGUuY29sb3IgPSBcInZhcigtLWJnLXNlY29uZGFyeS1jb2xvcilcIjtcblxuICAgICAgcHJvamVjdHNCdG4uc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgYWJvdXRCdG4uc3R5bGUuY29sb3IgPSBcIlwiO1xuXG4gICAgICBjb25zdCBjb250YWN0UGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcblxuICAgICAgY29udGFjdFBhZ2Uuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgIGZvcmNlU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmb3JjZVNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBob3ZlclNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob3ZlclNoYXBlLmNsYXNzTGlzdC5hZGQoXCJob3ZlcnNoYXBlXCIpO1xuXG4gICAgaG92ZXJTaGFwZS5zdHlsZS5yaWdodCA9IFwiY2FsYyg0LjV2dyArIDQxMy4ycHggLSAxMzBweClcIjtcbiAgICBhYm91dEJ0bi5zdHlsZS5jb2xvciA9IFwidmFyKC0tYmctY29sb3IpXCI7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0c1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzXCIpO1xuICAgICAgY29uc3QgY29udGFjdFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbiAgICAgIGlmIChmb3JjZVNjcm9sbGluZyA9PSBmYWxzZSkge1xuICAgICAgICBpZiAoY29udGFjdFBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC8gaW5uZXJIZWlnaHQgPCAwLjM1KSB7XG4gICAgICAgICAgaG92ZXJTaGFwZS5zdHlsZS5yaWdodCA9IFwiY2FsYyg0LjV2dyArIDEyMHB4IC0gMTMwcHggKyA3OC4ycHgpXCI7XG4gICAgICAgICAgY29udGFjdEJ0bi5zdHlsZS5jb2xvciA9IFwidmFyKC0tYmctc2Vjb25kYXJ5LWNvbG9yKVwiO1xuXG4gICAgICAgICAgcHJvamVjdHNCdG4uc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICAgIGFib3V0QnRuLnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBwcm9qZWN0c1BhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC8gaW5uZXJIZWlnaHQgPFxuICAgICAgICAgIDAuMzVcbiAgICAgICAgKSB7XG4gICAgICAgICAgaG92ZXJTaGFwZS5zdHlsZS5yaWdodCA9IFwiY2FsYyg0LjV2dyArIDI3MXB4IC0gMTMwcHggKyA3OC4ycHgpXCI7XG4gICAgICAgICAgcHJvamVjdHNCdG4uc3R5bGUuY29sb3IgPSBcInZhcigtLWJnLXNlY29uZGFyeS1jb2xvcilcIjtcblxuICAgICAgICAgIGNvbnRhY3RCdG4uc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICAgIGFib3V0QnRuLnN0eWxlLmNvbG9yID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBob3ZlclNoYXBlLnN0eWxlLnJpZ2h0ID0gXCJjYWxjKDQuNXZ3ICsgNDEzLjJweCAtIDEzMHB4ICsgNzguMnB4KVwiO1xuICAgICAgICAgIGFib3V0QnRuLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1iZy1zZWNvbmRhcnktY29sb3IpXCI7XG5cbiAgICAgICAgICBwcm9qZWN0c0J0bi5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICAgICAgY29udGFjdEJ0bi5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHRoZW1lQ2hhbmdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGVtZUNoYW5nZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGhlbWVDaGFuZ2VCdG5cIiwgXCJmbGV4LXJvd1wiLCBcImNlbnRlclwiKTtcblxuICAgIGNvbnN0IHRoZW1lSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHRoZW1lSWNvbi5zcmMgPSBzdW5JY29uU3JjO1xuICAgIHRoZW1lSWNvbi5jbGFzc0xpc3QuYWRkKFwidGhlbWVJY29uRGFya1wiKTtcblxuICAgIGxldCB0aGVtZSA9IFwibGlnaHRcIjtcblxuICAgIGNvbnN0IGNoYW5nZVRoZW1lID0gKCkgPT4ge1xuICAgICAgaWYgKHRoZW1lID09IFwibGlnaHRcIikge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZy1jb2xvclwiLCBcIndoaXRlXCIpO1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZy1zZWNvbmRhcnktY29sb3JcIiwgXCIjZWZlZmVmZmZcIik7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXByaW1hcnktY29sb3JcIiwgXCJibGFja1wiKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc2Vjb25kYXJ5LWNvbG9yXCIsIFwiIzQyNjc2YmZmXCIpO1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10aGlyZC1jb2xvclwiLCBcIiM4NTg1ODVmZlwiKTtcblxuICAgICAgICB0aGVtZUljb24uc3JjID0gbW9vbkljb25TcmM7XG4gICAgICAgIHRoZW1lSWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwidGhlbWVJY29uRGFya1wiKTtcbiAgICAgICAgdGhlbWVJY29uLmNsYXNzTGlzdC5hZGQoXCJ0aGVtZUljb25MaWdodFwiKTtcblxuICAgICAgICBsb2dvLnNyYyA9IExvZ29MaWdodFNyYztcbiAgICAgICAgbG9nb0JlaGluZC5zcmMgPSBMb2dvTGlnaHRCZWhpbmRTcmM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZy1jb2xvclwiLCBcIiMxMTE4MjdmZlwiKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmctc2Vjb25kYXJ5LWNvbG9yXCIsIFwiIzA3MGMxNmZmXCIpO1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1wcmltYXJ5LWNvbG9yXCIsIFwid2hpdGVcIik7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXNlY29uZGFyeS1jb2xvclwiLCBcIiMxN2QzZThcIik7XG4gICAgICAgIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXRoaXJkLWNvbG9yXCIsIFwiIzQ1NDU0NWZmXCIpO1xuXG4gICAgICAgIHRoZW1lSWNvbi5zcmMgPSBzdW5JY29uU3JjO1xuICAgICAgICB0aGVtZUljb24uY2xhc3NMaXN0LnJlbW92ZShcInRoZW1lSWNvbkxpZ2h0XCIpO1xuICAgICAgICB0aGVtZUljb24uY2xhc3NMaXN0LmFkZChcInRoZW1lSWNvbkRhcmtcIik7XG5cbiAgICAgICAgbG9nby5zcmMgPSBMb2dvRGFya1NyYztcbiAgICAgICAgbG9nb0JlaGluZC5zcmMgPSBMb2dvRGFya0JlaGluZFNyYztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikpIHtcbiAgICAgIHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKTtcbiAgICAgIGNoYW5nZVRoZW1lKCk7XG4gICAgfVxuXG4gICAgdGhlbWVDaGFuZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGVtZSA9PSBcImRhcmtcIikge1xuICAgICAgICB0aGVtZSA9IFwibGlnaHRcIjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB0aGVtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGVtZSA9IFwiZGFya1wiO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHRoZW1lKTtcbiAgICAgIH1cbiAgICAgIGNoYW5nZVRoZW1lKCk7XG4gICAgfSk7XG5cbiAgICB0aGVtZUNoYW5nZUJ0bi5hcHBlbmRDaGlsZCh0aGVtZUljb24pO1xuXG4gICAgY29uc3Qgc2NyZWVuUmVzaXplZCA9ICgpID0+IHtcbiAgICAgIGlmIChpbm5lcldpZHRoIDwgNjAwKSB7XG4gICAgICAgIHdoaWxlIChuYXZCdG5Db24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgIG5hdkJ0bkNvbi5yZW1vdmVDaGlsZChuYXZCdG5Db24ubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBuYXZDb24uYXBwZW5kQ2hpbGQobG9nb0JlaGluZCk7XG4gICAgICAgIG5hdkNvbi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICAgICAgbmF2Q29uLmFwcGVuZENoaWxkKG5hdkJ0bkNvbik7XG5cbiAgICAgICAgbmF2QnRuQ29uLmFwcGVuZENoaWxkKHRoZW1lQ2hhbmdlQnRuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlIChuYXZCdG5Db24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgIG5hdkJ0bkNvbi5yZW1vdmVDaGlsZChuYXZCdG5Db24ubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBuYXZCdG5Db24uYXBwZW5kQ2hpbGQoYWJvdXRCdG4pO1xuICAgICAgICBuYXZCdG5Db24uYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xuICAgICAgICBuYXZCdG5Db24uYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gICAgICAgIG5hdkJ0bkNvbi5hcHBlbmRDaGlsZCh0aGVtZUNoYW5nZUJ0bik7XG4gICAgICAgIG5hdkJ0bkNvbi5hcHBlbmRDaGlsZChob3ZlclNoYXBlKTtcblxuICAgICAgICBuYXZDb24uYXBwZW5kQ2hpbGQobG9nb0JlaGluZCk7XG4gICAgICAgIG5hdkNvbi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICAgICAgbmF2Q29uLmFwcGVuZENoaWxkKG5hdkJ0bkNvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICAgIHNjcmVlblJlc2l6ZWQoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICBzY3JlZW5SZXNpemVkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbmZvQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvQ29uLmNsYXNzTGlzdC5hZGQoXCJob21lSW5mby1jb25cIiwgXCJmbGV4LXJvd1wiLCBcImNlbnRlclwiKTtcblxuICAgIGNvbnN0IGFib3V0bWVUZXh0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dG1lVGV4dENvbi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRtZS10ZXh0LWNvblwiLCBcImZsZXgtY29sdW1uXCIpO1xuXG4gICAgY29uc3QgYWJvdXRtZVRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBhYm91dG1lVGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZy10ZXh0XCIpO1xuICAgIGFib3V0bWVUZXh0SGVhZGVyLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGxldCB2aWV3ZWQgPSBmYWxzZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLyBpbm5lckhlaWdodCA8IDAuMjUgJiZcbiAgICAgICAgdmlld2VkID09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgdmlld2VkID0gdHJ1ZTtcbiAgICAgICAgdHlwaW5nQW5pbWF0aW9uKGFib3V0bWVUZXh0SGVhZGVyLCBcIkFib3V0IG1lXCIsIDkwKTtcbiAgICAgICAgcG9ydGFpdC5jbGFzc0xpc3QuYWRkKFwicG9ydGFpdC1hbmltYXRpb25cIik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBhYm91dG1lVGV4dFVuZGVybGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRtZVRleHRVbmRlcmxpbmUuY2xhc3NMaXN0LmFkZChcImFib3V0bWUtdW5kZXJsaW5lXCIpO1xuXG4gICAgY29uc3QgYWJvdXRtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBhYm91dG1lVGV4dC5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLXRleHRcIik7XG4gICAgYWJvdXRtZVRleHQudGV4dENvbnRlbnQgPVxuICAgICAgXCJIZWxsbyEgSSdtIGEgcGFzc2lvbmF0ZSBwcm9ncmFtbWVyIHdobyBoYXMgYSBkZWVwIGFwcHJlY2lhdGlvbiBmb3IgdGhlIGZ1c2lvbiBvZiBjb2RlIGFuZCBjYXB0aXZhdGluZyBkZXNpZ25zLiBNeSBjcmVhdGl2ZSBzcGlyaXQgZnVlbHMgbXkgd29yaywgYW5kIEknbSBvbiBhIGNvbnN0YW50IHF1ZXN0IGZvciBrbm93bGVkZ2UsIGFsd2F5cyBvcGVuIHRvIGZyZXNoIHBlcnNwZWN0aXZlcyBhbmQgZmxleGlibGUgaW4gYWRhcHRpbmcgdG8gbmV3IGNoYWxsZW5nZXMuIFdpdGggdW53YXZlcmluZyBkZXRlcm1pbmF0aW9uLCBJIGVtYmFyayBvbiBkaWdpdGFsIGpvdXJuZXlzIHRvIGNyYWZ0IG5vdCBqdXN0IGZ1bmN0aW9uYWwsIGJ1dCB0cnVseSBlbmdhZ2luZyBhbmQgaW5ub3ZhdGl2ZSBleHBlcmllbmNlcy5cIjtcblxuICAgIGFib3V0bWVUZXh0Q29uLmFwcGVuZENoaWxkKGFib3V0bWVUZXh0SGVhZGVyKTtcbiAgICBhYm91dG1lVGV4dENvbi5hcHBlbmRDaGlsZChhYm91dG1lVGV4dFVuZGVybGluZSk7XG4gICAgYWJvdXRtZVRleHRDb24uYXBwZW5kQ2hpbGQoYWJvdXRtZVRleHQpO1xuXG4gICAgY29uc3QgcG9ydGFpdCA9IG5ldyBJbWFnZSgpO1xuICAgIHBvcnRhaXQuc3JjID0gcG9ydHJhaXQ7XG4gICAgcG9ydGFpdC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRtZS1wb3J0cmFpdFwiKTtcblxuICAgIGluZm9Db24uYXBwZW5kQ2hpbGQoYWJvdXRtZVRleHRDb24pO1xuICAgIGluZm9Db24uYXBwZW5kQ2hpbGQocG9ydGFpdCk7XG5cbiAgICBjb25zdCBza2lsbHNDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNraWxsc0Nvbi5jbGFzc0xpc3QuYWRkKFwiYWJvdXRtZS1za2lsbHMtY29uXCIsIFwiZmxleC1jb2x1bW5cIik7XG5cbiAgICBjb25zdCBza2lsbHNIZWFkZXJDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNraWxsc0hlYWRlckNvbi5zdHlsZS5oZWlnaHQgPSBcIjU4LjRweFwiO1xuXG4gICAgY29uc3Qgc2tpbGxzSGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNraWxsc0hlYWRlcjEuY2xhc3NMaXN0LmFkZChcImhlYWRpbmctdGV4dFwiKTtcbiAgICBza2lsbHNIZWFkZXIxLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IHNraWxsc0hlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBza2lsbHNIZWFkZXIyLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nLXRleHRcIiwgXCJzZWNvbmRhcnktY29sb3JcIik7XG4gICAgc2tpbGxzSGVhZGVyMi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBza2lsbHNIZWFkZXJDb24uYXBwZW5kQ2hpbGQoc2tpbGxzSGVhZGVyMSk7XG4gICAgc2tpbGxzSGVhZGVyQ29uLmFwcGVuZENoaWxkKHNraWxsc0hlYWRlcjIpO1xuXG4gICAgY29uc3Qgc2tpbGxzVW5kZXJsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBza2lsbHNVbmRlcmxpbmUuY2xhc3NMaXN0LmFkZChcInNraWxsc1VuZGVybGluZVwiKTtcblxuICAgIGxldCBza2lsbHNWaWV3ZWQgPSBmYWxzZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgc2tpbGxzQ29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAvIGlubmVySGVpZ2h0IDwgMC42NSAmJlxuICAgICAgICBza2lsbHNWaWV3ZWQgPT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBza2lsbHNWaWV3ZWQgPSB0cnVlO1xuXG4gICAgICAgIHNraWxsc1VuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwic2tpbGxzVW5kZXJsaW5lLWFuaW1hdGlvblwiKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0eXBpbmdBbmltYXRpb24oc2tpbGxzSGVhZGVyMSwgXCJTa2lsbHNcIiwgNjApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdHlwaW5nQW5pbWF0aW9uKHNraWxsc0hlYWRlcjIsIFwiICYgVG9vbHNcIiwgNjApO1xuICAgICAgICAgIH0sIDM2MCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNraWxsc0ljb24xLmNsYXNzTGlzdC5hZGQoXCJza2lsbC1pY29uLWFuaW1hdGlvblwiKTtcbiAgICAgICAgICBza2lsbHNJY29uMi5jbGFzc0xpc3QuYWRkKFwic2tpbGwtaWNvbi1hbmltYXRpb25cIik7XG4gICAgICAgICAgc2tpbGxzSWNvbjMuY2xhc3NMaXN0LmFkZChcInNraWxsLWljb24tYW5pbWF0aW9uXCIpO1xuICAgICAgICAgIHNraWxsc0ljb240LmNsYXNzTGlzdC5hZGQoXCJza2lsbC1pY29uLWFuaW1hdGlvblwiKTtcbiAgICAgICAgICBza2lsbHNJY29uNS5jbGFzc0xpc3QuYWRkKFwic2tpbGwtaWNvbi1hbmltYXRpb25cIik7XG4gICAgICAgICAgc2tpbGxzSWNvbjYuY2xhc3NMaXN0LmFkZChcInNraWxsLWljb24tYW5pbWF0aW9uXCIpO1xuICAgICAgICAgIHNraWxsc0ljb243LmNsYXNzTGlzdC5hZGQoXCJza2lsbC1pY29uLWFuaW1hdGlvblwiKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBza2lsbHNJY29uQ29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBza2lsbHNJY29uQ29uLmNsYXNzTGlzdC5hZGQoXCJza2lsbC1pY29ucy1jb25cIiwgXCJmbGV4LXJvd1wiLCBcImNlbnRlclwiKTtcblxuICAgIGNvbnN0IHNraWxsc0ljb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBza2lsbHNJY29uMS5jbGFzc0xpc3QuYWRkKFwic2tpbGwtaWNvbi1jb25cIiwgXCJmbGV4LWNvbHVtblwiKTtcblxuICAgIGNvbnN0IGljb24xID0gbmV3IEltYWdlKCk7XG4gICAgaWNvbjEuc3JjID0gaHRtbDVTcmM7XG4gICAgaWNvbjEuY2xhc3NMaXN0LmFkZChcInNraWxsLWljb24taW1nXCIpO1xuXG4gICAgY29uc3Qgc2tpbGxJY29uVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBza2lsbEljb25UZXh0MS5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLXRleHRcIik7XG4gICAgc2tpbGxJY29uVGV4dDEudGV4dENvbnRlbnQgPSBcIkhUTUw1XCI7XG5cbiAgICBza2lsbHNJY29uMS5hcHBlbmRDaGlsZChpY29uMSk7XG4gICAgc2tpbGxzSWNvbjEuYXBwZW5kQ2hpbGQoc2tpbGxJY29uVGV4dDEpO1xuXG4gICAgY29uc3Qgc2tpbGxzSWNvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNraWxsc0ljb24yLmNsYXNzTGlzdC5hZGQoXCJza2lsbC1pY29uLWNvblwiLCBcImZsZXgtY29sdW1uXCIpO1xuXG4gICAgY29uc3QgaWNvbjIgPSBuZXcgSW1hZ2UoKTtcbiAgICBpY29uMi5zcmMgPSBjc3NTcmM7XG4gICAgaWNvbjIuY2xhc3NMaXN0LmFkZChcInNraWxsLWljb24taW1nXCIpO1xuXG4gICAgY29uc3Qgc2tpbGxJY29uVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBza2lsbEljb25UZXh0Mi5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLXRleHRcIik7XG4gICAgc2tpbGxJY29uVGV4dDIudGV4dENvbnRlbnQgPSBcIkNTU1wiO1xuXG4gICAgc2tpbGxzSWNvbjIuYXBwZW5kQ2hpbGQoaWNvbjIpO1xuICAgIHNraWxsc0ljb24yLmFwcGVuZENoaWxkKHNraWxsSWNvblRleHQyKTtcblxuICAgIGNvbnN0IHNraWxsc0ljb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBza2lsbHNJY29uMy5jbGFzc0xpc3QuYWRkKFwic2tpbGwtaWNvbi1jb25cIiwgXCJmbGV4LWNvbHVtblwiKTtcblxuICAgIGNvbnN0IGljb24zID0gbmV3IEltYWdlKCk7XG4gICAgaWNvbjMuc3JjID0gamF2YXNjcmlwdFNyYztcbiAgICBpY29uMy5jbGFzc0xpc3QuYWRkKFwic2tpbGwtaWNvbi1pbWdcIik7XG5cbiAgICBjb25zdCBza2lsbEljb25UZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNraWxsSWNvblRleHQzLmNsYXNzTGlzdC5hZGQoXCJub3JtYWwtdGV4dFwiKTtcbiAgICBza2lsbEljb25UZXh0My50ZXh0Q29udGVudCA9IFwiSlNcIjtcblxuICAgIHNraWxsc0ljb24zLmFwcGVuZENoaWxkKGljb24zKTtcbiAgICBza2lsbHNJY29uMy5hcHBlbmRDaGlsZChza2lsbEljb25UZXh0Myk7XG5cbiAgICBjb25zdCBza2lsbHNJY29uNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2tpbGxzSWNvbjQuY2xhc3NMaXN0LmFkZChcInNraWxsLWljb24tY29uXCIsIFwiZmxleC1jb2x1bW5cIik7XG5cbiAgICBjb25zdCBpY29uNCA9IG5ldyBJbWFnZSgpO1xuICAgIGljb240LnNyYyA9IGplc3RTcmM7XG4gICAgaWNvbjQuY2xhc3NMaXN0LmFkZChcInNraWxsLWljb24taW1nXCIpO1xuXG4gICAgY29uc3Qgc2tpbGxJY29uVGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBza2lsbEljb25UZXh0NC5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLXRleHRcIik7XG4gICAgc2tpbGxJY29uVGV4dDQudGV4dENvbnRlbnQgPSBcIkplc3RcIjtcblxuICAgIHNraWxsc0ljb240LmFwcGVuZENoaWxkKGljb240KTtcbiAgICBza2lsbHNJY29uNC5hcHBlbmRDaGlsZChza2lsbEljb25UZXh0NCk7XG5cbiAgICBjb25zdCBza2lsbHNJY29uNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2tpbGxzSWNvbjUuY2xhc3NMaXN0LmFkZChcInNraWxsLWljb24tY29uXCIsIFwiZmxleC1jb2x1bW5cIik7XG5cbiAgICBjb25zdCBpY29uNSA9IG5ldyBJbWFnZSgpO1xuICAgIGljb241LnNyYyA9IHdlYnBhY2tTcmM7XG4gICAgaWNvbjUuY2xhc3NMaXN0LmFkZChcInNraWxsLWljb24taW1nXCIpO1xuXG4gICAgY29uc3Qgc2tpbGxJY29uVGV4dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBza2lsbEljb25UZXh0NS5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLXRleHRcIik7XG4gICAgc2tpbGxJY29uVGV4dDUudGV4dENvbnRlbnQgPSBcIldlYnBhY2tcIjtcblxuICAgIHNraWxsc0ljb241LmFwcGVuZENoaWxkKGljb241KTtcbiAgICBza2lsbHNJY29uNS5hcHBlbmRDaGlsZChza2lsbEljb25UZXh0NSk7XG5cbiAgICBjb25zdCBza2lsbHNJY29uNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2tpbGxzSWNvbjYuY2xhc3NMaXN0LmFkZChcInNraWxsLWljb24tY29uXCIsIFwiZmxleC1jb2x1bW5cIik7XG5cbiAgICBjb25zdCBpY29uNiA9IG5ldyBJbWFnZSgpO1xuICAgIGljb242LnNyYyA9IGdpdFNyYztcbiAgICBpY29uNi5jbGFzc0xpc3QuYWRkKFwic2tpbGwtaWNvbi1pbWdcIik7XG5cbiAgICBjb25zdCBza2lsbEljb25UZXh0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNraWxsSWNvblRleHQ2LmNsYXNzTGlzdC5hZGQoXCJub3JtYWwtdGV4dFwiKTtcbiAgICBza2lsbEljb25UZXh0Ni50ZXh0Q29udGVudCA9IFwiR2l0XCI7XG5cbiAgICBza2lsbHNJY29uNi5hcHBlbmRDaGlsZChpY29uNik7XG4gICAgc2tpbGxzSWNvbjYuYXBwZW5kQ2hpbGQoc2tpbGxJY29uVGV4dDYpO1xuXG4gICAgY29uc3Qgc2tpbGxzSWNvbjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNraWxsc0ljb243LmNsYXNzTGlzdC5hZGQoXCJza2lsbC1pY29uLWNvblwiLCBcImZsZXgtY29sdW1uXCIpO1xuXG4gICAgY29uc3QgaWNvbjcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpY29uNy5zcmMgPSBjaGF0R3B0U3JjO1xuICAgIGljb243LmNsYXNzTGlzdC5hZGQoXCJza2lsbC1pY29uLWltZ1wiKTtcblxuICAgIGNvbnN0IHNraWxsSWNvblRleHQ3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc2tpbGxJY29uVGV4dDcuY2xhc3NMaXN0LmFkZChcIm5vcm1hbC10ZXh0XCIpO1xuICAgIHNraWxsSWNvblRleHQ3LnRleHRDb250ZW50ID0gXCJDaGF0R1BUXCI7XG5cbiAgICBza2lsbHNJY29uNy5hcHBlbmRDaGlsZChpY29uNyk7XG4gICAgc2tpbGxzSWNvbjcuYXBwZW5kQ2hpbGQoc2tpbGxJY29uVGV4dDcpO1xuXG4gICAgc2tpbGxzSWNvbkNvbi5hcHBlbmRDaGlsZChza2lsbHNJY29uMSk7XG4gICAgc2tpbGxzSWNvbkNvbi5hcHBlbmRDaGlsZChza2lsbHNJY29uMik7XG4gICAgc2tpbGxzSWNvbkNvbi5hcHBlbmRDaGlsZChza2lsbHNJY29uMyk7XG4gICAgc2tpbGxzSWNvbkNvbi5hcHBlbmRDaGlsZChza2lsbHNJY29uNCk7XG4gICAgc2tpbGxzSWNvbkNvbi5hcHBlbmRDaGlsZChza2lsbHNJY29uNSk7XG4gICAgc2tpbGxzSWNvbkNvbi5hcHBlbmRDaGlsZChza2lsbHNJY29uNik7XG4gICAgc2tpbGxzSWNvbkNvbi5hcHBlbmRDaGlsZChza2lsbHNJY29uNyk7XG5cbiAgICBza2lsbHNDb24uYXBwZW5kQ2hpbGQoc2tpbGxzSGVhZGVyQ29uKTtcbiAgICBza2lsbHNDb24uYXBwZW5kQ2hpbGQoc2tpbGxzVW5kZXJsaW5lKTtcbiAgICBza2lsbHNDb24uYXBwZW5kQ2hpbGQoc2tpbGxzSWNvbkNvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkNvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvQ29uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNraWxsc0Nvbik7XG5cbiAgICByZXNvbHZlKGNvbnRlbnQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XG4iLCJpbXBvcnQgeyB0eXBpbmdBbmltYXRpb24gfSBmcm9tIFwiLi4vdG9vbHNcIjtcblxuLy9JbWdcbmltcG9ydCBSVlNyYyBmcm9tIFwiLi4vSW1nL3Jpc3Nrb3Z2aW5kdWVzcHVkc25pbmcucG5nXCI7XG5pbXBvcnQgYmF0dGxlc2hpcFNyYyBmcm9tIFwiLi4vSW1nL2JhdHRsZXNoaXBzLnBuZ1wiO1xuaW1wb3J0IHdlYXRoZXJBcHBTcmMgZnJvbSBcIi4uL0ltZy93ZWF0aGVyQXBwLnBuZ1wiO1xuaW1wb3J0IGtuaWdodE1vdmVzQ2FsU3JjIGZyb20gXCIuLi9JbWcva25pZ2h0TW92ZXNDYWwucG5nXCI7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RzID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1jb25cIiwgXCJmbGV4LWNvbHVtblwiLCBcImFsLWNlblwiKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHNcIik7XG5cbiAgICBjb25zdCBpbm5lckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlubmVyQ29udGVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtaW5uZXJDb25cIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5zdHlsZS5oZWlnaHQgPSBcIjU4LjRweFwiO1xuXG4gICAgY29uc3QgaGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhlYWRlcjEuY2xhc3NMaXN0LmFkZChcImhlYWRpbmctdGV4dFwiKTtcbiAgICBoZWFkZXIxLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGNvbnN0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBoZWFkZXIyLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nLXRleHRcIiwgXCJzZWNvbmRhcnktY29sb3JcIik7XG4gICAgaGVhZGVyMi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcjIpO1xuXG4gICAgY29uc3QgcHJvamVjdHNVbmRlcmxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzVW5kZXJsaW5lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1VuZGVybGluZVwiKTtcblxuICAgIGxldCBzY3JvbGxlZCA9IGZhbHNlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBzY3JvbGxlZCA9PSBmYWxzZSAmJlxuICAgICAgICBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAvIGlubmVySGVpZ2h0IDwgMC4zNVxuICAgICAgKSB7XG4gICAgICAgIHNjcm9sbGVkID0gdHJ1ZTtcblxuICAgICAgICBwcm9qZWN0c1VuZGVybGluZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNVbmRlcmxpbmUtYW5pbWF0aW9uXCIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHR5cGluZ0FuaW1hdGlvbihoZWFkZXIxLCBcIlRoaW5ncyBJIGhhdmVcIiwgNjApO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdHlwaW5nQW5pbWF0aW9uKGhlYWRlcjIsIFwiIGJ1aWx0XCIsIDYwKTtcbiAgICAgICAgICB9LCA3ODApO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlubmVyQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGlubmVyQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c1VuZGVybGluZSk7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvbjEuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29uXCIsIFwiZmxleC1yb3dcIiwgXCJhbC1jZW5cIik7XG5cbiAgICBjb25zdCBwcm9qZWN0SW1nID0gbmV3IEltYWdlKCk7XG4gICAgcHJvamVjdEltZy5zcmMgPSBSVlNyYztcbiAgICBwcm9qZWN0SW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWltZy1yaWdodFwiKTtcbiAgICBwcm9qZWN0SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vcmlzc2tvdnZpbmR1ZXNwdWRzbmluZy5jb20vXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdFRleHRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RUZXh0Q29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHQtY29uXCIsIFwiZmxleC1jb2x1bW5cIik7XG5cbiAgICBjb25zdCBwcm9qZWN0VGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3RUZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHQtaGVhZGVyXCIpO1xuICAgIHByb2plY3RUZXh0SGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhbCB3aW5kb3cgd2FzaGluZyBzaXRlXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJub3JtYWwtdGV4dFwiKTtcbiAgICBwcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9XG4gICAgICBcIlNpdGUgZm9yIGEgbG9jYWwgd2luZG93IHdhc2hpbmcgc3RhcnR1cC4gT3B0aW16ZWQgVVggd2l0aCByZXNwb25zaXZlIGRlc2lnbi5cIjtcblxuICAgIGNvbnN0IHByb2plY3RUZWtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdFRla1RleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGVrLXRleHRcIik7XG4gICAgcHJvamVjdFRla1RleHQudGV4dENvbnRlbnQgPSBcIkpTIC0gQ1NTIC0gSFRNTCAtIFdlYnBhY2tcIjtcblxuICAgIGNvbnN0IHByb2plY3RCdG5Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RCdG5Db24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuLWNvbi1yaWdodFwiLCBcImZsZXgtcm93XCIpO1xuXG4gICAgY29uc3QgcHJvamVjdEJ0bk92ZXJmbG93Q29uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEJ0bk92ZXJmbG93Q29uMS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG4tb3ZlcmZsb3ctY29uXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdEJ0bkNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3RCdG5Db2RlLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcInByb2plY3QtYnRuXCIsXG4gICAgICBcInByb2plY3QtYnRuLWNvZGVcIixcbiAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgIFwiY2VudGVyXCJcbiAgICApO1xuICAgIHByb2plY3RCdG5Db2RlLnRleHRDb250ZW50ID0gXCI8Q29kZS8+XCI7XG5cbiAgICBwcm9qZWN0QnRuT3ZlcmZsb3dDb24xLmFwcGVuZENoaWxkKHByb2plY3RCdG5Db2RlKTtcblxuICAgIHByb2plY3RCdG5PdmVyZmxvd0NvbjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbmRyZWFzMDQwMjA2L1Jpc3Nrb3YtVmluZHVlc3JlbnNcIixcbiAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3RCdG5PdmVyZmxvd0NvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RCdG5PdmVyZmxvd0NvbjIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuLW92ZXJmbG93LWNvblwiKTtcblxuICAgIGNvbnN0IHByb2plY3RCdG5MaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0QnRuTGl2ZS5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJwcm9qZWN0LWJ0blwiLFxuICAgICAgXCJwcm9qZWN0LWJ0bi1saXZlXCIsXG4gICAgICBcImZsZXgtcm93XCIsXG4gICAgICBcImNlbnRlclwiXG4gICAgKTtcbiAgICBwcm9qZWN0QnRuTGl2ZS50ZXh0Q29udGVudCA9IFwiPExpdmUvPlwiO1xuXG4gICAgcHJvamVjdEJ0bk92ZXJmbG93Q29uMi5hcHBlbmRDaGlsZChwcm9qZWN0QnRuTGl2ZSk7XG5cbiAgICBwcm9qZWN0QnRuT3ZlcmZsb3dDb24yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vcmlzc2tvdnZpbmR1ZXNwdWRzbmluZy5jb20vXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdEJ0bkNvbi5hcHBlbmRDaGlsZChwcm9qZWN0QnRuT3ZlcmZsb3dDb24xKTtcbiAgICBwcm9qZWN0QnRuQ29uLmFwcGVuZENoaWxkKHByb2plY3RCdG5PdmVyZmxvd0NvbjIpO1xuXG4gICAgcHJvamVjdFRleHRDb24uYXBwZW5kQ2hpbGQocHJvamVjdFRleHRIZWFkZXIpO1xuICAgIHByb2plY3RUZXh0Q29uLmFwcGVuZENoaWxkKHByb2plY3RUZXh0KTtcbiAgICBwcm9qZWN0VGV4dENvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGVrVGV4dCk7XG4gICAgcHJvamVjdFRleHRDb24uYXBwZW5kQ2hpbGQocHJvamVjdEJ0bkNvbik7XG5cbiAgICBwcm9qZWN0Q29uMS5hcHBlbmRDaGlsZChwcm9qZWN0SW1nKTtcblxuICAgIHByb2plY3RDb24xLmFwcGVuZENoaWxkKHByb2plY3RUZXh0Q29uKTtcblxuICAgIGNvbnN0IHByb2plY3RDb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0Q29uMi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb25cIiwgXCJmbGV4LXJvd1wiLCBcImFsLWNlblwiKTtcblxuICAgIGNvbnN0IHByb2plY3QySW1nID0gbmV3IEltYWdlKCk7XG4gICAgcHJvamVjdDJJbWcuc3JjID0gYmF0dGxlc2hpcFNyYztcbiAgICBwcm9qZWN0MkltZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbWctbGVmdFwiKTtcbiAgICBwcm9qZWN0MkltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2FuZHJlYXMwNDAyMDYuZ2l0aHViLmlvL0JhdHRsZXNoaXBzL1wiLCBcIl9ibGFua1wiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3QyVGV4dENvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdDJUZXh0Q29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHQtY29uXCIsIFwiZmxleC1jb2x1bW5cIiwgXCJyaWdodFwiKTtcblxuICAgIGNvbnN0IHByb2plY3QyVGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3QyVGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10ZXh0LWhlYWRlclwiKTtcbiAgICBwcm9qZWN0MlRleHRIZWFkZXIudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBzXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0MlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0MlRleHQuY2xhc3NMaXN0LmFkZChcIm5vcm1hbC10ZXh0XCIpO1xuICAgIHByb2plY3QyVGV4dC50ZXh0Q29udGVudCA9XG4gICAgICBcIlNpdGUgZm9yIHBsYXlpbmcgYmF0dGxlc2hpcHMgd2l0aCB5b3VyIGZyaWVuZHMuIEJ1aWxkIHdpdGggamVzdCB0ZXN0aW5nIHRvb2xzLiBTbWFydCBBSSB0aGF0IGNhbGN1bGF0ZXMgbW92ZXMuXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0MlRla1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0MlRla1RleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGVrLXRleHRcIik7XG4gICAgcHJvamVjdDJUZWtUZXh0LnRleHRDb250ZW50ID0gXCJKUyAtIENTUyAtIEhUTUwgLSBXZWJwYWNrIC0gSmVzdFwiO1xuXG4gICAgY29uc3QgcHJvamVjdDJCdG5Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QyQnRuQ29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ0bi1jb24tcmlnaHRcIiwgXCJmbGV4LXJvd1wiKTtcblxuICAgIGNvbnN0IHByb2plY3QyQnRuT3ZlcmZsb3dDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QyQnRuT3ZlcmZsb3dDb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuLW92ZXJmbG93LWNvblwiKTtcblxuICAgIGNvbnN0IHByb2plY3QyQnRuQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdDJCdG5Db2RlLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcInByb2plY3QtYnRuXCIsXG4gICAgICBcInByb2plY3QtYnRuLWNvZGVcIixcbiAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgIFwiY2VudGVyXCJcbiAgICApO1xuICAgIHByb2plY3QyQnRuQ29kZS50ZXh0Q29udGVudCA9IFwiPENvZGUvPlwiO1xuXG4gICAgcHJvamVjdDJCdG5PdmVyZmxvd0Nvbi5hcHBlbmRDaGlsZChwcm9qZWN0MkJ0bkNvZGUpO1xuXG4gICAgcHJvamVjdDJCdG5PdmVyZmxvd0Nvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vQW5kcmVhczA0MDIwNi9CYXR0bGVzaGlwc1wiLCBcIl9ibGFua1wiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3QyQnRuT3ZlcmZsb3dDb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0MkJ0bk92ZXJmbG93Q29uMi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG4tb3ZlcmZsb3ctY29uXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdDJCdG5MaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0MkJ0bkxpdmUuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwicHJvamVjdC1idG5cIixcbiAgICAgIFwicHJvamVjdC1idG4tbGl2ZVwiLFxuICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgXCJjZW50ZXJcIlxuICAgICk7XG4gICAgcHJvamVjdDJCdG5MaXZlLnRleHRDb250ZW50ID0gXCI8TGl2ZS8+XCI7XG5cbiAgICBwcm9qZWN0MkJ0bk92ZXJmbG93Q29uMi5hcHBlbmRDaGlsZChwcm9qZWN0MkJ0bkxpdmUpO1xuXG4gICAgcHJvamVjdDJCdG5PdmVyZmxvd0NvbjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9hbmRyZWFzMDQwMjA2LmdpdGh1Yi5pby9CYXR0bGVzaGlwcy9cIiwgXCJfYmxhbmtcIik7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0MkJ0bkNvbi5hcHBlbmRDaGlsZChwcm9qZWN0MkJ0bk92ZXJmbG93Q29uKTtcbiAgICBwcm9qZWN0MkJ0bkNvbi5hcHBlbmRDaGlsZChwcm9qZWN0MkJ0bk92ZXJmbG93Q29uMik7XG5cbiAgICBwcm9qZWN0MlRleHRDb24uYXBwZW5kQ2hpbGQocHJvamVjdDJUZXh0SGVhZGVyKTtcbiAgICBwcm9qZWN0MlRleHRDb24uYXBwZW5kQ2hpbGQocHJvamVjdDJUZXh0KTtcbiAgICBwcm9qZWN0MlRleHRDb24uYXBwZW5kQ2hpbGQocHJvamVjdDJUZWtUZXh0KTtcbiAgICBwcm9qZWN0MlRleHRDb24uYXBwZW5kQ2hpbGQocHJvamVjdDJCdG5Db24pO1xuXG4gICAgcHJvamVjdENvbjIuYXBwZW5kQ2hpbGQocHJvamVjdDJJbWcpO1xuICAgIHByb2plY3RDb24yLmFwcGVuZENoaWxkKHByb2plY3QyVGV4dENvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0Q29uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdENvbjMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29uXCIsIFwiZmxleC1yb3dcIiwgXCJhbC1jZW5cIik7XG5cbiAgICBjb25zdCBwcm9qZWN0M0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHByb2plY3QzSW1nLnNyYyA9IHdlYXRoZXJBcHBTcmM7XG4gICAgcHJvamVjdDNJbWcuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW1nLXJpZ2h0XCIpO1xuICAgIHByb2plY3QzSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vYW5kcmVhczA0MDIwNi5naXRodWIuaW8vV2VhdGhlckFwcC9cIiwgXCJfYmxhbmtcIik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0M1RleHRDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QzVGV4dENvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10ZXh0LWNvblwiLCBcImZsZXgtY29sdW1uXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdDNUZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdDNUZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHQtaGVhZGVyXCIpO1xuICAgIHByb2plY3QzVGV4dEhlYWRlci50ZXh0Q29udGVudCA9IFwiV2VhdGhlciBBcHBcIjtcblxuICAgIGNvbnN0IHByb2plY3QzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3QzVGV4dC5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLXRleHRcIik7XG4gICAgcHJvamVjdDNUZXh0LnRleHRDb250ZW50ID1cbiAgICAgIFwiQSBXZWF0aGVyIGFwcCBmZXRjaGluZyBkYXRhIGZyb20gd2VhdGhlcmFwaS5jb20ncyBmcmVlIEFQSVwiO1xuXG4gICAgY29uc3QgcHJvamVjdDNUZWtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdDNUZWtUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRlay10ZXh0XCIpO1xuICAgIHByb2plY3QzVGVrVGV4dC50ZXh0Q29udGVudCA9IFwiSlMgLSBDU1MgLSBIVE1MIC0gV2VicGFja1wiO1xuXG4gICAgY29uc3QgcHJvamVjdDNCdG5Db24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QzQnRuQ29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ0bi1jb24tcmlnaHRcIiwgXCJmbGV4LXJvd1wiKTtcblxuICAgIGNvbnN0IHByb2plY3QzQnRuT3ZlcmZsb3dDb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QzQnRuT3ZlcmZsb3dDb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuLW92ZXJmbG93LWNvblwiKTtcblxuICAgIGNvbnN0IHByb2plY3QzQnRuQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdDNCdG5Db2RlLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcInByb2plY3QtYnRuXCIsXG4gICAgICBcInByb2plY3QtYnRuLWNvZGVcIixcbiAgICAgIFwiZmxleC1yb3dcIixcbiAgICAgIFwiY2VudGVyXCJcbiAgICApO1xuICAgIHByb2plY3QzQnRuQ29kZS50ZXh0Q29udGVudCA9IFwiPENvZGUvPlwiO1xuXG4gICAgcHJvamVjdDNCdG5PdmVyZmxvd0Nvbi5hcHBlbmRDaGlsZChwcm9qZWN0M0J0bkNvZGUpO1xuXG4gICAgcHJvamVjdDNCdG5PdmVyZmxvd0Nvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2dpdGh1Yi5jb20vQW5kcmVhczA0MDIwNi9XZWF0aGVyQXBwL1wiLCBcIl9ibGFua1wiKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb2plY3QzQnRuT3ZlcmZsb3dDb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0M0J0bk92ZXJmbG93Q29uMy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG4tb3ZlcmZsb3ctY29uXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdDNCdG5MaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0M0J0bkxpdmUuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwicHJvamVjdC1idG5cIixcbiAgICAgIFwicHJvamVjdC1idG4tbGl2ZVwiLFxuICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgXCJjZW50ZXJcIlxuICAgICk7XG4gICAgcHJvamVjdDNCdG5MaXZlLnRleHRDb250ZW50ID0gXCI8TGl2ZS8+XCI7XG5cbiAgICBwcm9qZWN0M0J0bk92ZXJmbG93Q29uMy5hcHBlbmRDaGlsZChwcm9qZWN0M0J0bkxpdmUpO1xuXG4gICAgcHJvamVjdDNCdG5PdmVyZmxvd0NvbjMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9hbmRyZWFzMDQwMjA2LmdpdGh1Yi5pby9XZWF0aGVyQXBwL1wiLCBcIl9ibGFua1wiKTtcbiAgICB9KTtcblxuICAgIHByb2plY3QzQnRuQ29uLmFwcGVuZENoaWxkKHByb2plY3QzQnRuT3ZlcmZsb3dDb24pO1xuICAgIHByb2plY3QzQnRuQ29uLmFwcGVuZENoaWxkKHByb2plY3QzQnRuT3ZlcmZsb3dDb24zKTtcblxuICAgIHByb2plY3QzVGV4dENvbi5hcHBlbmRDaGlsZChwcm9qZWN0M1RleHRIZWFkZXIpO1xuICAgIHByb2plY3QzVGV4dENvbi5hcHBlbmRDaGlsZChwcm9qZWN0M1RleHQpO1xuICAgIHByb2plY3QzVGV4dENvbi5hcHBlbmRDaGlsZChwcm9qZWN0M1Rla1RleHQpO1xuICAgIHByb2plY3QzVGV4dENvbi5hcHBlbmRDaGlsZChwcm9qZWN0M0J0bkNvbik7XG5cbiAgICBwcm9qZWN0Q29uMy5hcHBlbmRDaGlsZChwcm9qZWN0M0ltZyk7XG4gICAgcHJvamVjdENvbjMuYXBwZW5kQ2hpbGQocHJvamVjdDNUZXh0Q29uKTtcblxuICAgIGNvbnN0IHByb2plY3RDb240ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0Q29uNC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb25cIiwgXCJmbGV4LXJvd1wiLCBcImFsLWNlblwiKTtcblxuICAgIGNvbnN0IHByb2plY3Q0SW1nID0gbmV3IEltYWdlKCk7XG4gICAgcHJvamVjdDRJbWcuc3JjID0ga25pZ2h0TW92ZXNDYWxTcmM7XG4gICAgcHJvamVjdDRJbWcuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW1nLWxlZnRcIik7XG4gICAgcHJvamVjdDRJbWcuc3R5bGUuYm9yZGVyID0gXCJzb2xpZCBibGFjayAxcHhcIjtcbiAgICBwcm9qZWN0NEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2FuZHJlYXMwNDAyMDYuZ2l0aHViLmlvL0NoZXNzZ2FtZXMvXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdDRUZXh0Q29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0NFRleHRDb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGV4dC1jb25cIiwgXCJmbGV4LWNvbHVtblwiLCBcInJpZ2h0XCIpO1xuXG4gICAgY29uc3QgcHJvamVjdDRUZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdDRUZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHQtaGVhZGVyXCIpO1xuICAgIHByb2plY3Q0VGV4dEhlYWRlci50ZXh0Q29udGVudCA9IFwiS25pZ2h0IE1vdmVzIENhbGN1bGF0b3JcIjtcblxuICAgIGNvbnN0IHByb2plY3Q0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3Q0VGV4dC5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLXRleHRcIik7XG4gICAgcHJvamVjdDRUZXh0LnRleHRDb250ZW50ID1cbiAgICAgIFwiUmVjdXJzaXZlIGFsZ29yaXRobSB3aXRoIGEgdGltZWNvbXBsZXhpdHkgb2YgTyhuwrIpIHRoYXQgY2FsY3VsYXRlcyB0aGUgc2hvcnRlc3Qga25pZ2h0IG1vdmVzIHBvc2libGUuXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0NFRla1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBwcm9qZWN0NFRla1RleHQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGVrLXRleHRcIik7XG4gICAgcHJvamVjdDRUZWtUZXh0LnRleHRDb250ZW50ID0gXCJKUyAtIENTUyAtIEhUTUwgLSBXZWJwYWNrXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0NEJ0bkNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdDRCdG5Db24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuLWNvbi1yaWdodFwiLCBcImZsZXgtcm93XCIpO1xuXG4gICAgY29uc3QgcHJvamVjdDRCdG5PdmVyZmxvd0NvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdDRCdG5PdmVyZmxvd0Nvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG4tb3ZlcmZsb3ctY29uXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdDRCdG5Db2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcm9qZWN0NEJ0bkNvZGUuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwicHJvamVjdC1idG5cIixcbiAgICAgIFwicHJvamVjdC1idG4tY29kZVwiLFxuICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgXCJjZW50ZXJcIlxuICAgICk7XG4gICAgcHJvamVjdDRCdG5Db2RlLnRleHRDb250ZW50ID0gXCI8Q29kZS8+XCI7XG5cbiAgICBwcm9qZWN0NEJ0bk92ZXJmbG93Q29uLmFwcGVuZENoaWxkKHByb2plY3Q0QnRuQ29kZSk7XG5cbiAgICBwcm9qZWN0NEJ0bk92ZXJmbG93Q29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZ2l0aHViLmNvbS9BbmRyZWFzMDQwMjA2L0NoZXNzZ2FtZXMvXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvamVjdDRCdG5PdmVyZmxvd0NvbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3Q0QnRuT3ZlcmZsb3dDb240LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ0bi1vdmVyZmxvdy1jb25cIik7XG5cbiAgICBjb25zdCBwcm9qZWN0NEJ0bkxpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3Q0QnRuTGl2ZS5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJwcm9qZWN0LWJ0blwiLFxuICAgICAgXCJwcm9qZWN0LWJ0bi1saXZlXCIsXG4gICAgICBcImZsZXgtcm93XCIsXG4gICAgICBcImNlbnRlclwiXG4gICAgKTtcbiAgICBwcm9qZWN0NEJ0bkxpdmUudGV4dENvbnRlbnQgPSBcIjxMaXZlLz5cIjtcblxuICAgIHByb2plY3Q0QnRuT3ZlcmZsb3dDb240LmFwcGVuZENoaWxkKHByb2plY3Q0QnRuTGl2ZSk7XG5cbiAgICBwcm9qZWN0NEJ0bk92ZXJmbG93Q29uNC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL2FuZHJlYXMwNDAyMDYuZ2l0aHViLmlvL0NoZXNzZ2FtZXMvXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdDRCdG5Db24uYXBwZW5kQ2hpbGQocHJvamVjdDRCdG5PdmVyZmxvd0Nvbik7XG4gICAgcHJvamVjdDRCdG5Db24uYXBwZW5kQ2hpbGQocHJvamVjdDRCdG5PdmVyZmxvd0NvbjQpO1xuXG4gICAgcHJvamVjdDRUZXh0Q29uLmFwcGVuZENoaWxkKHByb2plY3Q0VGV4dEhlYWRlcik7XG4gICAgcHJvamVjdDRUZXh0Q29uLmFwcGVuZENoaWxkKHByb2plY3Q0VGV4dCk7XG4gICAgcHJvamVjdDRUZXh0Q29uLmFwcGVuZENoaWxkKHByb2plY3Q0VGVrVGV4dCk7XG4gICAgcHJvamVjdDRUZXh0Q29uLmFwcGVuZENoaWxkKHByb2plY3Q0QnRuQ29uKTtcblxuICAgIHByb2plY3RDb240LmFwcGVuZENoaWxkKHByb2plY3Q0SW1nKTtcbiAgICBwcm9qZWN0Q29uNC5hcHBlbmRDaGlsZChwcm9qZWN0NFRleHRDb24pO1xuXG4gICAgY29uc3QgbW9yZVByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtb3JlUHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RzLW1vcmUtYnRuXCIsIFwibm9ybWFsLXRleHRcIik7XG4gICAgbW9yZVByb2plY3RzQnRuLnRleHRDb250ZW50ID0gXCJNb3JlIHByb2plY3RzXCI7XG5cbiAgICBtb3JlUHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlYXMwNDAyMDYvXCIsIFwiX2JsYW5rXCIpO1xuICAgIH0pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbm5lckNvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbjEpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbjIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbjMpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENvbjQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9yZVByb2plY3RzQnRuKTtcblxuICAgIHJlc29sdmUoY29udGVudCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdHM7XG4iLCJjb25zdCB0eXBpbmdBbmltYXRpb24gPSAodGV4dEVsLCB0ZXh0VG9UeXBlLCB0eXBpbmdTcGVlZCkgPT4ge1xuICBsZXQgaW5kZXggPSAwO1xuXG4gIGNvbnN0IHR5cGVDaGFyYWN0ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGluZGV4IDwgdGV4dFRvVHlwZS5sZW5ndGgpIHtcbiAgICAgIHRleHRFbC50ZXh0Q29udGVudCArPSB0ZXh0VG9UeXBlLmNoYXJBdChpbmRleCk7XG4gICAgICBpbmRleCsrO1xuICAgICAgc2V0VGltZW91dCh0eXBlQ2hhcmFjdGVyLCB0eXBpbmdTcGVlZCk7XG4gICAgfVxuICB9O1xuICB0eXBlQ2hhcmFjdGVyKCk7XG59O1xuXG5jb25zdCBkZWxldGVUeXBlZFRleHQgPSAodGV4dEVsLCB0ZXh0VG9EZWxldGUsIGRlbGV0ZVNwZWVkKSA9PiB7XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgY29uc3QgZGVsZXRlQ2hhcmFjdGVyID0gKCkgPT4ge1xuICAgIGlmIChpbmRleCA8IHRleHRUb0RlbGV0ZS5sZW5ndGgpIHtcbiAgICAgIHRleHRFbC50ZXh0Q29udGVudCA9IHRleHRFbC50ZXh0Q29udGVudC5zbGljZSgwLCAtMSk7XG4gICAgICBpbmRleCsrO1xuICAgICAgc2V0VGltZW91dChkZWxldGVDaGFyYWN0ZXIsIGRlbGV0ZVNwZWVkKTtcbiAgICB9XG4gIH07XG4gIGRlbGV0ZUNoYXJhY3RlcigpO1xufTtcblxuZXhwb3J0IHsgdHlwaW5nQW5pbWF0aW9uLCBkZWxldGVUeXBlZFRleHQgfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zdDp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iZy1jb2xvcjogd2hpdGU7XFxuICAtLWJnLXNlY29uZGFyeS1jb2xvcjogI2VmZWZlZmZmO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiBibGFjaztcXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjNDI2NzZiZmY7XFxuICAtLXRoaXJkLWNvbG9yOiAjODU4NTg1ZmY7XFxufVxcblxcbi8qIFVuaXZlcnNhbCBzdHlsZXMgKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKb3N0XFxcIjtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uYWwtY2VuIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdS1jZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZmxleC1jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5yaWdodCB7XFxuICByaWdodDogMHB4O1xcbn1cXG5cXG4vKiBUZXh0ICovXFxuLnRleHQtc2l6ZTYge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogbWluKDYwcHgsIDl2dyk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5oZWFkaW5nLXRleHQge1xcbiAgZm9udC1zaXplOiBtaW4oNDBweCwgMTF2dyk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBoZWlnaHQ6IDU4LjRweDtcXG59XFxuXFxuLm5vcm1hbC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNlY29uZGFyeS1jb2xvciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxuLyogZGlzcGxheSBzdHlsZXMgKi9cXG5cXG4uZGlzcGxheS1jb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50eXBpbmctY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiBtaW4oNXB4LCAwLjR2dyk7XFxuXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGhlaWdodDogOTBweDtcXG5cXG4gIHdpZHRoOiBtaW4oOTUwcHgsIDgwdncpO1xcblxcbiAgYW5pbWF0aW9uLW5hbWU6IG5vbmU7XFxuICBhbmltYXRpb24tZGVsYXk6IDQuNXM7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbn1cXG5cXG4udHlwZWxpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBoZWlnaHQ6IG1pbig1NXB4LCA5dncpO1xcbiAgd2lkdGg6IG1pbigzcHgsIDAuNHZ3KTtcXG4gIG1hcmdpbi10b3A6IG1pbigxNHB4LCAydncpO1xcbiAgYW5pbWF0aW9uOiBmb3J3YXJkcztcXG4gIGFuaW1hdGlvbi1uYW1lOiB0eXBlbGluZUJsaW5rLCBjV2hpdGUsIHR5cGVsaW5lQmxpbmssIGNXaGl0ZSwgdHlwZWxpbmVCbGluayxcXG4gICAgY1doaXRlLCB0eXBlbGluZUJsaW5rO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzLCAxLjE1cywgMS41cywgMS4xNXMsIDEuNXMsIDNzLCAxLjVzO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcywgM3MsIDQuMTVzLCA1LjY1cywgNi41cywgOHMsIDExcywgMTIuNXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyLCAxLCAxLCAxLCAxLCAxLCAxO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEzOHB4KSB7XFxuICAudHlwZWxpbmUge1xcbiAgICBhbmltYXRpb24tbmFtZTogdHlwZWxpbmVCbGluaywgY1doaXRlLCB0eXBlbGluZUJsaW5rLCBjV2hpdGUsIHR5cGVsaW5lQmxpbms7XFxuICB9XFxufVxcblxcbi5tb3ZpbmctY29kZS1zaWRld2F5cyB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbWluKDI1cHgsIDV2dyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbmltYXRpb246IG1vdmVMZWZ0VGV4dCAxMnMgbGluZWFyIGZvcndhcmRzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLm1vdmluZy1jb2RlLXVwd2FyZCB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbWluKDI1cHgsIDV2dyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbmltYXRpb246IG1vdmVVcFRleHQgMTJzIGxpbmVhciBmb3J3YXJkcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5tb3ZpbmctY29kZS1zaWRld2F5czpudGgtY2hpbGQoMikge1xcbiAgdG9wOiAxMHZoO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMnM7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5tb3ZpbmctY29kZS11cHdhcmQ6bnRoLWNoaWxkKDMpIHtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKG1pbig5NTBweCwgODB2dykgLSAyMHZ3KTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTNzO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcXG4gIC5tb3ZpbmctY29kZS11cHdhcmQ6bnRoLWNoaWxkKDMpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkwdnc7XFxuICB9XFxufVxcblxcbi5tb3ZpbmctY29kZS1zaWRld2F5czpudGgtY2hpbGQoNCkge1xcbiAgYm90dG9tOiAxMHZoO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChtYXgoMTAwdncsIDEwMCUpKTtcXG59XFxuXFxuLm1vdmluZy1jb2RlLXVwd2FyZDpudGgtY2hpbGQoNSkge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMS4zcztcXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XFxuICBvcGFjaXR5OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKG1pbig5NTBweCwgODB2dykgKyAxMHZ3KTtcXG59XFxuXFxuQGtleWZyYW1lcyB0eXBlbGluZUJsaW5rIHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIDUxJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBjV2hpdGUge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlTGVmdFRleHQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgobWF4KDEwMHZ3LCAxMDAlKSk7IC8qIFN0YXJ0IG9mZi1zY3JlZW4gb24gdGhlIHJpZ2h0ICovXFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKG1pbigtMTAwdncsIC0xMDAlKSk7IC8qIEVuZCBvZmYtc2NyZWVuIG9uIHRoZSBsZWZ0ICovXFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZVVwVGV4dCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLyogSG9tZSAqL1xcblxcbi5ob21lLWNvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXYtY29uIHtcXG4gIGhlaWdodDogODBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeS1jb2xvcik7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNHZ3KTtcXG4gIHRvcDogMHB4O1xcbiAgcGFkZGluZzogMHB4IDJ2dztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyMDtcXG59XFxuXFxuLm5hdi1jb24uZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4ubmF2LWxvZ28ge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDJ2dztcXG59XFxuXFxuLm5hdi1sb2dvOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMnB4KTtcXG59XFxuXFxuLm5hdi1idG4tY29uIHtcXG4gIGdhcDogNDBweDtcXG4gIG1hcmdpbi1yaWdodDogMi41dnc7XFxufVxcblxcbi5uYXYtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4udGhlbWVDaGFuZ2VCdG4ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIGJvcmRlcjogdmFyKC0tdGhpcmQtY29sb3IpIHNvbGlkIDJweDtcXG59XFxuXFxuLnRoZW1lQ2hhbmdlQnRuOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblxcbi50aGVtZUljb25EYXJrIHtcXG4gIGhlaWdodDogMjNweDtcXG59XFxuXFxuLnRoZW1lSWNvbkxpZ2h0IHtcXG4gIGhlaWdodDogMzVweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XFxufVxcblxcbi5ob3ZlcnNoYXBlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMTMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNpdGlvbjogY3ViaWMtYmV6aWVyKDAuMDYsIDAuMjYsIDAuNDUsIDEuMTkpIDAuM3M7XFxufVxcblxcbi5ob21lSW5mby1jb24ge1xcbiAgZ2FwOiAxMDBweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmctdG9wOiAzMHZoO1xcbiAgcGFkZGluZy1ib3R0b206IDIwdmg7XFxufVxcblxcbi5hYm91dG1lLXRleHQtY29uIHtcXG4gIGdhcDogMTVweDtcXG4gIHdpZHRoOiBtaW4oNTAwcHgsIDkwdncpO1xcbn1cXG5cXG4uYWJvdXRtZS11bmRlcmxpbmUge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDcwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uYWJvdXRtZS1wb3J0cmFpdCB7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbi5wb3J0YWl0LWFuaW1hdGlvbiB7XFxuICBhbmltYXRpb246IGltZ1NsaWRlIDFzIGZvcndhcmRzIGVhc2Utb3V0O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGltZ1NsaWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwcHgpO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDdweCA3cHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5hYm91dG1lLXNraWxscy1jb24ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uc2tpbGxzVW5kZXJsaW5lIHtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5za2lsbHNVbmRlcmxpbmUtYW5pbWF0aW9uIHtcXG4gIGFuaW1hdGlvbjogc2tpbGxzVW5kZXJsaW5lRXhwYW5kIDFzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNraWxsc1VuZGVybGluZUV4cGFuZCB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgd2lkdGg6IG1pbig5MHZ3LCA5MDBweCk7XFxuICB9XFxufVxcblxcbi5za2lsbC1pY29ucy1jb24ge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogbWluKDkwdncsIDkwMHB4KTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5za2lsbC1pY29uLWNvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNraWxsLWljb24tYW5pbWF0aW9uIHtcXG4gIGFuaW1hdGlvbjogc2xpZGVJbkxlZnQgMXMgZm9yd2FyZHM7XFxufVxcblxcbi5za2lsbC1pY29uLWNvbjpudGgtY2hpbGQoMSkge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG59XFxuXFxuLnNraWxsLWljb24tY29uOm50aC1jaGlsZCgyKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XFxufVxcbi5za2lsbC1pY29uLWNvbjpudGgtY2hpbGQoMykge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbn1cXG4uc2tpbGwtaWNvbi1jb246bnRoLWNoaWxkKDQpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG59XFxuLnNraWxsLWljb24tY29uOm50aC1jaGlsZCg1KSB7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XFxufVxcbi5za2lsbC1pY29uLWNvbjpudGgtY2hpbGQoNikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4uc2tpbGwtaWNvbi1jb246bnRoLWNoaWxkKDcpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gIH1cXG59XFxuXFxuLnNraWxsLWljb24taW1nIHtcXG4gIGhlaWdodDogODBweDtcXG59XFxuXFxuLyogUHJvamVjdHMgKi9cXG5cXG4ucHJvamVjdHMtY29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIHBhZGRpbmctdG9wOiAzMHZoO1xcbiAgZ2FwOiBtYXgoMTB2aCwgMTAwcHgpO1xcbn1cXG5cXG4ucHJvamVjdHMtaW5uZXJDb24ge1xcbiAgd2lkdGg6IG1pbig5MHZ3LCA5MDBweCk7XFxufVxcblxcbi5wcm9qZWN0c1VuZGVybGluZSB7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdHNVbmRlcmxpbmUtYW5pbWF0aW9uIHtcXG4gIGFuaW1hdGlvbjogMXMgcHJvamVjdHNVbmRlcmxpbmVFeHBhbmQgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgcHJvamVjdHNVbmRlcmxpbmVFeHBhbmQge1xcbiAgMCUge1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiBtaW4oMzA5cHgsIDkwdncpO1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1jb24ge1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiBtaW4oMTIwMHB4LCA5NXZ3KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QtaW1nLXJpZ2h0IHtcXG4gIHdpZHRoOiBtaW4oOTAwcHgsIDk1dncpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSAxMHB4IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnByb2plY3QtaW1nLXJpZ2h0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtMTBweCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDI3cHggMjdweDtcXG59XFxuXFxuLnByb2plY3QtaW1nLWxlZnQge1xcbiAgd2lkdGg6IG1pbig5MDBweCwgOTV2dyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zZWNvbmRhcnktY29sb3IpIC0xMHB4IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4ucHJvamVjdC1pbWctbGVmdDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAtMTBweCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zZWNvbmRhcnktY29sb3IpIC0yN3B4IDI3cHg7XFxufVxcblxcbi5wcm9qZWN0LXRleHQtY29uIHtcXG4gIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogbWluKDYwMHB4LCBjYWxjKDkwdncgLSAyNHB4KSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1zZWNvbmRhcnktY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MHB4O1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbn1cXG5cXG4ucHJvamVjdC10ZXh0LWhlYWRlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuLnByb2plY3QtdGVrLXRleHQge1xcbiAgY29sb3I6IHZhcigtLXRoaXJkLWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMTZweDtcXG4gIHdvcmQtc3BhY2luZzogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY29uLXJpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHJpZ2h0OiAzMHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idG4tb3ZlcmZsb3ctY29uIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9qZWN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtYnRuLWxpdmUge1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1saXZlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiPExpdmUvPlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0yMnB4O1xcbn1cXG5cXG4ucHJvamVjdC1idG46aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXG59XFxuXFxuLnByb2plY3QtYnRuLWNvZGUge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY29kZTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIjxDb2RlLz5cXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMjJweDtcXG59XFxuXFxuLnByb2plY3RzLW1vcmUtYnRuIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBib3JkZXI6IHNvbGlkIDJweCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG4gIG1hcmdpbi10b3A6IG1heCg1dmgsIDEwMHB4KTtcXG59XFxuXFxuLnByb2plY3RzLW1vcmUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxuICAucHJvamVjdC10ZXh0LWNvbiB7XFxuICAgIGJvdHRvbTogLTUwcHg7XFxuICB9XFxuICAucHJvamVjdHNVbmRlcmxpbmUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvamVjdC1jb24ge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgfVxcbiAgLnByb2plY3QtdGV4dC1jb24ge1xcbiAgICBib3R0b206IC0xMDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICB9XFxuICAucHJvamVjdC1pbWctcmlnaHQge1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgaGVpZ2h0OiBtaW4oNzB2aCwgNTAwcHgpO1xcbiAgfVxcbiAgLnByb2plY3QtaW1nLWxlZnQge1xcbiAgICBoZWlnaHQ6IG1pbig3MHZoLCA1MDBweCk7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgfVxcbiAgLnByb2plY3QtdGV4dC1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuICAucHJvamVjdC10ZWstdGV4dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi8qIENvbnRhY3QgKi9cXG5cXG4uY29udGFjdC1jb24ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxuLmNvbnRhY3QtaW5uZXJDb24ge1xcbiAgd2lkdGg6IG1pbig5MHZ3LCA5MDBweCk7XFxufVxcbi5jb250YWN0LXVuZGVybGluZSB7XFxuICBoZWlnaHQ6IDJweDtcXG4gIHdpZHRoOiAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uY29udGFjdC11bmRlcmxpbmUtYW5pbWF0aW9uIHtcXG4gIGFuaW1hdGlvbjogY29udGFjdFVuZGVybGluZUV4cGFuZCAxcyBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBjb250YWN0VW5kZXJsaW5lRXhwYW5kIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTkzcHg7XFxuICB9XFxufVxcblxcbi5jb250YWN0LWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNvbnRhY3QtYnRuOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIs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QUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFDQSxZQUFZOztBQUVaO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3N0OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiB3aGl0ZTtcXG4gIC0tYmctc2Vjb25kYXJ5LWNvbG9yOiAjZWZlZmVmZmY7XFxuICAtLXByaW1hcnktY29sb3I6IGJsYWNrO1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM0MjY3NmJmZjtcXG4gIC0tdGhpcmQtY29sb3I6ICM4NTg1ODVmZjtcXG59XFxuXFxuLyogVW5pdmVyc2FsIHN0eWxlcyAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkpvc3RcXFwiO1xcbn1cXG5cXG4uZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5hbC1jZW4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmp1LWNlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mbGV4LWNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIHJpZ2h0OiAwcHg7XFxufVxcblxcbi8qIFRleHQgKi9cXG4udGV4dC1zaXplNiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiBtaW4oNjBweCwgOXZ3KTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmhlYWRpbmctdGV4dCB7XFxuICBmb250LXNpemU6IG1pbig0MHB4LCAxMXZ3KTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGhlaWdodDogNTguNHB4O1xcbn1cXG5cXG4ubm9ybWFsLXRleHQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uc2Vjb25kYXJ5LWNvbG9yIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG4vKiBkaXNwbGF5IHN0eWxlcyAqL1xcblxcbi5kaXNwbGF5LWNvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnR5cGluZy1jb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IG1pbig1cHgsIDAuNHZ3KTtcXG5cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgaGVpZ2h0OiA5MHB4O1xcblxcbiAgd2lkdGg6IG1pbig5NTBweCwgODB2dyk7XFxuXFxuICBhbmltYXRpb24tbmFtZTogbm9uZTtcXG4gIGFuaW1hdGlvbi1kZWxheTogNC41cztcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxufVxcblxcbi50eXBlbGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGhlaWdodDogbWluKDU1cHgsIDl2dyk7XFxuICB3aWR0aDogbWluKDNweCwgMC40dncpO1xcbiAgbWFyZ2luLXRvcDogbWluKDE0cHgsIDJ2dyk7XFxuICBhbmltYXRpb246IGZvcndhcmRzO1xcbiAgYW5pbWF0aW9uLW5hbWU6IHR5cGVsaW5lQmxpbmssIGNXaGl0ZSwgdHlwZWxpbmVCbGluaywgY1doaXRlLCB0eXBlbGluZUJsaW5rLFxcbiAgICBjV2hpdGUsIHR5cGVsaW5lQmxpbms7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEuNXMsIDEuMTVzLCAxLjVzLCAxLjE1cywgMS41cywgM3MsIDEuNXM7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzLCAzcywgNC4xNXMsIDUuNjVzLCA2LjVzLCA4cywgMTFzLCAxMi41cztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDIsIDEsIDEsIDEsIDEsIDEsIDE7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTM4cHgpIHtcXG4gIC50eXBlbGluZSB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiB0eXBlbGluZUJsaW5rLCBjV2hpdGUsIHR5cGVsaW5lQmxpbmssIGNXaGl0ZSwgdHlwZWxpbmVCbGluaztcXG4gIH1cXG59XFxuXFxuLm1vdmluZy1jb2RlLXNpZGV3YXlzIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiBtaW4oMjVweCwgNXZ3KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFuaW1hdGlvbjogbW92ZUxlZnRUZXh0IDEycyBsaW5lYXIgZm9yd2FyZHM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubW92aW5nLWNvZGUtdXB3YXJkIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiBtaW4oMjVweCwgNXZ3KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGFuaW1hdGlvbjogbW92ZVVwVGV4dCAxMnMgbGluZWFyIGZvcndhcmRzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLm1vdmluZy1jb2RlLXNpZGV3YXlzOm50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDEwdmg7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDEycztcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm1vdmluZy1jb2RlLXVwd2FyZDpudGgtY2hpbGQoMykge1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGMobWluKDk1MHB4LCA4MHZ3KSAtIDIwdncpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxM3M7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xcbiAgLm1vdmluZy1jb2RlLXVwd2FyZDpudGgtY2hpbGQoMykge1xcbiAgICBtYXJnaW4tbGVmdDogOTB2dztcXG4gIH1cXG59XFxuXFxuLm1vdmluZy1jb2RlLXNpZGV3YXlzOm50aC1jaGlsZCg0KSB7XFxuICBib3R0b206IDEwdmg7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XFxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKG1heCgxMDB2dywgMTAwJSkpO1xcbn1cXG5cXG4ubW92aW5nLWNvZGUtdXB3YXJkOm50aC1jaGlsZCg1KSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDExLjNzO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcXG4gIG9wYWNpdHk6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMobWluKDk1MHB4LCA4MHZ3KSArIDEwdncpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGVsaW5lQmxpbmsge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgfVxcbiAgNTElIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNXaGl0ZSB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmVMZWZ0VGV4dCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChtYXgoMTAwdncsIDEwMCUpKTsgLyogU3RhcnQgb2ZmLXNjcmVlbiBvbiB0aGUgcmlnaHQgKi9cXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgobWluKC0xMDB2dywgLTEwMCUpKTsgLyogRW5kIG9mZi1zY3JlZW4gb24gdGhlIGxlZnQgKi9cXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlVXBUZXh0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVgoMTAwJSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4vKiBIb21lICovXFxuXFxuLmhvbWUtY29uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdi1jb24ge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0dncpO1xcbiAgdG9wOiAwcHg7XFxuICBwYWRkaW5nOiAwcHggMnZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDIwO1xcbn1cXG5cXG4ubmF2LWNvbi5maXhlZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi5uYXYtbG9nbyB7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMnZ3O1xcbn1cXG5cXG4ubmF2LWxvZ286aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xcbn1cXG5cXG4ubmF2LWJ0bi1jb24ge1xcbiAgZ2FwOiA0MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyLjV2dztcXG59XFxuXFxuLm5hdi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubmF2LWJ0bjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi50aGVtZUNoYW5nZUJ0biB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYm9yZGVyOiB2YXIoLS10aGlyZC1jb2xvcikgc29saWQgMnB4O1xcbn1cXG5cXG4udGhlbWVDaGFuZ2VCdG46aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuXFxuLnRoZW1lSWNvbkRhcmsge1xcbiAgaGVpZ2h0OiAyM3B4O1xcbn1cXG5cXG4udGhlbWVJY29uTGlnaHQge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG59XFxuXFxuLmhvdmVyc2hhcGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2l0aW9uOiBjdWJpYy1iZXppZXIoMC4wNiwgMC4yNiwgMC40NSwgMS4xOSkgMC4zcztcXG59XFxuXFxuLmhvbWVJbmZvLWNvbiB7XFxuICBnYXA6IDEwMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZy10b3A6IDMwdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjB2aDtcXG59XFxuXFxuLmFib3V0bWUtdGV4dC1jb24ge1xcbiAgZ2FwOiAxNXB4O1xcbiAgd2lkdGg6IG1pbig1MDBweCwgOTB2dyk7XFxufVxcblxcbi5hYm91dG1lLXVuZGVybGluZSB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5hYm91dG1lLXBvcnRyYWl0IHtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogMzAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuLnBvcnRhaXQtYW5pbWF0aW9uIHtcXG4gIGFuaW1hdGlvbjogaW1nU2xpZGUgMXMgZm9yd2FyZHMgZWFzZS1vdXQ7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxufVxcblxcbkBrZXlmcmFtZXMgaW1nU2xpZGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTBweCk7XFxuICB9XFxuICA0MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgN3B4IDdweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmFib3V0bWUtc2tpbGxzLWNvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5za2lsbHNVbmRlcmxpbmUge1xcbiAgaGVpZ2h0OiAycHg7XFxuICB3aWR0aDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNraWxsc1VuZGVybGluZS1hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiBza2lsbHNVbmRlcmxpbmVFeHBhbmQgMXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2tpbGxzVW5kZXJsaW5lRXhwYW5kIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgfVxcbiAgdG8ge1xcbiAgICB3aWR0aDogbWluKDkwdncsIDkwMHB4KTtcXG4gIH1cXG59XFxuXFxuLnNraWxsLWljb25zLWNvbiB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4oOTB2dywgOTAwcHgpO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNraWxsLWljb24tY29uIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2tpbGwtaWNvbi1hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiBzbGlkZUluTGVmdCAxcyBmb3J3YXJkcztcXG59XFxuXFxuLnNraWxsLWljb24tY29uOm50aC1jaGlsZCgxKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbn1cXG5cXG4uc2tpbGwtaWNvbi1jb246bnRoLWNoaWxkKDIpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC4xcztcXG59XFxuLnNraWxsLWljb24tY29uOm50aC1jaGlsZCgzKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XFxufVxcbi5za2lsbC1pY29uLWNvbjpudGgtY2hpbGQoNCkge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcbn1cXG4uc2tpbGwtaWNvbi1jb246bnRoLWNoaWxkKDUpIHtcXG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcXG59XFxuLnNraWxsLWljb24tY29uOm50aC1jaGlsZCg2KSB7XFxuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5za2lsbC1pY29uLWNvbjpudGgtY2hpbGQoNykge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgfVxcbn1cXG5cXG4uc2tpbGwtaWNvbi1pbWcge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbn1cXG5cXG4vKiBQcm9qZWN0cyAqL1xcblxcbi5wcm9qZWN0cy1jb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgcGFkZGluZy10b3A6IDMwdmg7XFxuICBnYXA6IG1heCgxMHZoLCAxMDBweCk7XFxufVxcblxcbi5wcm9qZWN0cy1pbm5lckNvbiB7XFxuICB3aWR0aDogbWluKDkwdncsIDkwMHB4KTtcXG59XFxuXFxuLnByb2plY3RzVW5kZXJsaW5lIHtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0c1VuZGVybGluZS1hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiAxcyBwcm9qZWN0c1VuZGVybGluZUV4cGFuZCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBwcm9qZWN0c1VuZGVybGluZUV4cGFuZCB7XFxuICAwJSB7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IG1pbigzMDlweCwgOTB2dyk7XFxuICB9XFxufVxcblxcbi5wcm9qZWN0LWNvbiB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IG1pbigxMjAwcHgsIDk1dncpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdC1pbWctcmlnaHQge1xcbiAgd2lkdGg6IG1pbig5MDBweCwgOTV2dyk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDEwcHggMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4ucHJvamVjdC1pbWctcmlnaHQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIC0xMHB4KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgMjdweCAyN3B4O1xcbn1cXG5cXG4ucHJvamVjdC1pbWctbGVmdCB7XFxuICB3aWR0aDogbWluKDkwMHB4LCA5NXZ3KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgLTEwcHggMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDBweDtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5wcm9qZWN0LWltZy1sZWZ0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIC0xMHB4KTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgLTI3cHggMjdweDtcXG59XFxuXFxuLnByb2plY3QtdGV4dC1jb24ge1xcbiAgaGVpZ2h0OiAxNTBweDtcXG4gIHdpZHRoOiBtaW4oNjAwcHgsIGNhbGMoOTB2dyAtIDI0cHgpKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeS1jb2xvcik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUwcHg7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxufVxcblxcbi5wcm9qZWN0LXRleHQtaGVhZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4ucHJvamVjdC10ZWstdGV4dCB7XFxuICBjb2xvcjogdmFyKC0tdGhpcmQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAxNnB4O1xcbiAgd29yZC1zcGFjaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jb24tcmlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBib3R0b206IDIwcHg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1vdmVyZmxvdy1jb24ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tbGl2ZSB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtYnRuLWxpdmU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCI8TGl2ZS8+XFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTIycHg7XFxufVxcblxcbi5wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tY29kZSB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0LWJ0bi1jb2RlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiPENvZGUvPlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0yMnB4O1xcbn1cXG5cXG4ucHJvamVjdHMtbW9yZS1idG4ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgbWFyZ2luLXRvcDogbWF4KDV2aCwgMTAwcHgpO1xcbn1cXG5cXG4ucHJvamVjdHMtbW9yZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIC5wcm9qZWN0LXRleHQtY29uIHtcXG4gICAgYm90dG9tOiAtNTBweDtcXG4gIH1cXG4gIC5wcm9qZWN0c1VuZGVybGluZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5wcm9qZWN0LWNvbiB7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICB9XFxuICAucHJvamVjdC10ZXh0LWNvbiB7XFxuICAgIGJvdHRvbTogLTEwMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gIH1cXG4gIC5wcm9qZWN0LWltZy1yaWdodCB7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBoZWlnaHQ6IG1pbig3MHZoLCA1MDBweCk7XFxuICB9XFxuICAucHJvamVjdC1pbWctbGVmdCB7XFxuICAgIGhlaWdodDogbWluKDcwdmgsIDUwMHB4KTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB9XFxuICAucHJvamVjdC10ZXh0LWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG4gIC5wcm9qZWN0LXRlay10ZXh0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLyogQ29udGFjdCAqL1xcblxcbi5jb250YWN0LWNvbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG4uY29udGFjdC1pbm5lckNvbiB7XFxuICB3aWR0aDogbWluKDkwdncsIDkwMHB4KTtcXG59XFxuLmNvbnRhY3QtdW5kZXJsaW5lIHtcXG4gIGhlaWdodDogMnB4O1xcbiAgd2lkdGg6IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5jb250YWN0LXVuZGVybGluZS1hbmltYXRpb24ge1xcbiAgYW5pbWF0aW9uOiBjb250YWN0VW5kZXJsaW5lRXhwYW5kIDFzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGNvbnRhY3RVbmRlcmxpbmVFeHBhbmQge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHdpZHRoOiAxOTNweDtcXG4gIH1cXG59XFxuXFxuLmNvbnRhY3QtYnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY29udGFjdC1idG46aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vY29udHJvbGxlclwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9