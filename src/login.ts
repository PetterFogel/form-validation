function loginTest() {
    const loginForm = document.getElementById("login-form") as HTMLFormElement;
    loginForm.addEventListener("submit", () => {
        test();
    });
}

function test() {
    console.log("test");    
}