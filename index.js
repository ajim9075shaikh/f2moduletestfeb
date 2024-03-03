let emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateEmail);

let passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", validatePassword);

function validateEmail() {
  let email = emailInput.value;
  let messageElement = document.getElementById("emailMessage");
  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    messageElement.textContent = "All good to go";
    messageElement.classList.remove("error");
    messageElement.classList.add("success");
  } else {
    messageElement.textContent =
      "Make sure email is more than 3 characters and has @ and a .";
    messageElement.classList.remove("success");
    messageElement.classList.add("error");
  }
}

function validatePassword() {
  let password = passwordInput.value;
  let messageElement = document.getElementById("passwordMessage");
  if (password.length > 8) {
    messageElement.textContent = "All good to go";
    messageElement.classList.remove("error");
    messageElement.classList.add("success");
  } else {
    messageElement.textContent =
      "Make sure password is more than 8 characters.";
    messageElement.classList.remove("success");
    messageElement.classList.add("error");
  }
}

function submitForm() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (
    emailInput.value.length > 3 &&
    emailInput.value.includes("@") &&
    emailInput.value.includes(".") &&
    passwordInput.value.length > 8
  ) {
    const confirmation = confirm("Are you sure you want to sign up?");

    if (confirmation) {
      alert("Successful signup!");
    } else {
      location.reload();
    }
  } else {
    alert("Please correct the errors before submitting.");
  }
}
