/**
 * Function that returns an array of ids from a list of student objects.
 * If the argument is not an array, it returns an empty array.
 * 
 * @param {Array} students - Array of student objects
 * @returns {Array} Array of student ids
 */

export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
