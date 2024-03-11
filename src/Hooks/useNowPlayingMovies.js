import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = (setNowPlayingError) => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
       if (!data.ok) {
         throw new Error(`Failed to fetch popular movies: ${data.status}`);
       }
      const json = await data.json();
      // console.log(json.results);

      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      setNowPlayingError(error.message); // Update the error state
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
