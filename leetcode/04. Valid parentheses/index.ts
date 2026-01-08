// https://leetcode.com/problems/valid-parentheses/
function isValid(s: string): boolean { // ()
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (!parentheses[s[i]]) {
      const startPair = parenthesesBack[s[i]]
      if (startPair != stack[stack.length - 1]) {
        return false
      }
      stack.pop()
      continue;
    }

    stack.push(s[i])
  }
  return stack.length == 0
};

const parentheses = {
  "[": "]",
  "{": "}",
  "(": ")"
}

const parenthesesBack = {
  "]": "[",
  "}": "{",
  ")": "("
}
