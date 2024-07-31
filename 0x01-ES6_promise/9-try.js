export default function guardrail(mathFunction) {
  const array = [];

  try {
    array.push(mathFunction());
  } catch (error) {
    const err = error.message;
    const message = `Error: ${err}`;
    array.push(message);
  }
  array.push('Guardrail was processed');
  return array;
}
