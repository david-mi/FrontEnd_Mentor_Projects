import { getCountriesFromApi } from "./api.js";
import { darkModeButton } from "./constants.js";
import { toggleDarkMode } from "./display.js";

darkModeButton.addEventListener("click", toggleDarkMode);

(async () => {
  const countries = await getCountriesFromApi();
  console.log(countries);
})();