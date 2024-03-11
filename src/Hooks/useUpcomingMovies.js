import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = (setUpcomingMoviesError) => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      if (!data.ok) {
        throw new Error(`Failed to fetch popular movies: ${data.status}`);
      }
      const json = await data.json();

      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      setUpcomingMoviesError(error.message); // Update the error state
    }
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
