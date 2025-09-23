import { create } from "zustand";

const userCartStore = create((set)=>({
    cart: [],

    addToCart: (item) => set((state)=>({ cart:[...state.cart, item ] }))

}))

export default userCartStore;