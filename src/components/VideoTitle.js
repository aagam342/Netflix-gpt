import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, movie_id }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-5xl font-bold ">{title}</h1>
      <p className="hidden md:inline-block w-1/3 py-6 ">{overview}</p>
      <div className="my-4 md:m-0">
        <Link to={"/movie/" + movie_id}>
          <button className=" bg-white text-black mr-2 py-1 md:py-3 px-3 md:px-8 text-xl  rounded-lg hover:bg-opacity-80 hover:scale-110">
            ▶️ Play
          </button>
        </Link>
        <button className="hidden md:inline-block ml-2  bg-gray-500 text-white py-1 md:py-3 px-3 md:px-8 text-xl bg-opacity-50 rounded-lg hover:scale-110">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
