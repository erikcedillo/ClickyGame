import React from "react";

const Row = props =>
  <div className={`Row${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Row;
