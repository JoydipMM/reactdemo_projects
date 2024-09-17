import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div>
      <h2>Menu Categories</h2>
      <div className="cat-wrap">
        { menu_list.map((item, index) => {
            return <div className="cat-frame" key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
                <img className={category===item.menu_name?'active':''} src={item.menu_image} />
                <span>{item.menu_name}</span>
            </div>;
        }) }
      </div>
    </div>
  )
}

export default ExploreMenu
