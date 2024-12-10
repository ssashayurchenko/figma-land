import { updateValidationStatus } from "./input-status.js";
const registerForm = document.getElementById("registerForm");
const emailInput = document.getElementById("emailInput");
const emailCheck = document.getElementById("emailCheck");
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
emailInput.addEventListener("input", () => {
    if (emailInput.value === "") {
        updateValidationStatus(false, `Please enter something.`, emailInput, emailCheck);
        return;
    }
    if (validateEmail(emailInput.value)) {
        updateValidationStatus(true, "", emailInput, emailCheck);
    }
    else {
        updateValidationStatus(false, `
      Your email is invalid.<br>
      It should be in the format: example@domain.example
    `, emailInput, emailCheck);
    }
});
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        updateValidationStatus(false, "Please enter an email before submitting.", emailInput, emailCheck);
        return;
    }
    if (!validateEmail(emailValue)) {
        updateValidationStatus(false, `Please enter a valid email before submitting.`, emailInput, emailCheck);
        return;
    }
    alert("Subscription successful!");
    emailInput.value = "";
    emailCheck.innerHTML = "";
    emailCheck.classList.remove("valid");
    emailInput.classList.remove("valid");
});
