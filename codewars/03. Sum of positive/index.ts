// Day 2
// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381

export const positiveSum = (arr: number[]): number =>
  arr.filter((a) => a > 0).reduce((a, b) => a + b, 0);
