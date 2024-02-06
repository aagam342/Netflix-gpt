import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

import useGptSearchBar from "../Hooks/useGptSearchBar";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const { handleGptSearchClick } = useGptSearchBar(searchText);

  return (
    <div className="p-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-md opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-9 m-4 p-2 "
        />
        <button
          className="col-span-3 m-4 px-4 py-2 rounded-md text-white bg-red-700"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;