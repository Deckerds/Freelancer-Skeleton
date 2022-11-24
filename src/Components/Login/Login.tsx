import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import { InputAdornment, TextField } from "@mui/material";
import GoogleIcon from "../../assets/google.png";
import AppleIcon from "../../assets/appleIcon.png";
import PersonIcon from "@mui/icons-material/Person";
import ButtonIcon from "../Common/Buttons/ButtonIcon";
import CommonButton from "../Common/Buttons/CommonButton";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const loginFunc = () => {
    if (email === "") {
      setEmailError("Email Required");
    } else {
      localStorage.setItem("isAuth", "true");
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <div className="column-container">
        <h1 className="login-header">Log in to KW</h1>
        <div className="d-flex flex-column mt-3">
          <TextField
            id={`login-input`}
            placeholder="Username or Email"
            value={email}
            onChange={(e) => {
              setEmailError("");
              setEmail(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          {emailError && (
            <p className="mb-0 small-font text-danger">{emailError}</p>
          )}
          <CommonButton
            className="mt-3"
            onClick={() => loginFunc()}
            text="Continue with Email"
          />
        </div>
        <div className="mt-3">
          <p className="or-text">
            <span>or</span>
          </p>
        </div>
        <div className="d-flex flex-column">
          <ButtonIcon
            icon={GoogleIcon}
            text={"Continue with Google"}
            type="google"
          />
          <ButtonIcon
            icon={AppleIcon}
            text={"Continue with Apple"}
            type="apple"
          />
        </div>
        <div className="mt-5">
          <p className="or-text">
            <span> Don't have an KW account?</span>
          </p>
        </div>
        <CommonButton onClick={() => navigate("/signup")} text="Sign Up" />
      </div>
    </div>
  );
};

export default Login;
