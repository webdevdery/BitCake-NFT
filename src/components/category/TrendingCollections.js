import React from "react";
import { Link } from "react-router-dom";
import { artData } from "../../constants/category";

export default function TrendingCollections() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-end border-b border-gray-400 pb-2">
        <div className="font-bold font-hakuna text-xl text-gray-700">
          TRENDING COLLECTIONS
        </div>
        <Link
          to={`/collections`}
          className="flex items-center cursor-pointer"
        >
          <div className="text-md font-hakuna text-gray-500 cursor-pointer hover:scale-102">
            View all
          </div>
        </Link>
      </div>
      <div className="w-full mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {artData.trendingCollections.map((trendingItem, trendingIndex) => (
          <Link key={"trending-" + trendingIndex} to={`/collections/${1}`}>
            <div className="relative rounded-md overflow-hidden">
              <div className="grid grid-cols-2 grid-rows-2">
                {trendingItem.images.map((trendingImage, imageIndex) => (
                  <img
                    src={trendingImage}
                    className="w-full h-40"
                    key={"trending-" + imageIndex}
                  />
                ))}
              </div>
              <img
                src={trendingItem.avatarPath}
                className="w-24 h-24 rounded-full absolute border-4 border-white"
                style={{ left: "calc(50% - 3rem)", top: "calc(50% - 3rem)" }}
              ></img>
              <div
                className="absolute bottom-0 w-full text-center font-bold text-white text-2xl py-2 bg-gradient-to-t from-black to-transparent"
                style={{ top: "calc(50% + 4rem)" }}
              >
                <div className="w-full">{trendingItem.name}</div>
                <div className="w-full text-xl">{trendingItem.galleryName}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
