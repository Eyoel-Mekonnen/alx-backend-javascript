export default function getStudnetsByLocation(students, location) {
  const newArray = students.filter((element) => element.location === location);
  return newArray;
}
