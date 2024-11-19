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
  // eslint-disable-next-line no-unused-vars
  const [upcomingMoviesError, setUpcomingMoviesError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [topRatedMoviesError, setTopRatedMoviesError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [popularMoviesError, setPopularMoviesError] = useState(null);

  useNowPlayingMovies(setNowPlayingError);
  usePopularMovies(setPopularMoviesError);
  useUpcomingMovies(setUpcomingMoviesError);
  useTopRatedMovies(setTopRatedMoviesError);

  const dispatch = useDispatch();
  dispatch(addSelectedMovieId(null));
  return (
    <div>
      {nowPlayingError ? (
        <div className="  text-black text-xl p-56  mx-20  flex flex-col items-center font-serif">
          {
            <div className="error-message shadow-orange-300 shadow-lg bg-red-500 text-white p-10  rounded-lg  flex flex-col items-center font-serif">
              <p className="mb-2 text-2xl ">
                Please make sure you have the VPN enabled while using this app,
                as it utilizes TMDB API which is currently banned , its for
                development purposes only. Refresh after enabling the VPN.
              </p>

              <button
                className="bg-white hover:scale-105 text-red-500 px-4 py-2 rounded-md hover:bg-red-100"
                onClick={() =>
                  window.open(
                    "https://chromewebstore.google.com/detail/fdcgdnkidjaadafnichfpabhfomcebme",
                    "_blank"
                  )
                }
              >
                Enable VPN ZenMate
              </button>
            </div>
          }
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
