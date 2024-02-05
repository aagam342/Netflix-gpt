import React from "react";
import { LOGIN_PAGE_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 bg-gradient-to-b from-black">
        <img src={LOGIN_PAGE_URL} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
