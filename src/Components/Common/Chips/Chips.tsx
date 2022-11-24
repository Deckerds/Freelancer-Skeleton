import React from "react";
import { Chip } from "@mui/material";

interface ChipsProps {
  key: string | number;
  label: string;
  onDelete?: () => void;
  onClick?: () => void;
}

const Chips = (props: ChipsProps) => {
  return (
    <Chip
      style={{ background: "#ADD8E6", height: "1.5rem" }}
      className="me-2 mt-1"
      {...props}
    />
  );
};

export default Chips;
