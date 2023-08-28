// Global variables
const counterValue = document.querySelector(".counter__value");
const buttons = document.querySelectorAll(".counter__buttons");

// Counter value
let value = +counterValue.textContent;

const valueCounterStorage = window.localStorage.getItem("valueCounter");
const styleColorStorage = window.localStorage.getItem("styleColor");
if (valueCounterStorage && styleColorStorage) {
  counterValue.textContent = valueCounterStorage;
  value = +valueCounterStorage;
  counterValue.style.color = styleColorStorage;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const styles = e.target.classList[1];
    if (styles === "counter__button--increase") {
      ++value;
      window.localStorage.setItem("valueCounter", value);
    } else if (styles === "counter__button--decrease") {
      --value;
      window.localStorage.setItem("valueCounter", value);
    } else if (styles === "counter__button--reset") {
      value = 0;
      window.localStorage.setItem("valueCounter", value);
    }

    counterValue.textContent = value;

    if (value < 0) {
      const color = "#ff0000";
      counterValue.style.color = color;
      window.localStorage.setItem("styleColor", color);
    } else if (value > 0) {
      const color = "#008000";
      counterValue.style.color = color;
      window.localStorage.setItem("styleColor", color);
    } else {
      const color = "#102a42";
      counterValue.style.color = color;
      window.localStorage.setItem("styleColor", color);
    }
  });
});
