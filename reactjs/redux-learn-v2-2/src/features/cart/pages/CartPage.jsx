import React from 'react'
import CartItem from '@/features/cart/components/CartItem'

const CartPage = ({ cart, onUpdateQuantity, onRemove, total }) => {

    if (cart?.length === 0) return <div>Cart is empty</div>;


    return (
        <div>
            <h3>Cart Items</h3>
            {cart?.map((item) =>(
                <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemove}
                />
            ))}
            {/* <div><b>Total: ${typeof total === 'string' ? total : total.toFixed(2)}</b></div> */}
        </div>
    )
}

export default CartPage
