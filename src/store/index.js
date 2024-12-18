import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./slice/watchListSlice";


export const store = configureStore({
  reducer: {
    watchList: watchListSlice,
  },
});
