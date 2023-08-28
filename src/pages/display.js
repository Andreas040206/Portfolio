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

    // AI-Enabled Developer

    setTimeout(() => {
      typingAnimation(typingText, "ANDREAS SKAKKEBÆK-KRUSE", 60);
    }, 9500);

    typingCon.appendChild(typingText);
    typingCon.appendChild(typeline);

    const codeText1 = document.createElement("span");
    codeText1.classList.add("moving-code");
    codeText1.textContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head><body><p>I will create the content that suits your buisness</p></body></html>`;

    const codeText2 = document.createElement("span");
    codeText2.classList.add("moving-code");
    codeText2.textContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head><body><p>I will create the content that suits your buisness</p></body></html>`;

    const codeText3 = document.createElement("span");
    codeText3.classList.add("moving-code");
    codeText3.textContent = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head><body><p>I will create the content that suits your buisness</p></body></html>`;

    content.appendChild(typingCon);
    content.appendChild(codeText1);
    content.appendChild(codeText2);
    content.appendChild(codeText3);

    resolve(content);
  });
};

export default createDisplay;
