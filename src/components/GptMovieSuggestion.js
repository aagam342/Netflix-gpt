import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames, gptError } = useSelector(
    (store) => store.gpt
  );
  if (!movieNames) return null;
  return gptError ? (
    <div className="  text-white text-4xl py-10 mt-16  mx-20  flex flex-col items-center font-serif">
      The Movie Database (TMDB) service is currently down.
    </div>
  ) : (
    <div className="p-2 mx-2 my-6 bg-black text-white bg-opacity-70">
      {movieNames.map((movieName, index) => (
        <MovieList title={movieName} movies={movieResults[index]} key={index}/>
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
