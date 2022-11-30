import React from "react";
import { Col } from "reactstrap";
import { getHighlightedText } from "src/common/commonFunctions";
import CommonButton from "../Buttons/CommonButton";
import { LinearProgress } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import UserAvatar from "../UserAvatar/UserAvatar";
import Chips from "../Chips/Chips";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

interface TalentBox {
  talent: any;
  length: number;
  index: number;
  highlightedText: string;
  jobId?: string | number;
}

const ProposalBox = ({
  talent,
  length,
  index,
  highlightedText,
  jobId,
}: TalentBox) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();
  const getRatingData = (rating) => {
    if (rating === "top") {
      return (
        <p className="default-text">
          <MilitaryTechIcon style={{ fontSize: "1.5rem", color: "#f1367a" }} />
          Top Rated Plus
        </p>
      );
    } else if (rating === "middle") {
      return (
        <p className="default-text">
          <MilitaryTechIcon style={{ fontSize: "1.5rem", color: "#0b83b2" }} />
          Top Rated
        </p>
      );
    }
  };
  return (
    <Col
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
          <p className="top-text">
            {getHighlightedText(talent.name, highlightedText)}
          </p>
          <p className="default-text">{talent.shortDesc}</p>
          <p className="small-text light-gray">{talent.country}</p>
        </div>
        {!isMobile && (
          <div className="d-flex ms-auto">
            <CommonButton
              btnBorder
              onClick={() => navigate(`/proposal-message-view/${jobId}`)}
              className="me-3"
              text="Messages"
            />
            <CommonButton
              onClick={() => navigate(`/invite-single-view/${jobId}`)}
              text="Hire"
            />
          </div>
        )}
      </Col>
      <Col md={12} className="rating-box d-flex justify-content-between">
        <p className="default-text">{talent.price}</p>
        <Col md={2} className="ms-auto me-5">
          <p className="mb-0 align-self-center">{talent.success}%</p>
          <LinearProgress variant="determinate" value={talent.success} />
          <p className="small-text light-gray">Job Success</p>
        </Col>
        {getRatingData(talent.rating)}
      </Col>
      <Col md={12} className="rating-box">
        <p className="small-text light-gray">
          <b>Cover Letter -</b> {talent.description}
        </p>
      </Col>
      <Col md={12} className="rating-box mt-2">
        {talent.chips.map((chip, index) => (
          <Chips key={index} label={chip} />
        ))}
      </Col>
      {isMobile && (
        <Col md={12} className="d-flex justify-content-center mt-3">
          <CommonButton
            btnBorder
            onClick={() => navigate(`/proposal-message-view/${jobId}`)}
            className="me-3 w-100"
            text="Messages"
          />
          <CommonButton
            className="w-100"
            onClick={() => navigate(`/invite-single-view/${jobId}`)}
            text="Hire"
          />
        </Col>
      )}
    </Col>
  );
};

export default ProposalBox;
