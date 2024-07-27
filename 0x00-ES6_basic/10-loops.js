export default function appendToEachArrayValue(array, appendString) {
  const copyArray = [];
  for (const idx of array) {
    copyArray.push(appendString + idx);
  }
  return copyArray;
}
