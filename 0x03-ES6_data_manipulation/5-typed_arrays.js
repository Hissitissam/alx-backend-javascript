/**
 * Function that returns a new ArrayBuffer with an Int8 value at a specific position.
 * 
 * @param {Number} length - The length of the ArrayBuffer
 * @param {Number} position - The position in the ArrayBuffer to set the value
 * @param {Number} value - The Int8 value to set at the specified position
 * @returns {ArrayBuffer} The newly created ArrayBuffer
 * @throws {Error} If the position is outside the range of the ArrayBuffer
 */ 

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
