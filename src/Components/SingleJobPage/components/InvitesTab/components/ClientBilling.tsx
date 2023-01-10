import React from "react";
import { Radio } from "@mui/material";
import { Col } from "reactstrap";
import { hardCodeUser } from "src/common/hardcodes";
import UserAvatar from "src/Components/Common/UserAvatar/UserAvatar";
import CommonButton from "src/Components/Common/Buttons/CommonButton";

const ClientBilling = ({ setBillingSection }) => {
  return (
    <Col className="main-container">
      <Col md={12} className="mb-3">
        <p className="header">Hire {hardCodeUser.name}</p>
        <p
          onClick={() => setBillingSection(false)}
          className="default-text theme-blue cursor-pointer mt-2"
        >
          Back to Offer Details
        </p>
      </Col>
      <Col className="border-container">
        <Col md={9} className="box-section border-right">
          <p className="header mb-3">Add a Billing Method</p>
          <div className="d-flex align-items-center">
            <Radio
              // onClick={() => setTimeRequirement("More than 30 hrs/week")}
              // checked={true}
              // value={"More than 30 hrs/week"}
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              sx={{
                "&.Mui-checked": {
                  color: "#1ba5d8",
                },
              }}
            />
            <p className="small-text">
              Payment Card
              <span className="small-text light-gray ms-2">
                Visa, Mastercard, American Express, Discover, Diners
              </span>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <Radio
              // onClick={() => setTimeRequirement("More than 30 hrs/week")}
              // checked={timeRequirement === "More than 30 hrs/week"}
              // value={"More than 30 hrs/week"}
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              sx={{
                "&.Mui-checked": {
                  color: "#1ba5d8",
                },
              }}
            />
            <p className="small-text">PayPal</p>
          </div>
        </Col>
        <Col md={3} className="box-section">
          <Col md={12} className="d-flex">
            <UserAvatar
              alt={hardCodeUser.name}
              src={hardCodeUser.profile}
              availability={hardCodeUser.availability}
            />
            <div className="ms-3">
              <p className="sub-header">
                Hire {hardCodeUser.name} for: React Developer
              </p>
            </div>
          </Col>
          <Col md={12} className="mt-3">
            <Col className="d-flex justify-content-between align-items-center pb-3 border-bottom">
              <p className="default-text">Hourly Rate</p>
              <p className="default-text">$5.00/hr</p>
            </Col>
            <Col className="pb-3 border-bottom mt-3">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="default-text">Marketplace fee</p>
                  <p className="default-text theme-blue">
                    Learn more about fees
                  </p>
                </div>
                <p className="default-text">--</p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div>
                  <p className="default-text">Estimated taxes</p>
                  <p className="default-text theme-blue">
                    Learn more about taxes
                  </p>
                </div>
                <p className="default-text">--</p>
              </div>
            </Col>
            <Col className="pb-3 border-bottom">
              <div className="d-flex justify-content-between mt-3">
                <p className="default-text">Estimated hourly total</p>
                <p className="default-text">--</p>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <p className="default-text">Max amount of hours</p>
                <p className="default-text">40 hrs/week</p>
              </div>
              <p className="default-text font-weight-bold mt-3">
                When will I get billed for work?
              </p>
              <p className="default-text mt-2">
                We’ll charge your primary billing method every Monday at noon
                UTC. You’ll get to review and approve your pro’s work before
                then.
                <span className="default-text theme-blue"> Learn more</span>
              </p>
            </Col>
            <Col className="mt-4 d-flex justify-content-center">
              <CommonButton text="Confirm & send offer" />
            </Col>
            <p className="default-text text-center mt-3">
              KW Payment Protection
            </p>
          </Col>
        </Col>
      </Col>
    </Col>
  );
};

export default ClientBilling;
