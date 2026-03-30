function trap(height: number[]): number {
  let res = 0;

  let maxLArr = [],
    maxRArr = [],
    minLR = [];

  let maxL = 0,
    maxR = 0;

  for (let i = 0; i < height.length; i++) {
    maxLArr.push(maxL);
    maxL = Math.max(maxL, height[i]);
  }

  for (let i = height.length - 1; i >= 0; i--) {
    maxRArr[i] = maxR;
    maxR = Math.max(maxR, height[i]);
  }

  for (let i = 0; i < height.length; i++) {
    minLR.push(Math.min(maxLArr[i], maxRArr[i]));
  }

  for (let i = 0; i < height.length; i++) {
    const trapped = minLR[i] - height[i];
    if (trapped > 0) res += trapped;
  }

  return res;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
