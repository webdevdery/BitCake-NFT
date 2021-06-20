import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react';
import {ChevronDownIcon, MenuAlt1Icon} from '@heroicons/react/outline';
import React, {Fragment, useState} from 'react';
import CustomButton from '../Button';

export default function Offer() {
  const [dialogOpen, setdialogOpen] = useState(false);
  function closeModal() {
    setdialogOpen(false);
  }

  function openModal() {
    console.log('open');
    setdialogOpen(true);
  }

  return (
    <div className="w-full rounded-t-md overflow-hidden border border-gray-400">
      <Disclosure defaultOpen>
        {({open}) => (
          <>
            <Disclosure.Button className="w-full h-15 flex justify-between px-3 py-2 border-b border-gray-400 flex items-center bg-primary-dark text-white focus:outline-none">
              <div className="flex items-center space-x-2">
                <MenuAlt1Icon className="w-5 h-5" />
                <div className="font-bold font-janeroeb text-2xl">Offers</div>
              </div>
              <ChevronDownIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-sm text-gray-500">
              <div className="w-full flex flex-wrap justify-center space-y-2 pb-2">
                <img
                  src="/assets/images/auction/empty-bids.svg"
                  className="w-40 rounded-md"
                  alt="empty"
                />
                <div className="w-full text-center font-bold">
                  No offers yet
                </div>
              </div>
              <div className="w-full border-t border-gray-400 pt-4">
                <CustomButton
                  styled="solid"
                  label="Make Offer"
                  onClick={() => {
                    setdialogOpen(true);
                  }}
                />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Transition appear show={dialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent
                    your an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
