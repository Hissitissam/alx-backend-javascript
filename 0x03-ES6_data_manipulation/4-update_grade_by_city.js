/**
 * Function that returns an array of students for a specific city with their new grade.
 * 
 * @param {Array} students - Array of student objects
 * @param {String} city - The city to filter the students by
 * @param {Array} newGrades - Array of grade objects with studentId and grade properties
 * @returns {Array} Array of student objects with updated grades
 */ 

export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
