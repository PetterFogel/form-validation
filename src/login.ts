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
}