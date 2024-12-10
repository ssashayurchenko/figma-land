import { updateValidationStatus } from "./input-status.js";
export const userMessage = document.getElementById(
  "userMessage"
) as HTMLTextAreaElement;
export const userMessageCheck = document.getElementById(
  "userMessageCheck"
) as HTMLElement;

userMessage.addEventListener("input", () => {
  const textValue = userMessage.value.trim();
  validateText(textValue);
});

export function validateText(text: string): boolean {
  if (text.length > 120) {
    updateValidationStatus(
      false,
      "The message is too long. Your comment should be no more than 120 characters.",
      userMessage,
      userMessageCheck
    );
    return false;
  } else {
    updateValidationStatus(true, "", userMessage, userMessageCheck);
    return true;
  }
}
