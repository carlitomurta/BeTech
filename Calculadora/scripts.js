const wrapper = document.querySelector(".wrapper");
const display = document.getElementById("display");
const keys = document.querySelector(".pad");

keys.addEventListener("click", (element) => {
  if (element.target.matches("button")) {
    const key = element.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayNumber = display.textContent;

    if (!action) {
      if (displayNumber === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNumber + keyContent;
      }
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("its an operator");
    }

    if (action === "decimal") {
      if (!displayNumber.includes(".")) {
        display.textContent = displayNumber + ".";
      } else {
        display.textContent = "0.";
      }
    }

    if (action === "calculate") {
      console.log("its equals");
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

  if (Number(e.key)) {
    if (display.textContent === "0") {
      display.textContent = e.key;
    } else {
      display.textContent = display.textContent + e.key;
    }
  }
});
