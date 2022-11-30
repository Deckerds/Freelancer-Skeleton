import { TextField } from "@mui/material";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router";
import { Col } from "reactstrap";
import { hardCodeUser } from "src/common/hardcodes";
import CommonButton from "src/Components/Common/Buttons/CommonButton";
import Chips from "src/Components/Common/Chips/Chips";
import UserAvatar from "src/Components/Common/UserAvatar/UserAvatar";
import "../../SingleJobPage.css";

const SingleMessageView = () => {
  const navigate = useNavigate();
  return (
    <Col md={12} className="main-container">
      <Col md={12} className="border-container">
        <Col md={12}>
          <Col md={12} className="section">
            <Col md={12} className="d-lg-flex justify-content-between">
              <Col xs={12} md={6} className="d-flex align-items-center">
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
                  <p className="default-text mt-2">California, United States</p>
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
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center justify-content-md-end align-items-center mt-4 mt-md-0"
              >
                <CommonButton className="me-3" btnBorder text="Shortlist" />
                <CommonButton text="Hire Freelancer" />
              </Col>
            </Col>
          </Col>
          <Col md={12} className="d-lg-flex">
            <Col xs={12} md={3} className="box-section border-right">
              <p className="default-text">Applicant</p>
              <p className="small-text">
                Tharuka has applied to or been invited to your or your company's
                job React Developer
              </p>
              <p className="default-text font-weight-bold mt-3 mb-2">
                Get a second opinion
              </p>
              <div className="d-flex align-items-center">
                <p className="default-text text-start">
                  Invite coworkers to help you review freelancers
                </p>
                <CommonButton btnBorder text="invite" />
              </div>
            </Col>
            <Col xs={12} md={9} className="box-section">
              <div className="d-flex align-items-center justify-content-between">
                <p className="sub-header">Proposal Details</p>
                <div>
                  <p className="sub-header font-weight-bold">$15.00/hr</p>
                  <p className="small-text">Proposed Bid</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="sub-header mb-2">Cover Letter</p>
                <p className="default-text">
                  We are looking for a great JavaScript developer who is
                  proficient with React.js. Your primary focus will be on
                  developing user interface components and implementing them
                  following well-known React.js workflows (such as Flux or
                  Redux). You will ensure that these components and the overall
                  application
                </p>
              </div>
              <div className="mt-3">
                <p className="sub-header mb-2">Chat with {hardCodeUser.name}</p>
                <TextField
                  className="mt-2"
                  style={{ width: "100%" }}
                  // value={description}
                  multiline
                  rows={3}
                  // onChange={(e) => setDescription(e.target.value)}
                />
                <CommonButton disabled className="mt-3" text="Send Message" />
              </div>
            </Col>
          </Col>
        </Col>
      </Col>
      <Col md={12} className="border-container">
        <Col md={12} className="d-lg-flex">
          <Col xs={12} md={3} className="box-section border-right">
            <p className="top-text font-weight-bold">Hours per week</p>
            <p className="default-text">As Needed - Open to Offers</p>
            <p className="top-text font-weight-bold mt-3">Languages</p>
            <p className="default-text">
              English: <span className="light-gray">Conversational</span>
            </p>
            <p className="top-text font-weight-bold mt-3">Education</p>
            <p className="default-text">
              Sri Lanka Institute of Information Technology (SLIIT)
            </p>
            <p className="small-text light-gray">2016-2019</p>
          </Col>
          <Col xs={12} md={9}>
            <Col md={12} className="box-section border-bottom">
              <div className="d-flex align-items-center justify-content-between">
                <p className="header">React Developer</p>
                <p className="sub-header font-weight-bold">$15.00/hr</p>
              </div>
              <div className="mt-3">
                <p className="default-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat tempore, dolor obcaecati rerum labore ducimus laborum
                  dignissimos aliquid autem odit sint consectetur? Soluta
                  sapiente necessitatibus eius aliquid nisi! Quae, repellat.
                </p>
              </div>
            </Col>
            <Col md={12} className="box-section">
              <p className="sub-header">Skills</p>
              {hardCodeUser.chips.map((chip) => (
                <Chips key={chip.id} label={chip.name} />
              ))}
            </Col>
          </Col>
        </Col>
      </Col>
      <Col md={12} className="border-container">
        <Col md={12} className="box-section">
          <p className="header mb-3">Employment History</p>
          <p className="top-text">Software Engineer | Sample Company</p>
          <p className="small-text light-gray">September 2020 - Present</p>
        </Col>
      </Col>
    </Col>
  );
};

export default SingleMessageView;
