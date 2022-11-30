import React, { useState, useEffect, memo } from "react";
import { Col } from "reactstrap";
import Chips from "../Common/Chips/Chips";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  InputAdornment,
  TextField,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./JobsPage.css";
import { StyledRating } from "src/styles/mui_styles";
import { useNavigate } from "react-router";
import CommonButton from "../Common/Buttons/CommonButton";
import { getHighlightedText, sortByDate } from "src/common/commonFunctions";


const JobsPage = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState("");
  const [projectLength, setProjectLength] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [sortValue, setSortValue] = useState("newest");

  useEffect(() => {
    setJobs([...sortByDate(JSON.parse(localStorage.getItem("jobs")) || [])]);
  }, []);

  const filterJobs = (type, level) => {
    if (type === "experience" && level !== "") {
      const allJobs = JSON.parse(localStorage.getItem("jobs")) || [];
      const filteredJobs = allJobs.filter((job) => job.expertise === level);
      setJobs([...sortByDate(filteredJobs)]);
    } else if (type === "length" && level !== "") {
      const allJobs = JSON.parse(localStorage.getItem("jobs")) || [];
      const filteredJobs = allJobs.filter((job) => job.scope === level);
      setJobs([...sortByDate(filteredJobs)]);
    } else {
      setJobs([...sortByDate(JSON.parse(localStorage.getItem("jobs")) || [])]);
    }
  };

  useEffect(() => {
    filterJobs("experience", experienceLevel);
  }, [experienceLevel]);

  useEffect(() => {
    filterJobs("length", projectLength);
  }, [projectLength]);

  useEffect(() => {
    if (searchKeyword.length === 0) {
      setJobs([...sortByDate(JSON.parse(localStorage.getItem("jobs")) || [])]);
      setHighlightedText("");
    }
  }, [searchKeyword]);

  const clearFilters = () => {
    setExperienceLevel("");
    setProjectLength("");
  };

  const searchJobs = (keyword: string) => {
    setHighlightedText(searchKeyword);
    const allJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const headerFilteredJobs = allJobs.filter((job) =>
      job?.header?.toLowerCase().includes(keyword.toLowerCase())
    );
    const descriptionFilteredJobs = allJobs.filter((job) =>
      job?.description?.toLowerCase().includes(keyword.toLowerCase())
    );
    const chipFilteredJobs = allJobs.filter((job) =>
      job.chips.some((chip) =>
        chip.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    let filteredJobs = [
      ...headerFilteredJobs,
      ...chipFilteredJobs,
      ...descriptionFilteredJobs,
    ];

    filteredJobs = filteredJobs.filter(
      (ele, ind) => ind === filteredJobs.findIndex((elem) => elem.id === ele.id)
    );

    setJobs([...sortByDate(filteredJobs)]);
  };

  const sortAllJobs = (value: string) => {
    if (value === "newest" && jobs.length > 0) {
      const allJobs = [...jobs];

      setJobs([...sortByDate(allJobs)]);
    }
  };

  return (
    <Col md={12} className="main-container d-flex">
      <Col xs={12} md={3} className="restrict-mobile-display">
        <h5>Filter By</h5>
        <Col md={12} className="mt-3 border-bottom">
          <h6>Experience level</h6>
          <div className="d-flex align-items-center mt-2">
            <Checkbox
              checked={experienceLevel === "Entry"}
              onClick={() => setExperienceLevel("Entry")}
              color="info"
              value="Entry"
            />
            <p className="type-text">Entry Level</p>
          </div>
          <div className="d-flex align-items-center">
            <Checkbox
              checked={experienceLevel === "Intermediate"}
              onClick={() => setExperienceLevel("Intermediate")}
              color="info"
              value="Intermediate"
            />
            <p className="type-text">Intermediate Level</p>
          </div>
          <div className="d-flex align-items-center">
            <Checkbox
              checked={experienceLevel === "Expert"}
              onClick={() => setExperienceLevel("Expert")}
              color="info"
              value="Expert"
            />
            <p className="type-text">Expert Level</p>
          </div>
        </Col>
        <Col md={12} className="mt-3 border-bottom">
          <h6>Project length</h6>
          <div className="d-flex align-items-center mt-2">
            <Checkbox
              checked={projectLength === "1 to 3 months"}
              onClick={() => setProjectLength("1 to 3 months")}
              color="info"
              value="1 to 3 months"
            />
            <p className="type-text">1 to 3 months</p>
          </div>
          <div className="d-flex align-items-center">
            <Checkbox
              checked={projectLength === "3 to 6 months"}
              onClick={() => setProjectLength("3 to 6 months")}
              color="info"
              value="3 to 6 months"
            />
            <p className="type-text">3 to 6 months</p>
          </div>
          <div className="d-flex align-items-center">
            <Checkbox
              checked={projectLength === "More than 6 months"}
              onClick={() => setProjectLength("More than 6 months")}
              color="info"
              value={"More than 6 months"}
            />
            <p className="type-text">More than 6 months</p>
          </div>
        </Col>
        <Col md={12} className="mt-3 d-flex justify-content-end pe-3">
          <CommonButton onClick={() => clearFilters()} text="Clear Filters" />
        </Col>
      </Col>
      <Col xs={12} md={9} className="border-container-column">
        <Col md={12} className="search-container">
          <TextField
            placeholder="Search..."
            value={searchKeyword || ""}
            onChange={(e) => setSearchKeyword(e.target.value)}
            className="search-bar"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#1ba5d8" }} />
                </InputAdornment>
              ),
            }}
          />
          <CommonButton
            className="ms-3"
            text="Search"
            onClick={() => searchJobs(searchKeyword)}
          />
        </Col>
        <Col md={12} className="d-flex align-items-center justify-content-end">
          <p className="default-text me-2">Sort :</p>
          <Select
            className="me-3 sort-dropdown"
            displayEmpty
            value={sortValue}
            defaultValue={sortValue}
            onChange={(e) => {
              sortAllJobs(e.target.value);
              setSortValue(e.target.value);
            }}
          >
            <MenuItem className="default-text" selected value="newest">
              Newest
            </MenuItem>
            <MenuItem className="default-text" value="client rating">
              Client Rating
            </MenuItem>
          </Select>
        </Col>
        {jobs?.length > 0 &&
          jobs.map((job, index) => (
            <Col
              onClick={() => navigate(`single-view/${job.id}`)}
              className={`${
                jobs.length - 1 === index && "mb-3"
              } single-job-container`}
              md={12}
              key={job.id}
            >
              <h5>{getHighlightedText(job.header, highlightedText)}</h5>
              <p className="default-text">
                <b>{`${job.budgetType}: ${job.budget} - `}</b>
                {`${job.expertise} - Est. Time: ${job.scope}`}
              </p>
              <p className="default-text">
                {getHighlightedText(job.description, highlightedText)}
              </p>
              {job?.chips.length > 0 &&
                job.chips.map((chip) => (
                  <Chips key={chip.id} label={chip.name} />
                ))}
              <Col md={12} className="d-flex align-items-center mt-2">
                <VerifiedIcon style={{ fontSize: "1rem" }} color="primary" />
                <p
                  style={{ fontSize: "0.8rem" }}
                  className="ms-1 light-gray mb-0 me-1"
                >
                  Payment Verified
                </p>
                <StyledRating
                  readOnly
                  name="size-small"
                  defaultValue={5}
                  size="small"
                />
                <p
                  style={{ fontSize: "0.8rem" }}
                  className="ms-1 light-gray mb-0 me-1"
                >
                  <b>$1k+ </b>spent
                </p>
                <LocationOnIcon style={{ fontSize: "1rem" }} />
                <p style={{ fontSize: "0.8rem" }} className="ms-1 mb-0">
                  United States
                </p>
              </Col>
            </Col>
          ))}
        {jobs?.length === 0 && (
          <p className="mt-3 align-self-center">No Jobs Found</p>
        )}
      </Col>
    </Col>
  );
};

export default memo(JobsPage);
