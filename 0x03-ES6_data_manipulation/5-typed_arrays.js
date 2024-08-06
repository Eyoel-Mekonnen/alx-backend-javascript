export default function (length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const viewBuff = new DataView(buffer);
  viewBuff.setInt8(position, value);
  return viewBuff;
}
