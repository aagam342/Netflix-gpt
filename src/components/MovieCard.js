import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-28 hover:scale-110 hover:p-0 md:w-44 py-3 ">
      <img src={IMAGE_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
