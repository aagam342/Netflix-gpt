import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

import VideoBackground from "./VideoBackground";

const MovieDescriptionPage = () => {
  const { movieId } = useParams();

  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className=" pt-52 md:pt-0 -z-10">
        <VideoBackground movie_id={movieId} />
      </div>
    </div>
  );
};

export default MovieDescriptionPage;
