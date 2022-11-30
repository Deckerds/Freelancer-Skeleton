import React from "react";
import { Avatar } from "@mui/material";
import { StyledBadge } from "src/styles/mui_styles";

const UserAvatar = (props) => {
  return (
    <div className="align-items-center">
      <StyledBadge
        iconcolor={props.availability === "online" ? "#44b700" : "#debe1a"}
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar {...props} sx={{ width: 84, height: 84 }} />
      </StyledBadge>
    </div>
  );
};

export default UserAvatar;
