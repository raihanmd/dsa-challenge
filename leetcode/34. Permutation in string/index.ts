// https://leetcode.com/problems/permutation-in-string/

function checkInclusion(s1: string, s2: string): boolean {
  const initial: number[] = Array.from({ length: 26 }).map((_) => 0);
  const s1Freq = [...initial];

  for (let i = 0; i < s1.length; i++) {
    s1Freq[s1[i].charCodeAt(0) - 97] += 1;
  }

  let l = 0;

  let s2Freq = [...initial];

  for (let r = s1.length - 1; r < s2.length; r++) {
    for (let i = l; i <= r; i++) {
      s2Freq[s2[i].charCodeAt(0) - 97] += 1;
    }
    if (s1Freq.join("") === s2Freq.join("")) return true;
    l += 1;
    s2Freq = [...initial];
  }

  return false;
}
