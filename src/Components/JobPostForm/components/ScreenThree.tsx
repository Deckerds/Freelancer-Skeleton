import { Radio } from "@mui/material";
import React from "react";
import { Col } from "reactstrap";
import CommonButton from "src/Components/Common/Buttons/CommonButton";

const ScreenThree = ({
  setScreen,
  selectedValue,
  setSelectedValue,
  scope,
  setScope,
  expertise,
  setExpertise,
}) => {
  return (
    <Col className="screen-container" md={6}>
      <Col md={12} className="content-container">
        <div className="d-flex align-items-center">
          <Radio
            onClick={() => setSelectedValue("Large")}
            checked={selectedValue === "Large"}
            value="Large"
            name="radio-buttons"
            inputProps={{ "aria-label": "A" }}
            sx={{
              "&.Mui-checked": {
                color: "#1ba5d8",
              },
            }}
          />
          <h6 className="mb-0">Large</h6>
        </div>
        <p className="small-font light-gray ms-4">
          Longer term or complex initiatives (ex. develop and execute a brand
          strategy (i.e., graphics, positioning))
        </p>

        <div>
          <div className="d-flex align-items-center">
            <Radio
              onClick={() => setSelectedValue("Medium")}
              checked={selectedValue === "Medium"}
              value="Medium"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              sx={{
                "&.Mui-checked": {
                  color: "#1ba5d8",
                },
              }}
            />
            <h6 className="mb-0">Medium</h6>
          </div>
          <p className="small-font light-gray ms-4">
            Well-defined projects (ex. design business rebrand package (i.e.,
            logos, icons))
          </p>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <Radio
              onClick={() => setSelectedValue("Small")}
              checked={selectedValue === "Small"}
              value="Small"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              sx={{
                "&.Mui-checked": {
                  color: "#1ba5d8",
                },
              }}
            />
            <h6 className="mb-0">Small</h6>
          </div>
          <p className="small-font light-gray ms-4">
            Quick and straightforward tasks (ex. create logo for a new product)
          </p>
        </div>
        {selectedValue !== "" && (
          <div>
            <h6>How long will your work take?</h6>
            <div className="d-flex align-items-center">
              <Radio
                onClick={() => setScope("More than 6 months")}
                checked={scope === "More than 6 months"}
                value="More than 6 months"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
              <p className="mb-0 small-font light-gray">More than 6 months</p>
            </div>
            <div className="d-flex align-items-center">
              <Radio
                onClick={() => setScope("3 to 6 months")}
                checked={scope === "3 to 6 months"}
                value="3 to 6 months"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
              <p className="mb-0 small-font light-gray">3 to 6 months</p>
            </div>
            <div className="d-flex align-items-center">
              <Radio
                onClick={() => setScope("1 to 3 months")}
                checked={scope === "1 to 3 months"}
                value="1 to 3 months"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
              <p className="mb-0 small-font light-gray">1 to 3 months</p>
            </div>
          </div>
        )}
        {scope !== "" && (
          <div>
            <h6>What level of experience will it need?</h6>
            <div className="d-flex align-items-center">
              <Radio
                onClick={() => setExpertise("Entry")}
                checked={expertise === "Entry"}
                value="Entry"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
              <p className="mb-0 small-font light-gray">Entry</p>
            </div>
            <div className="d-flex align-items-center">
              <Radio
                onClick={() => setExpertise("Intermediate")}
                checked={expertise === "Intermediate"}
                value="Intermediate"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
              <p className="mb-0 small-font light-gray">Intermediate</p>
            </div>
            <div className="d-flex align-items-center">
              <Radio
                onClick={() => setExpertise("Expert")}
                checked={expertise === "Expert"}
                value="Expert"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
              <p className="mb-0 small-font light-gray">Expert</p>
            </div>
          </div>
        )}
      </Col>
      <Col className="d-flex justify-content-end">
        <CommonButton
          btnBorder
          text="Back"
          className="me-2"
          onClick={() => setScreen(2)}
        />
        <CommonButton onClick={() => setScreen(4)} text="Next: Budget" />
      </Col>
    </Col>
  );
};

export default ScreenThree;
