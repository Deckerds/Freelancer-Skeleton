import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate, useParams } from "react-router";
import { Col } from "reactstrap";
import Chips from "../Common/Chips/Chips";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShieldIcon from "../../assets/shieldIcon.png";
import { InputAdornment, TextField } from "@mui/material";
import "./ProposalSubmit.css";
import CommonButton from "../Common/Buttons/CommonButton";

const ProposalSubmit = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<any>({});
  const [talentBudget, setTalentBudget] = useState(5);

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
        <p className="header">Submit a Proposal</p>
      </Col>
      <Col md={12} className="d-flex border-container">
        <Col md={12} className="box-section">
          <p className="sub-header">Proposal Settings</p>
          <p className="default-text mt-2">This proposal requires 6 connects</p>
          <p className="default-text mt-2">
            When you submit this proposal, you'll have 126 connects left
          </p>
        </Col>
      </Col>
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
            <Col md={12} className="box-section">
              <h6 className="mb-3">Skills and Expertise</h6>
              {job?.chips?.length > 0 &&
                job.chips.map((chip) => (
                  <Chips key={chip.id} label={chip.name} />
                ))}
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
                <p className=" default-text">{job.expertise}</p>
                <p className="sub-para light-gray">
                  I am looking for a mix of experience and value
                </p>
              </div>
            </Col>
          </Col>
        </Col>
      </Col>
      <Col md={12} className="border-container">
        <Col md={12} className="box-section d-flex">
          <Col md={8}>
            <p className="sub-header">Terms</p>
            <p className="top-text mt-2">
              What is the rate you'd like to bid for this job?
            </p>
            <Col md={12} className="d-flex justify-content-between mt-2">
              <p className="small-text light-gray">
                Your profile rate: $5.00/hr
              </p>
              <p className="small-text light-gray">
                Client's budget: {job.budget}
              </p>
            </Col>
            <Col
              md={12}
              className="d-flex justify-content-between align-items-center border-bottom py-3"
            >
              <div>
                <p className="default-text">Hourly Rate</p>
                <p className="small-text light-gray">
                  Total amount client will see on your proposal
                </p>
              </div>
              <TextField
                type="number"
                value={talentBudget}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                onChange={(e) => setTalentBudget(Number(e.target.value))}
              />
            </Col>
            <Col
              md={12}
              className="d-flex justify-content-between align-items-center border-bottom py-3"
            >
              <div>
                <p className="default-text font-weight-bold">
                  20% KW Service Fee.
                  <span className="text-primary ms-2">Explain this</span>
                </p>
              </div>
              <TextField
                disabled
                type="number"
                value={-1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </Col>
            <Col
              md={12}
              className="d-flex justify-content-between align-items-center py-3"
            >
              <div>
                <p className="default-text">You'll receive</p>
                <p className="small-text light-gray">
                  The estimated amount you'll receive after service fees
                </p>
              </div>
              <TextField
                type="number"
                value={talentBudget - 1}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                onChange={(e) => setTalentBudget(Number(e.target.value))}
              />
            </Col>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Col md={12} className="d-flex flex-column justify-content-center">
              <img
                src={ShieldIcon}
                className="shield-image "
                alt="shield-icon"
              />
              <p className="default-text text-center">
                Includes Hourly Protection.
              </p>
            </Col>
          </Col>
        </Col>
      </Col>
      <Col md={12} className="border-container">
        <Col md={12} className="box-section">
          <Col>
            <p className="top-text">Cover Letter</p>
            <TextField
              className="mt-2"
              style={{ width: "100%" }}
              // value={description}
              multiline
              rows={3}
              // onChange={(e) => setDescription(e.target.value)}
            />
          </Col>
          <Col className="mt-4">
            <p className="top-text">Attachments</p>
            <div className="attach-box box-section">
              <p className="default-text text-center">
                Drag or upload project files
              </p>
            </div>
            <p className="small-text mt-3">
              You may attach up to files under 25 MB each. Include work samples
              or other documents to support your application. Do not attach your
              resume - your profile is automatically forwarded to the client
              with your proposal
            </p>
          </Col>
        </Col>
      </Col>
      <Col md={12} className="border-container">
        <Col md={12} className="box-section">
          <Col>
            <p className="sub-header font-weight-bold">
              Boost your proposal (optional)
            </p>
            <p className="default-text">
              Bid for one of 3 boosted spaces at the top of the client's
              proposal list.
            </p>
            <p className="default-text mt-2">How bidding works</p>
            <ul className="list-style-position">
              <li className="small-text">
                If the client interacts with your proposal, or you're one of the
                top 3 bidders by the time auction closes, then you'll become
                charged your bid or the 3rd highest bid, whichever is less.
              </li>
              <li className="small-text">
                If you're outbid from the top 3 slots before the client
                interacts with your proposal, or there are at most 2 bidders
                (including you) by the time the auction closes , then you'll
                only be charged 6 Connects for submitting your proposal.
              </li>
            </ul>
            <CommonButton btnBorder text="Set a bid" />
          </Col>
        </Col>
      </Col>
      <Col className="d-flex mt-3">
        <CommonButton
          onClick={() => navigate(`/proposal-details/${jobId}`)}
          text="Send"
        />
        <CommonButton className="ms-3" btnBorder text="Cancel" />
      </Col>
    </Col>
  );
};

export default ProposalSubmit;
