import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import "../style/myStyles.css"; // Import your custom CSS

const required = (value) => {
  if (!value) {
    return <div className="invalid-feedback d-block">This field is required!</div>;
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return <div className="invalid-feedback d-block">The username must be between 3 and 20 characters.</div>;
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return <div className="invalid-feedback d-block">The password must be between 6 and 40 characters.</div>;
  }
};

const LoginSignup = ({ setButtonText }) => {
  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign-in and sign-up
  const [loading, setLoading] = useState(false);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
           // Call getCurrentUser to retrieve the user details
      const currentUser = AuthService.getCurrentUser();
      // Check if currentUser is retrieved and contains the userName
      if (currentUser && currentUser.userName) {
        // Use backticks for template literals
        setButtonText(`${currentUser.userName}`);
      } else {
        // Handle the case where userName might not be available
        setButtonText("Hi there!");
      }

      console.log("User Details:", currentUser); // Debugging: Check the contents of currentUser

          navigate("/project");
          
          // window.location.reload();
        },
        (error) => {
          console.log("problem ******* ",AuthService.getCurrentUser);
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, password).then(
        (response) => {
          console.log("regestrrrrrrrrrrrrrrrr ******* ");
          navigate("/home");
          setMessage(response.data.message);
          setSuccessful(true);
         
        },
        (error) => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  // Add functions to toggle between sign-in and sign-up modes
  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  const switchToSignIn = () => {
    setIsSignUp(false);
  };

  return (
    <div className={`my-container ${isSignUp ? "sign-up-mode" : ""}`}>
      <div className="form-container">
        <div className="signin-signup">
          <Form
            onSubmit={isSignUp ? handleRegister : handleLogin}
            ref={form}
            className={isSignUp ? "signup-form" : "signin-form"}
          >
            <h2 className="title">{isSignUp ? "Sign up" : "Sign in"}</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <Input
                type="text"
                placeholder="Username"
                className="inputsigning"
                value={username}
                onChange={onChangeUsername}
                validations={[required, vusername]}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <Input
                type="password"
                placeholder="Password"
                className="inputsigning"
                value={password}
                onChange={onChangePassword}
                validations={[required, vpassword]}
              />
            </div>
            <button className="btn-solid" disabled={loading}>
              {loading && <span className="spinner-border spinner-border-sm"></span>}
              {isSignUp ? "Sign up" : "Login"}
            </button>
            {message && (
              <div className="form-group">
                <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Add account</h3>
            <p>Join Telport System community (it's free 😁) share your localhost, get a URL for each port and more.</p>
            <button className="btn-transparent" onClick={switchToSignUp} id="signup-btn">
              Sign up
            </button>
          </div>
          <img src="../public/images/undraw_hello_re_3evm.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already have one</h3>
            <p>Come here, see your account, edit your subscription type, and more.</p>
            <button className="btn-transparent" onClick={switchToSignIn} id="signin-btn">
              Sign in
            </button>
          </div>
          <img src="../public/images/undraw_sign_in_re_o58h.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
