import {XCircleIcon} from '@heroicons/react/outline';
import React, {Fragment, useState} from 'react';
import CustomButton from '../common/Button';
import {useForm} from 'react-hook-form';
import {Dialog, Transition} from '@headlessui/react';
import {Link} from 'react-router-dom';

function HeroSection(props) {
  const [mainDialog, setMainDialog] = useState(false);
  const [existDialog, setExistDialog] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" w-full lg:pt-16 pb-20 text-center lg:text-left flex lg:flex-nowrap flex-wrap">
      <div className="px-4 lg:w-1/2 lg:mt-0 mt-10 mx-auto">
        <div className="transition-shadow ease-in-out duration-500 shadow-lg rounded-lg cursor-pointer hover:shadow-2xl w-full max-w-xl min-w-xl mx-auto">
          <div className="bg-primary-light w-full rounded-t-md relative">
            <video
              autoPlay
              controlsList="nodownload"
              className="w-full h-80 rounded-t-lg object-fill z-10"
              loop
              muted
              playsInline=""
              poster="https://lh3.googleusercontent.com/ZhVmqu6Mu2k1RrMmTIDs5qMI71zc0BVMUiUebimjcLUFqf79FAoXvZb3SYZDqGfKiFYxvV2UzT3KyGc0shWxhJjGSyi0OOWY_3Q6Og"
              // src="https://storage.opensea.io/files/b74ea6dad580ef61192b230f147709a7.mp4"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            ></video>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              className={`rounded-full w-20 h-20 absolute -bottom-10 border-4 border-white`}
              style={{left: 'calc(50% - 2.5rem)'}}
            ></img>
          </div>
          <div className="bg-white h-20 sm:h-20 rounded-b-lg p-5 flex items-center">
            <div className="w-1/3 flex flex-wrap">
              <div className="w-full text-lg text-black font-bold text-center truncate">
                Current Bid
              </div>
              <div className="w-full text-center">
                <div className="flex justify-center h-6">
                  <span className="text-base lg:text-sm xl:text-base text-primary">
                    1.87 BNB
                  </span>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <div className="mt-8">
                <div className="text-sm w-full">A-Monster Cloth</div>
                <div className="text-sm w-full text-primary">
                  @Bernatinmotion
                </div>
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-between text-center">
              <div className="w-full flex flex-wrap">
                <div className="w-full text-lg text-black font-bold truncate">
                  Ending in
                </div>
                <div className="w-full text-white text-base lg:text-sm xl:text-base text-blue-300 text-primary h-6 truncate">
                  04h 36m 45s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0 px-5">
        <div className="my-auto w-full">
          <div className="text-2xl tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl font-oktab">
            Discover digital assets minted and secured on the Binance Smart
            Chain.
            {/* <span className="block xl:inline w-full font-bold font-nasalization">Now NFTs are</span>{" "}
            <span className="block text-primary-dark text-4xl font-moon mt-3">
              for everyone
            </span> */}
          </div>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl font-oktab">
            Buy, sell, and trade digital collectibles on the sweetest NFT
            marketplace in the universe.
          </p>
          <div className="flex flex-wrap md:flex-nowrap mt-10 md:space-x-5 space-x-0 md:space-y-0 space-y-3">
            {/* <Link to="/create" className="lg:w-48 md:w-1/2 w-full"> */}
            <CustomButton
              label="Start Selling"
              styled="solid"
              className="w-full lg:w-48"
              onClick={() => {
                setMainDialog(true);
              }}
            />
            {/* </Link> */}
            <Link to="/collection" className="lg:w-48 w-1/2 w-full">
              <CustomButton
                label="Discover Collectibles"
                styled="outline"
                className="w-full"
              />
            </Link>
          </div>
        </div>
      </div>
      <Transition appear show={mainDialog} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 overflow-y-auto"
          onClose={() => {
            setMainDialog(false);
          }}
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
              <div className="inline-block w-full md:max-w-2xl px-6 pt-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <XCircleIcon
                  className="w-8 h-8 absolute right-3 top-3 cursor-pointer"
                  onClick={() => {
                    setMainDialog(false);
                  }}
                />
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-blue-800 text-center"
                >
                  DOES YOUR ITEM ALREADY EXIST?
                </Dialog.Title>
                <Dialog.Title
                  as="h3"
                  className="text-md leading-6 text-center mt-4"
                >
                  Is the item live on the blockchain or is it a new item you
                  want to make?
                </Dialog.Title>
                <div className="w-full flex mt-8 space-x-8">
                  <div className="w-1/2 rounded-md border border-gray-300">
                    <button
                      className="w-full h-full space-y-4 py-3 focus:outline-none"
                      onClick={() => {
                        setMainDialog(false);
                        setTimeout(() => {
                          setExistDialog(true);
                        }, 300);
                      }}
                    >
                      <img
                        src="/assets/icons/createModal/exciting.png"
                        className="w-16 h-16 mx-auto"
                        alt="existing"
                      />
                      <div className="w-full text-center">
                        The NFT is already in my wallet
                      </div>
                    </button>
                  </div>
                  <div className="w-1/2 rounded-md py-3 border border-gray-300 space-y-4 cursor-pointer">
                    <Link to="/create">
                      <button className="w-full h-full space-y-4 py-3 focus:outline-none">
                        <img
                          src="/assets/icons/createModal/create.png"
                          className="w-16 h-16 mx-auto"
                          alt="create"
                        />
                        <div className="w-full text-center">
                          Create a new item
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-full text-xs text-center text-gray-600 mt-5 mb-2 pl-2">
                  It's free to list your item on BitCake! There is a 2.5% admin
                  fee deducted from every successful sale.
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={existDialog} as={Fragment}>
        <Dialog
          as="div"
          initialFocus
          className="fixed inset-0 z-40 overflow-y-auto"
          onClose={() => {
            setExistDialog(false);
          }}
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
              <div className="inline-block w-full md:max-w-2xl px-6 pt-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-blue-800 text-center"
                >
                  IDENTIFY THIS ITEM ON THE BLOCKCHAIN
                </Dialog.Title>
                <Dialog.Title
                  as="h3"
                  className="text-md leading-6 text-center mt-4"
                >
                  This is for items you already own in your wallet. Start by
                  entering the Token ID and Address of the item on the
                  blockchain
                </Dialog.Title>
                <form className="w-full">
                  <div className="w-full flex flex-nowrap mt-8 space-x-8">
                    <div className="w-1/3 space-y-4">
                      <div className="w-full text-lg text-center">Token ID</div>
                      <input
                        type="text"
                        {...register('tokenID', {required: true})}
                        className="p-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light w-full"
                      />
                    </div>
                    <div className="w-2/3 space-y-4">
                      <div className="w-full text-lg text-center">
                        Token Address
                      </div>
                      <input
                        type="text"
                        {...register('tokenAddress', {required: true})}
                        className="p-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-light w-full"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-nowrap justify-end space-x-5 mt-8">
                    <CustomButton
                      label="Cancel"
                      type="dark"
                      onClick={() => {
                        setExistDialog(false);
                        setTimeout(() => {
                          setMainDialog(true);
                        }, 300);
                      }}
                    />
                    <CustomButton
                      label="Proceed"
                      styled="solid"
                      onClick={() => {
                        setExistDialog(false);
                        setTimeout(() => {
                          setMainDialog(true);
                        }, 300);
                      }}
                    />
                  </div>
                </form>

                <div className="w-full text-xs text-center text-gray-600 mt-5 mb-2 pl-2">
                  It's free to list your item on BitCake! There is a 2.5% admin
                  fee deducted from every successful sale.
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default HeroSection;
