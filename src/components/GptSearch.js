import React from "react";
import { LOGIN_PAGE_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import {  useSelector } from "react-redux";
import SelectedMovie from "./SelectedMovie";

const GptSearch = () => {
  const selectedMovieId = useSelector((store) => store.movies?.selectedMovieId);
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
        {selectedMovieId && <SelectedMovie />}
      </div>
    </>
  );
};

export default GptSearch;
