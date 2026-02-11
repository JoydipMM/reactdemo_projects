import { createSlice } from "@reduxjs/toolkit";

const movesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null
    },
    reducers:{
       addNowPlayingMovies : (state, action) => {
        state.nowPlayingMovies = action.payload;
       }, 
    }
});


export default movesSlice.reducer;
export const{ addNowPlayingMovies } = movesSlice.actions;