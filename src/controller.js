import createDisplay from "./pages/display";
import createHome from "./pages/home";
import createProjects from "./pages/projects";
import createContact from "./pages/contact";

const appendPage = () => {
  createDisplay().then((el) => {
    document.body.appendChild(el);
  });

  createHome().then((el) => {
    document.body.appendChild(el);
  });
  createProjects().then((el) => {
    document.body.appendChild(el);
  });
  createContact().then((el) => {
    document.body.appendChild(el);
  });
};

appendPage();
