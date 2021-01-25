"use strict";
window.addEventListener("load", testP);
function testP() {
    loginTest();
}
function loginTest() {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        checkValidUserInputValues();
    });
}
function checkValidUserInputValues() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const username = usernameInput.value;
    const password = passwordInput.value;
    const registeredUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(registeredUser);
    if (username === registeredUser.username && password === registeredUser.password) {
        console.log("samma");
    }
    else {
        console.log("fel");
    }
}
//# sourceMappingURL=login.js.map