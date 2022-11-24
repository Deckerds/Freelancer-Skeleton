import styled from "@emotion/styled";
import { Badge, Rating } from "@mui/material";

export const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#14a800",
  },
  "& .MuiRating-iconHover": {
    color: "#14a800",
  },
});

export const StyledBadge = styled(Badge)(({ iconcolor }: any) => ({
  "& .MuiBadge-badge": {
    width: 12,
    height: 12,
    backgroundColor: iconcolor,
    color: iconcolor,
    borderRadius: "50%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      // animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
