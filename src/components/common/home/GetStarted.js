import React from 'react';
import {getStartedBlocks} from '../../../constants/home';
import CustomButton from '../Button';
import Block from './Block';

export default function GetStarted() {
  return (
    <div className="w-screen bg-gray-50 xl:-ml-40 lg:-ml-16 md:-ml-16 sm:-ml-20 -ml-2 pb-5">
      <div className="w-full xl:px-40 lg:px-16 md:px-16 sm:px-20 p-2 text-center lg:text-left flex flex-wrap">
        <div className="w-full text-center text-3xl">
          Get started creating & selling your NFTs
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-10 mt-12">
          {getStartedBlocks.map((item, index) => (
            <Block blockData={item} key={'block-' + index} />
          ))}
        </div>
        <CustomButton
          label="Start Selling Now"
          styled="solid"
          className="mx-auto text-white bg-primary hover:bg-primary-dark mt-8"
        />
      </div>
    </div>
  );
}
