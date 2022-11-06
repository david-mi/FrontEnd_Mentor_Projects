import { countries } from "./data.js";
import { input, selectElementText, selectElement } from "./constants.js";
import { displayCountries } from "./display.js";

/**
 * - Filter countries based on region selected and input value
 * - Display filtered countries
 */

export const filterCountries = () => {
  const selectRegionValue = selectElement.dataset.region;
  const inputValueLowerCase = input.value.toLowerCase();

  const filteredCountries = countries.filter(country => (
    country.name.toLowerCase().includes(inputValueLowerCase) &&
    country.region.includes(selectRegionValue)
  ));

  displayCountries(filteredCountries);
};