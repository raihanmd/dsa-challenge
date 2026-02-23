// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/1928376026/

function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let l = 0,
    res = 0;

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    res = Math.max(res, r - l + 1);
  }

  return res;
}

console.log(lengthOfLongestSubstring("pwwkew"));
