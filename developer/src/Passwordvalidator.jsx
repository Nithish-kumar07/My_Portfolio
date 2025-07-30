import React, { useState } from "react";
import "./validator.css";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validatePassword = (password) => {
    let message = "";
    let valid = true;

    // Minimum length check
    if (password.length < 8) {
      message += "Password must be at least 8 characters long.\n";
      valid = false;
    }

    // Uppercase letter check
    if (!/[A-Z]/.test(password)) {
      message += "Password must contain at least one uppercase letter.\n";
      valid = false;
    }

    // Lowercase letter check
    if (!/[a-z]/.test(password)) {
      message += "Password must contain at least one lowercase letter.\n";
      valid = false;
    }

    // Number check
    if (!/\d/.test(password)) {
      message += "Password must contain at least one number.\n";
      valid = false;
    }

    // Special character check
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      message += "Password must contain at least one special character.\n";
      valid = false;
    }

    setErrorMessage(message);
    setIsValid(valid);
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  return (
    <div className="password-validator-container">
      <h2 className="validator">Password Validator</h2>
      <div>
        <input
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>

      {password && (
        <div className={`error-message ${isValid ? "valid" : "invalid"}`}>
          {errorMessage && <pre>{errorMessage}</pre>}
          {isValid && <span className="spun">Password is valid!</span>}
        </div>
      )}
    </div>
  );
};

export default PasswordValidator;
