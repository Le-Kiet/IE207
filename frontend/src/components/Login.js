import quizletImage from "../assets/images/quizlet.jpg";
import Form from "react-bootstrap/Form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useContext } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import Input from "./Input.js";
// import Button from "react-bootstrap/Button";
import Button from "./Button.js";
import Combobox from "./Combobox.js";
import Tooltip from "./Tooltip.js";
import { validateEmail } from "../utils/helper";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
function Login() {
  const [isChecked, setIsChecked] = useState(false);
  const [TooltipState, setTooltipState] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const setTooltipStateTrue = () => {
    setTooltipState(true);
  };
  const setTooltipStateFalse = () => {
    setTooltipState(false);
  };
  // Handle user login:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      console.log(email);
      setError("Please enter a valid email address");
      console.log(error);
      return;
    }
    if (!password) {
      console.log(password);
      setError("Please enter the password");
      console.log(error);
      return;
    }
    setError("");

    // Login API call
    try {
      console.log(1111);
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });
      console.log(response);
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/home");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again");
      }
    }
  };
  return (
    <div className="login-signup-layout">
      <div className="left-section">
        <img src={quizletImage} alt="Quizlet" className="large-image" />
      </div>
      <div className="right-section">
        <Tabs class="login-signup">
          <TabList className="login-signup-tab-list">
            <Tab className="login-signup-tab login-tab">Log in</Tab>
            <Tab className="login-signup-tab signup-tab">Sign up</Tab>
          </TabList>
          <Form onSubmit={handleLogin}>
            <TabPanel className="tab-panel">
              {/* <button content="Login with Google" iconType="google" />
              <button content="Login with Facebook" iconType="facebook" />
              <button content="Login with Apple" iconType="apple" />
              <div className="divider">
                <div className="line"></div>
                <div className="text">or email</div>
                <div className="line"></div>
              </div> */}
              <div className="email-input">
                <div className="password-label">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                </div>
                <div className="password-input">
                  <input
                    className="input"
                    type="text"
                    id="email"
                    placeholder="Nhập Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="email-input">
                <div className="password-label">
                  <label htmlFor="email" className="label">
                    Password
                  </label>
                </div>
                <div className="password-input">
                  <input
                    className="input"
                    type="password"
                    id="email"
                    placeholder="Nhập Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="password-icon"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>
              <div class="terms-of-service">
                By clicking Log in, you accept Quizlet's Terms of Service and
                Privacy Policy
              </div>
              <button className="login-btn" type="submit">
                Log In
              </button>
              <button className="login-btn">
                New to Quizlet? Create an account
              </button>
            </TabPanel>
          </Form>
          <TabPanel>
            {/* <div className="birthday">
              <span className="birthday-text">Birthday</span>
              <FaInfoCircle
                className="more-info"
                onMouseEnter={setTooltipStateTrue}
                onMouseLeave={setTooltipStateFalse}
              />
              <Tooltip state={TooltipState} />
            </div> */}
            {/* <div className="combobox-group">
              <Combobox date="Month" />
              <Combobox date="Day" />
              <Combobox date="Year" />
            </div> */}
            <Input label="Email" type="text" placeholder="User@email.com" />
            <Input label="Username" type="text" placeholder="andrew123" />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              showForgotPassword="true"
            />
            <div className="check-signup">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span>I accept Quizlet's Term of Service and Privacy Policy</span>
            </div>
            <button className="signup-btn" type="submit">
              Sign Up
            </button>
            <button className="signup-btn">Already have account? Login</button>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Login;
