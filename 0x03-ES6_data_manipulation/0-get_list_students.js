/**
 * Function that returns an array of student objects.
 * Each object contains the following properties: id (Number), firstName (String), and location (String).
 * 
 * @returns {Array} Array of student objects
 */

export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
