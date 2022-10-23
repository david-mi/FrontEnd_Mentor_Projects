export const getApiSentence = async () => {
  const response = await fetch("http://api.quotable.io/random");
  const data = await response.json();
  return data.content;
};