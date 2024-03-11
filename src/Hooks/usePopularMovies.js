import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = (setPopularMoviesError) => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      if (!data.ok) {
        throw new Error(`Failed to fetch popular movies: ${data.status}`);
      }
      const json = await data.json();
      const popularMovies = json.results;
      dispatch(addPopularMovies(popularMovies));
    } catch (error) {
      setPopularMoviesError(error.message); // Update the error state
    }
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
export default usePopularMovies;
