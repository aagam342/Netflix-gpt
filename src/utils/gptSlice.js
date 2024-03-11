import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    gptError: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = action.payload;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    addGptError: (state, action) => {
      state.gptError = action.payload;
    },
  },
});

export const { addGptMovieResult, toggleGptSearch, addGptError } = gptSlice.actions;
export default gptSlice.reducer;
