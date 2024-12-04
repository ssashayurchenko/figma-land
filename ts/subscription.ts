const form = document.getElementById("registerForm") as HTMLElement;
const emailInput = document.getElementById("sub-input") as HTMLInputElement;
const emailCheck = document.getElementById("emailCheck") as HTMLElement;
const submitButton = document.getElementById("sub-btn") as HTMLElement;

function validateEmail(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

emailInput.addEventListener("input", () => {
  if (validateEmail(emailInput.value)) {
    emailCheck.innerHTML = "Email is valid";
    emailCheck.classList.remove("invalid");
    emailCheck.classList.add("valid");
  } else {
    emailCheck.innerHTML = `
    Your email is invalid.<br>
    It should be in the format: example@domain.example
    `;
    emailCheck.classList.remove("valid");
    emailCheck.classList.add("invalid");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  if (!validateEmail(emailValue)) {
    emailCheck.innerHTML = `Please enter a valid email before submitting.`;
    emailCheck.classList.remove("valid");
    emailCheck.classList.add("invalid");
    return;
  }

  alert("Subscription successful!");
  emailInput.value = "";
  emailCheck.innerHTML = "";
  emailCheck.classList.remove("invalid");
  emailCheck.classList.add("valid");
});
