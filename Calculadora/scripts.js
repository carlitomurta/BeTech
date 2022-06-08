const wrapper = document.querySelector(".wrapper");
const display = document.getElementById("display");
const keys = document.querySelector(".pad");

let firstValue = 0,
  lastValue = 0,
  operator = "";

keys.addEventListener("click", (element) => {
  if (element.target.matches("button")) {
    const key = element.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayNumber = display.textContent;

    if (!action) {
      insertNumber(keyContent);
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      insertOperator(action);
    }

    if (action === "decimal") {
      if (!displayNumber.includes(".")) {
        display.textContent = displayNumber + ".";
      } else {
        display.textContent = "0.";
      }
    }

    if (action === "calculate") {
      calculate();
    }

    if (action === "clear") {
      firstValue = 0;
      lastValue = 0;
      operator = "";
      display.textContent = "0";
    }
  }
});

document.addEventListener("keydown", (e) => {
  const length = display.textContent.length;
  if (e.key === "Backspace" && display.textContent !== "0" && length > 0) {
    if (length === 1) {
      display.textContent = "0";
    } else {
      display.textContent = display.textContent.slice(0, length - 1);
    }
  }

  switch (e.key) {
    case "+":
      insertOperator("add");
      break;
    case "-":
      insertOperator("subtract");
      break;
    case "*":
      insertOperator("multiply");
      break;
    case "/":
      insertOperator("divide");
      break;
  }

  if (e.key === "Enter") {
    calculate();
  }

  if (Number(e.key) >= 0) {
    insertNumber(e.key);
  }
});

function calculate() {
  let value;
  switch (operator) {
    case "add":
      value = firstValue + lastValue;
      break;
    case "subtract":
      value = firstValue - lastValue;
      break;
    case "multiply":
      value = firstValue * lastValue;
      break;
    case "divide":
      value = firstValue / lastValue;
      break;
  }
  if (value.toString().includes(".")) {
    value = value.toFixed(4).toString();
  } else {
    value = value.toString();
  }
  display.textContent = value;
}

function insertOperator(action) {
  operator = action;
  display.textContent = "0";
  console.log(operator);
}

function insertNumber(value) {
  let aux;
  if (value) {
    if (display.textContent === "0") {
      aux = value;
    } else {
      aux = display.textContent + value;
    }
    if (operator) {
      lastValue = Number(aux);
    } else {
      firstValue = Number(aux);
    }
    display.textContent = aux;
  }
}
