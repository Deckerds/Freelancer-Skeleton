import React from "react";
import { TextField } from "@mui/material";
import { Col } from "reactstrap";
import { hardCodeUser } from "src/common/hardcodes";
import CommonButton from "../../Buttons/CommonButton";
import CommonModal from "../../CommonModal/CommonModal";
import UserAvatar from "../../UserAvatar/UserAvatar";

const InviteModal = ({
  toggleModal,
  isModalOpen,
  sendInvitation,
  error,
  setMessage,
  message,
}) => {
  return (
    <CommonModal
      size="lg"
      title="Invite to job"
      toggle={toggleModal}
      modal={isModalOpen}
    >
      <Col md={12} className="d-flex align-items-start mb-3">
        <UserAvatar
          alt={hardCodeUser.name}
          src={hardCodeUser.profile}
          availability={hardCodeUser.availability}
        />
        <div className="ms-3">
          <p className="top-text">{hardCodeUser.name}</p>
          <p className="default-text light-gray restrict-mobile-display mb-1">
            {hardCodeUser.shortDesc}
          </p>
          <p className="default-text">{hardCodeUser.price}</p>
        </div>
      </Col>
      <Col md={12}>
        <p className="top-text font-weight-bold">Message</p>
        <TextField
          className="mt-2"
          style={{ width: "100%" }}
          placeholder="Message"
          value={message}
          multiline
          rows={7}
          onChange={(e) => setMessage(e.target.value)}
        />
        {error && <p className="small-text text-danger">{error}</p>}
      </Col>
      <Col
        md={12}
        className="d-flex justify-content-end align-items-start mt-3"
      >
        <CommonButton
          className="me-3"
          btnBorder
          text="Cancel"
          onClick={() => toggleModal()}
        />
        <CommonButton text="Send Invitation" onClick={() => sendInvitation()} />
      </Col>
    </CommonModal>
  );
};

export default InviteModal;
