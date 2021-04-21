// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const challengeTag = document.querySelector("h2");

const superEventHandler = {
  mouseOn: function () {
    const mouseOnTag = challengeTag;
    mouseOnTag.innerHTML = "The mouse is here!";
    mouseOnTag.style.color = colors[0];
    mouseOnTag.style.cursor = "pointer";
  },
  mouseGone: function () {
    const mouseGoneTag = challengeTag;
    mouseGoneTag.innerHTML = "The mouse is gone!";
    mouseGoneTag.style.color = colors[1];
  },
  mouseRight: function () {
    const mouseRightTag = challengeTag;
    mouseRightTag.innerHTML = "That was right click!";
    mouseRightTag.style.color = colors[4];
  },
  windowResize: function () {
    const windowResizeTag = challengeTag;
    windowResizeTag.innerHTML = "You just resized";
    windowResizeTag.style.color = colors[2];
  },
};
const init = () => {
  challengeTag.addEventListener("mouseover", superEventHandler.mouseOn);
  challengeTag.addEventListener("mouseleave", superEventHandler.mouseGone);
  window.addEventListener("contextmenu", superEventHandler.mouseRight);
  window.addEventListener("resize", superEventHandler.windowResize);
};

init();
