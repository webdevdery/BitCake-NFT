import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, TrendingUpIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";

export default function PriceHistory() {
  return (
    <div className="w-full rounded-t-md overflow-hidden border border-gray-400">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full h-15 flex justify-between px-3 py-2 border-b border-gray-400 flex items-center bg-primary-dark text-white focus:outline-none">
              <div className="flex items-center space-x-2">
                <TrendingUpIcon className="w-5 h-5" />
                <div className="font-bold font-janeroeb text-2xl">
                  Price History
                </div>
              </div>
              <ChevronDownIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-4 text-sm text-gray-500">
              <div className="w-full">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-primary bg-white border-2 border-primary rounded-md focus:outline-none">
                      All Time
                      <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-primary"
                                  : "text-gray-900"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                            >
                              All Time
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="w-full flex flex-wrap justify-center space-y-2">
                <img
                  src="/assets/images/auction/trading.jpg"
                  className="w-40 rounded-md"
                />
                <div className="w-full text-center font-bold">
                  No Trading Data
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
