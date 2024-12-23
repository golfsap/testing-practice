import reverseString from "./reverseString";

test("reverse one word string", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("reverse sentence", () => {
  expect(reverseString("hello there, nice to meet you.")).toMatch(
    ".uoy teem ot ecin ,ereht olleh"
  );
});
