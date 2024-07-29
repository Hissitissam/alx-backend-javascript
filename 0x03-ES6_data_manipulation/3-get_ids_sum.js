/**
 * Function that returns the sum of all the student ids.
 * 
 * @param {Array} students - Array of student objects
 * @returns {Number} Sum of all student ids
 */

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
