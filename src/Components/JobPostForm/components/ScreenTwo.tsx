import React, { Fragment } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Col } from "reactstrap";
import SearchIcon from "@mui/icons-material/Search";
import StarsIcon from "@mui/icons-material/Stars";
import Chips from "src/Components/Common/Chips/Chips";
import CommonButton from "src/Components/Common/Buttons/CommonButton";

const ScreenTwo = ({
  setScreen,
  chips,
  setChips,
  selectedChips,
  setSelectedChips,
}) => {
  const addChip = (chipId: number) => {
    setSelectedChips([
      ...selectedChips,
      ...chips.filter((chip) => chip.id === chipId),
    ]);
    setChips(chips.filter((chip) => chip.id !== chipId));
  };

  const onDeleteChip = (chipId: number) => {
    setChips([...chips, ...selectedChips.filter((chip) => chip.id === chipId)]);
    setSelectedChips(selectedChips.filter((chip) => chip.id !== chipId));
  };

  return (
    <Fragment>
      <Col className="screen-container" md={6} xs={12}>
        <h6>Search skills or add your own</h6>
        <TextField
          className="mt-3"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <div className="d-flex align-items-center mt-1">
          <StarsIcon style={{ color: "#1ba5d8", fontSize: "1rem" }} />
          <p className="small-font mb-0 ms-1 text-success">
            For the best results, add 3-5 skills
          </p>
        </div>
        {selectedChips?.length > 0 && (
          <div className="mt-3">
            <p className="mb-1 small-font">Selected skills</p>
            {selectedChips?.length > 0 &&
              selectedChips.map((chip) => (
                <Chips
                  key={chip.id}
                  label={chip.name}
                  onDelete={() => onDeleteChip(chip.id)}
                />
              ))}
          </div>
        )}
        <h6 className="mt-3">Popular skills for Illustration</h6>
        <div>
          {chips?.length > 0 &&
            chips.map((chip) => (
              <Chips
                onClick={() => addChip(chip.id)}
                key={chip.id}
                label={chip.name}
              />
            ))}
        </div>
        <div className="d-flex justify-content-end mt-3">
          <CommonButton
            btnBorder
            text="Back"
            className="me-2"
            onClick={() => setScreen(1)}
          />
          <CommonButton
            disabled={selectedChips.length < 1}
            onClick={() => setScreen(3)}
            text="Next: Scope"
          />
        </div>
      </Col>
    </Fragment>
  );
};

export default ScreenTwo;
