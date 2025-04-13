"use client";
import Image from "next/image";
import { useTourForm } from "./contexts/TourFormContext";
import { toast, ToastContainer } from "react-toastify";

const page = () => {

  const {
    data,
    isLoading,
    isDone,
    error,
    thumbImage,
    fileInputRef,
    setThumbImage,
    formDataEvent,
    createEvent,
  } = useTourForm();
  
  return (
    <div>
      <ToastContainer theme="dark" />
      <h2>Add Tours</h2>
      <div>

        <form onSubmit={(e)=>{
          e.preventDefault();
          createEvent();
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
              required
               />
            </div>

            {thumbImage &&  
              <div>
                <Image src={thumbImage} alt="" width={70} height={70} />
              </div> 
            }

            <div>
              <button type="submit">Create</button>
            </div>

            {error}


          </div>
        </form>



      </div>
    </div>
  )
}

export default page
