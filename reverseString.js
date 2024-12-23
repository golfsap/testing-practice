export default function reverseString(str) {
  const arr = str.split("");
  let reversed = "";
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    reversed = reversed + arr[length - 1 - i];
  }
  return reversed;
}
