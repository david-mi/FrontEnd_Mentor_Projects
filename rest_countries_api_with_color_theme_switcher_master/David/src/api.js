export const getCountriesFromApi = async () => {
  const response = await fetch("https://restcountries.com/v2/all");
  const countries = await response.json();
  return countries;
};