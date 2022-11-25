import React, { useState } from "react";
import { Divider, MenuItem, Radio, Select } from "@mui/material";
import { Col } from "reactstrap";
import EditButton from "src/Components/Common/EditButton/EditButton";
import Chips from "src/Components/Common/Chips/Chips";
import { useNavigate } from "react-router";
import CommonButton from "src/Components/Common/Buttons/CommonButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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
  category,
}) => {
  const navigate = useNavigate();

  const [timeRequirement, setTimeRequirement] = useState(
    "More than 30 hrs/week"
  );
  const [location, setLocation] = useState("Worldwide");
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

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
      category,
      location,
      timeRequirement,
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
          <p className="default-text">{description}</p>
          <EditButton />
        </Col>
        <Divider style={{ background: "black" }} />
        <h6 className="mt-3">Category</h6>
        <Col
          md={12}
          className="d-flex justify-content-between  align-items-center mb-3"
        >
          <p className="default-text">{category}</p>
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
            <p className="default-text">{`${selectedValue}, ${scope}, ${expertise}`}</p>
          </Col>
          <EditButton />
        </Col>
        <Col
          md={12}
          className="d-flex justify-content-between  align-items-center mb-3"
        >
          <Col>
            <h6 className="mb-0">Budget</h6>
            <p className="default-text">
              {budgetType === "Hourly"
                ? `$${budgetFrom} - $${budgetTo}/hr`
                : `$${singleBudget}`}
            </p>
          </Col>
          <EditButton />
        </Col>
        <Divider style={{ background: "black" }} />
        <Col md={12} className="mt-3 mb-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="mb-0">Advanced Preferences</h6>
            {!expand && (
              <KeyboardArrowDownIcon
                className="cursor-pointer"
                onClick={() => toggleExpand()}
              />
            )}
            {expand && (
              <KeyboardArrowUpIcon
                className="cursor-pointer"
                onClick={() => toggleExpand()}
              />
            )}
          </div>
          {expand && (
            <Col md={12} className="d-flex">
              <Col md={4}>
                <p className="top-text">Time requirement</p>
                <div className="d-flex align-items-center">
                  <Radio
                    onClick={() => setTimeRequirement("More than 30 hrs/week")}
                    checked={timeRequirement === "More than 30 hrs/week"}
                    value={"More than 30 hrs/week"}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    sx={{
                      "&.Mui-checked": {
                        color: "#1ba5d8",
                      },
                    }}
                  />
                  <p className="small-text">More than 30 hrs/week</p>
                </div>
                <div className="d-flex align-items-center">
                  <Radio
                    onClick={() => setTimeRequirement("Less than 30 hrs/week")}
                    checked={timeRequirement === "Less than 30 hrs/week"}
                    value={"Less than 30 hrs/week"}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    sx={{
                      "&.Mui-checked": {
                        color: "#1ba5d8",
                      },
                    }}
                  />
                  <p className="small-text">Less than 30 hrs/week</p>
                </div>
                <div className="d-flex align-items-center">
                  <Radio
                    onClick={() => setTimeRequirement("I'm not sure")}
                    checked={timeRequirement === "I'm not sure"}
                    value={"I'm not sure"}
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    sx={{
                      "&.Mui-checked": {
                        color: "#1ba5d8",
                      },
                    }}
                  />
                  <p className="small-text">I'm not sure</p>
                </div>
              </Col>
              <Col md={4}>
                <p className="top-text">Location</p>
                <Select
                  className="sort-dropdown"
                  displayEmpty
                  fullWidth
                  value={location}
                  defaultValue={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                >
                  <MenuItem className="default-text" selected value="Worldwide">
                    Worldwide
                  </MenuItem>
                  <MenuItem className="default-text" value="Sri Lanka">
                    Sri Lanka
                  </MenuItem>
                  <MenuItem className="default-text" value="United States">
                    United States
                  </MenuItem>
                </Select>
              </Col>
            </Col>
          )}
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
