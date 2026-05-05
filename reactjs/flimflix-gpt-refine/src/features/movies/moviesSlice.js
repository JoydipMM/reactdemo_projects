import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        currentBrowseMovieIndex: 0,
    },
    reducers: {
       updateCurrentBrowseMovieIndex: (state, action) => {
        state.currentBrowseMovieIndex = action.payload;
       },
    }
});

export default moviesSlice.reducer;
export const { updateCurrentBrowseMovieIndex } = moviesSlice.actions;
