import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userdData: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        
    }
});


export default authSlice.reducer;
