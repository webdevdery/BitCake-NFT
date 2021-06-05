import React from 'react'
import FeaturedArtist from '../components/common/home/artist'
import { artistsData } from '../constants/artists'

export default function ArtistsPage() {
  return (
    <div className=" w-full pt-20 pb-20 text-center lg:text-left flex flex-wrap">
      <div className="w-full grid grid-cols-4 gap-5 mt-4">
        {
          artistsData.map((item, index) => (
            <FeaturedArtist key={'artist-' + index} artistData={item} />
          ))
        }
      </div>
    </div>
  )
}
