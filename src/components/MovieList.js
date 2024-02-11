import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="p-2 ">
      <h1 className="text-xl md:text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex gap-4 ">
          {movies?.map((movie) => (
            <Link to={"/movie/" + movie.id} key={movie.id}>
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
