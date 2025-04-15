"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {

  const [ blogList, setBlogList ] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const fetchData = await axios.get("http://localhost:3000/api/tour");
      setBlogList(fetchData.data.tours);
    } catch (error: any) {
      setError(error?.message || "An error occurred");
    }
    setIsLoading(false);
  }

  useEffect(()=>{
    fetchBlogs();
  },[])

  return (
    <div>
      <h2>Tours</h2>
      <div>

      tour list<br/>

      {isLoading && <h2>Tours Loading....</h2>}
      {error && <h2>{error}</h2>}
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
