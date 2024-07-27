export default function appendToEachArrayValue(array, appendString) {
  const copyArray = array;
  for (const idx of copyArray) {
    const value = copyArray[idx];
    copyArray[idx] = appendString + value;
  }
  return copyArray;
}
