/**
 * Function that returns a boolean indicating if all elements in the array exist within the set.
 * 
 * @param {Set} set - The set to check for the presence of elements
 * @param {Array} array - The array of elements to check in the set
 * @returns {boolean} True if all elements in the array exist in the set, otherwise false
 */ 

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
