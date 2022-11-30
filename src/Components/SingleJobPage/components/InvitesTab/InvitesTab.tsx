import React, { useState, useEffect, useCallback } from "react";
import { Col } from "reactstrap";
import CommonButton from "../../../Common/Buttons/CommonButton";
import { Tab, Tabs } from "react-bootstrap";
import { IconButton, Radio, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { allTalents } from "src/common/hardcodes";
import "../../SingleJobPage.css";
import InviteBox from "src/Components/Common/TalentDetails/InviteBox";

const InvitesTab = ({ job }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [talents, setTalents] = useState([]);
  const [highlightedText, setHighlightedText] = useState("");
  const [tab, setTab] = useState("search");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    const chips = job.chips.map((chip) => chip.name);

    const filtered = allTalents.filter((fil) =>
      chips.some((ele) => fil.chips.includes(ele))
    );
    setTalents([...filtered]);
  }, [job]);

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
  }, [searchKeyword, filterTalents]);

  return (
    <Col md={12} className="border-container">
      <Col xs={12} md={12}>
        <Tabs
          activeKey={tab}
          onSelect={(tab) => setTab(tab)}
          defaultActiveKey="search"
          className="default-text mb-4 mx-3 my-3"
        >
          <Tab eventKey="search" title="Search">
            <Col md={12} className="search-container">
              <TextField
                placeholder="Search..."
                value={searchKeyword || ""}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="search-bar"
                style={{ width: "80%" }}
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
                      <p className="ms-1 light-gray small-text text-start">
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
                      <p className="ms-1 light-gray small-text text-start">
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
                      <p className="ms-1 light-gray small-text mb-0 text-start">
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
                      <p className="ms-1 light-gray small-text text-start">
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
                      <p className="ms-1 light-gray small-text text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
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
                      <p className="ms-1 light-gray small-text  text-start">
                        1,000+ hours billed
                      </p>
                    </div>
                  </Col>
                </Col>
              </Col>
            )}
            {talents?.length > 0 &&
              talents.map((talent, index) => (
                <InviteBox
                  key={talent.id}
                  talent={talent}
                  index={index}
                  length={talents.length}
                  highlightedText={highlightedText}
                  jobId={job.id}
                />
              ))}
          </Tab>
          <Tab eventKey="invited" title="Invited Freelancers">
            <Col md={12} className="no-data">
              <p className="text-center">No invited freelancers yet</p>
              <p className="text-center light-gray default-text">
                Invite top candidates before they're booked.
              </p>
            </Col>
          </Tab>
          <Tab eventKey="hires" title="My Hires">
            <Col md={12} className="no-data">
              <p className="text-center">You haven’t hired anyone yet</p>
              <p className="text-center light-gray default-text">
                Search for freelancers who can help you get work done.
              </p>
            </Col>
          </Tab>
          <Tab eventKey="saved" title="Saved">
            <Col md={12} className="no-data">
              <p className="text-center">You haven’t saved anyone yet</p>
              <p className="text-center light-gray default-text">
                Select the heart icon to save your favorite talent and agencies
                to custom lists. Go to Talent to find all your saves and lists.
              </p>
            </Col>
          </Tab>
        </Tabs>
      </Col>
    </Col>
  );
};

export default InvitesTab;
