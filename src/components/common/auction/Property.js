import { Disclosure } from '@headlessui/react'
import React from 'react'
import { MenuAlt2Icon, ChevronDownIcon } from "@heroicons/react/outline"

export default function Property(props) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full h-15 flex justify-between px-3 py-2 border-b border-gray-400 flex items-center bg-primary-dark text-white focus:outline-none">
            <div className="flex items-center space-x-2">
              <MenuAlt2Icon className="w-5 h-5" />
              <div className="font-bold font-janeroeb text-2xl">Properties</div>
            </div>
            <ChevronDownIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-white`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div className="w-full mt-3 font-bold">Contact Address</div>
            <div className="w-full mt-2 font-base">0x8c5aCF6dBD24c66e6FD44d4A4C3d7a2D955AAad2</div>

            <div className="w-full mt-3 font-bold">Token ID</div>
            <div className="w-full mt-2 font-base" style={{ overflowWrap: "anywhere" }}>60825598814569976716608680798144304857840545208533421586394177252726608074274</div>
            
            <div className="w-full mt-3 font-bold">Token Name</div>
            <div className="w-full mt-2 font-base">Avengers</div>

            <div className="w-full mt-3 font-bold">Original Image</div>
            <div className="w-full mt-2 font-base" style={{ overflowWrap: "anywhere" }}>https://d1iczm3wxxz9zd.cloudfront.net/074a21f3-5884-4252-aa89-ffb7422b811f/000000-0000000000/60825598814569976716608680798144304857840545208533421586394177252726608074274/ITEM_PREVIEW1.gif</div>

            <div className="w-full mt-5 font-bold">Original Artist</div>
            <div className="w-full mt-2 mb-5 font-base">0x867a11a46c27f787884220e6fd29a76F8E582f73</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
