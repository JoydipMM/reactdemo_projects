import React from 'react'
import { useDataContext } from '../Context/DataContext';

const DataAdd = () => {
    const {data, setData} = useDataContext();
  return (
    <>
      <h3>Add Data</h3>
      <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
    </>
  )
}

export default DataAdd
