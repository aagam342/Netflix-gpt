import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = (setTopRatedMoviesError) => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      if (!data.ok) {
        throw new Error(`Failed to fetch popular movies: ${data.status}`);
      }
      const json = await data.json();

      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      setTopRatedMoviesError(error.message); // Update the error state
    }
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
