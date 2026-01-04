// Day 2
// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e

export class Kata {
  static disemvowel(str: string): string {
    return [...str]
      .map((char) => ("aiueoAIUEO".includes(char) ? (char = "") : char))
      .join("");
  }
}
