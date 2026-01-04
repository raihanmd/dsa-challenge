// Day 2
// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035

export class Kata {
  static highAndLow(numbers: string): string {
    return (
      Math.max(...numbers.split(" ").map((val) => +val)) +
      " " +
      Math.min(...numbers.split(" ").map((val) => +val))
    );
  }
}
