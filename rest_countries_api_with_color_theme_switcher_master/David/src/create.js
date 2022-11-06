import { displayCountryModal } from "./countryModal/display.js";

/**
 * Creates card link for a country
 * 
 * @param {Country} country 
 * @returns {HTMLAnchorElement}
 */

export const createCountryCard = (country) => {
  const { name, population, region, capital, flag } = country;
  const countryCardLink = document.createElement("a");
  countryCardLink.href = "#";
  countryCardLink.classList.add("country");
  countryCardLink.addEventListener("click", (event) => {
    displayCountryModal(event, country);
  });

  const countryHtmlContent = `
  <img src=${flag} alt="">
  <div class="infos">
    <h2>${name}</h2>
    <p>Population: <span>${population}</span></p>
    <p>Region: <span>${region}</span></p>
    <p>Capital: <span>${capital}</span></p>
  </div>
  `;

  countryCardLink.insertAdjacentHTML("afterbegin", countryHtmlContent);
  return countryCardLink;
};
