import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedIcon from "@mui/icons-material/Verified";
import Chips from "../Common/Chips/Chips";
import moment from "moment";
import { useNavigate, useParams } from "react-router";
import CommonButton from "../Common/Buttons/CommonButton";
import "./ProposalSubmit.css";

const ProposalDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<any>({});

  const filterJobById = (id) => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const selectedJob = jobs.filter((job) => job.id === Number(id));
    setJob(selectedJob[0]);
  };

  useEffect(() => {
    filterJobById(jobId);
  }, [jobId]);
  return (
    <Col className="main-container">
      <Col md={12} className="mb-3">
        <p className="header">Proposal Details</p>
      </Col>
      <Col md={12} className="d-flex">
        <Col md={8}>
          <Col md={12} className="border-container">
            <Col md={12} className="d-flex">
              <Col md={8} className="border-right">
                <Col md={12} className="box-section border-bottom">
                  <p className="sub-header mb-3">Job Details</p>
                  <p className="top-text">{job.header}</p>
                  <div className="d-flex align-items-center mt-2">
                    <Chips label={job.category} />
                    <p className="ms-3 small-text light-gray">
                      {`Posted ${moment(new Date(job.createdDate)).fromNow()}`}
                    </p>
                  </div>
                  <p className="default-text mt-3">{job.description}</p>
                  <p
                    onClick={() => navigate(`/jobs/single-view/${job.id}`)}
                    className="default-text mt-3 text-primary cursor-pointer"
                  >
                    View Job Posting
                  </p>
                </Col>
                <Col md={12} className="box-section border-bottom">
                  <h6 className="mb-3">Skills and Expertise</h6>
                  {job?.chips?.length > 0 &&
                    job.chips.map((chip) => (
                      <Chips key={chip.id} label={chip.name} />
                    ))}
                </Col>
                <Col md={12} className="box-section">
                  <h6 className="mb-3">Your proposed terms</h6>
                  <Col className="border-bottom pb-2">
                    <p className="top-text font-weight-bold">Hourly Rate</p>
                    <p className="default-text mb-2">
                      Total amount the client will see on your proposal
                    </p>
                    <p className="default-text">$15.00/hr</p>
                  </Col>
                  <Col className="mt-2 mb-4">
                    <p className="top-text font-weight-bold">You'll Receive</p>
                    <p className="default-text mb-2">
                      The estimated amount you'll receive after service fees
                    </p>
                    <p className="default-text">$12.00/hr</p>
                  </Col>
                  <Col className="mt-2 d-flex">
                    <CommonButton text="Change Terms" />
                    <CommonButton
                      className="ms-3"
                      btnBorder
                      text="Withdraw Proposal"
                    />
                  </Col>
                </Col>
              </Col>
              <Col md={4} className="box-section">
                <Col className="d-flex align-items-start mb-3" xs={12}>
                  <AccessTimeIcon
                    style={{ fontSize: "1.25rem" }}
                    className="me-2"
                  />
                  <div>
                    <p className=" default-text">{job.timeRequirement}</p>
                    <p className="sub-para light-gray">{job.budgetType}</p>
                  </div>
                </Col>
                <Col className="d-flex align-items-start mb-3" xs={12}>
                  <MonetizationOnIcon
                    style={{ fontSize: "1.25rem" }}
                    className="me-2"
                  />
                  <div>
                    <p className=" default-text">{job.budget}</p>
                    <p className="sub-para light-gray">{job.budgetType}</p>
                  </div>
                </Col>
                <Col className="d-flex align-items-start mb-3" xs={12}>
                  <CalendarMonthIcon
                    style={{ fontSize: "1.25rem" }}
                    className="me-2"
                  />
                  <div>
                    <p className=" default-text">{job.scope}</p>
                    <p className="sub-para light-gray">Project Length</p>
                  </div>
                </Col>
                <Col className="d-flex align-items-start mb-3 mt-2" xs={12}>
                  <PsychologyIcon
                    style={{ fontSize: "1.25rem" }}
                    className="me-2"
                  />
                  <div>
                    <p className="default-text">{job.expertise}</p>
                    <p className="sub-para light-gray">
                      I am looking for a mix of experience and value
                    </p>
                  </div>
                </Col>
              </Col>
            </Col>
          </Col>
          <Col md={12} className="border-container">
            <Col md={12} className="box-section">
              <Col>
                <p className="sub-header font-weight-bold mb-3">Cover Letter</p>
                <p className="default-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  ab unde, placeat blanditiis eaque doloremque maiores
                  voluptatum eveniet incidunt omnis, veritatis natus explicabo
                  repellat asperiores perferendis accusantium minus repellendus
                  iure!
                </p>
              </Col>
            </Col>
          </Col>
        </Col>
        <Col md={4} className="section-details">
          <h6>About the client</h6>
          <div className="d-flex align-items-center mb-3 mt-3">
            <VerifiedIcon style={{ fontSize: "1rem" }} color="primary" />
            <p className=" ms-1 default-text ">Payment Verified</p>
          </div>
          <h6>Location</h6>
          <div>
            <p className="default-text ">Sri Lanka</p>
            <p className="default-text mb-3">{moment().format("HH:mm A")}</p>
          </div>
          <h6>History</h6>
          <p className="default-text">More than 50 proposals</p>
          <p className="mb-2 sub-para light-gray">
            <b>5</b> Jobs posted
          </p>
          <p className="sub-para light-gray">Member since Sep 15, 2020</p>
        </Col>
      </Col>
    </Col>
  );
};

export default ProposalDetails;
