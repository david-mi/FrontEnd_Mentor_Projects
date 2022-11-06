import "./types.js";
import { darkModeButton, selectElementText } from "./constants.js";
import { createCountryCard } from "./create.js";
import { reduceArrayToString } from "./helpers.js";
import { countryAlphaCodes } from "./data.js";

const optionsContainer = document.querySelector(".options");
const selectBg = document.querySelector(".select-bg");
const countryModalContainer = document.querySelector(".country-modal__container");
const countryModal = document.querySelector(".country-modal");
const countriesCardsContainer = document.querySelector(".countries-cards");


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
 * Add all required country infos values to display on country modal
 * 
 * @param {Country} country
 */

const setCountryModalInfos = (country) => {
  const countryModalImageElement = countryModal.querySelector(".country-modal img");
  countryModalImageElement.src = country.flag;

  const countryModalNameElement = countryModal.querySelector(".modal__infos h2");
  countryModalNameElement.innerText = country.name;

  const nativeNameModalElement = document.querySelector(".modal__infos h3:nth-child(2) span");
  nativeNameModalElement.innerText = country.nativeName;

  const populationModalElement = document.querySelector(".modal__infos h3:nth-child(3) span");
  populationModalElement.innerText = country.population;

  const regionModalElement = document.querySelector(".modal__infos h3:nth-child(4) span");
  regionModalElement.innerText = country.region;

  const subRegionModalElement = document.querySelector(".modal__infos h3:nth-child(5) span");
  subRegionModalElement.innerText = country.subregion;

  const capitalModalElement = document.querySelector(".modal__infos h3:nth-child(6) span");
  capitalModalElement.innerText = country.capital;
};

/**
 * Add all required country additional infos values to display on country modal
 * 
 * @param {Country} country
 */

const setCountryAdditionalInfos = (country) => {
  const topLevelModalElement = document.querySelector(".modal__additional-infos h3:nth-child(1) span");
  topLevelModalElement.innerText = country.topLevelDomain[0];

  const currenciesModalElement = document.querySelector(".modal__additional-infos h3:nth-child(2) span");
  const currenciesStr = reduceArrayToString(country.currencies, "name");
  currenciesModalElement.innerText = currenciesStr;

  const languagesModalElement = document.querySelector(".modal__additional-infos h3:nth-child(3) span");
  const languagesStr = reduceArrayToString(country.languages, "name");
  languagesModalElement.innerText = languagesStr;
};

/**
 * Add all required border countries values to display on country modal
 * if borders property does not exist, reset {@link borderCountriesElement} innerHtml and return
 * 
 * @param {Country} country
 */

const setCountryBorderCountries = (country) => {
  const borderCountriesElement = document.querySelector(".modal__border-countries ul");
  borderCountriesElement.innerHTML = "";

  if ("borders" in country === false) return;

  country.borders.forEach(border => {
    const liBorderHtml = `<li>${countryAlphaCodes[border]}</li>`;
    borderCountriesElement.insertAdjacentHTML("beforeend", liBorderHtml);
  });
};

/**
 * Close modale with previous button click
 * 
 * @param {MouseEvent} event 
 */

const handlePreviousClickInModal = (event) => {
  if (button === 3) {
    closeCountryModal();
  }
};

/**
 * Display country card modal with advanced infos about the country
 * 
 * @param {MouseEvent} event 
 * @param {Country} country
 */

export const displayCountryModal = (event, country) => {
  event.preventDefault();
  document.addEventListener("mousedown", handlePreviousClickInModal);
  countryModalContainer.classList.remove("hide");
  countriesCardsContainer.classList.add("hide");
  setCountryModalInfos(country);
  setCountryAdditionalInfos(country);
  setCountryBorderCountries(country);
};

/**
 * Close country modal
 */

export const closeCountryModal = () => {
  document.removeEventListener("mousedown", handlePreviousClickInModal);
  countryModalContainer.classList.add("hide");
  countriesCardsContainer.classList.remove("hide");
};

/**
 * Display selection region option to select <p> tag
 * 
 * @param {MouseEvent} param0 
 */

export const displaySelectedOption = ({ target }) => {
  selectElementText.innerText = target.innerText;
};