import { configureStore } from "@reduxjs/toolkit";
//import todoReducer from "./todoSlice";
import { todoSlice } from "./todoSlice";
import { counterSlice } from "./counterSlice";

export const store = configureStore({
   //reducer: todoReducer
   reducer: todoSlice.reducer,
   //reducer: { todos: todoSlice.reducer, counter: counterSlice.reducer }
})