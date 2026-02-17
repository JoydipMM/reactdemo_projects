import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
    name:"setting",
    initialState: {
        darkMode: true,
        language: "en",
        gotologin: false,
    },
    reducers:{
        changelanguage:(state, action) => {
            state.language = action.payload;
        },
        toggleLogin: (state, action) => {
            state.gotologin = action.payload;
        },
    }
});

export const { changelanguage, toggleLogin } = settingSlice.actions;
export default settingSlice.reducer;