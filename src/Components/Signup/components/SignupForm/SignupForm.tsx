import React, { useState, useEffect, Fragment } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Checkbox,
  Link,
} from "@mui/material";
import GoogleIcon from "../../../../assets/google.png";
import AppleIcon from "../../../../assets/appleIcon.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "./SignupForm.css";
import ButtonIcon from "src/Components/Common/Buttons/ButtonIcon";
import CommonButton from "src/Components/Common/Buttons/CommonButton";

const SignupForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [infoChecked, setInfoChecked] = useState(false);
  const [permissionChecked, setPermissionChecked] = useState(false);

  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    setType(location?.pathname?.split("/")[2]);
  }, [location]);

  const changeCountry = (e: any) => {
    setCountry(e.target.value);
  };

  return (
    <Fragment>
      <div className="form-container">
        <div className="form-column-container">
          <h1 className="signup-header">
            {type === "client"
              ? "Sign up to hire talent"
              : "Sign up to find work you love"}
          </h1>
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
          <div className="mt-3">
            <p className="or-text">
              <span>or</span>
            </p>
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <div>
              <TextField fullWidth id={`signup-input`} placeholder="Name" />
            </div>
            <div>
              <TextField fullWidth id={`signup-input`} placeholder="Username" />
            </div>
          </div>
          <div className="mt-2">
            <TextField
              fullWidth
              id={`signup-input-long`}
              placeholder="Work email address"
            />
          </div>
          <div className="mt-2">
            <TextField
              fullWidth
              id={`signup-input-long`}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <VisibilityIcon style={{ fontSize: "0.9rem" }} />
                      ) : (
                        <VisibilityOffIcon style={{ fontSize: "0.9rem" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="mt-2">
            <Select
              fullWidth
              id={`signup-input-long`}
              displayEmpty
              value={country}
              defaultValue=""
              style={{ height: "2.75rem" }}
              onChange={(e) => changeCountry(e)}
            >
              <MenuItem selected value="">
                Sri Lanka
              </MenuItem>
              <MenuItem selected value="India">
                India
              </MenuItem>
            </Select>
          </div>
          <div className="d-flex align-items-center mt-3">
            <Checkbox
              checked={infoChecked}
              onClick={() => setInfoChecked(!infoChecked)}
              color="info"
            />
            <p className="type-text mb-0">
              Send me emails with tips on how to find talent that fits my needs.
            </p>
          </div>
          <div className="d-flex align-items-center mt-3">
            <Checkbox
              checked={permissionChecked}
              onClick={() => setPermissionChecked(!permissionChecked)}
              color="info"
            />
            <p className="type-text mb-0">
              Yes, I understand and agree to the KW Terms of Service, including
              the User Agreement and Privacy Policy .
            </p>
          </div>
          <CommonButton className="mt-3" text="Create my account" />
          <p className="login-text">
            Already have an account?{" "}
            <Link
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SignupForm;
