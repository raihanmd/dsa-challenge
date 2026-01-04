// Day 3
// Get the Middle Character
// https://www.codewars.com/kata/56747fd5cb988479af000028

export function getMiddle(s: string) {
  return s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s[Math.floor(s.length / 2)];
}
