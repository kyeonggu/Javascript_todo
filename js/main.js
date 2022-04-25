const TODO_INPUT = document.getElementById("todoInput");
const TODO_SUBMIT_BUTTON = document.getElementById("todoCreate");
const TODO_CHECK_BOX = document.querySelectorAll(".todo-check");
const TODO_DELETE_BUTTON = document.querySelectorAll(".todo-delete");
const TODO_WRAP = document.querySelector(".todo-main ul");

let todos = [];
let id = 0;

function todoAdd(){
    if(TODO_INPUT.value == "") {
        alert("할 일을 입력해주세요.");
    } else{
        let todoText = TODO_INPUT.value;
        addTesk(todoText);
    }
}

function addTesk(value) {
    const newId = id++;
    const newTodo = todos.concat({id: newId, completed: false, todo: value});
    todos = newTodo;
    TODO_INPUT.value = "";
}

const todoList = todos.map(() => {
    const todoElement = document.createElement("li");
    
})

TODO_SUBMIT_BUTTON.addEventListener("click", todoAdd);
TODO_INPUT.addEventListener("click", drawTodo);