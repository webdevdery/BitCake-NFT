import React from "react";
import { ClockIcon } from "@heroicons/react/solid";
import { currencyArray } from "./../../../constants/home";

export default function DescriptionComponent(props) {
  return (
    <>
      {props.cardData.daysLeft !== 0 ? (
        <div className="w-full flex flex-wrap">
          <div className="w-full text-lg text-white font-bold">Days Left</div>
          <div className="w-full text-lg text-white flex items-center h-6">
            <ClockIcon className="w-5 h-5 text-gray-400" />
            <span className="text-lg ml-2">
              {props.cardData.daysLeft} days left
            </span>
          </div>
        </div>
      ) : props.cardData.offerFor !== 0 ? (
        <div className="w-full flex flex-wrap">
          <div className="w-full text-lg text-white font-bold">Offer for</div>
          <div className="w-full text-lg text-white flex items-center h-6">
            <img
              alt="priceImage"
              src={currencyArray[props.cardData.priceType]}
              className="w-5 h-5"
            />
            <span className="text-lg ml-2">{props.cardData.offerFor}</span>
          </div>
        </div>
      ) : props.cardData.last !== 0 ? (
        <div className="w-full flex flex-wrap">
          <div className="w-full text-lg text-white font-bold">Last</div>
          <div className="w-full text-lg text-white flex items-center h-6">
            <img
              alt="priceImage"
              src={currencyArray[props.cardData.priceType]}
              className="w-5 h-5"
            />
            <span className="text-lg ml-2">{props.cardData.last}</span>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-wrap">
          <div className="w-full text-lg text-white font-bold truncate">Ending in</div>
          <div className="w-full text-white text-base lg:text-sm xl:text-base text-blue-300 text-secondary h-6 truncate">
            {props.cardData.endingIn}
          </div>
        </div>
      )}
    </>
  );
}
