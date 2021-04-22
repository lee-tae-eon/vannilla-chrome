const selectBody = document.querySelector("body");

const h2 = document.createElement("h2");
selectBody.appendChild(h2);
h2.innerHTML = "HELLO!";
h2.style.color = "white";

const BASE_COLOR = "#3498DB";
const PURPLE_COLOR = "#74418B";
const YELLOW_COLOR = "yellow";
const changeColor = () => {
  const currentWidth = window.outerWidth;
  if (currentWidth > 1200) {
    selectBody.style.backgroundColor = YELLOW_COLOR;
  } else if (currentWidth >= 600 && currentWidth < 1200) {
    selectBody.style.backgroundColor = PURPLE_COLOR;
  } else {
    selectBody.style.backgroundColor = BASE_COLOR;
  }
};
const init = () => {
  window.addEventListener("resize", changeColor);
};

init();
