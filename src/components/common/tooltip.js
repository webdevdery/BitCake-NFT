import React from "react";
import ReactTooltip from "react-tooltip";

export default function CustomTooltip(props) {
  return (
    <ReactTooltip id={props.id} type="dark" effect="solid" className="w-20">
      <span>{props.label}</span>
    </ReactTooltip>
  );
}
