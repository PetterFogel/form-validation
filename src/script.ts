window.addEventListener("load", main);

function main() {
    addEventListeners();
}

function addEventListeners() {    
    const form = document.getElementById("form") as HTMLFormElement;
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        checkValidInputValues();
    });
} 

function checkValidInputValues() {
    const user = document.getElementById("username") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const password2 = document.getElementById("password-check") as HTMLInputElement;

    const userValue = user.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    if (userValue === "" || emailValue === "" || passwordValue === "" || password2Value === "") {
        errorControl(user);
        errorControl(email);
        errorControl(password);
        errorControl(password2);
    } else if (passwordValue !== password2Value) {
        passwordControl(password2);
        passwordControl(password);
    } else {
        successControl(user);
        successControl(email);
        successControl(password);
        successControl(password2);
    }

    // if (userValue === "") {
    //     errorControl(user);
    // } else {
    //     successControl(user);
    // }

    // if (emailValue === "") {
    //     errorControl(email);
    // } else {
    //     successControl(email);
    // }

    // if (passwordValue === "") {
    //     errorControl(password);
    // } else if (passwordValue !== password2Value) {
    //     passwordControl(password);
    // } else {
    //     successControl(password);
    // }

    // if (password2Value === "") {
    //     errorControl(password2);
    // } else if(passwordValue !== password2Value) {
    //     passwordControl(password2);
    // } else {
    //     successControl(password2);
    // }
}

function errorControl(input: HTMLInputElement) {
    let formControl: any;
    formControl = input.parentElement;
    
    const errorControl = formControl.querySelector("p") as HTMLParagraphElement;
    errorControl.classList.add("error-message");
    
    const errorIcon = formControl.querySelector(".fa-times");
    errorIcon.classList.add("icon-error");

    input.classList.add("error-border");
}

function successControl(input: HTMLInputElement) {
    let formControl: any;
    formControl = input.parentElement;

    const successIcon = formControl.querySelector(".fa-check");
    successIcon.classList.add("icon-success");

    input.classList.add("success-border");

    const allInputs = document.querySelectorAll("form#form .form-box input");
    console.log(allInputs); 
    saveToLocalStorage(input);
}

function saveToLocalStorage(input: HTMLInputElement) {
    localStorage.setItem(input.name, input.value);
}


function passwordControl(input: HTMLInputElement) {
    let formControl: any;
    formControl = input.parentElement;

    const errorIcon = formControl.querySelector(".fa-times");
    errorIcon.classList.add("icon-error");

    const errorControl = formControl.querySelector("p") as HTMLParagraphElement;
    errorControl.classList.add("error-message");
    errorControl.innerText = "Passwords must match";

    input.classList.add("error-border");
}