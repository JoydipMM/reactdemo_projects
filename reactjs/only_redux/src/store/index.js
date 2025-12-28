import { createStore } from "redux";
import movieListReducer from "./reducers/movielist";

export const store = createStore(movieListReducer);
// to create store we need to pass reducer