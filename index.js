const displayResult = document.querySelector(".display-result");

const numberBtnList = document.querySelectorAll(".number");
const operatorBtnList = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal-btn");
const clearBtn = document.querySelector(".clear-btn")

let firstOperand = "",
  secondOperand = "",
  operator = null;

let displayContent;

function clearEverything() {
  firstOperand = "";
  secondOperand = "";
  operator = null;
}

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
  if (!Number.isInteger(ans)) return ans.toFixed(3);
  return ans;
}

numberBtnList.forEach((numberBtn) => {
  numberBtn.addEventListener("click", (e) => {
    if (displayResult.textContent == "0") {
      displayResult.textContent = e.target.textContent;
    } else {
      displayResult.textContent += e.target.textContent;
    }
  });
});

operatorBtnList.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    if (!operator) {
      firstOperand = Number(displayResult.textContent);
    } else {
      secondOperand = Number(displayResult.textContent);
    }

    if (operator && firstOperand && secondOperand) {
      firstOperand = operate(operator, firstOperand, secondOperand);

      secondOperand = "";
    }
    operator = e.target.textContent;
    displayResult.textContent = "";
  });
});

equalBtn.addEventListener("click", () => {
  if (!firstOperand && !secondOperand && !operator) return 0;
  if (!secondOperand) {
    secondOperand = Number(displayResult.textContent);
  }
  displayResult.textContent = operate(operator, firstOperand, secondOperand);
});


clearBtn.addEventListener("click",()=>{
    displayResult.textContent = 0
    clearEverything()
})