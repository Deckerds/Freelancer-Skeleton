import React, { Fragment, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router";
import { Col } from "reactstrap";
import { hardCodeUser } from "src/common/hardcodes";
import UserAvatar from "src/Components/Common/UserAvatar/UserAvatar";
import {
  Checkbox,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CommonButton from "src/Components/Common/Buttons/CommonButton";
import ClientBilling from "./components/ClientBilling";

const SendInvite = () => {
  const navigate = useNavigate();
  const [expandSectionOne, setExpandSectionOne] = useState(false);
  const [expandSectionTwo, setExpandSectionTwo] = useState(false);
  const [billingSection, setBillingSection] = useState(false);

  const toggleSectionOne = () => {
    setExpandSectionOne(!expandSectionOne);
  };

  const toggleSectionTwo = () => {
    setExpandSectionTwo(!expandSectionTwo);
  };

  return (
    <Fragment>
      {!billingSection && (
        <Col md={12} className="main-container">
          <Col md={12} className="mb-3">
            <p className="header">Send an Offer</p>
          </Col>
          <Col md={12} className="border-container">
            <Col md={12} className="box-section">
              <Col md={12} className="d-flex justify-content-between">
                <Col md={6} className="d-flex align-items-center">
                  <UserAvatar
                    alt={hardCodeUser.name}
                    src={hardCodeUser.profile}
                    availability={hardCodeUser.availability}
                  />
                  <div className="ms-3">
                    <p className="top-text font-weight-bold theme-blue">
                      {hardCodeUser.name}
                    </p>
                    <p className="default-text">React Developer</p>
                    <p className="default-text mt-2">
                      California, United States
                    </p>
                    <p className="small-text">
                      {`${moment().format("HH:mm A")} local time`}
                    </p>
                    <p
                      onClick={() => navigate("/profile")}
                      className="small-text text-primary cursor-pointer"
                    >
                      View Profile
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
          </Col>
          <Col md={12} className="border-container">
            <Col md={12}>
              <Col md={12} className="box-section">
                <p className="header">Job Details</p>
                <p className="top-text font-weight-bold mt-3">Hiring Team</p>
                <Select
                  className="sort-dropdown mt-2"
                  displayEmpty
                  //   value={location}
                  defaultValue={"Your Team"}
                  //   onChange={(e) => {
                  //     setLocation(e.target.value);
                  //   }}
                >
                  <MenuItem className="default-text" selected value="Your Team">
                    Your Team
                  </MenuItem>
                </Select>
                <p className="top-text font-weight-bold mt-3">
                  Related Job Posting (Optional)
                </p>
                <Select
                  className="sort-dropdown mt-2"
                  displayEmpty
                  //   value={location}
                  defaultValue={"React Developer"}
                  //   onChange={(e) => {
                  //     setLocation(e.target.value);
                  //   }}
                >
                  <MenuItem
                    className="default-text"
                    selected
                    value="React Developer"
                  >
                    React Developer
                  </MenuItem>
                </Select>
                <p className="top-text font-weight-bold mt-3">Contract Title</p>
                <TextField
                  className="sort-dropdown mt-2"
                  defaultValue={"React Developer"}
                />
              </Col>
            </Col>
          </Col>
          <Col md={12} className="border-container">
            <Col md={12}>
              <Col md={12} className="section">
                <p className="header">Contract Terms</p>
                <p className="default-text mt-3">
                  You're protected by payment protection. Only pay for the work
                  you authorize.
                </p>
                <p className="top-text font-weight-bold mt-3">Payment Option</p>
                <p className="default-text">Hourly</p>
                <p className="top-text font-weight-bold mt-3">
                  Pay by the hour
                </p>
                <p className="default-text">$15.00 /hr</p>
                <p className="small-text light-gray">
                  {hardCodeUser.name}'s profile rate is $15.00 /hr
                </p>
                <p className="top-text font-weight-bold mt-3">Weekly Limit</p>
                <p className="small-text light-gray">
                  Setting weekly limit is a great way to help ensure you stay on
                  budget
                </p>
                <p className="default-text mt-3">40 hrs/week</p>
                <p className="small-text light-gray">$600.00 max/week</p>
                <div className="d-flex align-items-center mt-3">
                  <Checkbox
                    className="m-0 p-0"
                    checked={true}
                    //   onClick={() => setKeepMeLogged(!keepMeLogged)}
                    color="info"
                    // value={keepMeLogged}
                  />
                  <p className="default-text">
                    Allow freelancer to log time manually if needed.
                  </p>
                </div>
                <p className="top-text font-weight-bold mt-3">
                  Start Date (Optional)
                </p>
                <TextField className="mt-3" type="date" />
              </Col>
              <Col md={12} className="section">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="sub-header">
                    Add automatic weekly payments for the freelancer (Optional)
                  </p>
                  {!expandSectionOne && (
                    <KeyboardArrowDownIcon
                      className="cursor-pointer"
                      onClick={() => toggleSectionOne()}
                    />
                  )}
                  {expandSectionOne && (
                    <KeyboardArrowUpIcon
                      className="cursor-pointer"
                      onClick={() => toggleSectionOne()}
                    />
                  )}
                </div>
                {expandSectionOne && (
                  <Col md={12}>
                    <p className="default-text mt-2">
                      Weekly payments are on top of the freelancer’s hours
                      billed. (Think of it like a retainer, a set amount paid on
                      a regular and recurring basis.) How does it work?
                    </p>
                    <p className="default-text font-weight-bold mt-3">
                      Set an automatic weekly payment for {hardCodeUser.name}{" "}
                      (Optional)
                    </p>
                    <TextField
                      className="mt-2"
                      type="number"
                      //   value={singleBudget}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                      //   onChange={(e) => setSingleBudget(e.target.value)}
                    />
                  </Col>
                )}
              </Col>
              <Col md={12} className="box-section">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="sub-header">How do hourly contracts work?</p>
                  {!expandSectionTwo && (
                    <KeyboardArrowDownIcon
                      className="cursor-pointer"
                      onClick={() => toggleSectionTwo()}
                    />
                  )}
                  {expandSectionTwo && (
                    <KeyboardArrowUpIcon
                      className="cursor-pointer"
                      onClick={() => toggleSectionTwo()}
                    />
                  )}
                </div>
                {expandSectionTwo && (
                  <Col md={12}>
                    <p className="default-text mt-2">
                      Before work begins, agree on a certain hourly rate and
                      weekly limit (if appropriate) with your freelancer. The
                      Work Diary captures snapshots of your freelancer’s screen
                      every 10 minutes, helping to verify that work has been
                      completed as invoiced. You can review these screenshots
                      before you pay your freelancer.
                    </p>
                    <p className="default-text mt-3">
                      Every Monday you’ll be invoiced for the previous week’s
                      hours based on your freelancers’ Work Diaries (taxes and
                      fees may apply). Your default billing method is charged
                      automatically for the balance due. If there’s an issue,
                      you have until Friday to file a dispute.
                    </p>
                  </Col>
                )}
              </Col>
            </Col>
          </Col>
          <Col md={12} className="border-container">
            <Col md={12} className="box-section">
              <p className="header">Work Description</p>
              <p className="mt-4 default-text">Add a description of the work</p>
              <TextField
                className="mt-2 default-text"
                style={{ width: "100%" }}
                defaultValue={
                  "We are looking for a great JavaScript developer who is proficient with React.js. Your primary focus will be on developing user interface components and implementing them following well-known React.js workflows (such as Flux or Redux). You will ensure that these components and the overall application are robust and easy to maintain. You will coordinate with the rest of the team working on different layers of the infrastructure. Therefore, a commitment to collaborative problem solving, sophisticated design, and quality product is important."
                }
                multiline
                rows={3}
                // onChange={(e) => setDescription(e.target.value)}
              />
              <CommonButton btnBorder text="Attach File" className="mt-3" />
              <p className="mt-2 light-gray default-text">
                Max file size: 25 MB
              </p>
            </Col>
          </Col>
          <Col md={12} className="border-container">
            <Col md={12} className="box-section">
              <div className="d-flex align-items-center mt-3">
                <Checkbox
                  className="m-0 p-0"
                  checked={true}
                  //   onClick={() => setKeepMeLogged(!keepMeLogged)}
                  color="info"
                  // value={keepMeLogged}
                />
                <p className="default-text ms-3">
                  Yes, I understand and agree to the
                  <span className="text-primary"> Terms of Service</span>,
                  including the
                  <span className="text-primary">User Agreement</span> and
                  <span className="text-primary"> Privacy Policy.</span>
                </p>
              </div>
              <div className="d-flex justify-content-end align-items-center mt-3">
                <CommonButton btnBorder text="Cancel" />
                <CommonButton
                  onClick={() => setBillingSection(true)}
                  className="ms-3"
                  text="Continue"
                />
              </div>
            </Col>
          </Col>
        </Col>
      )}
      {billingSection && (
        <ClientBilling setBillingSection={setBillingSection} />
      )}
    </Fragment>
  );
};

export default SendInvite;
