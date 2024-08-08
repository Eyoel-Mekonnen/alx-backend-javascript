export default function cleanSet(set, startString) {
  let concat = '';
  if (!set || !startString || startString.length === 0) {
    return '';
  }
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const sliced = value.slice(startString.length);
      if (concat) {
        concat += `-${sliced}`;
      } else {
        concat = sliced;
      }
    }
  }
  return concat;
}
