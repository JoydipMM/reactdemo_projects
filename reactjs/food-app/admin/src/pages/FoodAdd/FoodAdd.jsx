import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {assets} from '../../assets/assets.js';
import { toast } from 'react-toastify';

const FoodAdd = ({url}) => {

    const [image, setImages] = useState(false);
    const [data, setData] = useState({
        name: "",
        category: "salad",
        price: "",
        description: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]:value }))
    }

    // useEffect(() => {
    //     console.log(data);
    // }, [data])

    const saveFood = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("category", data.category);
        formData.append("price", Number(data.price));
        formData.append("description", data.description);
        formData.append("image", image);

        const response = await axios.post( `${url}/api/food/add`, formData );
        if(response.data.success){
            setData({
                name: "",
                category: "salad",
                price: "",
                description: "",
            });
            setImages(false);
            toast.success(response.data.message);
        }else{
            toast.error(response.data.message);
        }
    } 

  return (
    <div>
      <h3>Food Add</h3>
      <form onSubmit={saveFood}>

        <div>
            <label>Title</label>
            <div>
                <input onChange={onChangeHandler} value={data.name} type="text" name="name" />
            </div>
        </div>

        <div>
            <label>Category</label>
            <div>
                <select onChange={onChangeHandler} value={data.category} name="category">
                    <option value="pizza">Pizza</option>
                    <option value="salad">Salad</option>
                    <option value="pasta">Pasta</option>
                </select>
            </div>
        </div>

        <div>
            <label>Price</label>
            <div>
                <input onChange={onChangeHandler} value={data.price} type="number" name="price" />
            </div>
        </div>

        <div>
            <label>Price</label>
            <div>
                <textarea onChange={onChangeHandler} value={data.description} name="description"></textarea>
            </div>
        </div>

        <div>
            <label htmlFor="foodimage">
                <img style={{ width: '100px'}} src={image? URL.createObjectURL(image) : assets.upload_area} alt="" />
                <input onChange={(e) => setImages(e.target.files[0])} type="file" name="image" id="foodimage" hidden required />
            </label>
        </div>

        <button type="sumbit">Save</button>


      </form>
    </div>
  )
}

export default FoodAdd
