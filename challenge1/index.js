// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
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
