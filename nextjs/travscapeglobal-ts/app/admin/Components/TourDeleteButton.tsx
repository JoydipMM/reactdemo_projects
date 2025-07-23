"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const TourDeleteButton = ({ id }: { id: string }) => {

    const TOAST_SUCCESS_ID = "tour-fetch-toast";
    const TOAST_ERROR_ID = "tour-error-fetch-toast";
    const route = useRouter();

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this tour?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/api/demoapi?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        //alert("Tour deleted successfully");
        //if (onDeleted) onDeleted(); // notify parent if provided
        toast.success("Tour deleted successfully", {
            toastId: TOAST_ERROR_ID,
        });
        route.refresh()
      } else {
        toast.error("Failed to delete tour", {
            toastId: TOAST_ERROR_ID,
        });
        //alert("Failed to delete tour");
      }
    } catch (error) {
      console.error("Delete error:", error);
      //alert("Error deleting tour");
      toast.error("Error deleting tour", {
        toastId: TOAST_ERROR_ID,
    });
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500">
      Delete
    </button>
  );
};

export default TourDeleteButton;
