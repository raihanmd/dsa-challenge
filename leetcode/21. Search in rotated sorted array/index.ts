// https://leetcode.com/problems/search-in-rotated-sorted-array/
function search(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (target == nums[m]) return m;

    if (nums[l] <= nums[m]) {
      if (target < nums[l] || target > nums[m]) {
        l = m + 1
      } else {
        r = m - 1
      }
    } else {
      if (target < nums[m] || target > nums[r]) {
        r = m - 1
      } else {
        l = m + 1
      }
    }
  }
  return -1
};
