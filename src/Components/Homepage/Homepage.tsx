import React, { Fragment } from "react";
import { useNavigate } from "react-router";
import { InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Layer from "../../assets/layer.png";
import "./Homepage.css";
import CommonButton from "../Common/Buttons/CommonButton";
import { Col } from "reactstrap";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Col className="d-lg-flex home-container">
      <Col xs={12} md={5} className="mt-5 ps-5">
        <p
          style={{
            fontSize: "4rem",
            color: "#1ba5d8",
            lineHeight: "3.25rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          How work <br /> should work
        </p>
        <Typography
          style={{
            fontWeight: "lightBold",
            fontSize: "1.2rem",
            color: "#5e6d55",
            lineHeight: "2rem",
          }}
        >
          Forget the old rules. You can have the best people. Right now. Right
          here.
        </Typography>
        <div
          style={{ marginTop: "5rem", marginBottom: "3rem" }}
          className="d-flex align-items-center "
        >
          <div className="searchbar-container me-4">
            <TextField
              placeholder="Search..."
              className="search-bar"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: "#1ba5d8" }} />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {localStorage.getItem("isAuth") !== "true" && (
            <CommonButton
              onClick={() => navigate("/signup")}
              text="Get Started"
            />
          )}
        </div>

        {localStorage.getItem("isAuth") === "true" && (
          <Fragment>
            <CommonButton
              className="me-1 mt-4"
              onClick={() => navigate("/job-post")}
              text="Post a Job"
            />
            <CommonButton
              className="mt-4"
              onClick={() => navigate("/signup")}
              text="Find a Job"
            />
          </Fragment>
        )}
        <Col xs={12} md={12} className="mt-5" style={{ marginBottom: "8rem" }}>
          <p className="light-gray top-text">Trusted By</p>
          <div className="d-flex flex-wrap align-items-center mt-1">
            <img
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/microsoft.svg"
              alt=""
              className="me-4"
            />
            <img
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/airbnb.svg"
              alt=""
              className="me-4"
            />
            <img
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//c_fit/general/logobar/colored/bissell.svg"
              alt=""
              className="me-4"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
              alt=""
              className="sponser-img me-4"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52l43nnDT5sL57viaUz17gk2bry1D3XbxPEROacJOTUOD_NrZimUNj3GbXJUdOSfd7DI&usqp=CAU"
              alt=""
              className="sponser-img "
            />
          </div>
        </Col>
      </Col>
      <Col
        xs={12}
        md={7}
        className="d-flex justify-content-center"
        style={{ marginBottom: "8rem" }}
      >
        <img className="home-image" src={Layer} alt="" />
      </Col>
    </Col>
  );
};

export default Homepage;
