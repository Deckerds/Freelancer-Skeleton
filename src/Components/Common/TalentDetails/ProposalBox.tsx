import React from "react";
import { Col } from "reactstrap";
import { getHighlightedText } from "src/common/commonFunctions";
import CommonButton from "../Buttons/CommonButton";
import { LinearProgress } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import UserAvatar from "../UserAvatar/UserAvatar";
import Chips from "../Chips/Chips";

interface TalentBox {
  talent: any;
  length: number;
  index: number;
  highlightedText: string;
}

const ProposalBox = ({ talent, length, index, highlightedText }: TalentBox) => {
  const getRatingData = (rating) => {
    if (rating === "top") {
      return (
        <p className="small-font mb-0">
          <MilitaryTechIcon style={{ fontSize: "1.5rem", color: "#f1367a" }} />
          Top Rated Plus
        </p>
      );
    } else if (rating === "middle") {
      return (
        <p className="small-font mb-0">
          <MilitaryTechIcon style={{ fontSize: "1.5rem", color: "#0b83b2" }} />
          Top Rated
        </p>
      );
    }
  };
  return (
    <Col
      key={talent.id}
      className={`box-hover talent-box-section ${
        index === length - 1 && "mb-3"
      } border-bottom pb-3`}
      md={12}
    >
      <Col md={12} className="d-flex align-items-center">
        <UserAvatar
          alt={talent.name}
          src={talent.profile}
          availability={talent.availability}
        />
        <div className="ms-3">
          <p className="mb-0">
            {getHighlightedText(talent.name, highlightedText)}
          </p>
          <p className="small-font mb-0 restrict-mobile-display">
            {talent.shortDesc}
          </p>
          <p className="mini-font mb-0 light-gray">{talent.country}</p>
        </div>
        <div className="d-flex ms-auto">
          <CommonButton
            btnBorder
            // onClick={() => sendInvite()}
            className="me-3"
            text="Messages"
          />
          <CommonButton
            // onClick={() => sendInvite()}
            text="Hire"
          />
        </div>
      </Col>
      <Col md={12} className="rating-box d-flex justify-content-between">
        <p className="small-font mb-0">{talent.price}</p>
        <Col md={2} className="ms-auto me-5">
          <p className="mb-0 align-self-center">{talent.success}%</p>
          <LinearProgress variant="determinate" value={talent.success} />
          <p className="mb-0 mini-font light-gray">Job Success</p>
        </Col>
        {getRatingData(talent.rating)}
      </Col>
      <Col md={12} className="rating-box">
        <p className="mini-font mb-0 light-gray">
          <b>Cover Letter -</b> {talent.description}
        </p>
      </Col>
      <Col md={12} className="rating-box mt-2">
        {talent.chips.map((chip, index) => (
          <Chips key={index} label={chip} />
        ))}
      </Col>
    </Col>
  );
};

export default ProposalBox;
