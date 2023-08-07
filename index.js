const signUpForm = document.getElementById("signUpForm");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("passwordC");
const errorPassword = document.getElementById("error-password");
const errorPasswordC = document.getElementById("error-passwordC");

signUpForm.addEventListener("submit", function (event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  // Get the values of the password and confirm password fields
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  // Check if the passwords match
  if (passwordValue !== confirmPasswordValue) {
    // Show error message if passwords don't match
    errorPassword.textContent = "Passwords do not match!";
  } else {
    // Clear the error messages and submit the form
    errorPassword.textContent = "";
    errorPasswordC.textContent = "";
    signUpForm.submit();
  }
});
