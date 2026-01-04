// Day 2
// Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

export function descendingOrder(n: number): number {
  return +String(n).split("").sort().reverse().join("");
}
