"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {

  const [ blogList, setBlogList ] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    try {
      const fetchData = await axios.get("http://localhost:3000/api/tour");
      setBlogList(fetchData.data.tours)
    } catch (error: any) {
      setError(error?.message || "An error occurred");
    }
  }

  useEffect(()=>{
    fetchBlogs();
  },[])

  return (
    <div>
      <h2>Tours</h2>
      <div>

      tour list<br/>


      {blogList.map((tour:any, index:number)=> 
      <div key={index}>
      <Image src={tour.thumbimage} alt="" width={100} height={100} />
      {tour.title}<br/>
      {tour.description}<hr/>
      </div>
      )}



      </div>
    </div>
  )
}

export default page
