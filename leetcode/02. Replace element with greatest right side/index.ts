// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
function replaceElements(arr: number[]): number[] {
  let maxCurr = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = arr[i]
    arr[i] = maxCurr
    maxCurr = Math.max(maxCurr, curr)
  }
  return arr
};
