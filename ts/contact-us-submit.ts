import { userName, userNameCheck, validateName } from "./contact-us-name.js";
import { userPhone, countrySelect, validatePhone } from "./contact-us-phone.js";
import { updateValidationStatus } from "./input-status.js";
import {
  userMessage,
  userMessageCheck,
  validateText,
} from "./contact-us-text.js";
const userPhoneCheck = document.getElementById("userPhoneCheck") as HTMLElement;
const contactForm = document.getElementById("contactUsForm") as HTMLElement;

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = userName.value.trim();
  const validationResult = validateName(nameValue);

  if (validationResult !== "valid") {
    updateValidationStatus(
      false,
      "Your name is invalid",
      userName,
      userNameCheck
    );

    return;
  }

  const phoneValue = userPhone.value.replace(/(?!^\+)[^0-9 ]/g, "");
  const countryCode = countrySelect.value + " ";

  if (!validatePhone(phoneValue, countryCode)) return;

  const messageValue = userMessage.value.trim();
  if (!validateText(messageValue)) return;

  alert(`Form was successfully submitted!\nThank You!`);
  resetForm();
});

function resetForm() {
  userName.value = "";
  userNameCheck.innerHTML = "";
  userName.classList.remove("valid");
  userNameCheck.classList.remove("valid");

  userPhone.value = "";
  userPhoneCheck.innerHTML = "";
  userPhone.classList.remove("valid");
  userPhoneCheck.classList.remove("valid");

  userMessage.value = "";
  userMessageCheck.innerHTML = "";
  userMessage.classList.remove("valid");
  userMessageCheck.classList.remove("valid");
}
