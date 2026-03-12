import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { API_BASE_URL, TMDB_API_OPTION } from "../utils/constants";

export const genresFetch = createAsyncThunk('movies/genres', async (_,{ rejectWithValue })=>{
    try {
        const response = await fetch(`${API_BASE_URL}/genre/movie/list?language=en`, TMDB_API_OPTION );
        const data = await response.json();
        return data.genres;
      } catch (error) {
        console.log("Genre API Error:", error);
      }
});

export const trandingMoviesFetch = createAsyncThunk('movies/trandingMovies', async(_, { rejectWithValue }) => {
    try{
        const response = await fetch(`${API_BASE_URL}/trending/movie/day?language=en-US&page=1`, TMDB_API_OPTION);
        if (!response.ok) throw new Error("Failed to trading movies");
        const data = await response.json();
        //console.log("trading thunk: ")
        //console.log(data.results)
        return data.results;
    } catch(error){
        return rejectWithValue(error.message);
    }
})

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
        }),
        builder.addCase(defaultMoviesFetch.fulfilled, (state, action)=>{
            state.defaultMoviesList = action.payload;
        }),
        builder.addCase(defaultMoviesFetch.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }),

        // Tranding Movies
        builder.addCase(trandingMoviesFetch.pending, (state,action)=>{
            state.loading = true;
            state.error = null; 
        }),
        builder.addCase(trandingMoviesFetch.fulfilled, (state, action)=>{
            state.loading = false;
            state.trandingMovies = action.payload;
        }),
        builder.addCase(trandingMoviesFetch.rejected, (state, action)=>{
            state.loading = true;
            state.error = action.payload;
        }),

        // Genres
        builder.addCase(genresFetch.pending, (state, action)=>{
            state.loading = true;
            state.error = null;
        }),
        builder.addCase(genresFetch.fulfilled, (state, action)=>{
            state.genres = action.payload;
            state.loading = false;
        }),
        builder.addCase(genresFetch.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
});


export default movesSlice.reducer;
export const{ addNowPlayingMovies, addTrailer, updateCurrentBrowseMovieIndex, trandingMovies, defaultLoadMovies, loadGenres } = movesSlice.actions;