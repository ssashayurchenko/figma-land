import { updateValidationStatus } from "./input-status.js";
export const userName = document.getElementById("userName") as HTMLInputElement;
export const userNameCheck = document.getElementById(
  "userNameCheck"
) as HTMLElement;

export function validateName(
  name: string
): "valid" | "invalid" | "invalidCharacters" | "tooLongName" {
  const namePattern = /^[a-zA-Z\s]{2,25}$/;

  if (name.length > 25) {
    return "tooLongName";
  }
  if (/[\d~!@#$%^&*()_+=]/.test(name)) {
    return "invalidCharacters";
  }
  return namePattern.test(name) ? "valid" : "invalid";
}

userName.addEventListener("input", () => {
  const nameValue = userName.value.trim();
  const validationResult = validateName(nameValue);

  userNameCheck.innerHTML = "";
  userNameCheck.classList.remove("valid", "invalid");
  userName.classList.remove("valid", "invalid");

  if (nameValue === "") {
    updateValidationStatus(
      false,
      "Please fill in this field",
      userName,
      userNameCheck
    );
    return;
  }

  if (validationResult === "valid") {
    updateValidationStatus(true, "", userName, userNameCheck);
  } else {
    updateValidationStatus(false, "", userName, userNameCheck);
    if (validationResult === "invalidCharacters") {
      userNameCheck.innerHTML = "Your name should contain only letters.";
    } else if (validationResult === "tooLongName") {
      userNameCheck.innerHTML =
        "Your name can't contain more than 25 characters";
    } else {
      userNameCheck.innerHTML = "Invalid name format.";
    }
  }
});
