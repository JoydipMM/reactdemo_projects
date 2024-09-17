import React, { useContext, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = (props) => {

    //const [count, setCount] = useState(0);
    const { cartItems, addToCart, removeFormCart } = useContext(StoreContext)

    if(props.category === "All" || props.category === props.item.category){
    return (
        <div key={props.item._id}>
                        <img src={props.item.image} style={{ 'width': '100px'}} />
                        {props.item._id} -- {props.item.name} -- ${props.item.price} -- {props.item.category}
                        <div>
                        {!cartItems[props.item._id]? <button onClick={()=>addToCart(props.item._id)}>+</button> 
                        :
                        <div>
                            <span onClick={()=>removeFormCart(props.item._id)}>-</span>
                            <span>{cartItems[props.item._id]}</span>
                            <span onClick={()=>addToCart(props.item._id)}>+</span>
                        </div>
                        }
                        </div>
                        <hr/>
                    </div>
    )
    }
}

export default FoodItem
