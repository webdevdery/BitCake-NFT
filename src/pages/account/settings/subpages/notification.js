import React, {useState} from 'react';
import CurrencyInput from 'react-currency-input-field';
import {useSelector} from 'react-redux';
import CustomButton from '../../../../components/common/Button';
import Notification from '../../../../components/stats/profile/notification';
import {userSelector} from '../../../../redux/auth/selector';

const notificationOptions = [
  {
    title: 'Item Sold',
    description: 'When someone purchased one of your items',
  },
  {
    title: 'Bid Activity',
    description: 'When someone bids on one of your items',
  },
  {
    title: 'Price Change',
    description: 'When an item you made an offer on changes in price',
  },
  {
    title: 'Auction Expiration',
    description: 'When a Dutch or English auction you created ends',
  },
  {
    title: 'Outbid',
    description: 'When an offer you placed is exceeded by another user',
  },
  {
    title: 'Referral Successful',
    description: 'When an item you referred is purchased',
  },
  {
    title: 'Owned Asset Updates',
    description:
      'When a significant update occurs for one of the items you have purchased on opensea',
  },
  {
    title: 'Successful Purchase',
    description: 'When you successfully buy an item',
  },
  {
    title: 'OpenSea Newsletter',
    description: 'Occasional updates from the OpenSea team',
  },
];

export default function NotificationPage() {
  const user = useSelector(userSelector);
  const [price, setprice] = useState(0);
  const changeSetting = (setting, value) => {
    console.log(setting, value);
  };

  return (
    <div className="w-full h-full p-10 space-y-8 max-w-3xl">
      <div className="text-4xl w-full">Notification Settings</div>

      <div className="text-lg text-gray-400 flex">
        Select which notifications you would like to receive for{' '}
        <div className="w-36 truncate ml-1">{user.address}</div>
      </div>

      <div className="w-full rounded-md border border-gray-200 overflow-hidden">
        {notificationOptions.map((notificationItem, index) => (
          <div
            key={`notification-${index}`}
            className="w-full p-6 border-b border-gray-200"
          >
            <Notification
              title={notificationItem.title}
              description={notificationItem.description}
              onChange={changeSetting}
            />
          </div>
        ))}
      </div>

      <div className="w-full space-y-3">
        <div className="text-lg font-medium">Minimum Bid Threshold</div>

        <div className="text-md text-gray-400">
          Receive notifications only when you receive offers with a value
          greater than or equal to this amount of ETH.
        </div>

        <div className="w-full">
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center p-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50">
              <img src={'/assets/icons/nft/ethereum.svg'} className="w-5 h-5" />
              <div className="text-lg ml-3">ETH</div>
            </span>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="flex-1 block w-full focus:outline-none min-w-0 rounded-none sm:text-sm border border-gray-300 px-5"
              onChange={(e) => {
                setprice((e.target.value * 2688.83).toFixed(2));
              }}
            />
            <span className="flex items-center p-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50">
              <CurrencyInput
                defaultValue={0}
                decimalsLimit={2}
                prefix="$"
                readOnly
                value={price}
                className="p-1 focus:outline-none focus:ring-none bg-gray-50 w-32 text-gray-400"
              />
            </span>
          </div>
        </div>

        <CustomButton label="Save" styled="solid" className="w-40 h-12" />
      </div>
    </div>
  );
}
