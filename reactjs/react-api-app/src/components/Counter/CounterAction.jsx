import React, { useState } from "react";
import useCounterStore from '../../store/useCounterStore';

const CounterAction = () => {

    /*
    const [count, setCount] = useState(0);

    const handleInputChange = (e) => {
        const value = Number(e.target.value); // convert string → number
        if (!isNaN(value)) setCount(value);
    };
    const countIncrease = () => {
        setCount((prev) =>  prev + 1);
    }
    const countDecrease = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0)); 
    }*/

    const { count, increment, decrement, setCount } = useCounterStore();

    const handleInputChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value) && value >= 0) {
        setCount(value); // ✅ updates Zustand store
        }
    };
    

    return(
        <>

        <h3 className="text-2xl font-bold text-cyan-900">Counter Action</h3>
        {/* <div>
            <button onClick={countDecrease}>-</button>
            <input type="text" value={count} onChange={handleInputChange} />
            <button onClick={countIncrease}>+</button>
        </div> */}
        <div className="w-full flex items-center">
            <button 
            onClick={decrement} 
            className="w-11 text-xs font-medium px-3 py-3 rounded-2xl bg-blue-700 text-white hover:bg-gray-700 cursor-pointer"
            >-</button>

            <input 
            type="text" 
            className="w-14 h-8 text-3xl font-bold text-purple-700 mx-4 text-center" 
            value={count} 
            onChange={handleInputChange}
            />

            <button 
            onClick={increment} 
            className="w-11 text-xs font-medium px-3 py-3 rounded-2xl bg-blue-700 text-white  cursor-pointer hover:bg-gray-700"
            >+</button>
        </div>
        
        </>
    )
}

export default CounterAction;