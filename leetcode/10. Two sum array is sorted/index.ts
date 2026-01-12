// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
function twoSum(numbers: number[], target: number): number[] {
  let l = 0
  let r = numbers.length - 1
  let result: number[] = []
  while (l < r) {
    if (numbers[l] + numbers[r] === target) {
      result.push(l + 1)
      result.push(r + 1)
      return result
    }
    if (numbers[l] + numbers[r] > target) {
      r--
    } else {
      l++
    }
  }
  return result
};
