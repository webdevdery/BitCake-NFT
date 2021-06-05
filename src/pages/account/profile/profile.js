import {
  ClockIcon,
  DuplicateIcon,
  GiftIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactTooltip from "react-tooltip";
import Avatar from "../../../components/stats/profile/avatar";
import Banner from "../../../components/stats/profile/banner";
import {
  CogIcon,
  CurrencyDollarIcon,
  ShareIcon,
  TagIcon,
} from "@heroicons/react/solid";
import NFTCard from "../../../components/common/NFTCard";
import CustomTooltip from "../../../components/common/tooltip";
import { Link, useLocation } from "react-router-dom";
import { userSelector } from "../../../redux/auth/selector";
import { useDispatch } from "react-redux";
import { uploadAvatar, uploadBanner } from "../../../redux/auth/action";

const category = [
  {
    icon: <TagIcon className="w-7 h-7 mr-2" />,
    text: "In Wallet",
  },
  {
    icon: <ClockIcon className="w-7 h-7 mr-2" />,
    text: "Activity",
  },
  {
    icon: <GiftIcon className="w-7 h-7 mr-2" />,
    text: "Offers",
  },
  {
    icon: <HeartIcon className="w-7 h-7 mr-2" />,
    text: "Favorites",
  },
  {
    icon: <CurrencyDollarIcon className="w-7 h-7 mr-2" />,
    text: "Referrals",
  },
];

const walletItems = [
  {
    favourites: 5,
    cardType: "image",
    videoPath: "",
    audioPath: "",
    imagePath:
      "https://lh3.googleusercontent.com/lYJHuLrkZrCBoRyOviM8xuibyzyUU3GahfJaZv3rW6h4hIiAvWmeLtTwAqb8lxLk3GUAA1OSH_uRlmubUtd6SXdI-cMeptKnY6JrXg=s302",
    avatarPath: "/assets/images/avatars/avatar.jpg",
    subCategory: "Sports",
    title: "ZED RUN",
    subtitle: "Feel the thunder",
    priceType: "eth",
    priceTitle: "Current Bid",
    price: "0.55 ETH",
    extraType: "none",
    daysLeft: 0,
    offerFor: 0,
    last: 0,
    endingIn: "Auction has ended",
  },
  {
    favourites: 4,
    cardType: "audio",
    videoPath: "",
    audioPath: "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3",
    imagePath:
      "https://lh3.googleusercontent.com/OWv7wjmQmfFB6-K4lj8Uux6lVhgP1NcPyykjeNR6OL_PPFibmwZ_qg6fO5oivpMlFYJOAXXID1prb11nPROLFkZezFAMVewUFpzesw=s265",
    avatarPath: "/assets/images/avatars/avatar.jpg",
    subCategory: "Sports",
    title: "Slabs",
    subtitle: "2017 PANINI PRIZM #191 LeBRON JAMES PSA 10 GEM MT",
    priceType: "weth",
    priceTitle: "Current Bid",
    price: "0.55 ETH",
    extraType: "none",
    daysLeft: 0,
    offerFor: 0,
    last: 0,
    endingIn: "Auction has ended",
  },
  {
    favourites: 5,
    cardType: "image",
    videoPath: "",
    audioPath: "",
    imagePath:
      "https://lh3.googleusercontent.com/rUDaauhOwbb2FVfofPFi_dNPzM6ZKMZvHeYOId-EAIA8fHjXpg7P1lE_DM6Tn4FQ3WWxe7DstaIqZVx0svqITjPuioAJbaz2-s693DQ=s302",
    avatarPath: "/assets/images/avatars/avatar.jpg",
    subCategory: "Sports",
    title: "ZED RUN",
    subtitle: "Feel the thunder",
    priceType: "eth",
    priceTitle: "Current Bid",
    price: "0.55 ETH",
    extraType: "none",
    daysLeft: 0,
    offerFor: 0,
    last: 0,
    endingIn: "Auction has ended",
  },
  {
    favourites: 5,
    cardType: "audio",
    videoPath: "",
    audioPath: "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3",
    imagePath:
      "https://lh3.googleusercontent.com/q92sMO7GyqyPzBCUs8L1SjLqmo62IwcwkEXh1pgrFUyhvRrVpy-WHztoDPwjA-6pLtwzLA6cWvde2pAStNjgetyM-oNtGFIZDjuz=s302",
    avatarPath: "/assets/images/avatars/avatar.jpg",
    subCategory: "Sports",
    title: "ZED RUN",
    subtitle: "Feel the thunder",
    priceType: "eth",
    priceTitle: "Current Bid",
    price: "0.55 ETH",
    extraType: "none",
    daysLeft: 0,
    offerFor: 0,
    last: 0,
    endingIn: "Auction has ended",
  },
];

export default function ProfilePage() {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();

  const [copyText, setcopyText] = useState("Copy");
  const [avatarImage, setavatarImage] = useState("");
  const [bannerImage, setbannerImage] = useState("");

  const location = useLocation();
  const { pathname } = location;

  const [currentTab, setcurrentTab] = useState(
    pathname.indexOf("profile") > 0 ? category[0] : category[3]
  );

  const changeAvatar = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    dispatch(uploadAvatar({file: file, address: user.address, type: "avatar"}));
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      setavatarImage(reader.result);
    };
  };

  const changeBanner = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    dispatch(uploadBanner({file: file, address: user.address, type: "banner"}));
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      setbannerImage(reader.result);
    };
  };
  return (
    <div>
      <div className=" w-full pt-60 pb-20 text-center lg:text-left flex flex-wrap">
        <Avatar
          avatarPath={avatarImage == "" ? (user.avatar == null ? "https://www.seekpng.com/png/detail/245-2454602_tanni-chand-default-user-image-png.png" : `${process.env.REACT_APP_API_PATH}/${user.avatar}`) : avatarImage}
          showButton={true}
          onChange={changeAvatar}
        />
        <Banner
          bannerPath={bannerImage == "" ? `${process.env.REACT_APP_API_PATH}/${user.banner}` : bannerImage}
          showButton={true}
          onChange={changeBanner}
        />
        <div className="w-full flex justify-end items-center p-4 space-x-4">
          <Link
            to="/account/settings"
            className="hover:shadow-dark p-3 rounded-md border border-gray-300 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
            data-tip
            data-for="settings"
          >
            <CogIcon className="w-7 h-7" />
          </Link>
          <button
            className="hover:shadow-dark p-3 rounded-md border border-gray-300 text-gray-500 hover:text-gray-700 focus:outline-none"
            data-tip
            data-for="share"
          >
            <ShareIcon className="w-7 h-7" />
          </button>
          <CustomTooltip id="settings" label="Settings" />
          <CustomTooltip id="share" label="Share" />
        </div>

        <div className="text-center w-full text-4xl font-medium mt-10">
          {user.name}
        </div>
        <div className="w-full flex justify-center items-center mt-4">
          <div className="text-center w-40 truncate">{user.address}</div>
          <DuplicateIcon
            className="w-5 h-5 ml-3 cursor-pointer focus:outline-none"
            data-tip
            data-for="copy"
            onClick={() => {
              navigator.clipboard.writeText(user.address);
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

        <div className="w-full flex items-center space-x-3 mt-10">
          {category.map((item, index) => (
            <div
              key={`item-${index}`}
              className={`p-2 flex items-center rounded-md cursor-pointer ${
                currentTab.text === item.text
                  ? "bg-primary-dark text-white"
                  : "text-gray-700"
              }`}
              onClick={() => {
                setcurrentTab(item);
              }}
            >
              {item.icon}
              <div className="text-xl font-bold">{item.text}</div>
            </div>
          ))}
        </div>

        <div className="w-full mt-10">
          {
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {walletItems.map((walletItem, itemIndex) => {
                return (
                  <NFTCard cardData={walletItem} key={"wallet-" + itemIndex} />
                );
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
