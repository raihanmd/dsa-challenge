// https://leetcode.com/problems/group-anagrams/
function groupAnagrams(strs: string[]): string[][] {
  // ["eat","tea","tan","ate","nat","bat"]
  // [["bat"],["nat","tan"],["ate","eat","tea"]]

  const result: Record<string, string[]> = {}
  // m * n; m => strs.len; n => longest str
  for (let i = 0; i < strs.length; i++) {
    const freq = new Array(29).fill(0)

    for (let s of strs[i]) {
      freq[s.charCodeAt(0) - 97]++
    }

    const key = JSON.stringify(freq)

    if (!result[key]) result[key] = []
    result[key].push(strs[i])
  }
  return [...Object.values(result)]
};
