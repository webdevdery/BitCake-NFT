import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'

export default function CustomListBox(props) {
  return (
    <Listbox value={props.value} onChange={props.onChange}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md border border-gray-400 sm:text-sm cursor-pointer focus:outline-none z-10">
          <span className="block truncate">{props.value.name}</span>
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
            {props.data.map((category, categoryId) => (
              <Listbox.Option
                key={categoryId}
                className={({ active }) =>
                  `${
                    active
                      ? "text-amber-900 bg-amber-100"
                      : "text-gray-900"
                  }
                  cursor-pointer select-none relative py-2 pl-10 pr-4`
                }
                value={category}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {category.name}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-amber-600" : "text-amber-600"
                        }
                              absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon
                          className="w-5 h-5"
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
  )
}
