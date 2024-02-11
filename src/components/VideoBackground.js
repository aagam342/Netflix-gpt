import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movie_id);

  return (
    <div className="w-screen pt-10 md:pt-0">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&vq=hd1080&rel=0&showinfo=0&playlist=" +
          trailer?.key +
          "&autoplay=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
