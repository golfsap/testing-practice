export default function analyzeArray(arr) {
  return {
    average: arr.reduce((a, b) => a + b) / arr.length,
    min: arr.reduce((a, b) => (a < b ? a : b)),
    max: arr.reduce((a, b) => (a > b ? a : b)),
    length: arr.length,
  };
}
