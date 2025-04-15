import axios from "axios";
import { storage } from "@/lib/firebase/firebaseSetup";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface TourData {
    data:any,
    thumbImage: string | null;
    //respons: string | null;
  }

export const createNewTour = async ({ data, thumbImage }: TourData) => {

    if(!data?.title){
        throw new Error("Title is required")
    }
    if(!data?.description){
        throw new Error("description is required")
    }
    if(!data?.thumbImage){
        throw new Error("Thumb Image is required")
    }
    //console.log("Form data ---- ", data);
    const imageRef = ref(storage, `uploads/${thumbImage}`);
    await uploadBytes(imageRef, data?.thumbImage);
    const thumbURL = getDownloadURL(imageRef);

    //console.log("firebase Image URL ---- ", await thumbURL);

    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('thumbimage', await thumbURL);

    //console.log(formData);
    const  respons = await axios.post("http://localhost:3000/api/tour", formData);

    return respons;

}