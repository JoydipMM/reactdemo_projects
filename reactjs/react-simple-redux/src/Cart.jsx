import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice"; // import the clearCart action from cartSlice.js file
export default function Cart() {
    const dispatch = useDispatch(); // assign useDispatch to a variable called "dispatch" which will be used to dispatch actions to the store.
    const cartItems = useSelector((store) => store.cart.items);
    // useSelector is a hook provided by react-redux to access the redux store's state in a react component.
    // useSelector takes a callback function as an argument which receives the entire state of the redux store.
    // here store is the entire redux store state.
    // here store.cart refers the name of the portion of the state which is the cart slice (from appStore.js). Because we already provided the store access to the whole app using Provider in App.jsx file.
    // state.cart.items refers to the items array in the cart slice's state.
    console.log("Cart items:", cartItems); // just to verify we are getting the correct items from the store. It should log: Cart items: []
    /* If we add some items name inside the initialState in cartSlice.js like:
    initialState: {
        items: ["Momo", "Pizza"],
    },
    then it should log: Cart items: ["Momo", "Pizza"] in console.
    */
    return (
        <div>
            Cart ({cartItems.length} items) {/* Displaying the number of items in the cart */}
            <button onClick={()=> 
                dispatch(clearCart()) // when the button is clicked, this function will be called to dispatch an action to clear the cart.
            }>Clear Cart</button>
        </div>
    )
}