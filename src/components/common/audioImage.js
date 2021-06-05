import React from 'react'
import Waveform from './Waveform'

export default function AudioImage(props) {
  return (
    <div className="w-full bg-primary-light rounded-t-lg overflow-hidden relative">
      <img alt="" src={props.src} className="w-full h-80" />

      <div className="w-full absolute bottom-8 left-0">
        <Waveform audioURL={props.audioPath} onClick={props.onClick} />
      </div>
    </div>
  )
}
