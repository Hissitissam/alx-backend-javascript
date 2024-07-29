/**
 * Function that updates the quantity of items with an initial quantity of 1 to 100 in the given Map.
 * 
 * @param {Map} map - The Map containing grocery items and their quantities
 * @returns {Map} The updated Map with quantities updated
 * @throws {Error} If the argument is not a Map
 */ 

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
