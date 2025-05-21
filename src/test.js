import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main";

test("capitalize", () => {
  expect(capitalize("let's go!")).toBe("Let's go!");
  expect(capitalize("javascript")).toBe("Javascript");
  expect(capitalize("   react   ")).toBe("React");
  expect(capitalize("123")).toBe("123");
  expect(capitalize(100)).toBe("");
  expect(capitalize(undefined)).toBe("");
});

test("reverse string", () => {
  expect(reverseString("let's go!")).toBe("!og s'tel");
  expect(reverseString("javascript")).toBe("tpircsavaj");
  expect(reverseString("   react   ")).toBe("tcaer");
  expect(reverseString("123")).toBe("321");
  expect(reverseString(100)).toBe("");
  expect(reverseString(null)).toBe("");
});

test("calculator", () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(-1, 1)).toBe(0);
  expect(calculator.add(0, 0)).toBe(0);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.subtract(0, 0)).toBe(0);
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.divide(1, 1)).toBe(1);
  expect(calculator.divide(0, 0)).toBe(false);
  expect(calculator.multiply(3, 3)).toBe(9);
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.multiply(1, 1)).toBe(1);
});

test("caesar cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("xyz", -3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher(null, null)).toBe("");
});

test("analyze array", () => {});
