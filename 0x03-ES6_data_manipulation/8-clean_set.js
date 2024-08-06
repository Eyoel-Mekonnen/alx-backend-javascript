export default function cleanSet(set, startString) {
  let concat = '';
  if (startString.length === 0) {
    return '';
  }
  for (const value of set) {
    const output = value.startsWith(startString);
    if (output === true) {
      const slice = value.slice(startString.length);
      if (concat) {
        concat += `-${slice}`;
      } else {
        concat = slice;
      }
    }
  }
  return concat;
}
