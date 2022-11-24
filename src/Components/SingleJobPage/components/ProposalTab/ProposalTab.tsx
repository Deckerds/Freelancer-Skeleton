import React, { useState, useEffect, useCallback } from "react";
import { Col } from "reactstrap";
import { TextField, IconButton, Radio, MenuItem, Select } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CommonButton from "../../../Common/Buttons/CommonButton";
import { Tab, Tabs } from "react-bootstrap";
import { allTalents } from "src/common/hardcodes";
import "../../SingleJobPage.css";
import ProposalBox from "src/Components/Common/TalentDetails/ProposalBox";

const ProposalTab = ({ job }) => {
  const [talents, setTalents] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [tab, setTab] = useState("proposal");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [sortValue, setSortValue] = useState("Best match");

  const filterTalents = useCallback(() => {
    const chips = job.chips.map((chip) => chip.name);

    const filtered = allTalents.filter((fil) =>
      chips.some((ele) => fil.chips.includes(ele))
    );
    setTalents([...filtered]);
  }, [job.chips]);

  useEffect(() => {
    filterTalents();
  }, [job, filterTalents]);

  const searchTalents = (keyword: string) => {
    setHighlightedText(searchKeyword);
    const headerFilteredTalents = allTalents.filter((ele) =>
      ele?.name?.toLowerCase().includes(keyword.toLowerCase())
    );
    const descriptionFilteredTalents = allTalents.filter((ele) =>
      ele?.description?.toLowerCase().includes(keyword.toLowerCase())
    );
    const chipFilteredTalents = allTalents.filter((ele) =>
      ele.chips.some((chip) =>
        chip.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    let filteredTalents = [
      ...headerFilteredTalents,
      ...descriptionFilteredTalents,
      ...chipFilteredTalents,
    ];

    filteredTalents = filteredTalents.filter(
      (ele, ind) =>
        ind === filteredTalents.findIndex((elem) => elem.id === ele.id)
    );

    setTalents([...filteredTalents]);
  };

  useEffect(() => {
    if (searchKeyword.length === 0) {
      filterTalents();
      setHighlightedText("");
    }
  }, [filterTalents, searchKeyword]);

  return (
    <Col md={12} className="border-container">
      <Col xs={12} md={12}>
        <Tabs
          activeKey={tab}
          onSelect={(tab) => setTab(tab)}
          defaultActiveKey="proposal"
          className="small-font mb-4 mx-3 my-3"
        >
          <Tab eventKey="proposal" title={`All Proposals (${talents.length})`}>
            <Col md={12} className="search-container">
              <TextField
                placeholder="Search..."
                value={searchKeyword || ""}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="search-bar"
                style={{ width: "50%" }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() => searchTalents(searchKeyword)}
                      color="primary"
                      id="search-icon-button"
                    >
                      <SearchIcon style={{ color: "#ffffff" }} />
                    </IconButton>
                  ),
                }}
              />
              <CommonButton
                btnBorder
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="ms-3"
                text="Filters"
              />
              <Col className="d-flex align-items-center justify-content-end">
                <p className="small-font mb-0 me-3">Sort:</p>
                <Select
                  className="me-3 sort-dropdown"
                  displayEmpty
                  value={sortValue}
                  defaultValue={sortValue}
                  onChange={(e) => {
                    setSortValue(e.target.value);
                  }}
                >
                  <MenuItem className="small-font" selected value="Best match">
                    Best match
                  </MenuItem>
                  <MenuItem className="small-font" value="Newest Applications">
                    Newest Applications
                  </MenuItem>
                  <MenuItem className="small-font" value="Oldest Applications">
                    Oldest Applications
                  </MenuItem>
                </Select>
              </Col>
            </Col>
            {isFiltersOpen && (
              <Col className="filters-container" md={12}>
                <Col md={12} className="d-flex justify-content-between">
                  <Col md={3}>
                    <h6 className="mb-0">Earned Amount</h6>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        checked={true}
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        Any amount earned
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        $1+ earned
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        $100+ earned
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        $1k+ earned
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <h6 className="mb-0">Job Success</h6>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        checked={true}
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        TOP RATED
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        TOP RATED PLUS
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        80% & up
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        90% & up
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <h6 className="mb-0">Hourly Rate</h6>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        checked={true}
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        Any hourly rate
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        $10 and below
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        $10 - $30
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        $30 - $60
                      </p>
                    </div>
                  </Col>
                  <Col md={3}>
                    <h6 className="mb-0">Hours billed</h6>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        checked={true}
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        Any hours
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        1+ hours billed
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        100+ hours billed
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-1">
                      <Radio
                        name="radio-buttons"
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: "#1ba5d8",
                          },
                        }}
                      />
                      <p className="ms-1 light-gray mini-font mb-0 text-start">
                        1,000+ hours billed
                      </p>
                    </div>
                  </Col>
                </Col>
              </Col>
            )}
            {talents?.length > 0 &&
              talents.map((talent, index) => (
                <ProposalBox
                  talent={talent}
                  length={talents?.length}
                  index={index}
                  highlightedText={highlightedText}
                />
              ))}
            {talents?.length === 0 && (
              <p className="mt-3 align-self-center">No Freelancers Found</p>
            )}
          </Tab>
          <Tab eventKey="shortlisted" title="Shortlisted">
            <Col md={12} className="no-data">
              <p className="text-center">You have no shortlisted proposals</p>
              <p className="text-center light-gray small-font">
                Use the shortlist feature to add your preferred proposals.
              </p>
            </Col>
          </Tab>
          <Tab eventKey="messaged" title="Messaged">
            <Col md={12} className="no-data">
              <p className="text-center">You have no messages</p>
              <p className="text-center light-gray small-font">
                Get the conversation started by asking your favorite candidates
                a question.
              </p>
            </Col>
          </Tab>
          <Tab eventKey="archived" title="Archived">
            <Col md={12} className="no-data">
              <p className="text-center">
                Find all your archived, declined, and withdrawn proposals here
              </p>
              <p className="text-center light-gray small-font">
                Candidates won't be notified when you archive their proposals.
              </p>
            </Col>
          </Tab>
        </Tabs>
      </Col>
    </Col>
  );
};

export default ProposalTab;
