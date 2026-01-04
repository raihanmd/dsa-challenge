// Day 4
// Stop gninnipS My sdroW
// https://www.codewars.com/kata/5264d2b162488dc400000001

export function spinWords(words: string): string {
  return words
    .split(" ")
    .map((_) => (_.length >= 5 ? _.split("").reverse().join("") : _))
    .join(" ");
}
