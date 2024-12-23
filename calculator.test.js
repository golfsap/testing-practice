import Calculator from "./calculator";

const calc = Calculator();

test("add two numbers", () => {
  expect(calc.add(2, 2)).toBe(4);
});

test("add two floating point numbers", () => {
  expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("subtract two numbers", () => {
  expect(calc.subtract(4, 5)).toBe(-1);
});

test("multiply two numbers", () => {
  expect(calc.multiply(3, 3)).toBe(9);
});

test("divide two numbers", () => {
  expect(calc.divide(12, 4)).toBe(3);
});

test("divide by zero", () => {
  expect(() => {
    calc.divide(2, 0);
  }).toThrow(Error);
  expect(() => calc.divide(3, 0)).toThrow("cannot divide by zero");
});
