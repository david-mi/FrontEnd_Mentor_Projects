import { getCountriesFromApi } from "./api.js";
import { darkModeButton } from "./constants.js";
import { toggleDarkMode, toggleSelectMenu } from "./display.js";

const selectButtonElement = document.querySelector(".select");
const optionsElements = document.querySelectorAll(".options li");

selectButtonElement.addEventListener("click", toggleSelectMenu);
optionsElements.forEach(optionElement => {
  optionElement.addEventListener("click", toggleSelectMenu);
});

darkModeButton.addEventListener("click", toggleDarkMode);

(async () => {
  const countries = await getCountriesFromApi();
  console.log(countries);
})();