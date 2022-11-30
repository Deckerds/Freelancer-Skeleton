import React from "react";
import { TextField } from "@mui/material";
import { Col } from "reactstrap";
import CommonButton from "src/Components/Common/Buttons/CommonButton";

const ScreenFive = ({
  setScreen,
  header,
  setHeader,
  description,
  setDescription,
}) => {
  return (
    <Col className="screen-container" md={6}>
      <Col md={12} className="content-container">
        <h6 className="mb-0">Add a title</h6>
        <TextField
          className="mt-2 mb-3"
          style={{ width: "100%" }}
          placeholder="Headline"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <h6 className="mb-0">Describe your job</h6>
        <TextField
          className="mt-2"
          style={{ width: "100%" }}
          placeholder="Already have a job description? Paste it here!"
          value={description}
          multiline
          rows={3}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p className="small-text light-gray mt-4">Need help?</p>
        <p className="mt-2 default-text">
          See examples of effective job descriptions
        </p>
        <CommonButton btnBorder text="Attach File" className="mt-2" />
      </Col>
      <Col className="d-flex justify-content-end">
        <CommonButton
          btnBorder
          text="Back"
          onClick={() => setScreen(4)}
          className="me-2"
        />
        <CommonButton text="Review Job Post" onClick={() => setScreen(6)} />
      </Col>
    </Col>
  );
};

export default ScreenFive;
