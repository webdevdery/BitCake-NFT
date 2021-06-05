import React from 'react';
import {MenuIcon} from '@heroicons/react/outline';
import CustomButton from '../Button';

export default function CurrentPrice(props) {
  return (
    <div className="w-full">
      <div className="w-full h-15 flex px-3 py-2 rounded-t-md border border-b-0 border-gray-400 flex items-center space-x-2 bg-primary-dark text-white">
        <div className="font-bold font-janeroeb text-2xl">Current price</div>
      </div>
      <div className="w-full rounded-b-md border border-t-0 border-gray-400 px-3 py-2 space-y-3 flex flex-wrap justify-center">
        <div className="flex items-center font-bold text-3xl w-full">
          <MenuIcon className="w-8 h-8 mr-2" />
          {props.price}
          <div className="text-base font-medium text-gray-400 ml-1 self-end mb-0.5">
            ($876.09)
          </div>
        </div>
        <div className="w-full flex space-x-5">
          <CustomButton styled="solid" label="Buy now" />
          <CustomButton type="black" label="Buy with credit card" />
        </div>
      </div>
    </div>
  );
}
