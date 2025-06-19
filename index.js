let firstOperand, secondOperand, operator;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 == 0) return "Error";
  return num1 / num2;
}

function operate(operator, firstOperand, secondOperand) {
  let ans = null;
  switch (operator) {
    case "+":
      ans = add(firstOperand, secondOperand);
      break;
    case "-":
      ans = subtract(firstOperand, secondOperand);
      break;
    case "*":
      ans = multiply(firstOperand, secondOperand);
      break;
    case "/":
      ans = divide(firstOperand, secondOperand);
      break;
  }
  return ans;
}

