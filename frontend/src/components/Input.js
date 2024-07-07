import "./Input.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
function Input({
  label,
  type,
  placeholder,
  showForgotPassword = false,
  showIcon = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="email-input">
      <div className="password-label">
        <label htmlFor={type} className="label">
          {label}
        </label>
        {showForgotPassword && (
          <span className="forgot-password">Forgot password</span>
        )}
      </div>
      <div className="password-input">
        <input
          className="input"
          type={type ? "text" : "password"}
          id={type}
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {showIcon && (
          <div className="password-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
