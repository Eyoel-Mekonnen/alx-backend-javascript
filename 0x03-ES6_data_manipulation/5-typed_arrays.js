export default function (length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  } else {
    int8[position] = value;
  }
  return buffer;
}
