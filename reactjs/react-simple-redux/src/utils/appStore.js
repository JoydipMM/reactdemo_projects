import { configureStore } from "@reduxjs/toolkit";

/*
Can not import like this: import cartSlice.reducer from "./cartSlice";
That syntax simply doesn’t exist in JavaScript.
JavaScript import statements must reference exported identifiers, not object properties.
You can only import what the file explicitly exports.

if we import like above line it will give error: 
'import ... =' can only be used in TypeScript files.
So, correct way is to first import the default export and then use it. like below:
*/

import cartReducer from "./cartSlice";
/*
cartReducer =>  In cartSlice.js, you exported the reducer like this: export default cartSlice.reducer; Since you exported it as the default export, when you import it in another file you can name it anything: import cartReducer from "./cartSlice";  Here we are naming it cartReducer for clarity.
*/

/*
We have successfully created a slice of the global state using createSlice from Redux Toolkit. Now we will add this slice to our store in the appStore.js file.
if we modify the big store it also has a reducer and this reducer combines all the reducers from different slices.
*/
const appStore = configureStore({
    // this reducer:{} is responsible to modify the appStore. It is an object which combines all the reducers from different slices.
    // So first we need to import the reducer from cartSlice.js file.
    reducer: {
        cart: cartReducer
        // here cart is the name of the slice and cartReducer is the reducer function imported from cartSlice.js file.
    }
});

export default appStore;