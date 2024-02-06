import React from "react";
import { LOGIN_PAGE_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 bg-gradient-to-b from-black  ">
        <img
          className="h-screen md:h-auto object-cover md: "
          src={LOGIN_PAGE_URL}
          alt="bg"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
