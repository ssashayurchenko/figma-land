import { updateValidationStatus } from "./input-status.js";
export const userMessage = document.getElementById("userMessage");
export const userMessageCheck = document.getElementById("userMessageCheck");
userMessage.addEventListener("input", () => {
    const textValue = userMessage.value.trim();
    validateText(textValue);
});
export function validateText(text) {
    if (text.length > 120) {
        updateValidationStatus(false, "The message is too long. Your comment should be no more than 120 characters.", userMessage, userMessageCheck);
        return false;
    }
    else {
        updateValidationStatus(true, "", userMessage, userMessageCheck);
        return true;
    }
}
