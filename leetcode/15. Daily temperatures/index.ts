// https://leetcode.com/problems/daily-temperatures/submissions/1888510493/
function dailyTemperatures(temp: number[]): number[] {
  const stack: number[] = []
  const result = new Array(temp.length).fill(0)

  for (let i = 0; i < temp.length; i++) {
    while (
      stack.length &&
      temp[i] > temp[stack[stack.length - 1]]
    ) {
      const prev = stack.pop()!
      result[prev] = i - prev
    }
    stack.push(i)
  }

  return result
};
