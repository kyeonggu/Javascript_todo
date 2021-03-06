const TODO_INPUT = document.getElementById("todoInput");
const TODO_SUBMIT_BUTTON = document.getElementById("todoCreate");
const TODO_WRAP = document.querySelector(".todo-main ul");
const TODO_ALL_DELETE = document.querySelector(".all-delete");
let isRun = false;

function todoAdd(){
    if(TODO_INPUT.value == "") {
        alert("할 일을 입력해주세요.");
    } else{
        let todoText = TODO_INPUT.value;
        addEvent(todoText);
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

        isRun = false;
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

function todoAllDelete() {
    TODO_WRAP.innerHTML = "";

    const NO_DATA = document.createElement("li");
    NO_DATA.classList.add("no-data");
    NO_DATA.innerHTML = "데이터가 없습니다."
    TODO_WRAP.append(NO_DATA);
    isRun = false;
}


function addEvent(value) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-box");
    todoItem.innerHTML = `<label for="todo-check"></label><input type="checkbox" class="todo-check"><p class="todo-comment">${value}</p><button class="todo-delete">삭제</button>`;
    TODO_WRAP.appendChild(todoItem);
    TODO_INPUT.value = "";
    deleteEvent();
    checkEvent();

    let todoItemLength = document.getElementsByClassName("todo-box").length;
    if(todoItemLength >= 1 && isRun == false) {
        const NO_DATA = document.querySelector(".no-data");
        NO_DATA.remove();

        isRun = true;
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

function enterKey() {
    if(window.event.keyCode == 13) {
        todoAdd();
    }
}

TODO_SUBMIT_BUTTON.addEventListener("click", todoAdd);
TODO_ALL_DELETE.addEventListener("click", todoAllDelete);