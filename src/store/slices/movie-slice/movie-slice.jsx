import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    allPopularMovies: null,
    allNowPlayingMovies: null,
    allTopRatedMovies: null,
    allUpcomingMovies: null,
    movieDetailForTrailor: null,
    movieTrailorYoutubeKey: null,
  },
  reducers: {
    addAllPopularMovies: (state, action) => {
      state.allPopularMovies = action.payload;
    },
    addAllNowPlayingMovies: (state, action) => {
      state.allNowPlayingMovies = action.payload;
    },
    addAllTopRatedMovies: (state, action) => {
      state.allTopRatedMovies = action.payload;
    },
    addAllUpcomingMovies: (state, action) => {
      state.allUpcomingMovies = action.payload;
    },
    addMovieDetailForTrailor: (state, action) => {
      state.movieDetailForTrailor = action.payload;
    },
    addMovieTrailorYoutubeKey: (state, action) => {
      state.movieTrailorYoutubeKey = action.payload;
    },
    removeMovieDetails: (state) => {
      state.allPopularMovies = null;
      state.movieDetailForTrailor = null;
      state.movieTrailorYoutubeKey = null;
    },
  },
});

export const {
  addAllPopularMovies,
  addAllNowPlayingMovies,
  addAllTopRatedMovies,
  addAllUpcomingMovies,
  addMovieDetailForTrailor,
  addMovieTrailorYoutubeKey,
  removeMovieDetails,
} = movieSlice.actions;

export default movieSlice.reducer;
