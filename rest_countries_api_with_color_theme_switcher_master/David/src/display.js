import "./types.js";
import { darkModeButton, selectElementText, selectElement, countriesCardsContainer } from "./constants.js";
import { createCountryCard } from "./create.js";

const optionsContainer = document.querySelector(".options");
const selectBg = document.querySelector(".select-bg");
const loaderElement = document.querySelector(".loader");
const themeButtonIcon = darkModeButton.querySelector("i");
const iconEnum = {
  "dark": "fas",
  "light": "far"
};

/**
 * handle wich moon icon to display on themeButton
 * @param {*} themeValue 
 */

export const handleThemeButtonIcon = (themeValue) => {
  themeButtonIcon.classList.remove("far", "fas");
  themeButtonIcon.classList.add(iconEnum[themeValue]);
};

/**
 * - Toggle data-theme attribute set to body to light or dark
 * - Set new theme to storage
 * - Toggle dark css class to {@link darkModeButton}
 */

export const toggleTheme = () => {
  const theme = document.body.dataset.theme;
  let newTheme = theme === "light"
    ? "dark"
    : "light";

  document.body.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  handleThemeButtonIcon(newTheme);
  // darkModeButton.classList.toggle("dark");
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
 * Append countries Elements to {@link countriesCardsContainer}
 * 
 * @param {Countries} countries 
 */

export const displayCountries = (countries) => {
  countriesCardsContainer.innerHTML = "";
  countries.forEach(country => {
    countriesCardsContainer.append(createCountryCard(country));
  });
};

/**
 * Display selection region option to select <p> tag
 * Add data-region to {@link selectElement}
 * 
 * @param {MouseEvent} target 
 */

export const displaySelectedOption = ({ target }) => {
  selectElementText.innerText = target.innerText;
  selectElement.dataset.region = target.dataset.region;
};

/**
 * Removes loader after data has been fetched
 */

export const removeLoader = () => {
  loaderElement.classList.add("hide");
};