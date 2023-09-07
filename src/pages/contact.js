import { typingAnimation } from "../tools";

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
          typingAnimation(header1, "Contact", 60);
          setTimeout(() => {
            typingAnimation(header2, " me", 60);
            setTimeout(() => {
              typingAnimation(contactText, "What's next? ", 40);
              setTimeout(() => {
                typingAnimation(contactText, " Let's find out together!", 40);
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

export default createContact;
