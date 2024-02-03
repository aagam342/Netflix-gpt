import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p className="w-1/3 py-6 ">{overview}</p>
      <div className="flex">
        <button className=" flex px-4 p-1 bg-white text-black  rounded-sm font-semibold hover:bg-opacity-80">
          <img
            className="w-7 p-1"
            src="https://img.icons8.com/ios-glyphs/30/play--v1.png"
            alt="play--v1"
          />
          Play
        </button>
        <button className="flex px-4 p-1 bg-gray-700 text-white  rounded-sm mx-2 font-semibold hover: bg-opacity-80">
          <img
            className="w-7 p-1"
            src="https://img.icons8.com/ios/50/info--v1.png"
            alt="info--v1"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
