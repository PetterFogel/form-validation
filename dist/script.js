"use strict";
const user = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password-check");
window.addEventListener("load", main);
function main() {
    addEventListeners();
}
function addEventListeners() {
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        checkValidInputValues();
    });
}
function checkValidInputValues() {
    const userValue = user.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
    if (userValue === "") {
        errorControl(user);
    }
    else {
        successControl(user);
    }
    if (emailValue === "") {
        errorControl(email);
    }
    else {
        successControl(email);
    }
    if (passwordValue === "") {
        errorControl(password);
    }
    else if (passwordValue !== password2Value) {
        passwordControl(password);
    }
    else {
        successControl(password);
    }
    if (password2Value === "") {
        errorControl(password2);
    }
    else if (passwordValue !== password2Value) {
        passwordControl(password2);
    }
    else {
        successControl(password2);
    }
}
function errorControl(input) {
    let formControl;
    formControl = input.parentElement;
    const errorControl = formControl.querySelector("p");
    errorControl.classList.add("error-message");
    const errorIcon = formControl.querySelector(".fa-times");
    errorIcon.classList.add("icon-error");
    input.classList.add("error-border");
}
function successControl(input) {
    let formControl;
    formControl = input.parentElement;
    const successIcon = formControl.querySelector(".fa-check");
    successIcon.classList.add("icon-success");
    input.classList.add("success-border");
    test(input);
}
function test(input) {
    localStorage.setItem(input.name, input.value);
}
function passwordControl(input) {
    let formControl;
    formControl = input.parentElement;
    const errorIcon = formControl.querySelector(".fa-times");
    errorIcon.classList.add("icon-error");
    const errorControl = formControl.querySelector("p");
    errorControl.classList.add("error-message");
    errorControl.innerText = "Passwords must match";
    input.classList.add("error-border");
}
//# sourceMappingURL=script.js.map