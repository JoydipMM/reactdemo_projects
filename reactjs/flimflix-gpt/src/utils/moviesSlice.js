import { createSlice, current } from "@reduxjs/toolkit";
import { add } from "firebase/firestore/pipelines";

const movesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        currentBrowseMovieIndex: 0,
    },
    reducers:{
       addNowPlayingMovies : (state, action) => {
        state.nowPlayingMovies = action.payload;
       },
       addTrailer: (state, action) => {
        state.trailer = action.payload;
       },
       updateCurrentBrowseMovieIndex: (state, action) => {
        state.currentBrowseMovieIndex = action.payload;
       },
       

    }
});


export default movesSlice.reducer;
export const{ addNowPlayingMovies, addTrailer, updateCurrentBrowseMovieIndex } = movesSlice.actions;