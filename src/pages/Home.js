import NFTCard from '../components/common/NFTCard';
import '@appnest/masonry-layout';
import {Link} from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import {nftLists, audioData, trendingCollections} from '../constants/home';
import GetStarted from '../components/common/home/GetStarted';
import TrendingCollections from '../components/category/TrendingCollections';
import Artists from '../components/common/home/artists';

/* This example requires Tailwind CSS v2.0+ */
export default function Home() {
  return (
    <div>
      <main className="lg:relative">
        <HeroSection />
        <Artists />
        <div className=" w-full lg:pt-16 pt-8 pb-20 text-center lg:text-left flex flex-wrap space-y-5">
          {nftLists.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="w-full flex justify-between items-end border-b border-gray-400 pb-2">
                  {/* <img src={item.svgPath} className="w-12 h-12" /> */}
                  <div className="font-bold font-hakuna text-xl text-gray-700 flex items-center">
                    TRENDING {item.value}
                  </div>
                  <Link
                    to={`/collection/` + item.value.toLowerCase()}
                    className="flex items-center cursor-pointer"
                  >
                    <div className="text-md font-hakuna text-gray-500 cursor-pointer hover:scale-102">
                      View all
                    </div>
                  </Link>
                </div>
                <div className="w-full mt-4">
                  {index === 0 && (
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                      {audioData.map((sportItem, sportIndex) => {
                        return (
                          <NFTCard
                            cardData={sportItem}
                            key={'sport-' + sportIndex}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <TrendingCollections />
        </div>
        <GetStarted />
      </main>
    </div>
  );
}
