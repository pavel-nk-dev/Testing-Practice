"use strict";

function capitalize(str = "") {
  if (typeof str !== "string") return "";
  const normalizedStr = str.trim();
  return normalizedStr.charAt(0).toUpperCase() + normalizedStr.slice(1);
}

function reverseString(str = "") {
  if (typeof str !== "string") return "";
  return str.trim().split("").reverse().join("");
}

const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  divide(num1, num2) {
    if (num2 === 0) return false;
    return num1 / num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  },
};

function caesarCipher(str, shift) {}

function analyzeArray(array) {}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
