import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Radio, TextField } from "@mui/material";
import { Col } from "reactstrap";
import { jobCategories } from "src/common/hardcodes";
import CommonButton from "src/Components/Common/Buttons/CommonButton";
import "../JobPostForm.css";

const ScreenOne = ({ setScreen, setHeader, header, setCategory, category }) => {
  const [radioCategories, setRadioCategories] = useState([]);

  const selectJobCategory = useCallback(() => {
    const isIncludes: { type: string; categories: Array<any> } =
      jobCategories.filter((cat) =>
        header.toLowerCase().includes(cat.type.toLowerCase())
      )[0];
    setRadioCategories(isIncludes?.categories);
  }, [header]);

  useEffect(() => {
    selectJobCategory();
  }, [header, selectJobCategory]);

  return (
    <Col className="screen-container" md={6}>
      <Col md={12} className="content-container">
        <h6 className="sub-header">Write a headline for your job post</h6>
        <TextField
          className="mt-3"
          placeholder="Headline"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
        <p className="mt-4 top-text">Example titles</p>
        <li className="default-text light-gray ms-2 mt-2">
          UX/UI designer to bring website mockup and prototype to life
        </li>
        <li className="default-text light-gray ms-2 mt-1">
          Video editor needed to create whiteboard explainer video
        </li>
        <li className="default-text light-gray ms-2 mt-1">
          UX designer with e-commerce experience to support app development
        </li>
        {radioCategories?.length > 0 && (
          <Fragment>
            <p className="mt-4 top-text">Job category</p>
            {radioCategories.map((cat, index) => (
              <div key={index} className="d-flex align-items-center">
                <Radio
                  onClick={() => setCategory(cat)}
                  checked={category === cat}
                  value={cat}
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{
                    "&.Mui-checked": {
                      color: "#1ba5d8",
                    },
                  }}
                />
                <p className="small-text">{cat}</p>
              </div>
            ))}
          </Fragment>
        )}
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
