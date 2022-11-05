/**
 * Reduce an array of objects to a string, based on the given property
 * 
 * @param {{name: string}[]} objArray 
 * @returns {string}
 */

export const reduceArrayToString = (objArray, property) => {
  return objArray.reduce((str, obj, index, arr) => {
    return index === arr.length - 1
      ? str += obj[property]
      : str += `${obj[property]}, `;
  }, "");
};