import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props)=> {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000/";
    const [token, setToken] = useState("");

    const addToCart = (itemId)=> {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({ ...prev, [itemId]:1}));
        }else{
            setCartItems((prev)=>({ ...prev, [itemId]:prev[itemId]+1}))
        }
    }

    const totalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>{ return(product._id === item)});
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const totalCartItem = () => {
        let totalCart = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                //console.log('ddf', totalCart+=cartItems[item])
                totalCart+=cartItems[item];
            }
        }
        return totalCart;
    }

    const removeFormCart = (itemId) => {
        setCartItems((prev)=>({ ...prev, [itemId]:prev[itemId]-1}))
    }

    const deleteFormCart = (itemId) => {
        setCartItems((prev)=>({ ...prev, [itemId]:0}))
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    // create variable and it will be object
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFormCart,
        totalCartAmount,
        totalCartItem,
        deleteFormCart,
        url,
        token,
        setToken

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
