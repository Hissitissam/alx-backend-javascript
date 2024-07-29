/**
 * Function that returns an array of student objects who are located in a specific city.
 * 
 * @param {Array} students - Array of student objects
 * @param {String} city - The city to filter the students by
 * @returns {Array} Array of student objects located in the specified city
 */

export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
