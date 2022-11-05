import { darkModeButton } from "./constants.js";

const optionsContainer = document.querySelector(".options");
const selectBg = document.querySelector(".select-bg");

export const toggleDarkMode = () => {
  const theme = document.body.dataset.theme;
  if (theme === "light") {
    document.body.dataset.theme = "dark";
  } else {
    document.body.dataset.theme = "light";
  }

  darkModeButton.classList.toggle("dark");
};

export const toggleSelectMenu = (event) => {
  event.stopPropagation();
  optionsContainer.classList.toggle("hide");
  selectBg.classList.toggle("hide");
};
