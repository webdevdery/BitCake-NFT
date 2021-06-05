import React from "react";
import { Link } from "react-router-dom";
import NFTCard from "../../components/common/NFTCard";
import { collectibleData } from "../../constants/category";

export default function Collectible() {
  return (
    <div className=" w-full pt-60 pb-20 text-center lg:text-left flex flex-wrap">
      <div className="absolute left-0 top-0 w-screen h-60">
        <img
          alt=""
          src={collectibleData.brandImage}
          className="w-full h-full border border-gray-200 object-cover shadow-lg"
        />
      </div>

      <div className="text-center w-full text-4xl font-medium mt-8">
        {collectibleData.title}
      </div>

      <div
        className="text-center w-full text-sm text-gray-500 max-w-3xl mx-auto mt-8"
        dangerouslySetInnerHTML={{ __html: collectibleData.description }}
      ></div>

      <div className="w-full mt-16">
        <div className="w-full flex justify-between items-end border-b border-gray-400 pb-2 mt-16">
          <div className="text-xl font-hakuna text-gray-700">
            ENDING SOON
          </div>
          <Link to={``} className="flex items-center cursor-pointer">
            <div className="text-md font-hakuna text-gray-500 cursor-pointer">
              View all
            </div>
          </Link>
        </div>
        <div className="w-full mt-4">
          {
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {collectibleData.endingSoon.map((recentItem, recentIndex) => {
                return (
                  <NFTCard
                    cardData={recentItem}
                    key={"recent-" + recentIndex}
                  />
                );
              })}
            </div>
          }
        </div>
        <div className="w-full flex justify-between items-end border-b border-gray-400 pb-2 mt-16">
          <div className="text-xl font-hakuna text-gray-700">
            NEWLY MINTED
          </div>
          <Link to={``} className="flex items-center cursor-pointer">
            <div className="text-md font-hakuna text-gray-500 cursor-pointer">
              View all
            </div>
          </Link>
        </div>
        <div className="w-full mt-4">
          {
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {collectibleData.newlyMinted.map((newItem, newIndex) => {
                return <NFTCard cardData={newItem} key={"new-" + newIndex} />;
              })}
            </div>
          }
        </div>
        <div className="w-full flex justify-between items-end border-b border-gray-400 pb-2 mt-16">
          <div className="text-xl font-hakuna text-gray-700">
            ON AUCTION
          </div>
          <Link to={``} className="flex items-center cursor-pointer">
            <div className="text-md font-hakuna text-gray-500 cursor-pointer">
              View all
            </div>
          </Link>
        </div>
        <div className="w-full mt-4">
          {
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {collectibleData.onAuction.map((auctionItem, auctionIndex) => {
                return (
                  <NFTCard cardData={auctionItem} key={"new-" + auctionIndex} />
                );
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
