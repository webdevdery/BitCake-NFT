import React, {useState} from 'react';
import CustomButton from '../../../components/common/Button';
import {userSelector} from '../../../redux/auth/selector';
import {useSelector} from 'react-redux';
import SideBar from './sidebar';
import Avatar from '../../../components/stats/profile/avatar';
import Banner from '../../../components/stats/profile/banner';
import {Dialog, Transition} from '@headlessui/react';
import {Fragment} from 'react';
import NFTDropzone from '../../../components/common/nftDropzone';

const collections = [
  {
    avatarPath: '/assets/images/avatars/avatar.jpg',
    name: 'Brian',
    galleryName: "Guns N' Roses Collectibles",
    images: [
      'https://storage.googleapis.com/opensea-static/featured-images/unstoppable-domains-featured.png',
      'https://storage.googleapis.com/opensea-static/featured-images/unstoppable-domains-featured.png',
      'https://storage.googleapis.com/opensea-static/official-ens-logo.png',
      'https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png',
    ],
  },
  {
    avatarPath: '/assets/images/avatars/avatar.jpg',
    name: 'Brian',
    galleryName: "Guns N' Roses Collectibles",
    images: [
      'https://storage.googleapis.com/opensea-static/featured-images/unstoppable-domains-featured.png',
      'https://storage.googleapis.com/opensea-static/featured-images/unstoppable-domains-featured.png',
      'https://storage.googleapis.com/opensea-static/official-ens-logo.png',
      'https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png',
    ],
  },
  {
    avatarPath: '/assets/images/avatars/avatar.jpg',
    name: 'Brian',
    galleryName: "Guns N' Roses Collectibles",
    images: [
      'https://storage.googleapis.com/opensea-static/featured-images/unstoppable-domains-featured.png',
      'https://storage.googleapis.com/opensea-static/featured-images/unstoppable-domains-featured.png',
      'https://storage.googleapis.com/opensea-static/official-ens-logo.png',
      'https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png',
    ],
  },
  {
    avatarPath: '/assets/images/avatars/avatar.jpg',
    name: 'Brian',
    galleryName: "Guns N' Roses Collectibles",
    images: [
      'https://storage.googleapis.com/opensea-static/featured-images/unstoppable-domains-featured.png',
      'https://storage.googleapis.com/opensea-static/featured-images/unstoppable-domains-featured.png',
      'https://storage.googleapis.com/opensea-static/official-ens-logo.png',
      'https://storage.googleapis.com/opensea-static/featured-images/decentraland-featured.png',
    ],
  },
];

export default function MyCollectionsPage() {
  const user = useSelector(userSelector);
  const [currentTab, setcurrentTab] = useState('collections');
  const [avatarImage, setavatarImage] = useState('');
  const [bannerImage, setbannerImage] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="w-full flex flex-nowrap min-h-screen text-center lg:text-left flex flex-wrap w-screen xl:-ml-40 lg:-ml-16 md:-ml-16 sm:-ml-20 -ml-2">
      {/* <div className="lg:block hidden min-w-80">
        <SideBar currentTab={currentTab} onClick={setcurrentTab} />
      </div> */}

      <div className="w-full h-full">
        {/* <div className="text-2xl w-full text-center mt-10">My Collections</div> */}

        <div className="w-full relative">
          <Avatar
            avatarPath={avatarImage == '' ? user.avatar : avatarImage}
            showButton={false}
          />

          <Banner
            bannerPath={bannerImage == '' ? user.banner : bannerImage}
            showButton={false}
          />
        </div>

        <div className="w-full mt-96 xl:px-40 md:px-16 sm:px-20 px-2">
          <CustomButton
            label="Create Collection"
            styled="solid"
            className="p-10"
            onClick={openModal}
          />
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 overflow-y-auto"
              onClose={closeModal}
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
              <div className="min-h-screen px-4 text-center">
                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg space-y-4">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-300 pb-2"
                    >
                      Create Collection
                    </Dialog.Title>

                    <div className="w-full space-y-2">
                      <div className="text-md text-gray-600 font-semibold">
                        Collection Image
                      </div>
                      <div className="w-full border-dashed border-2 rounded-md border-gray-300 flex items-center justify-between cursor-pointer">
                        <NFTDropzone nftType="Collection" />
                      </div>
                    </div>

                    <div className="w-full space-y-2">
                      <div className="text-md text-gray-600 font-semibold">
                        Collection Title
                      </div>
                      <input
                        type="text"
                        className="p-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light w-full"
                      />
                    </div>

                    <div className="w-full text-right">
                      <CustomButton
                        label="Create"
                        styled="solid"
                        className="w-28"
                      />
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </div>

        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5 xl:px-40 md:px-16 sm:px-20 px-2">
          {collections.map((collectionItem, collectionIndex) => (
            <div className="relative rounded-md overflow-hidden">
              <div className="grid grid-cols-2 grid-rows-2">
                {collectionItem.images.map((trendingImage, imageIndex) => (
                  <img
                    src={trendingImage}
                    className="w-full h-40"
                    key={'trending-' + imageIndex}
                  />
                ))}
              </div>
              <img
                src={collectionItem.avatarPath}
                className="w-24 h-24 rounded-full absolute border-4 border-white"
                style={{left: 'calc(50% - 3rem)', top: 'calc(50% - 3rem)'}}
              ></img>
              <div
                className="absolute bottom-0 w-full text-center font-bold text-white text-2xl py-2 bg-gradient-to-t from-black to-transparent"
                style={{top: 'calc(50% + 4rem)'}}
              >
                <div className="w-full">{collectionItem.name}</div>
                <div className="w-full text-xl">
                  {collectionItem.galleryName}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
