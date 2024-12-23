export default function Calculator(a, b) {
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) {
      throw new Error("cannot divide by zero");
    }
    return a / b;
  }

  return { add, subtract, multiply, divide };
}