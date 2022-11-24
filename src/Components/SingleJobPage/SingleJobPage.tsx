import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Col } from "reactstrap";
import RectangularTabs from "../Common/ChevronTabs/ChevronTabs";
import ProposalTab from "./components/ProposalTab/ProposalTab";
import TalentsPage from "./components/InvitesTab/InvitesTab";
import JobView from "./components/JobView/JobView";
import HiresView from "./components/HiresView/HiresView";
import "./SingleJobPage.css";

const SingleJobPage = () => {
  const { jobId } = useParams();

  const [job, setJob] = useState<any>({});

  const filterJobById = (id) => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const selectedJob = jobs.filter((job) => job.id === Number(id));
    setJob(selectedJob[0]);
  };

  useEffect(() => {
    filterJobById(jobId);
  }, [jobId]);

  const [activeTab, setActiveTab] = useState(1);

  return (
    <Col md={12} className="main-container jobs-page-height mb-5">
      <Col md={12} className="mb-5">
        <h4>{job.header}</h4>
      </Col>
      <Col xs={12} md={12} className="mb-3">
        <RectangularTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </Col>
      {activeTab === 1 && <JobView job={job} />}
      {activeTab === 2 && <TalentsPage job={job} />}
      {activeTab === 3 && <ProposalTab job={job} />}
      {activeTab === 4 && <HiresView />}
    </Col>
  );
};

export default SingleJobPage;
