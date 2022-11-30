import React, { useState } from "react";
import "./Signup.css";
import Radio from "@mui/material/Radio";
import { useNavigate ,useLocation} from "react-router";
import { Link } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CommonButton from "../Common/Buttons/CommonButton";

const Signup = () => {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="signup-container">
      <div className="column-container">
        <h1 className="signup-header">Join as a client or freelancer</h1>
        <div className="box-container mt-3">
          <div
            className={`box ${
              selectedValue === "client" ? "color-box" : "gray-box"
            }`}
            onClick={() => setSelectedValue("client")}
          >
            <div className="d-flex align-items-center">
              <StorefrontIcon
                style={{
                  color: `${
                    selectedValue === "client" ? "#1ba5d8" : "#000000"
                  }`,
                }}
              />
              <Radio
                checked={selectedValue === "client"}
                value="client"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
            </div>

            <p className="box-text">I’m a client, hiring for a project</p>
          </div>
          <div
            className={`box ${
              selectedValue === "freelancer" ? "color-box" : "gray-box"
            }`}
            onClick={() => setSelectedValue("freelancer")}
          >
            <div className="d-flex align-items-center">
              <EngineeringIcon
                style={{
                  color: `${
                    selectedValue === "freelancer" ? "#1ba5d8" : "#000000"
                  }`,
                }}
              />
              <Radio
                checked={selectedValue === "freelancer"}
                value="freelancer"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
            </div>
            <p className="box-text">I’m a freelancer, looking for work</p>
          </div>
        </div>
        <CommonButton
          disabled={selectedValue === ""}
          onClick={() => navigate(`${selectedValue}`)}
          className="mt-5"
          text={
            selectedValue === "client"
              ? "Join as a Client"
              : selectedValue === "freelancer"
              ? "Join as a Freelancer"
              : "Create Account"
          }
        />

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
  );
};

export default Signup;
