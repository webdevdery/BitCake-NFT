import React, {useState} from 'react';
import {HeartIcon} from '@heroicons/react/outline';
import {PlayIcon, PauseIcon} from '@heroicons/react/solid';
import DescriptionComponent from './home/DescriptionComponent';
import DotMenu from './DotMenu';
import ReactAudioPlayer from 'react-audio-player';
import {Link} from 'react-router-dom';
import AudioImage from './audioImage';
import VideoImage from './videoImage';

export default function NFTCard(props) {
  const [isFavourite, setisFavourite] = useState(false);
  const [isPlayed, setisPlayed] = useState(false);
  const onClickFavourite = () => {
    isFavourite ? setisFavourite(false) : setisFavourite(true);
  };

  const onClickCard = ($event) => {
    if ($event.target.tagName === 'svg') $event.preventDefault();
  };
  return (
    <Link to={`/auction/${10}`}>
      <div
        className="bg-white rounded-md w-full cursor-pointer hover:shadow-lg flex flex-wrap space-y-3 max-w-lg border border-gray-200 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-102 mx-auto z-10"
        onClick={onClickCard}
      >
        {/* <LazyLoad className="w-full"> */}
        <div className="bg-primary-light w-full rounded-t-md relative">
          {props.cardData.cardType === 'image' ? (
            <img
              alt="cardImage"
              src={props.cardData.imagePath}
              className="w-full h-80 rounded-t-lg"
            />
          ) : props.cardData.cardType === 'audio' ? (
            <AudioImage
              src={props.cardData.imagePath}
              audioPath={props.cardData.audioPath}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          ) : (
            <VideoImage src={props.cardData.videoPath} />
          )}
          <img
            alt=""
            src={props.cardData.avatarPath}
            className={`rounded-full w-20 h-20 absolute -bottom-10 border-4 border-white`}
            style={{left: 'calc(50% - 2.5rem)'}}
          ></img>
        </div>
        {/* </LazyLoad> */}

        <div className="w-full bg-white flex px-4 items-center justify-between">
          <div className="flex items-center">
            <div className="text-gray-400 text-sm font-medium flex items-center">
              <HeartIcon className="w-4 h-4 mr-1" onClick={onClickFavourite} />
              {props.cardData.favourites}
            </div>
            <DotMenu
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          </div>
          <div className="font-medium">{props.cardData.subCategory}</div>
        </div>

        <div className="w-full flex justify-center flex-wrap">
          <div className="text-lg px-10 truncate text-center w-full">
            {'@'}
            {props.cardData.title}
          </div>
          <div className="text-2xl font-bold px-5 truncate text-center mt-2 w-full">
            {props.cardData.subtitle}
          </div>
        </div>

        <div className="w-full bg-primary-dark p-4 flex rounded-b-md">
          <div className="w-1/2 flex flex-wrap">
            <div className="w-full text-lg text-white font-bold text-center truncate">
              {props.cardData.priceTitle}
            </div>
            <div className="w-full text-center">
              {props.cardData.price && (
                <div className="flex justify-center h-6">
                  {/* <img
                  src={currencyArray[props.cardData.priceType]}
                  className="w-5 h-5"
                /> */}
                  <span className="text-base lg:text-sm xl:text-base text-white">
                    {props.cardData.price}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-between text-center">
            <DescriptionComponent cardData={props.cardData} />
          </div>
        </div>
      </div>
    </Link>
  );
}
