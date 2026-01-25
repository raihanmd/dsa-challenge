// https://leetcode.com/problems/search-a-2d-matrix/submissions/1896209631/

struct Solution;

impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        if matrix.is_empty() {
            return false;
        }

        let (mut l, mut r) = (0, matrix.len() - 1);

        while l <= r {
            let mid = l + (r - l) / 2;

            if target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].len() - 1] {
                return Solution::find_binary_search(&matrix[mid], target);
            } else if matrix[mid][0] > target {
                if mid == 0 {
                    break;
                }
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        false
    }

    pub fn find_binary_search(arr: &Vec<i32>, target: i32) -> bool {
        if arr.is_empty() {
            return false;
        }

        let mut l = 0;
        let mut r = arr.len() - 1;

        while l <= r {
            let mid = l + (r - l) / 2;
            if arr[mid] == target {
                return true;
            } else if arr[mid] > target {
                if mid == 0 {
                    break;
                }
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        false
    }
}

fn main() {
    let q = vec![vec![1, 3, 5, 7], vec![10, 11, 16, 20], vec![23, 30, 34, 60]];
    let target = 60;

    let result = Solution::search_matrix(q, target);

    assert_eq!(result, true);
}
