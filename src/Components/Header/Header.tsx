import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, useLocation } from "react-router";
import LogoIcon from "../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import "./Header.css";
import { Badge, Divider, IconButton, Menu, MenuItem } from "@mui/material";
import moment from "moment";
import CommonButton from "../Common/Buttons/CommonButton";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [type, setType] = useState("");
  const [invisible, setInvisible] = React.useState(false);

  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    setInvitations(JSON.parse(localStorage.getItem("invitations")) || []);
  }, []);

  useEffect(() => {
    if (invitations.length > 0) {
      setInvisible(false);
    } else {
      setInvisible(true);
    }
  }, [invitations]);

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

  const [anchorElNotifications, setAnchorElNotifications] =
    React.useState<null | HTMLElement>(null);
  const openNotifications = Boolean(anchorElNotifications);

  const handleClickNotifications = (event: React.MouseEvent<any>) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
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
            className="mb-0 small-font nav-text"
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
            className="mb-0 small-font nav-text"
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
          <p className="mb-0 small-font nav-text">Services</p>
          <Divider
            className="mx-3"
            orientation="vertical"
            variant="middle"
            flexItem
            style={{ background: "black" }}
          />
          <p className="mb-0 small-font nav-text">Blog</p>
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
                  className="nav-item small-font"
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
                onClick={handleClickNotifications}
                color="primary"
                aria-label="upload notifications"
                component="label"
              >
                <Badge color="error" variant="dot" invisible={invisible}>
                  <MailIcon />
                </Badge>
              </IconButton>
              <Menu
                id="basic-menu-2"
                anchorEl={anchorElNotifications}
                open={openNotifications}
                onClose={handleCloseNotifications}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {invitations.map((invite) => (
                  <MenuItem
                    key={invite.id}
                    onClick={() => {
                      handleCloseNotifications();
                      navigate("/user/invitations");
                    }}
                    className="d-flex flex-column border-bottom"
                  >
                    <p className="light-gray small-font mb-0 align-self-start">
                      {invite.invitation}
                    </p>
                    <p className="mini-font light-gray mb-0 align-self-end">
                      {moment(new Date(invite.inviteTime)).fromNow()}
                    </p>
                  </MenuItem>
                ))}
              </Menu>

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
