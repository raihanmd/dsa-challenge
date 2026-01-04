// Day 1
// Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

export const evenOrOdd = (n: number): string =>
  (n & 1) === 0 ? "Even" : "Odd";
