export default function caesarCipher(str, shift) {
  let shifted = "";
  const arr = str.split("");
  for (const letter of arr) {
    let charCode = letter.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      charCode = mod(charCode - 65 + shift, 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = mod(charCode - 97 + shift, 26) + 97;
    }

    shifted += String.fromCharCode(charCode);
  }

  // fix for modulo instead of remainder
  function mod(n, m) {
    return ((n % m) + m) % m;
  }
  return shifted;
}
