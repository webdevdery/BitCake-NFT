import { MoonIcon } from '@heroicons/react/solid'
import React from 'react'

export default function AppearancePage() {
  return (
    <div className="w-full h-full p-10 space-y-6 max-w-3xl">
      <div className="text-4xl w-full">Appearance</div>      
      <div className="text-lg text-gray-500">Toggle between light and dark themes</div>
      <button className="p-3 border border-gray-200 rounded-md focus:outline-none hover:shadow-dark">
        <MoonIcon className="w-7 h-7 transform rotate-45 text-gray-500" />
      </button>
    </div>
  )
}
