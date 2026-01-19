// https://leetcode.com/problems/car-fleet/
function carFleet(target: number, position: number[], speed: number[]): number {
    const mapped = position.map((v, i)=>[v, speed[i]]).sort((a,b)=> b[0] - a[0])
    const stack = []
    for (let [p, s] of mapped) {
        stack.push((target-p)/s)
        if(stack.length >= 2 && stack[stack.length-1] <= stack[stack.length-2]) {
            stack.pop()
        }
    }
    return stack.length
};
