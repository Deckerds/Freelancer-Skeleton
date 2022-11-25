import React from "react";
import { Button } from "reactstrap";

interface CommonBtnProps {
  text: string;
  btnBorder?: boolean;
  onClick?: (event?: any) => void;
  className?: string;
  disabled?: boolean;
}

const CommonButton = (props: CommonBtnProps) => {
  return (
    <Button
      disabled={props.disabled}
      id={props.btnBorder ? "border-common-button" : "common-button"}
      onClick={(e) => props.onClick(e)}
      className={props.className}
    >
      {props.text}
    </Button>
  );
};

export default CommonButton;
