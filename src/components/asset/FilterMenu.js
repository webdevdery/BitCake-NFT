import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function FilterMenu(props) {
  const [currentLabel, setcurrentLabel] = useState("On Auction");
  return (
    <div className="text-right md:hidden block">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full md:px-4 px-2 md:py-2 py-1 text-sm font-medium text-primary bg-white border-2 border-primary rounded-md focus:outline-none">
            {currentLabel}
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
          <Menu.Items className="absolute left-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-primary" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                    onClick={() => {setcurrentLabel("On Auction"); props.onChange("Auction");}}
                  >
                    Live auction
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-primary" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                    onClick={() => {setcurrentLabel("Reserve not met"); props.onChange("Reserve");}}
                  >
                    Reserve not met
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-primary" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm focus:outline-none`}
                    onClick={() => {setcurrentLabel("Sold"); props.onChange("Sold");}}
                  >
                    Sold
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
