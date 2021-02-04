window.addEventListener("load", testP);

function testP() {
    loginTest();
}

function loginTest() {
    const loginForm = document.getElementById("login-form") as HTMLFormElement;
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        checkValidUserInputValues();
    });
}

function checkValidUserInputValues() {
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const username = usernameInput.value;
    const password = passwordInput.value;

    const registeredUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(registeredUser);

    // Logik strular!!!
    if (username === "" && password === "") {
        errorHandler(usernameInput);        
    }

    if (username === "") {
        errorHandler(usernameInput);
    } else if(password === "") {
        errorHandler(passwordInput);
    } else if (username !== registeredUser.username) {
        userDoNotExistHandler(usernameInput);
    } 
    else if (password !== registeredUser.password) {
        passwordDoNotExistHandler(passwordInput);
    }
    else if (username === registeredUser.username && password === registeredUser.password) {
        successHandler(usernameInput);
        successHandler(passwordInput);
        setTimeout(() => {
            alert("Success!");
        }, 3000);
    }
}

function successHandler(input: HTMLInputElement) {
    let formControl: any;
    formControl = input.parentElement;

    const successIcon = formControl.querySelector(".fa-check");
    successIcon.classList.add("icon-success");

    input.classList.add("success-border");
}

function errorHandler(input: HTMLInputElement) {
    let formControl: any;
    formControl = input.parentElement;
    
    const errorControl = formControl.querySelector("p") as HTMLParagraphElement;
    errorControl.classList.add("error-message");
    
    const errorIcon = formControl.querySelector(".fa-times");
    errorIcon.classList.add("icon-error");

    input.classList.add("error-border");
    setTimeout(() => {
        errorControl.classList.remove("error-message");
        errorIcon.classList.remove("icon-error");
        input.classList.remove("error-border");
    }, 3000);
}

function userDoNotExistHandler(input: HTMLInputElement) {
    let formControl: any;
    formControl = input.parentElement;
    
    const errorControl = formControl.querySelector("p") as HTMLParagraphElement;
    errorControl.classList.add("error-message");
    errorControl.innerText = "Username is not valid";
    
    const errorIcon = formControl.querySelector(".fa-times");
    errorIcon.classList.add("icon-error");

    input.classList.add("error-border");
    setTimeout(() => {
        errorControl.classList.remove("error-message");
        errorIcon.classList.remove("icon-error");
        input.classList.remove("error-border");
    }, 3000);
}

function passwordDoNotExistHandler(input: HTMLInputElement) {
    let formControl: any;
    formControl = input.parentElement;
    
    const errorControl = formControl.querySelector("p") as HTMLParagraphElement;
    errorControl.classList.add("error-message");
    errorControl.innerText = "Password is not valid";
    
    const errorIcon = formControl.querySelector(".fa-times");
    errorIcon.classList.add("icon-error");

    input.classList.add("error-border");
    setTimeout(() => {
        errorControl.classList.remove("error-message");
        errorIcon.classList.remove("icon-error");
        input.classList.remove("error-border");
    }, 3000);
}