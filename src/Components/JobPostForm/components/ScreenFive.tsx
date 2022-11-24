import React, { Fragment } from "react";
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
    <Fragment>
      <Col className="screen-container" md={6}>
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
        <p className="mini-font light-gray mt-4 mb-0">Need help?</p>
        <p className="mt-2 small-font mb-0">
          See examples of effective job descriptions
        </p>
        <CommonButton btnBorder text="Attach File" className="mt-2" />

        <div className="d-flex justify-content-end mt-3">
          <CommonButton
            btnBorder
            text="Back"
            onClick={() => setScreen(4)}
            className="me-2"
          />
          <CommonButton text="Review Job Post" onClick={() => setScreen(6)} />
        </div>
      </Col>
    </Fragment>
  );
};

export default ScreenFive;
