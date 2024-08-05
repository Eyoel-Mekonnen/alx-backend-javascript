export default function getListStudentsIds(array) {
  if (Array.isArray(array)) {
    const newArray = array.map((element) => (element.id));
    return newArray;
  }
  return [];
}
