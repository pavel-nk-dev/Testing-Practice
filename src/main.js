"use strict";

const capitalize = (str = "") => {
  if (typeof str !== "string") return "";
  const normalizedStr = str.trim();
  return normalizedStr.charAt(0).toUpperCase() + normalizedStr.slice(1);
};

const reverseString = (str = "") => {
  if (typeof str !== "string") return "";
  return str.trim().split("").reverse().join("");
};

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
const caesarCipher = (str, shift) => {
  if (typeof str !== "string" || typeof shift !== "number") return "";
  if (shift < 0) shift = Math.abs(shift);
  const ENG_ALPHABET = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const isLetter = (char) => {
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  };

  const isLowerCaseLetter = (letter) => {
    console.log(letter);
    return letter.toLowerCase() === letter;
  };

  const result = str
    .split("")
    .map((letter) => {
      console.log(letter);
      if (!isLetter(letter)) return letter;
      const cipher =
        ENG_ALPHABET[(ENG_ALPHABET.indexOf(letter.toLowerCase()) + shift) % 26];

      console.log(letter, cipher);
      if (isLowerCaseLetter(letter)) return cipher;
      return cipher.toUpperCase();
    })
    .join("");

  return result;
};

function analyzeArray(array) {}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
