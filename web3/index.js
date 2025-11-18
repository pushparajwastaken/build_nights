function bytestoAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}
const bytes = new Uint8Array([76, 97, 118, 97, 110, 121, 97]);
console.log(bytestoAscii(bytes));

function asctobytes(asciiString) {
  const arr = [];
  for (let i = 0; i < asciiString.length; i++) {
    arr.push(asciiString.charCodeAt(i));
  }
  return new Uint8Array(arr);
}
const str = "Lavanya";
console.log(asctobytes(str));
