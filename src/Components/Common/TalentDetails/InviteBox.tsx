import React from "react";
import { Col } from "reactstrap";
import { getHighlightedText } from "src/common/commonFunctions";
import UserAvatar from "../UserAvatar/UserAvatar";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Chips from "../Chips/Chips";
import CommonButton from "../Buttons/CommonButton";
import "./TalentBox.css";

interface TalentBoxProps {
  talent: any;
  length: number;
  index: number;
  highlightedText: string;
}

const InviteBox = ({
  talent,
  length,
  index,
  highlightedText,
}: TalentBoxProps) => {
  return (
    <Col
      key={talent.id}
      className={`box-hover talent-box-section border-bottom ${
        index === length - 1 && "mb-3"
      }`}
      md={12}
    >
      <Col md={12} className="d-flex">
        <Col md={10} className="d-flex align-items-start">
          <UserAvatar
            alt={talent.name}
            src={talent.profile}
            availability={talent.availability}
          />
          <div className="ms-3">
            <p className="mb-0">
              {getHighlightedText(talent.name, highlightedText)}
            </p>
            <p className="mt-1 small-font light-gray restrict-mobile-display">
              {getHighlightedText(talent.description, highlightedText)}
            </p>
            <p className="small-font">{talent.price}</p>
          </div>
        </Col>
        <Col md={2} className="d-flex justify-content-end align-items-start">
          <CommonButton
            btnBorder
            // onClick={() => sendInvite()}
            className="me-3"
            text="Hire"
          />
          <CommonButton
            //   onClick={() => sendInvite(talent.id)}
            text="Invite"
          />
        </Col>
      </Col>
      <Col md={12}>
        <div className="d-flex align-items-center">
          <LibraryAddCheckIcon style={{ fontSize: "0.9rem" }} color="success" />
          <p className="mb-0 small-font light-gray ms-1 text-success">
            {talent.completed}
          </p>
        </div>
        <p className="mb-0 small-font">Has 16 relevant skills to your job</p>
      </Col>
      <Col md={12} className="mt-2">
        {talent.chips.map((chip, index) => (
          <Chips key={index} label={chip} />
        ))}
      </Col>
    </Col>
  );
};

export default InviteBox;
