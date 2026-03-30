// https://leetcode.com/problems/trapping-rain-water/description/

function trap(height: number[]): number {
  let sum: number[] = [];

  let l = 0,
    r = height.length - 1,
    maxL = height[l],
    maxR = height[r];

  while (l <= r) {
    if (maxL <= maxR) {
      const trapped = maxL - height[l];
      sum[l] = trapped > 0 ? trapped : 0;
      maxL = Math.max(maxL, height[l]);
      l++;
    } else {
      const trapped = maxR - height[r];
      sum[r] = trapped > 0 ? trapped : 0;
      maxR = Math.max(maxR, height[r]);
      r--;
    }
  }

  return sum.reduce((a, b) => a + b, 0);
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
