const createContact = () => {
  return new Promise((resolve) => {
    const content = document.createElement("footer");
    content.setAttribute("id", "contact");

    resolve(content);
  });
};

export default createContact;
