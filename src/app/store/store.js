import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./services/moviesSlice";


const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // console.log(getDefaultMiddleware().concat(moviesApi.middleware)),
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
