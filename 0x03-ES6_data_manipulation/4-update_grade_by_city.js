export default function (getListStudents, city, newGrades) {
  const similarLocation = getListStudents.filter((element) => element.location === city);
  const newArray = similarLocation.map((element) => {
    // here newGrade will return the first element satisfy in this case the first object
    const newGrade = newGrades.find((grade) => grade.studentId === element.id);
    let gradentry = 'N/A';
    if (newGrade) {
      gradentry = newGrade.grade;
    }
    return {
      ...element,
      grade: gradentry,
    };
  });
  return newArray;
}
