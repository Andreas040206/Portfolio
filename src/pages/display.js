const createDisplay = () => {
  return new Promise((resolve) => {
    const content = document.createElement("header");

    resolve(content);
  });
};

export default createDisplay;
