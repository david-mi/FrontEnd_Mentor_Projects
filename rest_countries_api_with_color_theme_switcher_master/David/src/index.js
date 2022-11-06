import "./types.js";
import { getCountriesFromApi } from "./api.js";
import { darkModeButton, input, selectElement } from "./constants.js";
import { displayCountries, toggleDarkMode, toggleSelectMenu, closeCountryModal, displaySelectedOption, removeLoader } from "./display.js";
import { countryAlphaCodes, countries } from "./data.js";
import { filterCountries } from "./filter.js";
import { handleThemeOnLoad } from "./helpers.js";

const optionsElements = document.querySelectorAll(".options li");
const countryModalCloseButton = document.querySelector(".close-modal");

selectElement.addEventListener("click", toggleSelectMenu);
optionsElements.forEach(optionElement => {
  optionElement.addEventListener("click", (event) => {
    displaySelectedOption(event);
    toggleSelectMenu(event);
    filterCountries();
  });
});
input.addEventListener("input", filterCountries);
darkModeButton.addEventListener("click", toggleDarkMode);
countryModalCloseButton.addEventListener("click", closeCountryModal);

(async () => {
  handleThemeOnLoad();
  const countriesData = await getCountriesFromApi();
  countries.push(...countriesData);
  countriesData.reduce((alphaCode, { alpha3Code, name }) => {
    alphaCode[alpha3Code] = name;
    return alphaCode;
  }, countryAlphaCodes);
  removeLoader();
  displayCountries(countriesData);
})();
