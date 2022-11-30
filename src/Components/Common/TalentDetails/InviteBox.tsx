import React, { Fragment, useState } from "react";
import { Col } from "reactstrap";
import { getHighlightedText } from "src/common/commonFunctions";
import UserAvatar from "../UserAvatar/UserAvatar";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Chips from "../Chips/Chips";
import CommonButton from "../Buttons/CommonButton";
import "./TalentBox.css";
import { useNavigate } from "react-router";
import InviteModal from "./components/InviteModal";
import { useMediaQuery } from "react-responsive";

interface TalentBoxProps {
  talent: any;
  length: number;
  index: number;
  highlightedText: string;
  jobId?: string | number;
}

const InviteBox = ({
  talent,
  length,
  index,
  highlightedText,
  jobId,
}: TalentBoxProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState(
    `Hello! \n\nI'd like to invite you to take a look at the job I've posted. Please submit a proposal if you're available and interested. \n\nYour Company.`
  );
  const [error, setError] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const sendInvitation = () => {
    const invitations = JSON.parse(localStorage.getItem("invitations")) || [];
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    const selectedJob = jobs.filter((job) => job.id === Number(jobId))[0];

    let singleInvite: any = {};

    if (!invitations.some((inv) => inv.jobId === jobId)) {
      setError("");
      singleInvite = {
        id: invitations?.length + 1,
        desc: `You have received an invitation to interview for the job "${selectedJob.header}"`,
        jobId: jobId,
        message,
      };
      toggleModal();
    } else {
      setError("Already sent an invitation");
    }

    invitations.push(singleInvite);
    localStorage.setItem("invitations", JSON.stringify(invitations));
  };

  return (
    <Fragment>
      <Col
        className={`box-hover talent-box-section border-bottom ${
          index === length - 1 && "mb-3"
        }`}
        md={12}
      >
        <Col md={12} className="d-flex">
          <Col md={10} className="d-flex align-items-start mb-3">
            <UserAvatar
              alt={talent.name}
              src={talent.profile}
              availability={talent.availability}
            />
            <div className="ms-3">
              <p className="top-text">
                {getHighlightedText(talent.name, highlightedText)}
              </p>
              <p className="default-text light-gray mb-1">
                {getHighlightedText(talent.shortDesc, highlightedText)}
              </p>
              <p className="default-text">{talent.country}</p>
              <p className="default-text">{talent.price}</p>
            </div>
          </Col>
          {!isMobile && (
            <Col
              md={2}
              className="d-flex justify-content-end align-items-start"
            >
              <CommonButton
                btnBorder
                onClick={() => navigate(`/invite-single-view/${jobId}`)}
                className="me-3"
                text="Hire"
              />
              <CommonButton onClick={() => toggleModal()} text="Invite" />
            </Col>
          )}
        </Col>
        <Col md={12}>
          <div className="d-flex align-items-center">
            <LibraryAddCheckIcon
              style={{ fontSize: "0.9rem" }}
              color="success"
            />
            <p className="default-text light-gray ms-1 text-success">
              {talent.completed}
            </p>
          </div>
          <p className="default-text">Has 16 relevant skills to your job</p>
        </Col>
        <Col md={12} className="mt-2">
          {talent.chips.map((chip, index) => (
            <Chips key={index} label={chip} />
          ))}
        </Col>
        {isMobile && (
          <Col xs={12} className="d-flex justify-content-center mt-3">
            <CommonButton
              btnBorder
              onClick={() => navigate(`/invite-single-view/${jobId}`)}
              className="me-3 w-100"
              text="Hire"
            />
            <CommonButton
              className="w-100"
              onClick={() => toggleModal()}
              text="Invite"
            />
          </Col>
        )}
      </Col>
      <InviteModal
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        sendInvitation={sendInvitation}
        setMessage={setMessage}
        message={message}
        error={error}
      />
    </Fragment>
  );
};

export default InviteBox;
