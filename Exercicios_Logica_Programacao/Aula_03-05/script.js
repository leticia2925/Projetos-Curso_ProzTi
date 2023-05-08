const formTitle = document.getElementsByClassName("form_title")[0];

const button = document.querySelector(".button");

const usernameInput = document.getElementById("login-usuario");

const usernameErrorMessage = document.getElementsByClassName("error-text")[0];

const passwordInput = document.getElementById("login-senha");

const passwordErrorMessage = document.getElementsByClassName("error-text")[1];

button.style.backgroundColor = "pink";

button.style.borderRadius = '15px';


formTitle.style.color = 'darkcyan';

//usuário inseriu username inválido
usernameInput.classList.add("error")

usernameErrorMessage.classList.add("visible")

// usuário inseriu username válido mas errou a senha
usernameInput.classList.remove("error");
usernameInput.classList.add("correct");
usernameErrorMessage.classList.remove("visible");


passwordInput.classList.add("error");
passwordErrorMessage.classList.add("visible");