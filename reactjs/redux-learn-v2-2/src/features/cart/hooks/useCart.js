import { useState, useEffect, useMemo } from 'react';

/*
perpose of this custom hook:
1. Keep an eye on local storage
2. We want to persist all the cart itself. Means if any changes in the cart then we update value in local storage
3. Sync accross tabs
*/

export const useCart = () => {

    // add to cart event
    const addToCart = (product) => {
        setCart((currentItem) => {
            // first we find the exiting item
            const exitingItem = currentItem.find((item) => item.id === product.id);

            // if the exiting item is found then we update the quantity
            if(exitingItem){
                // here we update the quantity with same id product
                return currentItem.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1}: item);
            }

            // if not exit then first we spread the current product and add quantity 1 by default
            return [...currentItem, {...product, quantity: 1}];
        });
    }

    // remove from cart event
    const removeFromCart = (productId) => {
        setCart((currentItem) => currentItem.filter((item) => item.id !== productId));
    }

    // update quantity event
    const updateQuantity = (productId, quantity) => {
        // fif the quantity is less than 1 then we return null / nothing
        if(quantity < 1) return;
        // if the quantity is greater than 1 then we update the quantity
        // first we map the current cart item then check if the id is same with product id then we update the quantity, else we return the same item
        setCart((currentItem) => currentItem.map((item) => item.id === productId ? {...item, quantity}: item));
    }

    // update total price
    // this is not required if we use react 19
    const total = useMemo(() => {
        return Number(cart.reduce((sum, item)=>{
            const itemTotal = item.price * (item.quantity || 0);
            return sum + itemTotal;
        }, 0).toFixed(2));
    }, [cart]);



    // 1. Keep an eye on local storage
    // ---------------------------------------------------
    // useState also can handle callback function. 
    // Here we use callback as a lasy loaded function
    // So when component load for the first time, we load cart from local storage if any data exists in loacal storage, else return empty array
    const [cart, setCart] = useState(() =>{
        try{
            const savedCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            return savedCart;
        }catch(error){
            console.error("failed to load cart");
            return [];
        }
    });


    // 2. Persist cart to local storage
    // ---------------------------------------------------
    // useEffect will run when cart changes and update local storage as well re-render the component
    useEffect(() => {
        try{
            localStorage.setItem("cart", JSON.stringify(cart));
        }catch(error){
            console.error("failed to save cart");
        }
    }, [cart]);


    // 3. Sync accross tabs
    // ---------------------------------------------------
    useEffect(() => {
        // This function get the value from local storage
        const handleStorage  = (e) => {
            if(e.key === "cart"){
                try{
                    setCart(JSON.parse(e.newValue || "[]"));
                }catch(error){
                    console.error("failed to sync cart");
                }
            }
        }

        // manuually trigger the handleStorage function when local storage changes
        window.addEventListener("storage", handleStorage);

        // cleanup for removeing the event listener if the component is unmounted/removed
        return () => window.removeEventListener("storage", handleStorage);

        /*
        ------------------------------------------------------------
        Note: Cleanup is required in order to avoid memory leaks
        ------------------------------------------------------------
        */
        
    }, []);

    // Return the required methodes which are required in cart page
    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total
    };
}