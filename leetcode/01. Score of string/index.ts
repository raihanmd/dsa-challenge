// https://leetcode.com/problems/score-of-a-string/

function scoreOfString(s: string): number {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    if (i + 1 >= s.length) break

    const charCodeA = s.charCodeAt(i)
    const charCodeB = s.charCodeAt(i + 1)

    result += Math.abs(charCodeA - charCodeB)
  }

  return result
};

// This approach resulting O(n) time complexity and O(1) of space complexity
