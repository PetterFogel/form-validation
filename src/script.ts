// window.addEventListener("load", main);

// function main() {
//     addEventListeners();
// }

// function addEventListeners() {
//     let form: any; 
    
//     form = document.getElementById("form");
//     form.addEventListener("submit", (event: any) => {
//         event.preventDefault();
//         checkValidInputValues();
//     });
// } 

// function checkValidInputValues() {
//     let formInputs: NodeListOf<HTMLInputElement>; 
//     let errorIcons: NodeListOf<Element>; 
//     let successIcons: NodeListOf<Element>;
//     let errorControl: NodeListOf<HTMLParagraphElement>;
    
//     formInputs = document.querySelectorAll("input");
//     errorIcons = document.querySelectorAll(".fa-times");
//     successIcons = document.querySelectorAll(".fa-check");
//     errorControl = document.querySelectorAll(".form-box p");

//     for (let inputs of formInputs) {
//         const inputValues = inputs.value;
//         if (inputValues === "") {
//             inputs.classList.add("error-border");
//             for (let icon of errorIcons) {
//                 icon.classList.add("icon-error");
//             }
//             for (let errors of errorControl) {
//                 errors.classList.add("error-message");
//             }
//         } else {
//             inputs.classList.add("success-border");
//             for (let icon of successIcons) {
//                 icon.classList.add("icon-success");
//             }
//         }
//     }
//     checkPasswordMatch();
// }
        
    
//     // let userInput: any;
//     // let userError: any;
//     // let messageError: any;

//     // userInput = document.getElementById("username")!;
//     // userError = document.querySelector(".fa-times");
//     // messageError = document.querySelector(".form-box p")




//     // const inputValue = userInput.value;
//     // if (inputValue === "") {
//     //     userInput.classList.add("error-border");
//     //     userError.classList.add("icon-error");
//     //     messageError.classList.add("error-message");
//     // } else {
//     //     userInput.classList.add("success-border");
//     // }
    

// function checkPasswordMatch() {
//     let password: any; 
//     let password2: any;
//     let formBox: HTMLDivElement | null;
//     let emptyMessage: any;
    
//     password = document.getElementById("password")!;
//     password2 = document.getElementById("password-check");
//     formBox = document.querySelector(".third-box");
//     emptyMessage = document.querySelector(".third-box p");
    
//     let firstPassword = password.value;
//     let secondPassword = password2.value;

//     // Check if passwords are matching
//     if (firstPassword !== secondPassword) {
//         password.classList.add("error-border"); 
//         password2.classList.add("error-border"); 
//         emptyMessage.innerText = "Passwords must match";
//     } else  {
//         password.classList.add("success-border"); 
//         password2.classList.add("success-border"); 
//     }
// }

// let user: HTMLInputElement;
// let email: any;
// let password: any;
// let password2: any;

const user = document.getElementById("username") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const password2 = document.getElementById("password-check") as HTMLInputElement;

window.addEventListener("load", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    // let form: any; 
    
    const form = document.getElementById("form") as HTMLFormElement;
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        checkValidInputValues();
    });
} 

function checkValidInputValues() {
    const userValue = user.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    console.log(password2Value);

    if (userValue === "") {
        errorControl(user);
    } else {
        successControl(user);
    }

    if (emailValue === "") {
        errorControl(email);
    } else {
        successControl(email);
    }

    if (passwordValue === "") {
        errorControl(password);
    } else {
        successControl(password);
    }

    if (password2Value === "") {
        errorControl(password2);
    } else if(passwordValue !== password2Value) {
        passwordControl(password2);
    } else {
        successControl(password2);
    }
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