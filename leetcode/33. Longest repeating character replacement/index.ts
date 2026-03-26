// https://leetcode.com/problems/longest-repeating-character-replacement/description/

function characterReplacement(s: string, k: number): number {
  let l = 0;
  let mostF = 0;
  let result = 0;

  const freq = new Map();

  for (let i = 0; i < s.length; i++) {
    freq.set(s[i], (freq.get(s[i]) || 0) + 1);
    mostF = Math.max(mostF, freq.get(s[i]));

    while (i - l + 1 - mostF > k) {
      freq.set(s[l], (freq.get(s[l]) || 0) - 1);
      l++;
      mostF = Math.max(...freq.values());
    }

    result = Math.max(result, i - l + 1);
  }

  return result;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
