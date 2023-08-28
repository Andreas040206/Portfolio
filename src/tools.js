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

export { typingAnimation, deleteTypedText };
