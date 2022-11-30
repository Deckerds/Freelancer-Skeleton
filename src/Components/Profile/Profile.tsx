import React, { useState } from "react";
import { Col } from "reactstrap";
import UserAvatar from "../Common/UserAvatar/UserAvatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import "./Profile.css";
import moment from "moment";
import CommonButton from "../Common/Buttons/CommonButton";
import { LinearProgress } from "@mui/material";
import Chips from "../Common/Chips/Chips";
import { Tab, Tabs } from "react-bootstrap";
import { StyledRating } from "src/styles/mui_styles";
import { hardCodeUser } from "src/common/hardcodes";
import { useMediaQuery } from "react-responsive";

const Profile = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [tab, setTab] = useState("completed");

  return (
    <Col md={12} className="main-container">
      <Col className="border-container-column" md={12}>
        <Col md={12} className="box-section d-lg-flex">
          <Col md={1} className="mobile-profile-display">
            <UserAvatar
              alt={hardCodeUser.name}
              src={hardCodeUser.profile}
              availability={hardCodeUser.availability}
            />
          </Col>
          <Col className="ms-2">
            <Col className="d-flex mobile-profile-display align-items-center">
              <h6 className="mb-0 me-2">{hardCodeUser.name}</h6>
              <VerifiedIcon style={{ fontSize: "0.9rem" }} color="primary" />
            </Col>
            <Col className="d-flex mobile-profile-display align-items-center mt-2">
              <LocationOnIcon style={{ fontSize: "1rem" }} />
              <p style={{ fontSize: "0.8rem" }} className="ms-1 mb-0">
                {`United States - ${moment().format("HH:mm A")} local time`}
              </p>
            </Col>
            <Col className="d-flex mobile-profile-display align-items-center">
              <Col md={2} className="mt-2">
                <p className="mb-0 align-self-center">100%</p>
                <LinearProgress variant="determinate" value={100} />
                <p className="small-text light-gray">Job Success</p>
              </Col>
              <p className="default-text ms-5">
                <MilitaryTechIcon
                  style={{ fontSize: "1.5rem", color: "#f1367a" }}
                />
                Top Rated Plus
              </p>
            </Col>
          </Col>
          <Col
            className={
              !isMobile
                ? "d-flex justify-content-end"
                : "mobile-profile-display"
            }
          >
            <CommonButton btnBorder text={"Hire"} />
            <CommonButton className="ms-3" text={"Invite"} />
          </Col>
        </Col>
        <Col md={12} className="d-lg-flex">
          <Col xs={12} md={3} className="border-right">
            <Col md={12} className="d-flex border-bottom">
              <Col md={6} className="box-section">
                <h6>$3k+</h6>
                <p className="small-text light-gray">Total Earnings</p>
              </Col>
              <Col md={6} className="d-flex justify-content-end box-section">
                <div>
                  <h6>3</h6>
                  <p className="small-text light-gray">Total Jobs</p>
                </div>
              </Col>
            </Col>
            <Col md={12} className="box-section">
              <Col className="mt-2">
                <h6>Hours per week</h6>
                <p className="default-text light-gray">
                  As Needed - Open to Offers
                </p>
              </Col>
              <Col className="mt-5">
                <h6>Languages</h6>
                <p className="default-text light-gray">
                  English: Native or Bilingual
                </p>
              </Col>
              <Col className="mt-5">
                <h6>Verifications</h6>
                <p className="default-text light-gray">
                  Phone Number: <b>Verified</b>
                  <VerifiedIcon
                    style={{ fontSize: "0.9rem" }}
                    color="primary"
                  />
                </p>
                <p className="default-text light-gray">
                  ID: <b>Verified</b>
                  <VerifiedIcon
                    style={{ fontSize: "0.9rem" }}
                    color="primary"
                  />
                </p>
              </Col>
              <Col className="mt-5">
                <h6>Education</h6>
                <p className="default-text">Emerson College</p>
                <p className="default-text light-gray mb-2">
                  Master of Arts (MA), Publishing 2016-2018
                </p>
                <p className="default-text">The University of South Dakota</p>
                <p className="default-text light-gray">
                  Bachelor of Science (BS), English 2012-2016
                </p>
              </Col>
            </Col>
          </Col>
          <Col xs={12} md={9} className="profile-right">
            <Col className="d-flex align-items-center box-section">
              <h5 className="mb-0">
                Experienced Writer and Developmental Editor
              </h5>
              <p className="mb-0 ms-5">$29.90/hr</p>
            </Col>
            <Col className="box-section border-bottom">
              <p className="default-text light-gray">
                Looking for someone to join you on your writing journey? I am an
                experienced editor, specializing in Developmental and
                Substantive editing, with extensive knowledge of the publishing
                industry. I would love to help you take the next step in your
                journey as a writer. Though I am willing to take on projects in
                any genre, I specialize in memoir, fantasy, science fiction,
                biography, military history, YA, romance, and historical
                fiction. My exemplary organizational skills allow me to both
                manage multiple projects at a time and help you maintain your
                focus throughout the project lifecycle.
              </p>
            </Col>
            <Col className="box-section border-bottom">
              <h5 className="mb-3">Work History</h5>
              <Tabs
                activeKey={tab}
                onSelect={(tab) => setTab(tab)}
                defaultActiveKey="completed"
                className="default-text mb-4"
              >
                <Tab eventKey="completed" title="Completed jobs (2)">
                  <Col className="border-bottom pb-3 mb-3">
                    <h6>
                      Plot Developers / Outline Writers Needed for Ongoing
                      Project on Regency / Western Romance Novels
                    </h6>
                    <Col className="d-flex align-items-center">
                      <StyledRating
                        readOnly
                        name="size-small"
                        value={4.4}
                        precision={0.5}
                        size="small"
                      />
                      <p className="default-text ms-3">4.40</p>
                      <p className="small-text light-gray ms-3">
                        Dec 4, 2020 - Oct 29, 2021
                      </p>
                    </Col>
                    <Col className="d-flex align-items-center mt-3">
                      <p className="default-text">$2,550.00</p>
                      <p className="small-text light-gray ms-3">Fixed Price</p>
                    </Col>
                  </Col>
                  <Col>
                    <h6>
                      Experienced Fiction Authors Needed for growing business on
                      Historical Romance genre
                    </h6>
                    <Col className="d-flex align-items-center">
                      <StyledRating
                        readOnly
                        name="size-small"
                        value={5}
                        precision={0.5}
                        size="small"
                      />
                      <p className="default-text ms-3">5.00</p>
                      <p className="small-text light-gray ms-3">
                        Nov 26, 2018 - May 16, 2019
                      </p>
                    </Col>
                    <Col className="d-flex align-items-center mt-3">
                      <p className="default-text">$2000.00</p>
                      <p className="small-text light-gray ms-3">Fixed Price</p>
                    </Col>
                  </Col>
                </Tab>
              </Tabs>
            </Col>
            <Col className="box-section border-bottom">
              <h6>Skills</h6>
              {hardCodeUser.chips.map((chip) => (
                <Chips key={chip.id} label={chip.name} />
              ))}
            </Col>
          </Col>
        </Col>
      </Col>
    </Col>
  );
};

export default Profile;
