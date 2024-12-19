
// JavaScript function to validate password criteria
const passwordInput = document.getElementById('passward');
const upperCaseElement = document.getElementById('upperCase');
const lowerCaseElement = document.getElementById('lowerCase');
const numberElement = document.getElementById('number');
const specialCharElement = document.getElementById('specialChar');

// Event listener for input in the password field
passwordInput.addEventListener('input', function () {
  const password = passwordInput.value;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Update criteria based on password validation
  updateCriteria(upperCaseElement, hasUpperCase);
  updateCriteria(lowerCaseElement, hasLowerCase);
  updateCriteria(numberElement, hasNumber);
  updateCriteria(specialCharElement, hasSpecialChar);
});

// Function to update criteria status
function updateCriteria(element, isValid) {
  const iconClass = isValid ? 'bi-shield-check' : 'bi-shield-x';
  const color = isValid ? 'green' : 'red';

  element.className = isValid ? 'valid' : 'invalid';
  element.style.color = color;
  const icon = element.querySelector('i');
  if (icon) {
    icon.className = `bi ${iconClass}`;
  }
}
