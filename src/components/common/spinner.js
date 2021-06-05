import React from 'react'
import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Spinner(props) {
  return (
    <LoadingOverlay
      active={true}
      spinner={<ScaleLoader color={"#FF0000"} height={50} width={6} />}
      text=''
      className="w-screen h-screen bg-black opacity-80"
    >
    </LoadingOverlay>
  )
}
