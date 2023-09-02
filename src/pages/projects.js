const createProjects = () => {
  return new Promise((resolve) => {
    const content = document.createElement("div");
    content.classList.add("projects-con");
    content.setAttribute("id", "projects");

    resolve(content);
  });
};

export default createProjects;
