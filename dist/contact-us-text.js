import { updateValidationStatus } from "./input-status.js";
export const userMessage = document.getElementById("userMessage");
export const userMessageCheck = document.getElementById("userMessageCheck");
const validTextPattern = /^[\w!?%#$@+\-= .,&*()]+$/;
userMessage.addEventListener("input", () => {
    const textValue = userMessage.value.trim();
    if (textValue == "") {
        updateValidationStatus(false, "Text cannot be empty", userMessage, userMessageCheck);
        return;
    }
    validateText(textValue);
});
export function validateText(text) {
    if (!validTextPattern.test(text)) {
        updateValidationStatus(false, "Invalid text format", userMessage, userMessageCheck);
        return false;
    }
    if (text.length > 120) {
        updateValidationStatus(false, "The message is too long. Your comment should be no more than 120 characters.", userMessage, userMessageCheck);
        return false;
    }
    else {
        updateValidationStatus(true, "", userMessage, userMessageCheck);
        return true;
    }
}
