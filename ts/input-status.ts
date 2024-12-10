export function updateValidationStatus(
  isValid: boolean,
  message: string,
  inputElement: HTMLInputElement | HTMLTextAreaElement,
  checkElement: HTMLElement
) {
  if (isValid) {
    checkElement.innerHTML = message;

    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");

    checkElement.classList.add("valid");
    checkElement.classList.remove("invalid");
  } else {
    checkElement.innerHTML = message;

    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");

    checkElement.classList.add("invalid");
    checkElement.classList.remove("valid");
  }
}
