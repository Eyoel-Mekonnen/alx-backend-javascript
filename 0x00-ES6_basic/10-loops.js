export default function appendToEachArrayValue(array, appendString) {
  const copyArray = [];
  for (const idx of array) {
    const value = array[idx];
    copyArray[idx] = appendString + value;
  }
  return copyArray;
}
