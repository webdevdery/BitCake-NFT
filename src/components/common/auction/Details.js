import React from 'react'
import { MenuAlt2Icon } from "@heroicons/react/outline"
import { Link } from 'react-router-dom'

export default function Details({artistName, data}) {
  return (
    <div>
      <div className="w-full h-15 flex px-3 py-2 rounded-t-md border-b border-gray-400 flex items-center space-x-2 bg-primary-dark text-white">
        <MenuAlt2Icon className="w-5 h-5" />
        <div className="font-bold font-janeroeb text-2xl">Details</div>
      </div>
      <div className="w-full p-4 bg-white rounded-b-md space-y-4">
        <div>
          Created by <Link to="/artists/1" className="text-blue-400" >{artistName}</Link>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </div>
    </div>
  )
}
