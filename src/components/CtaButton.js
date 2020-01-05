import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function CtaButton(props) {
  return (
    <Button as={Link} to={props.route}>
      {props.text}
    </Button>
  );
}
