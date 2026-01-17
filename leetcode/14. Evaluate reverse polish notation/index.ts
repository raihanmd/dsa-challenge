// https://leetcode.com/problems/evaluate-reverse-polish-notation/
function evalRPN(tokens: string[]): number {
  const numbers: number[] = []

  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(+tokens[i])) {
      numbers.push(+tokens[i])
    } else {
      const x: number = numbers.pop()
      const y: number = numbers.pop()

      numbers.push(Math.round(calculate(+y, +x, tokens[i])))
    }
  }

  return numbers[0]
};

function calculate(x: number, y: number, operand: string) {
  switch (operand) {
    case "+":
      return x + y
    case "-":
      return x - y
    case "*":
      return x * y
    case "/":
      return Math.trunc(x / y)
  }
}
