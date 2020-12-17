window.addEventListener("load", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const form = document.getElementById("form");
    form?.addEventListener("submit", (e) => {
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
        } else {
            inputs.classList.add("success");
    }
}