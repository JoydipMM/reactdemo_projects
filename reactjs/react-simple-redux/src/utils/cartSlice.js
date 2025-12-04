import { createSlice } from "@reduxjs/toolkit";

/*
createSlice is a function which needs some configuration object to create a slice of the global state.
1. the first step is to provide a name to the slice, which will be used as a prefix for generated action types.
2. the second step is to provide an initial state for the slice.
3. the third step is to provide reducer functions to handle actions and update the state.
*/

/* 
createSlice() is returning an object which contains two important properties:
1. actions: an object containing action creators for each reducer function defined in the slice.
2. reducer: a reducer function which will be used to configure the store.
*/
const cartSlice = createSlice({
    name: 'cart',           // first step: naming the slice 'cart'
    initialState: {         // second step: defining the initial state
        items: [],
        // this is the initial state of the cart slice, where we can define default values for the state properties. Here we have defined an empty array for items property.
    },
    reducers: {             // third step: defining reducer functions
        // we write reducer functions to corespond to actions and update the state accordingly.
        // addUtem is action and the function defined here is the reducer function which will be called when this action is dispatched.
        addItem: (state, action) => {
        /*
        (state, ...) state is the current state of the slice
        (..., action) it also get action as a parameter which contains the type and payload of the action dispatched.
        This reducer function modify the state based on the action dispatched.
        we are mutating the state directly. Redux Toolkit uses Immer library internally which allows us to write "mutating" logic in reducers. This is a impure function. Means we are changing the state directly here.
        */
            state.items.push(action.payload);
            // here we define a reducer function called addItem which takes the current state and an action as parameters.
            // this function adds a new item to the items array in the state using the push method.
            // action.payload contains the data that is dispatched with the action.
        },
        removeItem: (state) => {
            // here we don't need action parameter because we are not using any payload to remove item. we are just removing the last item from the array.
            state.items.pop();
        },
        clearCart: (state) => {
            // here we don't need action parameter because we are not using any payload to clear the cart. we are just clearing the items array.
            state.items = [];
        }
    }
});

/*
Now, we will export two things from this cartSlice file:
1. we will export our actions which will be used to dispatch actions to the store.
2. we will export the reducer function which will be used to configure the store.
*/
export default cartSlice.reducer; // exporting the reducer function
export const { addItem, removeItem, clearCart } = cartSlice.actions; // exporting the actions