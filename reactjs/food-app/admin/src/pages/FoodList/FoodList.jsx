import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';

const FoodList = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList =  async () => {
    const response = await axios.get(`${url}/api/food/list`);
    //console.log(response.data)
    if(response.data.success){
      setList(response.data.data);
    }else{
      toast.error("Error")
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id:foodId });
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
    }, [])

  return (
    <div>
      food list
      <table border="2" style={{ width: "80%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        { list.map((item) => {
          return(
              <tr key={item._id}>
                <td>{item._id}</td>
                <td><img width="50px" src={`${url}/images/${item.image}`} /></td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => removeFood(item._id)}>Delete</button>
                </td>
              </tr>
              )
            }
          ) 
          }
          </tbody>
      </table>
    </div>
  )
}

export default FoodList
