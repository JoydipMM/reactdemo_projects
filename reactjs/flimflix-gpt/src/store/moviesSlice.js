import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { API_BASE_URL, TMDB_API_OPTION } from "../utils/constants";

export const defaultMoviesFetch = createAsyncThunk('movies/defaultMoviesList', async(_, { rejectWithValue })=>{
    try {
        const response = await fetch(`${API_BASE_URL}/movie/popular?language=en-US&page=1`, TMDB_API_OPTION);
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        //console.log("createAsyncThunk defaultMoviesFetch ",data.results);
        const allPopularMovies = data.results;
        const firstFiveMovies = data.results.slice(5, 15);
        return { firstFiveMovies, allPopularMovies };
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const movesSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        currentBrowseMovieIndex: 0,
        trandingMovies: null,
        defaultMoviesList: null,
        genres: null
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
       loadGenres: (state, action) => {
        state.genres = action.payload;
       }
    },
    extraReducers:(builder)=>{
        builder.addCase(defaultMoviesFetch.pending, (state, action)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(defaultMoviesFetch.fulfilled, (state, action)=>{
            state.defaultMoviesList = action.payload;
        }),
        builder.addCase(defaultMoviesFetch.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
});


export default movesSlice.reducer;
export const{ addNowPlayingMovies, addTrailer, updateCurrentBrowseMovieIndex, trandingMovies, defaultLoadMovies, loadGenres } = movesSlice.actions;