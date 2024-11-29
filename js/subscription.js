document
  .querySelector("#registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emailInput = document.querySelector("#sub-input");
    const email = emailInput.value.trim();
    const emailCheck = document.querySelector("#emailCheck");
    emailCheck.innerHTML = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      emailCheck.innerHTML = `
      Your email is invalid.<br>
      It should be in the format: example@domain.example
    `;
      emailInput.classList.add("input-error");
    } else {
      alert("Subscription successful!");
      emailInput.value = "";
      emailInput.classList.remove("input-error");
    }
  });
