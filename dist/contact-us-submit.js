import { userName, userNameCheck, validateName } from "./contact-us-name.js";
const contactForm = document.getElementById("contactUsForm");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameValue = userName.value.trim();
    const validationResult = validateName(nameValue);
    if (validationResult !== "valid") {
        userNameCheck.innerHTML = "Your name is invalid";
        userName.classList.remove("valid");
        userName.classList.add("invalid");
        return;
    }
    userName.value = "";
    userNameCheck.innerHTML = "";
    userName.classList.add("valid");
    userName.classList.remove("invalid");
});
