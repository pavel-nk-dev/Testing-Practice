import { capitalize } from "./main";

test("capitalize", () => {
  expect(capitalize("let's go!")).toBe("Let's go!");
  expect(capitalize("javascript")).toBe("Javascript");
  expect(capitalize("   react   ")).toBe("React");
  expect(capitalize("123")).toBe("123");
  expect(capitalize(100)).toBe("");
  expect(capitalize(undefined)).toBe("");
});
