import React from "react";

export default function Block(props) {
  return (
    <div className="w-full items-center justify-center space-y-4">
      {/* <div className="w-full flex justify-center">
        <img src={props.blockData.imagePath} className="w-10 h-10"></img>
      </div> */}
      <div className="w-full flex justify-center font-bold text-xl">
        {props.blockData.title}
      </div>
      <div className="w-full flex text-center text-gray-500 flex" dangerouslySetInnerHTML={{__html: props.blockData.description}}></div>
    </div>
  );
}
