import { countries } from "./data.js";
import { input, selectElementText } from "./constants.js";
import { displayCountries } from "./display.js";

/**
 * - Filter countries based on region selected and input value
 * - Display filtered countries
 */

export const filterCountries = () => {
  const selectValue = selectElementText.innerText;
  const inputValueLowerCase = input.value.toLowerCase();

  let region = selectValue !== "Filter by Region"
    ? selectValue
    : "";

  const filteredCountries = countries.filter(country => (
    country.name.toLowerCase().includes(inputValueLowerCase) &&
    country.region.includes(region)
  ));

  displayCountries(filteredCountries);
};