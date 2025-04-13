"use client";

import { storage } from "@/lib/firebase/firebaseSetup";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { toast, ToastContainer } from "react-toastify";

interface TourFormContextType {
  data: Record<string, any>;
  isLoading: boolean;
  isDone: boolean;
  error: string | null;
  thumbImage: string | null;
  setThumbImage: Dispatch<SetStateAction<string | null>>;
  formDataEvent: (key: string, value: any) => void;
  createEvent: () => Promise<void>;
}

const TourFormContext = createContext<TourFormContextType | undefined>(undefined);

interface TourFormProviderProps {
  children: ReactNode;
}

export default function TourFormContextProvider({ children }: TourFormProviderProps) {
  const [data, setData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [thumbImage, setThumbImage] = useState<string | null>(null);

  const formDataEvent = (key: string, value: any) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const createEvent = async () => {
    setError(null);
    setIsLoading(true);
    setIsDone(false);
    try {

        if(!data?.title){
            throw new Error("Title is required")
        }
        if(!data?.description){
            throw new Error("description is required")
        }
        if(!data?.thumbImage){
            throw new Error("Thumb Image is required")
        }
      console.log("Form data ---- ", data);
      const imageRef = ref(storage, `uploads/${thumbImage}`);
      await uploadBytes(imageRef, data?.thumbImage);
      const thumbURL = getDownloadURL(imageRef);

      console.log("firebase Image URL ---- ", await thumbURL);

      setIsDone(true);

      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('thumbimage', await thumbURL);

      console.log(formData);
        const  respons = await axios.post("http://localhost:3000/api/tour", formData);
        if(respons.data.success){
            toast.success(respons.data.msg);
        }else{
            toast.error("Error");
        }


    } catch (error: any) {
        setError(error?.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TourFormContext.Provider
      value={{
        data,
        isLoading,
        isDone,
        error,
        thumbImage,
        setThumbImage,
        formDataEvent,
        createEvent,
      }}
    >
      {children}
    </TourFormContext.Provider>
  );
}


export const useTourForm = () => {
    const context = useContext(TourFormContext);
    if (!context) {
      throw new Error("useTourFormContext must be used within a TourFormContextProvider");
    }
    return context;
  };

// export const useTourFormContext = () => useContext(TourFormContext);