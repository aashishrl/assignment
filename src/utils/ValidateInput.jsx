const ERROR_MESSAGES = {
  emptyInput: 'Please enter a valid phone number or email.',
  invalidPhone: 'Please enter a valid phone number.',
  invalidEmail: 'Please enter a valid email address.',
  emailUppercaseError: 'Email should be in lowercase letters.',
};

const phoneRegex = /^(97|98)\d{8}$/; // Matches phone numbers starting with 97/98 and 10 digits
const emailRegex = /^[a-z0-9._%+-]+@gmail\.com$/; // Matches email addresses ending with @gmail.com (lowercase only)

// Helper function to validate phone numbers
const validatePhone = (input) => {
  if (!phoneRegex.test(input)) {
    return { isValid: false, message: ERROR_MESSAGES.invalidPhone };
  }
  return { isValid: true, type: 'phone' };
};

// Helper function to validate email addresses
const validateEmail = (input) => {
  // Check if email contains uppercase letters
  if (/[A-Z]/.test(input)) {
    return { isValid: false, message: ERROR_MESSAGES.emailUppercaseError };
  }

  if (!emailRegex.test(input)) {
    return { isValid: false, message: ERROR_MESSAGES.invalidEmail };
  }

  return { isValid: true, type: 'email' };
};

// Main validation function
const validateInput = (input) => {
  if (!input.trim()) {
    return { isValid: false, message: ERROR_MESSAGES.emptyInput };
  }

  if (/^\d+$/.test(input)) {
    // Input contains only numbers (assumed phone number)
    return validatePhone(input);
  } else {
    // Input contains alphabets or special characters (assumed email)
    return validateEmail(input);
  }
};

export default validateInput;
