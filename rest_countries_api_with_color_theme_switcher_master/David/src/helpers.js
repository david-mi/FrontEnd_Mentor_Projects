/**
 * Reduce an array of objects to a string, based on the given property
 * 
 * @param {{name: string}[]} objArray 
 * @returns {string}
 */

export const reduceArrayToString = (objArray, property) => {
  if (!objArray) return "none";
  return objArray.reduce((str, obj, index, arr) => {
    return index === arr.length - 1
      ? str += obj[property]
      : str += `${obj[property]}, `;
  }, "");
};

/**
 * Check if a theme is saved on storage and setting it as body data-theme,
 * if no theme is found, sets light by default
 */

export const handleThemeOnLoad = () => {
  const theme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = theme;
};