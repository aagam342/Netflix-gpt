import React, { useState } from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import { useDispatch } from "react-redux";
import { addSelectedMovieId } from "../utils/moviesSlice";

const Browse = () => {
  const [nowPlayingError, setNowPlayingError] = useState(null);
  const [upcomingMoviesError, setUpcomingMoviesError] = useState(null);
  const [topRatedMoviesError, setTopRatedMoviesError] = useState(null);
  const [popularMoviesError, setPopularMoviesError] = useState(null);

  useNowPlayingMovies(setNowPlayingError);
  usePopularMovies(setPopularMoviesError);
  useUpcomingMovies(setUpcomingMoviesError);
  useTopRatedMovies(setTopRatedMoviesError);

  const dispatch = useDispatch();
  dispatch(addSelectedMovieId(null));
  return (
    <div>
      {nowPlayingError ||
      upcomingMoviesError ||
      topRatedMoviesError ||
      popularMoviesError ? (
        <div className="  text-black text-xl p-56  mx-20  flex flex-col items-center font-serif">
          {(nowPlayingError ||
            upcomingMoviesError ||
            topRatedMoviesError ||
            popularMoviesError) && (
            <div>The Movie Database (TMDB) service is currently down.</div>
          )}
        </div>
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
