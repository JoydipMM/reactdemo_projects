import { configureStore } from "@reduxjs/toolkit";
//import todoReducer from "./todoSlice";
import { todoSlice } from "./todoSlice";

export const store = configureStore({
   // reducer: todoReducer
   reducer: todoSlice.reducer
})