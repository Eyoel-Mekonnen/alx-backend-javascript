export default function (set, array) {
  for (let i = 0; i < array.length; i += 1) {
    const value = set.has(array[i]);
    if (value === false) {
      return false;
    }
  }
  return true;
}
