export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count;
  if (!(weakMap.has(endpoint))) {
    count = 1;
    weakMap.set(endpoint, count);
  } else {
    count = weakMap.get(endpoint);
    count += 1;
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, count);
    }
  }
  return count;
}
