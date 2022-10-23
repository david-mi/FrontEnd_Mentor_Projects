export const getApiSentence = async () => {
  const response = await fetch("https://api.quotable.io/random?minLength=150");
  const data = await response.json();
  return data.content;
};