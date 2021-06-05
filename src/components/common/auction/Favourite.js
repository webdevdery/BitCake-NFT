import React from 'react'
import { HeartIcon } from '@heroicons/react/solid'

export default function Favourite({label}) {
  return (
    <div className="flex items-center rounded-sm text-white px-1" >
      <HeartIcon className="w-5 h-5" />
      <div className="font-bold text-md">{label}</div>
    </div>
  )
}
