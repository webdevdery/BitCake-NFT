import React, { useState } from "react";
import classNames from "classnames";
import { MenuAlt1Icon } from "@heroicons/react/solid";
import NFTCard from "../components/common/NFTCard";
import { galleryData } from "../constants/gallery";
import { Transition } from "@headlessui/react";
import GalleryMenu from "../components/gallery/GalleryMenu";

export default function CollectionPage() {
  const [currentTab, setcurrentTab] = useState("Auction");
  const [currentData, setcurrentData] = useState(galleryData.onAuction);
  const setCurrentTabByMenu = (curTab) => {
    console.log(curTab);
    switch (curTab) {
      case "Auction": {
        setcurrentTab("Auction");
        setTimeout(() => {
          setcurrentData(galleryData.onAuction);
        }, 1000);
        break;
      }
      case "Buy": {
        setcurrentTab("Buy");
        setTimeout(() => {
          setcurrentData(galleryData.onAuction);
        }, 1000);
        break;
      }
      case "Recent": {
        setcurrentTab("Recent");
        setTimeout(() => {
          setcurrentData(galleryData.newlyMinted);
        }, 1000);
        break;
      }
      case "Ending": {
        setcurrentTab("Ending");
        setTimeout(() => {
          setcurrentData(galleryData.endingSoon);
        }, 1000);
        break;
      }
      default:
        break;
    }
  };
  return (
    <div>
      <div className=" w-full pt-60 pb-20 text-center lg:text-left flex flex-wrap">
        <img
          alt=""
          src={galleryData.avatarImage}
          className="w-40 h-40 rounded-full absolute z-40 top-40 border-4 border-white"
          style={{ left: "calc(50% - 5rem)" }}
        />
        <div className="absolute left-0 top-0 w-screen h-60">
          <img
            alt=""
            src={galleryData.brandImage}
            className="w-full h-full border border-gray-200 object-cover shadow-lg"
          />
        </div>

        <div className="text-center w-full text-4xl font-medium mt-24">
          {galleryData.title}
        </div>

        <div className="flex w-full mt-4">
          <div className="w-full max-w-lg mx-auto grid grid-cols-4 h-28 rounded-md">
            <div className="w-full space-y-2 flex">
              <div className="my-auto w-full">
                <div className="w-full text-3xl font-bold text-center">492</div>
                <div className="w-full text-md text-center text-gray-500">
                  items
                </div>
              </div>
            </div>
            <div className="w-full space-y-2 flex">
              <div className="my-auto w-full">
                <div className="w-full text-3xl font-bold text-center">168</div>
                <div className="w-full text-md text-center text-gray-500">
                  owners
                </div>
              </div>
            </div>
            <div className="w-full space-y-2 flex">
              <div className="my-auto w-full">
                <div className="w-full text-3xl font-bold flex items-center justify-center">
                  <MenuAlt1Icon className="w-8 h-8" />
                  0.94
                </div>
                <div className="w-full text-md text-center text-gray-500">
                  average price
                </div>
              </div>
            </div>
            <div className="w-full space-y-2 flex">
              <div className="my-auto w-full">
                <div className="w-full text-3xl font-bold flex items-center justify-center">
                  <MenuAlt1Icon className="w-8 h-8" />
                  94.8
                </div>
                <div className="w-full text-md text-center text-gray-500">
                  volumn traded
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="text-center w-full text-sm text-gray-500 max-w-2xl mx-auto mt-8"
          dangerouslySetInnerHTML={{ __html: galleryData.description }}
        ></div> */}
        <div className="w-full mt-8">
          <div className="w-full flex justify-between pb-2 border-b border-gray-700 text-xl">
            <div className="space-x-2 lg:flex hidden">
              <div
                className={classNames(
                  "rounded-lg cursor-pointer px-3 pt-1 font-janeroeb flex items-center",
                  currentTab === "Auction" && "bg-primary-dark text-white"
                )}
                onClick={() => {
                  setcurrentTab("Auction");
                  setTimeout(() => {
                    setcurrentData(galleryData.onAuction);
                  }, 1000);
                }}
              >
                ON AUCTION
              </div>
              <div
                className={classNames(
                  "rounded-lg cursor-pointer px-3 pt-1  font-janeroeb flex items-center",
                  currentTab === "Buy" && "bg-primary-dark text-white"
                )}
                onClick={() => {
                  setcurrentTab("Buy");
                  setTimeout(() => {
                    setcurrentData(galleryData.onAuction);
                  }, 1000);
                }}
              >
                BUY NOW
              </div>
              <div
                className={classNames(
                  "rounded-lg cursor-pointer px-3 pt-1  font-janeroeb flex items-center",
                  currentTab === "Recent" && "bg-primary-dark text-white"
                )}
                onClick={() => {
                  setcurrentTab("Recent");
                  setTimeout(() => {
                    setcurrentData(galleryData.newlyMinted);
                  }, 1000);
                }}
              >
                RECENTLY MINTED
              </div>
              <div
                className={classNames(
                  "rounded-lg cursor-pointer px-3 pt-1  font-janeroeb flex items-center",
                  currentTab === "Ending" && "bg-primary-dark text-white"
                )}
                onClick={() => {
                  setcurrentTab("Ending");
                  setTimeout(() => {
                    setcurrentData(galleryData.endingSoon);
                  }, 1000);
                }}
              >
                ENDING SOON
              </div>
            </div>
            <GalleryMenu onChange={setCurrentTabByMenu} />
          </div>
          <div className="w-full lg:h-orow md:h-trow h-frow">
            <Transition
              show={currentTab === "Auction"}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {currentTab === "Auction" && (
                <div className="w-full mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                  {currentData.map((auctionItem, auctionIndex) => {
                    return (
                      <NFTCard
                        cardData={auctionItem}
                        key={"auction-" + auctionIndex}
                      />
                    );
                  })}
                </div>
              )}
            </Transition>

            <Transition
              show={currentTab === "Buy"}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {currentTab === "Buy" && (
                <div className="w-full mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                  {currentData.map((auctionItem, auctionIndex) => {
                    return (
                      <NFTCard
                        cardData={auctionItem}
                        key={"auction-" + auctionIndex}
                      />
                    );
                  })}
                </div>
              )}
            </Transition>
            <Transition
              show={currentTab === "Recent"}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {currentTab === "Recent" && (
                <div className="w-full mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                  {currentData.map((auctionItem, auctionIndex) => {
                    return (
                      <NFTCard
                        cardData={auctionItem}
                        key={"auction-" + auctionIndex}
                      />
                    );
                  })}
                </div>
              )}
            </Transition>
            <Transition
              show={currentTab === "Ending"}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-1000"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {currentTab === "Ending" && (
                <div className="w-full mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                  {currentData.map((auctionItem, auctionIndex) => {
                    return (
                      <NFTCard
                        cardData={auctionItem}
                        key={"auction-" + auctionIndex}
                      />
                    );
                  })}
                </div>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
}
