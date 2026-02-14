import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        searchContent: null,
        movieNames: null,
        searchResult: null
    },
    reducers:{
        lastGptSearch:(state, action) => {
            const { searchContent, movieNames, searchResult } = action.payload;
            state.searchResult = searchResult;
            state.searchContent = searchContent;
            state.movieNames = movieNames;
        },
    }
});

export default gptSlice.reducer;
export const { lastGptSearch } = gptSlice.actions;