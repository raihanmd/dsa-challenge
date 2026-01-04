// Day 2
// Square Every Digit
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

export class Kata {
  static squareDigits(num: number): number {
    return +String(num)
      .split("")
      .map((val) => Math.pow(Number(val), 2))
      .join("");
  }
}
