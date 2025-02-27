import React, {useState} from 'react';
import BlogItem from './BlogItem';
import {blogData} from '../data/data';


const BlogList = () => {

    const [ activeMenu, setActiveMenu ] = useState("All");

    
  return (
    <>
        <div className="inline-grid grid-cols-5 gap-4">
            <button type="button" className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium ${activeMenu==="All"?"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800":"text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
            `} onClick={()=>setActiveMenu("All")}>All</button>
            
            <button type="button" className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium ${activeMenu==="Teachnology"?"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800":"text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
            `} onClick={()=>setActiveMenu("Teachnology")}>Teachnology</button>

            <button type="button" className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium ${activeMenu==="Lifestyle"?"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800":"text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
            `} onClick={()=>setActiveMenu("Lifestyle")}>Lifestyle</button>

            <button type="button" className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium ${activeMenu==="Food"?"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800":"text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}
            `} onClick={()=>setActiveMenu("Food")}>Food</button>
        </div>
        <div className="inline-grid grid-cols-4 gap-4">
            {blogData.filter((item)=>activeMenu==="All"?true:item.category===activeMenu).map((item)=><BlogItem key={item.id} id={item.id} title={item.title} description={item.description} category={item.category} image={item.image} />)}
            
        </div>
    </>
  )
}

export default BlogList
