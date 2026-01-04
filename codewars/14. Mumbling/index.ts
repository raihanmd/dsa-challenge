// Day 3
// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s: string): string {
  return [...s]
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}
