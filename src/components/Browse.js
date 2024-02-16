import React from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import { useDispatch } from "react-redux";
import { addSelectedMovieId } from "../utils/moviesSlice";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const dispatch = useDispatch();
  dispatch(addSelectedMovieId(null));
  return (
    <div>
      <MainComponent />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
