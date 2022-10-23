export const getShortenedUrl = (url) => {
  const apiUrl = "https://api.shrtco.de/v2/shorten?url=";
  return fetch(apiUrl + url)
    .then(res => res.json());
};
