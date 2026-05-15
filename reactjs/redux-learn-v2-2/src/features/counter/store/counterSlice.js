import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        counterValue:0,
    },
    reducers:{
        increment:(state, action)=>{
            state.counterValue += 1 // for now we are incrementing the value by 1 statically but action.payload will be dynamic
        },
        decrement:(state, action) => {
            if(state.counterValue === 0) return // if the value is 0, we don't want to decrement it
            state.counterValue -= 1 // for now we are decrementing the value by 1 statically but action.payload will be dynamic
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;