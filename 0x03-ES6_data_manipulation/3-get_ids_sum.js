export default function getStudentIdsSum(students) {
  const arrayNew = students.reduce((accumlator, currentValue) => (currentValue.id + accumlator), 0);
  return arrayNew;
}
