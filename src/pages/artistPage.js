import { DuplicateIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NFTCard from "../components/common/NFTCard";
import { artistsData } from "../constants/artists";
import ReactTooltip from "react-tooltip";

export default function ArtistPage(props) {
  const [copyText, setcopyText] = useState("Copy");
  const id = props.match.params.id - 1;
  return (
    <div>
      <div className=" w-full pt-60 pb-20 text-center lg:text-left flex flex-wrap">
        <img
          alt=""
          src={artistsData[id].avatarPath}
          className="w-40 h-40 rounded-full absolute z-20 top-40 border-4 border-white bg-primary"
          style={{ left: "calc(50% - 5rem)" }}
        />
        <div className="absolute left-0 top-0 w-screen h-60">
          <img
            alt=""
            src={artistsData[id].imagePath}
            className="w-full h-full border border-gray-200 object-cover shadow-lg"
          />
        </div>

        <div className="text-center w-full text-4xl font-medium mt-24">
          {artistsData[id].fullname}
        </div>

        <div className="w-full flex justify-center items-center mt-4">
          <div className="text-center w-40 truncate">{artistsData[id].address}</div>
          <DuplicateIcon
            className="w-5 h-5 ml-3 cursor-pointer focus:outline-none"
            data-tip
            data-for="copy"
            onClick={() => {
              navigator.clipboard.writeText(artistsData[id].address);
              setcopyText("Copied!");
            }}
            onMouseEnter={() => {
              setcopyText("Copy");
            }}
          />
          <ReactTooltip id="copy" type="dark" effect="solid" className="w-20">
            <span className="w-10">{copyText}</span>
          </ReactTooltip>
        </div>

        <div
          className="text-center w-full text-sm text-gray-500 max-w-2xl mx-auto mt-4"
          dangerouslySetInnerHTML={{ __html: artistsData[id].description }}
        ></div>
        <div className="w-full">
          <div className="w-full flex justify-between items-end border-b border-gray-400 pb-2 mt-16">
            <div className="font-bold font-janeroeb text-3xl text-gray-700">
              ENDING SOON
            </div>
            <Link to={``} className="flex items-center cursor-pointer">
              <div className="text-xl font-janeroeb text-gray-500 cursor-pointer">
                View all
              </div>
            </Link>
          </div>
          <div className="w-full mt-4">
            {
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {artistsData[id].subdatas.endingSoon.map((recentItem, recentIndex) => {
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
            <div className="font-bold font-janeroeb text-3xl text-gray-700">
              NEWLY MINTED
            </div>
            <Link to={``} className="flex items-center cursor-pointer">
              <div className="text-xl font-janeroeb text-gray-500 cursor-pointer">
                View all
              </div>
            </Link>
          </div>
          <div className="w-full mt-4">
            {
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {artistsData[id].subdatas.newlyMinted.map((newItem, newIndex) => {
                  return <NFTCard cardData={newItem} key={"new-" + newIndex} />;
                })}
              </div>
            }
          </div>
          <div className="w-full flex justify-between items-end border-b border-gray-400 pb-2 mt-16">
            <div className="font-bold font-janeroeb text-3xl text-gray-700">
              ON AUCTION
            </div>
            <Link to={``} className="flex items-center cursor-pointer">
              <div className="text-xl font-janeroeb text-gray-500 cursor-pointer">
                View all
              </div>
            </Link>
          </div>
          <div className="w-full mt-4">
            {
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {artistsData[id].subdatas.onAuction.map((auctionItem, auctionIndex) => {
                  return (
                    <NFTCard
                      cardData={auctionItem}
                      key={"new-" + auctionIndex}
                    />
                  );
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
