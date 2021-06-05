import React, { useState } from "react";

export default function Notification(props) {
  const [checkedState, setcheckedState] = useState(true);
  return (
    <div
      className="w-full flex items-center cursor-pointer"
      onClick={() => {
        setcheckedState(!checkedState);
      }}
    >
      <input
        type="checkbox"
        className="w-5 h-5 rounded-md cursor-pointer"
        checked={checkedState}
        defaultChecked={true}
        onChange={props.onChange(props.title, checkedState)}
      />
      <div className="h-full ml-4 flex flex-wrap items-stretch">
        <div className="w-full font-medium text-lg">{props.title}</div>
        <div className="w-full text-md text-gray-500">{props.description}</div>
      </div>
    </div>
  );
}
