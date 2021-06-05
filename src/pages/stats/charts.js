import React, { Fragment, useState } from "react";
import RankingTable from "../../components/stats/rankingTable";
import classNames from "classnames";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";

const tabMenus = [
  { name: "All" },
  { name: "Music" },
  { name: "Podcast" },
  { name: "Radio" },
  { name: "Sports" },
  { name: "Gaming" },
  { name: "Politics" },
  { name: "Education" },
  { name: "Film" },
  { name: "Technology" },
  { name: "Entertainment" },
  { name: "Other" },
];

export default function ChartsPage() {
  const [currentTab, setcurrentTab] = useState(tabMenus[0]);
  return (
    <div className="w-full pt-20 pb-20 text-center lg:text-left flex flex-wrap">
      <div className="text-4xl w-full text-center">BitCake Charts</div>
      <div className="text-xl w-full text-center text-gray-600 mt-4">
        Hourly updates on trending statistics for top NFTs throughout the
        Bitcake network.
      </div>

      <div className="w-full flex justify-between pb-2 border-b border-gray-700 text-xl mt-10">
        <div className="space-x-2 md:flex hidden">
          {tabMenus.map((tabMenu, index) => (
            <div
              key={`tabMenu-${index}`}
              className={classNames(
                "rounded-lg cursor-pointer px-3 py-1 font-janeroeb flex items-center",
                currentTab === tabMenu && "bg-primary-dark text-white"
              )}
              onClick={() => {
                setcurrentTab(tabMenu);
              }}
            >
              {tabMenu.name}
            </div>
          ))}
        </div>
        <div className="w-full md:hidden flex">
          <Listbox value={currentTab} onChange={setcurrentTab}>
            <div className="relative mt-1 w-full">
              <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md border border-gray-400 sm:text-sm cursor-pointer focus:outline-none z-10">
                <span className="block truncate">{currentTab.name}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 focus:outline-none sm:text-sm cursor-pointer hover:text-primary z-20">
                  {tabMenus.map((tabMenu, menuId) => (
                    <Listbox.Option
                      key={menuId}
                      className={({ active }) =>
                        `${
                          active
                            ? "text-amber-900 bg-amber-100"
                            : "text-gray-900"
                        }
                        cursor-pointer select-none relative py-2 pl-10 pr-4`
                      }
                      value={tabMenu}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected
                                ? "font-medium text-primary-dark"
                                : "font-normal"
                            } block truncate text-left`}
                          >
                            {tabMenu.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-amber-600" : "text-amber-600"
                              }
                                    absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon
                                className="w-5 h-5 text-primary-dark"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="w-full mt-5">
        <RankingTable currentTab={currentTab.name} />
      </div>
    </div>
  );
}
