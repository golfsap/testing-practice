import capitalize from "./capitalize";

test("capitalize one word", () => {
  expect(capitalize("golf")).toMatch("Golf");
});

test("capitalize sentence", () => {
  expect(capitalize("hello, there!")).toMatch("Hello, there!");
});
