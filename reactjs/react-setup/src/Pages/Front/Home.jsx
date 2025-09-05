import React, {useEffect, useState} from 'react'
import {getPosts} from "../../api";

const Home = () => {

  const [ data, setData ] = useState(null) 

  useEffect(()=>{
    getPosts().then(posts => setData(posts))
  },[]);


  return (
    <>
      Home
      <br/>

      {
        data ? 
        data.map((d)=><li key={d.id}>{d.title}</li>)
        : <><p>No Data</p></>
      }




    </>
  )
}

export default Home