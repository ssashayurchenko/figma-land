export function updateValidationStatus(isValid, message, inputElement, checkElement) {
    if (isValid) {
        checkElement.innerHTML = message;
        inputElement.classList.add("valid");
        inputElement.classList.remove("invalid");
        checkElement.classList.add("valid");
        checkElement.classList.remove("invalid");
    }
    else {
        checkElement.innerHTML = message;
        inputElement.classList.add("invalid");
        inputElement.classList.remove("valid");
        checkElement.classList.add("invalid");
        checkElement.classList.remove("valid");
    }
}
