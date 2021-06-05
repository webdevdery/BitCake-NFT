import { CloudUploadIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  height: 100,
  width: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
  width: "100%",
};

const img = {
  display: "block",
  width: "100%",
  height: "100%",
};

const acceptedList = {
  Audio: "audio/*",
  All: "image/*, video/*",
};

export default function NFTDropzone(props) {
  const [previewFile, setpreviewFile] = useState();
  const { getRootProps, getInputProps } = useDropzone({
    accept:
      props.nftType.name === "Audio"
        ? acceptedList["Audio"]
        : props.nftType === "all"
        ? ""
        : acceptedList["All"],
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      props.onChange(file);
      if (file.type.startsWith("audio")) {
        file.preview = "/assets/icons/nav/audio.png";
        setpreviewFile(file);
      } else if (file.type.startsWith("video")) {
        file.preview = "/assets/icons/nav/video.png";
        setpreviewFile(file);
      } else {
        file.preview = URL.createObjectURL(file);
        setpreviewFile(file);
      }
    },
  });

  return (
    <>
      <section className="container flex p-4">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="flex flex-wrap items-center justify-center focus:outline-none"
        >
          <input {...getInputProps()} />
          <CloudUploadIcon className="w-12 h-12 text-gray-500" />
          <div className="w-full text-center font-bold text-primary-dark">
            Add Files
          </div>
          <div>
            {props.nftType.name === "Audio"
              ? "(audio)"
              : props.nftType === "Collection"
              ? "( collection image )"
              : props.nftType === "all"
              ? "( all files )"
              : "( image, video, gif )"}
          </div>
        </div>
        <aside style={thumbsContainer} className="space-x-5">
          {previewFile && (
            <div style={thumb}>
              <div style={thumbInner}>
                <img src={previewFile.preview} style={img} />
              </div>
            </div>
          )}
        </aside>
      </section>
    </>
  );
}
