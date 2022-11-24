import React, { Fragment } from "react";
import { TextField } from "@mui/material";
import { Col } from "reactstrap";
import "../JobPostForm.css";
import CommonButton from "src/Components/Common/Buttons/CommonButton";

const ScreenOne = ({ setScreen, setHeader, header }) => {
  return (
    <Col className="screen-container" md={6}>
      <Col md={12} className="content-container">
        <h6>Write a headline for your job post</h6>
        <TextField
          className="mt-3"
          placeholder="Headline"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <p className="mt-4 mb-0 font-weight-bold">Example titles</p>
        <li className="small-font light-gray ms-2 mt-2">
          UX/UI designer to bring website mockup and prototype to life
        </li>
        <li className="small-font light-gray ms-2 mt-1">
          Video editor needed to create whiteboard explainer video
        </li>
        <li className="small-font light-gray ms-2 mt-1">
          UX designer with e-commerce experience to support app development
        </li>
        <div className="d-flex justify-content-end mt-3"></div>
      </Col>
      <Col className="d-flex justify-content-end">
        <CommonButton
          disabled={header === ""}
          onClick={() => setScreen(2)}
          text="Next: Skills"
        />
      </Col>
    </Col>
  );
};

export default ScreenOne;
