// https://leetcode.com/problems/product-of-array-except-self/
function productExceptSelf(nums: number[]): number[] {
  let prefix = 1
  let result: number[] = []
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix
    prefix *= nums[i]
  }
  prefix = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= prefix
    prefix *= nums[i]
  }
  return result
};
