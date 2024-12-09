const registerForm = document.getElementById("registerForm") as HTMLElement;
const emailInput = document.getElementById("emailInput") as HTMLInputElement;
const emailCheck = document.getElementById("emailCheck") as HTMLElement;
const submitButton = document.getElementById("register-btn") as HTMLElement;

function validateEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function updateEmailStatus(isValid: boolean, message: string): void {
  if (isValid) {
    emailCheck.innerHTML = message;
    emailCheck.classList.remove("email-invalid");
    emailCheck.classList.add("email-valid");

    emailInput.classList.remove("email-invalid");
    emailInput.classList.add("email-valid");
  } else {
    emailCheck.innerHTML = message;
    emailCheck.classList.remove("email-valid");
    emailCheck.classList.add("email-invalid");

    emailInput.classList.remove("email-valid");
    emailInput.classList.add("email-invalid");
  }
}

emailInput.addEventListener("input", () => {
  if (emailInput.value === "") {
    updateEmailStatus(false, `Please enter something.`);
    return;
  }
  if (validateEmail(emailInput.value)) {
    updateEmailStatus(true, "Email is valid");
  } else {
    updateEmailStatus(
      false,
      `
      Your email is invalid.<br>
      It should be in the format: example@domain.example
    `
    );
  }
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    updateEmailStatus(false, "Please enter an email before submitting.");
    return;
  }

  if (!validateEmail(emailValue)) {
    updateEmailStatus(false, `Please enter a valid email before submitting.`);
    return;
  }

  alert("Subscription successful!");
  emailInput.value = "";
  emailCheck.innerHTML = "";
  emailCheck.classList.remove("email-valid");
  emailInput.classList.remove("email-valid");
});
