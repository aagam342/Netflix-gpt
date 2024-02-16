import React from "react";
import useSelectedMovie from "../Hooks/useSelectedMovie";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addSelectedMovie, addSelectedMovieId } from "../utils/moviesSlice";
import { IMAGE_CDN_URL } from "../utils/constants";

const SelectedMovie = () => {
  const dispatch = useDispatch();
  const movie_id = useSelector((store) => store?.movies?.selectedMovieId);

  useSelectedMovie(movie_id);

  const selectedMovie = useSelector((store) => store?.movies?.selectedMovie);
  if (!selectedMovie) return;

  const closeMovieDescription = () => {
    dispatch(addSelectedMovieId(null));
    dispatch(addSelectedMovie(null));
  };
  const { title, poster_path, tagline, overview, genres } = selectedMovie;
  console.log(selectedMovie);
  return (
    <div className="fixed top-0 left-0 w-screen -my-10 md:my-0 bg-gray-950  h-full   bg-opacity-60 flex items-center justify-center  z-50">
      <div className="relative w-[90%] md:w-[45%]   md:my-16 bg-gray-900 rounded shadow-lg ">
        <img
          src={IMAGE_CDN_URL + poster_path}
          alt="Movie Poster"
          className=" object-fill w-full h-72 md:h-80 bg-gradient-to-b from-black"
        />

        <button
          className="absolute top-3 right-3 px-4 py-2 hover:bg-opacity-80 hover:scale-110 "
          onClick={() => closeMovieDescription()}
        >
          <img
            className="w-8 bg-white rounded-full"
            src="https://static-00.iconduck.com/assets.00/x-circle-icon-2048x2048-ye5jve3k.png"
            alt=""
          />
        </button>

        <div className="-mt-20 pl-4 md:pl-10 bg-gradient-to-b from-black">
          <Link to={"/movie/" + movie_id}>
            <button className=" bg-white text-black mr-2 py-1 md:py-3 px-3 md:px-8 text-xl  rounded-lg hover:bg-opacity-80 hover:scale-110 font-semibold border-2 border-black">
              ▶ Play
            </button>
          </Link>
        </div>
        <div className="px-4 py-10 md:p-10 text-white">
          <h1 className=" text-xl md:text-3xl font-bold  uppercase  text-white ">
            {title}
          </h1>
          <h2 className="text-gray-500 md:text-xl font-semibold md:mb-4 ">
            {tagline}
          </h2>
          <h2 className="mb-2">
            Genres :{" "}
            {genres.map((genre, index) => (
              <span>
                {index > 0 ? ", " : " "}
                {genre.name}
              </span>
            ))}
          </h2>
          <h3 className="text-white">
            {overview.split(" ").splice(0, 30).join(" ")}.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SelectedMovie;
