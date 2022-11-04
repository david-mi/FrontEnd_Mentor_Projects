import { getCountriesFromApi } from "./api.js";

(async () => {
  const countries = await getCountriesFromApi();
  console.log(countries);
})();