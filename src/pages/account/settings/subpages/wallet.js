import {CogIcon} from '@heroicons/react/solid';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import CustomButton from '../../../../components/common/Button';
import {userSelector} from '../../../../redux/auth/selector';

export default function WalletPage() {
  const user = useSelector(userSelector);
  const [copyText, setcopyText] = useState('Copy');
  return (
    <div className="w-full h-full p-10 space-y-8 max-w-3xl">
      <div className="w-full rounded-md border border-gray-300">
        <div className="w-full border-b border-gray-300 p-5 flex">
          <CogIcon className="w-7 h-7 mr-3" />
          <div className="text-lg">Settings</div>
        </div>

        <div className="w-full p-5 space-y-3 mt-3">
          <div className="text-gray-700 font-medium">Your Wallet Address</div>
          <div className="w-full relative">
            <input
              type="text"
              readOnly
              className="w-full p-3 rounded-md border border-gray-400 focus:outline-none focus:ring-none focus:border-none bg-blue-50 border-r-none"
              value={user.address}
            />
            <button
              className="absolute right-2 top-3 text-primary-dark font-bold focus:outline-none"
              onClick={() => {
                navigator.clipboard.writeText(user.address);
                setcopyText('Copied!');
                setTimeout(() => {
                  setcopyText('Copy');
                }, 1000);
              }}
            >
              {copyText}
            </button>
          </div>
        </div>

        <div className="w-full space-x-5 p-5">
          <CustomButton
            label="Add Funds"
            styled="solid"
            className="w-40 h-12"
          />
          <CustomButton
            label="Log out"
            styled="outline"
            className="w-40 h-12"
          />
        </div>
      </div>
    </div>
  );
}
