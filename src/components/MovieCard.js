import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-44 pr-2">
      <img src={IMAGE_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
