import { PencilIcon } from "@heroicons/react/solid";
import React from "react";
import ReactTooltip from "react-tooltip";

export default function Banner(props) {
  return (
    <div className="absolute left-0 top-0 w-screen h-60 shadow-lg">
      {props.bannerPath.indexOf("null") < 0 && (
        <img
          alt=""
          src={props.bannerPath}
          className="w-full h-full object-cover"
        />
      )}

      {props.showButton && (
        <label
          className="absolute rounded-md bg-gray-200 w-10 h-10 top-5 right-10 flex items-center justify-center cursor-pointer"
          data-tip
          data-for="banner"
        >
          <ReactTooltip id="banner" type="dark" effect="solid" className="w-32">
            <span className="w-10">{"Banner Image"}</span>
          </ReactTooltip>
          <PencilIcon className="w-5 h-5" />
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
