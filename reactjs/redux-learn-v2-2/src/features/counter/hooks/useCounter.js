// import useDispatch from react-redux which is used to dispatch actions and that action calls the reducer
import { useDispatch, useSelector } from 'react-redux'
// import the actions from the slice
import { decrement, increment } from '@/features/counter/store/counterSlice'; 

export const useCounter = () => {

    // we store the dispatch function in a variable
    const dispatch = useDispatch();
    // we get the counter value from the store
    const counter = useSelector(state => state.counter.counterValue);

    // store the increment functions in variables
    const handleIncrement = () => {
        dispatch(increment());
    };

    // store the decrement functions in variables
    const handleDecrement = () => {
        dispatch(decrement());
    };

    // return the counter value, increment and decrement functions
    return { 
        counter, 
        handleIncrement, 
        handleDecrement 
    };
}