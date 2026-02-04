// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  let res = nums[0]
  while (l <= r) {
    if (nums[r] >= nums[l]) {
      res = Math.min(res, nums[l])
      break;
    }

    let m = l + Math.floor((r - l) / 2)
    res = Math.min(res, nums[m]);
    if (nums[m] >= nums[l]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return res
};
