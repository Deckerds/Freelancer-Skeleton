import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Avatar } from "@mui/material";
import "./EditButton.css";

const EditButton = () => {
  return (
    <Avatar id="edit-avatar">
      <EditIcon style={{ color: "black", fontSize: "1.25rem" }} />
    </Avatar>
  );
};

export default EditButton;
