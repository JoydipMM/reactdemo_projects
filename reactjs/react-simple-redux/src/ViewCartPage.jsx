import { useSelector } from "react-redux"

export default function ViewCartPage() {

    const getCartItem = useSelector((store)=> store.cart.items);
    console.log("Cart Items in ViewCartPage :", getCartItem);
    return (
        <div>
            <h2>View Cart Page</h2>
            <ul>
                {getCartItem.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}