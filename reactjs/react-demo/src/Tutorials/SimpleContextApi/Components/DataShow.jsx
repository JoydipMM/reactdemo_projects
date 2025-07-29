import React from 'react'
import { useDataContext } from '../Context/DataContext'

const DataShow = () => {
    const {data} = useDataContext();
  return (
    <>
     <h3>Show Data</h3> 
     {data}
    </>
  )
}

export default DataShow
