// Global variables
const counterValue = document.querySelector(".counter__value");
const buttons = document.querySelectorAll(".counter__buttons");

// Counter value
let value = +counterValue.textContent;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const styles = e.target.classList[1];
    if (styles === "counter__button--increase") {
      ++value;
    } else if (styles === "counter__button--decrease") {
      --value;
    } else if (styles === "counter__button--reset") {
      value = 0;
    }

    counterValue.textContent = value;

    if (value < 0) {
      counterValue.style.color = "#ff0000";
    } else if (value > 0) {
      counterValue.style.color = "#008000";
    } else {
      counterValue.style.color = "#102a42";
    }
  });
});
