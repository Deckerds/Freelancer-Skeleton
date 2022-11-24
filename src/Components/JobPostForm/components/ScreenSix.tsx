import React from "react";
import { Divider } from "@mui/material";
import { Col } from "reactstrap";
import EditButton from "src/Components/Common/EditButton/EditButton";
import Chips from "src/Components/Common/Chips/Chips";
import { useNavigate } from "react-router";
import CommonButton from "src/Components/Common/Buttons/CommonButton";
import moment from "moment";

const ScreenSix = ({
  setScreen,
  header,
  description,
  selectedChips,
  selectedValue,
  scope,
  expertise,
  budgetType,
  budgetFrom,
  budgetTo,
  singleBudget,
}) => {
  const navigate = useNavigate();
  const onSubmitJobPost = () => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const data = {
      id: jobs?.length + 1,
      header,
      description,
      chips: selectedChips,
      scope,
      expertise,
      budgetType,
      budget:
        budgetType === "Hourly"
          ? `$${budgetFrom} - $${budgetTo}/hr`
          : `$${singleBudget}`,
      createdDate: moment().toDate(),
    };

    jobs.push(data);

    localStorage.setItem("jobs", JSON.stringify(jobs));
    navigate(`/jobs/single-view/${jobs?.length}`);
  };

  return (
    <Col className="main-container">
      <Col md={12} className="d-flex justify-content-between mb-4">
        <h2>Job Details</h2>

        <CommonButton text="Post this job" />
      </Col>
      <Col className="job-final-table" md={12}>
        <Col
          md={12}
          className="d-flex justify-content-between align-items-center mb-5"
        >
          <h4 className="mb-0">{header}</h4>
          <EditButton />
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-between align-items-center mb-3"
        >
          <p className="small-font mb-0">{description}</p>
          <EditButton />
        </Col>
        <Divider style={{ background: "black" }} />
        <h6 className="mt-3">Category</h6>
        <Col
          md={12}
          className="d-flex justify-content-between  align-items-center mb-3"
        >
          <p className="small-font  mb-0">Illustration</p>
          <EditButton />
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-between  align-items-center mb-3"
        >
          <Col>
            <h6 className="mb-0">Skills</h6>
            {selectedChips?.length > 0 &&
              selectedChips.map((chip) => (
                <Chips key={chip.id} label={chip.name} />
              ))}
          </Col>
          <EditButton />
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-between  align-items-center mb-3"
        >
          <Col>
            <h6 className="mb-0">Scope</h6>
            <p className="small-font">{`${selectedValue}, ${scope}, ${expertise}`}</p>
          </Col>
          <EditButton />
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-between  align-items-center mb-3"
        >
          <Col>
            <h6 className="mb-0">Budget</h6>
            <p className="small-font">
              {budgetType === "Hourly"
                ? `$${budgetFrom} - $${budgetTo}/hr`
                : `$${singleBudget}`}
            </p>
          </Col>
          <EditButton />
        </Col>
        <Divider style={{ background: "black" }} />
        <Col className="d-flex justify-content-end mt-3">
          <CommonButton
            btnBorder
            text="Back"
            className="me-2"
            onClick={() => setScreen(5)}
          />
          <CommonButton
            onClick={() => onSubmitJobPost()}
            text="Post this job"
          />
        </Col>
      </Col>
    </Col>
  );
};

export default ScreenSix;
