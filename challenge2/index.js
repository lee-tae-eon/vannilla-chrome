const selectBody = document.querySelector("body");

const BASE_COLOR = "#3498DB";
const PUPPLE_COLOR = "#74418B";
const YELLOW_COLOR = "yellow";
const changeColor = () => {
  const currentWidth = window.innerWidth;
  if (currentWidth > 1200) {
    selectBody.style.backgroundColor = YELLOW_COLOR;
  } else if (currentWidth >= 800 && currentWidth < 1200) {
    selectBody.style.backgroundColor = PUPPLE_COLOR;
  } else {
    selectBody.style.backgroundColor = BASE_COLOR;
  }
};
const init = () => {
  window.addEventListener("resize", changeColor);
};

init();
