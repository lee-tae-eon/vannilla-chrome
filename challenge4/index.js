// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>
const selectContry = document.querySelector("select");
const greeting = document.querySelector(".js-greeting");

const CONTRY_LS = "currentContry";
const SHOWING_CN = "showing";

function saveContry(text) {
  localStorage.setItem(CONTRY_LS, text);
}

function handleChoose(event) {
  event.preventDefault();
  const currentValue = selectContry.options[selectContry.selectedIndex].text;
  paintGreeting(currentValue);
  saveContry(currentValue);
  console.log(currentValue);
}

function chooseContry() {
  selectContry.addEventListener("change", handleChoose);
}

function paintGreeting(text) {
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `You are choose ${text}`;
}

function loadContry() {
  const currentContry = localStorage.getItem(CONTRY_LS);
  chooseContry();
  paintGreeting(currentContry);
}

function init() {
  loadContry();
}

init();
