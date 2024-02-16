import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/openAi";
import { addGptMovieResult } from "../utils/gptSlice";

const useGptSearchBar = (searchText) => {
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and some movies for  the query : " +
      searchText.current.value +
      ".only give me names of five movies ,comma separated like the example given ahead. Example result : Gadar, Sholay, Don , Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults.choices?.[0]?.message.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
    return { handleGptSearchClick };
};

export default useGptSearchBar;
