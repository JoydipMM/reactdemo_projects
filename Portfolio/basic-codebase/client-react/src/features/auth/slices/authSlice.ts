import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        authUser: {},
    },
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.authUser = action.payload;
        },
        logout: (state) => {
            state.status = 'not-authenticated';
            state.authUser = {};
        }
    }
})


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;