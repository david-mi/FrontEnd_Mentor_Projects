import { darkModeButton } from "./constants.js";
import { createCountryCard } from "./create.js";

const optionsContainer = document.querySelector(".options");
const selectBg = document.querySelector(".select-bg");
const mainElement = document.querySelector("main");

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

export const displayCountries = (countries) => {
  countries.forEach(country => {
    mainElement.append(createCountryCard(country));
  });
};