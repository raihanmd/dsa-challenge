// https://leetcode.com/problems/minimum-window-substring/

function minWindow(s: string, t: string): string {
  if (t.length > s.length) return "";

  const tMap: Record<string, number> = {};
  const window: Record<string, number> = {};

  for (let c of t) {
    tMap[c] = (tMap[c] || 0) + 1;
  }

  let result: string | null = null;

  let have = 0,
    need = Object.keys(tMap).length;

  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const c = s[r];
    window[c] = (window[c] || 0) + 1;

    if (tMap[c] && window[c] === tMap[c]) {
      have++;
    }

    while (have === need) {
      if (!result || r - l + 1 < result.length) {
        result = s.substring(l, r + 1);
      }

      const leftChar = s[l];
      window[leftChar]--;
      if (tMap[leftChar] && window[leftChar] < tMap[leftChar]) {
        have--;
      }
      l++;
    }
  }

  return result || "";
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
