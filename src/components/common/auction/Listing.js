import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { TagIcon } from "@heroicons/react/solid";
import React, { Fragment } from "react";
import ListingTable from "./ListingTable";

export default function Listing() {
  return (
    <div className="w-full rounded-t-md overflow-hidden border border-gray-400">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full h-15 flex justify-between px-3 py-2 border-b border-gray-400 flex items-center bg-primary-dark text-white focus:outline-none">
              <div className="flex items-center space-x-2">
                <TagIcon className="w-5 h-5" />
                <div className="font-bold font-janeroeb text-2xl">
                  Listing
                </div>
              </div>
              <ChevronDownIcon
                className={`${
                  open ? "transform rotate-180" : ""
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="text-sm text-gray-500">
              <ListingTable />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
