import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null
    },
    reducers:{
        addAuthUser:(state, action)=>{
            state.user = action.payload;
        },
        removeAuthUser:(state)=>{
            state.user = null;
        }
    }
})

export const {addAuthUser, removeAuthUser} = authSlice.actions
export default authSlice.reducer