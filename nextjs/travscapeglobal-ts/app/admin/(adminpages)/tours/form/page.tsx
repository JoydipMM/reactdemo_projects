"use client";
import Image from "next/image";
import { useTourForm } from "../../../contexts/TourFormContext";
import { toast, ToastContainer } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const page = () => {

  const searchParam = useSearchParams();
  const paramsTourId = searchParam.get("id");

  const {
    data,
    isLoading,
    isDone,
    error,
    thumbImage,
    fileInputRef,
    fetchSingleTourData,
    setThumbImage,
    formDataEvent,
    createEvent,
    updateEvent,
  } = useTourForm();

  useEffect(()=>{
    if(paramsTourId){
      fetchSingleTourData(paramsTourId);
    }
  },[paramsTourId])
  
  return (
    <div>
      <ToastContainer theme="dark" />
      <h2>{paramsTourId ? `Update Tour` : `Add Tours`}</h2>
      {paramsTourId}
      <div>

        <form onSubmit={(e)=>{
          e.preventDefault();
          if(!paramsTourId){
          createEvent();
          }else{
            updateEvent(paramsTourId);
          }
          }}>
          <div>

            <div>
              <label>Title</label>
              <input 
              type="text" 
              onChange={
                (e)=>formDataEvent('title', e.target.value)
              }
              value={data?.title || ""}
              required
              />
            </div>
            
            <div>
              <label>Description</label>
              <input 
              type="text" 
              onChange={
                (e)=>formDataEvent('description', e.target.value)
              }
              value={data?.description || ""}
              required
              />
            </div>

            <div>
              <label>thumb Image</label>
              <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={
                (e)=>{ 
                  e.preventDefault(); 
                  const file = e.target.files?.[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setThumbImage(imageUrl); // This is a string
                  }
                  formDataEvent('thumbImage', file);
                }
              }
              required = {!paramsTourId}
               />
            </div>

            {thumbImage &&  
              <div>
                <Image src={thumbImage} alt="" width={70} height={70} />
              </div> 
            }

            <div>
              <button 
              disabled={isLoading}
              type="submit"
              >{isLoading ? "...Loading": `${paramsTourId ? "Update":"Create"}`}</button>
            </div>

            {error &&<div style={{color:"red", fontSize:"14px", fontWeight:"500"}}>{error}</div> }
            {/* {isDone &&<div style={{color:"green", fontSize:"14px", fontWeight:"500"}}>New Tour Added</div> } */}
          </div>
        </form>



      </div>
    </div>
  )
}

export default page
