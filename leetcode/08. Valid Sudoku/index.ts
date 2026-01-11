// https://leetcode.com/problems/valid-sudoku/
function isValidSudoku(board: string[][]): boolean {
  const length = 9
  const rowSet: Record<number, Set<string>> = {}
  const colSet: Record<number, Set<string>> = {}
  const boxSet: Record<string, Set<string>> = {}

  // 0
  for (let row = 0; row < length; row++) {
    // 3
    for (let col = 0; col < length; col++) {
      if (!rowSet[row]) {
        rowSet[row] = new Set()
      }

      if (!colSet[row]) {
        colSet[row] = new Set()
      }

      const boxIndex = calculateBox(row, col).join(',')
      if (!boxSet[boxIndex]) {
        boxSet[boxIndex] = new Set()
      }

      if (rowSet[row].has(board[row][col])) return false
      if (board[row][col] !== ".") rowSet[row].add(board[row][col])

      if (colSet[row].has(board[col][row])) return false
      if (board[col][row] !== ".") colSet[row].add(board[col][row])

      if (boxSet[boxIndex].has(board[row][col])) return false
      if (board[row][col] !== ".") boxSet[boxIndex].add(board[row][col])
    }
  }
  return true
};

function calculateBox(row, col) {
  return [Math.floor(row / 3), Math.floor(col / 3)]
}
