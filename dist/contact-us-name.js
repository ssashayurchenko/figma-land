export const userName = document.getElementById("userName");
export const userNameCheck = document.getElementById("userNameCheck");
export function validateName(name) {
    const namePattern = /^[a-zA-Z\s]{1,25}$/;
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
    userName.classList.remove("valid", "invalid");
    if (nameValue === "") {
        userName.classList.add("invalid");
        userNameCheck.innerHTML = "Please fill in this field";
        return;
    }
    if (validationResult === "valid") {
        userName.classList.add("valid");
        userNameCheck.innerHTML = "Your name is valid";
    }
    else {
        userName.classList.add("invalid");
        if (validationResult === "invalidCharacters") {
            userNameCheck.innerHTML = "Your name should contain only letters.";
        }
        else if (validationResult === "tooLongName") {
            userNameCheck.innerHTML =
                "Your name can't contain more than 25 characters";
        }
        else {
            userNameCheck.innerHTML = "Invalid name format.";
        }
    }
});
