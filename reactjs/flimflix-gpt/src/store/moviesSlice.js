import { createSlice, current } from "@reduxjs/toolkit";
import { add } from "firebase/firestore/pipelines";

const movesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        currentBrowseMovieIndex: 0,
        trandingMovies: null,
        defaultMoviesList: null,
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
       trandingMovies: (state, action) => {
        state.trandingMovies = action.payload;
       },
       defaultLoadMovies: (state, action) => {
        state.defaultMoviesList = action.payload;
       },
       

    }
});


export default movesSlice.reducer;
export const{ addNowPlayingMovies, addTrailer, updateCurrentBrowseMovieIndex, trandingMovies, defaultLoadMovies } = movesSlice.actions;