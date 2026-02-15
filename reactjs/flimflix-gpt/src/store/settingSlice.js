import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
    name:"setting",
    initialState: {
        darkMode: true,
        language: "en",
    },
    reducers:{
        changelanguage:(state, action) => {
            state.language = action.payload;
        },
    }
});

export const { changelanguage } = settingSlice.actions;
export default settingSlice.reducer;