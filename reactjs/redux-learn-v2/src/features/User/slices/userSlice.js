import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const userSlice = createSlice({
    name:"users",
    initialState:{
        users:[],
        loading:false,
        error:false
    },
    reducers:{},
    // extraReducers helps to handle actions of createAsyncThunk like pending, fulfilled, rejected
    extraReducers:(builder)=>{
        builder
        // pending action of fetchUsers
        .addCase(fetchUsers.pending, (state) =>{
            state.loading = true;
        })
        // fulfilled action of fetchUsers
        .addCase(fetchUsers.fulfilled, (state, action)=>{
            state.loading = false;
            state.users = action.payload;
        })
        // rejected action of fetchUsers
        .addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false;
        })
    }
});


export default userSlice.reducer