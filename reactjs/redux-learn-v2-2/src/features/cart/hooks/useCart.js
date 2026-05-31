import { useState, useEffect } from 'react';

/*
perpose of this custom hook:
1. Keep an eye on local storage
2. We want to persist all the cart itself. Means if any changes in the cart then we update value in local storage
3. Sync accross tabs
*/

export const useCart = () => {

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

    //return [cart, setCart];
}