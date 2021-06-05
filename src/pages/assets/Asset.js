import React, { useState } from "react";
import classNames from "classnames";
import CustomMenu from "../../components/common/CustomMenu";
import { auctionData, reserveData, soldData } from "../../constants/assets";
import NFTCard from "../../components/common/NFTCard";
import { Transition } from "@headlessui/react";
import FilterMenu from "../../components/asset/FilterMenu";

export default function Asset() {
  const [currentTab, setcurrentTab] = useState("Auction");
  const [currentData, setcurrentData] = useState(auctionData);
  const setCurrentTabByMenu = (curTab) => {
    switch (curTab) {
      case "Auction": {
        setcurrentTab("Auction");
        setTimeout(() => {
          setcurrentData(auctionData);
        }, 200);
        break;
      }
      case "Reserve": {
        setcurrentTab("Reserve");
        setTimeout(() => {
          setcurrentData(reserveData);
        }, 200);
        break;
      }
      case "Sold": {
        setcurrentTab("Sold");
        setTimeout(() => {
          setcurrentData(soldData);
        }, 200);
        break;
      }
      default:
        break;
    }
  }

  return (
    <div className=" w-full lg:pt-16 pt-8 pb-20 text-left flex flex-wrap space-y-4">
      <div className="w-full text-gray-500">1,466,509 results</div>
      <div className="w-full flex justify-between pb-2 border-b border-gray-700 text-xl">
        <div className="space-x-2 lg:flex hidden">
          <div
            className={classNames(
              "rounded-lg cursor-pointer px-3 py-1 font-janeroeb flex items-center",
              currentTab === "Auction" && "bg-primary-dark text-white"
            )}
            onClick={() => {
              setcurrentTab("Auction");
              setTimeout(() => {
                setcurrentData(auctionData);
              }, 200);
            }}
          >
            Live auction
          </div>
          <div
            className={classNames(
              "rounded-lg cursor-pointer px-3 py-1 font-janeroeb flex items-center",
              currentTab === "Reserve" && "bg-primary-dark text-white"
            )}
            onClick={() => {
              setcurrentTab("Reserve");
              setTimeout(() => {
                setcurrentData(reserveData);
              }, 200);
            }}
          >
            Reserve not met
          </div>
          <div
            className={classNames(
              "rounded-lg cursor-pointer px-3 py-1 font-janeroeb flex items-center",
              currentTab === "Sold" && "bg-primary-dark text-white"
            )}
            onClick={() => {
              setcurrentTab("Sold");
              setTimeout(() => {
                setcurrentData(soldData);
              }, 200);
            }}
          >
            Sold
          </div>
        </div>
        <FilterMenu onChange={setCurrentTabByMenu} />
        <div className="flex md:space-x-4 space-x-1">
          <CustomMenu label="Status" />
          <CustomMenu label="Price" />
          <CustomMenu label="Collections" />
        </div>
      </div>
      <div className="w-full">
        <Transition
          show={currentTab === "Auction"}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            { currentData.map((auctionItem, auctionIndex) => {
              return (
                <NFTCard
                  cardData={auctionItem}
                  key={"auction-" + auctionIndex}
                />
              );
            })}
          </div>
        </Transition>

        <Transition
          show={currentTab === "Reserve"}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <masonry-layout cols="4">
            { currentData.map((auctionItem, auctionIndex) => {
              return (
                <NFTCard
                  cardData={auctionItem}
                  key={"auction-" + auctionIndex}
                />
              );
            })}
          </masonry-layout>
        </Transition>
        <Transition
          show={currentTab === "Sold"}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            { currentData.map((auctionItem, auctionIndex) => {
              return (
                <NFTCard
                  cardData={auctionItem}
                  key={"auction-" + auctionIndex}
                />
              );
            })}
            </div>
        </Transition>
      </div>
    </div>
  );
}
