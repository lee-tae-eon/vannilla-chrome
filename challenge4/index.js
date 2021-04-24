// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>
const selectContry = document.querySelector("select"),
  option = document.querySelectorAll("option");

const CONTRY_LS = "currentContry";

function loadContry() {
  const currentUser = localStorage.getItem(CONTRY_LS);
  if (currentUser === null) {
  } else {
  }
}

function init() {}

init();
