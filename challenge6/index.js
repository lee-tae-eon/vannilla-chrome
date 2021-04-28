const h2 = document.querySelector("h2");
const form = document.querySelector(".js-form");
const rangeInput = document.querySelector(".range-input");
const numberInput = document.querySelector(".number-input");
const selectText = document.querySelector(".select-text");
const resultText = document.querySelector(".result-text");
const button = document.querySelector("button");

numberInput.style.width = "33px";

const handleRange = function () {
  h2.innerText = `Generate a number between 0 and ${this.value}`;
};
const handleButton = () => {
  const selectNumber = rangeInput.value * 1;
  const choseNumber = numberInput.value * 1;
  const randNumber = Math.floor(Math.random() * (selectNumber + 1));
  selectText.innerHTML = `You chose : ${choseNumber} , Machine chose :${randNumber}`;
  const winText = "You Win";
  const lostText = "You Lost";
  if (choseNumber === randNumber) {
    resultText.innerHTML = winText;
    resultText.style.color = "red";
  } else {
    resultText.innerHTML = lostText;
    resultText.style.color = "black";
  }
};

form.addEventListener("submit", (e) => e.preventDefault());
rangeInput.addEventListener("input", handleRange);
button.addEventListener("click", handleButton);
