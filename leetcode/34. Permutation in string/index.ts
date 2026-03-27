// https://leetcode.com/problems/permutation-in-string/

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const s1Freq = new Array(26).fill(0);
  const s2Freq = new Array(26).fill(0);

  let matches = 0;

  for (let i = 0; i < s1.length; i++) {
    s1Freq[s1[i].charCodeAt(0) - 97] += 1;
    s2Freq[s2[i].charCodeAt(0) - 97] += 1;
  }

  for (let i = 0; i < 26; i++) {
    if (s1Freq[i] == s2Freq[i]) matches++;
  }

  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    if (matches == 26) return true;

    let idx = s2.charCodeAt(r) - 97;
    s2Freq[idx]++;
    if (s1Freq[idx] == s2Freq[idx]) {
      matches++;
    } else if (s1Freq[idx] + 1 == s2Freq[idx]) {
      matches--;
    }

    idx = s2.charCodeAt(l) - 97;
    s2Freq[idx]--;
    if (s1Freq[idx] === s2Freq[idx]) {
      matches++;
    } else if (s1Freq[idx] - 1 === s2Freq[idx]) {
      matches--;
    }
    l++;
  }

  return matches == 26;
}

console.log(checkInclusion("abasd", "asdoiasadb"));
