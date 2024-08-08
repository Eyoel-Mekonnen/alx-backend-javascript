export let weakMap = new WeakMap();


export function queryAPI(endpoint) {
  let count;
  if (!(weakMap.has(endpoint))) {
    count = 1;
    weakMap.set(endpoint, count);  
    //console.log("Is it here");
  } else {
    count = weakMap.get(endpoint);
    if (count >= 5) {
      throw Error('Endpoint load is high');
    } else {
      count += 1;
      weakMap.set(endpoint, count);
    }
  }
  return count;
}
