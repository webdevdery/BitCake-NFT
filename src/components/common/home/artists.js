import React from "react";
import { Link } from "react-router-dom";
import { artistsData } from "../../../constants/home";
import Artist from "./artist";

export default function Artists() {
  return (
    <div className=" w-full text-center lg:text-left flex flex-wrap">
      <div className="w-full flex justify-between items-end border-b border-gray-400 pb-2">
        <div className="text-xl font-hakuna text-gray-700">
          FEATURED ARTISTS
        </div>
        <Link to="/artists">
          <div className="text-md font-hakuna text-gray-500 cursor-pointer">
            View all artists
          </div>
        </Link>
      </div>
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-4">
        {artistsData.map((item, index) => (
          <Artist key={"artist-" + index} artistData={item} />
        ))}
      </div>
    </div>
  );
}
