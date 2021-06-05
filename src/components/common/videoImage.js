import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoImage(props) {
  return (
    <div className="w-full h-80 bg-black rounded-t-lg overflow-hidden">
      <ReactPlayer url={props.src} controls={true} width={"100%"} height={"17rem"} />
    </div>
  )
}
