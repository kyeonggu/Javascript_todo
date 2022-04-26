const TODO_INPUT = document.getElementById("todoInput");
const TODO_SUBMIT_BUTTON = document.getElementById("todoCreate");
const TODO_WRAP = document.querySelector(".todo-main ul");

function todoAdd(){
    if(TODO_INPUT.value == "") {
        alert("할 일을 입력해주세요.");
    } else{
        let todoText = TODO_INPUT.value;
        addTesk(todoText);
    }
}

function addTesk(value) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-box");
    todoItem.innerHTML = `<label for="todo-check"></label><input type="checkbox" class="todo-check"><p>${value}</p><button class="todo-delete">삭제</button>`;
    TODO_WRAP.appendChild(todoItem);
    TODO_INPUT.value = "";
    deleteEvent();
    checkEvent();

    let todoItemLength = document.getElementsByClassName("todo-box").length;
    if(todoItemLength >= 1) {
        const NO_DATA = document.querySelector(".no-data");
        NO_DATA.remove();
    }
}

function todoDelete(e) {
    const DELETE_ELEMENT = e.target.parentNode;
    DELETE_ELEMENT.remove();

    let todoItemLength = document.getElementsByClassName("todo-box").length;
    const NO_DATA = document.createElement("li");
    NO_DATA.classList.add("no-data");
    NO_DATA.innerHTML = "데이터가 없습니다."

    if(todoItemLength == 0) {
        TODO_WRAP.appendChild(NO_DATA);
    }
}

function todoCheck(e) {
    const CHECK_ELEMENT = e.target.parentNode;

    if(e.target.checked == true) {
        CHECK_ELEMENT.classList.add("checked");
    } else {
        CHECK_ELEMENT.classList.remove("checked");
    }
}

function deleteEvent() {
    const TODO_DELETE_BUTTON = document.querySelectorAll(".todo-delete");

    for(var i=0; i<TODO_DELETE_BUTTON.length; i++) {
        TODO_DELETE_BUTTON[i].addEventListener("click", todoDelete);
    }
}

function checkEvent() {
    const TODO_CHECKBOX = document.querySelectorAll(".todo-check");

    for(var i=0; i<TODO_CHECKBOX.length; i++) {
        TODO_CHECKBOX[i].addEventListener("click", todoCheck);
    }
}

TODO_SUBMIT_BUTTON.addEventListener("click", todoAdd);