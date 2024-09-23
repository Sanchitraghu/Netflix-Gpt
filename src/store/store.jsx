import { configureStore } from "@reduxjs/toolkit";
import { userReducer, movieReducer } from "./slices";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default store;
