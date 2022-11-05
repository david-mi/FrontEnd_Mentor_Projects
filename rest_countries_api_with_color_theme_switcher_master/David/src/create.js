export const createCountryCard = (countryData) => {
  const { name, population, region, capital, flag } = countryData;
  const countryCardLink = document.createElement("a");
  countryCardLink.href = "#";
  countryCardLink.classList.add("country");

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