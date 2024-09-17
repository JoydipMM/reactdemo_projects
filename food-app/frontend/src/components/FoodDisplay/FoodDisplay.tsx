import React, { useContext, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)
    //console.log(food_list);

  return (
    <div>
     {food_list.map((item, index)=> {

        // if(category === "All" || category === item.category){

            return <FoodItem category={category} key={index} item={item} />
        // }

     })}
    </div>
  )
}

export default FoodDisplay
