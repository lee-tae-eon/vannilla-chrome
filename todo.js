const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// 할일 목록 toDos array에 담기
let toDos = [];
// 삭제
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // filter() - 각각의 item에 필터링
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}
// 저장
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
// 삭제 버튼, 할일 리스트 엘레멘트 추가
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "×";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


// 저장 목록 가져오기
function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
        const parsedToDos = JSON.parse(loadToDos);
        // forEach - array에 담겨있는 것들 각각에 함수를 한번씩 실행시켜줌
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();