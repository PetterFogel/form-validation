"use strict";
window.addEventListener("load", main);
function main() {
    addEventListeners();
}
function addEventListeners() {
    const form = document.getElementById("form");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
        e.preventDefault();
        checkInputs();
    });
}
function checkInputs() {
    // let formInputs: any = []; 
    const formInputs = document.querySelectorAll(".form-box input");
    // const errorIcons = document.querySelector(".fa-times");
    for (let inputs of formInputs) {
        const inputValues = inputs.value;
        if (inputValues === "") {
            inputs.classList.add("error");
            // errorIcons?.classList.add("icon-error");
        }
        else {
            inputs.classList.add("success");
        }
        checkEqualPassword();
    }
    function checkEqualPassword() {
        const password = document.getElementById("password");
        const password2 = document.getElementById("password-check");
        console.log(password2);
        // Checks if passwords are equals
        if (password.value != password2.value) {
            password === null || password === void 0 ? void 0 : password.classList.add("error");
            password2 === null || password2 === void 0 ? void 0 : password2.classList.add("error");
        }
        else {
            password === null || password === void 0 ? void 0 : password.classList.add("success");
            password2 === null || password2 === void 0 ? void 0 : password2.classList.add("success");
        }
    }
    // for (let i = 0; i < formInputs.length; i++) {
    //     if (formInputs[i].value === "") {
    //         formInputs[i].classList.add("error");
    //         console.log(formInputs[i])
    //     }
    // }
}
