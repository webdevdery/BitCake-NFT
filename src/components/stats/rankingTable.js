import { MenuIcon } from "@heroicons/react/outline";

/* This example requires Tailwind CSS v2.0+ */
const allData = [
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Jane Cooper",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sorare",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Jane Cooper",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: true,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sorare",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Jane Cooper",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: true,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sorare",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Jane Cooper",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sorare",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Jane Cooper",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sorare",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  // More people...
];
const audioData = [
  {
    avatarPath:
      "https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s48",
    name: "CryptoPunks",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: true,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/tgpgbT3OwxX4REASLdyafzCWQ5EhOtgSiIlhI3am3aZ_mYPS0WbM9Z4F6hOhb0D-AKqhHlFg6BNBquchQy-_bwY=s48",
    name: "ZED RUN",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/QiUeYWVhBNycj32R6-I-LCZkBGo4whXIe9hMm9h4X525e-ncEnTv2ZQrX_7cmZ8f0HBJFMLDMBKMlGE3pIHfFykt6Q=s48",
    name: "NFT Art",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/gj47nmAR3valkmpVbwamiuTJfWEWSCyVeORdjM6DRWrZ1o8WaqBxFXmpBrzZnGoWaPwq1Y0jiXRrBLbnLcawAp92=s48",
    name: "Sorare",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: true,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/FG0QJ00fN3c_FWuPeUr9-T__iQl63j9hn5d6svW8UqOmia5zp3lKHPkJuHcvhZ0f_Pd6P2COo9tt9zVUvdPxG_9BBw=s48",
    name: "Jane Cooper",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Rarible",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Jane Cooper",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: true,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sorare",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Jane Cooper",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
  {
    avatarPath:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Sorare",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  // More people...
];
const videoData = [
  {
    avatarPath:
      "https://lh3.googleusercontent.com/d784iHHbqQFVH1XYD6HoT4u3y_Fsu_9FZUltWjnOzoYv7qqB5dLUqpGyHBd8Gq3h4mykK5Enj8pxqOUorgD2PfIWcVj9ugvu8l0=s48",
    name: "Meebits",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/-1VbTF_qOdwTUTxW8KzJbFcMX0-mDF-BJM-gmmRl8ihvoo53PF_1z1m1snLXxwcxVFyJH7wk_kouq-KVyB55N9U=s48",
    name: "SuperRare",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: true,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/5KIxEGmnAiL5psnMCSLPlfSxDxfRSk4sTQRSyhPdgnu70nGb2YsuVxTmO2iKEkOZOfq476Bl1hAu6aJIKjs1myY=s48",
    name: "Decentraland",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/5y-UCAXiNOFXH551w5bWdZEYOCdHPwbqmcKb-xa3uVQEjQgxvih3HtZWSmzqDqd0uk7kIqFrZhw32Gt6xPBFg4t_n9BKhpou-dwnOg=s48",
    name: "VeeFriends",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/FG0QJ00fN3c_FWuPeUr9-T__iQl63j9hn5d6svW8UqOmia5zp3lKHPkJuHcvhZ0f_Pd6P2COo9tt9zVUvdPxG_9BBw=s48",
    name: "Jane Cooper",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: true,
  },
];
const digitalartData = [
  {
    avatarPath:
      "https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s48",
    name: "Bored Ape Yacht Club",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/H3COTZ3CUro_FJfVr_QhKqtAr4t5MuGBFhe_HkUTieMezEdlheiPwPSInuyuDUjPk2kr_hl-nlxgIkKe-4goz0AFLslLB8rM8osUMA=s48",
    name: "Pablo Escobar Collection.",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: false,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/Je8Q3uCBwxtdBVhMEPAdlL07paQ7ynEO53iJZkRuoVhIQ8kbzxGXyVh4U91eJx5qVFJL98UEDrsaAnuop38M7d9acY4CCLyZAuew=s48",
    name: "Art Blocks Curated",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: true,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/xVHIE7QpN_UvTT0hWHGsPTo61XXShTubIJIIvRpfbqPVwwts3zUSVlMACzS6Z8yHwOnxvILgk1ZAojkpcr7182k=s48",
    name: "The Underground Sistine Chapel by Pascal Boyart",
    svolume: 862.99,
    schange: 56.84,
    tvolume: 42774.56,
    avgPrice: 0.12,
    owners: 19318,
    assets: 273679,
    isNew: true,
  },
  {
    avatarPath:
      "https://lh3.googleusercontent.com/BX7cWHwWFzo6FVh-Ql_qzFbXtADQgLLlpLOl3l9tS6hUPlgtGHgHn_E1FxiHXmzNlvig00ZEAk9uZU-tMPT2Fg=s48",
    name: "Autoglyphs",
    svolume: 2254.84,
    schange: -28.27,
    tvolume: 174651.13,
    avgPrice: 14.45,
    owners: 2312,
    assets: 9999,
    isNew: false,
  },
];

const rankingData = {
  All: allData,
  Music: audioData,
  Podcast: videoData,
  Radio: digitalartData,
  Sports: audioData,
  Gaming: digitalartData,
  Politics: videoData,
  Education: digitalartData,
  Film: audioData,
  Technology: videoData,
  Entertainment: digitalartData,
  Other: audioData,
};

Number.prototype.format = function (n, x) {
  var re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, "g"), "$&,");
};

export default function RankingTable(props) {
  return (
    <div className={`flex flex-col w-full`}>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-auto"
            style={{ height: "731px" }}
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-56"
                  >
                    COLLECTION
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    7 DAY VOLUME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    7 DAY CHANGE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    TOTAL VOLUME
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AVG PRICE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    OWNERS
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ASSETS
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rankingData[props.currentTab].map((item, index) => (
                  <tr key={`ranking-${index}`}>
                    <td className="pl-6 py-4 whitespace-nowrap relative overflow-hidden">
                      <div className="flex items-center">
                        <div className="mr-4">{index + 1}.</div>
                        <div className="flex-shrink-0 h-8 w-8">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={item.avatarPath}
                            alt=""
                          />
                        </div>
                        <div className="ml-2">
                          <div className="font-medium text-gray-600 w-44 truncate">
                            {item.name}
                          </div>
                        </div>
                      </div>
                      {item.isNew && (
                        <div className="bg-blue-500 text-white text-sm w-16 h-16 absolute -left-8 -top-8 flex items-end justify-center transform -rotate-45">
                          New
                        </div>
                      )}
                    </td>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
