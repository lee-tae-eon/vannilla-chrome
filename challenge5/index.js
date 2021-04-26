const form = document.querySelector(".js-toDoForm"),
  input = form.querySelector("input"),
  pendingList = document.querySelector(".pending-toDoList"),
  finishedList = document.querySelector(".finished-toDoList");

const PENDING_TODOS_LS = "pending";
const FINISHED_TODOS_LS = "finished";

let pendingToDos = [];
let finishedToDos = [];
// 펜딩 리스트와 피니쉬 리스트의 스위치 함수 두개선언
function switchPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.childNodes[0];
  paintPending(span.outerText);

  finishedList.removeChild(li);
  const cleanFinished = finishedToDos.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  finishedToDos = cleanFinished;
  saveToDos();
}
function switchFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.childNodes[0];
  paintFinished(span.outerText);

  pendingList.removeChild(li);
  const cleanPending = pendingToDos.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  pendingToDos = cleanPending;
  saveToDos();
}
// 삭제 함수 : 삭제시 두 board의 아이디가 같기에 parentNode를 비교해서 어느 것을 삭제할 지 찾아줌. 근데 아래서 서로 다른 아이디를 가지도록해서
// 지워도 작동 될지 모르겠다.
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  if (li.parentNode === pendingList) {
    pendingList.removeChild(li);
    const cleanPending = pendingToDos.filter(function (toDo) {
      return toDo.id !== li.id;
    });
    pendingToDos = cleanPending;
    saveToDos();
  } else if (li.parentNode === finishedList) {
    finishedList.removeChild(li);
    const cleanFinished = finishedToDos.filter(function (toDo) {
      return toDo.id !== li.id;
    });
    finishedToDos = cleanFinished;
    saveToDos();
  }
}

function saveToDos() {
  localStorage.setItem(PENDING_TODOS_LS, JSON.stringify(pendingToDos));
  localStorage.setItem(FINISHED_TODOS_LS, JSON.stringify(finishedToDos));
}
//같은 아이디가 있는지 체크후 뒤에 H를 붙여줌

function paintFinished(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const returnBtn = document.createElement("button");
  // 중복 아이디 체크후 중복아이디가 있으면 변경을 위해 let으로 선언
  let newId = finishedToDos.length + 1 + "F";

  function check(elem) {
    if (elem.id === newId) {
      return (newId += "H");
    }
  }
  let i = 0;
  for (i = 0; i <= finishedToDos.length; i++) {
    // console.log(i);
    finishedToDos.some(check);
  }

  delBtn.addEventListener("click", deleteToDo);
  returnBtn.addEventListener("click", switchPending);

  delBtn.innerText = "❌";
  returnBtn.innerText = "⏪";

  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(returnBtn);
  li.id = newId;
  finishedList.appendChild(li);
  const finishObj = {
    text: text,
    id: newId,
  };
  finishedToDos.push(finishObj);
  saveToDos();
}
function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const switchBtn = document.createElement("button");
  // 중복 아이디 체크후 중복아이디가 있으면 변경을 위해 let으로 선언
  let newId = pendingToDos.length + 1 + "P";

  function check(elem) {
    if (elem.id === newId) {
      return (newId += "H");
    }
  }
  // 배열안의 길이만큼 중복체크를 해주자. 안그럼 4p, 4ph가 있는상황에서 4번째로 들어온다면 4p만 체크되고 다시 H를 4p에만 붙이기에 4ph가 중복되는 현상이생겼다.
  // 그래서 for문을 이용해 길이만큼 중복체크를 반복문 돌렸다.
  let i = 0;
  for (i = 0; i <= pendingToDos.length; i++) {
    // console.log(i);
    pendingToDos.some(check);
  }

  delBtn.addEventListener("click", deleteToDo);
  switchBtn.addEventListener("click", switchFinished);
  delBtn.innerText = "❌";
  switchBtn.innerText = "✅";

  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(switchBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };

  pendingToDos.push(toDoObj);

  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintPending(currentValue);
  input.value = "";
}

function loadPending() {
  const loadPending = localStorage.getItem(PENDING_TODOS_LS);
  const loadFinised = localStorage.getItem(FINISHED_TODOS_LS);
  if (loadPending !== null && loadFinised != null) {
    const parsedPending = JSON.parse(loadPending);
    parsedPending.forEach(function (toDo) {
      paintPending(toDo.text);
    });
    const parseFinised = JSON.parse(loadFinised);
    parseFinised.forEach(function (toDo) {
      paintFinished(toDo.text);
    });
  } else {
  }
}

function init() {
  loadPending();
  form.addEventListener("submit", handleSubmit);
}
init();
