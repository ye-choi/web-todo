const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let todoArray = [];

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todoArray = todoArray.filter((todo) => todo.id !== parseInt(li.id));
    saveTodoArray();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button"); 
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodoObj.text;
    li.id = newTodoObj.id;
    button.innerText = "삭제"; 
    button.addEventListener("click", deleteTodo);
    todoList.appendChild(li);
}

function saveTodoArray() {
    localStorage.setItem("todoArray",JSON.stringify(todoArray));
}

function onTodoSubmit(event) {
    event.preventDefault();
    const newTodoObj = {
        id: Date.now(),
        text: `${todoInput.value}`
    }
    todoInput.value = "";
    paintTodo(newTodoObj);

    todoArray.push(newTodoObj);
    saveTodoArray();
}

const checkLogin = localStorage.getItem("username");
if (checkLogin !== null) {
    todoForm.classList.remove("hidden");
    todoList.classList.remove("hidden");
}

const savedTodoArray = localStorage.getItem("todoArray");
if (savedTodoArray !== null) {
    const parsedTodoArray = JSON.parse(savedTodoArray);
    todoArray = parsedTodoArray;
    todoArray.forEach(paintTodo);
} else {

}

todoForm.addEventListener("submit", onTodoSubmit);