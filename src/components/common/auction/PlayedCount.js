import React from 'react'
import { PlayIcon } from '@heroicons/react/solid'

export default function PlayedCount({label}) {
  return (
    <div className="flex items-center rounded-sm text-white px-1" >
      <PlayIcon className="w-5 h-5" />
      <div className="font-bold text-md">{label}</div>
    </div>
  )
}
