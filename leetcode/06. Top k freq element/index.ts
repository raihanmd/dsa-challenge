function topKFrequent(nums: number[], k: number): number[] {
  // https://leetcode.com/problems/top-k-frequent-elements/
  const freq: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    if (!freq[nums[i]]) freq[nums[i]] = 0
    freq[nums[i]]++
  }
  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => Number(num))
};
