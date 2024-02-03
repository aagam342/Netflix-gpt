import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
