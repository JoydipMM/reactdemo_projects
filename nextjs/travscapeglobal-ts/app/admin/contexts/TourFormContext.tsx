"use client";

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { createNewTour } from "../crud/tour/wirte";
import { singleTour } from "../crud/tour/read";

interface TourFormContextType {
  data: Record<string, any>;
  isLoading: boolean;
  isDone: boolean;
  error: string | null;
  thumbImage: string | null;
  setThumbImage: Dispatch<SetStateAction<string | null>>;
  formDataEvent: (key: string, value: any) => void;
  createEvent: () => Promise<void>;
  fetchSingleTourData: (id: string) => Promise<void>;
  fileInputRef : any;
}

const TourFormContext = createContext<TourFormContextType | undefined>(undefined);

interface TourFormProviderProps {
  children: ReactNode;
}

export default function TourFormContextProvider({ children }: TourFormProviderProps) {

  const TOAST_SUCCESS_ID = "tour-fetch-toast";
  const TOAST_ERROR_ID = "tour-error-fetch-toast";
  const [data, setData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [thumbImage, setThumbImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
      const respons = await createNewTour({data:data, thumbImage:thumbImage});
      setIsDone(true);
      if(respons.data.success){
          toast.success(respons.data.msg);
          setData({});
          setThumbImage(null);
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
      }else{
          toast.error("Error");
      }

      setIsLoading(false);


    } catch (error: any) {
        setError(error?.message || "An error occurred");
    }
  };

  const fetchSingleTourData = async (id:string) =>{
    setError(null);
    setIsLoading(true);
    setIsDone(false);
    try {
      const respons = await singleTour(id);
      //console.log(respons.data);

      if(respons.data){
        setData(respons.data);
        setThumbImage(respons.data.thumbimage);
          toast.success("tour data fetched for update", {
            toastId: TOAST_SUCCESS_ID,
          });
      }else{
          toast.error("Unable to fetch tour data for update", {
            toastId: TOAST_ERROR_ID,
          });
      }

      setIsLoading(false);


    } catch (error: any) {
        setError(error?.message || "An error occurred");
    }
  }

  return (
    <TourFormContext.Provider
      value={{
        data,
        isLoading,
        isDone,
        error,
        thumbImage,
        fileInputRef,
        setThumbImage,
        formDataEvent,
        createEvent,
        fetchSingleTourData,
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