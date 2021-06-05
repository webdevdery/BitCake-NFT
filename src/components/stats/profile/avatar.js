import { CameraIcon } from "@heroicons/react/solid";
import React from "react";
import ReactTooltip from "react-tooltip";

export default function Avatar(props) {
  return (
    <div
      className="absolute w-40 h-40 z-20 top-40"
      style={{ left: "calc(50% - 5rem)" }}
    >
      <img
        alt=""
        src={props.avatarPath}
        className="w-full h-full rounded-full border-4 border-white object-cover"
      />
      {props.showButton && (
        <label
          className="absolute rounded-full bg-gray-200 w-10 h-10 p-2 bottom-4 right-0 cursor-pointer"
          data-tip
          data-for="avatar"
        >
          <ReactTooltip
            id="avatar"
            type="dark"
            effect="solid"
            className="w-32"
            place="right"
          >
            <span className="w-10">{"Change Avatar"}</span>
          </ReactTooltip>
          <CameraIcon className="w-full h-full text-gray-700" />
          <input
            type="file"
            name="userAvatar"
            accept="image/*"
            className="hidden"
            onChange={props.onChange}
          />
        </label>
      )}
    </div>
  );
}
