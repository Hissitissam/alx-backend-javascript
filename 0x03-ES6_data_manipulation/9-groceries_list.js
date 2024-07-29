/**
 * Function that returns a Map of groceries with items and their quantities.
 * 
 * @returns {Map} A Map containing grocery items and their quantities
 */ 

export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
