import React from "react";
import {
  ChevronDownIcon,
  RefreshIcon,
  MenuAlt2Icon,
  ShareIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import { EyeIcon, MenuIcon, TrendingUpIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import CustomButton from "../components/common/Button";
import Waveform from "../components/common/Waveform";
import PlayedCount from "../components/common/auction/PlayedCount";
import Favourite from "../components/common/auction/Favourite";
import AddQueue from "../components/common/auction/AddQueue";
import PriceHistory from "../components/common/auction/PriceHistory";
import Listing from "../components/common/auction/Listing";
import Offer from "../components/common/auction/Offer";
import Details from "../components/common/auction/Details";
import Property from "../components/common/auction/Property";
import CurrentPrice from "../components/common/auction/CurrentPrice";
import AudioImage from "../components/common/audioImage";

export default function AuctionPage(props) {
  const id = props.match.params.id;
  const cardData = {
    favourites: 5,
    cardType: "audio",
    altUrl:
      "https://storage.opensea.io/files/fad8aac3dc77f370aa9f3fdcb970fc13.svg",
    videoPath: "",
    audioPath: "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3",
    imagePath:
      "https://storage.opensea.io/files/fad8aac3dc77f370aa9f3fdcb970fc13.svg",
    avatarPath: "/assets/images/avatars/avatar.jpg",
    title: "Guns N' Roses Collectibles",
    subtitle: "Guns N' Roses Rare recording 1986<br />Sweet Child o'Mine",
    artist: "CryptoGrind",
    description:
      "This rate recording of Sweet Child O' Mine was recorded in 1986 at Rumbo Studios in Hollywood, CA.<br />This NFT bootleg is a one of a kind collectible.<br />Guns N' Roses music was basic and gritty, with a solid, hard, bluesy base; they were",

    priceType: "eth",
    priceTitle: "Current Bid",
    price: "0.55",
    extraType: "none",
    daysLeft: 0,
    offerFor: 0,
    last: 0,
    views: 35912,
    endingIn: "Auction has ended",
  };
  return (
    <div className="w-full lg:pt-16 pt-8 pb-20 text-center lg:text-left flex md:flex-nowrap flex-wrap md:space-x-5">
      <div className="md:w-5/12 w-full space-y-5">
        {/* Image */}
        <div className="rounded-t-md w-full border border-gray-400">
          <div className="w-full h-12 border-b border-gray-400 px-3 py-2 rounded-t-md font-bold text-xl bg-primary-dark text-white flex justify-between">
            <div className="flex items-center space-x-2">
              <PlayedCount label="35.6K" />
              <Favourite label="10.2K" />
            </div>
            <div className="flex items-center h-full space-x-4 text-white">
              <RefreshIcon className="w-6 h-6 cursor-pointer" />
              <ShareIcon className="w-6 h-6 cursor-pointer" />
              <DotsVerticalIcon className="w-6 h-6 cursor-pointer" />
            </div>
          </div>
          <AudioImage src={cardData.imagePath} audioPath={cardData.audioPath} />
        </div>

        <CurrentPrice price={cardData.price} />

        <div className="rounded-md w-full border border-gray-400 overflow-hidden">
          <Details artistName={cardData.artist} data={cardData.description} />

          <Property />

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full h-15 flex justify-between px-3 py-2 border-b border-gray-400 flex items-center bg-primary-dark text-white focus:outline-none">
                  <div className="flex items-center space-x-2">
                    <MenuAlt2Icon className="w-5 h-5" />
                    <div className="font-bold font-janeroeb text-2xl">
                      About glitchKICKS
                    </div>
                  </div>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <div className="md:w-7/12 w-full space-y-4">
        <div className="w-full flex lg:flex-nowrap flex-wrap justify-between lg:space-x-5">
          <div className="lg:mb-0 mb-6">
            <Link
              to={`/collections/${10}`}
              className="w-full h-12 flex items-center justify-between font-bold text-lg text-blue-400"
            >
              {cardData.title}
            </Link>
            <div
              className="w-full text-xl font-bold"
              dangerouslySetInnerHTML={{ __html: cardData.subtitle }}
            ></div>
            <div className="w-full flex items-center text-gray-500">
              <div>
                Owned by{" "}
                <Link to="/artists/1" className="text-blue-400">
                  {cardData.artist}
                </Link>
              </div>
              <EyeIcon className="w-5 h-5 ml-4 mr-1" />
              {cardData.views} views
            </div>
          </div>
        </div>
        <div className="w-full rounded-md border border-gray-400">
          {cardData.cardType == "image" ? (
            // <img src={cardData.altUrl} />
            <></>
          ) : cardData.cardType == "audio" ? (
            <>{/* <Waveform audioURL={cardData.audioPath} /> */}</>
          ) : (
            <></>
          )}
        </div>

        <PriceHistory />

        <Listing />

        <Offer />
      </div>
    </div>
  );
}
