function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthIndicator = document.getElementById("strength-indicator");
  const strengthText = document.getElementById("strength-text");

  let strength = 0;

  // Password strength criteria
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[@$!%*?&#]/.test(password)) strength++;

  // Update the strength indicator
  const colors = ["#ff4d4d", "#ff944d", "#ffd11a", "#99e600", "#33cc33"];
  const descriptions = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];

  strengthIndicator.innerHTML = `<div style="width: ${strength * 20}%; background: ${colors[strength - 1] || "#ddd"};"></div>`;
  strengthText.textContent = descriptions[strength - 1] || "Too Short";
}

function generateStrongPassword() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&#";
  let password = "";
  const length = 12; // Set the desired password length

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  // Display the generated password
  const passwordField = document.getElementById("password");
  const suggestion = document.getElementById("suggestion");
  const generatedPassword = document.getElementById("generated-password");

  passwordField.value = password;
  suggestion.style.display = "block";
  generatedPassword.textContent = password;

  // Re-check password strength
  checkPasswordStrength();
}

function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const toggleButton = document.getElementById("toggle-visibility");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.textContent = "Hide";
  } else {
    passwordField.type = "password";
    toggleButton.textContent = "Show";
  }
}

function copyPassword() {
  const password = document.getElementById("password").value;

  if (password) {
    navigator.clipboard.writeText(password).then(() => {
      alert("Password copied to clipboard!");
    }).catch(err => {
      alert("Failed to copy password!");
    });
  } else {
    alert("No password to copy!");
  }
}
