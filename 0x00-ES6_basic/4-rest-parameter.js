export default function returnHowManyArguments(...args) {
  let counter = 0;
  for (let i = 0; i < args.length; i += 1) {
    counter += 1;
  }
  return counter;
}
