import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSelectedMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useSelectedMovie = (movie_id) => {
  const dispatch = useDispatch();

  const getSelectedMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie_id + "?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addSelectedMovie(json));
  };

  useEffect(() => {
    getSelectedMovie();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useSelectedMovie;
