import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    watchList:[],
}

const watchListSlice = createSlice({
    name: "watchList",
    initialState: {
      data: [],
    },
    reducers: {
      addWatchList: (state, action) => {
        state.data.push(action.payload);
      },
      removeWatchList: (state, action) => {
        state.data = state.data.filter((item) => item.id!==action.payload);
      },
    },
  
});

export default watchListSlice.reducer