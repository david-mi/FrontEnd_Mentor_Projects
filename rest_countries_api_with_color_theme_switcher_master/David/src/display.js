import { darkModeButton } from "./constants.js";
import { createCountryCard } from "./create.js";

const optionsContainer = document.querySelector(".options");
const selectBg = document.querySelector(".select-bg");
const mainElement = document.querySelector("main");

/**
 * - Toggle data-theme attribute set to body to light or dark
 * - Toggle dark css class to {@link darkModeButton}
 */

export const toggleDarkMode = () => {
  const theme = document.body.dataset.theme;
  if (theme === "light") {
    document.body.dataset.theme = "dark";
  } else {
    document.body.dataset.theme = "light";
  }

  darkModeButton.classList.toggle("dark");
};

/**
 * Handle custom select menu visibility
 * 
 * @param {MouseEvent} event 
 */

export const toggleSelectMenu = (event) => {
  event.stopPropagation();
  optionsContainer.classList.toggle("hide");
  selectBg.classList.toggle("hide");
};

/**
 * Append countries Elements to {@link mainElement}
 * 
 * @param {Countries} countries 
 */

export const displayCountries = (countries) => {
  countries.forEach(country => {
    mainElement.append(createCountryCard(country));
  });
};