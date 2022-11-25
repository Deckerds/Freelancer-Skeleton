import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate, useParams } from "react-router";
import { Col } from "reactstrap";
import Chips from "../Common/Chips/Chips";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { InputAdornment, TextField } from "@mui/material";

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
            <Col md={12} className="box-section border-bottom">
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
        <Col md={12} className="box-section">
          <p className="sub-header">Terms</p>
          <Col md={8}>
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
        </Col>
      </Col>
    </Col>
  );
};

export default ProposalSubmit;
