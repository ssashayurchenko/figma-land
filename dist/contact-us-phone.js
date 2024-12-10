import { updateValidationStatus } from "./input-status.js";
export const userPhone = document.getElementById("userPhone");
export const countrySelect = document.getElementById("country-select");
const userPhoneCheck = document.getElementById("userPhoneCheck");
countrySelect.addEventListener("change", () => {
    const selectedCode = countrySelect.value;
    userPhone.value = selectedCode + " ";
    userPhone.focus();
    userPhone.setSelectionRange(userPhone.value.length, userPhone.value.length);
});
userPhone.addEventListener("input", () => {
    const phoneValue = userPhone.value.replace(/(?!^\+)[^0-9 ]/g, "");
    if (!phoneValue.startsWith(countrySelect.value + " ")) {
        userPhone.value = countrySelect.value + " ";
    }
    else {
        userPhone.value = phoneValue;
    }
    validatePhone(userPhone.value, countrySelect.value + " ");
});
export function validatePhone(phoneValue, countryCode) {
    const phoneWithoutCode = phoneValue.slice(countryCode.length).trim();
    const maxDigits = 15;
    const minDigits = 4;
    if (phoneWithoutCode.length > maxDigits ||
        phoneWithoutCode.length < minDigits) {
        updateValidationStatus(false, `The phone number must contain between ${minDigits}  <br>
      and ${maxDigits} characters following the country code.`, userPhone, userPhoneCheck);
        return false;
    }
    updateValidationStatus(true, "", userPhone, userPhoneCheck);
    return true;
}
