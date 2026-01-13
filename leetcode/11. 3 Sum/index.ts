// https://leetcode.com/problems/3sum/
function threeSum(nums: number[]): number[][] {
  const sorted = nums.sort((a, b) => a - b)

  const result: number[][] = []
  for (let a = 0; a < sorted.length - 1; a++) {
    if (a > 0 && sorted[a] === sorted[a - 1]) continue
    let l = a + 1
    let r = sorted.length - 1
    while (l < r) {
      const temp = sorted[a] + sorted[l] + sorted[r]
      if (temp == 0) {
        result.push([sorted[a], sorted[l], sorted[r]])

        while (l < r && nums[l] === nums[l + 1]) l++
        while (l < r && nums[r] === nums[r - 1]) r--

        l++
        r--

      } else if (temp > 0) {
        r--
      } else {
        l++
      }
    }
  }

  return result
};
