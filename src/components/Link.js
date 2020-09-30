import React from "react";
import { Button } from "react-bootstrap";

const Link = ({ active, children, onClick }) => {
  let variant;
  if (active === "SHOW_COMPLETED") {
    variant = "success";
  } else if (active === "SHOW_ACTIVE") {
    variant = "warning";
  } else {
    variant = "primary";
  }
  return (
    <Button size="sm" variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default Link;
