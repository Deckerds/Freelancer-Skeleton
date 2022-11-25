import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, useLocation } from "react-router";
import LogoIcon from "../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
import { Divider, IconButton, Menu, MenuItem } from "@mui/material";
import CommonButton from "../Common/Buttons/CommonButton";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [type, setType] = useState("");

  useEffect(() => {
    setType(location?.pathname?.split("/")[2]);
  }, [location]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="header-main" style={{ position: "sticky", top: 0 }}>
      <div className={`headerNavBar`}>
        <img
          onClick={() => navigate("/")}
          alt="logo"
          src={LogoIcon}
          className={`image`}
        />
        <div className="nav-pages">
          <p
            // onClick={() => navigate("/freelancers")}
            className="default-text nav-text"
          >
            Find Talent
          </p>
          <Divider
            className="mx-3"
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ background: "black" }}
          />
          <p
            onClick={() => navigate("/jobs")}
            className="default-text nav-text"
          >
            Categories
          </p>
          <Divider
            className="mx-3"
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ background: "black" }}
          />
          <p className=" default-text nav-text">Services</p>
          <Divider
            className="mx-3"
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ background: "black" }}
          />
          <p className="default-text nav-text">Blog</p>
          <Divider
            className="mx-3"
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ background: "black" }}
          />
        </div>
        <div className="nav-items">
          {location.pathname !== "/login" &&
            location.pathname !== "/signup" &&
            type !== "client" &&
            type !== "freelancer" &&
            localStorage.getItem("isAuth") !== "true" && (
              <Fragment>
                <p
                  onClick={() => navigate("/login")}
                  className="nav-item default-text"
                >
                  Log In
                </p>
                <CommonButton
                  onClick={() => navigate("/signup")}
                  text="Sign Up"
                />
              </Fragment>
            )}
          {type === "client" && (
            <Fragment>
              <p className="type-text">
                Looking for work?&nbsp;
                <span
                  className="mb-0"
                  style={{
                    cursor: "pointer",
                    color: "#001e00",
                    fontWeight: "600",
                  }}
                  onClick={() => navigate("/signup/freelancer")}
                >
                  Apply as talent
                </span>
              </p>
            </Fragment>
          )}
          {type === "freelancer" && (
            <Fragment>
              <p className="type-text">
                Here to hire talent?&nbsp;
                <span
                  className="mb-0"
                  style={{
                    cursor: "pointer",
                    color: "#001e00",
                    fontWeight: "600",
                  }}
                  onClick={() => navigate("/signup/client")}
                >
                  Join as a Client
                </span>
              </p>
            </Fragment>
          )}
          {localStorage.getItem("isAuth") === "true" && (
            <Fragment>
              <IconButton
                onClick={handleClick}
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/profile");
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/jobs");
                  }}
                >
                  My jobs
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/work");
                  }}
                >
                  Find work
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    localStorage.setItem("isAuth", "false");
                    navigate("/");
                    handleClose();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Fragment>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
