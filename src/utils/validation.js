// src/utils/validation.js
export const validateName = (name) => {
    if (!name) {
      return 'Name is required.';
    }
    return null; // No error
  };
  
  export const validateEmail = (email) => {
    if (!email) {
      return 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Email is invalid.';
    }
    return null; // No error
  };
  
  export const validatePassword = (password) => {
    if (!password) {
      return 'Password is required.';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters.';
    }
    return null; // No error
  };
  
  // Add more validation functions for other form fields
  