"use client"
import { useRef, useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase/firebaseSetup";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";


const page = () => {
    const [data, setData] = useState<Record<string, any>>({});
    const [slugtitle, setSlug] = useState<string>("");
    const router = useRouter();
    const [thumbImage, setThumbImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const TOAST_SUCCESS_ID = "tour-fetch-toast";
    const TOAST_ERROR_ID = "tour-error-fetch-toast";

    const formDataEvent = (key: string, value: any) => {
        setData({ ...data,[key]: value });
    };

    const createEvent = async () => {
        console.log(data);
        if(!data?.title){
            toast.error("Title is required", {
                toastId: TOAST_ERROR_ID,
            });
            const slugTitle = data.title.trim().toLowerCase().replace(/\s+/g, '-');
            console.log(slugTitle);
            return;
            //throw new Error("Title is required");
            
        }
        if(!data?.description){
            toast.error("Description is required", {
                toastId: TOAST_ERROR_ID,
            });
            return;
        }
        if (!data?.thumbImage) {
        toast.error("Image is required", { toastId: TOAST_ERROR_ID });
        return;
        }

        


        setIsLoading(true);
        const imageRef = ref(storage, `uploads/${thumbImage}`);
        await uploadBytes(imageRef, data?.thumbImage);
        const thumbURL = await getDownloadURL(imageRef);
        
        // console.log("firebase Image URL ---- ", thumbURL);

        try {
            
            const createNewTour = await fetch("http://localhost:3000/api/demoapi/",{
                method:"POST",
                headers:{
                    "Content-type": "application/json",
                },
                body:JSON.stringify({title:data.title, slug:slugtitle, description:data.description, thumbimage:thumbURL }),
            })

            if(createNewTour.ok){
                setIsLoading(false);
                toast.success("Created", {
                    toastId: TOAST_SUCCESS_ID,
                });

                // ✅ Reset form fields
                setData({});
                setThumbImage(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
                
                //router.push("/admin/tournew");
            }else{
                toast.error("Error on create", {
                    toastId: TOAST_ERROR_ID,
                });
            }
        } catch (error) {

            toast.error("Error", {
                toastId: TOAST_ERROR_ID,
            });
        }
    }


    useEffect(() => {
  if (data.title) {
    const generatedSlug = data.title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9\-]/g, ''); // optional: remove special characters
    setSlug(generatedSlug);
    formDataEvent('slug', generatedSlug)
  } else {
    setSlug("");
  }
}, [data.title]);
  return (
    <div>
        <ToastContainer theme="dark" />
      Add New Tour<br/>
      <form onSubmit={
            (e)=>{ 
                e.preventDefault();
                createEvent();
            }
        }>
        <div>
            <label>Title</label>
            <input type="text" 
            value={data.title || ""}
            onChange={
                (e)=>formDataEvent('title', e.target.value)
              }/>
        </div>
        <div>
            <label>Slug</label>
            <input type="text" 
            value={slugtitle || ""}
            disabled={true}
            />
        </div>
        
        <div>
            <label>Description</label>
            <textarea 
            value={data.description || ""}
            onChange={
                (e)=>formDataEvent('description', e.target.value)
              }></textarea>
        </div>
        <div>
            <label>Image</label>
            <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
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
            />
            {thumbImage &&  
                <div>
                <Image src={thumbImage} alt="" width={70} height={70} />
                </div> 
            }
        </div>
        <div>
            <button disabled={isLoading} type="submit">{isLoading ? "Loading...." : "Create"}</button>
        </div>
      </form>
    </div>
  )
}

export default page