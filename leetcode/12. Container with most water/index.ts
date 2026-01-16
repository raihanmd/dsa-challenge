// https://leetcode.com/problems/container-with-most-water/description/
function maxArea(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let greatest = calculate(Math.min(height[l], height[r]), r - l)

  while (l < r) {
    let temp = calculate(Math.min(height[l], height[r]), r - l)

    greatest = Math.max(temp, greatest)

    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }

  return greatest
};

function calculate(h: number, l: number) {
  return l * h
}
