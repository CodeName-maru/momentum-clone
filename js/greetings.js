const loginForm =document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
let savedUsername =localStorage.getItem(USERNAME_KEY)

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    //savedUsername =localStorage.getItem(USERNAME_KEY)
    paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit)


function paintGreetings(username){
    greeting.innerText = `Hello ${username}.`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    document.querySelector("#todo").classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    document.querySelector("#todo").classList.add(HIDDEN_CLASSNAME);
}
else{
    paintGreetings(savedUsername);
}
