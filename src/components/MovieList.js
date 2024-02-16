import React from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import {  addSelectedMovieId } from "../utils/moviesSlice";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  const dispatch = useDispatch();
  const handleMovieId = (movie_id) => {
    dispatch(addSelectedMovieId(movie_id));
  };

  return (
    <div className="p-2 ">
      <h1 className="text-xl md:text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex gap-4 ">
          {movies?.map((movie) => (
            <div onClick={() => handleMovieId(movie.id)} key={movie.id}>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
