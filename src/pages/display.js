import { typingAnimation, deleteTypedText } from "../tools";

const createDisplay = () => {
  return new Promise((resolve) => {
    const content = document.createElement("header");
    content.classList.add("display-con", "flex-row-center");

    const typingCon = document.createElement("div");
    typingCon.classList.add("typing-con");

    const typeline = document.createElement("div");
    typeline.classList.add("typeline");

    const typingText = document.createElement("span");
    typingText.classList.add("text-size6");

    setTimeout(() => {
      typingAnimation(typingText, "WEB DEVELOPER", 60);
    }, 3000);

    setTimeout(() => {
      deleteTypedText(typingText, "WEB DEVELOPER", 30);
    }, 6000);

    setTimeout(() => {
      typingAnimation(typingText, "DESIGNER", 60);
    }, 6500);

    setTimeout(() => {
      deleteTypedText(typingText, "DESIGNER", 30);
    }, 9000);

    setTimeout(() => {
      typingAnimation(typingText, "ANDREAS SKAKKEBÆK-KRUSE", 60);
    }, 9500);

    typingCon.appendChild(typingText);
    typingCon.appendChild(typeline);

    content.appendChild(typingCon);

    resolve(content);
  });
};

export default createDisplay;
