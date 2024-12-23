import caesarCipher from "./caesarCipher";

test("shift a word", () => {
  expect(caesarCipher("abc", 3)).toMatch("def");
});

test("shift with wrapping", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});

test("shift with case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

test("punctuation, spaces and non-alphabetical characters unchanged", () => {
  expect(caesarCipher("Hello, World!Z", 3)).toMatch("Khoor, Zruog!C");
});

test("negative shift", () => {
  expect(caesarCipher("aBc", -1)).toMatch("zAb");
});
