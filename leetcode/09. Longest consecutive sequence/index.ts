// https://leetcode.com/problems/longest-consecutive-sequence/
function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0
    const set = new Set(nums)
    let longest = 1
    
    for (const num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num
            let streak = 1

            while (set.has(currentNum + 1)) {
                currentNum++
                streak++
            }

            longest = Math.max(longest, streak)
        }
    }
    return longest
};