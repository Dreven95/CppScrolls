// try it btn script
const buttonToggle = document.querySelector(".menu__button--toggle");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector("body");

buttonToggle.addEventListener("click",  () => {
    buttonToggle.classList.toggle("active");
    menuBody.classList.toggle("active");
    body.classList.toggle("lock");
});

// content scroll tests sctipt
const testsBtn = document.querySelector(".tests-btn");
const codeScreenTests = document.querySelector(".code-screen-tests")
const codeScreenInput = document.querySelector(".code-screen-input")

testsBtn.addEventListener("click", () => {
    testsBtn.classList.toggle("active");
    codeScreenTests.classList.toggle("hide");
    codeScreenInput.classList.toggle("active");
});