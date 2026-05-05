import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";
import moviesReducer from "../features/movies/moviesSlice";
import gptReducer from "../features/gpt/gptSlice";
import settingReducer from "./settingSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        setting: settingReducer,
    }
});


export default appStore;
