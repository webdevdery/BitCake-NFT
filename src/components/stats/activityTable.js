import {
  HandIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SwitchHorizontalIcon,
  TagIcon,
} from '@heroicons/react/solid';

/* This example requires Tailwind CSS v2.0+ */
const allData = [
  {
    event: 'Offer',
    item: {
      imagePath:
        'https://lh3.googleusercontent.com/AaSFtU2eSi6q4dSkgfKkFMQfYdJoXhQqaKOMd5Zzr7wMMd0x2X3iH_RPxA2JTNAJBCrag6vph3gNKesv-FqkozIRxf62SMI7XeUT=s96',
      name: 'Bored Ape Yacht Club',
    },
    unitPrice: {
      type: 'WBNB',
      value: 0.208,
    },
    quantity: 1,
    from: {
      avatarPath:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      name: 'Jane Cooper',
    },
    to: {
      avatarPath:
        'https://storage.googleapis.com/opensea-static/opensea-profile/22.png',
      name: 'Sorare',
    },
    date: 13,
  },
  {
    event: 'Sale',
    item: {
      imagePath:
        'https://lh3.googleusercontent.com/l_yjehbr9uc_ja6RZYC93riMLT9f7TgTlW_jL7z1yIb4okxB34gk4DXLJOw-D4PyLiG-fk5-GTfOsARspdEhx19d4vB3BC4y0p8KXA=s96',
      name: 'Arabian Camel #7689',
    },
    unitPrice: {
      type: 'BNB',
      value: 0.05,
    },
    quantity: 1,
    from: {
      avatarPath:
        'https://lh3.googleusercontent.com/GqJvu18xKNCEDfAmAWwCJ1ZXpLymbQ9JsBu8bfoKyI33DdZQAQV05y-C-e3V1tJ-Jwp_Zbi24WPIXIuz3_2kCGsoDregim9Pid_77qM=s44',
      name: 'MasterBuZ',
    },
    to: {
      avatarPath:
        'https://storage.googleapis.com/opensea-static/opensea-profile/4.png',
      name: 'Pskan3',
    },
    date: 67,
  },
  {
    event: 'List',
    item: {
      imagePath:
        'https://lh3.googleusercontent.com/kD-HGebzTP5uVNpCuK0Gc5qKHg2N3GJx7tki47QVIzY-GZuY6iFNUDCmZNZvMifTVCgXedJgzRuw2qYk2K4w0Q-W9S7bFpLUsfJ_1g=s96',
      name: 'Bitcoin Sign #2395',
    },
    unitPrice: {
      type: 'BNB',
      value: 0.05,
    },
    quantity: 1,
    from: {
      avatarPath:
        'https://lh3.googleusercontent.com/RN4XUhHtTd2zA1uyUkuhm6Dpf40IBMcY-jQAhLKAHkAGxjOBGODUSgvXBSL6eO2vDHlGBRv89MRlXhOCkkk8cCl1DEhZYOBvjsapCQM=s44',
      name: 'Vertumne',
    },
    to: {
      avatarPath: '',
      name: '',
    },
    date: 67,
  },
  {
    event: 'Created',
    item: {
      imagePath:
        'https://lh3.googleusercontent.com/yWIyk9-RSV86XdPVL6BaZXxHzGHAuWWzmi47oftBEBeQgBb10TXoSgMhGQXnd4_IUTaL2kWCjOhOajhmGAKMzJFO0ZbqbdmmJRBo6hU=s96',
      name: 'SPAIN',
    },
    unitPrice: {
      type: 'BNB',
      value: 0.29,
    },
    quantity: 1,
    from: {
      avatarPath:
        'https://storage.googleapis.com/opensea-static/opensea-profile/1.png',
      name: 'NullAddress',
    },
    to: {
      avatarPath:
        'https://lh3.googleusercontent.com/osFpjTAdOU_6UHLgYypdk7yAPvei-9V24pFSOfaYDS7lFHb0WEiMnIZYK8b16D0kkvsugmLosroSdEbTdb7QDpO8xdOBZmqBBkjm-w=s44',
      name: 'FluffiMuffin',
    },
    date: 34,
  },
  {
    event: 'Offer',
    item: {
      imagePath:
        'https://lh3.googleusercontent.com/AaSFtU2eSi6q4dSkgfKkFMQfYdJoXhQqaKOMd5Zzr7wMMd0x2X3iH_RPxA2JTNAJBCrag6vph3gNKesv-FqkozIRxf62SMI7XeUT=s96',
      name: 'Bored Ape Yacht Club',
    },
    unitPrice: {
      type: 'WBNB',
      value: 0.208,
    },
    quantity: 1,
    from: {
      avatarPath:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      name: 'Jane Cooper',
    },
    to: {
      avatarPath:
        'https://storage.googleapis.com/opensea-static/opensea-profile/22.png',
      name: 'Sorare',
    },
    date: 13,
  },
  {
    event: 'Sale',
    item: {
      imagePath:
        'https://lh3.googleusercontent.com/l_yjehbr9uc_ja6RZYC93riMLT9f7TgTlW_jL7z1yIb4okxB34gk4DXLJOw-D4PyLiG-fk5-GTfOsARspdEhx19d4vB3BC4y0p8KXA=s96',
      name: 'Arabian Camel #7689',
    },
    unitPrice: {
      type: 'BNB',
      value: 0.05,
    },
    quantity: 1,
    from: {
      avatarPath:
        'https://lh3.googleusercontent.com/GqJvu18xKNCEDfAmAWwCJ1ZXpLymbQ9JsBu8bfoKyI33DdZQAQV05y-C-e3V1tJ-Jwp_Zbi24WPIXIuz3_2kCGsoDregim9Pid_77qM=s44',
      name: 'MasterBuZ',
    },
    to: {
      avatarPath:
        'https://storage.googleapis.com/opensea-static/opensea-profile/4.png',
      name: 'Pskan3',
    },
    date: 67,
  },
  {
    event: 'List',
    item: {
      imagePath:
        'https://lh3.googleusercontent.com/kD-HGebzTP5uVNpCuK0Gc5qKHg2N3GJx7tki47QVIzY-GZuY6iFNUDCmZNZvMifTVCgXedJgzRuw2qYk2K4w0Q-W9S7bFpLUsfJ_1g=s96',
      name: 'Bitcoin Sign #2395',
    },
    unitPrice: {
      type: 'BNB',
      value: 0.05,
    },
    quantity: 1,
    from: {
      avatarPath:
        'https://lh3.googleusercontent.com/RN4XUhHtTd2zA1uyUkuhm6Dpf40IBMcY-jQAhLKAHkAGxjOBGODUSgvXBSL6eO2vDHlGBRv89MRlXhOCkkk8cCl1DEhZYOBvjsapCQM=s44',
      name: 'Vertumne',
    },
    to: {
      avatarPath: '',
      name: '',
    },
    date: 67,
  },
  {
    event: 'Created',
    item: {
      imagePath:
        'https://lh3.googleusercontent.com/yWIyk9-RSV86XdPVL6BaZXxHzGHAuWWzmi47oftBEBeQgBb10TXoSgMhGQXnd4_IUTaL2kWCjOhOajhmGAKMzJFO0ZbqbdmmJRBo6hU=s96',
      name: 'SPAIN',
    },
    unitPrice: {
      type: 'BNB',
      value: 0.29,
    },
    quantity: 1,
    from: {
      avatarPath:
        'https://storage.googleapis.com/opensea-static/opensea-profile/1.png',
      name: 'NullAddress',
    },
    to: {
      avatarPath:
        'https://lh3.googleusercontent.com/osFpjTAdOU_6UHLgYypdk7yAPvei-9V24pFSOfaYDS7lFHb0WEiMnIZYK8b16D0kkvsugmLosroSdEbTdb7QDpO8xdOBZmqBBkjm-w=s44',
      name: 'FluffiMuffin',
    },
    date: 34,
  },
];

const activeData = {
  All: allData,
  Music: allData,
  Podcast: allData,
  Radio: allData,
  Sports: allData,
  Gaming: allData,
  Politics: allData,
  Education: allData,
  Film: allData,
  Technology: allData,
  Entertainment: allData,
  Other: allData,
};

Number.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

export default function ActivityTable(props) {
  return (
    <div className={`flex flex-col w-full`}>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-y-auto"
            style={{height: '731px'}}
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-"
                  >
                    Event
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-56"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Unit Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    From
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeData[props.currentTab].map((item, index) => (
                  <tr key={`activity-${index}`}>
                    <td className="px-6 py-4 h-full whitespace-nowrap w-28">
                      <div className="flex items-center">
                        {item.event === 'Offer' ? (
                          <HandIcon className="w-5 h-5 text-gray-500" />
                        ) : item.event === 'List' ? (
                          <TagIcon className="w-5 h-5 text-gray-500" />
                        ) : item.event === 'Sale' ? (
                          <ShoppingCartIcon className="w-5 h-5 text-gray-500" />
                        ) : item.event === 'Created' ? (
                          <ShoppingBagIcon className="w-5 h-5 text-gray-500" />
                        ) : item.event === 'Transfer' ? (
                          <SwitchHorizontalIcon className="w-5 h-5 text-gray-500" />
                        ) : (
                          ''
                        )}
                        <div className="ml-2">{item.event}</div>
                      </div>
                    </td>
                    <td className="pl-6 py-4 whitespace-nowrap relative overflow-hidden">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 rounded-md border border-gray-400 overflow-hidden">
                          <img
                            className="w-full h-full"
                            src={item.item.imagePath}
                            alt=""
                          />
                        </div>
                        <div className="ml-2">
                          <div className="font-medium text-gray-600 w-44 truncate">
                            {item.item.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap">
                      <div className="text-gray-600 flex items-center">
                        <img
                          src="assets/icons/nft/bnb.svg"
                          className="border border-gray-500 rounded-full h-5 w-5 p-px"
                          alt="logo"
                        />
                        <div className="ml-2">{item.unitPrice.value}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap">
                      <div className="text-gray-600 flex items-center">
                        {item.quantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap w-40">
                      {item.from.avatarPath && (
                        <div className="text-gray-600 flex items-center">
                          <img
                            src={item.from.avatarPath}
                            className="w-7 h-7 rounded-full border border-gray-400 p-px"
                            alt="avatar"
                          />
                          <div className="ml-2 w-28 truncate">
                            {item.from.name}
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap w-40">
                      {item.to.avatarPath && (
                        <div className="text-gray-600 flex items-center">
                          <img
                            src={item.to.avatarPath}
                            className="w-7 h-7 rounded-full border border-gray-400 p-px"
                            alt="avatar"
                          />
                          <div className="ml-2 w-28 truncate">
                            {item.to.name}
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap">
                      <div className="text-gray-600 flex items-center">
                        {parseInt(item.date / 3600) > 0
                          ? parseInt(item.date / 3600) === 1
                            ? 'a year ago'
                            : `${parseInt(item.date / 3600)} years ago`
                          : parseInt(item.date / 60) > 0
                          ? parseInt(item.date / 60) === 1
                            ? 'a minute ago'
                            : `${parseInt(item.date / 60)} minutes ago`
                          : parseInt(item.date) === 1
                          ? 'one second ago'
                          : `${parseInt(item.date)} seconds ago`}
                      </div>
                    </td>
                  </tr>
                ))}
                {/* {rankingData[props.currentTab].map((item, index) => (
                  <tr key={`ranking-${index}`}>
                    
                    <td className="px-6 py-4 h-full whitespace-nowrap">
                      <div className="text-gray-600 flex items-center">
                        <MenuIcon className="w-5 h-5 m-2 ml-0 text-gray-600" />
                        {item.svolume.format(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap">
                      <div
                        className={`text-gray-600 flex items-center ${
                          item.schange < 0 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {item.schange.format(2)}%
                      </div>
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap">
                      <div className="text-gray-600 flex items-center">
                        <MenuIcon className="w-5 h-5 m-2 ml-0 text-gray-600" />
                        {item.tvolume.format(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap">
                      <div className="text-gray-600 flex items-center">
                        <MenuIcon className="w-5 h-5 m-2 ml-0 text-gray-600" />
                        {item.avgPrice.format(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap">
                      <div className="text-gray-600 flex items-center">
                        {item.owners.format()}
                      </div>
                    </td>
                    <td className="px-6 py-4 h-full whitespace-nowrap">
                      <div className="text-gray-600 flex items-center">
                        {item.assets.format()}
                      </div>
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
