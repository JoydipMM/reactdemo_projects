import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/features/counter/store/counterSlice";
import usersReducer from "@/features/user/store/userSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
});

export default store;