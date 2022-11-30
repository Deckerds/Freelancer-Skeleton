import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import { Checkbox, InputAdornment, TextField } from "@mui/material";
import GoogleIcon from "../../assets/google.png";
import AppleIcon from "../../assets/appleIcon.png";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import ButtonIcon from "../Common/Buttons/ButtonIcon";
import CommonButton from "../Common/Buttons/CommonButton";
import { Col } from "reactstrap";
import client from "src/client";
import { useDispatch, useSelector } from "react-redux";
import { login } from "src/redux/actions/loginActions";
import AuthTokenHandler from "src/helpers/AuthTokenHandler";
import { permissions } from "src/redux/actions/permisstionActions";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userGroup = useSelector((state: any) => state.loginUser.user.groups);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [keepMeLogged, setKeepMeLogged] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const togglePassword = () => {
    setPasswordOpen(!passwordOpen);
  };

  const loginWithEmailFunc = async () => {
    if (email === "") {
      setEmailError(process.env.React_App_email_required);
    } else {
      client.get(`/user/email?email=${email}`).then((response) => {
        if (response.data.isExist) {
          togglePassword();
        }
        setEmailError(process.env.React_App_email_error);
      });
    }
  };

  const loginWithPassword = async () => {
    const userDetails = {
      email: email,
      password: password,
    };
    client
      .post("/auth/sign-in", userDetails)
      .then((response) => {
        const accessToken = response.data.accessToken;
        const refreshToken = response.data.refreshToken;
        AuthTokenHandler(accessToken, refreshToken, "true");
        dispatch(login(response.data.userData));

        client
          .get(`/permissions?group=${userGroup[0]}`)
          .then((permissionsResponse) => {
            dispatch(permissions(permissionsResponse));
          });
        navigate("/");
      })
      .catch((err) => {
        navigate("/login");
        setPasswordError(process.env.React_App_password_error);
      });
  };
  return (
    <Col className="login-container">
      {!passwordOpen && (
        <Col className="column-container">
          <h1 className="login-header">Log in to KW</h1>
          <div className="d-flex flex-column mt-3">
            <TextField
              id={`login-input`}
              placeholder="Username or Email"
              type="email"
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
              <p className="default-text text-danger">{emailError}</p>
            )}
            <CommonButton
              className="mt-3"
              onClick={() => loginWithEmailFunc()}
              text="Continue with Email"
            />
          </div>
          <div className="mt-3">
            <p className="or-text">
              <span>or</span>
            </p>
          </div>
          <Col className="d-flex flex-column">
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
          </Col>
          <div className="mt-5">
            <p className="or-text">
              <span> Don't have an KW account?</span>
            </p>
          </div>
          <CommonButton
            className="me-5 ms-5"
            onClick={() => navigate("/signup")}
            text="Sign Up"
          />
        </Col>
      )}
      {passwordOpen && (
        <Col className="column-container">
          <h1 className="login-header">Welcome</h1>
          <p className="default-text text-center">{email}</p>
          <Col className="d-flex flex-column mt-3">
            <TextField
              id={`login-input`}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPasswordError("");
                setPassword(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            {passwordError && (
              <p className="default-text text-danger">{passwordError}</p>
            )}
            <Col className="d-flex justify-content-between align-items-center py-3">
              <div className="d-flex align-items-center">
                <Checkbox
                  className="m-0 p-0"
                  checked={keepMeLogged === true}
                  onClick={() => setKeepMeLogged(!keepMeLogged)}
                  color="info"
                />
                <p className="default-text">Keep me logged in</p>
              </div>
              <p className="default-text text-primary">Forgot password?</p>
            </Col>
            <CommonButton
              className="mt-3 me-5 ms-5"
              onClick={() => loginWithPassword()}
              text="Log in"
            />
          </Col>
          <Col className="mt-2">
            <p className="default-text text-center font-weight-bold cursor-pointer">
              Not you?
            </p>
          </Col>
        </Col>
      )}
    </Col>
  );
};

export default Login;
