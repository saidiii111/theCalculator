const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
// adding addEventListener and use dataset property to define specific action
keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;

    if (!action) {
      console.log("number key!");
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
    }

    if (action === "decimal") {
      console.log("decimal key!");
    }
    if (action === "clear") {
      console.log("clear key!");
    }
    if (action === "calculate") {
      console.log("equal key!");
    }
  }
});
// adding addEventListener onClick to show the clicked num using textContent property
const display = document.querySelector(".calculator__display");
keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    // adding the logic to add a clicked num instead for default 0 num, and if another num get append
    if (!action) {
      if (displayedNum === "0") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (action === "decimal") {
      display.textContent = displayedNum + ".";
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("is-depressed");
    }
  }
});
