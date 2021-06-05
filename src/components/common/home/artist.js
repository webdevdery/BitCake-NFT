import React from 'react';
import {Link} from 'react-router-dom';
import CustomButton from '../Button';

export default function Artist(props) {
  return (
    <Link to={`/artists/${props.artistData.id}`}>
      <div className="bg-white rounded-lg w-full cursor-pointer hover:shadow-lg flex flex-wrap space-y-5 max-w-lg border border-gray-200 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-102 mx-auto">
        <div className="w-full border-lg">
          <div className="w-full relative">
            <img
              alt="backImage"
              src={props.artistData.imagePath}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <img
              alt="avatarImage"
              src={props.artistData.avatarPath}
              className="border-8 border-white rounded-full w-20 h-20 absolute -bottom-10 bg-primary"
              style={{left: 'calc(50% - 2rem)'}}
            />
          </div>
          <div className="w-full pt-12 pb-6 px-4 flex flex-wrap space-y-2 border-b border-gray-200">
            <div className="w-full text-2xl font-bold text-center">
              {props.artistData.fullname}
            </div>
            <div className="w-full text-xl font-bold text-center">
              {props.artistData.name}
            </div>
            <div className="w-full text-md text-center">
              {props.artistData.description}
            </div>
          </div>
          <div className="w-full px-4 py-2">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-wrap">
                <div className="w-full text-2xl font-bold">
                  {props.artistData.followers}
                </div>
                <div className="w-full text-lg font-bold text-gray-500">
                  Followers
                </div>
              </div>
              <CustomButton styled="solid" label="Follow" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
