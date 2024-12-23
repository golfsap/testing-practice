import analyzeArray from "./analyzeArray";

const obj = analyzeArray([1, 8, 3, 4, 2, 6]);

test("average property", () => {
  expect(obj.average).toEqual(4);
});

test("min property", () => {
  expect(obj.min).toEqual(1);
});

test("max property", () => {
  expect(obj.max).toEqual(8);
});

test("length property", () => {
  expect(obj.length).toEqual(6);
});
