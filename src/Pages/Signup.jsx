// SignUp.jsx

import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      // Passwords match, set success message
      setSignupSuccess(true);
      setPasswordMatch(true);
    } else {
      // Passwords do not match
      setSignupSuccess(false);
      setPasswordMatch(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <label>Email:</label><br /><br />
        <input
          type="email"
          name="email"
          placeholder="suren@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />
        
        <label>Password:</label><br /><br />
        <div className="password-input">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          /><br /><br />
          <span onClick={toggleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <label>Confirm Password:</label><br /><br />
        <div className="password-input">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <span onClick={toggleShowConfirmPassword}>
            {showConfirmPassword ? "Hide" : "Show"}
          </span>
        </div>

        {!passwordMatch && (
          <p className="error-message">Password and Confirm Password do not match.</p>
        )}

        {signupSuccess && (
          <p className="success-message">Signup successful!</p>
        )}<br /><br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
