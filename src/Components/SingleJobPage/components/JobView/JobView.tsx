import React from "react";
import moment from "moment";
import { Col } from "reactstrap";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PsychologyIcon from "@mui/icons-material/Psychology";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Chips from "../../../Common/Chips/Chips";
import { TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PushPinIcon from "@mui/icons-material/PushPin";
import CloseIcon from "@mui/icons-material/Close";
import LockClockIcon from "@mui/icons-material/LockClock";

const JobView = ({ job }) => {
  return (
    <Col className="border-container" md={12}>
      <Col xs={12} md={8} className="border-right">
        <Col className="section" md={12}>
          <h6 className="mb-0">Front-End Development</h6>
          <p className=" small-text light-gray mt-1">
            {`Posted ${moment(new Date(job.createdDate)).fromNow()}`}
          </p>
          <div className="d-flex align-items-center mt-4">
            <LocationOnIcon color="primary" style={{ fontSize: "1rem" }} />
            <p style={{ fontSize: "0.8rem" }} className="ms-1 mb-0">
              Worldwide
            </p>
          </div>
        </Col>
        <Col className="section d-lg-flex" md={12}>
          <p className="default-text ">{job.description}</p>
        </Col>
        <Col className="section d-lg-flex" md={12}>
          <Col className="d-flex align-items-start" xs={12} md={4}>
            <MonetizationOnIcon
              style={{ fontSize: "1.25rem" }}
              className="me-2"
            />
            <div>
              <p className=" default-text">{job.budget}</p>
              <p className="sub-para light-gray">{job.budgetType}</p>
            </div>
          </Col>
          <Col className="d-flex align-items-start mb-2" xs={12} md={4}>
            <CalendarMonthIcon
              style={{ fontSize: "1.25rem" }}
              className="me-2"
            />
            <div>
              <p className=" default-text">{job.scope}</p>
              <p className="sub-para light-gray">Project Length</p>
            </div>
          </Col>
          <Col className="d-flex align-items-start mb-2" xs={12} md={4}>
            <PsychologyIcon style={{ fontSize: "1.25rem" }} className="me-2" />
            <div>
              <p className=" default-text">{job.expertise}</p>
              <p className="sub-para light-gray">
                I am looking for a mix of experience and value
              </p>
            </div>
          </Col>
        </Col>
        <Col className="section d-lg-flex" md={12}>
          <p className="default-text ">
            <b>Project Type:</b> Ongoing Project
          </p>
        </Col>
        <Col className="section" md={12}>
          <h6 className="mb-3">Skills and Expertise</h6>
          {job?.chips?.length > 0 &&
            job.chips.map((chip) => <Chips key={chip.id} label={chip.name} />)}
        </Col>
        <Col className="section" md={12}>
          <h6 className="mb-3">Activity on this job</h6>
          <p className="light-gray default-text">Proposals: 20 to 50</p>
          <p className="light-gray default-text">
            Last viewed by client: 4 minutes ago
          </p>
          <p className="light-gray default-text">Interviewing: 0</p>
          <p className="light-gray default-text">Invites sent: 0</p>
          <p className="light-gray default-text">Unanswered invites: 0</p>
        </Col>
      </Col>
      <Col xs={12} md={4}>
        <Col className="section" md={12}>
          <div className="d-flex align-items-center mb-2">
            <EditIcon color="primary" style={{ fontSize: "1rem" }} />
            <p className="mb-0 ms-2 text-primary cursor-pointer">
              Edit Posting
            </p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <VisibilityIcon color="primary" style={{ fontSize: "1rem" }} />
            <p className="mb-0 ms-2 text-primary cursor-pointer">
              View posting
            </p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <PushPinIcon color="primary" style={{ fontSize: "1rem" }} />
            <p className="mb-0 ms-2 text-primary cursor-pointer">
              Reuse posting
            </p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <CloseIcon color="primary" style={{ fontSize: "1rem" }} />
            <p className="mb-0 ms-2 text-primary cursor-pointer">
              Remove posting
            </p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <LockClockIcon color="primary" style={{ fontSize: "1rem" }} />
            <p className="mb-0 ms-2 text-primary cursor-pointer">
              Make private
            </p>
          </div>
        </Col>
        <Col className="section" md={12}>
          <h6>About the client</h6>
          <div className="d-flex align-items-center mb-3 mt-3">
            <VerifiedIcon style={{ fontSize: "1rem" }} color="primary" />
            <p className=" ms-1 default-text ">Payment Verified</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <LocationOnIcon style={{ fontSize: "1rem" }} />
            <p className=" ms-1 default-text ">Sri Lanka</p>
          </div>
          <p className="mb-2 sub-para light-gray">
            <b>5</b> Jobs posted
          </p>
          <p className="sub-para light-gray">Member since Sep 15, 2020</p>
        </Col>
        <Col className="section-last" md={12}>
          <h6>Job link</h6>
          <TextField
            disabled
            value={"https://www.upwork.com/jobs/~01b526732d14aa94b8"}
          />
        </Col>
      </Col>
    </Col>
  );
};

export default JobView;
