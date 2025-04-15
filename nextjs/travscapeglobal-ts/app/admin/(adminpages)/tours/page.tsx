"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTours } from "../../crud/tour/read";

const page = () => {

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTours = async () => {
    const { data, isLoading, error } = await useTours();
    setTours(data || []);
    setLoading(isLoading);
    setError(error);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Tours</h2>
      <div>

      tour list<br/>
      
      {tours.map((tour:any, index:number)=> 
      <div key={index}>
      <Image src={tour.thumbimage} alt="" width={100} height={100} />
      {tour.title}<br/>
      {tour.description}
      <Link href={`/admin/tours/form?id=${tour._id}`} >Update</Link>
      <hr/>
      </div>
      )}



      </div>
    </div>
  )
}

export default page
