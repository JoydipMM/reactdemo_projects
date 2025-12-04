import { useDispatch } from "react-redux" // import useDispatch hook from react-redux to dispatch actions to the redux store
import { addItem } from "./utils/cartSlice" // import the addItem action creator from cartSlice.js file

export default function CartItem({ item }) {
    const dispatch = useDispatch(); // we assign useDispatch to a variable called "dispatch" which will be used to dispatch actions to the store.

    const addCartItemHandler = () => {
    // when the button is clicked, this function will be called to dispatch an action to add the item to the cart.
    dispatch(addItem(item));
    // here we are dispatching the addItem action to the store with the item as payload. Means addItem(item) => this item inside the parentheses is the payload.
    // this will trigger the addItem reducer function defined in cartSlice.js file to update the state.
    }
    return (
        <div className="cart-item">
            {item} <button onClick={() => addCartItemHandler(item)}>Add</button>
        </div>
    )
}