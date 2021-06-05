import React from 'react'
import { MenuIcon } from '@heroicons/react/solid'

export default function AddQueue() {
  return (
    <div className="flex items-center border border-gray-300 rounded-sm text-primary-dark px-1" >
      <MenuIcon className="w-5 h-5" />
      <div className="font-bold text-md">Add to queue</div>
    </div>
  )
}
