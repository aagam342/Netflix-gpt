import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import {  useSelector } from "react-redux";
import SelectedMovie from "./SelectedMovie";
import LOGIN_PAGE_BG from "../images/LOGIN_PAGE_BACKGROUND.jpg";

const GptSearch = () => {
  const selectedMovieId = useSelector((store) => store.movies?.selectedMovieId);
  return (
    <>
      <div className="fixed -z-10 bg-gradient-to-b from-black  ">
        <img
          className="h-screen md:h-auto object-cover md: "
          src={LOGIN_PAGE_BG}
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
