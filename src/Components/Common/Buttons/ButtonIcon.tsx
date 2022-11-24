import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./Buttons.css";

interface IconButtonProps {
  type: string;
  icon: string;
  text: string;
  onClick?: () => void;
}

const ButtonIcon = (props: IconButtonProps) => {
  const [colors, setcolors] = useState({
    background: "#0d6efd",
    color: "#ffffff",
    border: " none",
  });

  useEffect(() => {
    if (props.type === "apple") {
      setcolors({
        background: "#ffffff",
        color: "#000000",
        border: "1px solid black",
      });
    }
  }, [props.type]);

  return (
    <Button
      style={{
        background: `${colors.background}`,
        color: `${colors.color}`,
        border: `${colors.border}`,
      }}
      id="icon-button"
      onClick={() => props.onClick()}
    >
      <img className="icon" src={props.icon} alt="" />
      <p className="mb-0 text-button">{props.text}</p>
    </Button>
  );
};

export default ButtonIcon;
