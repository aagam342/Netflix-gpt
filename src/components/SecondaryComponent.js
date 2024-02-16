import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import SelectedMovie from "./SelectedMovie";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);
  const selectedMovieId = useSelector((store) => store.movies?.selectedMovieId);


  if (!movies) return;
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen">
        <div className="relative z-40 pl-4  md:pl-12 mt-0 md:-mt-52">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
        </div>
        {selectedMovieId && <SelectedMovie />}
      </div>
    )
  );
};

export default SecondaryComponent;
