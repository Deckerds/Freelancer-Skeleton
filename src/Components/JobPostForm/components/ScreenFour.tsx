import React from "react";
import { Col } from "reactstrap";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { InputAdornment, Radio, TextField } from "@mui/material";
import CommonButton from "src/Components/Common/Buttons/CommonButton";

const ScreenFour = ({
  setScreen,
  setBudgetType,
  budgetType,
  setBudgetFrom,
  setBudgetTo,
  budgetFrom,
  budgetTo,
  setSingleBudget,
  singleBudget,
}) => {
  return (
    <Col className="screen-container" md={6}>
      <Col md={12} className="content-container">
        <div className="d-flex">
          <div
            className={`box-budget ${
              budgetType === "Hourly" ? "color-box" : "gray-box"
            }`}
            onClick={() => setBudgetType("Hourly")}
          >
            <div className="d-flex align-items-center">
              <AvTimerIcon
                style={{
                  color: `${budgetType === "Hourly" ? "#1ba5d8" : "#000000"}`,
                }}
              />
              <Radio
                checked={budgetType === "Hourly"}
                value="Hourly"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
            </div>
            <p className="budget-text">Hourly rate</p>
          </div>
          <div
            className={`box-budget ${
              budgetType === "Fixed" ? "color-box" : "gray-box"
            }`}
            onClick={() => setBudgetType("Fixed")}
          >
            <div className="d-flex align-items-center">
              <LocalOfferIcon
                style={{
                  color: `${budgetType === "Fixed" ? "#1ba5d8" : "#000000"}`,
                }}
              />
              <Radio
                checked={budgetType === "Fixed"}
                value="Fixed"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "&.Mui-checked": {
                    color: "#1ba5d8",
                  },
                }}
              />
            </div>

            <p className="budget-text">Project budget</p>
          </div>
        </div>
        {budgetType === "Fixed" && (
          <div className="mt-4">
            <p className="mb-0">Maximum project budget (USD)</p>
            <TextField
              className="mt-2"
              type="number"
              value={singleBudget}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              onChange={(e) => setSingleBudget(e.target.value)}
            />
            <p className="small-text light-gray mt-3">
              You will have the option to create milestones which divide your
              project into manageable phases.
            </p>
          </div>
        )}
        {budgetType === "Hourly" && (
          <div>
            <Col className="mt-4 d-flex">
              <Col md={6} className="me-1">
                <h6>From(/hour)</h6>
                <TextField
                  className="mt-2"
                  type="number"
                  value={budgetFrom}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  onChange={(e) => setBudgetFrom(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <h6>To(/hour)</h6>
                <TextField
                  className="mt-2"
                  type="number"
                  value={budgetTo}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  onChange={(e) => setBudgetTo(e.target.value)}
                />
              </Col>
            </Col>
            <p className="small-text light-gray mt-3">
              This is the average rate for similar projects.
            </p>
            <p className="mb-3 default-text">
              Professionals tend to charge <b>$10 - $25</b>/hour (USD) for
              illustration projects like yours. Experts may charge higher rates.
            </p>
          </div>
        )}
      </Col>
      <Col className="d-flex justify-content-end">
        <CommonButton
          btnBorder
          text="Back"
          className="me-2"
          onClick={() => setScreen(3)}
        />
        <CommonButton text="Description" onClick={() => setScreen(5)} />
      </Col>
    </Col>
  );
};

export default ScreenFour;
