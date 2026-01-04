//  Day 2
//  Vowel Count
//  https://www.codewars.com/kata/54ff3102c1bad923760001f3

export class Kata {
  static getCount(str: string): number {
    return str.match(/[aeiou]/gi)?.length ?? 0;
  }
}
