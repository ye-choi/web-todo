const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");

// submit 시 새로고침을 막고 username을 localStorage에 저장, 인사말 표시
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value; 
    localStorage.setItem("username", username);
    greeting.innerText = `Hello, ${username}`;
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    todoForm.classList.remove("hidden");
    todoList.classList.remove("hidden");
}

// localStorage에 username이 있으면 인사말 표시, 없으면 로그인 폼 표시
const savedUsername = localStorage.getItem("username");

if (savedUsername !== null) {
    greeting.innerText = `Hello, ${savedUsername}`;
    greeting.classList.remove("hidden");
} else {
    loginForm.addEventListener("submit", onLoginSubmit);
    loginForm.classList.remove("hidden");
}

