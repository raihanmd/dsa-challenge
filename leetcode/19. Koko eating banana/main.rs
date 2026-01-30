struct Solution;

impl Solution {
    pub fn min_eating_speed(piles: Vec<i32>, h: i32) -> i32 {
        let (mut l, mut r) = (1, *piles.iter().max().unwrap());

        while l < r {
            let mid = l + (r - l) / 2;

            let mut hours = 0;
            for &p in &piles {
                hours += (p + mid - 1) / mid;
            }

            if hours <= h {
                r = mid;
            } else {
                l = mid + 1;
            }
        }

        l
    }
}

fn main() {
    let result = Solution::min_eating_speed(vec![3, 6, 7, 11], 8);

    println!("Result {}", result);
}
