/**
 * Function that returns a string of all the set values that start with a specific string.
 * 
 * @param {Set} set - The set of values to filter
 * @param {String} startString - The string to check at the start of each set value
 * @returns {String} A string containing the values starting with startString, separated by '-'
 */ 

export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
