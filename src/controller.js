import createDisplay from "./pages/display";
import createHome from "./pages/home";
import createProjects from "./pages/projects";
import createContact from "./pages/contact";

const appendPage = () => {
  Promise.all([
    createHome(),
    createDisplay(),
    createProjects(),
    createContact(),
  ]).then((el) => {
    document.body.appendChild(el);
  });
};

appendPage();
