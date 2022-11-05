import "./types.js";
import { getCountriesFromApi } from "./api.js";
import { darkModeButton } from "./constants.js";
import { displayCountries, toggleDarkMode, toggleSelectMenu, closeCountryModal } from "./display.js";

const selectElement = document.querySelector(".select");
const optionsElements = document.querySelectorAll(".options li");
const countryModalCloseButton = document.querySelector(".close-modal");

selectElement.addEventListener("click", toggleSelectMenu);
optionsElements.forEach(optionElement => {
  optionElement.addEventListener("click", toggleSelectMenu);
});
darkModeButton.addEventListener("click", toggleDarkMode);
countryModalCloseButton.addEventListener("click", closeCountryModal);

(async () => {
  const countries = await getCountriesFromApi();
  displayCountries(countries);
  console.log(countries);
})();