export default function taskBlock(trueorFalse) {
  let task = false;
  let task2 = true;

  if (trueorFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
